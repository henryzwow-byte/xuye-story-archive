(function () {
  "use strict";

  const config = window.STORY_ANALYTICS_CONFIG || {};
  const measurementId = /^G-[A-Z0-9]+$/i.test(config.measurementId || "") ? config.measurementId : "";
  const localKey = "story-analytics-local-v1";
  const consentKey = "story-analytics-consent-v1";
  const pending = [];
  const params = new URLSearchParams(location.search);
  const device = matchMedia("(max-width: 700px)").matches ? "mobile" : matchMedia("(max-width: 1100px)").matches ? "tablet" : "desktop";
  let referrerHost = "";
  try { referrerHost = document.referrer ? new URL(document.referrer).hostname.toLowerCase() : ""; } catch {}
  const facebookReferrer = /(^|\.)facebook\.com$|(^|\.)fb\.com$|(^|\.)instagram\.com$/.test(referrerHost);
  const campaign = {
    source: params.get("utm_source") || (params.has("fbclid") || facebookReferrer ? "facebook" : "direct"),
    medium: params.get("utm_medium") || (params.has("fbclid") ? "social" : "none"),
    campaign: params.get("utm_campaign") || "",
    content: params.get("utm_content") || "",
    fbclid_present: params.has("fbclid")
  };

  function readLocal() {
    try { return JSON.parse(localStorage.getItem(localKey) || "{}") || {}; } catch { return {}; }
  }

  function writeLocal(value) {
    try { localStorage.setItem(localKey, JSON.stringify(value)); } catch {}
  }

  function increment(object, key, amount = 1) {
    object[key] = (Number(object[key]) || 0) + amount;
  }

  function recordLocal(name, detail) {
    const data = readLocal();
    data.events ||= {};
    data.stories ||= {};
    data.sources ||= {};
    data.campaigns ||= {};
    increment(data.events, name);
    if (name === "page_view") {
      increment(data.sources, campaign.source || "direct");
      if (campaign.campaign) increment(data.campaigns, campaign.campaign);
    }
    const slug = detail.story_slug;
    if (slug) {
      const story = data.stories[slug] ||= { views: 0, illustrationClicks: 0, shareClicks: 0, milestones: {}, activeSeconds: 0, lastSeen: "" };
      if (name === "story_view") increment(story, "views");
      if (name === "illustration_click") increment(story, "illustrationClicks");
      if (name === "share_click") increment(story, "shareClicks");
      if (name === "reading_milestone") increment(story.milestones, String(detail.percent || 0));
      if (name === "reading_time") increment(story, "activeSeconds", Number(detail.active_seconds) || 0);
      story.lastSeen = new Date().toISOString();
    }
    data.lastUpdated = new Date().toISOString();
    data.device = device;
    data.language = document.documentElement.lang || navigator.language || "en";
    writeLocal(data);
  }

  function hasConsent() {
    if (!measurementId) return false;
    if (config.consentRequired === false) return true;
    try { return localStorage.getItem(consentKey) === "granted"; } catch { return false; }
  }

  function loadGoogleAnalytics() {
    if (!measurementId || window.gtag) return;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", measurementId, {
      send_page_view: false,
      anonymize_ip: true,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      debug_mode: Boolean(config.debug)
    });
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.appendChild(script);
  }

  function track(name, detail = {}) {
    const payload = {
      ...detail,
      page_type: document.body?.dataset.page || "unknown",
      language: document.documentElement.lang || "en",
      device_type: device,
      traffic_source: campaign.source,
      traffic_medium: campaign.medium,
      traffic_campaign: campaign.campaign,
      traffic_content: campaign.content,
      facebook_click: campaign.fbclid_present
    };
    recordLocal(name, payload);
    if (hasConsent()) {
      loadGoogleAnalytics();
      window.gtag?.("event", name, payload);
    } else if (measurementId) {
      let saved = null;
      try { saved = localStorage.getItem(consentKey); } catch {}
      if (!saved) pending.push([name, payload]);
    }
  }

  function consent(value) {
    try { localStorage.setItem(consentKey, value ? "granted" : "denied"); } catch {}
    document.querySelector(".analytics-consent")?.remove();
    if (value) {
      loadGoogleAnalytics();
      pending.splice(0).forEach(([name, payload]) => window.gtag?.("event", name, payload));
      track("analytics_consent", { choice: "granted" });
    } else pending.length = 0;
  }

  function showConsent() {
    if (!measurementId || config.consentRequired === false) return;
    let saved = null;
    try { saved = localStorage.getItem(consentKey); } catch {}
    if (saved) {
      if (saved === "granted") loadGoogleAnalytics();
      return;
    }
    const zh = document.documentElement.lang?.startsWith("zh");
    const banner = document.createElement("aside");
    banner.className = "analytics-consent";
    banner.setAttribute("aria-label", zh ? "访问数据设置" : "Audience measurement settings");
    banner.innerHTML = `<div><strong>${zh ? "帮助我们改善阅读体验" : "Help us improve the reading experience"}</strong><p>${zh ? "经你同意后，我们会以汇总方式统计访问来源、设备类型和阅读进度，不收集可直接识别身份的信息。" : "With your permission, we measure referral source, device type and reading progress in aggregate. We do not collect directly identifying information."}</p></div><div><button type="button" data-consent="no">${zh ? "暂不" : "Not now"}</button><button type="button" data-consent="yes">${zh ? "允许统计" : "Allow analytics"}</button></div>`;
    document.body.appendChild(banner);
    banner.querySelector('[data-consent="no"]').addEventListener("click", () => consent(false));
    banner.querySelector('[data-consent="yes"]').addEventListener("click", () => consent(true));
  }

  window.StoryAnalytics = {
    track,
    getLocal: readLocal,
    enabled: Boolean(measurementId),
    campaign,
    device
  };

  document.addEventListener("DOMContentLoaded", () => {
    showConsent();
    track("page_view", { page_location: location.href.split("#")[0], page_title: document.title, referrer_host: (() => { try { return document.referrer ? new URL(document.referrer).hostname : ""; } catch { return ""; } })() });
  }, { once: true });
})();

(function () {
  "use strict";

  const config = window.STORY_ANALYTICS_CONFIG || {};
  const siteConfig = window.STORY_SITE_CONFIG || {};
  const measurementId = /^G-[A-Z0-9]+$/i.test(config.measurementId || "") ? config.measurementId : "";
  const metaPixelId = /^\d{5,20}$/.test(config.metaPixelId || "") ? config.metaPixelId : "";
  const advertisingConfigured = siteConfig.adsEnabled === true && /^ca-pub-\d+$/.test(siteConfig.publisherId || "");
  const localKey = "story-analytics-local-v1";
  const legacyConsentKey = "story-analytics-consent-v1";
  const consentKey = "story-consent-v2";
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

  function readConsent() {
    try {
      const saved = JSON.parse(localStorage.getItem(consentKey) || "null");
      if (saved && typeof saved.analytics === "boolean" && typeof saved.marketing === "boolean") {
        return { analytics: saved.analytics, marketing: saved.marketing, saved: true };
      }
      const legacy = localStorage.getItem(legacyConsentKey);
      if (legacy === "granted") return { analytics: true, marketing: false, saved: true };
      if (legacy === "denied") return { analytics: false, marketing: false, saved: true };
    } catch {}
    return { analytics: false, marketing: false, saved: false };
  }

  function writeConsent(value) {
    try {
      localStorage.setItem(consentKey, JSON.stringify({ analytics: Boolean(value.analytics), marketing: Boolean(value.marketing), updated: new Date().toISOString() }));
      localStorage.removeItem(legacyConsentKey);
    } catch {}
  }

  function analyticsGranted() {
    if (!measurementId) return false;
    if (config.consentRequired === false) return true;
    return readConsent().analytics;
  }

  function marketingGranted() {
    if (!metaPixelId) return false;
    if (config.marketingConsentRequired === false) return true;
    return readConsent().marketing;
  }

  function prepareGoogleConsent() {
    if (!measurementId || window.__storyGooglePrepared) return;
    window.__storyGooglePrepared = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag("consent", "default", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      wait_for_update: 500
    });
  }

  function updateGoogleConsent(granted) {
    if (!measurementId) return;
    prepareGoogleConsent();
    window.gtag("consent", "update", {
      analytics_storage: granted ? "granted" : "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied"
    });
  }

  function loadGoogleAnalytics() {
    if (!measurementId || window.__storyGoogleLoaded || !analyticsGranted()) return;
    window.__storyGoogleLoaded = true;
    prepareGoogleConsent();
    updateGoogleConsent(true);
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

  function loadMetaPixel() {
    if (!metaPixelId || window.__storyMetaLoaded || !marketingGranted()) return;
    window.__storyMetaLoaded = true;
    if (!window.fbq) {
      const fbq = window.fbq = function () {
        if (fbq.callMethod) fbq.callMethod.apply(fbq, arguments);
        else fbq.queue.push(arguments);
      };
      if (!window._fbq) window._fbq = fbq;
      fbq.push = fbq;
      fbq.loaded = true;
      fbq.version = "2.0";
      fbq.queue = [];
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://connect.facebook.net/en_US/fbevents.js";
      document.head.appendChild(script);
    }
    window.fbq("consent", "grant");
    window.fbq("init", metaPixelId);
  }

  function sendGoogle(name, payload) {
    if (!analyticsGranted()) return;
    loadGoogleAnalytics();
    window.gtag?.("event", name, payload);
  }

  function compactMetaPayload(payload) {
    const result = {
      content_name: payload.story_title || payload.page_title || document.title,
      content_category: payload.story_category || payload.page_type || "story_archive",
      file_no: payload.file_no || "",
      story_slug: payload.story_slug || "",
      chapter_number: Number(payload.chapter_number) || undefined,
      chapter_count: Number(payload.chapter_count) || undefined,
      completion_percent: Number(payload.percent || payload.completion_percent) || undefined,
      method: payload.method || undefined,
      placement: payload.placement || undefined,
      traffic_campaign: payload.traffic_campaign || undefined,
      traffic_content: payload.traffic_content || undefined
    };
    return Object.fromEntries(Object.entries(result).filter(([, value]) => value !== "" && value !== undefined));
  }

  function sendMeta(name, payload) {
    if (!marketingGranted()) return;
    loadMetaPixel();
    if (!window.fbq) return;
    const meta = compactMetaPayload(payload);
    if (name === "page_view") window.fbq("track", "PageView");
    else if (name === "story_view") window.fbq("track", "ViewContent", meta);
    else if (name === "reading_milestone") window.fbq("trackCustom", Number(payload.percent) === 100 ? "StoryComplete" : "ReadingMilestone", meta);
    else if (name === "share_click") window.fbq("trackCustom", "StoryShare", meta);
    else if (name === "illustration_click") window.fbq("trackCustom", "IllustrationOpen", meta);
    else if (name === "story_card_click") window.fbq("trackCustom", "StoryCardClick", meta);
    else if (name === "bookmark_toggle") window.fbq("trackCustom", "StoryBookmark", meta);
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
    const consent = readConsent();
    if (analyticsGranted()) sendGoogle(name, payload);
    if (marketingGranted()) sendMeta(name, payload);
    if ((measurementId || metaPixelId) && !consent.saved) pending.push([name, payload]);
  }

  function applyConsent(value) {
    const choice = { analytics: Boolean(value.analytics), marketing: Boolean(value.marketing) };
    writeConsent(choice);
    document.querySelector(".analytics-consent")?.remove();
    updateGoogleConsent(choice.analytics);
    if (choice.analytics) loadGoogleAnalytics();
    if (choice.marketing) loadMetaPixel();
    else window.fbq?.("consent", "revoke");
    pending.splice(0).forEach(([name, payload]) => {
      if (choice.analytics) sendGoogle(name, payload);
      if (choice.marketing) sendMeta(name, payload);
    });
    recordLocal("consent_update", { choice: choice.analytics && choice.marketing ? "all" : choice.analytics ? "analytics" : "essential" });
    if (choice.analytics) sendGoogle("consent_update", { choice: choice.analytics && choice.marketing ? "all" : "analytics" });
    window.dispatchEvent(new CustomEvent("story-consent-updated", { detail: choice }));
  }

  function showConsent(force = false) {
    if (!measurementId && !metaPixelId && !advertisingConfigured) return;
    const saved = readConsent();
    if (!force && saved.saved) {
      if (saved.analytics) loadGoogleAnalytics();
      if (saved.marketing) loadMetaPixel();
      return;
    }
    document.querySelector(".analytics-consent")?.remove();
    const zh = document.documentElement.lang?.startsWith("zh");
    const banner = document.createElement("aside");
    banner.className = "analytics-consent";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-modal", "true");
    banner.setAttribute("aria-label", zh ? "隐私与数据设置" : "Privacy and data choices");
    banner.innerHTML = `<div><strong>${zh ? "选择你的隐私设置" : "Choose your privacy settings"}</strong><p>${zh ? "必要功能始终启用。分析统计帮助我们了解阅读进度；营销统计用于衡量 Facebook 与 Instagram 引流。只有你同意后，相应服务才会加载。我们不发送故事正文、姓名或电子邮箱。" : "Essential functions are always on. Analytics helps us understand reading progress; marketing measurement evaluates Facebook and Instagram referrals. Each provider loads only after your choice. We do not send story text, names or email addresses."}</p></div><div><button type="button" data-consent="essential">${zh ? "仅必要" : "Essential only"}</button><button type="button" data-consent="analytics">${zh ? "仅分析" : "Analytics only"}</button><button type="button" data-consent="all">${zh ? "全部允许" : "Allow all"}</button></div>`;
    document.body.appendChild(banner);
    banner.querySelector('[data-consent="essential"]').addEventListener("click", () => applyConsent({ analytics: false, marketing: false }));
    banner.querySelector('[data-consent="analytics"]').addEventListener("click", () => applyConsent({ analytics: true, marketing: false }));
    banner.querySelector('[data-consent="all"]').addEventListener("click", () => applyConsent({ analytics: true, marketing: true }));
    banner.querySelector("button")?.focus({ preventScroll: true });
  }

  function installConsentLink() {
    if (!measurementId && !metaPixelId && !advertisingConfigured) return;
    const nav = document.querySelector(".reader-footer nav, .site-footer nav");
    if (!nav || nav.querySelector("[data-privacy-choices]")) return;
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.privacyChoices = "true";
    button.className = "privacy-choices";
    button.textContent = document.documentElement.lang?.startsWith("zh") ? "隐私设置" : "Privacy choices";
    button.addEventListener("click", () => showConsent(true));
    nav.appendChild(button);
  }

  window.StoryAnalytics = {
    track,
    getLocal: readLocal,
    getConsent: readConsent,
    openConsent: () => showConsent(true),
    enabled: Boolean(measurementId || metaPixelId),
    providers: { ga4: Boolean(measurementId), metaPixel: Boolean(metaPixelId) },
    campaign,
    device
  };

  document.addEventListener("DOMContentLoaded", () => {
    prepareGoogleConsent();
    const saved = readConsent();
    if (saved.analytics || config.consentRequired === false) loadGoogleAnalytics();
    if (saved.marketing || config.marketingConsentRequired === false) loadMetaPixel();
    showConsent();
    installConsentLink();
    track("page_view", { page_location: location.href.split("#")[0], page_title: document.title, referrer_host: (() => { try { return document.referrer ? new URL(document.referrer).hostname : ""; } catch { return ""; } })() });
  }, { once: true });
})();

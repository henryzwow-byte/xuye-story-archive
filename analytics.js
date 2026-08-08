(function () {
  "use strict";

  const config = window.STORY_ANALYTICS_CONFIG || {};
  const siteConfig = window.STORY_SITE_CONFIG || {};
  const measurementId = /^G-[A-Z0-9]+$/i.test(config.measurementId || "") ? config.measurementId : "";
  const metaPixelId = /^\d{5,20}$/.test(config.metaPixelId || "") ? config.metaPixelId : "";
  const advertisingConfigured = siteConfig.adsEnabled === true && /^ca-pub-\d+$/.test(siteConfig.publisherId || "");
  const localKey = "story-analytics-local-v1";
  const legacyConsentKey = "story-analytics-consent-v1";
  const previousConsentKey = "story-consent-v2";
  const consentKey = "story-consent-v3";
  const consentPolicyVersion = "2026-08-07-meta-v1";
  const consentLifetimeMs = 180 * 24 * 60 * 60 * 1000;
  const configuredMetaPages = Array.isArray(config.metaPixelPageAllowlist) ? config.metaPixelPageAllowlist : ["home", "library"];
  const allowedMetaPages = new Set(configuredMetaPages.map((value) => String(value || "").trim()).filter(Boolean));
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

  function currentPageType() {
    return document.body?.dataset.page || "unknown";
  }

  function metaTrackingAllowed() {
    return allowedMetaPages.has(currentPageType());
  }

  function consentScope() {
    return [
      consentPolicyVersion,
      `ga:${Boolean(measurementId)}`,
      `meta:${Boolean(metaPixelId)}`,
      `ads:${Boolean(advertisingConfigured)}`
    ].join("|");
  }

  function readConsent() {
    try {
      const saved = JSON.parse(localStorage.getItem(consentKey) || "null");
      const expiresAt = Date.parse(saved?.expires || "");
      if (
        saved &&
        saved.scope === consentScope() &&
        typeof saved.analytics === "boolean" &&
        typeof saved.marketing === "boolean" &&
        Number.isFinite(expiresAt) &&
        expiresAt > Date.now()
      ) return { analytics: saved.analytics, marketing: saved.marketing, saved: true, updated: saved.updated, expires: saved.expires };
    } catch {}
    return { analytics: false, marketing: false, saved: false };
  }

  function writeConsent(value) {
    try {
      const now = new Date();
      localStorage.setItem(consentKey, JSON.stringify({
        analytics: Boolean(value.analytics),
        marketing: Boolean(value.marketing),
        scope: consentScope(),
        policyVersion: consentPolicyVersion,
        updated: now.toISOString(),
        expires: new Date(now.getTime() + consentLifetimeMs).toISOString()
      }));
      localStorage.removeItem(legacyConsentKey);
      localStorage.removeItem(previousConsentKey);
    } catch {}
  }

  function analyticsGranted() {
    if (!measurementId) return false;
    return readConsent().analytics;
  }

  function marketingGranted() {
    if (!metaPixelId || !metaTrackingAllowed()) return false;
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
    if (!metaPixelId || !metaTrackingAllowed() || window.__storyMetaLoaded || !marketingGranted()) return;
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

  function clearMetaCookies() {
    ["_fbp", "_fbc"].forEach((name) => {
      document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
      if (location.hostname && location.hostname !== "localhost") {
        document.cookie = `${name}=; Max-Age=0; path=/; domain=.${location.hostname}; SameSite=Lax`;
      }
    });
  }

  function sendGoogle(name, payload) {
    if (!analyticsGranted()) return;
    loadGoogleAnalytics();
    window.gtag?.("event", name, payload);
  }

  function sendMeta(name) {
    if (!marketingGranted()) return;
    loadMetaPixel();
    if (!window.fbq) return;
    if (name === "page_view") window.fbq("track", "PageView");
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
    if (analyticsGranted()) sendGoogle(name, payload);
    if (marketingGranted()) sendMeta(name);
  }

  function applyConsent(value) {
    const previous = readConsent();
    const choice = {
      analytics: Boolean(value.analytics && measurementId),
      marketing: Boolean(value.marketing && (metaPixelId || advertisingConfigured))
    };
    writeConsent(choice);
    document.querySelector(".analytics-consent")?.remove();
    updateGoogleConsent(choice.analytics);
    if (choice.analytics) loadGoogleAnalytics();
    if (choice.marketing) loadMetaPixel();
    else {
      window.fbq?.("consent", "revoke");
      clearMetaCookies();
    }
    const currentPage = { page_location: location.href.split("#")[0], page_title: document.title, page_type: currentPageType() };
    if (choice.analytics && !previous.analytics) sendGoogle("page_view", currentPage);
    if (choice.marketing && !previous.marketing) sendMeta("page_view");
    recordLocal("consent_update", { choice: choice.analytics && choice.marketing ? "all" : choice.analytics ? "analytics" : choice.marketing ? "marketing" : "essential" });
    if (choice.analytics) sendGoogle("consent_update", { choice: choice.analytics && choice.marketing ? "all" : "analytics" });
    window.dispatchEvent(new CustomEvent("story-consent-updated", { detail: choice }));
  }

  function showConsent(force = false) {
    const choicesAvailable = Boolean(measurementId || metaPixelId || advertisingConfigured);
    if (!force && !choicesAvailable) return;
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
    const analyticsAvailable = Boolean(measurementId);
    const marketingAvailable = Boolean(metaPixelId || advertisingConfigured);
    const privacyUrl = `privacy.html?lang=${zh ? "zh" : "en"}`;
    banner.innerHTML = `<div class="consent-copy"><strong>${zh ? "选择你的隐私设置" : "Choose your privacy settings"}</strong><p>${zh ? "必要的本地存储用于语言、阅读进度和你的隐私选择。可选服务默认关闭；Meta Pixel 只会在你明确允许营销 Cookie 后加载，并且不会在单篇故事页加载。" : "Essential local storage supports language, reading progress and your privacy choice. Optional services are off by default. Meta Pixel loads only after explicit marketing consent and never loads on individual story pages."}</p><a href="${privacyUrl}">${zh ? "阅读隐私与 Cookie 政策" : "Read the Privacy & Cookie Policy"}</a></div><form class="consent-form"><label><input type="checkbox" checked disabled><span><b>${zh ? "必要" : "Essential"}</b><small>${zh ? "始终启用；不会发送给 Meta。" : "Always on; not sent to Meta."}</small></span></label><label><input type="checkbox" data-consent-toggle="analytics" ${saved.analytics ? "checked" : ""} ${analyticsAvailable ? "" : "disabled"}><span><b>${zh ? "受众分析" : "Audience analytics"}</b><small>${analyticsAvailable ? (zh ? "用于汇总阅读表现。" : "Measures aggregate reading performance.") : (zh ? "当前未配置。" : "Not currently configured.")}</small></span></label><label><input type="checkbox" data-consent-toggle="marketing" ${saved.marketing ? "checked" : ""} ${marketingAvailable ? "" : "disabled"}><span><b>${zh ? "营销与 Meta Pixel" : "Marketing & Meta Pixel"}</b><small>${marketingAvailable ? (zh ? "用于 Facebook/Instagram 广告归因，仅限非故事页 PageView。" : "Facebook/Instagram attribution; non-story PageView only.") : (zh ? "当前未配置；填写 Pixel ID 后会重新征求同意。" : "Not configured; consent will be requested again after a Pixel ID is added.")}</small></span></label><div class="consent-actions"><button type="button" data-consent="essential">${zh ? "拒绝非必要" : "Reject non-essential"}</button><button type="submit" data-consent="save">${zh ? "保存选择" : "Save choices"}</button><button type="button" data-consent="all">${zh ? "全部允许" : "Allow all"}</button></div></form>`;
    document.body.appendChild(banner);
    banner.querySelector('[data-consent="essential"]').addEventListener("click", () => applyConsent({ analytics: false, marketing: false }));
    banner.querySelector("form").addEventListener("submit", (event) => {
      event.preventDefault();
      applyConsent({
        analytics: banner.querySelector('[data-consent-toggle="analytics"]')?.checked,
        marketing: banner.querySelector('[data-consent-toggle="marketing"]')?.checked
      });
    });
    banner.querySelector('[data-consent="all"]').addEventListener("click", () => applyConsent({ analytics: analyticsAvailable, marketing: marketingAvailable }));
    banner.querySelector("button")?.focus({ preventScroll: true });
  }

  function installConsentLink() {
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
    if (saved.analytics) loadGoogleAnalytics();
    if (saved.marketing) loadMetaPixel();
    showConsent();
    installConsentLink();
    document.addEventListener("click", (event) => {
      if (event.target.closest?.("[data-open-privacy]")) showConsent(true);
    });
    track("page_view", { page_location: location.href.split("#")[0], page_title: document.title, referrer_host: (() => { try { return document.referrer ? new URL(document.referrer).hostname : ""; } catch { return ""; } })() });
  }, { once: true });
})();

/*
 * Audience measurement providers.
 *
 * Add a GA4 Measurement ID (for example G-XXXXXXXXXX) and/or a numeric Meta
 * Pixel ID after those properties have been created. Empty IDs keep each
 * provider completely disabled: no provider script, cookie or request loads.
 */
window.STORY_ANALYTICS_CONFIG = {
  measurementId: "",
  metaPixelId: "",
  /*
   * Meta measurement is intentionally limited to these non-story pages.
   * Individual story URLs and titles may refer to health, pregnancy, abuse,
   * disability or other sensitive themes and must not be sent as Pixel data.
   */
  metaPixelPageAllowlist: ["home", "library"],
  debug: false
};

/*
 * Public site and advertising settings.
 *
 * adLayoutEnabled controls the clearly labelled house placeholders only.
 * It does not contact an advertising provider or set advertising cookies.
 *
 * For Google AdSense, add the ca-pub ID and the numeric slot ID for each
 * placement after approval. A missing slot remains a calm, clearly labelled
 * house placement instead of leaving a broken blank area.
 */
window.STORY_SITE_CONFIG = {
  adLayoutEnabled: true,
  adsEnabled: false,
  adProvider: "adsense",
  publisherId: "",
  adConsentRequired: true,
  adSlots: {
    homeTop: "",
    homeDiscovery: "",
    libraryTop: "",
    libraryInfeed: "",
    librarySidebar: "",
    libraryFooter: "",
    storyTop: "",
    storyInline: "",
    storySidebar: "",
    railLeft: "",
    railRight: "",
    authorTop: "",
    authorInfeed: "",
    infoInline: "",
    infoFooter: "",
    analyticsTop: "",
    notFoundFooter: ""
  },
  businessEmail: "",
  businessContactUrl: "https://github.com/henryzwow-byte/xuye-story-archive/issues/new"
};

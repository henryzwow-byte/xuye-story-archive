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
  consentRequired: true,
  marketingConsentRequired: true,
  debug: false
};

/*
 * Public site and advertising settings.
 *
 * Keep adLayoutEnabled false during editorial and advertising review. Turn it
 * on only when real inventory is ready; empty house placements should not be
 * shown to first-time readers.
 *
 * For Google AdSense, add the ca-pub ID and the numeric slot ID for each
 * placement after approval. A missing slot remains a calm, clearly labelled
 * house placement instead of leaving a broken blank area.
 */
window.STORY_SITE_CONFIG = {
  adLayoutEnabled: false,
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

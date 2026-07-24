/*
 * Add a GA4 Measurement ID (for example G-XXXXXXXXXX) to enable worldwide,
 * aggregate reporting. With an empty ID, no analytics request is sent.
 */
window.STORY_ANALYTICS_CONFIG = {
  measurementId: "",
  consentRequired: true,
  debug: false
};

/*
 * Public site and advertising settings.
 *
 * adLayoutEnabled keeps the carefully positioned advertising inventory visible
 * while the site is waiting for provider approval. Real third-party requests
 * are never sent until adsEnabled is true and valid provider IDs are supplied.
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
  businessEmail: ""
};

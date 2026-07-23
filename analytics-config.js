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
 * Public site settings. Keep ads disabled until an advertising provider has
 * approved the site and real ad code is installed. Add the owner's public
 * business email before enabling advertising.
 */
window.STORY_SITE_CONFIG = {
  adsEnabled: false,
  businessEmail: ""
};

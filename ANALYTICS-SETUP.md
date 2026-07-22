# Story Archive analytics setup

The site already records the complete event plan locally and is ready to send
aggregate events to Google Analytics 4. No external request is made while the
measurement ID is blank.

## Activate worldwide reporting

1. Create a Google Analytics 4 web data stream for
   `https://henryzwow-byte.github.io/xuye-story-archive/`.
2. Copy its Measurement ID, which starts with `G-`.
3. Open `analytics-config.js` and place the ID in `measurementId`.
4. Publish that one-file change.

The consent banner appears automatically after activation. Analytics is loaded
only after consent where consent is required.

## Reports and events

- Story visits: `story_view`, grouped by `story_slug` and `file_no`.
- Facebook traffic: traffic source/campaign/content plus `facebook_click`.
- Country, language and device: GA4 demographic/technology dimensions plus the
  `language` and `device_type` event parameters.
- 25/50/75/100% reading: `reading_milestone` and `percent`.
- Average reading time: `reading_time` and `active_seconds`.
- Completion ranking: `reading_milestone` where `percent=100`, divided by
  `story_view` for each `story_slug`.
- Illustration click-through: `illustration_click` divided by `story_view`.
- Share clicks: `share_click`, grouped by `method`.
- Facebook post comparison: add `utm_source=facebook`, `utm_campaign=...` and
  `utm_content=...` to each shared link, then compare campaign/content reports.

Do not place names, email addresses, story text or other personal information in
UTM parameters.

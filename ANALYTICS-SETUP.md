# Story Archive analytics and Meta Pixel setup

The site records its event plan locally and is ready to send privacy-controlled
events to Google Analytics 4 and Meta Pixel. No external analytics request,
provider script or provider cookie is created while the corresponding ID is
blank.

## Activate GA4 worldwide reporting

1. Create a Google Analytics 4 web data stream for
   `https://henryzwow-byte.github.io/xuye-story-archive/`.
2. Copy its Measurement ID, which starts with `G-`.
3. Open `analytics-config.js` and place the ID in `measurementId`.
4. Publish that one-file change.

The consent banner appears automatically after activation. GA4 loads only after
the reader chooses **Analytics only** or **Allow all**. Google advertising and
personalisation signals remain disabled in the site configuration.

## Activate Meta Pixel

1. In Meta Events Manager, choose **Connect data > Web** and create a dataset / Pixel.
2. Copy its numeric Pixel ID.
3. Open `analytics-config.js` and place the ID in `metaPixelId`.
4. Publish that one-file change.

Meta Pixel loads only after the reader chooses **Allow all**. The integration
sends `PageView`, `ViewContent`, reading milestones, completed readings, story
shares, illustration opens, card clicks and bookmarks. It never sends story
text, names, email addresses or form contents.

The footer privacy link lets a reader reopen the choices later. Choosing
**Essential only** prevents both providers from loading; choosing **Analytics
only** enables GA4 but keeps Meta Pixel off.

## Create a different link for each Facebook post

Open `analytics.html`, scroll to **Facebook Link Builder**, select the story and
give the post a unique label such as `page-a-post-01`. The generated URL already
contains `utm_source`, `utm_medium`, `utm_campaign` and `utm_content`.

Use a different post label for every Facebook post. After GA4 is connected,
compare `traffic_campaign` and `traffic_content` to see which post brings the
most readers and completions. Meta Pixel also receives the campaign and post
labels on its limited story events after marketing consent.

## Advertising and business contact

`analytics-config.js` also contains `STORY_SITE_CONFIG`:

- Keep `adsEnabled` set to `false` until an advertising provider approves the
  site and real ad code is installed. Empty ad placeholders stay hidden.
- Add the public business email to `businessEmail`. It will appear on the
  advertising and editorial contact page.
- Do not set `adsEnabled` to `true` merely to show placeholders.

## Reports and events

- Page views: GA4 `page_view`; Meta `PageView`.
- Story visits: GA4 `story_view`; Meta `ViewContent`, grouped by story/file.
- Facebook traffic: traffic source/campaign/content plus `facebook_click`.
- Country, language and device: GA4 demographic/technology dimensions plus the
  `language` and `device_type` event parameters.
- 25/50/75/100% reading: GA4 `reading_milestone`; Meta `ReadingMilestone` and
  `StoryComplete` at 100%.
- Average reading time: `reading_time` and `active_seconds`.
- Completion ranking: `reading_milestone` where `percent=100`, divided by
  `story_view` for each `story_slug`.
- Illustration click-through: `illustration_click` divided by `story_view`.
- Share clicks: `share_click`, grouped by `method`.
- Facebook post comparison: add `utm_source=facebook`, `utm_campaign=...` and
  `utm_content=...` to each shared link, then compare campaign/content reports.

Do not place names, email addresses, story text or other personal information in
UTM parameters.

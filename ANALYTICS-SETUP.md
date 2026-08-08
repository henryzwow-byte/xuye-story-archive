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
the reader enables **Audience analytics** and saves the choice, or chooses
**Allow all**. Google advertising and personalisation signals remain disabled.

## Activate Meta Pixel

1. In Meta Events Manager, choose **Connect data > Web** and create a dataset / Pixel.
2. Copy its numeric Pixel ID.
3. Open `analytics-config.js` and place the ID in `metaPixelId`.
4. Publish that one-file change.

Adding a Pixel ID changes the consent scope, so every browser is asked again.
Meta Pixel loads only after the reader explicitly enables **Marketing & Meta
Pixel** or chooses **Allow all**. It is restricted to the `home` and `library`
page types listed in `metaPixelPageAllowlist` and sends only the standard
`PageView` event. It is blocked from every individual story page and does not
send story titles, categories, slugs, reading milestones, shares or bookmarks.
Do not broaden the allowlist without a separate sensitive-data review.

The footer **Privacy choices** button lets a reader reopen the panel later.
Choosing **Reject non-essential** prevents both providers from loading. The
choice expires after 180 days and is invalidated when provider configuration
changes.

## Create a different link for each Facebook post

Open `analytics.html`, scroll to **Facebook Link Builder**, select the story and
give the post a unique label such as `page-a-post-01`. The generated URL already
contains `utm_source`, `utm_medium`, `utm_campaign` and `utm_content`.

Use a different post label for every Facebook post. After GA4 is connected,
compare `traffic_campaign` and `traffic_content` in GA4 to see which post brings
the most readers and completions. Meta receives only an allowed-page PageView;
campaign labels and story-level events are not added to the Pixel payload.

## Advertising and business contact

`analytics-config.js` also contains `STORY_SITE_CONFIG`:

- Keep `adsEnabled` set to `false` until an advertising provider approves the
  site and real ad code is installed. Empty ad placeholders stay hidden.
- Add the public business email to `businessEmail`. It will appear on the
  advertising and editorial contact page.
- Do not set `adsEnabled` to `true` merely to show placeholders.

## Reports and events

- Page views: GA4 `page_view`; Meta `PageView` only on allowlisted non-story pages.
- Story visits: GA4 `story_view`; never sent to Meta.
- Facebook traffic: traffic source/campaign/content plus `facebook_click`.
- Country, language and device: GA4 demographic/technology dimensions plus the
  `language` and `device_type` event parameters.
- 25/50/75/100% reading: GA4 `reading_milestone`; never sent to Meta.
- Average reading time: `reading_time` and `active_seconds`.
- Completion ranking: `reading_milestone` where `percent=100`, divided by
  `story_view` for each `story_slug`.
- Illustration click-through: `illustration_click` divided by `story_view`.
- Share clicks: `share_click`, grouped by `method`.
- Facebook post comparison: add `utm_source=facebook`, `utm_campaign=...` and
  `utm_content=...` to each shared link, then compare campaign/content reports.

Do not place names, email addresses, story text or other personal information in
UTM parameters.

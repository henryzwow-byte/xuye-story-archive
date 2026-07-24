const stories = Array.isArray(window.STORY_ARCHIVE) ? window.STORY_ARCHIVE : [];
const siteConfig = window.STORY_SITE_CONFIG || {};
if (siteConfig.adLayoutEnabled !== false) document.body.classList.add("ad-layout-enabled");
if (siteConfig.adsEnabled === true) document.body.classList.add("ads-enabled");

const copy = {
  en: {
    topNote: "Eight stories from the private archive are now available.",
    navLibrary: "Library", navNew: "All files", navAbout: "About", openArchive: "Open archive →",
    heroTitle: "Some stories never truly end.<br><em>They are only waiting to be opened again.</em>",
    heroBody: "A clean, searchable library for complete stories. Read in English by default or switch the entire site to Simplified Chinese.",
    searchLabel: "Search stories", searchPlaceholder: "Search title, category or file number…", searchButton: "Find a file",
    storyFiles: "story files", collections: "collections", globalAccess: "GLOBAL", bilingual: "worldwide language access",
    trustOne: "✓ No sign-in required", trustTwo: "✓ Mobile reading optimized", trustThree: "✓ One shareable link per story", trustFour: "✓ Global automatic translation",
    archiveDirectory: "ARCHIVE DIRECTORY", storyFolders: "Story folders", archiveQuote: "“A story deserves an ending people can find.”",
    sortLabel: "Sort", sortFile: "File number", sortTitle: "Title", adLeaderboard: "Leaderboard ad space · 970 × 90",
    emptyTitle: "No matching file", emptyBody: "Try another keyword or open a different folder.",
    statusTitle: "Your eight Word stories<br>are now organized here.",
    statusBody: "This free static site does not collect personal data. New stories can be added by replacing the story data file.", browseAll: "Browse all stories", archiveCount: "STORIES", archiveCountQuote: "When stories are kept, time finds its echo.",
    footerText: "An independent archive for fictional stories and serial continuations.", footerAbout: "About", footerPrivacy: "Privacy", footerTerms: "Terms", footerAds: "Advertising",
    allStories: "All Stories", matched: "matching files", file: "FILE", complete: "COMPLETE", openFile: "Open file", imported: "Imported from Word", chapters: "sections",
    featured: "FEATURED FILE", readStory: "Read the full story", previousStory: "Previous story", nextStory: "Next story", carouselLabel: "Featured stories", storyPosition: "Story", backLibrary: "← Back to library", archive: "Story Archive",
    fictionNotice: "FICTION / CONTENT NOTICE", updated: "Archive file", readingTime: "Estimated reading", minutes: "min",
    adStory: "Story-page ad space · 728 × 90", adInline: "In-article ad space · responsive", adSide: "Sidebar ad space · 300 × 600",
    currentFile: "CURRENT FILE", storyIllustration: "Story illustration", fileComplete: "FILE COMPLETE", endMessage: "You have reached the end of this story.", moreStories: "Explore more stories",
    published: "Published", newFile: "NEW FILE", shareStory: "SHARE THIS FILE", shareFacebook: "Share on Facebook", copyLink: "Copy link", copied: "Link copied",
    resumeTitle: "Continue where you left off?", resumePosition: "Your last reading position", continueReading: "Continue reading", startOver: "Start from the beginning", readingProgress: "Reading progress",
    progressBlessing: "PEACE TO YOUR FAMILY", progressDestination: "May all you cherish be safe", progressComplete: "The final page — may all you cherish be safe.",
    languageWorld: "WORLD EDITION", chooseLanguage: "Choose a language", searchLanguages: "Search languages…", deviceLanguage: "Use device language", closeLanguages: "Close language menu", translationNote: "Automatic translation · English and 中文 are editorial editions"
  },
  zh: {
    topNote: "你本地故事会文件夹中的 8 篇故事现已全部入库。",
    navLibrary: "故事库", navNew: "全部文件", navAbout: "关于", openArchive: "打开档案库 →",
    heroTitle: "有些故事，从未真正结束。<br><em>它们只是在等待，再次被翻开。</em>",
    heroBody: "一个清晰、可搜索的完整故事库。网站默认显示英文，也可以一键切换为简体中文。",
    searchLabel: "搜索故事", searchPlaceholder: "搜索标题、分类或档案编号……", searchButton: "查找档案",
    storyFiles: "篇故事档案", collections: "个故事分类", globalAccess: "全球语言", bilingual: "全球语言阅读",
    trustOne: "✓ 无需登录", trustTwo: "✓ 手机阅读优化", trustThree: "✓ 每篇故事独立链接", trustFour: "✓ 全球语言自动翻译",
    archiveDirectory: "档案目录", storyFolders: "故事文件夹", archiveQuote: "“每一个故事，都值得一个能被找到的结局。”",
    sortLabel: "排序", sortFile: "档案编号", sortTitle: "标题", adLeaderboard: "横幅广告位 · 970 × 90",
    emptyTitle: "没有匹配的档案", emptyBody: "换一个关键词，或打开其他文件夹。",
    statusTitle: "你的 8 篇 Word 故事<br>已经整理到这里。",
    statusBody: "这个免费静态网站不收集个人资料。以后添加新故事，只需替换故事数据文件。", browseAll: "浏览全部故事", archiveCount: "篇故事", archiveCountQuote: "故事被珍藏，时间便有了回声。",
    footerText: "用于虚构故事与连载续篇的独立数字档案馆。", footerAbout: "关于", footerPrivacy: "隐私", footerTerms: "条款", footerAds: "广告合作",
    allStories: "全部故事", matched: "份匹配档案", file: "档案", complete: "已完结", openFile: "打开档案", imported: "来自 Word 文件", chapters: "个章节",
    featured: "推荐档案", readStory: "阅读全文", previousStory: "上一篇故事", nextStory: "下一篇故事", carouselLabel: "推荐故事", storyPosition: "故事", backLibrary: "← 返回故事库", archive: "故事档案库",
    fictionNotice: "虚构作品 / 内容提示", updated: "档案编号", readingTime: "预计阅读", minutes: "分钟",
    adStory: "故事页广告位 · 728 × 90", adInline: "文中广告位 · 自适应", adSide: "侧栏广告位 · 300 × 600",
    currentFile: "当前档案", storyIllustration: "故事插图", fileComplete: "档案完结", endMessage: "你已经读完这篇故事。", moreStories: "查看更多故事",
    published: "发布日期", newFile: "新入库", shareStory: "分享这份档案", shareFacebook: "分享到 Facebook", copyLink: "复制链接", copied: "链接已复制",
    resumeTitle: "继续上次阅读？", resumePosition: "上次读到", continueReading: "继续阅读", startOver: "从头开始", readingProgress: "阅读进度",
    progressBlessing: "愿家人安康", progressDestination: "愿你所念皆安，所行皆坦", progressComplete: "故事已至终章，愿你所念皆安，所行皆坦。",
    languageWorld: "世界语言版本", chooseLanguage: "选择语言", searchLanguages: "搜索语言……", deviceLanguage: "使用设备语言", closeLanguages: "关闭语言菜单", translationNote: "自动翻译 · 英文和中文为站内正式版本"
  }
};

Object.assign(copy.en, {
  topNote: "The public archive is open to readers everywhere.",
  navLibrary: "Library", navNew: "Latest", openArchive: "Open the public archive →",
  heroBody: "A public collection of complete fiction, designed for calm reading and available to readers around the world.",
  curated: "EDITOR'S SELECTION", curatedTitle: "Selected from the archive", curatedBody: "A considered entry point into the collection.",
  latest: "LATEST RELEASES", latestTitle: "Newly filed stories", latestBody: "The most recent additions, presented in publication order.",
  categories: "BROWSE BY THEME", categoriesTitle: "Find a story by atmosphere", categoriesBody: "Move through the archive by theme, then continue wherever curiosity leads.",
  viewAll: "View all stories", openCollection: "Open collection", publicLibrary: "PUBLIC LIBRARY", libraryTitle: "Every story, one open archive.",
  libraryIntro: "Search every file, explore themes and tags, or let the archive choose your next story.", randomStory: "Open a random story",
  tabAll: "All stories", tabLatest: "Latest", tabEditors: "Editor's picks", tabPopular: "Popular on this device", tabWeekly: "Read this week on this device", tabSaved: "Saved", tabHistory: "Reading history",
  popularLocalNote: "Ranked by reading activity on this device. Global audience rankings are measured in the analytics dashboard.",
  savedEmpty: "No saved stories yet.", historyEmpty: "Your reading history will appear here.", analyticsEmpty: "No reading activity has been recorded on this device yet.",
  tagsTitle: "Tags", authorTitle: "Archive editor", authorName: "Story Archive Editorial Desk", authorBio: "An editorial desk dedicated to complete fictional stories, careful presentation and reader-friendly access.", viewAuthor: "View author page",
  standalone: "Standalone story", relatedLabel: "CONTINUE READING", relatedTitle: "Three stories to open next", bookmark: "Save story", bookmarked: "Saved", removeBookmark: "Remove from saved",
  viewIllustration: "View illustration", closeIllustration: "Close illustration", categoryLabel: "Category", tagLabel: "Tag", clearFilters: "Clear filters", filterResults: "filtered stories",
  homeSearchHint: "Search opens the complete public library.", publishedStories: "published stories", byAuthor: "By", seriesLabel: "Series", historyProgress: "read",
  seriesTitle: "Series & chapters", standaloneStories: "Standalone stories", noSeriesYet: "Series collections will appear here when connected stories are published.",
  analyticsConsole: "OWNER ANALYTICS", analyticsTitle: "Audience measurement console", analyticsIntro: "This page verifies the event system on this browser. Connect GA4 to see aggregate worldwide results, country, device and Facebook campaign reports.", analyticsConnected: "Worldwide analytics connected", analyticsNotConnected: "Worldwide analytics is ready but not connected", analyticsSetup: "Add your GA4 Measurement ID in analytics-config.js to start global reporting.", analyticsActive: "GA4 is active. Open Google Analytics for worldwide country, device, campaign and completion reports.", localPreview: "This-browser preview", totalViews: "Story visits", totalCompletions: "Completed readings", totalShares: "Share clicks", avgTime: "Average active time", seconds: "sec", illustrationCtr: "Illustration CTR", filePerformance: "Story performance", sourcePerformance: "Traffic source / campaign", globalReport: "Open Google Analytics", analyticsFootnote: "Local figures are visible only in this browser and are not a substitute for global reporting.",
  privacyAnalyticsTitle: "Audience measurement", privacyAnalyticsText: "When audience measurement is enabled, Story Archive may record page views, referral source, approximate country, language, device type, reading milestones, active reading time, illustration interactions and share-button clicks. No story text, form data or directly identifying information is collected. Analytics remains off until the site owner adds a valid measurement ID and the reader grants consent where required.",
  businessContact: "Business contact", businessContactPending: "A public business email will be added before advertising is enabled.", advertisingInactive: "Advertising inventory is now reserved across the site. No third-party advertising is delivered until an approved provider and valid account details are connected.",
  advertisement: "ADVERTISEMENT", adHouseTitle: "A quiet space for a future partner", adHouseBody: "Clearly separated from the story, with no pop-ups, autoplay or interruption.", adPartner: "Advertising information",
  linkBuilderLabel: "FACEBOOK LINK BUILDER", linkBuilderTitle: "Create a trackable story link", linkBuilderIntro: "Give each Facebook post a short unique label so its traffic can be compared after GA4 is connected.", linkBuilderStory: "Story", linkBuilderCampaign: "Campaign", linkBuilderPost: "Post label", linkBuilderGenerate: "Generate link", linkBuilderCopy: "Copy generated link", linkBuilderCopied: "Tracking link copied",
  notFoundTitle: "This file is not in the archive.", notFoundBody: "The address may be incomplete, or the story may have moved to another shelf.", notFoundLibrary: "Open the story library", notFoundHome: "Return home"
});

Object.assign(copy.zh, {
  topNote: "公开故事档案馆现已向世界各地的读者开放。",
  navLibrary: "故事库", navNew: "最新发布", openArchive: "打开公开故事库 →",
  heroBody: "一座面向所有人的完整虚构故事档案馆，为安静阅读而设计，也可通过世界语言功能服务全球读者。",
  curated: "编辑精选", curatedTitle: "从档案馆中精心选出", curatedBody: "以克制而清晰的方式，进入这座故事馆。",
  latest: "最新发布", latestTitle: "新近归档的故事", latestBody: "按照发布日期，查看最近加入档案馆的作品。",
  categories: "按主题浏览", categoriesTitle: "循着氛围，找到下一篇故事", categoriesBody: "从主题进入档案馆，让好奇心带你继续阅读。",
  viewAll: "查看全部故事", openCollection: "打开分类", publicLibrary: "公开故事库", libraryTitle: "每一篇故事，都在同一座开放档案馆里。",
  libraryIntro: "搜索全部档案，探索主题与标签，或让故事馆替你选择下一篇。", randomStory: "随机打开一篇",
  tabAll: "全部故事", tabLatest: "最新发布", tabEditors: "编辑精选", tabPopular: "本机热门", tabWeekly: "本机本周阅读", tabSaved: "本地收藏", tabHistory: "阅读历史",
  popularLocalNote: "本页按这台设备的阅读活动排序；全球读者排名会在数据分析后台统计。",
  savedEmpty: "还没有收藏故事。", historyEmpty: "你的阅读历史会显示在这里。", analyticsEmpty: "这台设备暂时还没有阅读记录。",
  tagsTitle: "故事标签", authorTitle: "档案编辑", authorName: "故事档案编辑部", authorBio: "专注于完整虚构故事、克制呈现与友好阅读体验的编辑团队。", viewAuthor: "查看作者页",
  standalone: "独立故事", relatedLabel: "继续阅读", relatedTitle: "接下来可以打开的三篇故事", bookmark: "收藏故事", bookmarked: "已收藏", removeBookmark: "取消收藏",
  viewIllustration: "查看插图", closeIllustration: "关闭插图", categoryLabel: "分类", tagLabel: "标签", clearFilters: "清除筛选", filterResults: "篇筛选结果",
  homeSearchHint: "搜索将在完整公开故事库中进行。", publishedStories: "篇已发布故事", byAuthor: "作者", seriesLabel: "系列", historyProgress: "已读",
  seriesTitle: "系列与章节", standaloneStories: "独立故事", noSeriesYet: "当有关联的连载故事发布后，系列会自动显示在这里。",
  analyticsConsole: "站长数据分析", analyticsTitle: "读者数据分析控制台", analyticsIntro: "本页用于验证这台浏览器上的事件采集。接入 GA4 后，可查看全球汇总数据、国家、设备与 Facebook 帖子引流报告。", analyticsConnected: "全球统计已经连接", analyticsNotConnected: "全球统计代码已就绪，但尚未连接", analyticsSetup: "请在 analytics-config.js 中填写 GA4 统计编号，即可开始全球统计。", analyticsActive: "GA4 已启用；请前往 Google Analytics 查看全球国家、设备、活动与完读报告。", localPreview: "本浏览器数据预览", totalViews: "故事访问", totalCompletions: "完成阅读", totalShares: "分享点击", avgTime: "平均有效阅读", seconds: "秒", illustrationCtr: "插图点击率", filePerformance: "单篇故事表现", sourcePerformance: "引流来源 / 帖子活动", globalReport: "打开 Google Analytics", analyticsFootnote: "本地数据只存在于这台浏览器中，不能替代全球汇总报表。",
  privacyAnalyticsTitle: "访问数据分析", privacyAnalyticsText: "启用访问分析后，故事档案馆可能记录页面访问、引流来源、读者的大致国家、语言、设备类型、25%/50%/75%/100% 阅读节点、有效阅读时长、插图互动和分享按钮点击。系统不收集故事正文、表单内容或可直接识别个人身份的信息。站长未填写有效统计编号，或在需要同意的地区读者未授权前，分析功能不会启用。",
  businessContact: "业务联系", businessContactPending: "广告正式启用前，这里会公布真实的业务邮箱。", advertisingInactive: "全站广告位已经预留。只有在通过平台审核并接入有效广告账户后，才会向读者加载第三方广告。",
  advertisement: "广告", adHouseTitle: "为未来合作伙伴保留的一席之地", adHouseBody: "与故事内容清晰分隔，不弹窗、不自动播放，也不中断阅读。", adPartner: "广告合作说明",
  linkBuilderLabel: "FACEBOOK 链接工具", linkBuilderTitle: "生成可追踪的故事链接", linkBuilderIntro: "为每一条 Facebook 帖子填写不同的简短标签，接通 GA4 后就能比较各帖子的引流效果。", linkBuilderStory: "故事", linkBuilderCampaign: "活动名称", linkBuilderPost: "帖子标签", linkBuilderGenerate: "生成链接", linkBuilderCopy: "复制生成的链接", linkBuilderCopied: "追踪链接已复制",
  notFoundTitle: "这份档案不在故事库中。", notFoundBody: "链接可能不完整，或者故事已经被移到另一层书架。", notFoundLibrary: "打开故事库", notFoundHome: "返回首页"
});

const editorialPicks = new Set(["the-broken-home", "the-logic-of-a-beast-in-the-mire", "the-tattered-toy-in-the-rain"]);
const archiveAuthor = { en: "Story Archive Editorial Desk", zh: "故事档案编辑部" };
const tagDictionary = {
  "Family Betrayal": { en: ["Family", "Betrayal", "Reckoning"], zh: ["家庭", "背叛", "反击"] },
  "Justice & Reckoning": { en: ["Justice", "Dignity", "Reckoning"], zh: ["正义", "尊严", "审判"] },
  "Corporate Justice": { en: ["Corporate", "Evidence", "Justice"], zh: ["职场", "证据", "正义"] },
  "Lost & Found": { en: ["Family", "Hope", "Reunion"], zh: ["亲情", "希望", "重逢"] }
};

stories.forEach((story) => {
  story.author ||= archiveAuthor;
  story.tags ||= tagDictionary[story.category?.en] || { en: [story.category?.en || "Story"], zh: [story.category?.zh || "故事"] };
  story.editorPick = story.editorPick ?? editorialPicks.has(story.slug);
  story.series ||= null;
  story.chapter ||= null;
});

const params = new URLSearchParams(location.search);
const storedLanguage = (() => { try { return localStorage.getItem("story-language"); } catch { return null; } })();
const lang = params.get("lang") === "zh" || (params.get("lang") !== "en" && storedLanguage === "zh") ? "zh" : "en";
const t = (key) => copy[lang][key] || copy.en[key] || key;
const local = (value) => value && typeof value === "object" ? (value[lang] || value.en || value.zh || "") : (value || "");
const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (character) => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[character]));

const adPublisherId = /^ca-pub-\d+$/.test(String(siteConfig.publisherId || "").trim()) ? String(siteConfig.publisherId).trim() : "";

function adSlot(slotKey, format = "responsive", extraClass = "") {
  const fallbackSlotKey = slotKey.replace(/-\d+$/, "");
  const configuredSlot = String(siteConfig.adSlots?.[slotKey] || siteConfig.adSlots?.[fallbackSlotKey] || "").trim();
  const providerSlot = /^\d+$/.test(configuredSlot) ? configuredSlot : "";
  const providerReady = siteConfig.adsEnabled === true && siteConfig.adProvider === "adsense" && adPublisherId && providerSlot;
  const className = ["ad-slot", `ad-${format}`, extraClass].filter(Boolean).join(" ");
  const providerData = providerReady ? ` data-provider-slot="${esc(providerSlot)}"` : "";
  return `<aside class="${className}" data-ad-slot="${esc(slotKey)}" data-ad-format="${esc(format)}"${providerData} aria-label="${esc(t("advertisement"))}">
    <div class="ad-slot-house">
      <span>${esc(t("advertisement"))}</span>
      <strong>${esc(t("adHouseTitle"))}</strong>
      <small>${esc(t("adHouseBody"))}</small>
      <a class="info-link" href="contact.html?lang=${lang}">${esc(t("adPartner"))} →</a>
    </div>
  </aside>`;
}

function advertisingConsentGranted() {
  if (siteConfig.adConsentRequired === false) return true;
  try { return localStorage.getItem("story-analytics-consent-v1") === "granted"; } catch { return false; }
}

function activateProviderAds() {
  if (!adPublisherId || siteConfig.adsEnabled !== true || siteConfig.adProvider !== "adsense" || !advertisingConsentGranted()) return;
  if (!document.querySelector('script[data-story-ad-provider="adsense"]')) {
    const script = document.createElement("script");
    script.async = true;
    script.crossOrigin = "anonymous";
    script.dataset.storyAdProvider = "adsense";
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(adPublisherId)}`;
    document.head.appendChild(script);
  }
  document.querySelectorAll(".ad-slot[data-provider-slot]:not(.ad-requested)").forEach((slot) => {
    const unit = document.createElement("ins");
    unit.className = "adsbygoogle";
    unit.style.display = "block";
    unit.dataset.adClient = adPublisherId;
    unit.dataset.adSlot = slot.dataset.providerSlot;
    unit.dataset.adFormat = "auto";
    unit.dataset.fullWidthResponsive = "true";
    slot.replaceChildren(unit);
    slot.classList.add("ad-requested");
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch {}
  });
}

function initAdMeasurement() {
  const slots = [...document.querySelectorAll(".ad-slot[data-ad-slot]")];
  if (!slots.length || !("IntersectionObserver" in window)) return;
  const pending = new WeakMap();
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    const slot = entry.target;
    if (entry.isIntersecting && entry.intersectionRatio >= 0.5 && !slot.dataset.viewable) {
      if (pending.has(slot)) return;
      pending.set(slot, window.setTimeout(() => {
        slot.dataset.viewable = "true";
        window.StoryAnalytics?.track("ad_slot_viewable", { ad_slot: slot.dataset.adSlot, ad_format: slot.dataset.adFormat });
        observer.unobserve(slot);
      }, 1000));
    } else if (pending.has(slot)) {
      window.clearTimeout(pending.get(slot));
      pending.delete(slot);
    }
  }), { threshold: [0, 0.5, 1] });
  slots.forEach((slot) => observer.observe(slot));
}

function insertAdAfter(anchor, slotKey, format, extraClass = "") {
  if (!anchor || document.querySelector(`.ad-slot[data-ad-slot="${slotKey}"]`)) return;
  anchor.insertAdjacentHTML("afterend", adSlot(slotKey, format, extraClass));
}

function cardsWithAd(items, slotKey, after = 6) {
  return items.map((story, index) => {
    const card = storyCard(story, index);
    return index === after - 1 ? `${card}${adSlot(slotKey, "infeed", "grid-ad")}` : card;
  }).join("");
}

function initDesktopAdRails(pageType) {
  if (!["story", "library"].includes(pageType) || !window.matchMedia("(min-width: 1540px)").matches) return;
  const host = pageType === "story" ? document.querySelector("#reader") : document.querySelector(".public-library-layout");
  if (!host || host.querySelector(".ad-rail")) return;
  host.classList.add("ad-rail-host");
  const rail = pageType === "story"
    ? `<div class="ad-rail ad-rail-right" aria-hidden="false">${adSlot("railRight", "skyscraper", "ad-rail-slot")}</div>`
    : `<div class="ad-rail ad-rail-left" aria-hidden="false">${adSlot("railLeft", "skyscraper", "ad-rail-slot")}</div>`;
  host.insertAdjacentHTML("beforeend", rail);
}

function initPageAdvertising(pageType) {
  if (siteConfig.adLayoutEnabled === false) return;
  if (pageType === "home") {
    insertAdAfter(document.querySelector(".trust"), "homeTop", "leaderboard", "page-ad");
    insertAdAfter(document.querySelector("#latest"), "homeDiscovery", "infeed", "page-ad page-ad-soft");
  }
  if (pageType === "library") {
    const legacySlot = document.querySelector(".story-index > .ad-slot:not([data-ad-slot])");
    if (legacySlot) legacySlot.outerHTML = adSlot("libraryTop", "leaderboard");
    insertAdAfter(document.querySelector(".public-library-layout"), "libraryFooter", "responsive", "page-ad");
  }
  if (pageType === "author") insertAdAfter(document.querySelector(".author-profile"), "authorTop", "leaderboard");
  if (pageType === "info") {
    const sections = document.querySelectorAll("#info-content > section");
    insertAdAfter(sections[0], "infoInline", "responsive");
    if (sections.length > 2) insertAdAfter(sections[sections.length - 1], "infoFooter", "leaderboard");
  }
  if (pageType === "story") document.querySelector("#reader")?.setAttribute("data-ad-plan", "reader");
  if (pageType === "analytics") insertAdAfter(document.querySelector(".analytics-state"), "analyticsTop", "leaderboard");
  if (pageType === "not-found") insertAdAfter(document.querySelector(".not-found"), "notFoundFooter", "compact", "page-ad");
  initDesktopAdRails(pageType);
  activateProviderAds();
  initAdMeasurement();
}

const globalLanguages = [
  ["device", "◎ Device language / 设备语言"], ["es", "Español"], ["fr", "Français"], ["de", "Deutsch"], ["pt", "Português"],
  ["ar", "العربية"], ["hi", "हिन्दी"], ["bn", "বাংলা"], ["ur", "اردو"], ["id", "Bahasa Indonesia"], ["ms", "Bahasa Melayu"],
  ["ja", "日本語"], ["ko", "한국어"], ["ru", "Русский"], ["tr", "Türkçe"], ["it", "Italiano"], ["vi", "Tiếng Việt"], ["th", "ไทย"],
  ["pl", "Polski"], ["nl", "Nederlands"], ["uk", "Українська"], ["fa", "فارسی"], ["he", "עברית"], ["el", "Ελληνικά"],
  ["ro", "Română"], ["cs", "Čeština"], ["hu", "Magyar"], ["sv", "Svenska"], ["da", "Dansk"], ["no", "Norsk"], ["fi", "Suomi"],
  ["fil", "Filipino"], ["sw", "Kiswahili"], ["am", "አማርኛ"], ["ha", "Hausa"], ["yo", "Yorùbá"], ["zu", "isiZulu"], ["af", "Afrikaans"],
  ["ta", "தமிழ்"], ["te", "తెలుగు"], ["mr", "मराठी"], ["gu", "ગુજરાતી"], ["pa", "ਪੰਜਾਬੀ"], ["kn", "ಕನ್ನಡ"], ["ml", "മലയാളം"],
  ["ne", "नेपाली"], ["si", "සිංහල"], ["my", "မြန်မာ"], ["km", "ខ្មែរ"], ["lo", "ລາວ"], ["mn", "Монгол"],
  ["kk", "Қазақша"], ["uz", "O‘zbekcha"], ["az", "Azərbaycanca"], ["ka", "ქართული"], ["hy", "Հայերեն"],
  ["sq", "Shqip"], ["bs", "Bosanski"], ["bg", "Български"], ["hr", "Hrvatski"], ["sr", "Српски"], ["sk", "Slovenčina"],
  ["sl", "Slovenščina"], ["lt", "Lietuvių"], ["lv", "Latviešu"], ["et", "Eesti"], ["is", "Íslenska"], ["ga", "Gaeilge"],
  ["cy", "Cymraeg"], ["eu", "Euskara"], ["ca", "Català"], ["gl", "Galego"], ["mt", "Malti"], ["ht", "Kreyòl ayisyen"],
  ["zh-TW", "繁體中文"]
];

document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

function localizedHref(href) {
  if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("http")) return href;
  const [beforeHash, hash = ""] = href.split("#");
  const url = new URL(beforeHash, location.href);
  url.searchParams.set("lang", lang);
  return `${url.pathname.split("/").pop() || "./"}${url.search}${hash ? `#${hash}` : ""}`;
}

function setLanguage(nextLanguage) {
  try { localStorage.setItem("story-language", nextLanguage); } catch {}
  const url = new URL(location.href);
  url.searchParams.set("lang", nextLanguage);
  location.href = url.toString();
}

function openGlobalTranslation(languageCode) {
  let target = languageCode;
  if (target === "device") target = (navigator.languages?.[0] || navigator.language || "en").trim();
  const normalized = target.toLowerCase();
  if (normalized === "en" || normalized.startsWith("en-")) { setLanguage("en"); return; }
  if (normalized === "zh" || normalized === "zh-cn" || normalized.startsWith("zh-hans")) { setLanguage("zh"); return; }

  const sourceUrl = new URL(location.href);
  sourceUrl.searchParams.set("lang", lang);
  const translatorUrl = new URL("https://translate.google.com/translate");
  translatorUrl.searchParams.set("sl", lang === "zh" ? "zh-CN" : "en");
  translatorUrl.searchParams.set("tl", target);
  translatorUrl.searchParams.set("u", sourceUrl.href);
  location.href = translatorUrl.href;
}

function initLanguageControls() {
  document.querySelectorAll(".lang-switch").forEach((container) => {
    const languageButtons = globalLanguages.filter(([code]) => code !== "device").map(([code, label]) => `<button type="button" class="global-language-option" data-global-language="${esc(code)}" role="option"><span>${esc(label)}</span><small>${esc(code.toUpperCase())}</small></button>`).join("");
    container.innerHTML = `<button type="button" class="${lang === "en" ? "active" : ""}" data-language="en">English</button><button type="button" class="${lang === "zh" ? "active" : ""}" data-language="zh">简体中文</button><div class="global-language-picker"><button type="button" class="global-language-trigger" aria-haspopup="dialog" aria-expanded="false" aria-label="${esc(t("chooseLanguage"))}"><span aria-hidden="true">◎</span><b>ALL</b></button><div class="global-language-panel" role="dialog" aria-label="${esc(t("chooseLanguage"))}" hidden><div class="global-language-head"><div><small>${esc(t("languageWorld"))}</small><strong>${esc(t("chooseLanguage"))}</strong></div><button type="button" class="global-language-close" aria-label="${esc(t("closeLanguages"))}">×</button></div><label class="global-language-search"><span aria-hidden="true">⌕</span><input type="search" autocomplete="off" placeholder="${esc(t("searchLanguages"))}" aria-label="${esc(t("searchLanguages"))}"></label><button type="button" class="global-language-device" data-global-language="device"><span>◎</span><strong>${esc(t("deviceLanguage"))}</strong><i>→</i></button><div class="global-language-list" role="listbox">${languageButtons}</div><p class="global-language-note">${esc(t("translationNote"))}</p></div></div>`;

    container.querySelectorAll("[data-language]").forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.language)));
    const trigger = container.querySelector(".global-language-trigger");
    const panel = container.querySelector(".global-language-panel");
    const search = container.querySelector(".global-language-search input");
    const closeButton = container.querySelector(".global-language-close");
    const options = [...container.querySelectorAll(".global-language-option")];
    const closePanel = () => {
      panel.hidden = true;
      trigger.setAttribute("aria-expanded", "false");
      search.value = "";
      options.forEach((button) => { button.hidden = false; });
    };
    const openPanel = () => {
      panel.hidden = false;
      trigger.setAttribute("aria-expanded", "true");
      requestAnimationFrame(() => search.focus());
    };

    trigger.addEventListener("click", (event) => {
      event.stopPropagation();
      if (panel.hidden) openPanel(); else closePanel();
    });
    closeButton.addEventListener("click", closePanel);
    panel.addEventListener("click", (event) => event.stopPropagation());
    container.querySelectorAll("[data-global-language]").forEach((button) => button.addEventListener("click", () => openGlobalTranslation(button.dataset.globalLanguage)));
    search.addEventListener("input", () => {
      const query = search.value.trim().toLocaleLowerCase();
      options.forEach((button) => { button.hidden = Boolean(query) && !button.textContent.toLocaleLowerCase().includes(query); });
    });
    document.addEventListener("click", closePanel);
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !panel.hidden) {
        closePanel();
        trigger.focus();
      }
    });
  });
}

function translateStaticPage() {
  document.querySelectorAll("[data-i18n]").forEach((element) => { element.textContent = t(element.dataset.i18n); });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => { element.innerHTML = t(element.dataset.i18nHtml); });
  const search = document.querySelector("#story-search");
  if (search) search.placeholder = t("searchPlaceholder");
  document.querySelectorAll("a.info-link, a.home-link, a.localized-link").forEach((link) => { link.href = localizedHref(link.getAttribute("href")); });
}

function storyUrl(story) {
  return `story-${encodeURIComponent(story.slug)}.html?lang=${lang}`;
}

function categoryKey(story) {
  return story.category.en;
}

function chapterCount(story) {
  const headings = story.content[lang].filter((paragraph) => paragraph.startsWith("## ")).length;
  return headings || 1;
}

function readingMinutes(story) {
  const text = story.content[lang].join(" ");
  const units = lang === "zh" ? text.replace(/\s/g, "").length : text.trim().split(/\s+/).length;
  return Math.max(2, Math.ceil(units / (lang === "zh" ? 420 : 220)));
}

function formatDate(value) {
  if (!value) return "";
  const date = new Date(`${value}T12:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat(lang === "zh" ? "zh-CN" : "en-US", { year: "numeric", month: "short", day: "numeric" }).format(date);
}

function socialImageUrl(story) {
  const coverName = String(story.cover || "").split("/").pop().replace(/\.webp$/i, ".jpg");
  return new URL(`assets/social/${coverName}`, location.href).href;
}

function shareCopy(story, field) {
  return local(story.share?.[field]) || (field === "title" ? local(story.title) : local(story.summary));
}

function storyTags(story) {
  const value = story.tags?.[lang] || story.tags?.en || [];
  return Array.isArray(value) ? value : [];
}

function readStorage(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)); } catch { return fallback; }
}

function writeStorage(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
}

function bookmarkSlugs() {
  const value = readStorage("story-bookmarks-v1", []);
  return Array.isArray(value) ? value : [];
}

function readingHistory() {
  const value = readStorage("story-history-v1", []);
  return Array.isArray(value) ? value : [];
}

function categoryUrl(story) {
  return `library.html?lang=${lang}&category=${encodeURIComponent(categoryKey(story))}`;
}

function tagUrl(tag) {
  return `library.html?lang=${lang}&tag=${encodeURIComponent(tag)}`;
}

function storyCard(story, index) {
  const coverNumber = String(story.fileNo || index + 1).replace(/\D/g, "").slice(-2).padStart(2, "0");
  const coverMedia = story.cover
    ? `<img src="${esc(story.cover)}" alt="" width="960" height="640" loading="lazy" decoding="async">`
    : `<div class="glyph">${esc(story.glyph)}</div>`;
  const tags = storyTags(story).slice(0, 2).map((tag) => `<a href="${tagUrl(tag)}">#${esc(tag)}</a>`).join("");
  const history = readingHistory().find((item) => item.slug === story.slug);
  const historyBadge = history?.ratio > 0.02 ? `<span class="history-badge">${Math.round(history.ratio * 100)}% ${esc(t("historyProgress"))}</span>` : "";
  const savedBadge = bookmarkSlugs().includes(story.slug) ? `<span class="saved-badge" title="${esc(t("bookmarked"))}">◆</span>` : "";
  return `<article class="story-card" data-story-card="${esc(story.slug)}">
    <a class="cover tone-${esc(story.tone)}" href="${storyUrl(story)}" data-story-link="cover" data-story-slug="${esc(story.slug)}" aria-label="${esc(local(story.title))}">${coverMedia}<span>${coverNumber}</span><span class="category">${esc(local(story.category))}</span><span class="chapter">${esc(t("complete"))}</span>${story.isNew ? `<span class="new-file-badge">${esc(t("newFile"))}</span>` : ""}</a>
    <div class="card-body"><div class="card-meta"><span>${esc(story.fileNo)}</span><span>${esc(formatDate(story.published))}</span><span>${readingMinutes(story)} ${esc(t("minutes"))}</span>${historyBadge}${savedBadge}</div><h3><a href="${storyUrl(story)}" data-story-link="title" data-story-slug="${esc(story.slug)}">${esc(local(story.title))}</a></h3><p>${esc(local(story.summary))}</p><div class="tags"><a href="${categoryUrl(story)}">#${esc(local(story.category))}</a>${tags}</div><a class="read-link" href="${storyUrl(story)}" data-story-link="open_file" data-story-slug="${esc(story.slug)}"><span>${esc(t("openFile"))}</span><b>→</b></a></div>
  </article>`;
}

function renderFeatured(story, index = 0) {
  const featured = document.querySelector("#featured-story");
  if (!featured || !story) return;
  const displayNumber = String(story.fileNo || index + 1).replace(/\D/g, "").slice(-2).padStart(2, "0");
  featured.href = storyUrl(story);
  featured.classList.toggle("has-art", Boolean(story.cover));
  featured.innerHTML = `${story.cover ? `<div class="paper-image"><img src="${esc(story.cover)}" alt="" width="960" height="640" decoding="async"><span></span></div>` : ""}<div class="paper-meta"><span>${esc(t("file"))} #${esc(story.fileNo)}</span><span>${story.isNew ? esc(t("newFile")) : esc(t("featured"))}</span></div><div class="paper-number">${displayNumber}</div><div class="paper-copy"><small>${esc(local(story.category))} · ${esc(formatDate(story.published))} · ${esc(t("complete"))}</small><h2>${esc(local(story.title))}</h2><p>${esc(local(story.summary))}</p><b>${esc(t("readStory"))} <i>→</i></b></div>`;
}

function initFeaturedCarousel() {
  const carousel = document.querySelector("#featured-carousel");
  const featured = document.querySelector("#featured-story");
  const previous = document.querySelector("#featured-prev");
  const next = document.querySelector("#featured-next");
  const dots = document.querySelector("#featured-dots");
  const status = document.querySelector("#featured-status");
  const featuredStories = [...stories].sort((first, second) => first.fileNo.localeCompare(second.fileNo));
  if (!carousel || !featured || !previous || !next || !dots || !status || !featuredStories.length) return;

  let activeIndex = 0;
  let touchStart = null;
  let suppressClick = false;

  carousel.setAttribute("aria-label", t("carouselLabel"));
  previous.setAttribute("aria-label", t("previousStory"));
  next.setAttribute("aria-label", t("nextStory"));

  function updateDots() {
    dots.innerHTML = featuredStories.map((story, index) => `<button type="button" class="carousel-dot ${index === activeIndex ? "active" : ""}" data-index="${index}" aria-label="${esc(`${t("storyPosition")} ${index + 1}: ${local(story.title)}`)}" aria-current="${index === activeIndex ? "true" : "false"}"></button>`).join("");
    dots.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => showStory(Number(button.dataset.index), Number(button.dataset.index) < activeIndex ? "previous" : "next")));
  }

  function showStory(nextIndex, direction = "next") {
    activeIndex = (nextIndex + featuredStories.length) % featuredStories.length;
    featured.classList.remove("slide-from-left", "slide-from-right");
    void featured.offsetWidth;
    featured.classList.add(direction === "previous" ? "slide-from-left" : "slide-from-right");
    renderFeatured(featuredStories[activeIndex], activeIndex);
    status.textContent = `${String(activeIndex + 1).padStart(2, "0")} / ${String(featuredStories.length).padStart(2, "0")}`;
    updateDots();
  }

  previous.addEventListener("click", () => showStory(activeIndex - 1, "previous"));
  next.addEventListener("click", () => showStory(activeIndex + 1, "next"));
  carousel.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") { event.preventDefault(); showStory(activeIndex - 1, "previous"); }
    if (event.key === "ArrowRight") { event.preventDefault(); showStory(activeIndex + 1, "next"); }
  });
  carousel.addEventListener("touchstart", (event) => {
    const touch = event.changedTouches[0];
    touchStart = { x: touch.clientX, y: touch.clientY };
  }, { passive: true });
  carousel.addEventListener("touchend", (event) => {
    if (!touchStart) return;
    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStart.x;
    const deltaY = touch.clientY - touchStart.y;
    touchStart = null;
    if (Math.abs(deltaX) < 48 || Math.abs(deltaX) <= Math.abs(deltaY) * 1.2) return;
    suppressClick = true;
    showStory(activeIndex + (deltaX < 0 ? 1 : -1), deltaX < 0 ? "next" : "previous");
    window.setTimeout(() => { suppressClick = false; }, 350);
  }, { passive: true });
  featured.addEventListener("click", (event) => { if (suppressClick) event.preventDefault(); });
  featured.addEventListener("animationend", () => featured.classList.remove("slide-from-left", "slide-from-right"));

  showStory(0);
}

function initHome() {
  const categoryMap = new Map();
  stories.forEach((story) => {
    const key = categoryKey(story);
    if (!categoryMap.has(key)) categoryMap.set(key, { label: story.category, count: 0 });
    categoryMap.get(key).count += 1;
  });
  document.querySelector("#story-total").textContent = stories.length;
  document.querySelector("#category-total").textContent = categoryMap.size;
  const topNote = document.querySelector('[data-i18n="topNote"]');
  const archiveCountTotal = document.querySelector("#archive-count-total");
  if (topNote) topNote.textContent = t("topNote");
  if (archiveCountTotal) archiveCountTotal.textContent = String(stories.length).padStart(2, "0");
  initFeaturedCarousel();
  const curatedGrid = document.querySelector("#home-curated-grid");
  const latestGrid = document.querySelector("#home-latest-grid");
  const categoryGrid = document.querySelector("#home-category-grid");
  if (curatedGrid) curatedGrid.innerHTML = stories.filter((story) => story.editorPick).slice(0, 3).map(storyCard).join("");
  if (latestGrid) latestGrid.innerHTML = [...stories].sort((a, b) => b.published.localeCompare(a.published) || b.fileNo.localeCompare(a.fileNo)).slice(0, 3).map(storyCard).join("");
  if (categoryGrid) categoryGrid.innerHTML = Array.from(categoryMap, ([key, value], index) => `<a class="theme-card theme-${(index % 4) + 1}" href="library.html?lang=${lang}&category=${encodeURIComponent(key)}"><span>${String(index + 1).padStart(2, "0")}</span><h3>${esc(local(value.label))}</h3><p>${value.count} ${esc(t("publishedStories"))}</p><b>${esc(t("openCollection"))} →</b></a>`).join("");
  const form = document.querySelector("#search-form");
  if (form) form.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = document.querySelector("#story-search")?.value.trim() || "";
    const target = new URL("library.html", location.href);
    target.searchParams.set("lang", lang);
    if (query) target.searchParams.set("q", query);
    window.StoryAnalytics?.track("archive_search", { query_length: query.length, search_origin: "home" });
    location.href = target.href;
  });
}

function initLibrary() {
  document.title = `${t("navLibrary")} — Story Archive`;
  const viewTitleKeys = { all: "allStories", latest: "tabLatest", editors: "tabEditors", popular: "tabPopular", weekly: "tabWeekly", saved: "tabSaved", history: "tabHistory" };
  let activeTab = viewTitleKeys[params.get("view")] ? params.get("view") : "all";
  let query = params.get("q") || "";
  let activeCategory = params.get("category") || "all";
  let activeTag = params.get("tag") || "";
  let sort = "file";
  const grid = document.querySelector("#story-grid");
  const count = document.querySelector("#result-count");
  const empty = document.querySelector("#empty-state");
  const search = document.querySelector("#story-search");
  const folders = document.querySelector("#folder-list");
  const tabs = document.querySelector("#library-tabs");
  const note = document.querySelector("#library-context-note");
  const viewTitle = document.querySelector("#library-view-title");
  const categoryMap = new Map();
  stories.forEach((story) => {
    const key = categoryKey(story);
    if (!categoryMap.has(key)) categoryMap.set(key, { label: story.category, count: 0 });
    categoryMap.get(key).count += 1;
  });
  const categories = [{ key: "all", label: { en: "All Stories", zh: "全部故事" }, count: stories.length }, ...Array.from(categoryMap, ([key, value]) => ({ key, ...value }))];
  if (search) search.value = query;

  function activityFor(story) {
    return window.StoryAnalytics?.getLocal?.().stories?.[story.slug] || {};
  }

  function renderFolders() {
    folders.innerHTML = categories.map((category, index) => `<button class="folder ${category.key === activeCategory ? "active" : ""}" data-category="${esc(category.key)}"><span class="folder-icon"></span><span><b>${esc(local(category.label))}</b><small>${category.count} ${esc(lang === "zh" ? "篇" : "files")}</small></span><i>${category.key === "all" ? "ALL" : String(index).padStart(2, "0")}</i></button>`).join("");
    folders.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => { activeCategory = button.dataset.category; activeTag = ""; activeTab = "all"; render(); }));
  }

  function renderTabs() {
    tabs.querySelectorAll("button").forEach((button) => {
      const selected = button.dataset.view === activeTab;
      button.id = `library-tab-${button.dataset.view}`;
      button.setAttribute("role", "tab");
      button.setAttribute("aria-controls", "story-grid");
      button.classList.toggle("active", selected);
      button.setAttribute("aria-selected", String(selected));
      button.setAttribute("tabindex", selected ? "0" : "-1");
      if (selected) grid.setAttribute("aria-labelledby", button.id);
    });
  }

  function render() {
    const saved = new Set(bookmarkSlugs());
    const history = readingHistory();
    const historyMap = new Map(history.map((item) => [item.slug, item]));
    let items = stories.filter((story) => {
      const categoryMatch = activeCategory === "all" || categoryKey(story) === activeCategory;
      const allStoryTags = [...(story.tags?.en || []), ...(story.tags?.zh || [])];
      const tagMatch = !activeTag || allStoryTags.some((tag) => tag.toLocaleLowerCase() === activeTag.toLocaleLowerCase());
      const haystack = [story.fileNo, story.title.en, story.title.zh, story.summary.en, story.summary.zh, story.category.en, story.category.zh, ...(story.tags?.en || []), ...(story.tags?.zh || [])].join(" ").toLocaleLowerCase();
      return categoryMatch && tagMatch && haystack.includes(query.toLocaleLowerCase());
    });
    if (activeTab === "latest") items.sort((a, b) => b.published.localeCompare(a.published) || b.fileNo.localeCompare(a.fileNo));
    else if (activeTab === "editors") items = items.filter((story) => story.editorPick);
    else if (activeTab === "saved") items = items.filter((story) => saved.has(story.slug));
    else if (activeTab === "history") items = items.filter((story) => historyMap.has(story.slug)).sort((a, b) => String(historyMap.get(b.slug)?.updatedAt || "").localeCompare(String(historyMap.get(a.slug)?.updatedAt || "")));
    else if (activeTab === "popular") items.sort((a, b) => (activityFor(b).views || 0) - (activityFor(a).views || 0) || Number(b.editorPick) - Number(a.editorPick));
    else if (activeTab === "weekly") {
      const weekAgo = Date.now() - 7 * 86400000;
      items = items.filter((story) => historyMap.has(story.slug) && new Date(historyMap.get(story.slug).updatedAt).getTime() >= weekAgo).sort((a, b) => String(historyMap.get(b.slug)?.updatedAt || "").localeCompare(String(historyMap.get(a.slug)?.updatedAt || "")));
    } else items.sort((a, b) => sort === "title" ? local(a.title).localeCompare(local(b.title), lang === "zh" ? "zh-CN" : "en") : a.fileNo.localeCompare(b.fileNo));
    const emptyMessage = activeTab === "saved" ? t("savedEmpty") : activeTab === "history" || activeTab === "weekly" ? t("historyEmpty") : t("emptyBody");
    grid.innerHTML = cardsWithAd(items, "libraryInfeed");
    empty.hidden = items.length !== 0;
    empty.querySelector("p").textContent = emptyMessage;
    count.textContent = `${items.length} ${t("filterResults")}`;
    viewTitle.textContent = activeTag ? `#${activeTag}` : activeCategory !== "all" ? local(categories.find((category) => category.key === activeCategory)?.label) : t(viewTitleKeys[activeTab]);
    note.textContent = activeTab === "popular" || activeTab === "weekly" ? t("popularLocalNote") : activeTag ? `${t("tagLabel")}: ${activeTag}` : activeCategory !== "all" ? `${t("categoryLabel")}: ${local(categories.find((category) => category.key === activeCategory)?.label)}` : "";
    renderFolders();
    renderTabs();
    window.requestAnimationFrame(() => {
      activateProviderAds();
      initAdMeasurement();
    });
  }

  tabs.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => { activeTab = button.dataset.view; activeCategory = "all"; activeTag = ""; render(); }));
  tabs.addEventListener("keydown", (event) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    const buttons = [...tabs.querySelectorAll("button")];
    const current = Math.max(0, buttons.indexOf(document.activeElement));
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? buttons.length - 1 : (current + (event.key === 'ArrowRight' ? 1 : -1) + buttons.length) % buttons.length;
    event.preventDefault();
    buttons[next].focus();
    buttons[next].click();
  });
  search.addEventListener("input", () => { query = search.value.trim(); render(); });
  document.querySelector("#library-search-form").addEventListener("submit", (event) => { event.preventDefault(); window.StoryAnalytics?.track("archive_search", { query_length: query.length, search_origin: "library" }); render(); });
  document.querySelector("#sort-select").addEventListener("change", (event) => { sort = event.target.value; activeTab = "all"; render(); });
  document.querySelector("#random-story").addEventListener("click", () => {
    const story = stories[Math.floor(Math.random() * stories.length)];
    window.StoryAnalytics?.track("random_story", { story_slug: story.slug });
    location.href = storyUrl(story);
  });
  const tagCloud = document.querySelector("#tag-cloud");
  const allTags = [...new Set(stories.flatMap(storyTags))].sort((a, b) => a.localeCompare(b, lang === "zh" ? "zh-CN" : "en"));
  tagCloud.innerHTML = allTags.map((tag) => `<a href="${tagUrl(tag)}" class="${activeTag.toLocaleLowerCase() === tag.toLocaleLowerCase() ? "active" : ""}">#${esc(tag)}</a>`).join("");
  const seriesPanel = document.querySelector("#series-panel");
  if (seriesPanel) {
    const seriesGroups = new Map();
    stories.filter((story) => story.series).forEach((story) => {
      const key = local(story.series);
      seriesGroups.set(key, (seriesGroups.get(key) || 0) + 1);
    });
    seriesPanel.innerHTML = seriesGroups.size
      ? [...seriesGroups].map(([label, total]) => `<span><b>${esc(label)}</b><small>${total} ${esc(t("chapters"))}</small></span>`).join("")
      : `<span><b>${stories.length} ${esc(t("standaloneStories"))}</b><small>${esc(t("noSeriesYet"))}</small></span>`;
  }
  render();
}

function initAuthor() {
  document.title = `${t("authorName")} — Story Archive`;
  document.querySelector("#author-name").textContent = t("authorName");
  document.querySelector("#author-bio").textContent = t("authorBio");
  document.querySelector("#author-count").textContent = `${stories.length} ${t("publishedStories")}`;
  document.querySelector("#author-story-grid").innerHTML = cardsWithAd([...stories].sort((a, b) => a.fileNo.localeCompare(b.fileNo)), "authorInfeed");
}

function initAnalyticsDashboard() {
  const data = window.StoryAnalytics?.getLocal?.() || {};
  const storyMetrics = data.stories || {};
  const totals = Object.values(storyMetrics).reduce((sum, metric) => ({
    views: sum.views + (metric.views || 0),
    completions: sum.completions + (metric.milestones?.["100"] || 0),
    shares: sum.shares + (metric.shareClicks || 0),
    illustration: sum.illustration + (metric.illustrationClicks || 0),
    activeSeconds: sum.activeSeconds + (metric.activeSeconds || 0)
  }), { views: 0, completions: 0, shares: 0, illustration: 0, activeSeconds: 0 });
  const averageTime = totals.views ? Math.round(totals.activeSeconds / totals.views) : 0;
  const illustrationCtr = totals.views ? `${(totals.illustration / totals.views * 100).toFixed(1)}%` : "0%";
  const state = document.querySelector("#analytics-state");
  state.classList.toggle("connected", Boolean(window.StoryAnalytics?.enabled));
  state.innerHTML = `<span>${window.StoryAnalytics?.enabled ? "●" : "○"}</span><div><b>${esc(window.StoryAnalytics?.enabled ? t("analyticsConnected") : t("analyticsNotConnected"))}</b><p>${esc(window.StoryAnalytics?.enabled ? t("analyticsActive") : t("analyticsSetup"))}</p></div>`;
  document.querySelector("#analytics-cards").innerHTML = [
    [t("totalViews"), totals.views], [t("totalCompletions"), totals.completions], [t("totalShares"), totals.shares], [t("avgTime"), `${averageTime} ${t("seconds")}`], [t("illustrationCtr"), illustrationCtr]
  ].map(([label, value]) => `<div><span>${esc(label)}</span><strong>${esc(value)}</strong></div>`).join("");
  document.querySelector("#analytics-table-body").innerHTML = stories.map((story) => {
    const metric = storyMetrics[story.slug] || {};
    const views = metric.views || 0;
    const ctr = views ? `${((metric.illustrationClicks || 0) / views * 100).toFixed(1)}%` : "0%";
    const avg = views ? Math.round((metric.activeSeconds || 0) / views) : 0;
    return `<tr><td>${esc(story.fileNo)}</td><td><a href="${storyUrl(story)}">${esc(local(story.title))}</a></td><td>${views}</td><td>${metric.milestones?.["25"] || 0}</td><td>${metric.milestones?.["50"] || 0}</td><td>${metric.milestones?.["75"] || 0}</td><td>${metric.milestones?.["100"] || 0}</td><td>${avg}s</td><td>${ctr}</td><td>${metric.shareClicks || 0}</td></tr>`;
  }).join("");
  const sources = Object.entries(data.sources || {}).sort((a, b) => b[1] - a[1]);
  const campaigns = Object.entries(data.campaigns || {}).sort((a, b) => b[1] - a[1]);
  document.querySelector("#analytics-sources").innerHTML = [...sources.map(([label, value]) => [label, value, "source"]), ...campaigns.map(([label, value]) => [label, value, "campaign"])].map(([label, value, kind]) => `<li><span>${esc(label)}</span><small>${esc(kind)}</small><b>${value}</b></li>`).join("") || `<li><span>${esc(t("analyticsEmpty"))}</span></li>`;
  const storySelect = document.querySelector("#utm-story");
  const builderForm = document.querySelector("#utm-builder-form");
  const outputWrap = document.querySelector("#utm-output");
  const output = document.querySelector("#utm-link");
  storySelect.innerHTML = [...stories].sort((a, b) => a.fileNo.localeCompare(b.fileNo)).map((story) => `<option value="${esc(story.slug)}">${esc(story.fileNo)} — ${esc(local(story.title))}</option>`).join("");
  const cleanUtm = (value, fallback) => String(value || "").trim().replace(/\s+/g, "-").slice(0, 60) || fallback;
  builderForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const story = stories.find((item) => item.slug === storySelect.value) || stories[0];
    if (!story) return;
    const url = new URL(`story-${story.slug}.html`, location.href);
    url.searchParams.set("lang", lang);
    url.searchParams.set("utm_source", "facebook");
    url.searchParams.set("utm_medium", "social");
    url.searchParams.set("utm_campaign", cleanUtm(document.querySelector("#utm-campaign").value, story.slug));
    url.searchParams.set("utm_content", cleanUtm(document.querySelector("#utm-post").value, "post-01"));
    output.value = url.href;
    outputWrap.hidden = false;
    window.StoryAnalytics?.track("tracking_link_generated", { story_slug: story.slug });
  });
  document.querySelector("#copy-utm-link").addEventListener("click", async (event) => {
    if (!output.value) return;
    try { await navigator.clipboard.writeText(output.value); }
    catch { output.select(); document.execCommand("copy"); }
    event.currentTarget.textContent = t("linkBuilderCopied");
  });
}

function proseHtml(story) {
  const content = story.content[lang];
  const paragraphTotal = content.filter((paragraph) => !paragraph.startsWith("## ")).length;
  const desiredBreaks = paragraphTotal < 12 ? 0 : Math.min(8, Math.max(1, Math.round(paragraphTotal / 80)));
  const breakPoints = new Map();
  for (let index = 1; index <= desiredBreaks; index += 1) {
    const target = Math.round((paragraphTotal * index) / (desiredBreaks + 1));
    if (target >= 7 && target <= paragraphTotal - 5) breakPoints.set(target, breakPoints.size + 1);
  }
  let paragraphIndex = 0;
  return content.map((paragraph) => {
    if (paragraph.startsWith("## ")) return `<h2>${esc(paragraph.slice(3))}</h2>`;
    paragraphIndex += 1;
    const paragraphHtml = `<p class="${paragraphIndex === 1 ? "dropcap" : ""}">${esc(paragraph)}</p>`;
    const breakNumber = breakPoints.get(paragraphIndex);
    if (!breakNumber) return paragraphHtml;
    const mobilePriority = breakNumber % 2 === 0 ? "mid-ad-secondary" : "mid-ad-primary";
    return `${paragraphHtml}${adSlot(`storyInline-${breakNumber}`, "inarticle", `mid-ad ${mobilePriority}`)}`;
  }).join("");
}

function updateDocumentMetadata(story) {
  const canonicalUrl = new URL(`story-${story.slug}.html`, location.href).href;
  const setters = [
    ['meta[name="description"]', local(story.summary)],
    ['meta[property="og:title"]', shareCopy(story, "title")],
    ['meta[property="og:description"]', shareCopy(story, "description")],
    ['meta[property="og:url"]', canonicalUrl],
    ['meta[property="og:image"]', socialImageUrl(story)],
    ['meta[property="og:locale"]', lang === "zh" ? "zh_CN" : "en_US"],
    ['meta[name="twitter:title"]', shareCopy(story, "title")],
    ['meta[name="twitter:description"]', shareCopy(story, "description")],
    ['meta[name="twitter:image"]', socialImageUrl(story)]
  ];
  setters.forEach(([selector, value]) => {
    const element = document.querySelector(selector);
    if (element && value) element.content = value;
  });
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: local(story.title),
    description: local(story.summary),
    image: [socialImageUrl(story)],
    datePublished: story.published,
    dateModified: story.modified || "2026-07-22",
    inLanguage: lang === "zh" ? "zh-CN" : "en",
    articleSection: local(story.category),
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
    author: { "@type": "Organization", name: "Story Archive", url: new URL("./", location.href).href }
  };
  let schema = document.querySelector("#story-structured-data");
  if (!schema) {
    schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.id = "story-structured-data";
    document.head.appendChild(schema);
  }
  schema.textContent = JSON.stringify(structuredData).replace(/</g, "\\u003c");
}

function initShareActions(story) {
  const facebook = document.querySelector("#share-facebook");
  const copyButton = document.querySelector("#copy-story-link");
  const shareUrl = new URL(`story-${story.slug}.html`, location.href);
  shareUrl.searchParams.set("lang", lang);
  if (facebook) facebook.addEventListener("click", () => {
    window.StoryAnalytics?.track("share_click", { story_slug: story.slug, file_no: story.fileNo, method: "facebook" });
    const facebookUrl = new URL(shareUrl.href);
    facebookUrl.searchParams.set("utm_source", "facebook");
    facebookUrl.searchParams.set("utm_medium", "social");
    facebookUrl.searchParams.set("utm_campaign", story.slug);
    facebookUrl.searchParams.set("utm_content", "story_share_button");
    const target = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(facebookUrl.href)}`;
    window.open(target, "facebook-share", "popup=yes,width=690,height=620,noopener,noreferrer");
  });
  if (copyButton) copyButton.addEventListener("click", async () => {
    window.StoryAnalytics?.track("share_click", { story_slug: story.slug, file_no: story.fileNo, method: "copy_link" });
    try {
      if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(shareUrl.href);
      else {
        const field = document.createElement("textarea");
        field.value = shareUrl.href;
        field.setAttribute("readonly", "");
        field.style.position = "fixed";
        field.style.opacity = "0";
        document.body.appendChild(field);
        field.select();
        document.execCommand("copy");
        field.remove();
      }
      copyButton.textContent = t("copied");
      window.setTimeout(() => { copyButton.textContent = t("copyLink"); }, 1800);
    } catch {
      window.prompt(t("copyLink"), shareUrl.href);
    }
  });
}

function updateReadingHistory(story, ratio = 0) {
  const history = readingHistory().filter((item) => item.slug !== story.slug);
  history.unshift({ slug: story.slug, ratio: Math.max(0, Math.min(1, ratio)), updatedAt: new Date().toISOString() });
  writeStorage("story-history-v1", history.slice(0, 40));
}

function initBookmark(story) {
  const button = document.querySelector("#bookmark-story");
  if (!button) return;
  function render() {
    const saved = bookmarkSlugs().includes(story.slug);
    button.classList.toggle("active", saved);
    button.setAttribute("aria-pressed", String(saved));
    button.innerHTML = `<span aria-hidden="true">${saved ? "◆" : "◇"}</span> ${esc(saved ? t("bookmarked") : t("bookmark"))}`;
    button.title = saved ? t("removeBookmark") : t("bookmark");
  }
  button.addEventListener("click", () => {
    const saved = bookmarkSlugs();
    const exists = saved.includes(story.slug);
    writeStorage("story-bookmarks-v1", exists ? saved.filter((slug) => slug !== story.slug) : [story.slug, ...saved]);
    window.StoryAnalytics?.track("bookmark_toggle", { story_slug: story.slug, file_no: story.fileNo, state: exists ? "removed" : "saved" });
    render();
  });
  render();
}

function initIllustrationViewer(story) {
  const button = document.querySelector("#view-story-illustration");
  if (!button || !story.cover) return;
  button.addEventListener("click", () => {
    window.StoryAnalytics?.track("illustration_click", { story_slug: story.slug, file_no: story.fileNo, placement: "story_header" });
    const viewer = document.createElement("div");
    viewer.className = "illustration-viewer";
    viewer.setAttribute("role", "dialog");
    viewer.setAttribute("aria-modal", "true");
    viewer.setAttribute("aria-label", `${local(story.title)} — ${t("storyIllustration")}`);
    viewer.innerHTML = `<button type="button" aria-label="${esc(t("closeIllustration"))}">×</button><figure><img src="${esc(story.cover)}" alt="${esc(`${local(story.title)} — ${t("storyIllustration")}`)}"><figcaption>${esc(local(story.title))} · ${esc(story.fileNo)}</figcaption></figure>`;
    const close = () => { viewer.remove(); document.documentElement.classList.remove("viewer-open"); };
    viewer.querySelector("button").addEventListener("click", close);
    viewer.addEventListener("click", (event) => { if (event.target === viewer) close(); });
    document.addEventListener("keydown", function escape(event) { if (event.key === "Escape") { close(); document.removeEventListener("keydown", escape); } });
    document.body.appendChild(viewer);
    document.documentElement.classList.add("viewer-open");
    viewer.querySelector("button").focus();
  });
}

function initReadingExperience(story) {
  const prose = document.querySelector(".prose");
  const prompt = document.querySelector("#resume-reading");
  const continueButton = document.querySelector("#continue-reading");
  const restartButton = document.querySelector("#restart-reading");
  if (!prose) return;

  const progress = document.createElement("div");
  progress.className = "reading-progress";
  progress.setAttribute("role", "progressbar");
  progress.setAttribute("aria-label", t("readingProgress"));
  progress.setAttribute("aria-valuemin", "0");
  progress.setAttribute("aria-valuemax", "100");
  progress.setAttribute("aria-valuenow", "0");
  progress.innerHTML = `<div class="reading-progress-copy" aria-hidden="true"><span class="reading-progress-blessing">${esc(t("progressBlessing"))}</span><span class="reading-progress-destination">${esc(t("progressDestination"))}</span></div><div class="reading-progress-track" aria-hidden="true"><span class="reading-progress-fill"></span><span class="reading-progress-checkpoint"></span><span class="reading-progress-figure"><i class="figure-head"></i><i class="figure-body"></i><i class="figure-arm"></i><i class="figure-leg figure-leg-one"></i><i class="figure-leg figure-leg-two"></i></span><span class="reading-progress-goal"></span></div><div class="reading-progress-complete" aria-live="polite"></div>`;
  document.body.prepend(progress);
  document.documentElement.classList.add("reading-journey-active");

  const progressFill = progress.querySelector(".reading-progress-fill");
  const progressFigure = progress.querySelector(".reading-progress-figure");
  const progressComplete = progress.querySelector(".reading-progress-complete");

  const key = `story-reading-${story.slug}`;
  let saved = null;
  try { saved = JSON.parse(localStorage.getItem(key) || "null"); } catch {}
  if (prompt && saved?.ratio > 0.04 && saved.ratio < 0.97) {
    prompt.hidden = false;
    const percentage = prompt.querySelector("[data-resume-percent]");
    if (percentage) percentage.textContent = `${Math.round(saved.ratio * 100)}%`;
  }

  function measurements() {
    const top = prose.getBoundingClientRect().top + window.scrollY;
    const bottom = top + prose.offsetHeight;
    return { top, range: Math.max(1, bottom - top - window.innerHeight * 0.55) };
  }

  function currentRatio() {
    const { top, range } = measurements();
    return Math.max(0, Math.min(1, (window.scrollY - top + window.innerHeight * 0.14) / range));
  }

  let ticking = false;
  let lastStoredAt = 0;
  const reached = new Set();
  const milestones = [25, 50, 75, 100];
  const startedAt = Date.now();
  let visibleStartedAt = document.hidden ? 0 : Date.now();
  let activeMilliseconds = 0;
  function update(save = true) {
    const ratio = currentRatio();
    const percent = Math.round(ratio * 100);
    progressFill.style.width = `${percent}%`;
    progressFigure.style.left = `${Math.max(1, Math.min(99, percent))}%`;
    const complete = ratio >= 0.98;
    progress.classList.toggle("is-complete", complete);
    progressComplete.textContent = complete ? t("progressComplete") : "";
    progress.setAttribute("aria-valuenow", String(percent));
    progress.setAttribute("aria-valuetext", `${percent}% · ${complete ? t("progressComplete") : t("progressBlessing")}`);
    const milestonePercent = complete ? 100 : percent;
    milestones.forEach((milestone) => {
      if (milestonePercent >= milestone && !reached.has(milestone)) {
        reached.add(milestone);
        window.StoryAnalytics?.track("reading_milestone", { story_slug: story.slug, file_no: story.fileNo, percent: milestone });
      }
    });
    if (save && Date.now() - lastStoredAt > 450) {
      lastStoredAt = Date.now();
      try {
        if (ratio >= 0.98) localStorage.removeItem(key);
        else if (ratio > 0.025) localStorage.setItem(key, JSON.stringify({ ratio, updatedAt: new Date().toISOString() }));
      } catch {}
      updateReadingHistory(story, ratio);
    }
    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (prompt && !prompt.hidden && Math.abs(window.scrollY) > 90) prompt.hidden = true;
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(() => update(true));
    }
  }, { passive: true });
  window.addEventListener("resize", () => update(false), { passive: true });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden && visibleStartedAt) { activeMilliseconds += Date.now() - visibleStartedAt; visibleStartedAt = 0; }
    else if (!document.hidden && !visibleStartedAt) visibleStartedAt = Date.now();
  });
  window.addEventListener("pagehide", () => {
    update(true);
    if (visibleStartedAt) activeMilliseconds += Date.now() - visibleStartedAt;
    const activeSeconds = Math.max(1, Math.round(activeMilliseconds / 1000));
    window.StoryAnalytics?.track("reading_time", { story_slug: story.slug, file_no: story.fileNo, active_seconds: activeSeconds, elapsed_seconds: Math.round((Date.now() - startedAt) / 1000), completion_percent: Math.round(currentRatio() * 100) });
  });

  if (continueButton) continueButton.addEventListener("click", () => {
    const ratio = saved?.ratio || 0;
    if (prompt) prompt.hidden = true;
    window.setTimeout(() => {
      const { top, range } = measurements();
      window.scrollTo({ top: top + ratio * range, behavior: "smooth" });
    }, 20);
  });
  if (restartButton) restartButton.addEventListener("click", () => {
    try { localStorage.removeItem(key); } catch {}
    if (prompt) prompt.hidden = true;
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  update(false);
}

function initStory() {
  const slug = document.body.dataset.slug || params.get("slug") || stories[0]?.slug;
  const story = stories.find((item) => item.slug === slug) || stories[0];
  const reader = document.querySelector("#reader");
  if (!story) {
    reader.innerHTML = `<p>${esc(t("emptyTitle"))}</p>`;
    return;
  }
  document.title = `${local(story.title)} — Story Archive`;
  updateDocumentMetadata(story);
  const storyIllustration = story.cover ? `<figure class="story-illustration"><button type="button" class="story-illustration-image" id="view-story-illustration" aria-label="${esc(t("viewIllustration"))}"><img src="${esc(story.cover)}" alt="${esc(`${local(story.title)} — ${t("storyIllustration")}`)}" width="960" height="640" loading="eager" decoding="async" fetchpriority="high"><div class="story-illustration-overlay"><span>${esc(t("file"))} ${esc(story.fileNo)} · ${esc(local(story.category))}</span><blockquote>${esc(shareCopy(story, "description"))}</blockquote><b>${esc(t("viewIllustration"))} ↗</b></div></button><figcaption><span>${esc(t("storyIllustration"))}</span><b>${esc(formatDate(story.published))} · ${esc(story.fileNo)}</b></figcaption></figure>` : "";
  const resumePrompt = `<aside class="resume-reading" id="resume-reading" hidden><div><b>${esc(t("resumeTitle"))}</b><span>${esc(t("resumePosition"))}: <strong data-resume-percent>0%</strong></span></div><div><button type="button" id="continue-reading">${esc(t("continueReading"))}</button><button type="button" class="text-button" id="restart-reading">${esc(t("startOver"))}</button></div></aside>`;
  const shareActions = `<div class="story-share"><span>${esc(t("shareStory"))}</span><div><button type="button" id="bookmark-story" class="bookmark-story" aria-pressed="false"></button><button type="button" id="share-facebook">f&nbsp; ${esc(t("shareFacebook"))}</button><button type="button" id="copy-story-link">↗&nbsp; ${esc(t("copyLink"))}</button></div></div>`;
  const related = [...stories].filter((item) => item.slug !== story.slug).sort((a, b) => Number(categoryKey(b) === categoryKey(story)) - Number(categoryKey(a) === categoryKey(story)) || Number(b.editorPick) - Number(a.editorPick) || a.fileNo.localeCompare(b.fileNo)).slice(0, 3);
  const relatedHtml = `<section class="related-stories"><div class="section-label">${esc(t("relatedLabel"))}</div><div class="related-head"><h2>${esc(t("relatedTitle"))}</h2><a href="library.html?lang=${lang}">${esc(t("viewAll"))} →</a></div><div class="story-grid">${related.map(storyCard).join("")}</div></section>`;
  const tags = storyTags(story).map((tag) => `<a href="${tagUrl(tag)}">#${esc(tag)}</a>`).join("");
  const storyMeta = `<div class="story-taxonomy"><span>${esc(t("byAuthor"))} <a href="author.html?lang=${lang}">${esc(local(story.author))}</a></span><span>${esc(t("seriesLabel"))}: ${esc(story.series ? local(story.series) : t("standalone"))}</span><div>${tags}</div></div>`;
  reader.innerHTML = `<article class="reader-main"><nav class="breadcrumb"><a href="library.html?lang=${lang}">${esc(t("archive"))}</a><span>/</span><a href="${categoryUrl(story)}">${esc(local(story.category))}</a><span>/</span><b>${esc(story.fileNo)}</b></nav><header class="article-head"><div class="article-label"><span>${story.isNew ? esc(t("newFile")) : esc(t("complete"))}</span><i>${esc(t("file"))} / ${esc(story.fileNo)}</i></div><h1>${esc(local(story.title))}</h1><p>${esc(local(story.summary))}</p><div class="article-stats"><span>${esc(t("published"))}: ${esc(formatDate(story.published))}</span><span>${chapterCount(story)} ${esc(t("chapters"))}</span><span>${esc(t("readingTime"))} ${readingMinutes(story)} ${esc(t("minutes"))}</span></div>${storyMeta}<div class="content-warning"><b>${esc(t("fictionNotice"))}</b><span>${esc(local(story.warning))}</span></div></header>${resumePrompt}${storyIllustration}${shareActions}${adSlot("storyTop", "leaderboard", "reader-ad")}<div class="prose">${proseHtml(story)}</div><div class="chapter-end"><span>${esc(t("fileComplete"))}</span><h2>${esc(local(story.title))}</h2><p>${esc(t("endMessage"))}</p><a href="library.html?lang=${lang}">${esc(t("moreStories"))}</a></div>${relatedHtml}</article><aside class="reader-side"><div class="reading-card"><span>${esc(t("currentFile"))}</span><strong>${esc(story.fileNo)}</strong><p>${esc(local(story.category))}</p></div>${adSlot("storySidebar", "vertical", "tall-ad")}</aside>`;
  updateReadingHistory(story, readStorage(`story-reading-${story.slug}`, {}).ratio || 0);
  window.StoryAnalytics?.track("story_view", { story_slug: story.slug, file_no: story.fileNo, story_title: local(story.title), story_category: local(story.category), editor_pick: Boolean(story.editorPick) });
  initShareActions(story);
  initBookmark(story);
  initIllustrationViewer(story);
  initReadingExperience(story);
}

const infoPages = {
  about: {
    title: { en: "About Story Archive", zh: "关于故事档案库" },
    intro: { en: "Story Archive is a public, worldwide-language library designed for direct, mobile-friendly reading.", zh: "故事档案库是一座公开、支持世界语言并为直接分享与手机阅读设计的故事馆。" },
    sections: [
      [{ en: "What this site does", zh: "这个网站做什么" }, { en: "The archive turns locally owned Word manuscripts into searchable, shareable story pages. Every story has a stable link and can be read without registration.", zh: "本网站把本地拥有的 Word 故事整理成可搜索、可分享的独立页面。每篇故事都有固定链接，无需注册即可阅读。" }],
      [{ en: "Language", zh: "语言" }, { en: "English and Simplified Chinese are editorial editions. The worldwide-language menu can automatically translate the complete public site for other readers.", zh: "英文与简体中文是站内编辑版本；世界语言菜单可以为其他地区读者自动翻译整个公开网站。" }],
      [{ en: "Editorial status", zh: "内容说明" }, { en: "All stories are presented as fiction. Content notices appear on individual files where mature themes are present.", zh: "全部故事均以虚构作品发布。涉及成人或敏感主题时，故事页会显示内容提示。" }]
    ]
  },
  privacy: {
    title: { en: "Privacy Policy", zh: "隐私政策" },
    intro: { en: "Last updated: July 23, 2026", zh: "最后更新：2026 年 7 月 23 日" },
    sections: [
      [{ en: "Local reading data", zh: "本地阅读数据" }, { en: "This static website has no account, comment form or email database. Language, bookmarks, reading history and per-story reading position are stored in your browser so you can return to them. They are not synchronized across devices.", zh: "这个静态网站没有账号、评论或邮件数据库。语言偏好、收藏、阅读历史和每篇故事的阅读位置保存在你的浏览器中，方便下次继续使用；这些内容不会跨设备同步。" }],
      [{ en: copy.en.privacyAnalyticsTitle, zh: copy.zh.privacyAnalyticsTitle }, { en: copy.en.privacyAnalyticsText, zh: copy.zh.privacyAnalyticsText }],
      [{ en: "Cookies and advertising", zh: "Cookie 与广告" }, { en: "Clearly labelled advertising locations are reserved throughout the site. Until an approved provider and valid account details are configured, these locations display only a local house message and make no third-party advertising request. If Google or another provider is enabled later, third-party vendors may use cookies to measure or personalize advertising under their own policies. Readers can manage personalized advertising at https://adssettings.google.com. Where consent is required, analytics or advertising services load only after the reader makes a choice.", zh: "网站各页面已经预留并清楚标注广告位置。在通过平台审核并填入有效广告账户信息前，这些位置只显示本站说明，不会向任何第三方广告服务发出请求。未来如接入 Google 或其他广告服务商，第三方可能依据其隐私政策使用 Cookie 衡量或个性化广告。读者可前往 https://adssettings.google.com 管理个性化广告。在法律要求取得同意的地区，只有读者作出选择后才会加载相关统计或广告服务。" }],
      [{ en: "Your choices", zh: "你的选择" }, { en: "You can clear local website data or restrict cookies in your browser at any time.", zh: "你可以随时在浏览器中清除本地网站数据或限制 Cookie。" }]
    ]
  },
  terms: {
    title: { en: "Terms of Use", zh: "使用条款" },
    intro: { en: "By visiting Story Archive, you agree to these basic conditions.", zh: "访问故事档案库，即表示你同意以下基本条件。" },
    sections: [
      [{ en: "Copyright", zh: "内容版权" }, { en: "Unless otherwise stated, the site design, branding and story texts are protected by copyright. Sharing public page links is permitted; copying or commercially redistributing full stories without permission is not.", zh: "除非另有说明，网站设计、品牌元素和故事正文均受版权保护。可以分享公开页面链接，未经许可不得复制或商业分发全文。" }],
      [{ en: "Fiction notice", zh: "虚构声明" }, { en: "Stories are fictional literary works. Names, organizations, agencies and events should not be treated as factual reporting or legal advice.", zh: "故事属于虚构文学作品，文中人物、组织、机构和事件不应被视为真实报道或法律建议。" }],
      [{ en: "Advertising", zh: "广告" }, { en: "Advertising areas are visually separated from editorial content. External destinations are controlled by their respective operators.", zh: "广告区域会与故事正文明确区分。外部链接目标由各自运营方负责。" }]
    ]
  },
  contact: {
    title: { en: "Advertising & Editorial Contact", zh: "广告与内容合作" },
    intro: { en: "Advertising locations are prepared across the archive; third-party delivery remains off until an approved provider is connected. Editorial and future business enquiries will use the public contact listed on this page.", zh: "全站广告位置已经完成布局；在接入通过审核的广告服务前，不会加载第三方广告。内容与未来商业合作将统一使用本页公布的业务联系方式。" },
    sections: [
      [{ en: "Advertising status", zh: "广告状态" }, { en: copy.en.advertisingInactive, zh: copy.zh.advertisingInactive }],
      [{ en: "Publication rights", zh: "发布权说明" }, { en: "Stories are presented as fictional editorial works. Advertising will only be enabled after publication rights, provider approval and privacy requirements have been confirmed.", zh: "本站故事均以虚构编辑作品形式发布。只有在确认作品发布权、广告平台审核结果及隐私要求后，才会正式启用广告。" }]
    ]
  }
};

function initInfo() {
  const key = document.body.dataset.infoKey || params.get("page") || "about";
  const page = infoPages[key] || infoPages.about;
  const configuredEmail = String(siteConfig.businessEmail || "").trim();
  const businessEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(configuredEmail) ? configuredEmail : "";
  const contactPanel = key === "contact" ? `<aside class="business-contact"><span>${esc(t("businessContact"))}</span>${businessEmail ? `<a href="mailto:${esc(businessEmail)}">${esc(businessEmail)}</a>` : `<strong>${esc(t("businessContactPending"))}</strong>`}</aside>` : "";
  document.title = `${local(page.title)} — Story Archive`;
  document.querySelector("#info-content").innerHTML = `<div class="section-label">PUBLIC DOCUMENT</div><h1>${esc(local(page.title))}</h1><p class="intro">${esc(local(page.intro))}</p>${contactPanel}${page.sections.map(([heading, text]) => `<section><h2>${esc(local(heading))}</h2><p>${esc(local(text))}</p></section>`).join("")}`;
}

initLanguageControls();
translateStaticPage();
document.addEventListener("click", (event) => {
  const link = event.target.closest?.("[data-story-link]");
  if (!link) return;
  window.StoryAnalytics?.track("story_card_click", { story_slug: link.dataset.storySlug || "", placement: link.dataset.storyLink || "unknown", page_type: document.body.dataset.page || "unknown" });
});
const page = document.body.dataset.page;
if (page === "home") initHome();
if (page === "library") initLibrary();
if (page === "story") initStory();
if (page === "info") initInfo();
if (page === "author") initAuthor();
if (page === "analytics") initAnalyticsDashboard();
initPageAdvertising(page);
window.addEventListener("story-consent-updated", activateProviderAds);

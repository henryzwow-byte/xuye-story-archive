const stories = Array.isArray(window.STORY_ARCHIVE) ? window.STORY_ARCHIVE : [];

const copy = {
  en: {
    topNote: "Eight stories from the private archive are now available.",
    navLibrary: "Library", navNew: "All files", navAbout: "About", openArchive: "Open archive →",
    heroTitle: "Every story has a file.<br><em>Open the one you came for.</em>",
    heroBody: "A clean, searchable library for complete stories. Read in English by default or switch the entire site to Simplified Chinese.",
    searchLabel: "Search stories", searchPlaceholder: "Search title, category or file number…", searchButton: "Find a file",
    storyFiles: "story files", collections: "collections", bilingual: "bilingual reading",
    trustOne: "✓ No sign-in required", trustTwo: "✓ Mobile reading optimized", trustThree: "✓ One shareable link per story", trustFour: "✓ English and Simplified Chinese",
    archiveDirectory: "ARCHIVE DIRECTORY", storyFolders: "Story folders", archiveQuote: "“A story deserves an ending people can find.”",
    sortLabel: "Sort", sortFile: "File number", sortTitle: "Title", adLeaderboard: "Leaderboard ad space · 970 × 90",
    emptyTitle: "No matching file", emptyBody: "Try another keyword or open a different folder.",
    statusTitle: "Your eight Word stories<br>are now organized here.",
    statusBody: "This free static site does not collect personal data. New stories can be added by replacing the story data file.", browseAll: "Browse all stories",
    footerText: "An independent archive for fictional stories and serial continuations.", footerAbout: "About", footerPrivacy: "Privacy", footerTerms: "Terms", footerAds: "Advertising",
    allStories: "All Stories", matched: "matching files", file: "FILE", complete: "COMPLETE", openFile: "Open file", imported: "Imported from Word", chapters: "sections",
    featured: "FEATURED FILE", readStory: "Read the full story", previousStory: "Previous story", nextStory: "Next story", carouselLabel: "Featured stories", storyPosition: "Story", backLibrary: "← Back to library", archive: "Story Archive",
    fictionNotice: "FICTION / CONTENT NOTICE", updated: "Archive file", readingTime: "Estimated reading", minutes: "min",
    adStory: "Story-page ad space · 728 × 90", adInline: "In-article ad space · responsive", adSide: "Sidebar ad space · 300 × 600",
    currentFile: "CURRENT FILE", storyIllustration: "Story illustration", fileComplete: "FILE COMPLETE", endMessage: "You have reached the end of this story.", moreStories: "Explore more stories",
    published: "Published", newFile: "NEW FILE", shareStory: "SHARE THIS FILE", shareFacebook: "Share on Facebook", copyLink: "Copy link", copied: "Link copied",
    resumeTitle: "Continue where you left off?", resumePosition: "Your last reading position", continueReading: "Continue reading", startOver: "Start from the beginning", readingProgress: "Reading progress"
  },
  zh: {
    topNote: "你本地故事会文件夹中的 8 篇故事现已全部入库。",
    navLibrary: "故事库", navNew: "全部文件", navAbout: "关于", openArchive: "打开档案库 →",
    heroTitle: "每一个故事，都有一份档案。<br><em>打开你正在寻找的那一篇。</em>",
    heroBody: "一个清晰、可搜索的完整故事库。网站默认显示英文，也可以一键切换为简体中文。",
    searchLabel: "搜索故事", searchPlaceholder: "搜索标题、分类或档案编号……", searchButton: "查找档案",
    storyFiles: "篇故事档案", collections: "个故事分类", bilingual: "英中双语阅读",
    trustOne: "✓ 无需登录", trustTwo: "✓ 手机阅读优化", trustThree: "✓ 每篇故事独立链接", trustFour: "✓ 英文与简体中文切换",
    archiveDirectory: "档案目录", storyFolders: "故事文件夹", archiveQuote: "“每一个故事，都值得一个能被找到的结局。”",
    sortLabel: "排序", sortFile: "档案编号", sortTitle: "标题", adLeaderboard: "横幅广告位 · 970 × 90",
    emptyTitle: "没有匹配的档案", emptyBody: "换一个关键词，或打开其他文件夹。",
    statusTitle: "你的 8 篇 Word 故事<br>已经整理到这里。",
    statusBody: "这个免费静态网站不收集个人资料。以后添加新故事，只需替换故事数据文件。", browseAll: "浏览全部故事",
    footerText: "用于虚构故事与连载续篇的独立数字档案馆。", footerAbout: "关于", footerPrivacy: "隐私", footerTerms: "条款", footerAds: "广告合作",
    allStories: "全部故事", matched: "份匹配档案", file: "档案", complete: "已完结", openFile: "打开档案", imported: "来自 Word 文件", chapters: "个章节",
    featured: "推荐档案", readStory: "阅读全文", previousStory: "上一篇故事", nextStory: "下一篇故事", carouselLabel: "推荐故事", storyPosition: "故事", backLibrary: "← 返回故事库", archive: "故事档案库",
    fictionNotice: "虚构作品 / 内容提示", updated: "档案编号", readingTime: "预计阅读", minutes: "分钟",
    adStory: "故事页广告位 · 728 × 90", adInline: "文中广告位 · 自适应", adSide: "侧栏广告位 · 300 × 600",
    currentFile: "当前档案", storyIllustration: "故事插图", fileComplete: "档案完结", endMessage: "你已经读完这篇故事。", moreStories: "查看更多故事",
    published: "发布日期", newFile: "新入库", shareStory: "分享这份档案", shareFacebook: "分享到 Facebook", copyLink: "复制链接", copied: "链接已复制",
    resumeTitle: "继续上次阅读？", resumePosition: "上次读到", continueReading: "继续阅读", startOver: "从头开始", readingProgress: "阅读进度"
  }
};

const params = new URLSearchParams(location.search);
const storedLanguage = (() => { try { return localStorage.getItem("story-language"); } catch { return null; } })();
const lang = params.get("lang") === "zh" || (params.get("lang") !== "en" && storedLanguage === "zh") ? "zh" : "en";
const t = (key) => copy[lang][key] || copy.en[key] || key;
const local = (value) => value && typeof value === "object" ? (value[lang] || value.en || value.zh || "") : (value || "");
const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (character) => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[character]));

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

function initLanguageControls() {
  document.querySelectorAll(".lang-switch").forEach((container) => {
    container.innerHTML = `<button type="button" class="${lang === "en" ? "active" : ""}" data-language="en">English</button><button type="button" class="${lang === "zh" ? "active" : ""}" data-language="zh">简体中文</button>`;
    container.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.language)));
  });
}

function translateStaticPage() {
  document.querySelectorAll("[data-i18n]").forEach((element) => { element.textContent = t(element.dataset.i18n); });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => { element.innerHTML = t(element.dataset.i18nHtml); });
  const search = document.querySelector("#story-search");
  if (search) search.placeholder = t("searchPlaceholder");
  document.querySelectorAll("a.info-link, a.home-link").forEach((link) => { link.href = localizedHref(link.getAttribute("href")); });
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

function storyCard(story, index) {
  const coverNumber = String(story.fileNo || index + 1).replace(/\D/g, "").slice(-2).padStart(2, "0");
  const coverMedia = story.cover
    ? `<img src="${esc(story.cover)}" alt="" width="960" height="640" loading="lazy" decoding="async">`
    : `<div class="glyph">${esc(story.glyph)}</div>`;
  return `<article class="story-card">
    <a class="cover tone-${esc(story.tone)}" href="${storyUrl(story)}" aria-label="${esc(local(story.title))}">${coverMedia}<span>${coverNumber}</span><span class="category">${esc(local(story.category))}</span><span class="chapter">${esc(t("complete"))}</span>${story.isNew ? `<span class="new-file-badge">${esc(t("newFile"))}</span>` : ""}</a>
    <div class="card-body"><div class="card-meta"><span>${esc(story.fileNo)}</span><span>${esc(formatDate(story.published))}</span><span>${readingMinutes(story)} ${esc(t("minutes"))}</span></div><h3><a href="${storyUrl(story)}">${esc(local(story.title))}</a></h3><p>${esc(local(story.summary))}</p><div class="tags"><span>#${esc(local(story.category))}</span><span>#${esc(t("imported"))}</span></div><a class="read-link" href="${storyUrl(story)}"><span>${esc(t("openFile"))}</span><b>→</b></a></div>
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
  let active = "all";
  let query = "";
  let sort = "file";
  const folderList = document.querySelector("#folder-list");
  const grid = document.querySelector("#story-grid");
  const count = document.querySelector("#result-count");
  const title = document.querySelector("#active-title");
  const empty = document.querySelector("#empty-state");
  const categoryMap = new Map();
  stories.forEach((story) => {
    const key = categoryKey(story);
    if (!categoryMap.has(key)) categoryMap.set(key, { label: story.category, count: 0 });
    categoryMap.get(key).count += 1;
  });
  const categories = [{ key: "all", label: { en: "All Stories", zh: "全部故事" }, count: stories.length }, ...Array.from(categoryMap, ([key, value]) => ({ key, ...value }))];
  document.querySelector("#story-total").textContent = stories.length;
  document.querySelector("#category-total").textContent = categoryMap.size;
  const topNote = document.querySelector('[data-i18n="topNote"]');
  const statusTitle = document.querySelector('[data-i18n-html="statusTitle"]');
  if (topNote) topNote.textContent = lang === "zh" ? `你本地故事会文件夹中的 ${stories.length} 篇故事现已全部入库。` : `${stories.length} stories from the private archive are now available.`;
  if (statusTitle) statusTitle.innerHTML = lang === "zh" ? `你的 ${stories.length} 篇 Word 故事<br>已经整理到这里。` : `Your ${stories.length} Word stories<br>are now organized here.`;
  initFeaturedCarousel();

  function renderFolders() {
    folderList.innerHTML = categories.map((category, index) => `<button class="folder ${category.key === active ? "active" : ""}" data-category="${esc(category.key)}"><span class="folder-icon"></span><span><b>${esc(local(category.label))}</b><small>${category.count} ${esc(lang === "zh" ? "篇" : "files")}</small></span><i>${category.key === "all" ? "ALL" : `0${index}`}</i></button>`).join("");
    folderList.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => { active = button.dataset.category; render(); }));
  }

  function render() {
    let items = stories.filter((story) => {
      const categoryMatch = active === "all" || categoryKey(story) === active;
      const haystack = [story.fileNo, story.title.en, story.title.zh, story.summary.en, story.summary.zh, story.category.en, story.category.zh].join(" ").toLowerCase();
      return categoryMatch && haystack.includes(query.toLowerCase());
    });
    items.sort((a, b) => sort === "title" ? local(a.title).localeCompare(local(b.title), lang === "zh" ? "zh-CN" : "en") : a.fileNo.localeCompare(b.fileNo));
    const activeCategory = categories.find((category) => category.key === active) || categories[0];
    title.textContent = local(activeCategory.label);
    count.textContent = `${items.length} ${t("matched")}`;
    grid.innerHTML = items.map(storyCard).join("");
    empty.hidden = items.length !== 0;
    renderFolders();
  }

  document.querySelector("#story-search").addEventListener("input", (event) => { query = event.target.value.trim(); render(); });
  document.querySelector("#search-form").addEventListener("submit", (event) => { event.preventDefault(); document.querySelector("#library").scrollIntoView({ behavior: "smooth" }); });
  document.querySelector("#sort-select").addEventListener("change", (event) => { sort = event.target.value; render(); });
  render();
}

function proseHtml(story) {
  let paragraphIndex = 0;
  return story.content[lang].map((paragraph) => {
    if (paragraph.startsWith("## ")) return `<h2>${esc(paragraph.slice(3))}</h2>`;
    paragraphIndex += 1;
    const paragraphHtml = `<p class="${paragraphIndex === 1 ? "dropcap" : ""}">${esc(paragraph)}</p>`;
    return paragraphIndex === 7 ? `${paragraphHtml}<div class="ad-slot mid-ad"><span>ADVERTISEMENT</span><p>${esc(t("adInline"))}</p></div>` : paragraphHtml;
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
    const target = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl.href)}`;
    window.open(target, "facebook-share", "popup=yes,width=690,height=620,noopener,noreferrer");
  });
  if (copyButton) copyButton.addEventListener("click", async () => {
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
  progress.innerHTML = "<span></span>";
  document.body.prepend(progress);

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
  function update(save = true) {
    const ratio = currentRatio();
    const percent = Math.round(ratio * 100);
    progress.firstElementChild.style.width = `${percent}%`;
    progress.setAttribute("aria-valuenow", String(percent));
    if (save && Date.now() - lastStoredAt > 450) {
      lastStoredAt = Date.now();
      try {
        if (ratio >= 0.98) localStorage.removeItem(key);
        else if (ratio > 0.025) localStorage.setItem(key, JSON.stringify({ ratio, updatedAt: new Date().toISOString() }));
      } catch {}
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
  window.addEventListener("pagehide", () => update(true));

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
  const storyIllustration = story.cover ? `<figure class="story-illustration"><div class="story-illustration-image"><img src="${esc(story.cover)}" alt="${esc(`${local(story.title)} — ${t("storyIllustration")}`)}" width="960" height="640" loading="eager" decoding="async" fetchpriority="high"><div class="story-illustration-overlay"><span>${esc(t("file"))} ${esc(story.fileNo)} · ${esc(local(story.category))}</span><blockquote>${esc(shareCopy(story, "description"))}</blockquote></div></div><figcaption><span>${esc(t("storyIllustration"))}</span><b>${esc(formatDate(story.published))} · ${esc(story.fileNo)}</b></figcaption></figure>` : "";
  const resumePrompt = `<aside class="resume-reading" id="resume-reading" hidden><div><b>${esc(t("resumeTitle"))}</b><span>${esc(t("resumePosition"))}: <strong data-resume-percent>0%</strong></span></div><div><button type="button" id="continue-reading">${esc(t("continueReading"))}</button><button type="button" class="text-button" id="restart-reading">${esc(t("startOver"))}</button></div></aside>`;
  const shareActions = `<div class="story-share"><span>${esc(t("shareStory"))}</span><div><button type="button" id="share-facebook">f&nbsp; ${esc(t("shareFacebook"))}</button><button type="button" id="copy-story-link">↗&nbsp; ${esc(t("copyLink"))}</button></div></div>`;
  reader.innerHTML = `<article class="reader-main"><nav class="breadcrumb"><a href="./?lang=${lang}">${esc(t("archive"))}</a><span>/</span><span>${esc(local(story.category))}</span><span>/</span><b>${esc(story.fileNo)}</b></nav><header class="article-head"><div class="article-label"><span>${story.isNew ? esc(t("newFile")) : esc(t("complete"))}</span><i>${esc(t("file"))} / ${esc(story.fileNo)}</i></div><h1>${esc(local(story.title))}</h1><p>${esc(local(story.summary))}</p><div class="article-stats"><span>${esc(t("published"))}: ${esc(formatDate(story.published))}</span><span>${chapterCount(story)} ${esc(t("chapters"))}</span><span>${esc(t("readingTime"))} ${readingMinutes(story)} ${esc(t("minutes"))}</span></div><div class="content-warning"><b>${esc(t("fictionNotice"))}</b><span>${esc(local(story.warning))}</span></div></header>${resumePrompt}${storyIllustration}${shareActions}<div class="ad-slot reader-ad"><span>ADVERTISEMENT</span><p>${esc(t("adStory"))}</p></div><div class="prose">${proseHtml(story)}</div><div class="chapter-end"><span>${esc(t("fileComplete"))}</span><h2>${esc(local(story.title))}</h2><p>${esc(t("endMessage"))}</p><a href="./?lang=${lang}">${esc(t("moreStories"))}</a></div></article><aside class="reader-side"><div class="reading-card"><span>${esc(t("currentFile"))}</span><strong>${esc(story.fileNo)}</strong><p>${esc(local(story.category))}</p></div><div class="ad-slot tall-ad"><span>ADVERTISEMENT</span><p>${esc(t("adSide"))}</p></div></aside>`;
  initShareActions(story);
  initReadingExperience(story);
}

const infoPages = {
  about: {
    title: { en: "About Story Archive", zh: "关于故事档案库" },
    intro: { en: "Story Archive is a bilingual library designed for direct, mobile-friendly reading.", zh: "故事档案库是一座为直接分享和手机阅读设计的双语故事库。" },
    sections: [
      [{ en: "What this site does", zh: "这个网站做什么" }, { en: "The archive turns locally owned Word manuscripts into searchable, shareable story pages. Every story has a stable link and can be read without registration.", zh: "本网站把本地拥有的 Word 故事整理成可搜索、可分享的独立页面。每篇故事都有固定链接，无需注册即可阅读。" }],
      [{ en: "Language", zh: "语言" }, { en: "English is the default. Readers can switch the interface, titles and story text to Simplified Chinese at any time.", zh: "网站默认显示英文。读者可以随时把界面、标题和故事正文切换为简体中文。" }],
      [{ en: "Editorial status", zh: "内容说明" }, { en: "All stories are presented as fiction. Content notices appear on individual files where mature themes are present.", zh: "全部故事均以虚构作品发布。涉及成人或敏感主题时，故事页会显示内容提示。" }]
    ]
  },
  privacy: {
    title: { en: "Privacy Policy", zh: "隐私政策" },
    intro: { en: "Last updated: July 20, 2026", zh: "最后更新：2026 年 7 月 20 日" },
    sections: [
      [{ en: "Current data collection", zh: "当前数据收集" }, { en: "This static website has no account system, comment form or email database. Language preference and per-story reading position are stored only in your browser so you can return to the same language and continue reading. They are not sent to Story Archive.", zh: "这个静态网站没有账号、评论或邮件数据库。语言偏好与每篇故事的阅读位置只保存在你的浏览器中，用于下次继续显示所选语言和恢复阅读；这些数据不会发送给故事档案库。" }],
      [{ en: "Cookies and advertising", zh: "Cookie 与广告" }, { en: "If advertising or analytics services are added later, those providers may use cookies or similar technologies under their own privacy policies. This policy will be updated before those services are enabled.", zh: "未来接入广告或访问分析服务时，服务商可能依据其隐私政策使用 Cookie 或类似技术。正式启用前，本政策会同步更新。" }],
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
    intro: { en: "The site layout includes standard placements for future advertising.", zh: "网站布局已经预留常见广告展示位置。" },
    sections: [
      [{ en: "Advertising placements", zh: "广告位置" }, { en: "The home page, story pages and reading sidebar include clearly labeled responsive ad spaces. Final formats depend on the selected advertising provider and its content review.", zh: "首页、故事正文和阅读侧栏都预留了带有明确标识的响应式广告位。最终格式取决于广告服务商及其内容审核。" }],
      [{ en: "Before applying", zh: "申请广告前" }, { en: "Add a real business email and confirm that you hold publication rights for every story. Advertising approval is decided by the provider and is not guaranteed by the presence of ad slots.", zh: "请先添加真实业务邮箱，并确认拥有每篇故事的发布权。广告位本身不代表一定通过广告平台审核，最终决定权属于广告服务商。" }]
    ]
  }
};

function initInfo() {
  const key = params.get("page") || "about";
  const page = infoPages[key] || infoPages.about;
  document.title = `${local(page.title)} — Story Archive`;
  document.querySelector("#info-content").innerHTML = `<div class="section-label">PUBLIC DOCUMENT</div><h1>${esc(local(page.title))}</h1><p class="intro">${esc(local(page.intro))}</p>${page.sections.map(([heading, text]) => `<section><h2>${esc(local(heading))}</h2><p>${esc(local(text))}</p></section>`).join("")}`;
}

initLanguageControls();
translateStaticPage();
const page = document.body.dataset.page;
if (page === "home") initHome();
if (page === "story") initStory();
if (page === "info") initInfo();

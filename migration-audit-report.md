# Migration Audit Report — vlad-weby.sk

**Date:** 2026-04-12
**Live site:** https://www.vlad-weby.sk
**New repo:** `/home/user/vlad-weby-complet-redesign` (branch `claude/audit-content-migration-cw8dt`)
**Overall readiness:** **CRITICAL GAPS — do NOT point the domain yet.**

---

## IMPORTANT — Crawl limitation

Direct HTTP fetch of `vlad-weby.sk` was blocked at the sandbox proxy layer on every attempt (`403 CONNECT tunnel failed` from `WebFetch`, `curl`, and the Wayback Machine). As a result, this audit assembled the live-site inventory from **Google's public index** via WebSearch (URLs + title/description snippets) rather than from full HTML.

What this **did** give us reliably:
- The canonical list of indexable URLs that currently hold rankings
- Existing `<title>` tags and some `<meta description>` text from SERP snippets
- Business-content signals (prices, services, cities, languages)

What this **did NOT** give us (marked "UNVERIFIED" where it matters):
- Full `<h1>/<h2>/<h3>` trees, full body paragraphs
- Complete `hreflang` and `<link rel="canonical">` values
- Full `<img alt>` values
- Full JSON-LD structured data
- The complete `sitemap.xml` URL list (may contain pages Google hasn't surfaced for our queries)

**Action required before launch:** Re-run the HTML-level comparison from an environment that can reach `vlad-weby.sk` (your laptop, a CI runner, or a fresh Claude Code session without the proxy restriction). The structural conclusions below stand regardless — the URL-level findings are the ones that need full-crawl confirmation.

---

## 1. Summary

| Metric | Value |
|---|---|
| Live-site URLs confirmed indexed | **12** (5 SK, 5 EN, 1 RU, 1 non-localised `/works/`) |
| New-repo routes | **12** (all under `/[locale]/`) |
| Locales live | SK, EN, RU (site markets DE; no indexed DE pages surfaced) |
| Locales in new repo | **EN, SK, RU only — `de` is missing** (`src/i18n/routing.js:5`) |
| Pages missing in new repo | **9 of 12** confirmed live URLs have no matching route |
| Pages with `export const metadata` | **2 of 12** (`layout.js` root + `businesscard/page.js`) |
| Hreflang / canonical in new repo | **None** |
| JSON-LD structured data in new repo | **None** |
| `app/sitemap.*`, `app/robots.*` | **Both missing** |
| `redirects` in `next.config.mjs` | **Empty** (`next.config.mjs:6`) |
| Detail pages with real content | **0** — `service-details`, `blog-details`, `protfolio-details` are Lorem Ipsum placeholders |
| Route typo | `/[locale]/protfolio` (should be `portfolio`) |

**Readiness score: CRITICAL GAPS.** Pointing the domain today would drop every ranking the site currently holds (SEO service page, the three Slovak city landers, the AI chatbot page, both English blog posts, the Russian SEO page, and the `/works/` portfolio) because none of those URLs exist in the new build and nothing is redirecting them.

---

## 2. Critical issues (rank-threatening)

### 2.1 Missing pages / URL structure mismatch

Nine of twelve live URLs have **no equivalent route** in the new repo. The new repo uses generic English template slugs (`all-services`, `service-details`, `protfolio`) where the live site uses semantic, localised, keyword-rich slugs that are what's actually ranking.

| # | Live URL | Status in new repo | Severity |
|---|---|---|---|
| 1 | `/sk/tvorba-web-stranok/` | ❌ Missing. Closest: generic `/sk/all-services`. | **critical** — primary SK money page |
| 2 | `/sk/seo-optimalizacia/` | ❌ Missing. Closest: placeholder `/sk/service-details`. | **critical** — primary SK service page |
| 3 | `/sk/web/trnava` | ❌ Missing. No city landers exist. | **critical** — city SEO |
| 4 | `/sk/web/nitra` | ❌ Missing. | **critical** — city SEO |
| 5 | `/en/ai-chatbot/` | ❌ Missing. A blog post with slug `ai-chatbot-for-business` exists but at a different URL. | **critical** — service landing page |
| 6 | `/en/why-seo/` | ❌ Missing. | **high** |
| 7 | `/en/blog/how-much-does-a-website-cost/` | ⚠️ Slug changed to `website-cost-2025`. | **high** — URL-level 404 |
| 8 | `/en/blog/how-to-improve-seo/` | ⚠️ Slug changed to `improve-website-seo`. | **high** — URL-level 404 |
| 9 | `/ru/seo-prodvizhenie` | ❌ Missing. | **critical** — only indexed RU page |
| 10 | `/works/` (non-localised) | ⚠️ Closest: `/[locale]/protfolio` — *different URL and contains a typo*. | **critical** — live portfolio page has multilingual SERP presence |
| 11 | `/sk/`, `/en/` | ✅ Present at `/sk`, `/en`. | OK |
| 12 | `/de/*` | ❌ Entire locale removed from routing. Site copy still says "SK · EN · DE · RU". | **high** if any DE pages are indexed or linked from ads |

**Fix:** either create matching routes (recommended — this is what ranks) or 301-redirect every legacy URL. A `redirects` map is drafted in §5.

### 2.2 No per-page metadata

10 of 12 routes have no `export const metadata` / `generateMetadata`. Every non-home page will inherit the site-wide title `"Vlad Weby"` and the generic description from `src/app/layout.js:4`. The live site today ships distinct, keyword-optimised titles like `"Tvorba web stránok Bratislava | od 390 - Vlad Weby"` and `"AI Chatbot for Business | 24/7 Support | Vlad Weby"`; losing these is a measurable rankings hit.

| Route | Has metadata? |
|---|---|
| `/[locale]` (home) | No |
| `/[locale]/all-services` | No |
| `/[locale]/contact` | No |
| `/[locale]/cookies` | No |
| `/[locale]/protfolio` | No |
| `/[locale]/protfolio-details` | No |
| `/[locale]/all-blog` | No |
| `/[locale]/blog/[slug]` | No |
| `/[locale]/blog-details` | No |
| `/[locale]/service-details` | No |
| `/[locale]/businesscard` | ✅ `src/app/[locale]/businesscard/page.js` |
| Root layout | ✅ `src/app/layout.js:4` |

**Fix:** add `export async function generateMetadata({ params })` to each page, pulling locale-specific strings from `messages/<locale>.json` under a new `metadata.<pageName>` key tree. For dynamic routes (`blog/[slug]`) generate based on the slug.

### 2.3 No hreflang / canonical alternates

Grep across `src/` returns zero matches for `hreflang`, `canonical`, or `alternates`. A multi-locale site (`/en`, `/sk`, `/ru`) without hreflang is a duplicate-content risk and prevents Google from serving the right language in SERPs.

**Fix:** in root layout or `generateMetadata`, return `alternates: { canonical, languages: { 'en': ..., 'sk': ..., 'ru': ... } }` for every page.

### 2.4 No sitemap.xml, no robots.ts

- No `app/sitemap.ts` / `app/sitemap.js` / `app/sitemap.xml/route.*`
- No `app/robots.ts`
- No `public/sitemap.xml` or `public/robots.txt` (only `public/img/`)

Multi-locale site with zero crawl hints — Google will take noticeably longer to rediscover the new URL structure, multiplying the ranking-drop window.

**Fix:** add `src/app/sitemap.js` enumerating all locale × route combinations + dynamic blog slugs; add `src/app/robots.js` pointing to the sitemap.

### 2.5 Placeholder content on three detail routes

These pages ship Lorem Ipsum-style English placeholders and are reachable by URL:

- `src/app/[locale]/service-details/page.js` — hardcoded "Business Branding" heading, accordion with placeholder text
- `src/app/[locale]/blog-details/page.js` — "Brand design that helps the company grow" + Lorem Ipsum
- `src/app/[locale]/protfolio-details/page.js` — "Brand Identity & Motion Design" + Lorem Ipsum

None of them are translated. If any of these are ever linked or indexed, they actively embarrass the brand.

**Fix:** either delete the routes (and add them to redirects) or wire them to real per-entity pages (`service-details/[slug]`, `blog/[slug]` already exists, `protfolio-details/[slug]`).

### 2.6 German locale marketed but not implemented

`src/i18n/routing.js:5` defines only `['en', 'sk', 'ru']`. `src/middleware.js:7` matcher is `['/', '/(sk|en|ru)/:path*']`. Site copy and SERP snippets still mention "SK · EN · DE · RU". Any visitor hitting `/de/*` (from an ad, older backlink, or ongoing marketing) will 404.

**Fix (pick one):**
- Add `de` locale, `messages/de.json`, update routing + middleware.
- Remove the "DE" claim from marketing copy.

### 2.7 Route typo: `protfolio`

`src/app/[locale]/protfolio/page.js` and `src/app/[locale]/protfolio-details/page.js` contain a misspelling. The live site uses `/works/`. Shipping with a typo in a URL is both an SEO and a credibility issue.

**Fix:** rename the directory to `portfolio` (and redirect the typo just in case). Better: rename to `works` to match the live URL, or redirect `/works` → `/[locale]/portfolio`.

---

## 3. Warnings (worth fixing, not immediate rank-killers)

### 3.1 Image alt text quality

~15 of 25 `<img>` tags use generic `alt="img"` (testimonial avatars, blog cards, pricing cards, header logo uses `alt="logo"`, drawer logo, project cards). None are translated. Good examples: banner hero (`alt="Vladislav Khvorov"`) and `Partner.jsx` (`alt={name}`).

**Fix:** pass translated alt text via `t()` calls; at minimum replace `"img"` with descriptive English copy.

### 3.2 Blog-slug changes

The two known-indexed EN blog posts keep their content but change URL slug:

| Live slug | New-repo slug |
|---|---|
| `how-much-does-a-website-cost` | `website-cost-2025` |
| `how-to-improve-seo` | `improve-website-seo` |

These **will** 404 on the new site unless redirected. The content itself appears present and translated — only the URL needs fixing.

### 3.3 JSON-LD structured data

No `<script type="application/ld+json">` anywhere in `src/`. We could not verify what the **live** site ships (403 on fetch), but it is common for a local-services business in Bratislava to carry `LocalBusiness`, `Service`, `FAQPage`, and `Article` schemas. Assume these exist and need to be re-added.

**Fix:** add `LocalBusiness` JSON-LD on the contact/home page (address, phone, geo), `Service` on each service landing, `Article` on each blog post, `Organization` in root layout.

### 3.4 Hardcoded contact strings

`src/app/[locale]/contact/page.js:27,31,35` hardcodes `v.hvorov73@gmail.com`, `+421 919 208 426`, `Bottova 2A, 811 09 Bratislava`. Correct data, but duplicating it across code + messages is a drift risk.

---

## 4. Heading / content comparison (partial — live HTML not fetched)

This section is intentionally incomplete pending a full crawl. What we can confirm:

- **Home `/[locale]`:** Banner H1 is driven by `banner.earnMoney` message key. We didn't retrieve the live H1 to diff. **Action: re-run after full crawl.**
- **Services / AI / SEO pages:** live site uses service-specific H1s ("SEO Optimalizácia Bratislava", "AI Chatbot for Business"); new repo serves them all through the generic `PageHeader` driven by `pages.allServices.heading` ("Services All"). Even if the URL is redirected, landing on a generic H1 will look like a downgrade.
- **Detail pages:** as noted, new-repo detail pages are placeholders; no comparison needed — they must be rewritten.

---

## 5. Redirect map (`next.config.mjs`)

Add the following under `nextConfig.redirects`. Marking all permanent (`301`) — these are legacy URLs being consolidated. **Only ship redirects that actually land on a meaningful page;** if you decide to build the missing routes instead, drop the corresponding redirect.

```js
// next.config.mjs
const nextConfig = {
  async redirects() {
    return [
      // --- Slovak service pages (currently no equivalents — temporary targets)
      { source: '/sk/tvorba-web-stranok', destination: '/sk/all-services', permanent: true },
      { source: '/sk/tvorba-web-stranok/', destination: '/sk/all-services', permanent: true },
      { source: '/sk/seo-optimalizacia', destination: '/sk/all-services', permanent: true },
      { source: '/sk/seo-optimalizacia/', destination: '/sk/all-services', permanent: true },
      { source: '/sk/web/trnava', destination: '/sk/all-services', permanent: true },
      { source: '/sk/web/nitra', destination: '/sk/all-services', permanent: true },

      // --- English service pages
      { source: '/en/ai-chatbot', destination: '/en/all-services', permanent: true },
      { source: '/en/ai-chatbot/', destination: '/en/all-services', permanent: true },
      { source: '/en/why-seo', destination: '/en/all-services', permanent: true },
      { source: '/en/why-seo/', destination: '/en/all-services', permanent: true },

      // --- English blog slug changes (content exists, URL changed)
      { source: '/en/blog/how-much-does-a-website-cost', destination: '/en/blog/website-cost-2025', permanent: true },
      { source: '/en/blog/how-much-does-a-website-cost/', destination: '/en/blog/website-cost-2025', permanent: true },
      { source: '/en/blog/how-to-improve-seo', destination: '/en/blog/improve-website-seo', permanent: true },
      { source: '/en/blog/how-to-improve-seo/', destination: '/en/blog/improve-website-seo', permanent: true },

      // --- Russian SEO page
      { source: '/ru/seo-prodvizhenie', destination: '/ru/all-services', permanent: true },

      // --- Non-localised portfolio
      { source: '/works', destination: '/en/protfolio', permanent: true },
      { source: '/works/', destination: '/en/protfolio', permanent: true },

      // --- Route typo safety net (if 'protfolio' is renamed to 'portfolio')
      // { source: '/:locale/protfolio', destination: '/:locale/portfolio', permanent: true },
      // { source: '/:locale/protfolio-details', destination: '/:locale/portfolio-details', permanent: true },

      // --- Legacy German URLs (if any exist) — send to English
      // { source: '/de/:path*', destination: '/en/:path*', permanent: false },
    ];
  },
};
```

**Strong recommendation:** rebuild the four highest-traffic landing pages (`tvorba-web-stranok`, `seo-optimalizacia`, `ai-chatbot`, `seo-prodvizhenie`) as real routes rather than redirecting everything to the generic `all-services` page. A 301 preserves some link equity, but a matching page preserves the ranking intent.

---

## 6. Recommended pre-launch checklist

Ordered by impact:

1. [ ] Re-run live-site crawl from an un-restricted environment; diff actual HTML.
2. [ ] Build real routes for the four critical landers (`tvorba-web-stranok`, `seo-optimalizacia`, `ai-chatbot`, `seo-prodvizhenie`) with their legacy URLs preserved.
3. [ ] Build `/sk/web/trnava` and `/sk/web/nitra` city landers (Trnava/Nitra are otherwise not mentioned anywhere in the new repo).
4. [ ] Add `generateMetadata` to every page, keyed off localised message strings.
5. [ ] Add `alternates.languages` hreflang in root `generateMetadata`.
6. [ ] Add `src/app/sitemap.js` + `src/app/robots.js`.
7. [ ] Add `redirects()` in `next.config.mjs` (§5) for any legacy URLs that stay dead.
8. [ ] Decide DE locale: either ship it or remove "DE" from marketing copy.
9. [ ] Rename `protfolio` → `portfolio` (or `works`); add redirects.
10. [ ] Delete or implement the three placeholder detail pages.
11. [ ] Add `LocalBusiness`, `Organization`, `Article` JSON-LD.
12. [ ] Replace `alt="img"` / `alt="logo"` with descriptive, translated alt text.
13. [ ] Verify `v.hvorov73@gmail.com` and `+421 919 208 426` are the canonical contacts (they match the live site).

---

## 7. Files

- `live-site-content.json` — URL inventory + available SERP metadata for the live site. Flagged as partial (see `_meta.crawl_limitations`).
- `new-repo-content.json` — route-by-route extraction from the new repo.
- `migration-audit-report.md` — this report.

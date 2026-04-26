# SEO Audit — vlad-weby.sk

Audit date: 2026-04-26. Standard of comparison: `SEO optimisation.md` in this repo. Read-only — no code or content was modified.

## Context observations

- **Stack discrepancy.** The audit prompt describes "Next.js + Tailwind + Three.js + GSAP." `package.json` actually pins `next 14.2.28`, `next-intl`, `aos`, `react-fast-marquee`, and `swiper` only — no `three`, no `gsap`. CWV findings below are scoped to what's actually shipped (AOS scroll-reveal + Next/Image + CSS background) rather than to a hypothetical canvas/GSAP timeline that does not exist.
- **Locale model.** Slovak is the un-prefixed default (`/`); EN/DE/RU live under `/en`, `/de`, `/ru`. Service slugs are localized per `src/i18n/routing.js` and `src/lib/localizedPaths.js` (e.g., `/tvorba-web-stranok`, `/en/web-design`, `/ru/sozdanie-saitov`). Hreflang and per-locale canonicals are wired through `src/lib/seo.js#getAlternates`.
- **Single-location SAB.** Vlad Weby is a one-person service-area business in Bratislava. The audit treats it as a SAB throughout (per the prompt) and applies Google's SAB address-hiding policy from playbook §"Industry-specific nuances" (line 132).

---

## 1. Executive summary

The site has a strong technical scaffolding (clean per-locale routing, programmatic hreflang/canonicals, real `next/image`, dedicated metadata helper, BlogPosting + LocalBusiness JSON-LD, working Formspree integration on the home/services CTA form). But there are five business-impact issues that override most of that work:

1. **A fabricated `aggregateRating` (`5.0`, `13` reviews) is published on every page** while the visible page only renders three testimonials. Per the user's audit criteria *and* Google's review-snippet policy, this is a removable schema policy violation that risks a manual action, not just a missed feature. (See Critical #3.)
2. **A public street address (`Bottova 2A, 811 09 Bratislava`) is published in the footer, the contact page, the About card, *and* in the LocalBusiness JSON-LD** — even though the business is a service-area business with no public storefront. Per playbook line 132, this is a Google policy risk and should be hidden. (Critical #2.)
3. **Six "Why X / Prečo X / Зачем X" landing pages render the same `ServicePage` component as canonical service pages, three of them with an intent mismatch** (URLs about Google Business Profile rendering the SEO service body). This is the exact "scaled / unhelpful local content" pattern Google has spent 2024–2026 devaluing (playbook line 9, 41, 206). (Critical #4.)
4. **`<html lang="en">` is hardcoded for all four locales.** The `next-intl` provider sits *inside* `<body>`, so SK/EN/DE/RU pages all advertise their language as English to assistive tech, browsers, and search engines. (Critical #1.)
5. **Two articles intended as Slovak blog posts (`SeoArticle`, `AiChatbotArticle`) are byte-identical to their English siblings, and *every* German blog URL serves English content** because no `de` article components exist. Hreflang says "this is a Slovak/German page" — Googlebot reads English. (Critical #5/6.)

Compounding these: the contact-page form does nothing (`<Link href="">` instead of a submit button, no handler), every interior page has two `<h1>` elements, and the LCP hero PNG is 656 KB while the homepage portfolio uses 1.0–1.2 MB raster files.

Fixing all five executive-summary issues is roughly 1–2 focused days of work and would lift the site out of the riskiest territory before any new content investment is made.

---

## 2. Findings

### 🔴 Critical

#### C1. `<html lang="en">` is hardcoded sitewide regardless of locale

- **What's wrong.** The root `<html>` element is rendered in `src/app/layout.js` with a hard-coded `lang="en"`. The locale-aware layout (`src/app/[locale]/layout.js`) only wraps children in `<NextIntlClientProvider>` — it never overrides the language attribute.
- **Where.** `src/app/layout.js:36` (`<html lang="en" ...>`); `src/app/[locale]/layout.js:17–24`.
- **Why it matters.** Playbook §"Multilingual / hreflang" requires reciprocal hreflang and *separate* URLs per locale, but the language signal must also match the rendered content. Google states `lang` is one of several signals it uses to determine page language. SK / DE / RU pages currently broadcast "English" to the browser, screen readers, and language-detection heuristics.
- **Locales affected.** All 4.
- **Recommended fix.** Move the `<html>` and `<body>` tags into `src/app/[locale]/layout.js` and set `<html lang={locale}>` there. Convert the root layout into a passthrough that only renders `{children}` and preserves the `<head>` `impact-site-verification` meta. If keeping a single root layout is preferred, generate `<html lang>` from the URL segment in middleware-compatible logic — but per the App Router docs the cleanest fix is a per-locale layout that owns `<html>`.

#### C2. Public street address published despite SAB policy

- **What's wrong.** A street-level address (`Bottova 2A, 811 09 [Staré Mesto,] Bratislava`) is rendered in four places, including the LocalBusiness JSON-LD that Google reads for entity confirmation. The prompt and playbook line 132 require an SAB to *hide* the address.
- **Where.**
  - `src/Components/Seo/LocalBusinessJsonLd.jsx:18–23` (`address.streetAddress: "Bottova 2a"`)
  - `src/Components/Shared/Footer.jsx:64` (`<p>Bottova 2A, 811 09 Staré Mesto, Bratislava</p>`)
  - `src/app/[locale]/contact/page.js:35` (`Bottova 2A, 811 09 Bratislava`)
  - `src/Components/About/AboutMe.jsx:13` (`contact: "Bottova 2A, Bratislava"`)
- **Why it matters.** Playbook §"Industry-specific nuances" line 132: "For service-area businesses, Google's own policy still requires you to hide the address if you do not serve customers at a staffed storefront." Publishing a residential/non-storefront address contradicts the GBP setup and is a recurring suspension trigger (playbook lines 74, 104, 204).
- **Locales affected.** All 4 (the address is hardcoded outside the i18n system).
- **Recommended fix.**
  1. **JSON-LD:** replace the `address` block in `LocalBusinessJsonLd.jsx:17–23` with a region-only descriptor:
     ```json
     "address": { "@type": "PostalAddress", "addressLocality": "Bratislava", "addressRegion": "Bratislavský kraj", "addressCountry": "SK" },
     "areaServed": [ ... existing countries ... ]
     ```
     Drop `streetAddress` and `postalCode`; keep `addressLocality` for entity disambiguation.
  2. **Footer (`Footer.jsx:61–74`):** remove the street line. Keep the named-person line (`Bc. Vladislav Khvorov` + `Vlad Weby`) and the "Bratislava, Slovakia" locality, plus the phone number. Keep the `<address>` element wrapper for accessibility.
  3. **Contact page (`contact/page.js:33–36`):** replace the address card with a "Service area" card listing "Bratislava and surroundings · Slovakia · Austria · Germany" (or an embedded service-area map).
  4. **AboutMe (`AboutMe.jsx:13`):** change `contact: "Bottova 2A, Bratislava"` to `contact: "Bratislava, Slovakia"`.

#### C3. Fabricated `aggregateRating` in JSON-LD without first-party reviews on the page

- **What's wrong.** The home-page `LocalBusinessJsonLd` declares `aggregateRating: { ratingValue: "5.0", reviewCount: "13" }` for every visitor on every page. The on-page `Testimonial` component renders **three** hand-written quotes. There is no on-page review collection, no `Review` markup, and no on-page UI tied to the "13" count.
- **Where.** `src/Components/Seo/LocalBusinessJsonLd.jsx:65–69`.
- **Why it matters.** The audit prompt is explicit: "**No fake review markup**, no `aggregateRating` without legitimate underlying reviews." Independent of the prompt, Google's review-snippet policy requires self-serving reviews to be first-party (collected by the business, displayed on the page where the markup is). GBP star ratings cannot be re-published as `aggregateRating` on the website itself, and the schema's `13` count does not match the visible 3 testimonials, so this fails on both sides — content alignment *and* policy.
- **Locales affected.** All 4 (schema is identical per locale).
- **Recommended fix.** Two options:
  - **Safest (recommended now).** Delete lines 65–69 from `LocalBusinessJsonLd.jsx`. Lean on GBP for the visible rating; do not echo it into website schema.
  - **Compliant alternative.** Add a real on-page reviews section with multi-source review widgets that show the same `reviewCount` actually displayed; only then re-add `aggregateRating` with a number tied to the on-page list, plus per-`Review` `Review` blocks per Google's structured-data policy. This is more work than C3 deserves on its own — see Medium #M1 for the related Testimonials hardening.

#### C4. Doorway / duplicate landing pages reuse the same service component (with intent mismatches)

- **What's wrong.** Six locale-specific landing pages render the exact same `<ServicePage serviceKey="..." />` body as canonical service pages, with three of them using a `serviceKey` that does *not* match the URL's stated topic.

  | URL | `serviceKey` | Stated topic | Body actually shown |
  |---|---|---|---|
  | `/preco-web` (SK) | `webDesign` | "Why you need a website" | Web design service page |
  | `/preco-seo` (SK) | `seo` | "Why you need SEO" | SEO service page |
  | `/preco-google-profil` (SK) | **`seo`** | Google Business Profile | **SEO service page (mismatch)** |
  | `/en/why-website` | `webDesign` | "Why you need a website" | Web design service page |
  | `/en/why-seo` | `seo` | "Why you need SEO" | SEO service page |
  | `/en/why-google-business` | **`seo`** | Google Business Profile | **SEO service page (mismatch)** |
  | `/ru/zachem-sait` | `webDesign` | "Why your business needs a website" | Web design service page |
  | `/ru/zachem-seo` | `seo` | "Why you need SEO" | SEO service page |
  | `/ru/zachem-google-biznes` | **`seo`** | Google Business Profile | **SEO service page (mismatch)** |

  All nine are submitted to the sitemap with `priority: 0.7`. Because each shares its body with the canonical service page (e.g., `/tvorba-web-stranok`, `/en/web-design`), they are near-duplicates of the canonical and of each other within the same locale.
- **Where.**
  - SK: `src/app/[locale]/preco-web/page.js`, `preco-seo/page.js`, `preco-google-profil/page.js`
  - EN: `why-website/page.js`, `why-seo/page.js`, `why-google-business/page.js`
  - RU: `zachem-sait/page.js`, `zachem-seo/page.js`, `zachem-google-biznes/page.js`
  - Sitemap inclusion: `src/app/sitemap.js:22–27`
  - Route map (single-locale): `src/lib/seo.js:42–47`
- **Why it matters.** Playbook line 9: "the biggest website risk is not a lack of tricks; it is publishing unhelpful, thin, or scaled local pages. Since March 2024, the Helpful Content system has been folded into core ranking systems… mass-produced city pages, parasite-style placements, and low-substance SEO copy are materially riskier." Lines 41 and 206 reinforce: "create dozens of near-duplicate 'service in city' pages with only the city swapped out — that crosses directly into the kind of scaled or unhelpful content pattern Google has spent 2024–2026 devaluing." The intent-mismatched trio (`preco-google-profil`, `why-google-business`, `zachem-google-biznes`) is the worst case — searchers and Google both arrive expecting GBP content and find an SEO service pitch. This is also a UX-hostile bait-and-switch.
- **Locales affected.** SK (3), EN (3), RU (3); DE has no equivalents.
- **Recommended fix.** Pick one of two paths and apply consistently across all three locales:
  - **Preferred — collapse and redirect.** Delete the nine `[locale]/<slug>/page.js` files and the sitemap entries for `landing-preco-*`, `landing-why-*`, `landing-zachem-*` in `src/app/sitemap.js:22–27`. Add 301 redirects in `next.config.mjs` from `/preco-web → /tvorba-web-stranok`, `/preco-seo → /seo-optimalizacia`, `/preco-google-profil → <new GBP article slug>` (see below), `/en/why-website → /en/web-design`, `/en/why-seo → /en/seo-services`, `/en/why-google-business → <new GBP article>`, and the equivalent RU pairs. Remove the routeMap entries `landing-preco-*`, `landing-why-*`, `landing-zachem-*` from `src/lib/seo.js:36–47`.
  - **Alternative — make them real.** If the goal is to capture awareness-stage queries ("why a website", "why SEO", "why a Google profile"), each page must have *unique* awareness-stage body content (not the bottom-of-funnel `ServicePage` pricing/CTA component). For the Google-Business-Profile trio specifically, write a real GBP article (problem → setup steps → optimization checklist → outcomes), `noindex` until written, and only then re-publish.

#### C5. Slovak `SeoArticle` and `AiChatbotArticle` ship English content

- **What's wrong.** `src/Components/Articles/sk/SeoArticle.jsx` is **byte-identical** to `src/Components/Articles/SeoArticle.jsx`. `src/Components/Articles/sk/AiChatbotArticle.jsx` differs from the English version by a single line (a `/all-blog` link). Both render entirely in English to the visitor of `/blog/ako-zlepsit-seo` and `/blog/ai-chatbot-pre-firmy`.
- **Where.**
  - `src/Components/Articles/sk/SeoArticle.jsx` (verified `cmp -s` exit 0 vs. `Articles/SeoArticle.jsx`)
  - `src/Components/Articles/sk/AiChatbotArticle.jsx` (verified `diff` shows one line difference)
  - The other four SK article files (`EntrepreneursArticle`, `WebsiteCostArticle`, `WordpressVsModernArticle`, `ChatgptShoppingArticle`) are correctly translated to Slovak.
- **Why it matters.** Playbook §"Multilingual / hreflang" warns that hreflang sends users to the right localized variant; if the variant content does not match the declared language, the variant becomes a low-quality duplicate of the source. The page metadata (`messages/sk.json`, `BlogPostingJsonLd` headlines) is in Slovak, so the title and JSON-LD claim Slovak content while the body is English. This is a strong negative signal.
- **Locales affected.** SK (2 articles).
- **Recommended fix.** Translate `Articles/sk/SeoArticle.jsx` and `Articles/sk/AiChatbotArticle.jsx` end-to-end into Slovak. Use the existing translated SK articles (e.g., `EntrepreneursArticle`, `WordpressVsModernArticle`) as the editorial style reference. Until the translations are in, set `notFound()` for these two SK slugs in `blog/[slug]/page.js` rather than serving the English fallback — a 404 is preferable to a hreflang/content mismatch.

#### C6. Every German blog URL serves English content

- **What's wrong.** `src/app/[locale]/blog/[slug]/page.js:32–57` defines `articleComponents` only for `en`, `sk`, and `ru`. The lookup `const localeArticles = articleComponents[locale] || articleComponents.en;` (line 87) silently falls back to English for `locale === 'de'`. There is no `Articles/de/` folder.
- **Where.** `src/app/[locale]/blog/[slug]/page.js:32–87`. Slugs surfaced for DE in `src/lib/localizedPaths.js:47–84` (DE blog slugs reuse the canonical English slug, so URLs like `/de/blog/website-cost-2025`, `/de/blog/ai-chatbot-for-business` are advertised in the sitemap).
- **Why it matters.** Same content-vs-hreflang failure as C5, applied across **all six** blog posts × DE. Hreflang `de` declares German, BlogPosting JSON-LD declares German (`headline`, `description` per `BlogPostingJsonLd.jsx`), the meta description in `seo.js:439–445` is German — but the rendered article body is English. Compounded with C5, currently 8 of the 24 published blog × locale combinations have body content that does not match the declared language.
- **Locales affected.** DE (all 6 blog articles).
- **Recommended fix.** Either (a) commission DE translations for all six articles and add `Articles/de/*.jsx` files plus a `de` key in the `articleComponents` map, or (b) until translations are written, remove the DE blog URLs from the sitemap (`src/app/sitemap.js:54–66`), have `getAlternates` skip DE for blog posts, and `notFound()` in `blog/[slug]/page.js` when `locale === 'de'`. Do not rely on the silent EN fallback.

---

### 🟠 High

#### H0a. Two `<h1>` elements on every interior page (and on the home page)

- **What's wrong.** `src/Components/Shared/PageHeader.jsx:15` renders an `<h1>{heading}</h1>`. `src/Components/ServicePages/ServicePage.jsx:36` *also* renders an `<h1>...</h1>` for `t('heroTitle')`. Every page wrapped by both components ends up with two `<h1>`s. The home page is the same: `Banner.jsx:67` already has the hero `<h1>`, and `Services` is rendered with `isHeading={true}` (`src/app/[locale]/page.js:31`), which mounts a second `<h1>` inside `Services.jsx:33` via `<PageHeader>`.

  Affected routes: `/` (home), `/all-services`, `/portfolio`, `/contact`, all 4 services subpages, all 6 doorway pages, all 6 blog posts via `[locale]/blog/[slug]`, and `/cookies`, `/privacy-policy`. Net: every public page except `/businesscard` carries two H1s.
- **Where.**
  - `src/Components/Shared/PageHeader.jsx:15` (the breadcrumb-style header h1)
  - `src/Components/ServicePages/ServicePage.jsx:36` (the in-body h1)
  - `src/Components/Banner.jsx:67` (home hero h1)
  - `src/Components/Services/Services.jsx:32–34` (mounts a second header on home)
- **Why it matters.** Playbook §"Website optimization" line 39: "Every indexable local landing page should have a unique, descriptive title tag, a matched H1." A single H1 lets Google match it to the title with high confidence. Two H1s split that signal and dilute the topical match. The breadcrumb-style "AI Chatbot" plus the in-body "AI Chatbot for Business" are also redundant content above the fold.
- **Locales affected.** All 4.
- **Recommended fix.**
  1. In `src/Components/Shared/PageHeader.jsx:15`, change `<h1 ...>{heading}</h1>` to `<p className="..."> {heading}</p>` — keep the visual styling, drop the heading-tag semantics. PageHeader becomes a breadcrumb/title strip, not the page H1.
  2. On the home page, decide whether the canonical H1 lives in `Banner.jsx` ("Websites that earn money") or in the page-level `<h1>`. Recommend keeping `Banner.jsx`'s H1 as the canonical home H1 and demoting `PageHeader` everywhere as in step 1. Then remove the `isHeading={true}` PageHeader call on the home page services section so the only H1 is the hero copy.
  3. Verify each route afterward has exactly one `<h1>`.

#### H0b. Contact-page form is not a form (no submit, no handler) — conversion blocker

- **What's wrong.** `src/Components/Shared/Form.jsx:18` declares `<form action="#">`, every input lacks a `name`, and the "submit" button is a `<Link href="">` (lines 43–48). The link goes nowhere; even if a user fills the fields, nothing is submitted. The home/services page uses a different, working `Metting.jsx` component (Formspree-backed), so the home form works — but the dedicated contact page does not.
- **Where.** `src/Components/Shared/Form.jsx:18`, `21–42` (no `name` attributes), `43–48` (`<Link href="">`).
- **Why it matters.** Strictly this is a conversion bug, not an SEO bug — but it nullifies every other SEO improvement. Search visibility that lands on a broken contact form generates zero leads. Listing this here so it doesn't get treated as out of scope.
- **Locales affected.** All 4 (the component is locale-agnostic).
- **Recommended fix.** Replace `Form.jsx` body with the same Formspree integration pattern already used by `Metting.jsx:23–41`: `useState` for form data, `handleSubmit(e)` calling `fetch("https://formspree.io/f/xzznlkne", { method: "POST", ... })`, `name=` attributes on every input, a real `<button type="submit">` instead of a `<Link>`, and status feedback (`status === "success"` shows a thank-you message). The cleanest fix is to *replace* `Form.jsx` usage in `contact/page.js:19` with `<Metting />` (without its outer section wrapper) and delete `Form.jsx`.

#### H0c. Empty `href=""` anchors throughout footer / about

- **What's wrong.** Multiple visible nav-style links use `href=""`, which by HTML spec resolves to the current page — broken UX, broken click-through tracking, and noise in internal-linking signals.
  - `src/Components/Shared/Footer.jsx:84` — the four "social" cards (Instagram / WhatsApp / Email / Calendar) all use `<Link href="">` despite the data array `socalList` containing real URLs (lines 8–33). The defined `link` is never wired to the `href`.
  - `src/Components/Shared/Footer.jsx:117` — the back-to-top arrow uses `<Link href="">`.
  - `src/Components/About/AboutMe.jsx:67, 72` — the contact-info cards (`contact` value) and the social-icon list both use `<Link href="">`.
- **Where.** Listed above.
- **Why it matters.** Playbook §"Internal linking" calls for "descriptive anchors." A bare `href=""` creates a self-referential link that Google may treat as either a junk internal link or a normalization error. The footer "social" block also fails to send users to the platforms it advertises — direct conversion loss.
- **Locales affected.** All 4.
- **Recommended fix.**
  1. **Footer (`Footer.jsx:80–93`).** Wire the existing `link` field through: `<Link href={link} target="_blank" rel="noopener noreferrer" ...>`.
  2. **Footer (`Footer.jsx:117`).** Replace the back-to-top `<Link href="">` with a `<button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} ...>`.
  3. **AboutMe (`AboutMe.jsx:67`).** Bind to the value semantics — render `tel:`/`mailto:` for phone/email rows, plain text or `<address>` for locality, and remove the `<Link>` wrapper for the languages row (which has no anchorable target).
  4. **AboutMe (`AboutMe.jsx:72`).** Either populate `socalContact` with real URLs or remove the social-icon list entirely.

#### H1. No dedicated "AI integrations" service page (strategic priority gap)

- **What's wrong.** The user's prompt names AI integrations as the differentiating niche. The codebase has `services/ai-chatbot/` (chatbot-only, narrower) and `services/chatgpt-shopping/` (e-commerce-specific). There is no `services/ai-integrations/` umbrella page that positions AI integrations as a service line including chatbots, workflow automation, ChatGPT Shopping, custom API integrations, RAG over docs, etc.
- **Where.** Folder structure: `src/app/[locale]/services/` has only `web-design`, `seo`, `ai-chatbot`, `chatgpt-shopping`. Nav (`src/Components/Shared/Header/RanderHeader.jsx:30–34`) lists those four. Home services component (`src/Components/Services/Services.jsx:8`) lists six items but only four map to real pages.
- **Why it matters.** Playbook line 13: "the clearest website winners are dedicated pages for each core service." Line 41: "the cleanest operating model is one primary keyword theme per page." For a freelancer positioning into AI integrations, the absence of a dedicated landing page means none of the home/portfolio/blog signals consolidate onto a single canonical for the priority niche. This is *the* page Google should rank for the strategic keyword set, and right now it doesn't exist.
- **Locales affected.** All 4.
- **Recommended fix.** Create `src/app/[locale]/services/ai-integrations/page.js` + `layout.js` mirroring the existing service pages. Add a route map entry in `src/i18n/routing.js` and `src/lib/localizedPaths.js#SERVICE_PATHS` per the localized-slug pattern (e.g., `sk: '/ai-integracie'`, `en: '/ai-integrations'`, `de: '/services/ai-integrations'`, `ru: '/ai-integratsii'`). Add a `service-ai-integrations` entry in `src/lib/seo.js#PAGE_META` for all four locales, with the title pattern `AI integrácie pre weby a biznis | Vlad Weby` (SK), `AI Integrations for Web & Business | Vlad Weby` (EN), `KI-Integrationen für Web & Business | Vlad Weby` (DE), `AI-интеграции для сайта и бизнеса | Vlad Weby` (RU). Add a translation block under `servicePages.aiIntegrations` covering hero, included list, plans, audience, and FAQs. Add the page to the sitemap (`src/app/sitemap.js`) at `priority: 0.95`. Wire it into the nav dropdown ahead of the existing four services. Make the home page services component lead with this card.

#### H2. `Service` JSON-LD is missing on every individual service page

- **What's wrong.** `ServiceJsonLd` (`src/Components/Seo/ServiceJsonLd.jsx`) is mounted only at `src/app/[locale]/all-services/layout.js:13`. The four individual service pages (`web-design`, `seo`, `ai-chatbot`, `chatgpt-shopping`) — the actual pages that rank for their service queries — emit no Service schema.
- **Where.** Layouts: `src/app/[locale]/services/web-design/layout.js`, `seo/layout.js`, `ai-chatbot/layout.js`, `chatgpt-shopping/layout.js` all return `{children}` with no JSON-LD.
- **Why it matters.** Playbook line 45: "Service on each service page" is the canonical recommendation; the appendix `Service` template (lines 327–377) reflects exactly this. Without per-service Service JSON-LD, the per-page entity relationship to the LocalBusiness `@id` is implicit at best.
- **Locales affected.** All 4.
- **Recommended fix.** Convert `ServiceJsonLd.jsx` into a parameterized component: `<ServiceJsonLd serviceKey="web-design" locale={locale} />`. Define a `SERVICES` map in the file with `name`, `description`, `serviceType`, `offers`, and `url` per service per locale. Mount the appropriate instance in each service-page `layout.js`:
  ```jsx
  // services/web-design/layout.js
  return (
    <>
      <ServiceJsonLd serviceKey="web-design" locale={locale} />
      {children}
    </>
  );
  ```
  Each block must include `provider: { "@id": "https://www.vlad-weby.sk/#business" }` so it points back to the LocalBusiness anchor — not duplicate the LocalBusiness data.

#### H3. No `Organization` and no sitewide `BreadcrumbList` JSON-LD

- **What's wrong.** Per playbook line 45, the priority order is: "Organization on the home page, LocalBusiness plus the most specific subtype on the contact or location page, BreadcrumbList sitewide, Service on each service page." The current implementation uses a single `ProfessionalService` block on the home page only. There is no `Organization` block (the home block uses `@type: "ProfessionalService"`, not graphed with Organization), and no `BreadcrumbList` is emitted anywhere — even though the visible UI in `PageHeader.jsx:16–22` and `blog/[slug]/page.js:96–106` already has breadcrumb structures.
- **Where.** `src/Components/Seo/LocalBusinessJsonLd.jsx` (only schema on home); breadcrumb UI exists in `PageHeader.jsx:16–22` and `blog/[slug]/page.js:96–106`.
- **Why it matters.** Playbook line 45 lists these as the priority structured-data set. BreadcrumbList is the cheapest, most widely supported rich result and should accompany every page that has a visible breadcrumb (which is most of this site).
- **Locales affected.** All 4.
- **Recommended fix.**
  1. Refactor `LocalBusinessJsonLd.jsx` into the `@graph` template from the playbook appendix (lines 230–323) so it emits `Organization` (`@id: ".../#organization"`) **and** `LocalBusiness` (`@id: ".../#localbusiness"`) connected via `parentOrganization`. Move the LocalBusiness block to the contact-page layout (`src/app/[locale]/contact/layout.js`) and keep only `Organization` on the home page.
  2. Create `src/Components/Seo/BreadcrumbJsonLd.jsx` that takes `items: [{ name, url }]` and emits the BreadcrumbList template from playbook appendix lines 297–322. Mount it in `PageHeader` (or, preferably, in each `[locale]/<route>/layout.js`) so every non-home page has a breadcrumb block.

#### H4. `sameAs` and external corroboration too sparse

- **What's wrong.** `LocalBusinessJsonLd.jsx:51–54` lists only Instagram and a Google Maps `cid` URL. There is no LinkedIn, Facebook, GBP profile URL, Trustpilot, or any of the corroboration platforms the playbook calls "tier-one" (lines 112, 118).
- **Where.** `src/Components/Seo/LocalBusinessJsonLd.jsx:51–54`.
- **Why it matters.** Playbook line 86 describes review-site diversification ("consumers now use an average of six review sites"). Line 112 names the tier-one citation set. `sameAs` is how the website *tells Google* the entity that owns the GBP, the LinkedIn, and the Facebook page is the same Vlad Weby. Without that link, citation corroboration depends entirely on third-party crawlers.
- **Locales affected.** All 4.
- **Recommended fix.** Expand `sameAs` to include (manual verification required for the actual URLs):
  ```js
  sameAs: [
    "https://www.instagram.com/vladislav.als",
    "https://www.linkedin.com/in/<vlad-handle>",
    "https://www.facebook.com/<vlad-handle>",
    "https://g.page/<gbp-short-name>",                 // GBP short URL
    "https://www.google.com/maps?cid=12190981435023554892",
    "<Trustpilot or other review profile, if any>"
  ]
  ```
  Verify each URL resolves. Add the same anchors to `Footer.jsx` and `AboutMe.jsx` so the corroboration is visible on the page (which `sameAs` strictly does not require, but reinforces).

#### H5. `areaServed` includes Ukraine despite SK/DE/AT positioning

- **What's wrong.** `LocalBusinessJsonLd.jsx:43–48` lists `Slovakia`, `Germany`, `Austria`, **and `Ukraine`**. The `messages/sk.json` "Awards" tile reinforces this (`"4 obsluhované trhy" / "SK · DE · AT · UA"`, line 105–107). The user's prompt scopes the strategic markets as SK/DE/AT.
- **Where.**
  - `src/Components/Seo/LocalBusinessJsonLd.jsx:43–48`
  - `messages/sk.json` `awards.items.markets` (and the EN/DE/RU equivalents)
- **Why it matters.** `areaServed` is the entity's declared service geography. Listing UA without UA-specific landing pages, UA hreflang, or UA marketing dilutes the relevance for SK/DE/AT searches. The Awards tile that displays "UA" on the home page also broadcasts the same scope mismatch to users.
- **Locales affected.** All 4 (schema is locale-agnostic; Awards translation lives in each locale's `messages/*.json`).
- **Recommended fix.**
  1. Remove the Ukraine entry from `LocalBusinessJsonLd.jsx:43–48`.
  2. Update Awards tiles in all four `messages/*.json` files: `awards.items.markets.contest` from `"SK · DE · AT · UA"` to `"SK · DE · AT · CZ"` (Czech Republic is genuinely served given language overlap with SK and the geo-redirect logic in middleware) — or `"SK · DE · AT"` if CZ isn't strategic.
  3. If UA market is genuinely active and the audit is wrong, ignore (1)–(2) and instead add the UA targeting work (UA hreflang variant, Cyrillic content for UA-dialect, etc.) — but per the user's prompt, that's not the strategy.

#### H6. Service-page titles lead with prices (spam-flag risk + diluted intent)

- **What's wrong.** `src/lib/seo.js#PAGE_META` titles for service pages lead with prices:
  - `service-web-design` SK: `"Tvorba webstránok od 390 € | Vlad Weby"` (line 261)
  - `service-seo` SK: `"SEO služby od 149 €/mesiac | Vlad Weby"` (line 283)
  - `service-ai-chatbot` SK: `"AI Chatbot pre firmy od 999 € | Vlad Weby"` (line 305)
  - Plus the EN/DE/RU equivalents
- **Where.** `src/lib/seo.js:259–346`.
- **Why it matters.** Playbook line 39: "titles and headings must be precise" and "Google may rewrite poor titles." Prices in titles look promotional and Google routinely rewrites them. They also dilute the intent keyword (e.g., "Tvorba webstránok pre malé firmy v Bratislave" is the intent; "od 390 €" is a hook that belongs in the meta description). The user's prompt also explicitly calls this out: titles should follow `[Primary Service or Topic] | Vlad Weby` style.
- **Locales affected.** All 4 (every service page).
- **Recommended fix.** Replace verbatim:
  - `service-web-design` SK: `"Tvorba webstránok pre firmy v Bratislave | Vlad Weby"`
  - `service-web-design` EN: `"Web Development for Businesses in Bratislava | Vlad Weby"`
  - `service-web-design` DE: `"Webentwicklung für Firmen in Bratislava | Vlad Weby"`
  - `service-web-design` RU: `"Разработка сайтов для бизнеса в Братиславе | Vlad Weby"`
  - `service-seo` SK: `"SEO optimalizácia pre malé firmy v Bratislave | Vlad Weby"`
  - `service-seo` EN: `"SEO Services for Small Businesses in Bratislava | Vlad Weby"` *(60 chars — at Google's display threshold, acceptable; if it gets rewritten, fall back to `"SEO Services for Bratislava Businesses | Vlad Weby"` (52 chars))*
  - `service-seo` DE: `"SEO-Optimierung für KMUs in Bratislava | Vlad Weby"`
  - `service-seo` RU: `"SEO-оптимизация для малого бизнеса в Братиславе | Vlad Weby"`
  - `service-ai-chatbot` SK: `"AI chatbot pre firmy v SR a strednej Európe | Vlad Weby"`
  - `service-ai-chatbot` EN: `"AI Chatbot for Businesses in Central Europe | Vlad Weby"`
  - `service-ai-chatbot` DE: `"KI-Chatbot für Firmen in Mitteleuropa | Vlad Weby"`
  - `service-ai-chatbot` RU: `"AI-чатбот для бизнеса в Центральной Европе | Vlad Weby"`
  - Move "od 390 €", "od 149 €/mesiac", "od 999 €" into the meta description so the price still appears in the snippet.

#### H7. Missing the priority service title — "AI integrations" — for the strategic niche

- **What's wrong.** Once H1 lands, the new AI-integrations page should target the *priority strategic keyword*. Recommendation:
  - SK title: `"AI integrácie pre weby a biznis | Vlad Weby"`
  - EN title: `"AI Integrations for Web & Business | Vlad Weby"`
  - DE title: `"KI-Integrationen für Web & Business | Vlad Weby"`
  - RU title: `"AI-интеграции для сайта и бизнеса | Vlad Weby"`
  - SK H1: `"AI integrácie, ktoré zvyšujú vašu konverziu"`; EN H1: `"AI Integrations That Convert"`; DE H1: `"KI-Integrationen, die konvertieren"`; RU H1: `"AI-интеграции, которые увеличивают конверсию"`.
- **Where.** Doesn't exist yet — see H1 for the page-creation plan.
- **Why it matters.** Playbook line 41: "one primary keyword theme per page." This is the canonical landing for the strategic niche. Any title that does not start with "AI integrations" / "AI integrácie" / "KI-Integrationen" / "AI-интеграции" leaves the niche on the table.
- **Locales affected.** All 4.
- **Recommended fix.** Copy into the new `service-ai-integrations` entry in `src/lib/seo.js#PAGE_META` exactly as above.

#### H8. Internal-linking gaps — service pages are dead ends

- **What's wrong.** `src/Components/ServicePages/ServicePage.jsx` only links to `contactHref` (every CTA) and `allServicesHref` (one link). No links to:
  - The relevant case-study / portfolio entries on this exact service.
  - The relevant blog articles. (E.g., the AI chatbot service page should link to `/blog/ai-chatbot-pre-firmy`. The SEO service page should link to `/blog/ako-zlepsit-seo`. The ChatGPT Shopping service page should link to `/blog/chatgpt-shopping-pre-eshopy`.)
  - Sibling services (web-design ↔ ai-integrations is the high-leverage pair to install).
  - Pricing anchor on home page.
- **Where.** `src/Components/ServicePages/ServicePage.jsx:44–57, 134–144, 222–228`.
- **Why it matters.** Playbook line 64: "the internal-linking pattern should reinforce both service relevance and market relevance. Each service page should link to supporting FAQs, proof pieces, and relevant location pages." The current service page is a single-purpose conversion funnel with no cross-links — proof pieces, FAQs, and related blog content are all unreachable from the service page.
- **Locales affected.** All 4 (the component is locale-aware via `localePath`).
- **Recommended fix.** Add a "Related work / Related reading" section *between* the audience block and the FAQ block in `ServicePage.jsx`. Per `serviceKey`, link to:
  - `web-design`: `/portfolio` filtered to web-design entries (Dobry Vodár, ManzelPro, Massage Traunstein); blog: `wordpress-vs-modern-website`, `website-cost-2025`, `website-for-entrepreneurs`.
  - `seo`: blog: `improve-website-seo`. Portfolio: any case studies with measured ranking lift (none yet — see H10).
  - `ai-chatbot`: blog: `ai-chatbot-for-business`. Portfolio: `pro2.png` (Beauty in Perfection AI integration).
  - `chatgpt-shopping`: blog: `chatgpt-shopping-for-ecommerce`.
  - When `service-ai-integrations` lands (H1), every service page should link to it as the umbrella ("Looking for a broader AI engagement? See AI integrations.").

  Also add reciprocal links from each blog article footer to the matching service page (currently absent — see Articles/SeoArticle.jsx ending and similar).

#### H9. Hero LCP image is 656 KB PNG; portfolio images 467 KB–1.2 MB

- **What's wrong.** `public/img/hero/hero-man.png` is 656 KB. `pro1.png` 1.0 MB, `pro6.png` 1.2 MB, `pro2.png` 467 KB, `pro4.png` 391 KB, `pro5.png` 493 KB, `pro3.png` 335 KB. `public/img/about/about-bg.png` is 1.4 MB (the WebP variant `about-bg.webp` is only 2 KB — likely a corrupted re-export and should be re-generated from the PNG source).
- **Where.** Files in `public/img/hero/`, `public/img/project/`, `public/img/about/`.
- **Why it matters.** Playbook §"Image optimization" (line 49): "use efficient modern formats such as WebP or AVIF when the stack supports them, but focus more on byte size and rendering stability than on format dogma. Also, do not lazy-load your main hero or primary LCP image if it is the largest above-the-fold asset." `next/image` will auto-derive optimized variants in `_next/image` at runtime, so the 656 KB hero and 1.0–1.2 MB portfolio originals are not what end users download — but every cold cache miss still pays for the optimization, every regeneration after deploy starts from the heavier source, and edge cache eviction on Vercel hurts more for big originals.

  Confirmed good: the hero image *is* `priority`-loaded (`Banner.jsx:95`), so it is **not** lazy-loaded. The hero CSS background `bg-hero_image` resolves to the 27 KB WebP (`tailwind.config.js:39`), good.
- **Locales affected.** All 4 (assets are locale-agnostic).
- **Recommended fix.**
  1. Re-export `hero-man.png` to AVIF + WebP at the actual rendered max width (~600 px wide based on `width={563}`), aim for ≤120 KB AVIF / ≤180 KB WebP. Keep the PNG only as `next/image` fallback.
  2. Re-export the six `pro*.png` portfolio images to WebP/AVIF (they're displayed at 1296×760 max, but most are seen at half that on mobile). Aim ≤200 KB WebP each. Use real, descriptive filenames (see M5).
  3. Re-generate `about-bg.webp` from `about-bg.png` — current 2 KB output looks broken.
  4. Manual verification required: run `npm run build && npm run start` and capture mobile field LCP via Lighthouse + a real-device test. The playbook (lines 11, 35) targets LCP ≤ 2.5 s at the 75th percentile.

#### H10. Portfolio is screenshot tiles, not case studies in problem→solution→metrics format

- **What's wrong.** `src/Components/Projects.jsx` and `src/Utlits/projectList.jsx` render 15 portfolio entries as image tiles + one-line `subHeading`. There are no problem statements, no measurable outcomes, no "how we approached it" sections. Five of the 15 entries are placeholder gradients (no real screenshot at all) — `image: null` for SVI Transporter, Ekaterina Fetisova, MountIQ, Curogram, BrainCampus, Model FA, Propico, Premium Car Rental, Ost West Travel.
- **Where.** `src/Components/Projects.jsx`, `src/Components/Shared/ProjectCard.jsx`, `src/Utlits/projectList.jsx`, and the route `src/app/[locale]/portfolio/page.js`.
- **Why it matters.** Playbook §"Detailed findings" line 66: "Layer two is proof: case studies, testimonials, before-and-afters, 'how we work,' staff pages, awards, local partnerships, press." E-E-A-T (line 43): "Local businesses should show first-hand evidence, named people, credentials, licensing or certification where relevant, real photos, real customer proof…" The audit prompt explicitly calls for "case studies in **problem → solution → metrics** format." Currently a visitor cannot tell whether *any* of these projects produced results — for an AI-integrations positioning where buyers expect numbers, this is the single biggest content credibility gap.
- **Locales affected.** All 4.
- **Recommended fix.**
  1. Pick 4–6 of the strongest projects (those with real screenshots and measurable outcomes — Dobry Vodár, TopSicher Umzug, Beauty in Perfection AI integration, ManzelPro, Massage Traunstein, Irsava Tech are good starts).
  2. Create `src/app/[locale]/portfolio/[slug]/` with one detail page per case study, structured as: **Problem** (1 paragraph) → **What I built** (3–6 bullets, including stack + AI components if any) → **Numbers** (e.g., "+38% inbound leads in 90 days, LCP from 4.1 s to 1.6 s, three multilingual locales live in 14 days"). Where real numbers aren't yet measured, ask the client for a 2-line testimonial covering deliverable + outcome and quote it instead — the playbook (line 90) requires neutral, non-coached requests.
  3. Add `caseStudy/<slug>` URLs to the sitemap, add per-page `Article` or `CreativeWork` JSON-LD with `author: { @id: ".../#organization" }`.
  4. Replace the 5 placeholder-only entries with real screenshots, or remove them. Placeholder gradient cards on a portfolio page actively erode credibility.
  5. Cross-link case studies into matching service pages (H8) and into matching blog articles.

#### H11. Missing `image` and weak `author` in `BlogPosting` JSON-LD

- **What's wrong.** `src/Components/Seo/BlogPostingJsonLd.jsx:181–206` emits `BlogPosting` with no `image`, and `author` only contains `name` + `url`. No `jobTitle`, no `sameAs`, no `image`, no `Person` `@id`.
- **Where.** `src/Components/Seo/BlogPostingJsonLd.jsx:175–206`.
- **Why it matters.** Playbook §"E-E-A-T" line 43: "Google's current content guidance says its systems look for experience, expertise, authoritativeness, and trustworthiness. For local businesses, that means adding staff bios, practitioner or technician profiles…" Author entity expansion is the cheapest E-E-A-T lift for a single-author blog.
- **Locales affected.** All 4.
- **Recommended fix.** Add to the schema in `BlogPostingJsonLd.jsx`:
  ```js
  image: [
    `https://www.vlad-weby.sk/img/blog/${slug}-cover.jpg`, // or whatever real cover image
  ],
  author: {
    "@type": "Person",
    "@id": "https://www.vlad-weby.sk/#vlad-khvorov",
    name: "Vladislav Khvorov",
    url: "https://www.vlad-weby.sk",
    jobTitle: "Web Developer & AI Specialist",
    image: "https://www.vlad-weby.sk/img/about/personal-infothumb.png",
    sameAs: [
      "https://www.instagram.com/vladislav.als",
      "<LinkedIn URL>",
    ],
  },
  ```
  Also emit a sitewide `Person` block (in `LocalBusinessJsonLd.jsx`, inside the `@graph`) with the same `@id`, so every BlogPosting `author` reference resolves to one canonical entity.

---

### 🟡 Medium

#### M1. Testimonials are real but missing schema integration
The `Testimonial` component shows three real client quotes (Stanislav, Tsapenko Oleg, Katerina Fetisova) per `messages/sk.json:228–246`. They're unmarked structurally. After C3 is fixed (no `aggregateRating`), consider adding three individual `Review` blocks in JSON-LD tied to `itemReviewed: { "@id": ".../#business" }` — only do this if you can keep the on-page count and the markup count synced (e.g., 3 visible quotes → exactly 3 `Review` blocks).

#### M2. `dateModified` always equals `datePublished` for blog posts
`src/Components/Seo/BlogPostingJsonLd.jsx:186–188` sets both fields to `post.datePublished`. After substantive edits, this misrepresents freshness. Fix: add a `dateModified` field per slug in `BLOG_POSTS` (manual maintenance) or compute from the file's mtime at build time.

#### M3. FAQ JSON-LD only exists for the ChatGPT Shopping article
`BlogPostingJsonLd.jsx#BLOG_FAQ` only contains entries for `chatgpt-shopping-for-ecommerce`. The other five articles all render visible FAQ-style content blocks. Add `BLOG_FAQ` entries for `improve-website-seo`, `ai-chatbot-for-business`, `website-cost-2025`, `website-for-entrepreneurs`, `wordpress-vs-modern-website` — covering 3–5 questions each, in all four locales — and emit `FAQPage` JSON-LD only when the questions are actually visible on the page. Playbook lines 47, 208 caution that FAQ rich results are limited but the structure still helps machine readers/assistants.

#### M4. Blog breadcrumb anchors hardcoded to "Blog"
`src/app/[locale]/blog/[slug]/page.js:101` uses literal text `"Blog"` for the breadcrumb regardless of locale. Localize via `useTranslations` to "Blog" (SK/EN/DE) / "Блог" (RU). Same file line 105 uses the translated category — that part is correct.

#### M5. Image filenames not descriptive
- `public/img/project/pro1.png` … `pro6.png` should be `dobry-vodar-plumber-website.webp`, `topsicher-umzug-relocation.webp`, etc., to match the project they depict. Playbook line 49: "name files descriptively with hyphens."
- `public/img/about/personal-infothumb.png` should be `vladislav-khvorov-portrait.webp`.
- `public/img/hero/hero-man.png` should be `vladislav-khvorov-hero.webp`.

This requires changing both the file names and the references in `Banner.jsx`, `AboutMe.jsx`, `Projects.jsx`, `projectList.jsx`, and `LocalBusinessJsonLd.jsx#image`.

#### M6. Footer copyright says "© 2025" in 2026
`src/Components/Shared/Footer.jsx:103` hardcodes "© 2025". Replace with `{new Date().getFullYear()}` or a server-rendered year. Trivial, but a stale year hits trust.

#### M7. `metadataBase` and OG locale string format
`src/lib/seo.js:586` sets `openGraph.locale: effectiveLocale` (e.g., `"sk"`). Facebook/Open Graph expects BCP-47-style underscored locales (e.g., `"sk_SK"`, `"en_US"`, `"de_DE"`, `"ru_RU"`). Fix: build the OG locale via a small map.

#### M8. Twitter card in metadata helper but no Twitter/X account in `sameAs`
`getPageMetadata` returns `twitter.card: 'summary_large_image'` but never sets `twitter.site` or `twitter.creator`, and `sameAs` doesn't list a Twitter/X handle. Either add a real handle and populate both fields, or drop the `twitter` block until there is one.

#### M9. Generic alt text on a few images
- `src/Components/About/About.jsx:35` — `alt="star"` for `section-star.png`. Acceptable as decoration; mark `alt=""` if it's purely decorative (which it is — it's a spinning star icon).
- `src/Components/Banner.jsx:74, 104` — `alt=""` on `bn-arrow.png` is correct (decoration). Lines 115, 124, 134 — `alt=""` on social/scroll icons is also correct.
- `src/Components/About/AboutMe.jsx:31` — `"Vladislav Khvorov — web developer portrait"` is good.

So this is mostly a small cleanup to reset the `star` alt to empty.

#### M10. Awards tile on home page is borderline self-aggrandizement without proof
`messages/sk.json#awards.items` includes `"chatbot": "Integrácia AI Chatbota / Web & sociálne médiá"` and `"rating": "5.0 hviezdičkové hodnotenie / Google recenzie"`. The first is too vague to count as an award. The second restates the GBP rating that is already covered by the LocalBusiness — and overlaps with the C3 fake-rating concern. Recommend: replace `chatbot` with a real, specific accomplishment ("First AI chatbot deployed in 2024" with a one-line context) and either link `rating` to the GBP profile directly or remove it. This is presentation, not policy.

#### M11. Single-locale landing pages don't emit hreflang at all
Pages like `/preco-web` (SK only) currently emit `languages: { sk: "/preco-web" }` and `x-default: "/preco-web"` from `getAlternates`. That's technically valid, but if those pages survive the C4 cleanup, also emit `noindex` for any locale variant whose content does not exist. Better: kill these pages per C4 instead.

#### M12. `/businesscard` page links to a different domain (`vladkhvorov.com`)
`src/app/[locale]/businesscard/page.js:39–41` exposes `https://vladkhvorov.com` as a tile. That's a separate identity site. If it's intentional, add `noindex` to the businesscard page (NFC/QR landing for in-person handoff doesn't need to rank on Google) and use `rel="me"` on the cross-link. If unintentional, remove or replace with `vlad-weby.sk`.

#### M13. CLS coverage observations (manual lab verification still required)
Audit prompt §1 asks specifically about "dynamic content insertion above the fold." Code-level review:
- `next/image` everywhere with explicit `width`/`height` (Banner.jsx, AboutMe.jsx, Projects.jsx, RanderHeader.jsx) — no intrinsic-size CLS.
- Caveat font loaded with `display: 'swap'` (`src/app/layout.js:8`) — bounded font-swap shift only.
- About-section tab swap (`AboutMe.jsx:18` and Experience/Education/Skills) uses `opacity-0 translate-y-20 -z-10 absolute` to hide inactive tabs. Inactive content stays in the DOM (no display:none flip), so no CLS from tab interaction. ✓
- AOS scroll-reveal (`AddAnimation.jsx`) uses translate/opacity, not display swaps — bounded.
- `src/Components/Shared/Preloader.jsx` exists but is **never imported anywhere** (verified via grep). It's dead code from the original "Matias" theme; the literal string "Matias" still appears on line 10. If it gets re-introduced as a full-screen pre-render, it would block LCP, so leave it disconnected or delete it. Recommend deleting outright.
- No code-level CLS triggers found. Manual Lighthouse field-data verification on mobile 4G is still required to confirm — code review alone can't catch CLS from late-loading third-party widgets if any are added later.

#### M14. Cookie consent decline does not block analytics scripts
Out of scope for SEO ranking but worth flagging — `src/Components/Shared/CookieConsent.jsx` exists; the user's privacy policy declares analytics. Manual verification required to confirm GA4 and any other third-party scripts respect the consent state.

---

### 🟢 Low

#### L1. Geo-redirect uses 302 on `/`
`src/middleware.js:58` issues a 302. 302 is "Found / temporary." For a deliberate locale split, 307 is more semantically correct (preserves method and signals "the resource lives elsewhere by your locale, not by general redirection"). Functionally identical for browsers and bots, and the bot-exemption (line 21) already insulates Googlebot. Cosmetic.

#### L2. Cookies/Privacy pages in sitemap with priority 0.2/0.3
Acceptable, but consider `noindex` on `/cookies` and `/privacy-policy` to remove dead snippets from the SERP — they almost never rank usefully and consume crawl budget. If you keep them indexed, the current setup is fine.

#### L3. `routing.js` defines `/services/web-design` etc. as canonical paths but the EN/RU/SK actually live at flat slugs
This is intentional per the route map and works, but the canonical `pathnames` keys (e.g., `/services/web-design`) never appear in any URL — they're internal lookup keys only. Worth a doc comment in `routing.js` or `localizedPaths.js` to prevent future contributors from assuming `/services/...` URLs are live.

#### L4. `experience.position` in messages says `"Web & sociálne médiá"` for `chatbot`
Vague. If the chatbot is on a specific business profile, name it. Minor branding signal.

#### L5. Dead `Preloader` component
`src/Components/Shared/Preloader.jsx` is never imported anywhere (verified via grep). Line 10 still says "Matias" — leftover from the original theme that ships with this template (matches `package.json` `"name": "matias"`). Delete the file or rename and rewire if you actually want a preloader. If accidentally re-imported above the hero later, it would block LCP — kill it now to remove the footgun.

#### L6. `aria-label` consistency
Most interactive icons have `aria-label`. The drawer (`src/Components/Shared/Header/Drawer.jsx`) wasn't read for this audit — manual verification required. If any are missing, screen-reader users can't operate them.

---

## 3. What's working well (keep these)

- **Per-locale routing model** (`src/i18n/routing.js`, `src/lib/localizedPaths.js`). Slovak as un-prefixed default with localized slugs (`/tvorba-web-stranok`, `/seo-optimalizacia`, `/sozdanie-saitov`) is exactly what playbook line 37 calls for.
- **Programmatic hreflang + canonical generation** in `src/lib/seo.js#getAlternates`. Reciprocal `languages` + `x-default` are emitted correctly. This is more robust than most local-business sites.
- **Metadata centralization.** `src/lib/seo.js#PAGE_META` and `BLOG_POST_META` give a single place to maintain titles/descriptions per page per locale. Replace the prices in titles (H6) and the rest of the structure can stay.
- **Sitemap with `alternates.languages` per entry** (`src/app/sitemap.js:45–49`). This is non-trivial and done correctly.
- **`robots.js`** disallows `/api/` and points to the sitemap with the correct production host. Clean.
- **Geo-redirect middleware design.** `src/middleware.js` separates root-only redirects from deep links, exempts a comprehensive bot regex, pins via cookie to avoid re-firing, and keeps separate per-locale URLs. Playbook line 37 cautions against "automatic locale redirection alone" — the implementation here uses redirection *plus* per-locale URLs, hreflang, and cookie persistence, which is the right pattern. Don't tear this down.
- **Legacy redirects in `next.config.mjs`** preserve historical English-slug URLs and old `/sk/`-prefixed URLs to the localized canonicals. Substantial work that's already done.
- **`next/image` with `priority` on the LCP hero** (`src/Components/Banner.jsx:90–98`). The hero is *not* lazy-loaded, contradicting the most common LCP regression pattern.
- **`display: 'swap'` on the Caveat font** (`src/app/layout.js:8`) avoids FOIT.
- **Working Formspree-backed `Metting.jsx` form** on home and `/all-services`. (Use this as the template to fix the broken `Form.jsx` in C8.)
- **Localized blog-post slugs** (`/blog/ako-zlepsit-seo`, `/en/blog/how-to-improve-seo`, `/ru/blog/kak-uluchshit-seo`). Cyrillic and Slovak slugs are preserved historically — playbook line 53 prefers boring, intentional architecture. This is.
- **`metadataBase` set** (`src/app/layout.js:13`). Eliminates relative-URL OG/Twitter image bugs.
- **`<Link>` components used throughout** for client-side nav with `next-intl` localePath. Internal-link plumbing is clean even if anchors are sometimes empty (C9).

---

## 4. 30-day action queue

Mapped to the playbook's priority table (Critical → High → Medium):

### Week 1 (1–2 days of focused work, mostly 🔴)

1. **Remove fake `aggregateRating`** in `LocalBusinessJsonLd.jsx:65–69`. (C3 — 5 minutes.)
2. **Hide street address everywhere** (LocalBusinessJsonLd.jsx, Footer.jsx, contact/page.js, AboutMe.jsx). (C2 — 30 minutes.)
3. **Fix `<html lang>` per locale.** Move `<html>`/`<body>` into `[locale]/layout.js`. (C1 — 1–2 hours including testing.)
4. *(rolled into step 9)*
5. **Fix the contact-page form** — replace `Form.jsx` body with the `Metting.jsx` Formspree pattern (or substitute `<Metting />`). (H0b — 1 hour. Move from Critical for prioritization but do not let this slip; it's the conversion-blocker that nullifies any organic traffic improvements.)
6. **Collapse the 9 doorway pages.** Decide: redirect (preferred) or rewrite. If redirect: delete files, add 301s, remove sitemap entries. (C4 — 2 hours.)
7. **Fix the two SK and six DE blog content mismatches.** Translate or `notFound()`. (C5 + C6 — 1 day if translating, 30 minutes if temporarily 404'ing.)
8. **De-dupe H1s.** Demote `PageHeader` H1 to `<p>`; remove `isHeading={true}` PageHeader from home services. (H0a — 30 minutes.)
9. **Wire up empty `href=""` anchors** in Footer + AboutMe. (H0c — 30 minutes.)

### Week 2–3 (🟠 High)

9. **Build the dedicated AI integrations service page** (H1 + H7) — strategic-priority work that gates the rest of the AI niche positioning.
10. **Add `Service` JSON-LD per service page** (H2 — once H1 is built, do all five at once).
11. **Refactor schema into `@graph` with `Organization` + `LocalBusiness` + `Person`** and add sitewide `BreadcrumbList` (H3 + H11).
12. **Fix titles** — replace prices with intent (H6).
13. **Update `sameAs` and `areaServed`** (H4 + H5) — once GBP / LinkedIn / Facebook URLs are confirmed.
14. **Re-export hero, portfolio, about-bg images to AVIF/WebP at sane sizes** (H9). Manual Lighthouse verification afterwards.
15. **Wire internal links from each service page to relevant case studies, blog articles, sibling services** (H8).

### Week 4 (🟠 High continued + 🟡 Medium)

16. **Build 4–6 real case-study detail pages** in `portfolio/[slug]/` with problem→solution→metrics structure (H10). Largest single piece of work in this audit; the gating constraint is real client metrics, which require asking clients.
17. **Add FAQ schema for the remaining 5 blog articles** (M3).
18. **Add `image` and rich `author` blocks to BlogPosting** (H11 + M2).
19. **Rename portfolio/hero image files** to descriptive slugs (M5).
20. **Localize blog breadcrumb** (M4).
21. **Update OG locale format** (M7) and Twitter handle if available (M8).
22. **Footer copyright** to dynamic year (M6).

### Manual verifications required (cannot be done from code alone)

- Real-device CWV sample: LCP, INP, CLS at 75th percentile on mobile 4G after the H9 image work lands. Use PageSpeed Insights field data + a real device, not lab data alone.
- GBP "website" field target — once the AI-integrations page (H1) is live, repoint GBP to that page rather than the home page (playbook line 78 + audit prompt §9). Confirm the GBP business name is exactly `Vlad Weby` (matches the site) and that there is no ineligible street address visible on the public profile.
- Search Console: confirm none of the 9 doorway URLs scheduled for redirect (C4) currently rank for high-value queries. If any do, the redirect target needs to absorb those queries cleanly — adjust the redirect map per query, not just per pattern.
- Cookie consent → GA4: confirm script blocking respects denial state (M13).
- Real GBP review count vs. the on-page testimonials count. If the GBP rating of `5.0` and ~13 reviews is genuine and active, don't lose it — just don't republish it as on-page schema (C3).

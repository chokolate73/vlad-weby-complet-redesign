/**
 * Shared SEO helpers for metadata, hreflang, and sitemap generation.
 * Used by every page's generateMetadata, the sitemap, and structured-data components.
 */

import { SERVICE_PATHS, BLOG_PATHS, serviceUrl, blogUrl } from './localizedPaths';

export const BASE_URL = 'https://www.vlad-weby.sk';
export const LOCALES = ['sk', 'en', 'de', 'ru'];
export const DEFAULT_LOCALE = 'sk';

// Slovak is the default locale and renders at root (no /sk prefix).
// Helper: prefix the locale unless it's Slovak.
const withLocale = (locale, path) => (locale === 'sk' ? path : `/${locale}${path}`);

const staticMap = (path) =>
  Object.fromEntries(LOCALES.map((l) => [l, withLocale(l, path)]));

const servicePageMap = (key) =>
  Object.fromEntries(LOCALES.map((l) => [l, serviceUrl(key, l)]));

// Map of page keys -> per-locale URL path.
export const routeMap = {
  home: staticMap(''),
  services: staticMap('/all-services'),
  portfolio: staticMap('/portfolio'),
  blog: staticMap('/all-blog'),
  contact: staticMap('/contact'),
  cookies: staticMap('/cookies'),
  'privacy-policy': staticMap('/privacy-policy'),
  businesscard: staticMap('/businesscard'),
  'service-web-design': servicePageMap('web-design'),
  'service-seo': servicePageMap('seo'),
  'service-ai-chatbot': servicePageMap('ai-chatbot'),
  'service-chatgpt-shopping': servicePageMap('chatgpt-shopping'),
  // Single-locale landing pages (content reused from related service/article pages).
  'landing-web-pre-maly-biznis': { sk: '/web-pre-maly-biznis' },
  'landing-cena-web-stranky': { sk: '/cena-web-stranky' },
};

// Patch the home entry so SK is `/` not empty string.
routeMap.home.sk = '/';

// Canonical blog keys (used by article-component lookups and page metadata).
export const BLOG_SLUGS = Object.keys(BLOG_PATHS);

function blogRouteMap(canonicalSlug) {
  return Object.fromEntries(
    LOCALES.map((l) => [l, blogUrl(canonicalSlug, l)])
  );
}

export function getAlternates(pageKey, currentLocale, { slug } = {}) {
  const routes = pageKey === 'blog-post' && slug ? blogRouteMap(slug) : routeMap[pageKey];
  if (!routes) return {};

  const languages = {};
  for (const l of LOCALES) {
    if (!routes[l]) continue;
    // Skip noindex'd blog × locale combinations from hreflang (audit C5/C6).
    if (pageKey === 'blog-post' && slug && BLOG_NOINDEX.has(`${slug}|${l}`)) continue;
    languages[l] = `${BASE_URL}${routes[l]}`;
  }
  const defaultPath =
    routes[DEFAULT_LOCALE] || routes[currentLocale] || Object.values(routes)[0];
  languages['x-default'] = `${BASE_URL}${defaultPath}`;

  return {
    canonical: `${BASE_URL}${routes[currentLocale] || defaultPath}`,
    languages,
  };
}

// Page metadata — unique, locale-appropriate titles and descriptions.
// Titles stay under 60 chars, descriptions 120–155 chars.
const PAGE_META = {
  home: {
    sk: {
      title: 'Tvorba webových stránok a AI riešenia | Vlad Weby',
      description:
        'Moderné webové stránky, SEO a AI chatboty pre firmy v Bratislave a celej SR. Rýchle dodanie, férová cena. Získajte bezplatnú konzultáciu.',
    },
    en: {
      title: 'Web Development & AI Solutions in Bratislava | Vlad Weby',
      description:
        'Modern websites, SEO, and AI chatbots for small and mid-sized businesses across Central Europe. Fast delivery, fair pricing. Book a free call today.',
    },
    de: {
      title: 'Webentwicklung & KI-Lösungen in Bratislava | Vlad Weby',
      description:
        'Moderne Webseiten, SEO und KI-Chatbots für KMUs in Mitteleuropa. Schnelle Umsetzung, faire Preise. Jetzt kostenlose Erstberatung buchen.',
    },
    ru: {
      title: 'Разработка сайтов и AI-решения в Братиславе | Vlad Weby',
      description:
        'Современные сайты, SEO и AI-чатботы для бизнеса в Словакии, Германии и Австрии. Быстро, честные цены. Запишитесь на бесплатную консультацию.',
    },
  },
  services: {
    sk: {
      title: 'Služby — Tvorba webstránok, SEO a AI | Vlad Weby',
      description:
        'Tvorba web stránok, landing pages, SEO optimalizácia a AI chatboty. Viacjazyčné weby pre SK, DE, AT. Získajte ponuku na mieru do 24 hodín.',
    },
    en: {
      title: 'Web Services — Websites, SEO & AI Chatbots | Vlad Weby',
      description:
        'Landing pages, multilingual business websites, SEO and AI chatbot integration. Built for conversions, launched in weeks. Request a free quote.',
    },
    de: {
      title: 'Dienstleistungen — Webseiten, SEO & KI | Vlad Weby',
      description:
        'Landingpages, mehrsprachige Firmenwebseiten, SEO und KI-Chatbot-Integration. Konversionsstark, in Wochen live. Jetzt kostenloses Angebot anfragen.',
    },
    ru: {
      title: 'Услуги — Сайты, SEO и AI-чатботы | Vlad Weby',
      description:
        'Лендинги, многоязычные сайты, SEO и AI-чатботы. Сайты, которые приносят клиентов. Запустим за недели. Получите бесплатное предложение.',
    },
  },
  portfolio: {
    sk: {
      title: 'Portfólio — Realizované weby a projekty | Vlad Weby',
      description:
        'Ukážky mojich prác: firemné weby, landing pages a AI riešenia pre klientov v SK, DE a AT. Pozrite si výsledky 18+ projektov.',
    },
    en: {
      title: 'Portfolio — Recent Web Projects & Case Studies | Vlad Weby',
      description:
        'See examples of websites, landing pages, and AI integrations I have built for clients in Slovakia, Germany, and Austria. 18+ projects delivered.',
    },
    de: {
      title: 'Portfolio — Aktuelle Webprojekte & Referenzen | Vlad Weby',
      description:
        'Beispiele meiner Arbeit: Firmenwebseiten, Landingpages und KI-Integrationen für Kunden in SK, DE und AT. Über 18 umgesetzte Projekte.',
    },
    ru: {
      title: 'Портфолио — Проекты и кейсы | Vlad Weby',
      description:
        'Примеры моих работ: корпоративные сайты, лендинги и AI-интеграции для клиентов в Словакии, Германии и Австрии. 18+ проектов.',
    },
  },
  blog: {
    sk: {
      title: 'Blog — Články o webe, SEO a AI | Vlad Weby',
      description:
        'Praktické články o tvorbe webových stránok, SEO optimalizácii, AI chatbotoch a cenách webov v roku 2025. Žiadna teória, len osvedčené tipy.',
    },
    en: {
      title: 'Blog — Web Development, SEO & AI Articles | Vlad Weby',
      description:
        'Hands-on articles about building websites, SEO, AI chatbots, and what a good site really costs in 2025. Practical guides, no fluff.',
    },
    de: {
      title: 'Blog — Webentwicklung, SEO & KI | Vlad Weby',
      description:
        'Praxisnahe Artikel zu Webseiten-Erstellung, SEO, KI-Chatbots und Webseitenkosten 2025. Konkrete Tipps ohne Marketing-Floskeln.',
    },
    ru: {
      title: 'Блог — Сайты, SEO и AI | Vlad Weby',
      description:
        'Практические статьи о разработке сайтов, SEO-продвижении, AI-чатботах и стоимости сайта в 2025 году. Только проверенные советы.',
    },
  },
  contact: {
    sk: {
      title: 'Kontakt — Napíšte mi | Vlad Weby',
      description:
        'Máte otázku alebo projekt? Napíšte mi. Odpovedám do 24 hodín. Email, telefón a formulár pre rýchle spojenie v Bratislave.',
    },
    en: {
      title: 'Contact — Get in Touch | Vlad Weby',
      description:
        'Have a project or a question? Message me directly — I reply within 24 hours. Email, phone, and contact form for a fast response from Bratislava.',
    },
    de: {
      title: 'Kontakt — Jetzt schreiben | Vlad Weby',
      description:
        'Haben Sie ein Projekt oder eine Frage? Schreiben Sie mir direkt — Antwort innerhalb von 24 Stunden. E-Mail, Telefon und Formular aus Bratislava.',
    },
    ru: {
      title: 'Контакты — Свяжитесь со мной | Vlad Weby',
      description:
        'Есть проект или вопрос? Напишите мне напрямую — отвечаю в течение 24 часов. Email, телефон и форма для быстрой связи из Братиславы.',
    },
  },
  cookies: {
    sk: {
      title: 'Zásady používania cookies | Vlad Weby',
      description:
        'Informácie o tom, aké cookies používame na tejto webovej stránke a ako môžete spravovať svoje predvoľby v súlade s GDPR a ePrivacy smernicou.',
    },
    en: {
      title: 'Cookie Policy | Vlad Weby',
      description:
        'Details about the cookies we use on this website and how you can manage your preferences in line with the GDPR and ePrivacy directive.',
    },
    de: {
      title: 'Cookie-Richtlinie | Vlad Weby',
      description:
        'Informationen zu den Cookies, die auf dieser Website verwendet werden, und wie Sie Ihre Einstellungen gemäß DSGVO und ePrivacy verwalten.',
    },
    ru: {
      title: 'Политика использования cookies | Vlad Weby',
      description:
        'Какие cookies используются на этом сайте и как управлять настройками в соответствии с GDPR и директивой ePrivacy.',
    },
  },
  'privacy-policy': {
    sk: {
      title: 'Ochrana osobných údajov | Vlad Weby',
      description:
        'Zásady ochrany osobných údajov podľa GDPR a zákona č. 18/2018 Z. z. Ako spracúvame údaje klientov v Bratislave a na Slovensku.',
    },
    en: {
      title: 'Privacy Policy | Vlad Weby',
      description:
        'GDPR-compliant privacy policy for Vlad Weby in Bratislava. How we collect, use, store, and protect your personal data.',
    },
    de: {
      title: 'Datenschutzerklärung | Vlad Weby',
      description:
        'DSGVO-konforme Datenschutzerklärung von Vlad Weby in Bratislava. Wie wir Ihre personenbezogenen Daten erheben, verwenden, speichern und schützen.',
    },
    ru: {
      title: 'Политика конфиденциальности | Vlad Weby',
      description:
        'Политика конфиденциальности Vlad Weby в Братиславе согласно GDPR. Как мы собираем, используем, храним и защищаем ваши персональные данные.',
    },
  },
  businesscard: {
    sk: {
      title: 'Vizitka — Vladislav Khvorov | Vlad Weby',
      description:
        'Digitálna vizitka Vladislava Khvorova — web developer a AI špecialista z Bratislavy. Telefón, email, WhatsApp a rýchly kontakt na jednom mieste.',
    },
    en: {
      title: 'Business Card — Vladislav Khvorov | Vlad Weby',
      description:
        'Digital business card for Vladislav Khvorov — web developer and AI specialist in Bratislava. Phone, email, WhatsApp, and website in one place.',
    },
    de: {
      title: 'Visitenkarte — Vladislav Khvorov | Vlad Weby',
      description:
        'Digitale Visitenkarte von Vladislav Khvorov — Webentwickler und KI-Spezialist aus Bratislava. Telefon, E-Mail, WhatsApp und Website auf einen Blick.',
    },
    ru: {
      title: 'Визитка — Владислав Хворов | Vlad Weby',
      description:
        'Цифровая визитка Владислава Хворова — веб-разработчик и AI-специалист из Братиславы. Телефон, email, WhatsApp и сайт в одном месте.',
    },
  },
  'service-web-design': {
    sk: {
      title: 'Tvorba webstránok od 390 € | Vlad Weby',
      description:
        'Profesionálna tvorba webstránok pre firmy v SR a Rakúsku. Responzívny dizajn, SEO optimalizácia, rýchlosť pod 2 s. Dodanie za 3–5 dní.',
    },
    en: {
      title: 'Web Design Services from €390 | Vlad Weby',
      description:
        'Professional web design for businesses in Slovakia and Austria. Responsive, SEO-ready, sub-2 second load. Ready in 3–5 days.',
    },
    de: {
      title: 'Webdesign ab 390 € | Vlad Weby',
      description:
        'Professionelles Webdesign für Firmen in SK, DE und AT. Responsive, SEO-ready, Ladezeit unter 2 Sekunden. Fertig in 3–5 Tagen.',
    },
    ru: {
      title: 'Разработка сайтов от 390 € | Vlad Weby',
      description:
        'Профессиональная разработка сайтов для бизнеса в Словакии и Австрии. Адаптивный, SEO-ready, загрузка до 2 с. Готово за 3–5 дней.',
    },
  },
  'service-seo': {
    sk: {
      title: 'SEO služby od 149 €/mesiac | Vlad Weby',
      description:
        'SEO služby pre firmy v SR a strednej Európe. Zvyšujeme viditeľnosť v Googli a získavame viac zákazníkov z vyhľadávania.',
    },
    en: {
      title: 'SEO Services from €149/month | Vlad Weby',
      description:
        'SEO services for businesses in Slovakia and Central Europe. Increase Google visibility, get more customers from search. First results in 2–3 months.',
    },
    de: {
      title: 'SEO-Dienstleistungen ab 149 €/Monat | Vlad Weby',
      description:
        'SEO für Firmen in Mitteleuropa. Mehr Sichtbarkeit bei Google und mehr Kunden aus der Suche. Erste Ergebnisse in 2–3 Monaten.',
    },
    ru: {
      title: 'SEO-услуги от 149 €/мес. | Vlad Weby',
      description:
        'SEO для бизнеса в Словакии и Центральной Европе. Повышаем видимость в Google и приводим клиентов из поиска. Первые результаты за 2–3 месяца.',
    },
  },
  'service-ai-chatbot': {
    sk: {
      title: 'AI Chatbot pre firmy od 999 € | Vlad Weby',
      description:
        'AI chatbot 24/7 pre firmy. Automatizovaná zákaznícka podpora, rezervácie, viacjazyčné konverzácie na webe, IG, FB a Telegrame.',
    },
    en: {
      title: 'AI Chatbot for Business from €999 | Vlad Weby',
      description:
        'AI chatbot for businesses. 24/7 support, bookings, multilingual conversations on website, Instagram, Facebook and Telegram.',
    },
    de: {
      title: 'KI-Chatbot für Unternehmen ab 999 € | Vlad Weby',
      description:
        'KI-Chatbot für Unternehmen. 24/7 Support, Buchungen, mehrsprachige Konversationen auf Webseite, Instagram, Facebook und Telegram.',
    },
    ru: {
      title: 'AI-чатбот для бизнеса от 999 € | Vlad Weby',
      description:
        'AI-чатбот для бизнеса. Поддержка 24/7, бронирования, мультиязычные диалоги на сайте, в Instagram, Facebook и Telegram.',
    },
  },
  'service-chatgpt-shopping': {
    sk: {
      title: 'ChatGPT Shopping integrácia | Vlad Weby',
      description:
        'Dostaňte svoje produkty do ChatGPT Shopping. Bing Merchant Center, schema.org, OpenAI Merchant, GA4 pre WooCommerce, Shopify a Magento.',
    },
    en: {
      title: 'ChatGPT Shopping Integration for E-shops | Vlad Weby',
      description:
        'Get your products into ChatGPT Shopping. Bing Merchant Center, schema.org, OpenAI Merchant, GA4 for WooCommerce, Shopify, Prestashop and Magento.',
    },
    de: {
      title: 'ChatGPT Shopping Integration für Shops | Vlad Weby',
      description:
        'Ihre Produkte in ChatGPT Shopping. Bing Merchant Center, schema.org, OpenAI Merchant, GA4 für WooCommerce, Shopify, Prestashop und Magento.',
    },
    ru: {
      title: 'Интеграция ChatGPT Shopping для магазинов | Vlad Weby',
      description:
        'Ваши товары в ChatGPT Shopping. Bing Merchant Center, schema.org, OpenAI Merchant, GA4 для WooCommerce, Shopify, Prestashop и Magento.',
    },
  },
  'landing-web-pre-maly-biznis': {
    sk: {
      title: 'Webstránka pre malý biznis — Kompletný sprievodca | Vlad Weby',
      description:
        'Praktický sprievodca pre malé firmy a živnostníkov. Čo má obsahovať vaša webstránka, koľko do nej investovať a ako ju spustiť rýchlo.',
    },
  },
  'landing-cena-web-stranky': {
    sk: {
      title: 'Cena webstránky 2026 — Koľko stojí dobrý web? | Vlad Weby',
      description:
        'Aktuálne ceny webstránok na Slovensku. Porovnanie agentúr, freelancerov a builderov a koľko by ste mali investovať do webu pre malú firmu.',
    },
  },
};

// Blog-post metadata per slug per locale (slug-aware).
const BLOG_POST_META = {
  'improve-website-seo': {
    sk: {
      title: 'Ako zlepšiť SEO webu — 10 praktických tipov | Vlad Weby',
      description:
        'Konkrétne kroky, ktoré dnes zlepšia pozíciu vášho webu v Googli. Bez technického žargónu, iba overené SEO odporúčania pre malé firmy.',
    },
    en: {
      title: 'How to Improve Your Website SEO — 10 Practical Tips | Vlad Weby',
      description:
        'Concrete steps you can take today to rank higher on Google. No jargon — just proven SEO advice for small business websites.',
    },
    de: {
      title: 'Webseiten-SEO verbessern — 10 praktische Tipps | Vlad Weby',
      description:
        'Konkrete Schritte, um heute bei Google besser zu ranken. Kein Fachjargon — nur bewährte SEO-Tipps für kleine Unternehmen.',
    },
    ru: {
      title: 'Как улучшить SEO сайта — 10 практических советов | Vlad Weby',
      description:
        'Конкретные шаги, которые улучшат позиции сайта в Google уже сегодня. Без жаргона — только проверенные SEO-советы для малого бизнеса.',
    },
  },
  'ai-chatbot-for-business': {
    sk: {
      title: 'AI chatbot pre firmy — Ako automatizovať podporu | Vlad Weby',
      description:
        'Čo je AI chatbot, ako funguje a prečo ho váš biznis potrebuje. Reálne príklady, náklady a sprievodca implementáciou krok za krokom.',
    },
    en: {
      title: 'AI Chatbot for Business — Automate Customer Support | Vlad Weby',
      description:
        'What an AI chatbot is, how it works, and why your business needs one. Real examples, typical costs, and a step-by-step implementation guide.',
    },
    de: {
      title: 'KI-Chatbot für Unternehmen — Support automatisieren | Vlad Weby',
      description:
        'Was ein KI-Chatbot ist, wie er funktioniert und warum Ihr Unternehmen einen braucht. Beispiele, Kosten und Anleitung zur Umsetzung.',
    },
    ru: {
      title: 'AI-чатбот для бизнеса — Автоматизация поддержки | Vlad Weby',
      description:
        'Что такое AI-чатбот, как он работает и зачем он бизнесу. Реальные примеры, стоимость и пошаговое руководство по внедрению.',
    },
  },
  'website-cost-2025': {
    sk: {
      title: 'Koľko stojí webstránka v roku 2025? | Vlad Weby',
      description:
        'Prehľad cien webov na Slovensku. Porovnanie agentúr, freelancerov a website builderov. Zistite, koľko by ste mali investovať do svojho webu.',
    },
    en: {
      title: 'How Much Does a Website Cost in 2025? | Vlad Weby',
      description:
        'A full overview of website pricing. Agencies vs freelancers vs site builders — and how much you should actually invest in a business website.',
    },
    de: {
      title: 'Was kostet eine Webseite 2025? | Vlad Weby',
      description:
        'Vollständiger Überblick über Webseitenpreise. Agentur vs. Freelancer vs. Baukasten — und wie viel Sie wirklich investieren sollten.',
    },
    ru: {
      title: 'Сколько стоит сайт в 2025 году? | Vlad Weby',
      description:
        'Полный обзор стоимости сайтов. Агентства vs фрилансеры vs конструкторы — и сколько на самом деле стоит вложить в сайт для бизнеса.',
    },
  },
  'website-for-entrepreneurs': {
    sk: {
      title: 'Web pre podnikateľov — Kompletný sprievodca | Vlad Weby',
      description:
        'Praktický sprievodca pre podnikateľov a malé firmy. Čo má váš web obsahovať, koľko doň investovať a ako začať rýchlo a lacno.',
    },
    en: {
      title: 'Website for Entrepreneurs — Complete Guide | Vlad Weby',
      description:
        'A practical guide for entrepreneurs and small businesses. What to include on your website, how much to spend, and how to launch quickly.',
    },
    de: {
      title: 'Webseite für Unternehmer — Kompletter Leitfaden | Vlad Weby',
      description:
        'Praxisleitfaden für Unternehmer und KMUs. Was auf die Webseite gehört, welches Budget realistisch ist und wie Sie schnell starten.',
    },
    ru: {
      title: 'Сайт для предпринимателей — Полный гид | Vlad Weby',
      description:
        'Практический гид для предпринимателей и малого бизнеса. Что должно быть на сайте, сколько вложить и как быстро запуститься.',
    },
  },
  'wordpress-vs-modern-website': {
    sk: {
      title: 'WordPress vs moderný web — Čo je lepšie? | Vlad Weby',
      description:
        'Porovnanie WordPressu s modernými technológiami. Výhody, nevýhody a ktoré riešenie je ideálne pre vašu malú firmu alebo projekt.',
    },
    en: {
      title: 'WordPress vs Modern Website — What Is Better? | Vlad Weby',
      description:
        'Comparing WordPress with modern stacks. Pros, cons, and which solution is the right fit for your small business or side project.',
    },
    de: {
      title: 'WordPress vs moderne Webseite — Was ist besser? | Vlad Weby',
      description:
        'WordPress im Vergleich mit modernen Stacks. Vorteile, Nachteile und welche Lösung für Ihr kleines Unternehmen wirklich geeignet ist.',
    },
    ru: {
      title: 'WordPress vs современный сайт — Что лучше? | Vlad Weby',
      description:
        'Сравнение WordPress с современными стеками. Плюсы, минусы и какое решение подходит именно вашему малому бизнесу или проекту.',
    },
  },
  'chatgpt-shopping-for-ecommerce': {
    sk: {
      title: 'ChatGPT Shopping pre e-shopy 2026 — kompletný návod | Vlad Weby',
      description:
        'Ako dostať produkty vášho e-shopu do ChatGPT. Vysvetlíme Agentic Commerce Protocol, čo je ACP, ako sa pripraviť a prečo je to dôležité práve teraz.',
    },
    en: {
      title: 'ChatGPT Shopping for E-commerce 2026 — Complete Guide | Vlad Weby',
      description:
        'How to get your e-commerce products discovered by ChatGPT. Agentic Commerce Protocol explained, what to prepare, and why it matters right now.',
    },
    de: {
      title: 'ChatGPT Shopping für Online-Shops 2026 — Kompletter Guide | Vlad Weby',
      description:
        'Wie Ihre Produkte in ChatGPT Shopping auftauchen. Agentic Commerce Protocol erklärt, was vorzubereiten ist und warum es jetzt wichtig wird.',
    },
    ru: {
      title: 'ChatGPT Shopping для магазинов 2026 — Полный гид | Vlad Weby',
      description:
        'Как добавить товары вашего магазина в ChatGPT. Agentic Commerce Protocol, что такое ACP, как подготовиться и почему это важно именно сейчас.',
    },
  },
};

// Blog post × locale combinations whose body content does not match the declared
// language (audit C5/C6) — these are noindex'd until proper translations land,
// and excluded from the sitemap and from blog hreflang.
//
// Format: Set of `${canonicalSlug}|${locale}` strings.
export const BLOG_NOINDEX = new Set([
  // C5: Slovak SeoArticle and AiChatbotArticle render English body
  'improve-website-seo|sk',
  'ai-chatbot-for-business|sk',
  // C6: no de/ article components; every DE blog falls back to English
  'improve-website-seo|de',
  'ai-chatbot-for-business|de',
  'website-cost-2025|de',
  'website-for-entrepreneurs|de',
  'wordpress-vs-modern-website|de',
  'chatgpt-shopping-for-ecommerce|de',
]);

export function isBlogNoindex(canonicalSlug, locale) {
  return BLOG_NOINDEX.has(`${canonicalSlug}|${locale}`);
}

export function getPageMetadata(pageKey, locale, { slug } = {}) {
  const effectiveLocale = LOCALES.includes(locale) ? locale : DEFAULT_LOCALE;

  let title, description;
  if (pageKey === 'blog-post' && slug && BLOG_POST_META[slug]) {
    const entry = BLOG_POST_META[slug][effectiveLocale] || BLOG_POST_META[slug][DEFAULT_LOCALE];
    title = entry.title;
    description = entry.description;
  } else if (PAGE_META[pageKey]) {
    const entry = PAGE_META[pageKey][effectiveLocale] || PAGE_META[pageKey][DEFAULT_LOCALE];
    title = entry.title;
    description = entry.description;
  }

  const alternates = getAlternates(pageKey, effectiveLocale, { slug });
  const url = alternates.canonical;

  const metadata = {
    title,
    description,
    alternates,
    openGraph: {
      title,
      description,
      url,
      siteName: 'Vlad Weby',
      locale: effectiveLocale,
      type: pageKey === 'blog-post' ? 'article' : 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };

  if (pageKey === 'blog-post' && slug && isBlogNoindex(slug, effectiveLocale)) {
    metadata.robots = { index: false, follow: true };
  }

  return metadata;
}

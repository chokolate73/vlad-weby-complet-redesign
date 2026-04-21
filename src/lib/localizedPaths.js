/**
 * Locale-specific URL mappings.
 *
 * Slovak is the default locale WITHOUT a URL prefix (/, /tvorba-web-stranok),
 * so SK paths here have no leading /sk. Other locales carry the /<locale>
 * prefix via next-intl's middleware.
 *
 * Keys are the internal / canonical identifiers:
 *  - Service keys match the folder name under `app/[locale]/services/`.
 *  - Blog keys are the canonical slug used by the article-component lookup.
 *
 * English and German keep the English canonical slug; Slovak and Russian
 * use the locale-native slugs Google historically indexed.
 */

export const LOCALES = ['sk', 'en', 'de', 'ru'];

// Per-locale path (no locale prefix) for each service.
export const SERVICE_PATHS = {
  'web-design': {
    sk: '/tvorba-web-stranok',
    en: '/web-design',
    de: '/services/web-design',
    ru: '/sozdanie-saitov',
  },
  seo: {
    sk: '/seo-optimalizacia',
    en: '/seo-services',
    de: '/services/seo',
    ru: '/seo-optimizaciya',
  },
  'ai-chatbot': {
    sk: '/ai-chatbot',
    en: '/ai-chatbot',
    de: '/services/ai-chatbot',
    ru: '/ai-chatbot',
  },
  'chatgpt-shopping': {
    sk: '/chatgpt-shopping-integracia',
    en: '/chatgpt-shopping',
    de: '/services/chatgpt-shopping',
    ru: '/chatgpt-shopping',
  },
};

// Per-locale blog slug. The key is the canonical internal identifier.
export const BLOG_PATHS = {
  'website-cost-2025': {
    sk: 'kolko-stoji-web-stranka',
    en: 'how-much-does-a-website-cost',
    de: 'website-cost-2025',
    ru: 'skolko-stoit-sajt',
  },
  'improve-website-seo': {
    sk: 'ako-zlepsit-seo',
    en: 'how-to-improve-seo',
    de: 'improve-website-seo',
    ru: 'kak-uluchshit-seo',
  },
  'website-for-entrepreneurs': {
    sk: 'web-stranka-pre-zivnostnika',
    en: 'website-for-entrepreneurs',
    de: 'website-for-entrepreneurs',
    ru: 'sajt-dlya-predprinimatelej',
  },
  'wordpress-vs-modern-website': {
    sk: 'wordpress-vs-moderny-web',
    en: 'wordpress-vs-modern-website',
    de: 'wordpress-vs-modern-website',
    ru: 'wordpress-vs-sovremennyj-sajt',
  },
  'ai-chatbot-for-business': {
    sk: 'ai-chatbot-pre-firmy',
    en: 'ai-chatbot-for-business',
    de: 'ai-chatbot-for-business',
    ru: 'ai-chatbot-dlya-biznesa',
  },
  'chatgpt-shopping-for-ecommerce': {
    sk: 'chatgpt-shopping-pre-eshopy',
    en: 'chatgpt-shopping-for-ecommerce',
    de: 'chatgpt-shopping-fuer-online-shops',
    ru: 'chatgpt-shopping-dlya-magazinov',
  },
};

// Prefix an already-canonical path with /<locale> unless the locale is Slovak
// (the default locale, which has no URL prefix).
export function localePath(path, locale) {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return locale === 'sk' ? clean : `/${locale}${clean}`;
}

// Build a full URL for a service in a given locale.
// Slovak (default locale) has no /sk prefix.
export function serviceUrl(key, locale) {
  const paths = SERVICE_PATHS[key];
  const path = paths ? paths[locale] || paths.en : `/services/${key}`;
  return locale === 'sk' ? path : `/${locale}${path}`;
}

// Build a full URL for a blog post in a given locale.
export function blogUrl(canonicalSlug, locale) {
  const paths = BLOG_PATHS[canonicalSlug];
  const slug = paths ? paths[locale] || paths.en : canonicalSlug;
  return locale === 'sk' ? `/blog/${slug}` : `/${locale}/blog/${slug}`;
}

// Reverse-map a URL slug back to the canonical blog key.
// Accepts the locale-specific slug; falls back to a direct match so
// legacy / canonical URLs still resolve.
export function canonicalBlogKey(urlSlug, locale) {
  if (BLOG_PATHS[urlSlug]) return urlSlug;
  for (const [key, map] of Object.entries(BLOG_PATHS)) {
    if (map[locale] === urlSlug) return key;
  }
  for (const [key, map] of Object.entries(BLOG_PATHS)) {
    if (Object.values(map).includes(urlSlug)) return key;
  }
  return null;
}

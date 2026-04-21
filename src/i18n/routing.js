import { defineRouting } from 'next-intl/routing';

// Slovak is the default locale and renders at root (no /sk prefix).
// English, German and Russian keep their /<locale> prefix.
//
// `localeDetection: false` — visitors landing on `/` always see the Slovak
// version regardless of their browser's Accept-Language. Other locales are
// reached explicitly via /en, /de, /ru prefixes.
//
// The `pathnames` map declares locale-specific URL forms. The keys are
// "canonical" paths that match the app-router folder structure; the
// values are the URL slug shown in the address bar per locale.
export const routing = defineRouting({
  locales: ['sk', 'en', 'de', 'ru'],
  defaultLocale: 'sk',
  localePrefix: 'as-needed',
  localeDetection: false,
  pathnames: {
    '/': '/',
    '/all-services': '/all-services',
    '/all-blog': '/all-blog',
    '/portfolio': '/portfolio',
    '/contact': '/contact',
    '/cookies': '/cookies',
    '/privacy-policy': '/privacy-policy',
    '/businesscard': '/businesscard',
    '/services/web-design': {
      sk: '/tvorba-web-stranok',
      en: '/web-design',
      de: '/services/web-design',
      ru: '/sozdanie-saitov',
    },
    '/services/seo': {
      sk: '/seo-optimalizacia',
      en: '/seo-services',
      de: '/services/seo',
      ru: '/seo-optimizaciya',
    },
    '/services/ai-chatbot': {
      sk: '/ai-chatbot',
      en: '/ai-chatbot',
      de: '/services/ai-chatbot',
      ru: '/ai-chatbot',
    },
    '/services/chatgpt-shopping': {
      sk: '/chatgpt-shopping-integracia',
      en: '/chatgpt-shopping',
      de: '/services/chatgpt-shopping',
      ru: '/chatgpt-shopping',
    },
    '/blog/[slug]': '/blog/[slug]',
  },
});

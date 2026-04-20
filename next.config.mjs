import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.js');

const legacyRedirects = [
  // --- Slovak: drop old English-slug URLs to localized SK URLs (SK has no /sk prefix) ---
  { source: '/sk', destination: '/', permanent: true },
  { source: '/sk/services/web-design', destination: '/tvorba-web-stranok', permanent: true },
  { source: '/sk/services/seo', destination: '/seo-optimalizacia', permanent: true },
  { source: '/sk/services/ai-chatbot', destination: '/ai-chatbot', permanent: true },
  { source: '/sk/services/chatgpt-shopping', destination: '/chatgpt-shopping-integracia', permanent: true },
  { source: '/sk/all-services', destination: '/all-services', permanent: true },
  { source: '/sk/portfolio', destination: '/portfolio', permanent: true },
  { source: '/sk/all-blog', destination: '/all-blog', permanent: true },
  { source: '/sk/contact', destination: '/contact', permanent: true },
  { source: '/sk/cookies', destination: '/cookies', permanent: true },
  { source: '/sk/privacy-policy', destination: '/privacy-policy', permanent: true },
  { source: '/sk/businesscard', destination: '/businesscard', permanent: true },
  { source: '/sk/blog/website-cost-2025', destination: '/blog/kolko-stoji-web-stranka', permanent: true },
  { source: '/sk/blog/improve-website-seo', destination: '/blog/ako-zlepsit-seo', permanent: true },
  { source: '/sk/blog/website-for-entrepreneurs', destination: '/blog/web-stranka-pre-zivnostnika', permanent: true },
  { source: '/sk/blog/wordpress-vs-modern-website', destination: '/blog/wordpress-vs-moderny-web', permanent: true },
  { source: '/sk/blog/ai-chatbot-for-business', destination: '/blog/ai-chatbot-pre-firmy', permanent: true },

  // Old city / service-city URLs Google still shows — point to the main SK web-design page until
  // dedicated city landers are built.
  { source: '/sk/tvorba-web-stranok-dunajska-streda', destination: '/tvorba-web-stranok', permanent: true },
  { source: '/sk/web/dunajska-streda', destination: '/tvorba-web-stranok', permanent: true },
  { source: '/sk/web/kosice', destination: '/tvorba-web-stranok', permanent: true },
  { source: '/sk/tvorba-web-stranok', destination: '/tvorba-web-stranok', permanent: true },
  { source: '/sk/seo-optimalizacia', destination: '/seo-optimalizacia', permanent: true },
  { source: '/sk/ai-chatbot', destination: '/ai-chatbot', permanent: true },
  { source: '/sk/chatgpt-shopping-integracia', destination: '/chatgpt-shopping-integracia', permanent: true },
  { source: '/sk/blog/kolko-stoji-web-stranka', destination: '/blog/kolko-stoji-web-stranka', permanent: true },
  { source: '/sk/blog/ako-zlepsit-seo', destination: '/blog/ako-zlepsit-seo', permanent: true },
  { source: '/sk/blog/web-stranka-pre-zivnostnika', destination: '/blog/web-stranka-pre-zivnostnika', permanent: true },
  { source: '/sk/blog/wordpress-vs-moderny-web', destination: '/blog/wordpress-vs-moderny-web', permanent: true },
  { source: '/sk/blog/ai-chatbot-pre-firmy', destination: '/blog/ai-chatbot-pre-firmy', permanent: true },

  // --- English: drop /services/ prefix, restore historical blog slugs ---
  { source: '/en/services/web-design', destination: '/en/web-design', permanent: true },
  { source: '/en/services/seo', destination: '/en/seo-services', permanent: true },
  { source: '/en/services/ai-chatbot', destination: '/en/ai-chatbot', permanent: true },
  { source: '/en/services/chatgpt-shopping', destination: '/en/chatgpt-shopping', permanent: true },
  { source: '/en/blog/improve-website-seo', destination: '/en/blog/how-to-improve-seo', permanent: true },
  { source: '/en/blog/website-cost-2025', destination: '/en/blog/how-much-does-a-website-cost', permanent: true },
  { source: '/en/ai-chatbot', destination: '/en/blog/ai-chatbot-for-business', permanent: true },
  { source: '/en/why-seo', destination: '/en/blog/how-to-improve-seo', permanent: true },

  // --- Russian: drop /services/ prefix, restore cyrillic blog slugs ---
  { source: '/ru/services/web-design', destination: '/ru/sozdanie-saitov', permanent: true },
  { source: '/ru/services/seo', destination: '/ru/seo-optimizaciya', permanent: true },
  { source: '/ru/services/ai-chatbot', destination: '/ru/ai-chatbot', permanent: true },
  { source: '/ru/services/chatgpt-shopping', destination: '/ru/chatgpt-shopping', permanent: true },
  { source: '/ru/blog/improve-website-seo', destination: '/ru/blog/kak-uluchshit-seo', permanent: true },
  { source: '/ru/blog/website-cost-2025', destination: '/ru/blog/skolko-stoit-sajt', permanent: true },
  { source: '/ru/blog/website-for-entrepreneurs', destination: '/ru/blog/sajt-dlya-predprinimatelej', permanent: true },
  { source: '/ru/blog/wordpress-vs-modern-website', destination: '/ru/blog/wordpress-vs-sovremennyj-sajt', permanent: true },
  { source: '/ru/blog/ai-chatbot-for-business', destination: '/ru/blog/ai-chatbot-dlya-biznesa', permanent: true },
  { source: '/ru/seo-prodvizhenie', destination: '/ru/seo-optimizaciya', permanent: true },

  // --- Old works/legacy paths ---
  { source: '/works', destination: '/en/portfolio', permanent: true },
  { source: '/worksk', destination: '/portfolio', permanent: true },
  { source: '/worksru', destination: '/ru/portfolio', permanent: true },

  // Fix the old misspelled path to the corrected portfolio URL
  { source: '/:locale/protfolio', destination: '/:locale/portfolio', permanent: true },

  // Removed placeholder template pages -> parent sections
  { source: '/:locale/blog-details', destination: '/:locale/all-blog', permanent: true },
  { source: '/:locale/service-details', destination: '/:locale/all-services', permanent: true },
  { source: '/:locale/protfolio-details', destination: '/:locale/portfolio', permanent: true },
  { source: '/:locale/portfolio-details', destination: '/:locale/portfolio', permanent: true },
];

// Filter out self-redirects (source === destination), then add trailing-slash variants.
const filteredRedirects = legacyRedirects.filter((r) => r.source !== r.destination);

const withTrailingSlashVariants = filteredRedirects.flatMap((rule) => {
  if (rule.source.endsWith('/')) return [rule];
  return [rule, { ...rule, source: `${rule.source}/` }];
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return withTrailingSlashVariants;
  },
};

export default withNextIntl(nextConfig);

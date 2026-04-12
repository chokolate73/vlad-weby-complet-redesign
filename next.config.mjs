import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.js');

const legacyRedirects = [
  // Slovak service pages
  { source: '/sk/tvorba-web-stranok', destination: '/sk/all-services', permanent: true },
  { source: '/sk/seo-optimalizacia', destination: '/sk/blog/improve-website-seo', permanent: true },
  { source: '/sk/web/trnava', destination: '/sk/all-services', permanent: true },
  { source: '/sk/web/nitra', destination: '/sk/all-services', permanent: true },

  // English service/content pages
  { source: '/en/ai-chatbot', destination: '/en/blog/ai-chatbot-for-business', permanent: true },
  { source: '/en/why-seo', destination: '/en/blog/improve-website-seo', permanent: true },

  // Blog slug changes
  { source: '/en/blog/how-much-does-a-website-cost', destination: '/en/blog/website-cost-2025', permanent: true },
  { source: '/en/blog/how-to-improve-seo', destination: '/en/blog/improve-website-seo', permanent: true },

  // Russian SEO page
  { source: '/ru/seo-prodvizhenie', destination: '/ru/blog/improve-website-seo', permanent: true },

  // Old works page (non-localised)
  { source: '/works', destination: '/en/portfolio', permanent: true },

  // Fix the old misspelled path to the corrected portfolio URL
  { source: '/:locale/protfolio', destination: '/:locale/portfolio', permanent: true },

  // Removed placeholder template pages -> parent sections
  { source: '/:locale/blog-details', destination: '/:locale/all-blog', permanent: true },
  { source: '/:locale/service-details', destination: '/:locale/all-services', permanent: true },
  { source: '/:locale/protfolio-details', destination: '/:locale/portfolio', permanent: true },
  { source: '/:locale/portfolio-details', destination: '/:locale/portfolio', permanent: true },
];

// Also cover trailing-slash variants, since the live site may have had them indexed.
const withTrailingSlashVariants = legacyRedirects.flatMap((rule) => {
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

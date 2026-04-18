import { BASE_URL, LOCALES, routeMap, BLOG_SLUGS } from "@/lib/seo";

const STATIC_PAGES = [
  { key: 'home', priority: 1.0, changeFrequency: 'weekly' },
  { key: 'services', priority: 0.9, changeFrequency: 'monthly' },
  { key: 'service-web-design', priority: 0.85, changeFrequency: 'monthly' },
  { key: 'service-seo', priority: 0.85, changeFrequency: 'monthly' },
  { key: 'service-ai-chatbot', priority: 0.85, changeFrequency: 'monthly' },
  { key: 'service-chatgpt-shopping', priority: 0.85, changeFrequency: 'monthly' },
  { key: 'portfolio', priority: 0.8, changeFrequency: 'monthly' },
  { key: 'blog', priority: 0.8, changeFrequency: 'weekly' },
  { key: 'contact', priority: 0.7, changeFrequency: 'monthly' },
  { key: 'businesscard', priority: 0.4, changeFrequency: 'yearly' },
  { key: 'cookies', priority: 0.2, changeFrequency: 'yearly' },
  { key: 'privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
];

export default function sitemap() {
  const now = new Date();
  const entries = [];

  for (const { key, priority, changeFrequency } of STATIC_PAGES) {
    const routes = routeMap[key];
    if (!routes) continue;
    for (const locale of LOCALES) {
      const path = routes[locale];
      if (!path) continue;
      entries.push({
        url: `${BASE_URL}${path}`,
        lastModified: now,
        changeFrequency,
        priority,
        alternates: {
          languages: Object.fromEntries(
            LOCALES.filter((l) => routes[l]).map((l) => [l, `${BASE_URL}${routes[l]}`])
          ),
        },
      });
    }
  }

  for (const slug of BLOG_SLUGS) {
    for (const locale of LOCALES) {
      entries.push({
        url: `${BASE_URL}/${locale}/blog/${slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.6,
        alternates: {
          languages: Object.fromEntries(
            LOCALES.map((l) => [l, `${BASE_URL}/${l}/blog/${slug}`])
          ),
        },
      });
    }
  }

  return entries;
}

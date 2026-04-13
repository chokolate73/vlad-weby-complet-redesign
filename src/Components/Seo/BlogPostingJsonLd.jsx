import React from "react";

const BLOG_POSTS = {
  'improve-website-seo': {
    headline: {
      en: 'How to Improve Your Website SEO — 10 Practical Tips',
      sk: 'Ako zlepšiť SEO webu — 10 praktických tipov',
      de: 'Webseiten-SEO verbessern — 10 praktische Tipps',
      ru: 'Как улучшить SEO сайта — 10 практических советов',
    },
    description: {
      en: 'Concrete steps you can take today to rank higher on Google. No jargon — just proven SEO advice for small business websites.',
      sk: 'Konkrétne kroky, ktoré dnes zlepšia pozíciu vášho webu v Googli.',
      de: 'Konkrete Schritte, um heute bei Google besser zu ranken.',
      ru: 'Конкретные шаги, которые улучшат позиции сайта в Google уже сегодня.',
    },
    datePublished: '2026-02-12',
  },
  'ai-chatbot-for-business': {
    headline: {
      en: 'AI Chatbot for Business — How to Automate Customer Support',
      sk: 'AI chatbot pre firmy — Ako automatizovať zákaznícku podporu',
      de: 'KI-Chatbot für Unternehmen — Kundensupport automatisieren',
      ru: 'AI-чатбот для бизнеса — Автоматизация поддержки клиентов',
    },
    description: {
      en: 'What an AI chatbot is, how it works, and why your business needs one.',
      sk: 'Čo je AI chatbot, ako funguje a prečo ho váš biznis potrebuje.',
      de: 'Was ein KI-Chatbot ist, wie er funktioniert und warum Ihr Unternehmen einen braucht.',
      ru: 'Что такое AI-чатбот, как он работает и зачем он бизнесу.',
    },
    datePublished: '2026-02-12',
  },
  'website-cost-2025': {
    headline: {
      en: 'How Much Does a Website Cost in 2025?',
      sk: 'Koľko stojí webstránka v roku 2025?',
      de: 'Was kostet eine Webseite 2025?',
      ru: 'Сколько стоит сайт в 2025 году?',
    },
    description: {
      en: 'A complete overview of website pricing in Slovakia.',
      sk: 'Kompletný prehľad cien webov na Slovensku.',
      de: 'Vollständiger Überblick über Webseitenpreise.',
      ru: 'Полный обзор стоимости сайтов.',
    },
    datePublished: '2026-02-12',
  },
  'website-for-entrepreneurs': {
    headline: {
      en: 'Website for Entrepreneurs — Complete Guide',
      sk: 'Web pre podnikateľov — Kompletný sprievodca',
      de: 'Webseite für Unternehmer — Kompletter Leitfaden',
      ru: 'Сайт для предпринимателей — Полный гид',
    },
    description: {
      en: 'A practical guide for entrepreneurs and small businesses.',
      sk: 'Praktický sprievodca pre podnikateľov a malé firmy.',
      de: 'Praxisleitfaden für Unternehmer und KMUs.',
      ru: 'Практический гид для предпринимателей и малого бизнеса.',
    },
    datePublished: '2026-02-12',
  },
  'wordpress-vs-modern-website': {
    headline: {
      en: "WordPress vs Modern Website — What's Better for Small Business?",
      sk: 'WordPress vs moderný web — Čo je lepšie?',
      de: 'WordPress vs moderne Webseite — Was ist besser?',
      ru: 'WordPress vs современный сайт — Что лучше?',
    },
    description: {
      en: 'A comparison of WordPress with modern technologies.',
      sk: 'Porovnanie WordPressu s modernými technológiami.',
      de: 'WordPress im Vergleich mit modernen Stacks.',
      ru: 'Сравнение WordPress с современными технологиями.',
    },
    datePublished: '2026-02-12',
  },
};

export default function BlogPostingJsonLd({ slug, locale = "en" }) {
  const post = BLOG_POSTS[slug];
  if (!post) return null;

  const l = post.headline[locale] ? locale : "en";

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.headline[l],
    description: post.description[l],
    datePublished: post.datePublished,
    dateModified: post.datePublished,
    inLanguage: l,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.vlad-weby.sk/${l}/blog/${slug}`,
    },
    author: {
      "@type": "Person",
      name: "Vladislav Khvorov",
      url: "https://www.vlad-weby.sk",
    },
    publisher: {
      "@type": "Organization",
      name: "Vlad Weby",
      logo: {
        "@type": "ImageObject",
        url: "https://www.vlad-weby.sk/img/logo/logo.png",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

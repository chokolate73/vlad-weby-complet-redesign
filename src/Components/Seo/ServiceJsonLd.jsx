import React from "react";
import { serviceUrl } from "@/lib/localizedPaths";

const BASE_URL = "https://www.vlad-weby.sk";

const AREA_SERVED = [
  { "@type": "Country", name: "Slovakia" },
  { "@type": "Country", name: "Germany" },
  { "@type": "Country", name: "Austria" },
];

const AVAILABLE_LANGUAGE = ["sk", "en", "de", "ru"];

const SERVICE_DEFINITIONS = {
  "web-design": {
    serviceType: "Web Design & Development",
    price: "390",
    name: {
      sk: "Tvorba webových stránok",
      en: "Web Design & Development",
      de: "Webdesign & Entwicklung",
      ru: "Разработка сайтов",
    },
    description: {
      sk: "Moderné webstránky pre malé firmy. Rýchle, mobilné, optimalizované pre Google. Spustenie do 2 týždňov od 390 €.",
      en: "Modern websites for small businesses. Fast, mobile-friendly, Google-optimized. Launched in 2 weeks from €390.",
      de: "Moderne Webseiten für kleine Unternehmen. Schnell, mobil, für Google optimiert. In 2 Wochen ab 390 € live.",
      ru: "Современные сайты для малого бизнеса. Быстрые, мобильные, оптимизированные для Google. Запуск за 2 недели от 390 €.",
    },
  },
  seo: {
    serviceType: "Search Engine Optimization",
    price: "149",
    name: {
      sk: "SEO optimalizácia",
      en: "SEO Optimization",
      de: "SEO-Optimierung",
      ru: "SEO-оптимизация",
    },
    description: {
      sk: "Mesačné SEO služby pre malé firmy. Audit, technické úpravy, obsah a Google Business Profile. Od 149 €/mesiac.",
      en: "Monthly SEO services for small businesses. Audit, technical fixes, content, and Google Business Profile. From €149/month.",
      de: "Monatliche SEO-Dienstleistungen für KMUs. Audit, technische Optimierung, Inhalte und Google Business Profile. Ab 149 €/Monat.",
      ru: "Ежемесячные SEO-услуги для малого бизнеса. Аудит, технические правки, контент и Google Business Profile. От 149 €/мес.",
    },
  },
  "ai-chatbot": {
    serviceType: "AI Chatbot Integration",
    price: "999",
    name: {
      sk: "AI Chatbot pre firmy",
      en: "AI Chatbot for Business",
      de: "KI-Chatbot für Unternehmen",
      ru: "AI-чатбот для бизнеса",
    },
    description: {
      sk: "AI chatboty pre zákaznícku podporu a generovanie leadov. Integrácia s vaším webom, Reservio, Bookio. Od 999 €.",
      en: "AI chatbots for customer support and lead generation. Integration with your website, Reservio, Bookio. From €999.",
      de: "KI-Chatbots für Kundensupport und Lead-Generierung. Integration mit Ihrer Webseite, Reservio, Bookio. Ab 999 €.",
      ru: "AI-чатботы для поддержки клиентов и генерации лидов. Интеграция с сайтом, Reservio, Bookio. От 999 €.",
    },
  },
  "chatgpt-shopping": {
    serviceType: "ChatGPT Shopping Integration",
    price: "599",
    name: {
      sk: "ChatGPT Shopping integrácia",
      en: "ChatGPT Shopping Integration",
      de: "ChatGPT Shopping Integration",
      ru: "Интеграция ChatGPT Shopping",
    },
    description: {
      sk: "Dostaňte svoje produkty do ChatGPT Shopping. Bing Merchant Center, schema.org, OpenAI Merchant pre WooCommerce, Shopify a Magento.",
      en: "Get your products into ChatGPT Shopping. Bing Merchant Center, schema.org, OpenAI Merchant for WooCommerce, Shopify, and Magento.",
      de: "Ihre Produkte in ChatGPT Shopping. Bing Merchant Center, schema.org, OpenAI Merchant für WooCommerce, Shopify und Magento.",
      ru: "Ваши товары в ChatGPT Shopping. Bing Merchant Center, schema.org, OpenAI Merchant для WooCommerce, Shopify и Magento.",
    },
  },
};

function pickLocale(map, locale) {
  return map[locale] || map.en || map.sk;
}

export default function ServiceJsonLd({ locale = "en", serviceKey }) {
  if (serviceKey) {
    const def = SERVICE_DEFINITIONS[serviceKey];
    if (!def) return null;
    const url = `${BASE_URL}${serviceUrl(serviceKey, locale)}`;
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: def.serviceType,
      name: pickLocale(def.name, locale),
      description: pickLocale(def.description, locale),
      url,
      provider: { "@id": `${BASE_URL}/#business` },
      areaServed: AREA_SERVED,
      availableLanguage: AVAILABLE_LANGUAGE,
      offers: {
        "@type": "Offer",
        price: def.price,
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url,
      },
    };
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    );
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Web Development & AI Integration",
    name: "Web Development, SEO & AI Chatbot Services",
    description:
      "Modern websites, landing pages, SEO optimization, and AI chatbot integration. Built for conversions, launched in weeks.",
    provider: { "@id": `${BASE_URL}/#business` },
    areaServed: AREA_SERVED,
    offers: [
      {
        "@type": "Offer",
        name: "Landing Page",
        price: "390",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        name: "Multi-Page Website",
        price: "599",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        name: "AI Growth Engine",
        price: "999",
        priceCurrency: "EUR",
      },
    ],
    availableLanguage: AVAILABLE_LANGUAGE,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

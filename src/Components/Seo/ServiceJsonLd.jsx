import React from "react";

export default function ServiceJsonLd({ locale = "en" }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Web Development & AI Integration",
    name: "Web Development, SEO & AI Chatbot Services",
    description:
      "Modern websites, landing pages, SEO optimization, and AI chatbot integration. Built for conversions, launched in weeks.",
    provider: { "@id": "https://www.vlad-weby.sk/#business" },
    areaServed: [
      { "@type": "Country", name: "Slovakia" },
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "Austria" },
    ],
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
    availableLanguage: ["sk", "en", "de", "ru"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

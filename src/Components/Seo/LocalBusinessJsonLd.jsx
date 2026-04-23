import React from "react";

export default function LocalBusinessJsonLd({ locale = "en" }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.vlad-weby.sk/#business",
    name: "Vlad Weby",
    alternateName: "Vladislav Khvorov",
    url: "https://www.vlad-weby.sk",
    image: "https://www.vlad-weby.sk/img/banner/banner-man.png",
    logo: "https://www.vlad-weby.sk/img/logo/logo.png",
    description:
      "Web development, SEO optimization, and AI chatbot integration for small and mid-sized businesses across Central Europe.",
    telephone: "+421919208426",
    email: "v.hvorov73@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bottova 2A",
      addressLocality: "Bratislava",
      postalCode: "811 09",
      addressCountry: "SK",
    },
    areaServed: [
      { "@type": "Country", name: "Slovakia" },
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "Austria" },
      { "@type": "Country", name: "Ukraine" },
    ],
    priceRange: "€€",
    knowsLanguage: ["sk", "en", "de", "ru"],
    sameAs: [
      "https://www.instagram.com/vladislav.als",
    ],
    makesOffer: [
      "Web Development",
      "SEO Optimization",
      "AI Chatbot Integration",
      "Landing Page Design",
      "Multilingual Websites",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name, serviceType: name },
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "3",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

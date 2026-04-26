import React from "react";

export default function LocalBusinessJsonLd({ locale = "en" }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.vlad-weby.sk/#business",
    name: "Vlad Weby",
    alternateName: "Vladislav Khvorov",
    url: "https://www.vlad-weby.sk",
    image: "https://www.vlad-weby.sk/img/hero/hero-man.png",
    logo: "https://www.vlad-weby.sk/img/logo/logo.png",
    description:
      "Web development, SEO optimization, and AI chatbot integration for small and mid-sized businesses across Central Europe.",
    telephone: "+421919208426",
    email: "v.hvorov73@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bratislava",
      addressRegion: "Bratislavský kraj",
      addressCountry: "SK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.1441037718175,
      longitude: 17.12706263102356,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "10:00",
        closes: "21:00",
      },
    ],
    areaServed: [
      { "@type": "Country", name: "Slovakia" },
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "Austria" },
    ],
    priceRange: "€€",
    knowsLanguage: ["sk", "en", "de", "ru"],
    sameAs: [
      "https://www.instagram.com/vladislav.als",
      "https://www.google.com/maps?cid=12190981435023554892",
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
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

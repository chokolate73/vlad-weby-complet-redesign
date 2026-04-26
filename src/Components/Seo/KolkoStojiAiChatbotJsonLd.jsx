import React from "react";

const PAGE_URL = "https://www.vlad-weby.sk/kolko-stoji-ai-chatbot";
const DATE_PUBLISHED = "2026-04-26";

const FAQS = [
  {
    q: "Koľko reálne stojí AI chatbot pre slovenskú firmu v roku 2026?",
    a: "Jednorazovo 300 až 600 € podľa rozsahu plus 30 až 50 € mesačne za prevádzku (API + údržba). Tri scenáre: 300 € základný, 400 € stredný s jednou integráciou, 600 € pokročilý s viacerými kanálmi a multi-jazyčnosťou.",
  },
  {
    q: "Prečo je niekde uvedené len „od 400 €“ bez horného stropu?",
    a: "Pretože väčšina cenníkov nemá horný strop zámerne — výsledná cena sa nastaví podľa toho, ako vážne zákazník chatbot potrebuje. V tomto článku máte tri konkrétne sumy s rozsahom toho, čo dostanete za každú z nich.",
  },
  {
    q: "Prečo nepoužiť subscription chatbot?",
    a: "Subscription služby fungujú na jednej šablóne, ktorá obsluhuje desiatky klientov naraz — všeobecné odpovede, plytká knowledge base, žiadne hlbšie integrácie. Ja namiesto toho buildujem chatbot presne pre vašu firmu: knowledge base podľa vášho cenníka a storno podmienok, tone-of-voice doladený podľa vašej značky a integrácie s tým, čo už používate (Reservio, Bookio, e-shop).",
  },
  {
    q: "Z čoho sa skladajú mesačné náklady 30–50 €?",
    a: "Dve zložky: 5–25 € sú API náklady (OpenAI) podľa objemu konverzácií, 25–35 € je údržba (aktualizácia cenníka, oprava chybných odpovedí, mesačný report).",
  },
  {
    q: "Kedy AI chatbot pre moju firmu nemá zmysel?",
    a: "Ak máte menej ako 5–10 zákazníckych správ denne, ak sú vaše konverzácie veľmi individuálne (právne poradenstvo, B2B sales), ak vaši zákazníci preferujú telefón, alebo ak nemáte štruktúrovaný cenník či katalóg.",
  },
];

export default function KolkoStojiAiChatbotJsonLd() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Koľko stojí AI chatbot pre firmu na Slovensku v roku 2026",
    description:
      "Konkrétne ceny AI chatbotov pre slovenské firmy: od 300 € jednorazovo plus 30–50 € mesačne. Tri scenáre s presnými sumami a tým, čo za ne dostanete.",
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_PUBLISHED,
    inLanguage: "sk",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": PAGE_URL,
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((entry) => ({
      "@type": "Question",
      name: entry.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: entry.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

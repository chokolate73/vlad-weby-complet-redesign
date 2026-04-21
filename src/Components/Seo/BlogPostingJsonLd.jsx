import React from "react";
import { blogUrl } from "@/lib/localizedPaths";

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
  'chatgpt-shopping-for-ecommerce': {
    headline: {
      en: 'ChatGPT Shopping for E-commerce — How to Appear in ChatGPT Results in 2026',
      sk: 'ChatGPT Shopping pre e-shopy — ako sa dostať do výsledkov ChatGPT v roku 2026',
      de: 'ChatGPT Shopping für Online-Shops — So erscheinen Ihre Produkte 2026 in ChatGPT',
      ru: 'ChatGPT Shopping для магазинов — как попасть в результаты ChatGPT в 2026 году',
    },
    description: {
      en: 'How to get your e-commerce products discovered by ChatGPT. Agentic Commerce Protocol explained, what to prepare, and why it matters right now.',
      sk: 'Ako dostať produkty vášho e-shopu do ChatGPT. Vysvetlíme Agentic Commerce Protocol, čo je ACP, ako sa pripraviť a prečo je to dôležité práve teraz.',
      de: 'Wie Ihre Produkte in ChatGPT Shopping auftauchen. Agentic Commerce Protocol erklärt, was vorzubereiten ist und warum es jetzt wichtig wird.',
      ru: 'Как добавить товары вашего магазина в ChatGPT. Agentic Commerce Protocol, что такое ACP, как подготовиться и почему это важно именно сейчас.',
    },
    datePublished: '2026-04-21',
  },
};

// FAQ entries shown under the article's "Common Myths" section.
const BLOG_FAQ = {
  'chatgpt-shopping-for-ecommerce': {
    en: [
      {
        q: 'Do I have to pay OpenAI for my products to show up in ChatGPT Shopping?',
        a: 'No. Results are organic. OpenAI currently does not sell paid placements in Shopping results. This is explicitly confirmed in the Agentic Commerce Protocol documentation.',
      },
      {
        q: 'Does ChatGPT Shopping only apply to giants like Target or Sephora?',
        a: 'They were first, but ACP is an open standard. A smaller store with clean data and complete attributes can be significantly more visible in a niche category than a large player with a chaotic catalog.',
      },
      {
        q: 'Is good Google SEO enough to appear in ChatGPT results?',
        a: 'Classic SEO optimizes for clicks. AI search optimizes for presence in the answer. The overlap is large (both love Schema.org, speed, and quality content), but it is not 100%. You need both.',
      },
      {
        q: 'Will ChatGPT make up or confuse my product information?',
        a: 'It can happen, which is why correct Schema.org markup is critical. ChatGPT Shopping reads product pages directly via structured data — the cleaner the feed, the lower the chance of hallucination.',
      },
    ],
    sk: [
      {
        q: 'Musím platiť OpenAI, aby sa moje produkty zobrazili v ChatGPT Shopping?',
        a: 'Nie. Výsledky sú organické. OpenAI zatiaľ nepredáva platené umiestnenia v Shopping výsledkoch. Tento prístup je explicitne potvrdený v dokumentácii Agentic Commerce Protocol.',
      },
      {
        q: 'Týka sa ChatGPT Shopping len veľkých hráčov ako Target alebo Sephora?',
        a: 'Tí boli prví, ale ACP je otvorený štandard. Menší e-shop s čistými dátami a úplnými atribútmi môže byť v niche kategórii výrazne viditeľnejší než veľký hráč s chaotickým katalógom.',
      },
      {
        q: 'Stačí mi dobré SEO na Google, aby som sa objavil v ChatGPT?',
        a: 'Klasické SEO optimalizuje pre kliknutie. AI-vyhľadávanie optimalizuje pre prítomnosť v odpovedi. Prekryv je veľký (obidva milujú Schema.org, rýchlosť a kvalitný obsah), ale nie 100 %. Potrebujete oboje.',
      },
      {
        q: 'Môže si ChatGPT produkt vymyslieť alebo zmýliť?',
        a: 'Áno, môže. Preto je kľúčové mať správne Schema.org — ChatGPT Shopping číta produktové stránky priamo cez štruktúrované dáta. Čím čistejší feed, tým menšia šanca na halucináciu.',
      },
    ],
    de: [
      {
        q: 'Muss ich OpenAI bezahlen, damit meine Produkte in ChatGPT Shopping erscheinen?',
        a: 'Nein. Die Ergebnisse sind organisch. OpenAI verkauft derzeit keine bezahlten Platzierungen in den Shopping-Ergebnissen. Das ist in der Dokumentation des Agentic Commerce Protocol explizit bestätigt.',
      },
      {
        q: 'Ist ChatGPT Shopping nur für Giganten wie Target oder Sephora relevant?',
        a: 'Diese waren zuerst dran, aber ACP ist ein offener Standard. Ein kleinerer Shop mit sauberen Daten und vollständigen Attributen kann in einer Nische deutlich sichtbarer sein als ein Großer mit chaotischem Katalog.',
      },
      {
        q: 'Reicht gutes Google-SEO, um in ChatGPT-Ergebnissen zu erscheinen?',
        a: 'Klassisches SEO optimiert für Klicks. KI-Suche optimiert für die Präsenz in der Antwort. Die Überschneidung ist groß (beide lieben Schema.org, Geschwindigkeit, Qualitätsinhalt), aber nicht 100 %. Sie brauchen beides.',
      },
      {
        q: 'Kann ChatGPT mein Produkt erfinden oder verwechseln?',
        a: 'Ja, das kann passieren. Deshalb ist korrektes Schema.org entscheidend — ChatGPT Shopping liest Produktseiten direkt über strukturierte Daten. Je sauberer der Feed, desto geringer die Halluzinationsgefahr.',
      },
    ],
    ru: [
      {
        q: 'Нужно ли платить OpenAI, чтобы мои товары появились в ChatGPT Shopping?',
        a: 'Нет. Результаты органические. OpenAI пока не продаёт платные размещения в Shopping-результатах. Это прямо подтверждено в документации Agentic Commerce Protocol.',
      },
      {
        q: 'Это касается только гигантов вроде Target или Sephora?',
        a: 'Они были первыми, но ACP — открытый стандарт. Небольшой магазин с чистыми данными и полными атрибутами может быть в нишевой категории заметно виднее крупного игрока с хаотичным каталогом.',
      },
      {
        q: 'Достаточно ли хорошего SEO в Google, чтобы попасть в ChatGPT?',
        a: 'Классическое SEO оптимизирует под клик. AI-поиск оптимизирует под присутствие в ответе. Пересечение большое (оба любят Schema.org, скорость, качественный контент), но не 100%. Нужны оба.',
      },
      {
        q: 'Может ли ChatGPT выдумать или перепутать мой товар?',
        a: 'Да, такое бывает. Именно поэтому важен корректный Schema.org — ChatGPT Shopping читает карточки товаров напрямую через структурированные данные. Чем чище фид, тем меньше шанс галлюцинации.',
      },
    ],
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
      "@id": `https://www.vlad-weby.sk${blogUrl(slug, l)}`,
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

  const faqEntries = BLOG_FAQ[slug]?.[l] || BLOG_FAQ[slug]?.en;
  const faqSchema = faqEntries && {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqEntries.map((entry) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import {
  Calendar3,
  Clock,
  Person,
  ArrowRight,
  Cart4,
  Robot,
  Search,
  GraphUpArrow,
  ChatDots,
  CheckCircleFill,
  XCircleFill,
  Stars,
  People,
  CpuFill,
  CodeSlash,
  Tags,
  Speedometer2,
  ListCheck,
  RocketTakeoff,
  ShieldCheck,
  QuestionCircleFill,
} from "react-bootstrap-icons";
import { blogUrl, serviceUrl } from "@/lib/localizedPaths";

const LOCALE = "sk";

const howItWorks = [
  {
    icon: ChatDots,
    title: "Spresní požiadavku",
    text: "ChatGPT sa doptá konverzačne (koľko m², sú doma zvieratá, ako často vysávate), aby zúžil výber.",
  },
  {
    icon: Search,
    title: "Prehľadá web",
    text: "Dôraz kladie na dôveryhodné e-shopy a výrobcov — nie na stránky, ktoré len preposielajú cudzie produkty.",
  },
  {
    icon: Cart4,
    title: "Vráti vizuálne porovnanie",
    text: "3–8 produktov s cenami, recenziami, kľúčovými vlastnosťami a odkazmi priamo na predajcov.",
  },
];

const whyItMatters = [
  {
    icon: People,
    title: "Objem",
    text: "ChatGPT používa viac ako 700 miliónov ľudí týždenne. V USA vzrástol AI traffic na retailové weby o stovky percent. Na Slovensku prichádza táto vlna s 6–12 mesačným oneskorením.",
  },
  {
    icon: ShieldCheck,
    title: "Nízka konkurencia",
    text: "Slovenské e-shopy sú v AI-vyhľadávaní prakticky neviditeľné. Kto dnes nasadí Schema.org a čisté popisy, môže byť vo výsledkoch skôr, než si konkurencia uvedomí, že to existuje.",
  },
  {
    icon: Stars,
    title: "Nové pravidlá",
    text: "Klasické SEO optimalizuje pre kliknutie z Googlu. AI-vyhľadávanie optimalizuje pre citáciu v odpovedi. Iné priority, iný náskok pre tých, ktorí to pochopia prví.",
  },
];

const acpPaths = [
  {
    title: "Cez Shopify",
    text: "Ak beží váš e-shop na Shopify, produkty sa cez Shopify Catalog integrujú do ChatGPT automaticky. Najjednoduchšia cesta.",
  },
  {
    title: "Cez Stripe",
    text: "Ak už používate Stripe platby, Stripe ponúka ACP integráciu ako rozšírenie.",
  },
  {
    title: "Vlastná implementácia",
    text: "Pre WooCommerce, PrestaShop, Magento alebo custom platformy — napojenie na ACP endpointy cez API.",
  },
];

const checklist = [
  {
    icon: CodeSlash,
    title: "Štruktúrované dáta Schema.org",
    text: "Minimum: Product, Offer, AggregateRating, Review. Bez nich AI systémy spoliehajú na scraping HTML, ktorý je nespoľahlivý.",
  },
  {
    icon: Tags,
    title: "Úplné a konzistentné atribúty",
    text: "Rozmer, hmotnosť, materiál, kompatibilita, napájanie, krajina pôvodu, záruka. Produkt s 20 atribútmi má náskok pred produktom s tromi riadkami popisu.",
  },
  {
    icon: Stars,
    title: "Recenzie mimo vášho webu",
    text: "68 % citácií v AI odpovediach pochádza z tretích strán. Google Reviews, Heureka.sk, Emag — viac ako vaše vlastné produktové texty.",
  },
  {
    icon: Speedometer2,
    title: "Rýchly a čistý web",
    text: "ChatGPT overuje informácie priamo na webe. Pomalý web s popupmi a zlomenými meta tagmi = AI preferuje iný zdroj.",
  },
  {
    icon: Robot,
    title: "Popisy pre ľudí, nie kľúčové slová",
    text: "AI rozumie prirodzenému jazyku. Popis zameraný na použitie a scenáre funguje lepšie než popis plný keywords.",
  },
  {
    icon: GraphUpArrow,
    title: "Sledujte AI traffic v GA4",
    text: "Vytvorte kanál „AI Referral“ pre chatgpt.com, openai.com, perplexity.ai, claude.ai, gemini.google.com — inak sa skryjú pod Direct.",
  },
];

const stats = [
  { metric: "Týždenní používatelia ChatGPT", value: "700+ mil." },
  { metric: "Rast AI trafficu na retail weby v USA (2025)", value: "+693 %" },
  { metric: "AI citácií z tretích strán", value: "68 %" },
  { metric: "Značky sledujúce AI viditeľnosť", value: "16 %" },
  { metric: "Walmart: pokles konverzie Instant Checkout vs web", value: "3× nižšia" },
];

const myths = [
  {
    q: "„Musím platiť OpenAI, aby sa moje produkty zobrazili.“",
    a: "Nie. Výsledky sú organické. OpenAI zatiaľ nepredáva platené umiestnenia v Shopping výsledkoch. Tento prístup je explicitne potvrdený v dokumentácii Agentic Commerce Protocol.",
  },
  {
    q: "„Toto sa týka len obrovských hráčov ako Target alebo Sephora.“",
    a: "Tí boli prví, ale ACP je otvorený štandard. Menší e-shop s dobrými dátami môže byť v niche kategórii výrazne viditeľnejší než veľký hráč s chaotickým katalógom.",
  },
  {
    q: "„Stačí mi dobré SEO na Google.“",
    a: "Klasické SEO optimalizuje pre kliknutie. AI-vyhľadávanie optimalizuje pre prítomnosť v odpovedi. Prekryv je veľký (obidva milujú Schema.org, rýchlosť a kvalitný obsah), ale nie 100 %. Potrebujete oboje.",
  },
  {
    q: "„AI si produkt vymyslí alebo zmýli.“",
    a: "Stáva sa. Preto je kľúčové mať správne Schema.org — ChatGPT Shopping Research číta produktové stránky priamo cez štruktúrované dáta. Čím čistejší feed, tým menšia šanca na halucináciu.",
  },
];

const weeks = [
  {
    icon: ListCheck,
    step: "1. týždeň",
    title: "Audit produktového katalógu",
    text: "Schema.org Product + Offer na všetkých produktoch. Prázdne atribúty. Kvalita obrázkov (min. 1200×1200 px, bez vodoznakov).",
  },
  {
    icon: CpuFill,
    step: "2. týždeň",
    title: "Technické základy",
    text: "Core Web Vitals (LCP pod 2.5 s, CLS 0.1, INP 200 ms). Funkčný sitemap.xml a robots.txt. llms.txt v roote.",
  },
  {
    icon: Stars,
    step: "3. týždeň",
    title: "Recenzie a dôveryhodnosť",
    text: "E-mail 7 dní po doručení s prosbou o hodnotenie. Registrácia na Heureka.sk, Google Reviews. Odpovede na existujúce recenzie.",
  },
  {
    icon: RocketTakeoff,
    step: "4. týždeň",
    title: "Integrácia a meranie",
    text: "Shopify Catalog alebo ACP konektor pre vašu platformu. AI Referral kanál v GA4. Po mesiaci sledujte traffic z chatgpt.com.",
  },
];

const worthNow = [
  "E-shopy s 50+ SKU v zaujímavých kategóriách (elektronika, móda, domácnosť, šport, beauty)",
  "Značky s vlastnými produktmi, ktoré sa chcú odlíšiť od preposielačov",
  "Obchody, kde sú produkty technicky popísateľné s jasnými atribútmi",
];

const canWait = [
  "Veľmi malé obchody s pár produktmi bez základného SEO — najprv základy",
  "Služby a nehmotné ponuky — ChatGPT Shopping je zatiaľ o fyzických produktoch",
  "Úzko lokálne obchody bez online predaja",
];

const ChatgptShoppingArticle = () => {
  const serviceHref = serviceUrl("chatgpt-shopping", LOCALE);
  const seoHref = blogUrl("improve-website-seo", LOCALE);
  const chatbotHref = blogUrl("ai-chatbot-for-business", LOCALE);
  const costHref = blogUrl("website-cost-2025", LOCALE);

  return (
    <article className="container max-w-[800px] pb_120">
      {/* Header */}
      <div className="mb-12" data-aos="fade-up" data-aos-duration="800">
        <div className="flex flex-wrap items-center gap-4 text-sm text-clr_pra mb-6">
          <span className="inline-flex items-center gap-1.5">
            <Calendar3 className="text-xs" />
            21. apríla 2026
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="text-xs" />
            9 min čítania
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Person className="text-xs" />
            Vladislav Khvorov
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6 leading-tight">
          ChatGPT Shopping pre e-shopy &mdash; ako sa dostať do{" "}
          <span className="text-clr_base">výsledkov ChatGPT</span> v roku 2026
        </h1>

        <p className="text-lg text-clr_pra leading-relaxed">
          V marci 2026 OpenAI predstavil novú generáciu nakupovania v ChatGPT.
          Používatelia už nemusia prepínať medzi desiatkami kariet &mdash;
          ChatGPT im vráti vizuálne porovnanie produktov s cenou, recenziami a
          detailmi. Pre e-shopy je to nová kategória organického trafficu. Tento
          článok vysvetľuje, ako sa do ChatGPT Shopping dostať a prečo má zmysel
          začať teraz, nie o pol roka.
        </p>
      </div>

      {/* What is ChatGPT Shopping */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-6">
          Čo je ChatGPT Shopping
        </h2>
        <p className="text-clr_pra leading-relaxed mb-6">
          ChatGPT Shopping nie je reklamná platforma. Je to vyhľadávacia a
          porovnávacia vrstva vo vnútri ChatGPT, ktorá zobrazuje produkty{" "}
          <strong className="text-white">organicky</strong> &mdash; bez platených
          umiestnení. Keď používateľ napíše napríklad „potrebujem tichý
          bezdrôtový vysávač do malého bytu do 300 €“, ChatGPT urobí tri veci:
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {howItWorks.map((item) => (
            <div key={item.title} className="bg-[rgb(30,30,30)] rounded-xl p-6">
              <span className="w-12 h-12 bg-clr_base/10 rounded-xl flex items-center justify-center mb-4">
                <item.icon className="text-clr_base text-xl" />
              </span>
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-clr_pra leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-6">
          <p className="text-clr_pra leading-relaxed">
            OpenAI v marci 2026 priznal, že ich pôvodný pokus integrovať samotnú
            platbu do ChatGPT (<em>Instant Checkout</em>) nedopadol &mdash;
            Walmart nameral, že konverzia vo vnútri ChatGPT bola{" "}
            <strong className="text-white">3× nižšia</strong> než na vlastnom
            webe. Preto OpenAI zmenil smer: ChatGPT robí{" "}
            <strong className="text-white">objavovanie a porovnávanie</strong>,
            kliknutie a platba sa deje na webe e-shopu. Dobrá správa &mdash;
            ChatGPT posiela predajcovi kvalifikovaný traffic, nie transakciu s
            nízkou maržou.
          </p>
        </div>
      </section>

      {/* Why it matters */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">
          Prečo sa to týka aj malých slovenských e-shopov
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {whyItMatters.map((item) => (
            <div
              key={item.title}
              className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-6"
            >
              <span className="w-10 h-10 bg-clr_base/10 rounded-xl flex items-center justify-center mb-4">
                <item.icon className="text-clr_base" />
              </span>
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-clr_pra leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ACP */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-6">
          Ako to funguje technicky &mdash; Agentic Commerce Protocol (ACP)
        </h2>
        <p className="text-clr_pra leading-relaxed mb-6">
          ACP je otvorený štandard, ktorý OpenAI vyvíja spolu so Stripe. Je to
          rozhranie medzi e-shopom a AI agentom. Namiesto toho, aby ChatGPT
          prelezal vašu stránku ako používateľ, dostane štruktúrované dáta
          priamo cez ACP: kompletný produktový feed, aktuálne promoakcie,
          dostupnosť a atribúty.
        </p>
        <div className="bg-[rgb(30,30,30)] rounded-xl p-6 mb-6">
          <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
            <ShieldCheck className="text-clr_base" />
            ACP nezaberá váš checkout
          </h3>
          <p className="text-sm text-clr_pra leading-relaxed">
            Objednávka, platba, logistika a zákaznícke dáta ostávajú vo vašom
            systéme. ACP je len vrstva, ktorá zabezpečuje, aby ChatGPT videl
            vaše produkty rovnako detailne a aktuálne, ako ich vidí návštevník.
          </p>
        </div>
        <h3 className="text-xl text-white font-semibold mb-4">
          Tri cesty ako sa dostať k ACP
        </h3>
        <div className="space-y-3">
          {acpPaths.map((path, i) => (
            <div
              key={path.title}
              className="bg-[rgb(30,30,30)] rounded-xl p-5 flex items-start gap-4"
            >
              <span className="w-10 h-10 bg-clr_base/10 rounded-xl flex items-center justify-center shrink-0 font-bold text-clr_base">
                {i + 1}
              </span>
              <div>
                <h4 className="font-semibold text-white mb-1">{path.title}</h4>
                <p className="text-sm text-clr_pra leading-relaxed">
                  {path.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Checklist */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-6">
          Čo musí e-shop urobiť, aby sa objavil
        </h2>
        <p className="text-clr_pra mb-6 leading-relaxed">
          Aj bez formálnej ACP integrácie existuje základná úroveň optimalizácie,
          ktorá zvyšuje pravdepodobnosť, že ChatGPT nájde vaše produkty. Tieto
          kroky dávajú zmysel pre každý e-shop, bez ohľadu na veľkosť.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {checklist.map((item) => (
            <div key={item.title} className="bg-[rgb(30,30,30)] rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="w-12 h-12 bg-clr_base/10 rounded-xl flex items-center justify-center shrink-0">
                  <item.icon className="text-clr_base text-xl" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-clr_pra leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats table */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-6">
          Čo hovoria reálne dáta
        </h2>
        <p className="text-clr_pra mb-6 leading-relaxed">
          Zdroje: OpenAI, Erlin, Walmart, Stripe &mdash; 2026.
        </p>
        <div className="bg-[rgb(30,30,30)] rounded-xl overflow-hidden">
          {stats.map((row, i) => (
            <div
              key={row.metric}
              className={`flex items-center justify-between gap-4 p-5 ${
                i !== stats.length - 1 ? "border-b border-[rgb(45,45,45)]" : ""
              }`}
            >
              <span className="text-sm md:text-base text-clr_pra">
                {row.metric}
              </span>
              <span className="text-lg font-bold text-clr_base shrink-0">
                {row.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Myths (FAQ) */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-6">
          Bežné mýty
        </h2>
        <div className="space-y-4">
          {myths.map((myth) => (
            <div key={myth.q} className="bg-[rgb(30,30,30)] rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 bg-red-500/10 rounded-xl flex items-center justify-center shrink-0">
                  <QuestionCircleFill className="text-red-500 text-xl" />
                </span>
                <div>
                  <h3 className="font-semibold text-white mb-2">{myth.q}</h3>
                  <p className="text-sm text-clr_pra leading-relaxed">
                    {myth.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Step by step */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-6">
          Krok za krokom &mdash; ako začať
        </h2>
        <div className="space-y-4">
          {weeks.map((w) => (
            <div
              key={w.step}
              className="bg-[rgb(30,30,30)] rounded-xl p-6 flex items-start gap-4"
            >
              <span className="w-12 h-12 bg-clr_base/10 rounded-xl flex items-center justify-center shrink-0">
                <w.icon className="text-clr_base text-xl" />
              </span>
              <div>
                <span className="text-xs font-medium text-clr_base uppercase tracking-wide">
                  {w.step}
                </span>
                <h3 className="text-lg font-semibold text-white mb-1 mt-1">
                  {w.title}
                </h3>
                <p className="text-sm text-clr_pra leading-relaxed">{w.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* When it makes sense */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <div className="bg-[rgb(30,30,30)] rounded-2xl p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
            Kedy sa to oplatí a kedy ešte nie
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-clr_base">
                <CheckCircleFill />
                Oplatí sa teraz
              </h3>
              <ul className="space-y-3">
                {worthNow.map((t) => (
                  <li
                    key={t}
                    className="flex items-start gap-3 text-clr_pra text-sm"
                  >
                    <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-red-500">
                <XCircleFill />
                Ešte počkať môžete
              </h3>
              <ul className="space-y-3">
                {canWait.map((t) => (
                  <li
                    key={t}
                    className="flex items-start gap-3 text-clr_pra text-sm"
                  >
                    <XCircleFill className="text-red-500 shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Zhrnutie
        </h2>
        <p className="text-clr_pra leading-relaxed mb-4">
          ChatGPT Shopping nie je nadstavba SEO. Je to nová distribučná vrstva,
          kde o viditeľnosti rozhodujú{" "}
          <strong className="text-white">
            čisté dáta, úplné atribúty, recenzie z tretích strán a rýchly web
          </strong>
          . Kto tieto základy urobí v roku 2026, získa výhodu, ktorá sa bude
          ťažko dobiehať v roku 2027.
        </p>
        <p className="text-clr_pra leading-relaxed">
          Pre väčšinu slovenských e-shopov je dnes správny krok audit produktových
          dát a štruktúry, nie čakanie na dokonalú ACP integráciu. Základy sa
          dajú urobiť za mesiac.
        </p>
      </section>

      {/* CTA */}
      <section
        className="text-center mb-12"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Potrebujete pomoc s ChatGPT Shopping integráciou?
        </h2>
        <p className="text-clr_pra mb-8 max-w-xl mx-auto">
          Napíšte mi. Urobím audit vášho produktového katalógu, Schema.org
          štruktúry a odporučím najrýchlejšiu cestu k viditeľnosti v ChatGPT.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={serviceHref}
            className="inline-flex items-center gap-2 px-8 py-4 bg-clr_base text-clr_title rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Chcem ChatGPT Shopping audit
            <ArrowRight />
          </Link>
          <Link
            href="/all-blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[rgb(30,30,30)] text-white rounded-full font-medium hover:bg-[rgb(40,40,40)] transition-colors"
          >
            Všetky články
            <Cart4 />
          </Link>
        </div>
      </section>

      {/* Related articles */}
      <section data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-xl text-white font-semibold mb-4">
          Súvisiace články
        </h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link
            href={seoHref}
            className="bg-[rgb(30,30,30)] rounded-xl p-5 hover:bg-[rgb(40,40,40)] transition-colors"
          >
            <span className="text-xs text-clr_base uppercase tracking-wide">
              SEO
            </span>
            <p className="text-white font-medium mt-2">
              Ako zlepšiť SEO vašej stránky
            </p>
          </Link>
          <Link
            href={chatbotHref}
            className="bg-[rgb(30,30,30)] rounded-xl p-5 hover:bg-[rgb(40,40,40)] transition-colors"
          >
            <span className="text-xs text-clr_base uppercase tracking-wide">
              AI
            </span>
            <p className="text-white font-medium mt-2">AI chatbot pre firmy</p>
          </Link>
          <Link
            href={costHref}
            className="bg-[rgb(30,30,30)] rounded-xl p-5 hover:bg-[rgb(40,40,40)] transition-colors"
          >
            <span className="text-xs text-clr_base uppercase tracking-wide">
              Ceny
            </span>
            <p className="text-white font-medium mt-2">
              Koľko stojí web stránka v roku 2026
            </p>
          </Link>
        </div>
      </section>
    </article>
  );
};

export default ChatgptShoppingArticle;

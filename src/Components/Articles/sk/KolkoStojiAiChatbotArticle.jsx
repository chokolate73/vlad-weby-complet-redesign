"use client";

import React from "react";
import Link from "next/link";
import {
  Calendar3,
  Clock,
  Person,
  ArrowRight,
  CheckCircleFill,
  XCircleFill,
  CurrencyEuro,
  Briefcase,
  Shop,
  Robot,
  Wrench,
  ChatDots,
  CashStack,
  GraphUpArrow,
  ListCheck,
  ShieldCheck,
  ExclamationTriangleFill,
  QuestionCircleFill,
} from "react-bootstrap-icons";
import { serviceUrl } from "@/lib/localizedPaths";

const LOCALE = "sk";

const scenarios = [
  {
    icon: Briefcase,
    tier: "Scenár 1",
    name: "Základný chatbot pre malú firmu",
    price: "300 €",
    monthly: "30–40 €/mes",
    audience:
      "Lokálne kaderníctvo, malá ordinácia, autoservis, kvetinárstvo. 1–2 ľudia, 5–15 zákazníckych dopytov denne.",
    includes: [
      "Webový chat widget na vašej stránke",
      "Knowledge base s 20–30 najčastejšími otázkami (otváracie hodiny, kontakt, základný cenník, lokalita)",
      "GPT-4o-mini (rýchly model, ktorý pre základné otázky stačí)",
      "Konfigurácia tone-of-voice podľa vašej firmy",
      "Testovanie a 2 týždne dolaďovania",
      "Kompletné odovzdanie systému — chatbot je váš",
    ],
    excludes:
      "Bez Instagram DM / WhatsApp / rezervačného systému / multi-jazyčnosti. Tieto sú v scenári 2 a 3.",
    monthlyDetail:
      "API náklady (OpenAI) plus základná údržba — jedna mesačná aktualizácia obsahu.",
  },
  {
    icon: Shop,
    tier: "Scenár 2",
    name: "Stredný chatbot s integráciami",
    price: "400 €",
    monthly: "40–50 €/mes",
    audience:
      "Wellness štúdio, väčšia ordinácia, reštaurácia s rezerváciami, kozmetický salón s 5+ službami. Toto je úroveň projektu Beauty in Perfection v Nemecku.",
    includes: [
      "Webový widget plus 1 ďalší kanál (Instagram DM alebo WhatsApp alebo Messenger)",
      "Rozšírená knowledge base: plný cenník, popisy služieb, kontraindikácie, podmienky storna, procesné scenáre",
      "Navrhovanie termínov / presmerovanie na rezervačný systém",
      "GPT-4o-mini s pokročilou konfiguráciou",
      "Fallback na človeka pri zložitých otázkach",
      "2–4 týždne dolaďovania po nasadení",
    ],
    excludes:
      "Najčastejšie objednávaný balík — približne 40–50 % mojich projektov spadá do tejto kategórie.",
    monthlyDetail:
      "API náklady plus údržba (aktualizácia obsahu, oprava chýb, mesačný report).",
    highlight: true,
  },
  {
    icon: Robot,
    tier: "Scenár 3",
    name: "Pokročilý chatbot s viacerými integráciami",
    price: "600 €",
    monthly: "40–60 €/mes",
    audience:
      "E-shop so 100+ produktmi, väčšia firma s viacerými službami, biznis fungujúci v 2+ jazykoch (napr. SK + EN pre zahraničných klientov, alebo SK + DE pre rakúsky / nemecký trh).",
    includes: [
      "Webový widget plus 2–3 ďalšie kanály (Instagram, WhatsApp, Messenger podľa potreby)",
      "Integrácia s e-shopom (prístup k produktom, dostupnosti, cenám)",
      "Multi-jazyčnosť — chatbot rozpozná jazyk zákazníka a odpovedá v ňom",
      "Pokročilý fallback s presmerovaním na konkrétnych ľudí podľa typu otázky",
      "GPT-4o-mini ako default plus možnosť GPT-4 pre zložitejšie konverzácie",
      "4 týždne dolaďovania",
    ],
    excludes:
      "Pre koho to NIE je: ak máte jednoduchú lokálnu službu, scenár 1 alebo 2 sedí lepšie. Toto je pre firmy s objemom (200+ konverzácií mesačne) alebo s komplexným produktom.",
    monthlyDetail:
      "API náklady plus rozšírená údržba (synchronizácia s e-shopom, A/B testovanie odpovedí, štvrťročný report).",
  },
];

const monthlyBreakdown = [
  {
    icon: CashStack,
    title: "API náklady (OpenAI alebo iný poskytovateľ)",
    range: "5–25 €/mes",
    detail:
      "Pri GPT-4o-mini a malej firme (50–200 konverzácií mesačne) sa to typicky drží pod 15 €. Pri väčšom objeme rastie lineárne — platíte len za to, čo chatbot reálne odpracuje.",
  },
  {
    icon: Wrench,
    title: "Údržba a podpora",
    range: "25–35 €/mes",
    detail:
      "Aktualizácia cenníka, pridávanie nových služieb, oprava chybných odpovedí (vždy sa nejaké nájdu v prvých 4–8 týždňoch) a mesačný stručný report (počet konverzácií, najčastejšie otázky, % vyriešených bez človeka).",
  },
];

const noFitSignals = [
  "Dostávate menej ako 5–10 zákazníckych správ denne — objem investíciu nezaplatí.",
  "Vaše konverzácie sú unikátne a vyžadujú individuálny prístup (právne poradenstvo, B2B sales).",
  "Vaši zákazníci preferujú telefón a nepoužívajú písomnú komunikáciu.",
  "Nemáte štruktúrovaný cenník alebo katalóg služieb — chatbot potrebuje vedomosti, nie len osobnosť.",
];

const orderSteps = [
  {
    icon: ChatDots,
    step: "1",
    title: "15-minútová konzultácia zdarma",
    text: "Pozriem sa na váš biznis, opýtam sa na 5–7 vecí (počet dopytov, typy služieb, kanály) a poviem, ktorý scenár (300 / 400 / 600 €) vám sedí. Alebo úprimne poviem, že chatbot pre vás teraz nemá zmysel.",
  },
  {
    icon: ListCheck,
    step: "2",
    title: "Detailná ponuka do 2 pracovných dní",
    text: "Dostanete cenovú ponuku s presným rozpisom — čo je v nej, v akom čase a čo nie je súčasťou.",
  },
  {
    icon: GraphUpArrow,
    step: "3",
    title: "Realizácia za 2–4 týždne",
    text: "Väčšina projektov beží od podpisu po nasadenie 2 až 4 týždne. Prvé 2 týždne po spustení doladíme odpovede na základe reálnych konverzácií.",
  },
];

const faqs = [
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

const KolkoStojiAiChatbotArticle = () => {
  return (
    <article className="container max-w-[800px] pb_120">
      {/* Article header */}
      <div className="mb-12" data-aos="fade-up" data-aos-duration="800">
        <div className="flex flex-wrap items-center gap-4 text-sm text-clr_pra mb-6">
          <span className="inline-flex items-center gap-1.5">
            <Calendar3 className="text-xs" />
            26. apríla 2026
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="text-xs" />
            8 min čítania
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Person className="text-xs" />
            Vladislav Khvorov
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6 leading-tight">
          Koľko stojí AI chatbot pre firmu na{" "}
          <span className="text-clr_base">Slovensku v roku 2026</span>
        </h1>

        <p className="text-lg text-clr_pra leading-relaxed mb-4">
          AI chatbot pre slovenskú firmu stojí jednorazovo{" "}
          <strong className="text-white">300 až 600 €</strong> plus{" "}
          <strong className="text-white">30 až 50 € mesačne</strong> za prevádzku.
          Žiadne „od 400 €“ so skrytým stropom. Žiadne „kontaktujte nás pre
          cenu“. Tri konkrétne scenáre s tromi konkrétnymi číslami sú nižšie.
        </p>
        <p className="text-clr_pra leading-relaxed">
          Tento článok rozoberie, čo dostanete za 300 €, čo za 400 € a čo za
          600 €, čo platíte mesačne, a kedy AI chatbot{" "}
          <strong className="text-white">nemá</strong> zmysel — bez ohľadu na
          cenu.
        </p>
      </div>

      {/* ------------------------------------------------------------ */}
      {/*  1. Why other pricelists don't make sense                    */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Prečo bežné cenníky nedávajú zmysel
        </h2>
        <p className="text-clr_pra mb-6 leading-relaxed">
          Skúste si na slovenskom internete nájsť konkrétnu cenu za AI chatbot.
          Trvalo mi 30 minút výskumu, kým som mal jasný obraz — a aj tak väčšina
          otázok zostala nezodpovedaných. Cenníky tu fungujú v troch režimoch:
        </p>

        <div className="space-y-4">
          {[
            {
              title: '„Od 399 €“ alebo „od 400 €“',
              text: "Spodný okraj poznáte, horný strop nie. Je to 800 €? 3 000 €? 10 000 €? Záleží na tom, ako vážne to potrebujete a koľko ste ochotní zaplatiť.",
            },
            {
              title: "Subscription model",
              text: "Mesačný poplatok znie lákavo, ale dostanete šablónu, ktorá ten istý motor delí medzi desiatky klientov naraz. Detaily v sekcii nižšie.",
            },
            {
              title: "„Kontaktujte nás pre individuálnu ponuku“",
              text: "Cena vôbec nie je zverejnená. V praxi to znamená „cenu vám povieme na základe toho, ako vážne to potrebujete.“",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-[rgb(30,30,30)] rounded-xl p-6"
            >
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 bg-red-500/10 rounded-xl flex items-center justify-center shrink-0">
                  <XCircleFill className="text-red-500" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-clr_pra leading-relaxed">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-6 mt-6">
          <p className="text-clr_pra leading-relaxed">
            Tento článok robí opak. <strong className="text-white">Tri scenáre, tri konkrétne sumy, plné vlastníctvo systému.</strong>{" "}
            Po prečítaní budete vedieť, do akého rozpočtu spadáte — alebo zistíte,
            že chatbot pre vás teraz nedáva zmysel.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  2. Three scenarios                                          */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">
          Tri scenáre s konkrétnymi cenami
        </h2>

        <div className="space-y-6">
          {scenarios.map((s) => (
            <div
              key={s.tier}
              className={`rounded-2xl p-6 md:p-8 ${
                s.highlight
                  ? "bg-clr_base/5 border-2 border-clr_base/30"
                  : "bg-[rgb(30,30,30)] border border-white/5"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                <div className="flex items-start gap-4">
                  <span className="w-12 h-12 bg-clr_base/10 rounded-xl flex items-center justify-center shrink-0">
                    <s.icon className="text-clr_base text-xl" />
                  </span>
                  <div>
                    <span className="text-xs font-medium text-clr_base uppercase tracking-wide">
                      {s.tier}
                    </span>
                    <h3 className="text-xl text-white font-bold mt-1">
                      {s.name}
                    </h3>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-3xl font-bold text-clr_base">
                    {s.price}
                  </div>
                  <div className="text-sm text-clr_pra">{s.monthly}</div>
                </div>
              </div>

              <p className="text-clr_pra leading-relaxed mb-5">
                <strong className="text-white">Pre koho:</strong> {s.audience}
              </p>

              <div className="mb-5">
                <span className="text-xs font-medium text-clr_base uppercase tracking-wide block mb-3">
                  Čo dostanete za {s.price}
                </span>
                <ul className="space-y-2">
                  {s.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-clr_pra"
                    >
                      <CheckCircleFill className="text-clr_base shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[rgb(20,20,20)] rounded-xl p-4 mb-3">
                <span className="text-xs font-medium text-clr_pra uppercase tracking-wide block mb-1">
                  Mesačne {s.monthly}
                </span>
                <p className="text-sm text-clr_pra leading-relaxed">
                  {s.monthlyDetail}
                </p>
              </div>

              <p className="text-sm text-clr_pra/80 italic leading-relaxed">
                {s.excludes}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  3. Why not subscription                                     */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Prečo nie subscription model
        </h2>
        <p className="text-clr_pra mb-6 leading-relaxed">
          Subscription chatbot neponúka dobrý výsledok z jedného konkrétneho
          dôvodu — dostávate šablónu, nie chatbot pre vašu firmu. Ja to robím
          opačne: každý projekt je postavený presne pre konkrétny biznis,
          jeho služby, jeho zákazníkov a jeho procesy.
        </p>
        <p className="text-clr_pra mb-6 leading-relaxed">
          Aby subscription služba ekonomicky fungovala, jeden motor musí
          obsluhovať desiatky až stovky klientov naraz. Konfigurácia je
          preto plytká: vyplníte názov firmy, otváracie hodiny, pár otázok —
          a tým sa nastavenie končí. Pri prvej netriviálnej konverzácii to
          zákazník zistí.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-[rgb(30,30,30)] rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <XCircleFill className="text-red-500" />
              Subscription šablóna
            </h3>
            <ul className="space-y-2 text-sm text-clr_pra">
              <li>Jeden motor delený medzi desiatky klientov, univerzálna logika.</li>
              <li>Knowledge base je len to, čo vyplníte do formulára.</li>
              <li>Bez integrácií so systémami, ktoré reálne používate.</li>
              <li>Tone-of-voice a procesy nie sú prispôsobené vašej firme.</li>
              <li>Bez optimalizácie odpovedí na základe reálnych konverzácií.</li>
            </ul>
          </div>
          <div className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <CheckCircleFill className="text-clr_base" />
              Build pre vašu firmu
            </h3>
            <ul className="space-y-2 text-sm text-clr_pra">
              <li>Knowledge base napísaná ručne podľa vášho cenníka, služieb a storno podmienok.</li>
              <li>Tone-of-voice doladený tak, aby chatbot znel ako vy — nie ako šablóna.</li>
              <li>Integrácie s tým, čo už používate (Reservio, Bookio, e-shop, Mailchimp).</li>
              <li>Procesné scenáre podľa toho, ako reálne komunikujete so zákazníkom.</li>
              <li>2 až 4 týždne dolaďovania na základe reálnych konverzácií po spustení.</li>
            </ul>
          </div>
        </div>

        <div className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-6">
          <p className="text-clr_pra leading-relaxed">
            <strong className="text-white">
              Ak chcete chatbot, ktorý reálne odpovedá za vašu firmu, subscription nie je správna cesta.
            </strong>{" "}
            Zákazník po prvých troch konverzáciách spozná, či hovorí so šablónou,
            alebo so systémom, ktorý vašu firmu reálne pozná — a od toho závisí,
            či vám chatbot dôveru buduje, alebo ju láme.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  4. Monthly costs breakdown                                  */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Mesačné náklady — čo presne platíte
        </h2>
        <p className="text-clr_pra mb-6 leading-relaxed">
          Suma 30–50 € mesačne má dve zložky. Toto väčšina cenníkov skrýva, takže
          klient zistí pravdu až po podpise.
        </p>

        <div className="space-y-4 mb-6">
          {monthlyBreakdown.map((item) => (
            <div
              key={item.title}
              className="bg-[rgb(30,30,30)] rounded-xl p-6"
            >
              <div className="flex items-start gap-4">
                <span className="w-12 h-12 bg-clr_base/10 rounded-xl flex items-center justify-center shrink-0">
                  <item.icon className="text-clr_base text-xl" />
                </span>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <span className="text-clr_base font-bold whitespace-nowrap">
                      {item.range}
                    </span>
                  </div>
                  <p className="text-clr_pra leading-relaxed">{item.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <ShieldCheck className="text-clr_base shrink-0 mt-1 text-xl" />
            <p className="text-clr_pra leading-relaxed">
              Bez údržby chatbot rýchlo zastará. Po pol roku odpovedá na neaktuálny
              cenník a klienti to zistia.{" "}
              <strong className="text-white">
                Preto nepredávam chatbota bez mesačnej údržby
              </strong>{" "}
              — inak by ste platili za systém, ktorý postupne prestane fungovať.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  5. ROI                                                       */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Návratnosť: koľko vás stojí, že chatbot ešte nemáte
        </h2>
        <p className="text-clr_pra mb-6 leading-relaxed">
          Pre Beauty in Perfection — nemecké wellness štúdio, ktorému som chatbot
          nasadil — sme to spočítali takto:
        </p>

        <div className="bg-[rgb(30,30,30)] rounded-xl p-6 md:p-8 mb-6">
          <ul className="space-y-3 mb-5">
            <li className="flex items-start gap-3 text-clr_pra">
              <CurrencyEuro className="text-clr_base shrink-0 mt-1" />
              <span>
                Pred chatbotom prichádzalo{" "}
                <strong className="text-white">
                  viac ako 50 dopytov mesačne mimo pracovnej doby
                </strong>{" "}
                (Instagram, WhatsApp, web).
              </span>
            </li>
            <li className="flex items-start gap-3 text-clr_pra">
              <CurrencyEuro className="text-clr_base shrink-0 mt-1" />
              <span>
                Priemerná hodnota služby:{" "}
                <strong className="text-white">~60 €</strong>.
              </span>
            </li>
            <li className="flex items-start gap-3 text-clr_pra">
              <CurrencyEuro className="text-clr_base shrink-0 mt-1" />
              <span>
                Aj pri konzervatívnom predpoklade, že len tretina týchto dopytov by
                sa konvertovala na rezerváciu, ide o{" "}
                <strong className="text-white">
                  ~1 000 € mesačne nezachyteného obratu
                </strong>
                .
              </span>
            </li>
          </ul>
          <div className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-4">
            <p className="text-clr_pra leading-relaxed">
              Pri investícii{" "}
              <strong className="text-white">
                400 € jednorazovo plus 50 € mesačne
              </strong>{" "}
              sa systém zaplatil za prvý mesiac — od druhého mesiaca začal
              generovať čistý prínos.
            </p>
          </div>
        </div>

        <h3 className="text-xl text-white font-semibold mb-3">
          Spočítajte si to pre svoju firmu
        </h3>
        <ol className="space-y-3 mb-4">
          {[
            "Otvorte Instagram inbox a spočítajte správy z posledných 4 týždňov, ktoré dostali odpoveď neskôr ako za 2 hodiny.",
            "Vynásobte priemernou hodnotou klienta.",
            "Vynásobte konzervatívnou konverziou (30–50 %).",
          ].map((step, i) => (
            <li key={step} className="flex items-start gap-3 text-clr_pra">
              <span className="w-6 h-6 bg-clr_base/10 rounded-full flex items-center justify-center shrink-0 text-clr_base text-sm font-semibold">
                {i + 1}
              </span>
              <span className="leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>
        <p className="text-clr_pra leading-relaxed">
          Ak je výsledok vyšší ako 400 € mesačne, chatbot sa vám zaplatí v prvom
          mesiaci. Ak nie, pravdepodobne ešte nemáte dostatočný objem dopytov, aby
          investícia dávala zmysel — a to je úplne v poriadku.
        </p>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  6. When NOT to                                              */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Kedy AI chatbot pre vašu firmu{" "}
          <span className="text-clr_base">nemá</span> zmysel
        </h2>
        <p className="text-clr_pra mb-6 leading-relaxed">
          Filtrácia ide pred predajom. Ak vám sedí čo i len jedno z týchto
          tvrdení, chatbot pre vás teraz pravdepodobne nedáva zmysel:
        </p>

        <div className="bg-[rgb(30,30,30)] rounded-xl p-6 md:p-8 space-y-4">
          {noFitSignals.map((signal) => (
            <div key={signal} className="flex items-start gap-3">
              <ExclamationTriangleFill className="text-yellow-500 shrink-0 mt-1" />
              <p className="text-clr_pra leading-relaxed">{signal}</p>
            </div>
          ))}
        </div>

        <p className="text-clr_pra mt-6 leading-relaxed">
          V týchto prípadoch je investícia 400 € + 50 €/mes premrhaná. Lepšie ju
          vložte do iných nástrojov — telefonického callbacku, formulárového
          systému alebo CRM s pripomienkami. Toto vám otvorene poviem aj na
          bezplatnej konzultácii — nemá zmysel predávať systém, ktorý vám
          neprinesie peniaze.
        </p>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  7. FAQ                                                      */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-6">
          Najčastejšie otázky o cene AI chatbota
        </h2>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[rgb(30,30,30)] rounded-xl p-6">
              <div className="flex items-start gap-3 mb-3">
                <QuestionCircleFill className="text-clr_base shrink-0 mt-1" />
                <h3 className="text-lg font-semibold text-white">{faq.q}</h3>
              </div>
              <p className="text-clr_pra leading-relaxed pl-8">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  8. CTA                                                      */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-6">
          Ako objednať AI chatbot pre svoju firmu
        </h2>

        <div className="space-y-4 mb-8">
          {orderSteps.map((item) => (
            <div
              key={item.step}
              className="bg-[rgb(30,30,30)] rounded-xl p-6 flex items-start gap-4"
            >
              <span className="w-12 h-12 bg-clr_base/10 rounded-xl flex items-center justify-center shrink-0">
                <item.icon className="text-clr_base text-xl" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  <span className="text-clr_base">Krok {item.step}:</span>{" "}
                  {item.title}
                </h3>
                <p className="text-clr_pra leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-clr_base/5 border border-clr_base/10 rounded-2xl p-8 md:p-10 text-center">
          <h3 className="text-2xl text-white font-bold mb-3">
            Pripravený na 15-minútovú konzultáciu zdarma?
          </h3>
          <p className="text-clr_pra mb-8 max-w-xl mx-auto leading-relaxed">
            Poviem vám priamo, ktorý scenár (300 / 400 / 600 €) sedí na vašu
            firmu — alebo úprimne, že chatbot pre vás teraz nemá zmysel.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-clr_base text-clr_title rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Chcem konzultáciu
              <ArrowRight />
            </Link>
            <Link
              href={serviceUrl("ai-chatbot", LOCALE)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[rgb(30,30,30)] text-white rounded-full font-medium hover:bg-[rgb(40,40,40)] transition-colors"
            >
              Detaily služby
              <Robot />
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
};

export default KolkoStojiAiChatbotArticle;

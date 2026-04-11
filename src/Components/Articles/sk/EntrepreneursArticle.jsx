"use client";

import React from "react";
import Link from "next/link";
import {
  AwardFill,
  Search,
  ShieldFill,
  TrophyFill,
  CheckCircleFill,
  XCircleFill,
  FileTextFill,
  CurrencyEuro,
  TelephoneFill,
  StarFill,
  PersonFill,
  GeoAltFill,
  RocketTakeoff,
  LayersFill,
  Robot,
  ArrowRight,
  Clock,
  Calendar3,
  BrushFill,
  CalculatorFill,
  Cake2Fill,
} from "react-bootstrap-icons";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const reasons = [
  {
    icon: AwardFill,
    title: "Profesionálny dojem",
    description:
      "Prvý dojem je všetko. 75 % ľudí posudzuje dôveryhodnosť firmy podľa jej webovej stránky. Profesionálna webová stránka buduje dôveru ešte predtým, než vám zákazník zavolá.",
  },
  {
    icon: Search,
    title: "Zákazníci vás nájdu na Google",
    description:
      "88 % ľudí hľadá miestne služby cez Google. Bez webovej stránky pre nich neexistujete. S vlastnou webovou stránkou ste viditeľní 24/7 — aj keď spíte alebo ste na dovolenke.",
  },
  {
    icon: ShieldFill,
    title: "Nezávislosť od sociálnych sietí",
    description:
      "Instagram a Facebook menia algoritmy, obmedzujú dosah a môžu vám kedykoľvek zablokovať účet. Vaša webová stránka je vaša platforma, ktorú vám nikto nemôže zobrať.",
  },
  {
    icon: TrophyFill,
    title: "Konkurenčná výhoda",
    description:
      "Väčšina podnikateľov stále nemá profesionálnu webovú stránku. Ak ju máte, automaticky sa odlišujete od konkurencie a priťahujete zákazníkov, o ktorých konkurencia prichádza.",
  },
];

const mustHaveItems = [
  {
    icon: FileTextFill,
    title: "Jasný popis služieb",
    description:
      "Návštevník by mal do 5 sekúnd pochopiť, čo ponúkate. Žiadne vágne frázy — konkrétne služby, pre koho sú a aký problém riešia.",
  },
  {
    icon: CurrencyEuro,
    title: "Cenník alebo cenové rozpätie",
    description:
      "Ľudia chcú vedieť, koľko to stojí. Aspoň orientačný cenník odfiltruje nereálne dopyty a ušetrí čas vám aj zákazníkovi.",
  },
  {
    icon: TelephoneFill,
    title: "Kontaktný formulár + telefónne číslo",
    description:
      "Uľahčite kontaktovanie na maximum. Kontaktný formulár, telefónne číslo na jedno kliknutie a ideálne aj WhatsApp alebo Messenger.",
  },
  {
    icon: StarFill,
    title: "Recenzie / Portfólio",
    description:
      "Ukážte, čo ste už urobili. Fotky vašej práce, referencie od klientov alebo logá firiem, s ktorými ste spolupracovali.",
  },
  {
    icon: PersonFill,
    title: "Stránka O nás",
    description:
      "Ľudia kupujú od ľudí. Krátky príbeh o tom, kto ste, prečo robíte to, čo robíte, a vaša fotka — toto všetko buduje dôveru.",
  },
  {
    icon: GeoAltFill,
    title: "Google Mapy",
    description:
      "Ak pôsobíte lokálne, vložená Google Mapa pomôže zákazníkom nájsť vás. Zároveň pomáha s lokálnym SEO.",
  },
];

const pricingTiers = [
  {
    icon: RocketTakeoff,
    name: "Základná webová stránka",
    price: "od €390",
    description:
      "Jednostránkový landing. Ideálne pre podnikateľov, ktorí chcú rýchlo začať s online prezentáciou.",
    includes: [
      "1 stránka (landing)",
      "Kontaktný formulár",
      "Mobilný dizajn",
      "Základné SEO",
      "Hotové za 3–5 dní",
    ],
  },
  {
    icon: LayersFill,
    name: "Štandardná webová stránka",
    price: "od €599",
    description:
      "Viacstránková firemná webová stránka s plným SEO, blogom a kontaktnými formulármi. Najobľúbenejšia voľba.",
    includes: [
      "Až 5 podstránok",
      "SEO optimalizácia",
      "Bloková sekcia",
      "Google Analytics",
      "CMS na úpravu obsahu",
    ],
  },
  {
    icon: Robot,
    name: "Prémiová webová stránka",
    price: "od €999",
    description:
      "Plnohodnotná webová stránka s e-shopom, rezervačným systémom alebo AI chatbotom. Pre podnikateľov, ktorí chcú automatizovať procesy.",
    includes: [
      "Všetko zo štandardnej webovej stránky",
      "E-shop alebo rezervačný systém",
      "AI chatbot",
      "Automatický zber kontaktov",
      "Prioritná podpora",
    ],
  },
];

const commonMistakes = [
  {
    title: "Nemať webovú stránku vôbec",
    description:
      "\"Mám Facebook, to stačí\" — nie, nestačí. Facebook obmedzuje dosah a vy nemáte kontrolu nad obsahom ani dizajnom. Bez webovej stránky prichádzate o zákazníkov, ktorí hľadajú vaše služby cez Google. Zmena algoritmu dokáže znížiť váš organický dosah o 80 % za jediný deň. Vlastná webová stránka je jedinou online platformou, ktorú skutočne vlastníte.",
  },
  {
    title: "Stavať si web sami na bezplatnom stavebníku",
    description:
      "Wix, Webnode, bezplatné WordPress šablóny — výsledok vyzerá neprofesionálne. Pomalé načítavanie, slabé SEO, žiadna unikátnosť. Bezplatné plány navyše zobrazujú cudziu reklamu a používajú doménu typu vasefirma.wixsite.com. Čas, ktorý strávite bojom s obmedzeniami stavebníka, je lepšie investovať do vášho podnikania.",
  },
  {
    title: "Neinvestovať do SEO",
    description:
      "Krásna webová stránka bez SEO je ako billboard na opustenej ceste. Ak vás Google nenájde, zákazníci vás tiež nenájdu. SEO optimalizácia by mala byť súčasťou webu od samého začiatku.",
  },
  {
    title: "Nemať mobilnú verziu",
    description:
      "60 %+ návštev pochádza z mobilných zariadení. Ak vaša webová stránka na mobile vyzerá zle alebo sa nepohodlne používa, zákazník odíde. Google tiež radí webové stránky bez mobilnej verzie nižšie vo výsledkoch vyhľadávania.",
  },
  {
    title: "Neaktuálne informácie na webe",
    description:
      "Neplatné telefónne číslo, stará adresa, neexistujúce služby — toto všetko ničí dôveru. Webová stránka musí byť pravidelne aktualizovaná. Odporúčam skontrolovať svoj web aspoň raz mesačne — overiť kontakty, cenník a fotky.",
  },
];

const steps = [
  {
    number: "01",
    title: "Kontaktujte ma",
    description:
      "Popíšte, čo robíte a čo od webovej stránky očakávate. Stačí pár viet cez kontaktný formulár, e-mail alebo WhatsApp. Do 24 hodín vám odpoviem s nezáväznou cenovou ponukou. Tento krok trvá 1–2 dni.",
  },
  {
    number: "02",
    title: "Dohodneme sa na detailoch",
    description:
      "Spoločne definujeme štruktúru webu, dizajn a obsah. Budete musieť poskytnúť materiály — texty o službách, fotky a logo. Ak ich nemáte, vytvorím ich za vás. Tento krok trvá 2–3 dni.",
  },
  {
    number: "03",
    title: "Váš web je hotový za 1–2 týždne",
    description:
      "Dostanete plne funkčnú webovú stránku optimalizovanú pre Google a mobilné zariadenia. Najprv náhľad na schválenie, potom spustenie s doménou, SSL a analytikou. Celý proces trvá 7–14 dní.",
  },
];

const examples = [
  {
    icon: BrushFill,
    title: "Maliar bytov v Košiciach",
    description:
      "Jednoduchá webová stránka s galériou prác, cenníkom a kontaktným formulárom. Do 3 mesiacov sa dostala na prvú stránku Google. Výsledok? 5+ nových klientov mesačne priamo z webu — bez platenej reklamy.",
  },
  {
    icon: CalculatorFill,
    title: "Účtovníčka v Bratislave",
    description:
      "Landing page s jasným popisom služieb a online objednávaním termínov. Webová stránka úplne nahradila potrebu neustáleho zadávania reklám. Klienti si teraz termíny rezervujú sami, čím sa ušetria hodiny administratívnej práce týždenne.",
  },
  {
    icon: Cake2Fill,
    title: "Cukráreň v Trnave",
    description:
      "Webová stránka s menu, galériou tort a objednávkovým formulárom. Online objednávky tvorili 40 % celkových tržieb do 6 mesiacov. Zákazníci si objednávajú torty priamo cez web aj o polnoci.",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

const EntrepreneursArticle = () => {
  return (
    <article className="container max-w-[800px] pb_120">
      {/* Article header */}
      <div className="mb-12" data-aos="fade-up" data-aos-duration="800">
        <div className="flex flex-wrap items-center gap-4 text-sm text-clr_pra mb-6">
          <span className="inline-flex items-center gap-1.5">
            <Calendar3 className="text-xs" />
            12. februára 2026
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="text-xs" />
            10 min čítanie
          </span>
          <span className="inline-flex items-center gap-1.5">
            <PersonFill className="text-xs" />
            Vladislav Khvorov
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6 leading-tight">
          Webová stránka pre{" "}
          <span className="text-clr_base">podnikateľov</span> &mdash; Kompletný
          sprievodca
        </h1>

        <p className="text-lg text-clr_pra leading-relaxed mb-6">
          Ste podnikateľ alebo majiteľ malej firmy, ktorý stále nemá webovú
          stránku? V roku 2025 je webová stránka pre podnikateľa rovnako
          nevyhnutná, ako bola vizitka pred 10 rokmi. V tomto sprievodcovi sa
          dozviete, prečo potrebujete web, čo by mal obsahovať, koľko investovať
          a ako začať &mdash; jednoducho a bez zbytočného technického žargónu.
        </p>

        <p className="text-base text-clr_pra leading-relaxed">
          Podľa štatistík až 46 % malých firiem stále nemá vlastnú webovú
          stránku. Pritom 97 % spotrebiteľov hľadá miestne služby online. Ak
          nemáte web, neexistujete pre takmer polovicu vašich potenciálnych
          zákazníkov.
        </p>
      </div>

      {/* ------------------------------------------------------------ */}
      {/*  Prečo podnikatelia potrebujú webovú stránku                 */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">
          Prečo podnikatelia potrebujú webovú stránku
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {reasons.map((reason, i) => (
            <div key={i} className="flex gap-4 p-6 bg-[rgb(30,30,30)] rounded-xl">
              <span className="w-12 h-12 bg-clr_base/10 rounded-xl flex items-center justify-center shrink-0">
                <reason.icon className="text-clr_base text-xl" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-clr_pra text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  Čo by mala webová stránka obsahovať                         */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">
          Čo by mala webová stránka podnikateľa obsahovať
        </h2>
        <div className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-6 md:p-8">
          <ul className="space-y-5">
            {mustHaveItems.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-10 h-10 bg-clr_base/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                  <item.icon className="text-clr_base" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-clr_pra text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  Príklady úspešných webových stránok                         */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Príklady úspešných webových stránok podnikateľov
        </h2>
        <p className="text-clr_pra mb-8">
          Teória je jedna vec, ale výsledky hovoria samy za seba. Tu sú tri
          reálne príklady toho, ako jednoduchá webová stránka dokáže
          transformovať podnikanie:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {examples.map((ex, i) => (
            <div key={i} className="bg-[rgb(30,30,30)] rounded-xl p-6">
              <span className="w-12 h-12 bg-clr_base/10 rounded-xl flex items-center justify-center mb-4">
                <ex.icon className="text-clr_base text-xl" />
              </span>
              <h3 className="text-lg font-semibold text-white mb-2">
                {ex.title}
              </h3>
              <p className="text-clr_pra text-sm leading-relaxed">
                {ex.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  Koľko investovať                                            */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Koľko by mal podnikateľ investovať do webovej stránky?
        </h2>
        <p className="text-clr_pra mb-8">
          Cena závisí od rozsahu a funkcionality. Tu je realistický prehľad:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {pricingTiers.map((tier, i) => (
            <div
              key={i}
              className="bg-[rgb(30,30,30)] rounded-xl p-6 flex flex-col"
            >
              <span className="w-12 h-12 bg-clr_base/10 rounded-xl flex items-center justify-center mb-4">
                <tier.icon className="text-clr_base text-xl" />
              </span>
              <h3 className="text-lg font-semibold text-white mb-1">
                {tier.name}
              </h3>
              <p className="text-2xl font-bold text-clr_base mb-3">
                {tier.price}
              </p>
              <p className="text-sm text-clr_pra mb-4 leading-relaxed">
                {tier.description}
              </p>
              <ul className="space-y-2 mt-auto">
                {tier.includes.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-2 text-sm text-clr_pra"
                  >
                    <CheckCircleFill className="text-clr_base shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  Časté chyby                                                 */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">
          Časté chyby, ktorých sa podnikatelia dopúšťajú
        </h2>
        <div className="space-y-4">
          {commonMistakes.map((mistake, i) => (
            <div
              key={i}
              className="flex gap-4 p-6 bg-[rgb(30,30,30)] rounded-xl"
            >
              <XCircleFill className="text-red-500 text-lg shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {mistake.title}
                </h3>
                <p className="text-clr_pra text-sm leading-relaxed">
                  {mistake.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  Ako začať                                                   */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">
          Ako začať?
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-6"
            >
              <span className="text-3xl font-bold text-clr_base mb-3 block">
                {step.number}
              </span>
              <h3 className="text-lg font-semibold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-clr_pra text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  Súvisiace články                                            */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <div className="bg-[rgb(30,30,30)] rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            Súvisiace články
          </h3>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/blog/website-cost-2025"
              className="inline-flex items-center gap-2 text-clr_base hover:underline text-sm"
            >
              Ceny webových stránok <ArrowRight />
            </Link>
            <Link
              href="/blog/improve-website-seo"
              className="inline-flex items-center gap-2 text-clr_base hover:underline text-sm"
            >
              Ako zlepšiť SEO <ArrowRight />
            </Link>
            <Link
              href="/blog/ai-chatbot-for-business"
              className="inline-flex items-center gap-2 text-clr_base hover:underline text-sm"
            >
              AI Chatbot pre firmy <ArrowRight />
            </Link>
            <Link
              href="/all-blog"
              className="inline-flex items-center gap-2 text-clr_base hover:underline text-sm"
            >
              Všetky články <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  CTA                                                         */}
      {/* ------------------------------------------------------------ */}
      <section className="text-center" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Chcete webovú stránku pre vaše podnikanie?
        </h2>
        <p className="text-clr_pra mb-8 max-w-xl mx-auto">
          Napíšte mi o vašom podnikaní a do 24 hodín dostanete nezáväznú ponuku
          na profesionálnu webovú stránku. Žiadne skryté poplatky.
        </p>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-clr_base text-clr_title rounded-full font-medium hover:opacity-90 transition-opacity"
        >
          Chcem firemný web
          <ArrowRight />
        </Link>
      </section>
    </article>
  );
};

export default EntrepreneursArticle;

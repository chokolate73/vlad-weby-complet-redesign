"use client";

import React from "react";
import Link from "next/link";
import {
  CheckCircleFill,
  XCircleFill,
  Calendar3,
  Clock,
  Person,
  ArrowRight,
  CurrencyEuro,
  Shop,
  Laptop,
  Phone,
  Briefcase,
  Rocket,
  HouseDoor,
  ClockHistory,
  ShieldCheck,
  Tools,
} from "react-bootstrap-icons";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const budgetOverview = [
  {
    provider: "Svojpomocne (Wix, Webnode)",
    price: "0\u2013200 \u20AC/rok",
    note: "Investujete vlastn\u00FD \u010Das, v\u00FDsledok \u010Dasto vyzer\u00E1 amat\u00E9rsky",
    accent: "border-gray-500/20",
  },
  {
    provider: "Freelancer",
    price: "390\u20131 500 \u20AC",
    note: "Profesion\u00E1lny v\u00FDsledok bez agent\u00FArnej r\u00E9\u017Eie, hotov\u00E9 do 1\u20133 t\u00FD\u017Ed\u0148ov",
    accent: "border-clr_base/20",
  },
  {
    provider: "Agent\u00FAra",
    price: "1 500\u20135 000+ \u20AC",
    note: "Kompletn\u00FD servis, dlh\u0161\u00ED proces (4\u20138 t\u00FD\u017Ed\u0148ov)",
    accent: "border-blue-500/20",
  },
];

const onepagePricing = [
  {
    provider: "Builder (Webnode, Wix)",
    price: "0\u2013100 \u20AC/rok",
    includes: "\u0160abl\u00F3na, vlastn\u00E1 dom\u00E9na, z\u00E1kladn\u00E9 SEO",
  },
  {
    provider: "Freelancer",
    price: "290\u2013590 \u20AC",
    includes:
      "Dizajn na mieru, responz\u00EDvny k\u00F3d, SEO z\u00E1klad, kontaktn\u00FD formul\u00E1r",
  },
  {
    provider: "Agent\u00FAra",
    price: "800\u20132 000 \u20AC",
    includes: "Kompletn\u00FD branding, copywriting, fotky",
  },
];

const multipagePricing = [
  {
    range: "3\u20135 podstr\u00E1nok",
    freelancer: "490\u2013799 \u20AC",
    agency: "1 500\u20132 500 \u20AC",
  },
  {
    range: "6\u201310 podstr\u00E1nok",
    freelancer: "799\u20131 200 \u20AC",
    agency: "2 500\u20134 000 \u20AC",
  },
  {
    range: "10+ podstr\u00E1nok + blog",
    freelancer: "1 200\u20132 000 \u20AC",
    agency: "4 000\u20138 000 \u20AC",
  },
];

const freelancerServices = [
  {
    service: "Jednostr\u00E1nkov\u00FD web (landing page)",
    price: "290\u2013590 \u20AC",
  },
  {
    service: "Firemn\u00FD web (5 podstr\u00E1nok)",
    price: "490\u2013999 \u20AC",
  },
  {
    service: "Web s blogom a CMS",
    price: "699\u20131 500 \u20AC",
  },
  {
    service: "Jednoduch\u00FD e-shop",
    price: "1 200\u20133 000 \u20AC",
  },
  {
    service: "Mesa\u010Dn\u00E1 spr\u00E1va a \u00FAdr\u017Eba",
    price: "25\u201350 \u20AC/mes",
  },
];

const hiddenCosts = [
  {
    item: "Platen\u00E9 pluginy a roz\u0161\u00EDrenia pre WordPress",
    price: "50\u2013200 \u20AC/rok",
  },
  {
    item: "Zmeny obsahu po odovzdan\u00ED (bez CMS)",
    price: "20\u201350 \u20AC/zmena",
  },
  {
    item: "Obnova webu po hackerskom \u00FAtoku",
    price: "200\u2013500 \u20AC",
  },
  {
    item: "Migr\u00E1cia na in\u00FA platformu",
    price: "300\u2013800 \u20AC",
  },
];

const monthlyCosts = [
  { item: "Webhosting", price: "3\u20138 \u20AC" },
  { item: "Dom\u00E9na (.sk)", price: "~1 \u20AC (12 \u20AC/rok)" },
  { item: "SSL certifik\u00E1t", price: "0 \u20AC (Let\u2019s Encrypt)" },
  {
    item: "Spr\u00E1va a \u00FAdr\u017Eba (volite\u013En\u00E9)",
    price: "25\u201350 \u20AC",
  },
  { item: "SEO / marketing (volite\u013En\u00E9)", price: "50\u2013200 \u20AC" },
];

const summaryTable = [
  {
    type: "Jednostr\u00E1nkov\u00FD web",
    freelancer: "290\u2013590 \u20AC",
    agency: "800\u20132 000 \u20AC",
    builder: "0\u2013100 \u20AC/rok",
  },
  {
    type: "Firemn\u00FD web (5 str\u00E1nok)",
    freelancer: "490\u2013999 \u20AC",
    agency: "1 500\u20134 000 \u20AC",
    builder: "100\u2013200 \u20AC/rok",
  },
  {
    type: "Web s blogom + CMS",
    freelancer: "699\u20131 500 \u20AC",
    agency: "2 500\u20135 000 \u20AC",
    builder: "200\u2013300 \u20AC/rok",
  },
  {
    type: "E-shop",
    freelancer: "1 200\u20133 000 \u20AC",
    agency: "4 000\u201310 000+ \u20AC",
    builder: "300\u2013500 \u20AC/rok",
  },
  {
    type: "Mesa\u010Dn\u00E1 spr\u00E1va",
    freelancer: "25\u201350 \u20AC/mes",
    agency: "100\u2013300 \u20AC/mes",
    builder: "0 \u20AC (rob\u00EDte sami)",
  },
];

const startupBudgets = [
  {
    icon: Rocket,
    title: "Minim\u00E1lny \u017Eivotaschopn\u00FD web (do 500 \u20AC)",
    description:
      "Jednostr\u00E1nkov\u00FD web u freelancera (350\u2013500 \u20AC) + dom\u00E9na (12 \u20AC) + hosting (50 \u20AC). Celkom: pribli\u017Ene 400\u2013560 \u20AC. Toto sta\u010D\u00ED na prv\u00FDch 6\u201312 mesiacov podnikania.",
  },
  {
    icon: Briefcase,
    title: "Sol\u00EDdny firemn\u00FD web (do 1 000 \u20AC)",
    description:
      "Viacstr\u00E1nkov\u00FD web s blogom (700\u20131 000 \u20AC) + SEO z\u00E1klad + Google Business Profile. Celkom: pribli\u017Ene 800\u20131 100 \u20AC. Invest\u00EDcia, ktor\u00E1 sa vr\u00E1ti v podobe organick\u00FDch z\u00E1kazn\u00EDkov z Google.",
  },
  {
    icon: Laptop,
    title: "Plne vybaven\u00FD web (do 2 000 \u20AC)",
    description:
      "Web na mieru + AI chatbot + SEO optimaliz\u00E1cia + napojenie na CRM alebo booking syst\u00E9m. Celkom: 1 500\u20132 000 \u20AC. Ide\u00E1lne pre firmy, ktor\u00E9 chc\u00FA automatizova\u0165 komunik\u00E1ciu so z\u00E1kazn\u00EDkmi od prv\u00E9ho d\u0148a.",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

const WebsiteCostArticle = () => {
  return (
    <article className="container max-w-[800px] pb_120">
      {/* Article header */}
      <div className="mb-12" data-aos="fade-up" data-aos-duration="800">
        <div className="flex flex-wrap items-center gap-4 text-sm text-clr_pra mb-6">
          <span className="inline-flex items-center gap-1.5">
            <Calendar3 className="text-xs" />
            11. apr&iacute;la 2026
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="text-xs" />
            12 min &ccaron;&iacute;tania
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Person className="text-xs" />
            Vladislav Khvorov
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6 leading-tight">
          Ko&lcaron;ko stoj&iacute; webstr&aacute;nka v{" "}
          <span className="text-clr_base">2026</span> &mdash; kompletn&yacute;
          cenn&iacute;k pre Slovensko
        </h1>

        <p className="text-lg text-clr_pra leading-relaxed mb-4">
          Pl&aacute;nujete nov&uacute; webstr&aacute;nku pre firmu a neviete,
          ko&lcaron;ko by ste mali investova&tcaron;? Ceny sa na Slovensku
          pohybuj&uacute; od 0&nbsp;&euro; (ak si ju vytvor&iacute;te sami cez
          builder) a&zcaron; po tis&iacute;ce eur za rie&scaron;enie na mieru.
        </p>
        <p className="text-clr_pra leading-relaxed">
          V tomto &ccaron;l&aacute;nku v&aacute;m uk&aacute;&zcaron;em
          re&aacute;lne ceny, vysvetl&iacute;m rozdiely medzi jednotliv&yacute;mi
          pr&iacute;stupmi a pom&ocirc;&zcaron;em v&aacute;m vybra&tcaron; ten
          spr&aacute;vny pre v&aacute;&scaron; rozpo&ccaron;et.
        </p>
      </div>

      {/* ------------------------------------------------------------ */}
      {/*  1. Rozpočet na prvú firemnú webstránku                       */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Ak&yacute; rozpo&ccaron;et si pripravit&rsquo; na prv&uacute;
          firemn&uacute; webstr&aacute;nku
        </h2>
        <p className="text-clr_pra mb-8 leading-relaxed">
          Predtým, ako začnete porovnávať ponuky, potrebujete vedieť, z čoho sa
          celková cena skladá. Nejde len o samotný vývoj &mdash; pripočítajte si
          doménu (10&ndash;15&nbsp;&euro;/rok), webhosting
          (30&ndash;100&nbsp;&euro;/rok), SSL certifikát (väčšinou zadarmo cez
          Let&apos;s Encrypt) a prípadné stockové fotografie alebo tvorbu loga.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {budgetOverview.map((tier) => (
            <div
              key={tier.provider}
              className={`rounded-xl border ${tier.accent} bg-[rgb(30,30,30)] p-6`}
            >
              <h3 className="text-lg font-semibold text-white mb-1">
                {tier.provider}
              </h3>
              <p className="text-2xl font-bold text-clr_base mb-3">
                {tier.price}
              </p>
              <p className="text-sm text-clr_pra">{tier.note}</p>
            </div>
          ))}
        </div>

        <div className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-6 mt-6">
          <p className="text-clr_pra leading-relaxed">
            Pre živnostníka alebo malú firmu s rozpočtom do 1&nbsp;000&nbsp;&euro;
            je <strong className="text-white">freelancer najlepšia voľba</strong>{" "}
            &mdash; dostanete profesionálny výsledok bez agentúrnej réžie.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  2. Jednostránková webstránka (one-page)                      */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Koľko stojí jednoduchá jednostránková webstránka
        </h2>
        <p className="text-clr_pra mb-8 leading-relaxed">
          Jednostránkový web je ideálny pre remeselníkov, kozmetické salóny,
          osobných trénerov alebo malé prevádzky, kde stačí prezentovať služby,
          kontakt a pár referencií na jednej stránke.
        </p>

        <div className="space-y-4">
          {onepagePricing.map((item) => (
            <div
              key={item.provider}
              className="bg-[rgb(30,30,30)] rounded-xl p-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-white">
                  {item.provider}
                </h3>
                <span className="text-clr_base font-bold">{item.price}</span>
              </div>
              <p className="text-sm text-clr_pra">{item.includes}</p>
            </div>
          ))}
        </div>

        <p className="text-clr_pra text-sm mt-6 leading-relaxed">
          Pri freelancerovi za 390&nbsp;&euro; typicky dostanete: moderný
          responzívny dizajn, optimalizáciu pre mobily, napojenie na Google
          Analytics, kontaktný formulár, mapu a základnú SEO optimalizáciu. Web
          je hotový do 3&ndash;5 pracovných dní.
        </p>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  3. Viacstránkový firemný web                                 */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Cenník pre viacstránkový firemný web
        </h2>
        <p className="text-clr_pra mb-8 leading-relaxed">
          Ak potrebujete viac podstránok &mdash; napríklad úvod, o nás, služby,
          portfólio, blog a kontakt &mdash; ide o klasický firemný web. Tento typ
          je najčastejší pre malé a stredné firmy.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-clr_pra font-medium py-3 pr-4">
                  Rozsah
                </th>
                <th className="text-left text-clr_pra font-medium py-3 pr-4">
                  Freelancer
                </th>
                <th className="text-left text-clr_pra font-medium py-3">
                  Agentúra
                </th>
              </tr>
            </thead>
            <tbody>
              {multipagePricing.map((row) => (
                <tr key={row.range} className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white font-medium">
                    {row.range}
                  </td>
                  <td className="py-3 pr-4 text-clr_base font-semibold">
                    {row.freelancer}
                  </td>
                  <td className="py-3 text-clr_pra">{row.agency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-clr_pra text-sm mt-6 leading-relaxed">
          Cena rastie hlavne s počtom podstránok, zložitosťou dizajnu a
          špeciálnymi funkciami (rezervačný systém, e-shop modul,
          viacjazyčnosť). Jednoduchý firemný web s 5 podstránkami u freelancera
          v Bratislave vás vyjde na približne 500&ndash;700&nbsp;&euro;.
        </p>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  4. Porovnanie: agentúra vs. freelancer vs. svojpomocne       */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">
          Porovnanie cien: agentúra vs. freelancer vs. svojpomocne
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Freelancer */}
          <div className="bg-[rgb(30,30,30)] rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">
              Freelancer
            </h3>
            <p className="text-clr_pra text-sm mb-4 leading-relaxed">
              Najlepšia voľba, ak máte jasné požiadavky a rozpočet do
              1&nbsp;500&nbsp;&euro;. Komunikujete priamo s človekom, ktorý váš
              web aj reálne vytvára.
            </p>
            <div className="space-y-2">
              {[
                "Nižšia cena (žiadna réžia)",
                "Rýchlejšie dodanie",
                "Osobný prístup",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
                  <span className="text-sm text-clr_pra">{item}</span>
                </div>
              ))}
              {["Menej kapacít na veľké projekty", "Závislosť na jednej osobe"].map(
                (item) => (
                  <div key={item} className="flex items-start gap-2">
                    <XCircleFill className="text-red-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-clr_pra">{item}</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Agentúra */}
          <div className="bg-[rgb(30,30,30)] rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">
              Agentúra
            </h3>
            <p className="text-clr_pra text-sm mb-4 leading-relaxed">
              Dáva zmysel pri väčších projektoch (e-shopy, portály, korporátne
              weby) alebo ak potrebujete kompletný balík vrátane stratégie.
            </p>
            <div className="space-y-2">
              {["Tím špecialistov", "Procesne riadený projekt"].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
                  <span className="text-sm text-clr_pra">{item}</span>
                </div>
              ))}
              {[
                "Vyššia cena (2\u20135\u00D7 oproti freelancerovi)",
                "Dlhšie dodacie lehoty",
                "Komunikácia cez account managera",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <XCircleFill className="text-red-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-clr_pra">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Svojpomocne */}
          <div className="bg-[rgb(30,30,30)] rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">
              Svojpomocne (Builder)
            </h3>
            <p className="text-clr_pra text-sm mb-4 leading-relaxed">
              Funguje pre osobné projekty alebo ak naozaj nemáte rozpočet.
            </p>
            <div className="space-y-2">
              {["Nulové alebo minimálne náklady"].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
                  <span className="text-sm text-clr_pra">{item}</span>
                </div>
              ))}
              {[
                "Šablónový dizajn",
                "Obmedzené SEO možnosti",
                "Stráca sa profesionalita",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <XCircleFill className="text-red-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-clr_pra">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  5. Cenník freelancera v Bratislave                            */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Koľko stojí webstránka v Bratislave u freelancera
        </h2>
        <p className="text-clr_pra mb-8 leading-relaxed">
          Bratislava má najvyššiu koncentráciu freelance web developerov na
          Slovensku. Hodinová sadzba sa pohybuje medzi
          20&ndash;50&nbsp;&euro;/hod. V praxi sa však väčšina freelancerov
          dohodne na fixnej cene za projekt.
        </p>

        <div className="space-y-3">
          {freelancerServices.map((item) => (
            <div
              key={item.service}
              className="flex flex-col sm:flex-row sm:items-center justify-between bg-[rgb(30,30,30)] rounded-xl p-5"
            >
              <span className="text-white font-medium">{item.service}</span>
              <span className="text-clr_base font-bold mt-1 sm:mt-0">
                {item.price}
              </span>
            </div>
          ))}
        </div>

        <p className="text-clr_pra text-sm mt-6 leading-relaxed">
          Pri výbere freelancera sa pozerajte na tri veci:{" "}
          <strong className="text-white">portfólio</strong> (má referencie z
          vášho odvetvia?),{" "}
          <strong className="text-white">Google recenzie</strong> (reálna spätná
          väzba od klientov) a{" "}
          <strong className="text-white">komunikáciu</strong> (odpovedá rýchlo a
          jasne?).
        </p>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  6. Fixná cena vs. hodinová sadzba                            */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">
          Fixná cena vs. hodinová sadzba
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              Fixná cena
            </h3>
            <p className="text-clr_pra text-sm leading-relaxed mb-3">
              Vopred sa dohodnete na sume za celý projekt. Viete presne, koľko
              zaplatíte. Ideálne pre jasne definované projekty.
            </p>
            <div className="flex items-start gap-2">
              <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
              <span className="text-sm text-clr_pra">
                Odporúčané pre prvý firemný web
              </span>
            </div>
          </div>

          <div className="bg-[rgb(30,30,30)] rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              Hodinová sadzba
            </h3>
            <p className="text-clr_pra text-sm leading-relaxed mb-3">
              Bežnejšia pri dlhodobej spolupráci alebo pri úpravách existujúceho
              webu. Platíte len za reálne odpracovaný čas.
            </p>
            <div className="flex items-start gap-2">
              <ClockHistory className="text-clr_pra shrink-0 mt-0.5" />
              <span className="text-sm text-clr_pra">
                Ťažšie odhadnúť celkovú cenu
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  7. Skryté náklady                                             */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Skryté náklady, na ktoré sa často zabúda
        </h2>
        <p className="text-clr_pra mb-8 leading-relaxed">
          Samotná tvorba webu je jednorazový náklad. Ale web potrebuje aj
          pravidelnú starostlivosť.
        </p>

        <div className="bg-[rgb(30,30,30)] rounded-xl p-6 md:p-8 mb-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            Povinné ročné náklady
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-[rgb(20,20,20)] rounded-xl p-4">
              <span className="block font-medium text-white text-sm mb-1">
                Doména (.sk)
              </span>
              <span className="text-clr_base font-semibold">
                10&ndash;15&nbsp;&euro;/rok
              </span>
            </div>
            <div className="bg-[rgb(20,20,20)] rounded-xl p-4">
              <span className="block font-medium text-white text-sm mb-1">
                Webhosting
              </span>
              <span className="text-clr_base font-semibold">
                30&ndash;100&nbsp;&euro;/rok
              </span>
            </div>
            <div className="bg-[rgb(20,20,20)] rounded-xl p-4">
              <span className="block font-medium text-white text-sm mb-1">
                SSL certifikát
              </span>
              <span className="text-clr_base font-semibold">
                zadarmo
              </span>
            </div>
          </div>
          <p className="text-clr_pra text-sm mt-4">
            Dokopy približne 50&ndash;120&nbsp;&euro; ročne.
          </p>
        </div>

        <div className="bg-[rgb(30,30,30)] rounded-xl p-6 md:p-8">
          <h3 className="text-lg font-semibold text-white mb-4">
            Náklady, ktoré vás prekvapia
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {hiddenCosts.map((cost) => (
              <div
                key={cost.item}
                className="bg-[rgb(20,20,20)] rounded-xl p-4"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-white text-sm">
                    {cost.item}
                  </span>
                  <span className="text-clr_base font-semibold text-sm ml-2 whitespace-nowrap">
                    {cost.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-clr_pra text-sm mt-4">
          <strong className="text-white">Celkový ročný náklad</strong> na
          prevádzku jednoduchého firemného webu je
          100&ndash;600&nbsp;&euro;, v závislosti od toho, či si správu robíte
          sami alebo ju zveríte odborníkovi.
        </p>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  8. Mesačné náklady na prevádzku                               */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">
          Mesačné náklady na prevádzku webstránky
        </h2>

        <div className="bg-[rgb(30,30,30)] rounded-xl p-6 md:p-8">
          <div className="space-y-3">
            {monthlyCosts.map((cost) => (
              <div
                key={cost.item}
                className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
              >
                <span className="text-white text-sm">{cost.item}</span>
                <span className="text-clr_base font-semibold text-sm">
                  {cost.price}
                </span>
              </div>
            ))}
            <div className="flex items-center justify-between py-2 border-t border-white/20 mt-2">
              <span className="text-white font-bold">
                Celkom (bez marketingu)
              </span>
              <span className="text-clr_base font-bold">4&ndash;59&nbsp;&euro;</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-white font-bold">
                Celkom (so správou a SEO)
              </span>
              <span className="text-clr_base font-bold">
                79&ndash;259&nbsp;&euro;
              </span>
            </div>
          </div>
        </div>

        <p className="text-clr_pra text-sm mt-6 leading-relaxed">
          Ak máte jednoduchý web bez blogu a nerobíte aktívne SEO, vaše mesačné
          náklady budú pod 10&nbsp;&euro;. Ak chcete, aby vám web reálne
          prinášal zákazníkov, počítajte s investíciou
          80&ndash;250&nbsp;&euro;/mesačne do správy a optimalizácie.
        </p>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  9. Web na mieru vs. šablóna                                   */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">
          Webstránka na mieru vs. šablóna &mdash; kedy sa oplatí čo
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[rgb(30,30,30)] rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              Šablóna (WordPress theme, builder)
            </h3>
            <p className="text-2xl font-bold text-clr_pra mb-4">
              0&ndash;60&nbsp;&euro;
            </p>
            <div className="space-y-2 mb-4">
              {["Rýchle spustenie", "Nízka cena", "Overený dizajn"].map(
                (item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
                    <span className="text-sm text-clr_pra">{item}</span>
                  </div>
                )
              )}
              {[
                "Vyzerá podobne ako stovky iných stránok",
                "Obmedzené úpravy",
                "Pomalšie načítanie",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <XCircleFill className="text-red-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-clr_pra">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-clr_pra">
              Ideálne pre: osobné stránky, blogy, testovanie nápadu.
            </p>
          </div>

          <div className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              Web na mieru
            </h3>
            <p className="text-2xl font-bold text-clr_base mb-4">
              od 490&nbsp;&euro;
            </p>
            <div className="space-y-2 mb-4">
              {[
                "Unikátny dizajn",
                "Rýchle načítanie",
                "Presne prispôsobený biznisu",
                "Lepšie SEO",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
                  <span className="text-sm text-clr_pra">{item}</span>
                </div>
              ))}
              {["Vyššia počiatočná investícia", "Dlhší vývoj"].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <XCircleFill className="text-red-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-clr_pra">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-clr_pra">
              Ideálne pre: firmy, ktoré chcú profesionálny dojem a reálne
              výsledky z webu.
            </p>
          </div>
        </div>

        <div className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-6 mt-6">
          <p className="text-clr_pra leading-relaxed">
            Pre firmu, ktorá zarába peniaze, je{" "}
            <strong className="text-white">
              web na mieru investícia, nie náklad
            </strong>
            . Ak vám web prinesie čo i len jedného zákazníka mesačne naviac,
            investícia sa vráti behom pár týždňov.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  10. Prenájom vs. jednorazová platba                           */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Prenájom webstránky vs. jednorazová platba
        </h2>
        <p className="text-clr_pra mb-8 leading-relaxed">
          Niektoré agentúry na Slovensku ponúkajú &bdquo;prenájom webu&ldquo;
          &mdash; platíte 30&ndash;90&nbsp;&euro; mesačne a web vlastníte až po
          splatení, alebo nevlastníte vôbec.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              Jednorazová platba
            </h3>
            <p className="text-clr_pra text-sm leading-relaxed">
              Web je po zaplatení váš. Dostanete prístupové údaje, zdrojový kód
              aj doménu na svoje meno. Ak sa rozhodnete zmeniť dodávateľa,
              jednoducho si web presuniete.
            </p>
            <div className="flex items-start gap-2 mt-3">
              <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
              <span className="text-sm text-white font-medium">
                Odporúčaná voľba
              </span>
            </div>
          </div>

          <div className="bg-[rgb(30,30,30)] rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              Prenájom (mesačné splátky)
            </h3>
            <p className="text-clr_pra text-sm leading-relaxed">
              30&nbsp;&euro; mesačne znie lákavo, ale za 20 mesiacov zaplatíte to
              isté. Ak chcete odísť pred koncom zmluvy, web vám nepatrí.
              Niektoré firmy používajú proprietárne systémy, odkiaľ sa nedá
              migrovať.
            </p>
            <div className="flex items-start gap-2 mt-3">
              <XCircleFill className="text-red-500 shrink-0 mt-0.5" />
              <span className="text-sm text-clr_pra">
                Riziko vendor lock-in
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  11. Koľko investovať ako startup                              */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Koľko investovať do webstránky ako startup
        </h2>
        <p className="text-clr_pra mb-8 leading-relaxed">
          Ak ste na začiatku podnikania, web nemusí byť váš najväčší náklad.
          Ale musí existovať a musí vyzerať profesionálne &mdash; je to prvá
          vec, ktorú si o vás potenciálny zákazník overí.
        </p>

        <div className="space-y-4">
          {startupBudgets.map((item) => (
            <div
              key={item.title}
              className="bg-[rgb(30,30,30)] rounded-xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-clr_base/10 rounded-xl flex items-center justify-center shrink-0">
                  <item.icon className="text-clr_base text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-clr_pra leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-6 mt-6">
          <p className="text-clr_pra leading-relaxed">
            <strong className="text-white">Pravidlo pre startup:</strong>{" "}
            investujte 3&ndash;5&nbsp;% z predpokladaného ročného obratu do webu
            a online prezentácie. Ak plánujete zarábať
            30&nbsp;000&nbsp;&euro;/rok, investícia
            900&ndash;1&nbsp;500&nbsp;&euro; do webu je rozumná.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  12. Prehľadná tabuľka cien                                   */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">
          Zhrnutie &mdash; prehľadná tabuľka cien
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-clr_pra font-medium py-3 pr-4">
                  Typ webstránky
                </th>
                <th className="text-left text-clr_pra font-medium py-3 pr-4">
                  Freelancer
                </th>
                <th className="text-left text-clr_pra font-medium py-3 pr-4">
                  Agentúra
                </th>
                <th className="text-left text-clr_pra font-medium py-3">
                  Builder (DIY)
                </th>
              </tr>
            </thead>
            <tbody>
              {summaryTable.map((row) => (
                <tr key={row.type} className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white font-medium">
                    {row.type}
                  </td>
                  <td className="py-3 pr-4 text-clr_base font-semibold">
                    {row.freelancer}
                  </td>
                  <td className="py-3 pr-4 text-clr_pra">{row.agency}</td>
                  <td className="py-3 text-clr_pra">{row.builder}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-6 mt-6">
          <p className="text-clr_pra leading-relaxed">
            Najdôležitejšie nie je koľko zaplatíte, ale{" "}
            <strong className="text-white">koľko vám web zarobí</strong>. Lacný
            web, ktorý neprináša zákazníkov, je drahší ako kvalitný web, ktorý
            sa zaplatí sám.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  Related pages                                                */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-xl text-white font-bold mb-4">
          Súvisiace články
        </h2>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/all-services"
            className="inline-flex items-center gap-2 text-clr_base hover:underline"
          >
            Tvorba webstránok <ArrowRight />
          </Link>
          <Link
            href="/blog/website-for-entrepreneurs"
            className="inline-flex items-center gap-2 text-clr_base hover:underline"
          >
            Webstránka pre podnikateľov <ArrowRight />
          </Link>
          <Link
            href="/blog/improve-website-seo"
            className="inline-flex items-center gap-2 text-clr_base hover:underline"
          >
            Ako zlepšiť SEO <ArrowRight />
          </Link>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  CTA                                                          */}
      {/* ------------------------------------------------------------ */}
      <section
        className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-8 md:p-12 text-center"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Hľadáte freelancera na tvorbu webstránky v Bratislave?
        </h2>
        <p className="text-clr_pra mb-8 max-w-xl mx-auto">
          Pozrite si moje portfólio alebo si rovno rezervujte bezplatnú
          konzultáciu. Odpoviem do 24 hodín.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 border border-clr_base text-clr_base rounded-full font-medium hover:bg-clr_base/10 transition-colors"
          >
            Portfólio
            <ArrowRight />
          </Link>
          <a
            href="https://calendar.app.google/uvuY4SVfiJS92eRB6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-clr_base text-clr_title rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Bezplatná konzultácia
            <ArrowRight />
          </a>
        </div>
      </section>
    </article>
  );
};

export default WebsiteCostArticle;

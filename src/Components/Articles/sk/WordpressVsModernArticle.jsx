"use client";

import React from "react";
import Link from "next/link";
import {
  CheckCircleFill,
  XCircleFill,
  LightningChargeFill,
  ShieldFill,
  Search,
  Globe2,
  PaletteFill,
  GearFill,
  Clock,
  Calendar3,
  PersonFill,
  ArrowRight,
  HddFill,
  CodeSlash,
  GraphUpArrow,
  Scissors,
  RocketTakeoff,
  Cup,
  ArrowRepeat,
} from "react-bootstrap-icons";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const comparisonData = [
  {
    aspect: "Rýchlosť načítania",
    icon: LightningChargeFill,
    wordpress: { good: false, text: "Pomalší — veľa pluginov, ťažké témy" },
    modern: { good: true, text: "Bleskovo rýchly — statické stránky, CDN" },
  },
  {
    aspect: "Bezpečnosť",
    icon: ShieldFill,
    wordpress: { good: false, text: "Časté útoky, vyžadujú sa pravidelné aktualizácie" },
    modern: { good: true, text: "Minimálna plocha útoku, žiadna databáza" },
  },
  {
    aspect: "SEO",
    icon: Search,
    wordpress: { good: false, text: "Dobré s pluginmi (Yoast, RankMath)" },
    modern: { good: true, text: "Výborne natívne — rýchlosť, metadáta, Core Web Vitals" },
  },
  {
    aspect: "Náklady na prevádzku",
    icon: HddFill,
    wordpress: { good: false, text: "Hosting €5–20/mes + platené pluginy" },
    modern: { good: true, text: "Často zadarmo alebo €0–5/mes (Vercel, Netlify)" },
  },
  {
    aspect: "Pohodlie úprav",
    icon: GearFill,
    wordpress: { good: true, text: "Áno — admin panel, vizuálny editor" },
    modern: { good: false, text: "Cez CMS alebo vývojára" },
  },
  {
    aspect: "Dizajn",
    icon: PaletteFill,
    wordpress: { good: false, text: "Šablóny — obmedzené, typický vzhľad" },
    modern: { good: true, text: "Bez obmedzení — individuálny dizajn na mieru" },
  },
  {
    aspect: "Škálovateľnosť",
    icon: GraphUpArrow,
    wordpress: { good: false, text: "Obmedzená — spomaľuje sa pri raste" },
    modern: { good: true, text: "Vynikajúca — globálny CDN, edge computing" },
  },
];

const wordpressUseCases = [
  {
    title: "Blogeri a tvorcovia obsahu",
    description:
      "Ak píšete desiatky článkov týždenne a potrebujete jednoduchý spôsob správy obsahu bez vývojára.",
  },
  {
    title: "Projekty \u201Eurob si s\u00E1m\u201C s minim\u00E1lnym rozpo\u010Dtom",
    description:
      "Ak chcete vytvoriť web sami za pár eur mesačne a nepotrebujete výnimočný výkon.",
  },
  {
    title: "Veľké obsahové weby",
    description:
      "Správa tisícov článkov s viacerými autormi, kde je ekosystém pluginov WordPress nenahraditeľný.",
  },
  {
    title: "Internetový obchod na WooCommerce",
    description:
      "Ak už máte funkčný obchod na WooCommerce a migrácia by bola príliš nákladná.",
  },
];

const modernWebUseCases = [
  {
    title: "Malé firmy, pre ktoré je dôležitá rýchlosť a SEO",
    description:
      "Keď potrebujete, aby vás zákazníci našli na Google a web sa načítal okamžite.",
  },
  {
    title: "Firmy, ktoré si cenia svoju značku",
    description:
      "Unikátny individuálny dizajn, ktorý vás odlíši od konkurentov s rovnakými WordPress šablónami.",
  },
  {
    title: "Podnikatelia, ktorí nechcú riešiť údržbu",
    description:
      "Žiadne aktualizácie pluginov, žiadne bezpečnostné záplaty, žiadne padajúce stránky.",
  },
  {
    title: "Profesionáli a freelanceri",
    description:
      "Portfólio, landing page alebo firemná prezentácia, ktorá pôsobí profesionálne.",
  },
];

const recommendationPoints = [
  "Rýchle načítanie = lepšie pozície na Google",
  "Minimálna údržba = menej starostí a výdavkov",
  "Bezpečnosť bez neustálych aktualizácií",
  "Individuálny dizajn, ktorý vás odlíši od konkurencie",
  "Nižšie prevádzkové náklady (hosting je často zadarmo)",
  "Lepšie Core Web Vitals = lepšie SEO",
];

const caseStudies = [
  {
    icon: Scissors,
    iconBg: "bg-pink-500/10",
    iconColor: "text-pink-500",
    title: "Kaderníctvo v Bratislave",
    text: (
      <>
        Malý salón mal web na WordPress, ktorý sa načítaval za{" "}
        <strong className="text-white">4,2 sekundy</strong> a dvakrát bol
        napadnutý hackermi. Po prechode na moderný web sa čas načítania skrátil na{" "}
        <strong className="text-white">0,8 sekundy</strong>, problémy s
        bezpečnosťou úplne zmizli a vďaka lepším Core Web Vitals pozície na
        Google výrazne vzrástli. Počet nových zákazníkov z internetu sa zvýšil
        o tretinu.
      </>
    ),
  },
  {
    icon: RocketTakeoff,
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
    title: "IT startup v Košiciach",
    text: (
      <>
        Tím mladých vývojárov najprv vyskúšal WordPress, no rýchlo narazil na
        obmedzenia &mdash; šablóny nedokázali poskytnúť{" "}
        <strong className="text-white">unikátny, pixelovo presný dizajn</strong>,{" "}
        ktorý ich značka potrebovala. Prechod na moderný web na React im dal
        plnú kontrolu nad každým detailom. Bleskovo rýchla stránka s animáciami,
        ktorá ohromuje investorov aj zákazníkov. A to všetko s bezplatným
        hostingom na Vercel.
      </>
    ),
  },
  {
    icon: Cup,
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-500",
    title: "Reštaurácia v Žiline",
    text: (
      <>
        Rodinná reštaurácia používala WordPress s{" "}
        <strong className="text-white">12 pluginmi</strong> &mdash; kontaktný
        formulár, galéria, mapy, rezervačný systém a ďalšie. Každý mesiac
        niečo prestalo fungovať po aktualizácii. Po migrácii na moderný web
        &mdash;{" "}
        <strong className="text-white">nula pluginov, nula údržby</strong>.
        Všetko je zabudované priamo v kóde, funguje spoľahlivo a majiteľ sa
        konečne môže sústrediť na to, čo robí najlepšie.
      </>
    ),
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

const WordpressVsModernArticle = () => {
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
            7 min čítanie
          </span>
          <span className="inline-flex items-center gap-1.5">
            <PersonFill className="text-xs" />
            Vladislav Khvorov
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6 leading-tight">
          WordPress vs Moderný web &mdash;{" "}
          <span className="text-clr_base">
            Čo je lepšie pre malé firmy?
          </span>
        </h1>

        <p className="text-lg text-clr_pra leading-relaxed mb-4">
          Večná otázka &mdash; WordPress alebo niečo moderné? Ak práve uvažujete
          o novom webe alebo hľadáte lepšie riešenie pre svoju firmu, tento
          článok je pre vás. Objektívne porovnáme obe možnosti &mdash; bez
          predsudkov, s faktami a číslami.
        </p>
        <p className="text-base text-clr_pra leading-relaxed">
          WordPress dominuje na webe &mdash; odhaduje sa, že{" "}
          <strong className="text-white">
            približne 43 % všetkých webov na svete beží na WordPress
          </strong>
          . No to, čo sa rýchlo nasadí, nemusí rýchlo načítať. A práve tu
          prichádza moderný web, ktorý zatiaľ využíva len malé percento firiem
          &mdash; no tí, ktorí prešli, sa už nevracajú.
        </p>
      </div>

      {/* ------------------------------------------------------------ */}
      {/*  Čo je WordPress?                                            */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-6">
          Čo je WordPress?
        </h2>
        <div className="bg-[rgb(30,30,30)] rounded-xl p-6 md:p-8 space-y-4">
          <p className="text-clr_pra leading-relaxed">
            WordPress je open-source systém na správu obsahu (CMS), ktorý vznikol
            v roku 2003.{" "}
            <strong className="text-white">
              Približne 43 % všetkých webov
            </strong>{" "}
            na internete beží na ňom &mdash; od jednoduchých blogov až po veľké
            e-shopy.
          </p>
          <p className="text-clr_pra leading-relaxed">
            Jeho sila spočíva v obrovskom ekosystéme &mdash; tisíce tém a
            pluginov, ktoré umožňujú pridať takmer akúkoľvek funkciu bez
            programovania. Web na WordPress môžete vytvoriť aj bez technických
            znalostí.
          </p>
          <p className="text-clr_pra leading-relaxed">
            Na druhej strane, popularita WordPress z neho robí najčastejší
            cieľ hackerov. A čím viac pluginov pridáte, tým pomalší a
            nestabilnejší sa web stáva.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  Čo je moderný web?                                          */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-6">
          Čo je moderný web?
        </h2>
        <div className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-6 md:p-8 space-y-4">
          <p className="text-clr_pra leading-relaxed">
            Moderný web využíva technológie ako{" "}
            <strong className="text-white">React, Next.js, Astro</strong> a
            prístup Jamstack. Namiesto toho, aby server generoval každú stránku
            pri každej návšteve, moderný web vopred vygeneruje stránky ako
            statické HTML súbory.
          </p>
          <p className="text-clr_pra leading-relaxed">
            Výsledok? Bleskové načítanie, lepšie SEO, minimálne bezpečnostné
            riziká a hosting, ktorý je často úplne zadarmo. Na správu obsahu
            poskytuje headless CMS pohodlný admin panel bez spomaľovania webu.
          </p>
          <p className="text-clr_pra leading-relaxed">
            Moderný web je ako auto postavené na mieru &mdash; presne podľa
            vašich potrieb, bez zbytočnej záťaže. WordPress je ako jazdenka od
            predajcu &mdash; funguje, ale nevyhovuje každému.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  Porovnávacia tabuľka                                        */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">
          Porovnanie: WordPress vs Moderný web
        </h2>

        {/* Desktop header */}
        <div className="hidden md:grid md:grid-cols-[1fr_1fr_1fr] gap-4 mb-4 px-4">
          <span className="text-sm font-semibold text-clr_pra uppercase tracking-wide">
            Aspekt
          </span>
          <span className="text-sm font-semibold text-clr_pra uppercase tracking-wide text-center">
            WordPress
          </span>
          <span className="text-sm font-semibold text-clr_pra uppercase tracking-wide text-center">
            Moderný web
          </span>
        </div>

        <div className="space-y-3">
          {comparisonData.map((item, i) => (
            <div key={i} className="bg-[rgb(30,30,30)] rounded-xl p-4 md:p-6">
              {/* Desktop */}
              <div className="hidden md:grid md:grid-cols-[1fr_1fr_1fr] gap-4 items-center">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 bg-clr_base/10 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="text-clr_base" />
                  </span>
                  <span className="font-semibold text-white">{item.aspect}</span>
                </div>
                <div className="flex items-start gap-2">
                  {item.wordpress.good ? (
                    <CheckCircleFill className="text-green-500 shrink-0 mt-0.5" />
                  ) : (
                    <XCircleFill className="text-red-500 shrink-0 mt-0.5" />
                  )}
                  <span className="text-sm text-clr_pra">
                    {item.wordpress.text}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  {item.modern.good ? (
                    <CheckCircleFill className="text-green-500 shrink-0 mt-0.5" />
                  ) : (
                    <XCircleFill className="text-red-500 shrink-0 mt-0.5" />
                  )}
                  <span className="text-sm text-clr_pra">
                    {item.modern.text}
                  </span>
                </div>
              </div>

              {/* Mobile */}
              <div className="md:hidden space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 bg-clr_base/10 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="text-clr_base" />
                  </span>
                  <span className="font-semibold text-white">{item.aspect}</span>
                </div>
                <div className="pl-2 space-y-2">
                  <div className="flex items-start gap-2">
                    {item.wordpress.good ? (
                      <CheckCircleFill className="text-green-500 shrink-0 mt-0.5" />
                    ) : (
                      <XCircleFill className="text-red-500 shrink-0 mt-0.5" />
                    )}
                    <span className="text-sm text-clr_pra">
                      <strong className="text-white">WP:</strong>{" "}
                      {item.wordpress.text}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    {item.modern.good ? (
                      <CheckCircleFill className="text-green-500 shrink-0 mt-0.5" />
                    ) : (
                      <XCircleFill className="text-red-500 shrink-0 mt-0.5" />
                    )}
                    <span className="text-sm text-clr_pra">
                      <strong className="text-white">Mod.:</strong>{" "}
                      {item.modern.text}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  Reálne skúsenosti                                           */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Reálne skúsenosti
        </h2>
        <p className="text-clr_pra mb-8">
          Čísla a porovnania sú fajn, ale rozdiely sú najlepšie vidieť na
          konkrétnych príkladoch:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {caseStudies.map((cs, i) => (
            <div key={i} className="bg-[rgb(30,30,30)] rounded-xl p-6">
              <span
                className={`w-10 h-10 ${cs.iconBg} rounded-xl flex items-center justify-center mb-4`}
              >
                <cs.icon className={`${cs.iconColor} text-lg`} />
              </span>
              <h3 className="text-lg font-semibold text-white mb-2">
                {cs.title}
              </h3>
              <p className="text-sm text-clr_pra leading-relaxed">{cs.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  Pre koho je WordPress?                                      */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-6">
          Pre koho je WordPress?
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {wordpressUseCases.map((uc, i) => (
            <div
              key={i}
              className="bg-[rgb(30,30,30)] rounded-xl p-6 flex gap-4"
            >
              <span className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center shrink-0">
                <Globe2 className="text-orange-500" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {uc.title}
                </h3>
                <p className="text-sm text-clr_pra">{uc.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  Pre koho je moderný web?                                    */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-6">
          Pre koho je moderný web?
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {modernWebUseCases.map((uc, i) => (
            <div
              key={i}
              className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-6 flex gap-4"
            >
              <span className="w-10 h-10 bg-clr_base/10 rounded-xl flex items-center justify-center shrink-0">
                <CodeSlash className="text-clr_base" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {uc.title}
                </h3>
                <p className="text-sm text-clr_pra">{uc.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  Naše odporúčanie                                            */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-6">
          Naše odporúčanie
        </h2>
        <div className="bg-[rgb(30,30,30)] rounded-2xl p-8 md:p-12">
          <p className="text-lg text-clr_pra leading-relaxed mb-6">
            Pre väčšinu malých firiem je{" "}
            <strong className="text-clr_base">
              moderný web jednoznačne lepšia investícia
            </strong>
            . Tu je dôvod:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {recommendationPoints.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircleFill className="text-clr_base shrink-0" />
                <span className="text-clr_pra text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-clr_pra leading-relaxed mb-4">
            WordPress má stále svoje miesto &mdash; hlavne pre veľké obsahové
            weby a blogerov. Ale ak ste malá firma, živnostník alebo profesionál,
            ktorý potrebuje rýchly, bezpečný a profesionálne vyzerajúci web,
            moderné technológie sú jasnou voľbou.
          </p>
          <p className="text-clr_pra leading-relaxed mb-4">
            Konkrétne čísla: malá firma zvyčajne investuje{" "}
            <strong className="text-clr_base">
              &euro;300 &ndash; &euro;1 000
            </strong>{" "}
            do webu. S WordPress pripočítajte &euro;5&ndash;20/mes za hosting,
            &euro;50&ndash;100/rok za platené pluginy a hodiny na aktualizácie.
            S moderným webom sú prevádzkové náklady takmer nulové &mdash;
            hosting na Vercel je zadarmo, žiadne pluginy, žiadne bezpečnostné
            záplaty.
          </p>
          <p className="text-clr_pra leading-relaxed">
            ROI moderného webu je jednoducho lepšie &mdash; platíte menej za
            údržbu a zarobíte viac vďaka lepšej viditeľnosti na Google.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  Migrácia z WordPress                                        */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-6">
          Migrácia z WordPress
        </h2>
        <div className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-6 md:p-8">
          <div className="flex items-start gap-4">
            <span className="w-10 h-10 bg-clr_base/10 rounded-xl flex items-center justify-center shrink-0 mt-1">
              <ArrowRepeat className="text-clr_base" />
            </span>
            <div className="space-y-4">
              <p className="text-clr_pra leading-relaxed">
                Už máte WordPress a uvažujete o prechode? Dobrá správa
                &mdash; migrácia je{" "}
                <strong className="text-white">jednoduchšia, ako si myslíte</strong>.
                Váš existujúci obsah &mdash; texty, obrázky, štruktúra stránok
                &mdash; môže byť úplne prenesený na nové riešenie.
              </p>
              <p className="text-clr_pra leading-relaxed">
                Čo sa týka SEO, vaše pozície na Google budú zachované. So{" "}
                <strong className="text-white">
                  správne nastavenými 301-presmerovaniami
                </strong>{" "}
                budú všetky existujúce URL presmerované na nové, takže ani
                Google, ani návštevníci nezaznamenajú žiadne výpadky.
              </p>
              <p className="text-clr_pra leading-relaxed">
                Celý proces migrácie zvyčajne trvá{" "}
                <strong className="text-white">1&ndash;2 týždne</strong>{" "}
                v závislosti od veľkosti webu. Počas celého procesu váš pôvodný
                web na WordPress beží normálne &mdash; prepnutie nastane až
                vtedy, keď je nový web úplne hotový a otestovaný.
              </p>
            </div>
          </div>
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
              href="/blog/kolko-stoji-web-stranka"
              className="inline-flex items-center gap-2 text-clr_base hover:underline text-sm"
            >
              Koľko stojí web? <ArrowRight />
            </Link>
            <Link
              href="/blog/web-stranka-pre-zivnostnika"
              className="inline-flex items-center gap-2 text-clr_base hover:underline text-sm"
            >
              Web pre podnikateľov <ArrowRight />
            </Link>
            <Link
              href="/blog/ako-zlepsit-seo"
              className="inline-flex items-center gap-2 text-clr_base hover:underline text-sm"
            >
              Ako zlepšiť SEO <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  CTA                                                         */}
      {/* ------------------------------------------------------------ */}
      <section className="text-center" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Chcete moderný web pre svoju firmu?
        </h2>
        <p className="text-clr_pra mb-8 max-w-xl mx-auto">
          Napíšte mi a spolu nájdeme najlepšie riešenie pre vašu spoločnosť.
          Bezplatná konzultácia, nezáväzná ponuka do 24 hodín.
        </p>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-clr_base text-clr_title rounded-full font-medium hover:opacity-90 transition-opacity"
        >
          Chcem moderný web
          <ArrowRight />
        </Link>
      </section>
    </article>
  );
};

export default WordpressVsModernArticle;

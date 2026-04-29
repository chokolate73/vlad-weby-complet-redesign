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
  Robot,
  ChatDots,
  Scissors,
  Cart4,
  Wrench,
  Globe2,
  Stars,
  CurrencyEuro,
  ListCheck,
  LightningChargeFill,
  GraphUpArrow,
  ExclamationTriangleFill,
} from "react-bootstrap-icons";
import { serviceUrl } from "@/lib/localizedPaths";

const LOCALE = "sk";

const capabilities = [
  "Odpovedá na otázky o službách, cenách a dostupnosti — okamžite, 24/7.",
  "Zbiera kontaktné údaje a preposiela ich do vášho e-mailu alebo CRM.",
  "Pomáha s rezerváciami a objednávkami.",
  "Komunikuje vo viacerých jazykoch bez nutnosti zamestnávať ďalších ľudí.",
  "Odpovedá konzistentne — nezmýli si cenník, nezabudne na akciu.",
];

const limitations = [
  "Nenahrádza osobný kontakt pri komplexných konzultáciách.",
  "Nie je vhodný na riešenie sťažností — zákazník v takom prípade chce človeka.",
  "Nebude fungovať dobre, ak mu nedáte kvalitné podklady o vašom biznise.",
];

const targetGroups = [
  {
    icon: Scissors,
    title: "Salóny, kliniky, štúdiá",
    text: "Klienti sa pýtajú na služby a termíny aj mimo otváracích hodín. Chatbot odpovie a zozbiera kontakt.",
  },
  {
    icon: Cart4,
    title: "E-shopy",
    text: "Zákazníci chcú vedieť o dostupnosti, doručení alebo reklamáciách. Chatbot odpovie na 80 % bežných otázok bez zásahu človeka.",
  },
  {
    icon: Wrench,
    title: "Remeselníci a služby",
    text: "Inštalatér, elektrikár, upratovacia firma. Zákazník hľadá rýchlu odpoveď. Kto odpovie prvý, ten dostane zákazku.",
  },
  {
    icon: Globe2,
    title: "Firmy s viacjazyčnou klientelou",
    text: "Ak obsluhujete zákazníkov v slovenčine, nemčine alebo angličtine, chatbot zvládne všetky jazyky bez pridanej réžie.",
  },
];

const noFitSignals = [
  "Máte 2–3 zákazníkov mesačne a komunikujete s nimi osobne — objem investíciu nezaplatí.",
  "Váš biznis stojí výlučne na osobnom vzťahu a individuálnom poradenstve.",
  "Zákazníci preferujú telefón a nepíšu správy.",
];

const automations = [
  {
    icon: ChatDots,
    text: "Automatické odpovede na správy z Instagramu a Facebooku — rovnaký chatbot, len na inej platforme.",
  },
  {
    icon: ListCheck,
    text: "Prepojenie kontaktného formulára s CRM — nový kontakt sa automaticky zapíše bez manuálneho prepisovania.",
  },
  {
    icon: LightningChargeFill,
    text: "Notifikácie pri novej objednávke — e-mail alebo SMS príde okamžite, bez nutnosti kontrolovať admin panel.",
  },
  {
    icon: GraphUpArrow,
    text: "Automatické follow-up e-maily — zákazník dostane potvrdenie a ďalšie kroky ihneď po odoslaní formulára.",
  },
];

const steps = [
  {
    icon: ChatDots,
    step: "1",
    title: "Bezplatná konzultácia",
    text: "Pozrieme sa spoločne na váš web a procesy. Identifikujeme, kde strácate čas alebo zákazníkov.",
  },
  {
    icon: ListCheck,
    step: "2",
    title: "Návrh riešenia",
    text: "Nie každý potrebuje chatbota. Niekedy stačí lepší formulár, automatická odpoveď alebo prepojenie existujúcich nástrojov.",
  },
  {
    icon: Robot,
    step: "3",
    title: "Nasadenie za 3–5 dní",
    text: "Žiadne mesiace vývoja. Chatbot alebo automatizáciu nastavím rýchlo, otestujem a odovzdám funkčné.",
  },
];

const AiChatbotSmallBusinessArticle = () => {
  return (
    <article className="container max-w-[800px] pb_120">
      {/* Article header */}
      <div className="mb-12" data-aos="fade-up" data-aos-duration="800">
        <div className="flex flex-wrap items-center gap-4 text-sm text-clr_pra mb-6">
          <span className="inline-flex items-center gap-1.5">
            <Calendar3 className="text-xs" />
            29. apríla 2026
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="text-xs" />
            7 min čítania
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Person className="text-xs" />
            Vladislav Khvorov
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6 leading-tight">
          AI chatbot na webe:{" "}
          <span className="text-clr_base">
            Ako malá firma získa zákazníkov aj o polnoci
          </span>
        </h1>

        <p className="text-lg text-clr_pra leading-relaxed mb-4">
          Väčšina malých firiem stráca zákazníkov v momente, keď nikto nesedí
          pri počítači. Zákazník napíše otázku cez web o 22:00, nedostane
          odpoveď — a ráno kontaktuje konkurenciu. Nie preto, že by ste boli
          horší. Ale preto, že ste neboli dostupní.
        </p>
        <p className="text-clr_pra leading-relaxed">
          AI chatbot tento problém rieši. A v roku 2026 to už nie je technológia
          len pre veľké korporácie — nasadenie trvá dni, nie mesiace, a stojí{" "}
          <strong className="text-white">
            zlomok platu ďalšieho zamestnanca
          </strong>
          .
        </p>
      </div>

      {/* ------------------------------------------------------------ */}
      {/*  1. What AI chatbot does                                     */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Čo AI chatbot reálne dokáže (a čo nie)
        </h2>
        <p className="text-clr_pra mb-6 leading-relaxed">
          Zabudnite na otravné okienka z roku 2018, ktoré vedeli odpovedať len
          „Napíšte nám e-mail." Moderný AI chatbot rozumie otázkam v prirodzenom
          jazyku — zákazník sa opýta{" "}
          <em>„Máte voľný termín v piatok popoludní?"</em> a chatbot odpovie
          konkrétne, podľa dát, ktoré má k dispozícii.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <CheckCircleFill className="text-clr_base" />
              Čo chatbot zvláda
            </h3>
            <ul className="space-y-2">
              {capabilities.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-clr_pra"
                >
                  <CheckCircleFill className="text-clr_base shrink-0 mt-0.5 text-xs" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[rgb(30,30,30)] rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <XCircleFill className="text-red-500" />
              Čo chatbot nezvláda
            </h3>
            <ul className="space-y-2">
              {limitations.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-clr_pra"
                >
                  <XCircleFill className="text-red-500 shrink-0 mt-0.5 text-xs" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-[rgb(30,30,30)] rounded-xl p-6">
          <p className="text-clr_pra leading-relaxed">
            Kľúč je v tom, že chatbot{" "}
            <strong className="text-white">nemusí nahradiť vás</strong>. Musí
            zachytiť zákazníka v momente, keď vy nemôžete.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  2. Case study                                               */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Ako to vyzerá v praxi: Wellness štúdio v Nemecku
        </h2>
        <p className="text-clr_pra mb-6 leading-relaxed">
          Toto nie je teoretický príklad. Realizoval som nasadenie AI chatbota
          pre wellness štúdio{" "}
          <strong className="text-white">Beauty in Perfection</strong> v Nemecku.
        </p>

        <div className="space-y-4">
          <div className="bg-[rgb(30,30,30)] rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <ExclamationTriangleFill className="text-yellow-500" />
              Situácia pred chatbotom
            </h3>
            <p className="text-clr_pra leading-relaxed">
              Štúdio dostávalo otázky cez web, Instagram aj WhatsApp — v nemčine,
              angličtine aj ruštine. Majiteľka nestíhala odpovedať včas, hlavne
              mimo pracovných hodín a cez víkendy. Potenciálni klienti buď
              čakali, alebo odišli inam.
            </p>
          </div>

          <div className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <Stars className="text-clr_base" />
              Čo sme urobili
            </h3>
            <ul className="space-y-2">
              {[
                "Chatbot odpovedá na otázky o procedúrach, cenách a dostupnosti automaticky.",
                "Komunikuje v troch jazykoch — nemčina, angličtina, ruština.",
                "Zbiera kontaktné údaje a požiadavky na rezervácie.",
                "Funguje 24/7 na webe aj cez sociálne siete.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-clr_pra">
                  <CheckCircleFill className="text-clr_base shrink-0 mt-1 text-xs" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[rgb(30,30,30)] rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <GraphUpArrow className="text-clr_base" />
              Výsledok
            </h3>
            <p className="text-clr_pra leading-relaxed">
              Štúdio začalo zachytávať dopyt, ktorý predtým jednoducho mizol.
              Klientky, ktoré písali večer alebo cez víkend, dostali okamžitú
              odpoveď — a väčšina z nich pokračovala k rezervácii. Majiteľka sa
              ráno prihlásila a našla hotové kontakty, nie neprečítané správy.
            </p>
            <p className="text-clr_pra leading-relaxed mt-3">
              Projekt trval{" "}
              <strong className="text-white">niekoľko dní</strong> — nie týždňov.
              A nevyžadoval žiadne technické znalosti na strane klientky.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  3. Who it's for                                             */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Pre koho AI chatbot dáva zmysel
        </h2>
        <p className="text-clr_pra mb-6 leading-relaxed">
          Nie každá firma chatbota potrebuje. Ale ak sa poznáte v niektorom
          z týchto bodov, pravdepodobne vám pomôže:
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {targetGroups.map((group) => (
            <div key={group.title} className="bg-[rgb(30,30,30)] rounded-xl p-6">
              <div className="flex items-start gap-3">
                <span className="w-10 h-10 bg-clr_base/10 rounded-xl flex items-center justify-center shrink-0">
                  <group.icon className="text-clr_base" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-white mb-1">
                    {group.title}
                  </h3>
                  <p className="text-sm text-clr_pra leading-relaxed">
                    {group.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[rgb(30,30,30)] rounded-xl p-6">
          <h3 className="text-base font-semibold text-white mb-3">
            Kedy chatbot <span className="text-clr_base">nemá</span> zmysel
          </h3>
          <ul className="space-y-2">
            {noFitSignals.map((signal) => (
              <li key={signal} className="flex items-start gap-2 text-clr_pra">
                <ExclamationTriangleFill className="text-yellow-500 shrink-0 mt-1 text-xs" />
                <span className="text-sm">{signal}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  4. Costs                                                    */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Čo chatbot stojí a čo ušetrí
        </h2>
        <p className="text-clr_pra mb-6 leading-relaxed">
          Väčšina malých firiem si chatbota predstavuje ako drahú technológiu.
          Realita v roku 2026 je iná.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-[rgb(30,30,30)] rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 bg-clr_base/10 rounded-xl flex items-center justify-center shrink-0">
                <CurrencyEuro className="text-clr_base" />
              </span>
              <h3 className="text-base font-semibold text-white">
                Náklady na nasadenie
              </h3>
            </div>
            <p className="text-clr_pra text-sm leading-relaxed">
              Jednorázové nastavenie vrátane napojenia na vaše dáta a otestovania
              sa pohybuje{" "}
              <strong className="text-white">v stovkách eur</strong> — nie
              tisícoch. Mesačné prevádzkové náklady sú zvyčajne nižšie ako cena
              jedného obedu denne.
            </p>
          </div>
          <div className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 bg-clr_base/10 rounded-xl flex items-center justify-center shrink-0">
                <GraphUpArrow className="text-clr_base" />
              </span>
              <h3 className="text-base font-semibold text-white">
                Čo ušetríte
              </h3>
            </div>
            <ul className="space-y-2 text-sm text-clr_pra">
              <li className="flex items-start gap-2">
                <CheckCircleFill className="text-clr_base shrink-0 mt-0.5 text-xs" />
                <span>
                  Čas odpovedaním na opakujúce sa otázky — hodina denne.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleFill className="text-clr_base shrink-0 mt-0.5 text-xs" />
                <span>Stratených zákazníkov, ktorí odišli bez odpovede.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleFill className="text-clr_base shrink-0 mt-0.5 text-xs" />
                <span>
                  Náklady na viacjazyčnú podporu bez ďalšieho zamestnanca.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-[rgb(30,30,30)] rounded-xl p-6">
          <p className="text-clr_pra leading-relaxed text-sm">
            Princíp je jednoduchý:{" "}
            <strong className="text-white">
              ak strácate zákazníkov kvôli nedostupnosti, chatbot je investícia
              s rýchlou návratnosťou
            </strong>
            . Ak len jeden zákazník mesačne odíde ku konkurencii, lebo ste
            neodpovedali včas, chatbot sa zaplatí sám.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  5. Automation beyond chatbot                                */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Automatizácia nad rámec chatbota
        </h2>
        <p className="text-clr_pra mb-6 leading-relaxed">
          Chatbot je často len prvý krok. Keď už máte AI na webe, otvára sa
          priestor na ďalšie automatizácie, ktoré šetria čas a znižujú
          chybovosť.
        </p>

        <div className="space-y-3">
          {automations.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="bg-[rgb(30,30,30)] rounded-xl p-4 flex items-start gap-4"
            >
              <span className="w-10 h-10 bg-clr_base/10 rounded-xl flex items-center justify-center shrink-0">
                <Icon className="text-clr_base" />
              </span>
              <p className="text-clr_pra leading-relaxed text-sm">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  6. CTA                                                      */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-6">
          Ako začať
        </h2>

        <div className="space-y-4 mb-8">
          {steps.map((item) => (
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
            Váš web môže pracovať za vás — aj keď spíte
          </h3>
          <p className="text-clr_pra mb-8 max-w-xl mx-auto leading-relaxed">
            Nepotrebujete technické znalosti. Nepotrebujete veľký rozpočet.
            Stačí vedieť, kde strácate zákazníkov.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-clr_base text-clr_title rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Chcem konzultáciu zdarma
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

export default AiChatbotSmallBusinessArticle;

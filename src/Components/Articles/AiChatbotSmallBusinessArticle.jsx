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

const LOCALE = "en";

const capabilities = [
  "Answers questions about services, pricing, and availability — instantly, 24/7.",
  "Collects contact details and forwards them to your email or CRM.",
  "Helps with bookings and orders.",
  "Communicates in multiple languages without hiring additional staff.",
  "Responds consistently — never gets the pricing wrong, never forgets a promotion.",
];

const limitations = [
  "Doesn't replace personal contact for complex consultations.",
  "Not ideal for handling complaints — customers want a human there.",
  "Won't perform well if you don't give it quality information about your business.",
];

const targetGroups = [
  {
    icon: Scissors,
    title: "Salons, clinics, studios",
    text: "Clients ask about services and availability outside business hours. The chatbot responds and collects their details.",
  },
  {
    icon: Cart4,
    title: "E-commerce stores",
    text: "Customers want to know about availability, delivery, or returns. A chatbot handles 80% of common questions without human input.",
  },
  {
    icon: Wrench,
    title: "Tradespeople and service businesses",
    text: "Plumber, electrician, cleaning company. The customer wants a quick answer. Whoever responds first gets the job.",
  },
  {
    icon: Globe2,
    title: "Businesses with multilingual customers",
    text: "If you serve customers in Slovak, German, or English, the chatbot handles all languages with no added overhead.",
  },
];

const noFitSignals = [
  "You have 2–3 customers a month and communicate with them personally — volume won't justify the investment.",
  "Your business relies entirely on personal relationships and individual consulting.",
  "Your customers prefer phone calls and don't write messages.",
];

const automations = [
  {
    icon: ChatDots,
    text: "Automatic replies to Instagram and Facebook messages — the same chatbot, just on a different platform.",
  },
  {
    icon: ListCheck,
    text: "Contact form connected to your CRM — new contacts are written automatically, no manual data entry.",
  },
  {
    icon: LightningChargeFill,
    text: "New order notifications — email or SMS arrives immediately, no need to check the admin panel.",
  },
  {
    icon: GraphUpArrow,
    text: "Automatic follow-up emails — customer gets a confirmation and next steps as soon as they submit the form.",
  },
];

const steps = [
  {
    icon: ChatDots,
    step: "1",
    title: "Free consultation",
    text: "We look at your website and processes together, and identify where you're losing time or customers.",
  },
  {
    icon: ListCheck,
    step: "2",
    title: "Tailored solution",
    text: "Not everyone needs a chatbot. Sometimes a better form, an automatic reply, or connecting existing tools is enough.",
  },
  {
    icon: Robot,
    step: "3",
    title: "Live in 3–5 days",
    text: "No months of development. I set up and test the chatbot or automation quickly, then hand it over fully working.",
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
            April 29, 2026
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="text-xs" />
            7 min read
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Person className="text-xs" />
            Vladislav Khvorov
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6 leading-tight">
          AI Chatbot on Your Website:{" "}
          <span className="text-clr_base">
            How Small Businesses Win Customers Even at Midnight
          </span>
        </h1>

        <p className="text-lg text-clr_pra leading-relaxed mb-4">
          Most small businesses lose customers the moment no one is sitting at
          the computer. A customer writes a question through the website at 10
          PM, gets no answer, and contacts a competitor in the morning — not
          because you are worse, but because you were unavailable.
        </p>
        <p className="text-clr_pra leading-relaxed">
          An AI chatbot solves this. And in 2026, this is no longer technology
          reserved for large corporations — deployment takes days, not months,
          and costs{" "}
          <strong className="text-white">
            a fraction of another employee's salary
          </strong>
          .
        </p>
      </div>

      {/* ------------------------------------------------------------ */}
      {/*  1. What AI chatbot does                                     */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          What an AI chatbot actually does (and what it doesn't)
        </h2>
        <p className="text-clr_pra mb-6 leading-relaxed">
          Forget those annoying pop-ups from 2018 that could only reply "Send us
          an email." A modern AI chatbot understands natural language — a
          customer asks <em>"Do you have a slot on Friday afternoon?"</em> and
          the chatbot answers specifically, based on the data it has available.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <CheckCircleFill className="text-clr_base" />
              What it handles
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
              What it doesn't handle
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
            The key is that the chatbot{" "}
            <strong className="text-white">doesn't need to replace you</strong>.
            It needs to catch the customer in the moment when you can't.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  2. Case study                                               */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          What it looks like in practice: Wellness studio in Germany
        </h2>
        <p className="text-clr_pra mb-6 leading-relaxed">
          This isn't a theoretical example. I deployed an AI chatbot for the
          wellness studio{" "}
          <strong className="text-white">Beauty in Perfection</strong> in
          Germany.
        </p>

        <div className="space-y-4">
          <div className="bg-[rgb(30,30,30)] rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <ExclamationTriangleFill className="text-yellow-500" />
              Before the chatbot
            </h3>
            <p className="text-clr_pra leading-relaxed">
              The studio received enquiries through the website, Instagram, and
              WhatsApp — in German, English, and Russian. The owner couldn't
              respond in time, especially outside working hours and on weekends.
              Potential clients either waited or went elsewhere.
            </p>
          </div>

          <div className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <Stars className="text-clr_base" />
              What we did
            </h3>
            <ul className="space-y-2">
              {[
                "Chatbot answers questions about treatments, prices, and availability automatically.",
                "Communicates in three languages — German, English, Russian.",
                "Collects contact details and booking requests.",
                "Operates 24/7 on the website and across social media.",
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
              The result
            </h3>
            <p className="text-clr_pra leading-relaxed">
              The studio started capturing demand that had simply been
              disappearing before. Clients who wrote in the evening or on
              weekends received an instant response — and most of them went on
              to make a booking. The owner logged in each morning to find ready
              contacts, not unread messages.
            </p>
            <p className="text-clr_pra leading-relaxed mt-3">
              The project took{" "}
              <strong className="text-white">a few days</strong> — not weeks.
              And required no technical knowledge on the client's side.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  3. Who it's for                                             */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Who benefits from an AI chatbot
        </h2>
        <p className="text-clr_pra mb-6 leading-relaxed">
          Not every business needs a chatbot. But if you recognise yourself in
          any of these, it will likely help you:
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {targetGroups.map((group) => (
            <div
              key={group.title}
              className="bg-[rgb(30,30,30)] rounded-xl p-6"
            >
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
            When a chatbot <span className="text-clr_base">doesn't</span> make
            sense
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
          What a chatbot costs — and what it saves
        </h2>
        <p className="text-clr_pra mb-6 leading-relaxed">
          Most small businesses picture a chatbot as an expensive, complicated
          technology. The reality in 2026 is different.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-[rgb(30,30,30)] rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 bg-clr_base/10 rounded-xl flex items-center justify-center shrink-0">
                <CurrencyEuro className="text-clr_base" />
              </span>
              <h3 className="text-base font-semibold text-white">
                Deployment cost
              </h3>
            </div>
            <p className="text-clr_pra text-sm leading-relaxed">
              One-time setup including data integration and testing runs{" "}
              <strong className="text-white">in the hundreds of euros</strong> —
              not thousands. Monthly running costs are typically less than the
              price of one lunch a day.
            </p>
          </div>
          <div className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 bg-clr_base/10 rounded-xl flex items-center justify-center shrink-0">
                <GraphUpArrow className="text-clr_base" />
              </span>
              <h3 className="text-base font-semibold text-white">
                What you save
              </h3>
            </div>
            <ul className="space-y-2 text-sm text-clr_pra">
              <li className="flex items-start gap-2">
                <CheckCircleFill className="text-clr_base shrink-0 mt-0.5 text-xs" />
                <span>
                  Time spent answering the same questions — an hour a day.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleFill className="text-clr_base shrink-0 mt-0.5 text-xs" />
                <span>Lost customers who left without getting a reply.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleFill className="text-clr_base shrink-0 mt-0.5 text-xs" />
                <span>
                  Cost of multilingual support without hiring extra staff.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-[rgb(30,30,30)] rounded-xl p-6">
          <p className="text-clr_pra leading-relaxed text-sm">
            The principle is simple:{" "}
            <strong className="text-white">
              if you're losing customers due to unavailability, a chatbot is an
              investment with a fast payback
            </strong>
            . If even one customer a month goes to a competitor because you
            didn't respond in time, the chatbot pays for itself.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  5. Automation beyond chatbot                                */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Automation beyond the chatbot
        </h2>
        <p className="text-clr_pra mb-6 leading-relaxed">
          A chatbot is often just the first step. Once you have AI on your
          website, it opens the door to further automations that save time and
          reduce errors.
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
          How to get started
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
                  <span className="text-clr_base">Step {item.step}:</span>{" "}
                  {item.title}
                </h3>
                <p className="text-clr_pra leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-clr_base/5 border border-clr_base/10 rounded-2xl p-8 md:p-10 text-center">
          <h3 className="text-2xl text-white font-bold mb-3">
            Your website can work for you — even while you sleep
          </h3>
          <p className="text-clr_pra mb-8 max-w-xl mx-auto leading-relaxed">
            No technical knowledge needed. No big budget required. Just know
            where you're losing customers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-clr_base text-clr_title rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Get a free consultation
              <ArrowRight />
            </Link>
            <Link
              href={serviceUrl("ai-chatbot", LOCALE)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[rgb(30,30,30)] text-white rounded-full font-medium hover:bg-[rgb(40,40,40)] transition-colors"
            >
              Service details
              <Robot />
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
};

export default AiChatbotSmallBusinessArticle;

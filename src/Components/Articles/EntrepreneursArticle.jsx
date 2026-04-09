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
    title: "Professional Impression",
    description:
      "First impressions are everything. 75% of people judge a company\u2019s credibility by its website. A professional website builds trust before the customer even calls you.",
  },
  {
    icon: Search,
    title: "Customers Will Find You on Google",
    description:
      "88% of people search for local services through Google. Without a website, you don\u2019t exist for them. With your own website, you\u2019re visible 24/7 \u2014 even when you\u2019re sleeping or on vacation.",
  },
  {
    icon: ShieldFill,
    title: "Independence from Social Media",
    description:
      "Instagram and Facebook change algorithms, limit reach, and can block your account at any time. Your website is your platform that nobody can take away.",
  },
  {
    icon: TrophyFill,
    title: "Competitive Advantage",
    description:
      "Most entrepreneurs still don\u2019t have a professional website. Having one automatically sets you apart from competitors and attracts customers that competitors are losing.",
  },
];

const mustHaveItems = [
  {
    icon: FileTextFill,
    title: "Clear Service Description",
    description:
      "A visitor should understand what you offer within 5 seconds. No vague phrases \u2014 specific services, who they\u2019re for, and what problem they solve.",
  },
  {
    icon: CurrencyEuro,
    title: "Price List or Price Range",
    description:
      "People want to know how much it costs. At least an approximate price list filters out unrealistic inquiries and saves time for both you and the customer.",
  },
  {
    icon: TelephoneFill,
    title: "Contact Form + Phone Number",
    description:
      "Make it as easy as possible to get in touch. A contact form, a one-click phone number, and ideally WhatsApp or Messenger.",
  },
  {
    icon: StarFill,
    title: "Reviews / Portfolio",
    description:
      "Show what you\u2019ve already done. Photos of your work, client testimonials, or logos of companies you\u2019ve worked with.",
  },
  {
    icon: PersonFill,
    title: "About Us Page",
    description:
      "People buy from people. A short story about who you are, why you do what you do, and your photo \u2014 all of this builds trust.",
  },
  {
    icon: GeoAltFill,
    title: "Google Maps",
    description:
      "If you work locally, an embedded Google Map helps customers find you. At the same time, it helps with local SEO.",
  },
];

const pricingTiers = [
  {
    icon: RocketTakeoff,
    name: "Basic Website",
    price: "from \u20AC390",
    description:
      "A single-page landing. Ideal for entrepreneurs who want to quickly start their online presence.",
    includes: [
      "1 page (landing)",
      "Contact form",
      "Mobile design",
      "Basic SEO",
      "Ready in 3\u20135 days",
    ],
  },
  {
    icon: LayersFill,
    name: "Standard Website",
    price: "from \u20AC599",
    description:
      "A multi-page corporate website with full SEO, blog, and contact forms. The most popular choice.",
    includes: [
      "Up to 5 subpages",
      "SEO optimization",
      "Blog section",
      "Google Analytics",
      "CMS for content editing",
    ],
  },
  {
    icon: Robot,
    name: "Premium Website",
    price: "from \u20AC999",
    description:
      "A full-featured website with an online store, booking system, or AI chatbot. For entrepreneurs who want to automate processes.",
    includes: [
      "Everything from the standard website",
      "Online store or booking system",
      "AI chatbot",
      "Automatic lead collection",
      "Priority support",
    ],
  },
];

const commonMistakes = [
  {
    title: "Not having a website at all",
    description:
      "\"I have Facebook, that\u2019s enough\" \u2014 no, it\u2019s not. Facebook limits reach, and you don\u2019t control the content or design. Without a website, you lose customers who search for your services through Google. An algorithm change can reduce your organic reach by 80% in a single day. Your own website is the only online platform you truly own.",
  },
  {
    title: "Building a website yourself on a free builder",
    description:
      "Wix, Webnode, free WordPress templates \u2014 the result looks unprofessional. Slow loading, poor SEO, no uniqueness. Free plans also show third-party ads and use a domain like yourbusiness.wixsite.com. The time you spend fighting the builder\u2019s limitations is better invested in your business.",
  },
  {
    title: "Not investing in SEO",
    description:
      "A beautiful website without SEO is like a billboard on a deserted road. If Google can\u2019t find you, customers won\u2019t find you either. SEO optimization should be part of the website from the very beginning.",
  },
  {
    title: "Not having a mobile version",
    description:
      "60%+ of visits come from mobile devices. If your website looks bad or is inconvenient to use on mobile, the customer leaves. Google also ranks websites without a mobile version lower in search results.",
  },
  {
    title: "Outdated information on the website",
    description:
      "An outdated phone number, old address, non-existent services \u2014 all of this destroys trust. The website needs to be regularly updated. I recommend checking your website at least once a month \u2014 review contacts, price list, and photos.",
  },
];

const steps = [
  {
    number: "01",
    title: "Contact Me",
    description:
      "Describe what you do and what you expect from a website. A few sentences via a contact form, email, or WhatsApp are enough. I\u2019ll respond within 24 hours with a non-binding price quote. This step takes 1\u20132 days.",
  },
  {
    number: "02",
    title: "We Agree on Details",
    description:
      "Together we\u2019ll define the website structure, design, and content. You\u2019ll need to provide materials \u2014 texts about services, photos, and a logo. If you don\u2019t have them, I\u2019ll create them for you. This step takes 2\u20133 days.",
  },
  {
    number: "03",
    title: "Your Website Is Ready in 1\u20132 Weeks",
    description:
      "You\u2019ll receive a fully functional website optimized for Google and mobile devices. First a preview for your approval, then we go live with domain, SSL, and analytics. The entire process takes 7\u201314 days.",
  },
];

const examples = [
  {
    icon: BrushFill,
    title: "Apartment Painter in Kosice",
    description:
      "A simple website with a work gallery, price list, and contact form. Within 3 months, it reached the first page of Google. Result? 5+ new clients per month directly from the website \u2014 without paid advertising.",
  },
  {
    icon: CalculatorFill,
    title: "Accountant in Bratislava",
    description:
      "A landing page with a clear description of services and online appointment booking. The website completely replaced the need for constant ad placement. Clients now book appointments themselves, saving hours of admin work per week.",
  },
  {
    icon: Cake2Fill,
    title: "Pastry Shop in Trnava",
    description:
      "A website with a menu, cake gallery, and order form. Online orders accounted for 40% of total revenue within 6 months. Customers order cakes directly through the website even at midnight.",
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
            February 12, 2026
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="text-xs" />
            10 min read
          </span>
          <span className="inline-flex items-center gap-1.5">
            <PersonFill className="text-xs" />
            Vladislav Khvorov
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6 leading-tight">
          Website for{" "}
          <span className="text-clr_base">Entrepreneurs</span> &mdash; Complete
          Guide
        </h1>

        <p className="text-lg text-clr_pra leading-relaxed mb-6">
          Are you an entrepreneur or small business owner who still doesn&apos;t
          have a website? In 2025, a website for an entrepreneur is as essential
          as a business card was 10 years ago. In this guide, you&apos;ll learn
          why you need a website, what it should contain, how much to invest, and
          how to get started &mdash; simply and without unnecessary technical
          jargon.
        </p>

        <p className="text-base text-clr_pra leading-relaxed">
          According to statistics, up to 46% of small businesses still don&apos;t
          have their own website. Meanwhile, 97% of consumers search for local
          services online. If you don&apos;t have a website, you don&apos;t exist
          for almost half of your potential customers.
        </p>
      </div>

      {/* ------------------------------------------------------------ */}
      {/*  Why Entrepreneurs Need a Website                            */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">
          Why Entrepreneurs Need a Website
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
      {/*  What a Website Should Contain                               */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">
          What an Entrepreneur&apos;s Website Should Contain
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
      {/*  Examples of Successful Websites                             */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Examples of Successful Entrepreneur Websites
        </h2>
        <p className="text-clr_pra mb-8">
          Theory is one thing, but results speak for themselves. Here are three
          real examples of how a simple website can transform an
          entrepreneur&apos;s business:
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
      {/*  How Much to Invest                                          */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          How Much Should an Entrepreneur Invest in a Website?
        </h2>
        <p className="text-clr_pra mb-8">
          The cost depends on the scope and functionality. Here is a realistic
          overview:
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
      {/*  Common Mistakes                                             */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">
          Common Mistakes Entrepreneurs Make
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
      {/*  How to Get Started                                          */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">
          How to Get Started?
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
      {/*  Related                                                     */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <div className="bg-[rgb(30,30,30)] rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            Related Articles
          </h3>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/blog/website-cost-2025"
              className="inline-flex items-center gap-2 text-clr_base hover:underline text-sm"
            >
              Website Pricing <ArrowRight />
            </Link>
            <Link
              href="/blog/improve-website-seo"
              className="inline-flex items-center gap-2 text-clr_base hover:underline text-sm"
            >
              How to Improve SEO <ArrowRight />
            </Link>
            <Link
              href="/blog/ai-chatbot-for-business"
              className="inline-flex items-center gap-2 text-clr_base hover:underline text-sm"
            >
              AI Chatbot for Business <ArrowRight />
            </Link>
            <Link
              href="/all-blog"
              className="inline-flex items-center gap-2 text-clr_base hover:underline text-sm"
            >
              All Articles <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  CTA                                                         */}
      {/* ------------------------------------------------------------ */}
      <section className="text-center" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Want a Website for Your Business?
        </h2>
        <p className="text-clr_pra mb-8 max-w-xl mx-auto">
          Write to me about your business, and within 24 hours you&apos;ll
          receive a non-binding offer for a professional website. No hidden fees.
        </p>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-clr_base text-clr_title rounded-full font-medium hover:opacity-90 transition-opacity"
        >
          I Want a Business Website
          <ArrowRight />
        </Link>
      </section>
    </article>
  );
};

export default EntrepreneursArticle;

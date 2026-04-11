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
  Globe2,
  PaletteFill,
  GearFill,
  PhoneFill,
  Search,
  CurrencyEuro,
} from "react-bootstrap-icons";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const pricingOverview = [
  {
    provider: "Freelancer",
    startPrice: "from \u20AC390",
    landing: "\u20AC390 \u2013 \u20AC800",
    corporate: "\u20AC599 \u2013 \u20AC1,500",
    eshop: "\u20AC999 \u2013 \u20AC3,000",
    accent: "border-clr_base/20",
  },
  {
    provider: "Small Agency",
    startPrice: "from \u20AC1,500",
    landing: "\u20AC800 \u2013 \u20AC2,000",
    corporate: "\u20AC1,500 \u2013 \u20AC5,000",
    eshop: "\u20AC3,000 \u2013 \u20AC10,000",
    accent: "border-blue-500/20",
  },
  {
    provider: "Large Agency",
    startPrice: "from \u20AC5,000",
    landing: "\u20AC2,000 \u2013 \u20AC5,000",
    corporate: "\u20AC5,000 \u2013 \u20AC15,000",
    eshop: "\u20AC10,000 \u2013 \u20AC50,000+",
    accent: "border-purple-500/20",
  },
];

const priceFactors = [
  {
    icon: Globe2,
    title: "Project Scope",
    description:
      "The number of pages directly affects the price. A single-page landing is significantly cheaper than a site with 10+ subpages, a blog, and multilingual content.",
  },
  {
    icon: PaletteFill,
    title: "Design",
    description:
      "A template (ready-made design) costs less than a custom design. However, a unique design will better distinguish your brand from competitors.",
  },
  {
    icon: GearFill,
    title: "Functionality",
    description:
      "A contact form is the basic minimum. An online store, booking system, payment gateway, or CRM integration increase the cost depending on complexity.",
  },
  {
    icon: PhoneFill,
    title: "Responsiveness",
    description:
      "Mobile-first design is today\u2019s standard. If a developer doesn\u2019t optimize your site for mobile devices by default, look for another one \u2014 60% of visits come from smartphones.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Basic SEO (meta tags, speed, structure) should be included in the price. Advanced SEO (keywords, link building, content strategy) is a separate service.",
  },
  {
    icon: CurrencyEuro,
    title: "CMS System",
    description:
      "A content management system allows you to change texts and images without a developer. WordPress is cheaper, while a custom CMS offers greater flexibility.",
  },
];

const detailedPricing = [
  {
    type: "Landing Page",
    description:
      "A single-page website for advertising campaigns, new services, or a quick start to your online presence.",
    freelancer: "\u20AC390 \u2013 \u20AC800",
    agency: "\u20AC800 \u2013 \u20AC2,000",
    includes: [
      "1 page with multiple sections",
      "Contact form",
      "Responsive design",
      "Basic SEO",
      "Delivery within 5 days",
    ],
  },
  {
    type: "Corporate Website (5\u201310 pages)",
    description:
      "A full corporate presentation with service pages, about us, contacts, and a blog.",
    freelancer: "\u20AC599 \u2013 \u20AC1,500",
    agency: "\u20AC1,500 \u2013 \u20AC5,000",
    includes: [
      "5\u201310 custom pages",
      "CMS for content management",
      "Blog / news section",
      "Advanced SEO and analytics",
      "Delivery within 2 weeks",
    ],
  },
  {
    type: "Online Store",
    description:
      "An e-commerce site with a product catalog, shopping cart, and payment gateway.",
    freelancer: "\u20AC999 \u2013 \u20AC3,000",
    agency: "\u20AC3,000 \u2013 \u20AC15,000",
    includes: [
      "Product catalog with filters",
      "Shopping cart and checkout process",
      "Payment gateway (Stripe, GoPay)",
      "Order management",
      "Responsive design + SEO",
    ],
  },
];

const oneTimeCosts = [
  { item: "Domain registration (.sk)", price: "\u20AC10 \u2013 \u20AC15/year", note: "Domain is paid annually, but it\u2019s a minimal expense" },
  { item: "SSL certificate", price: "\u20AC0 (Let\u2019s Encrypt)", note: "Most hosting providers offer SSL for free" },
  { item: "Professional photos", price: "\u20AC0 \u2013 \u20AC200", note: "Stock photos are free, custom photography from \u20AC100" },
  { item: "Copywriting (texts)", price: "\u20AC0 \u2013 \u20AC300", note: "Many freelancers include texts in the price" },
];

const monthlyCosts = [
  { item: "Hosting (server storage)", price: "\u20AC0 \u2013 \u20AC20/mo", note: "Modern websites: Vercel/Netlify free. WordPress: \u20AC5\u2013\u20AC20/mo" },
  { item: "Maintenance and updates", price: "\u20AC0 \u2013 \u20AC25/mo", note: "WordPress requires regular maintenance. Modern websites \u2014 minimal" },
  { item: "Support package", price: "\u20AC25/mo (optional)", note: "Hosting + maintenance + minor content edits \u2014 all in one" },
  { item: "Monthly SEO (advanced)", price: "\u20AC99 \u2013 \u20AC500/mo", note: "Optional. Basic SEO is included in website creation" },
];

const freelancerPros = [
  "Low prices (no overhead for office and managers)",
  "Direct communication without intermediaries",
  "Fast delivery (3\u201314 days)",
  "Flexibility in revisions and iterations",
  "Individual approach to each project",
];

const freelancerCons = [
  "Limited bandwidth (1 person)",
  "Narrower specialization",
  "Less team support for large projects",
];

const agencyPros = [
  "Large team of specialists (designer, developer, copywriter)",
  "Ability to handle enterprise projects",
  "Established processes and documentation",
  "More references and a long track record",
];

const agencyCons = [
  "High prices (3\u201310x more than freelancers)",
  "Communication through a project manager \u2014 slower",
  "Long delivery times (4\u201312 weeks)",
  "Less flexibility for small changes",
  "Often rigid contract terms",
];

const dontSaveOn = [
  {
    title: "Loading Speed",
    description:
      "A slow website loses customers. Every extra second reduces conversion by 7%. Google considers speed when ranking positions.",
  },
  {
    title: "Mobile-First Design",
    description:
      "Over 60% of visits come from mobile devices. A website that doesn\u2019t work on a smartphone is useless for most visitors.",
  },
  {
    title: "Basic SEO",
    description:
      "A website without SEO is like a store without a sign. Meta tags, proper heading structure, speed, and technical SEO should be part of every project.",
  },
  {
    title: "Security (SSL)",
    description:
      "HTTPS is mandatory today. Without an SSL certificate, browsers flag your site as insecure, and customers leave.",
  },
];

const businessTypes = [
  {
    business: "Entrepreneur / Freelancer",
    budget: "\u20AC390 \u2013 \u20AC599",
    recommendation:
      "A landing page or simple corporate website is enough. Invest in quality design and SEO. You don\u2019t need 10 pages \u2014 one well-made page with a clear CTA is more effective.",
  },
  {
    business: "Beauty Salon / Hair Salon",
    budget: "\u20AC499 \u2013 \u20AC799",
    recommendation:
      "A website with a price list, work gallery, and online booking. Local SEO is critical \u2014 most clients search through Google Maps. Invest in your own photos.",
  },
  {
    business: "Repair Company (plumber, electrician, painter)",
    budget: "\u20AC399 \u2013 \u20AC699",
    recommendation:
      "A corporate presentation with contacts, services, and reviews. These companies benefit the most from SEO \u2014 online competition is low, while demand is high.",
  },
  {
    business: "Restaurant / Cafe",
    budget: "\u20AC499 \u2013 \u20AC799",
    recommendation:
      "A website with a menu, opening hours, photo gallery, and reservation options. A connection with Google Business Profile is a must.",
  },
  {
    business: "Small Online Store (up to 100 products)",
    budget: "\u20AC999 \u2013 \u20AC2,500",
    recommendation:
      "A full online store with a catalog, cart, and payment gateway. Invest in speed and a mobile version \u2014 70% of purchases are made from a phone.",
  },
  {
    business: "IT Company / Startup",
    budget: "\u20AC799 \u2013 \u20AC2,000",
    recommendation:
      "A modern website with an emphasis on technical professionalism. Speed, clean code, and good UX design are priorities. A blog for content marketing is a bonus.",
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
            February 12, 2026
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="text-xs" />
            8 min read
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Person className="text-xs" />
            Vladislav Khvorov
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6 leading-tight">
          How Much Does a Website Cost in{" "}
          <span className="text-clr_base">2025?</span>
        </h1>

        <p className="text-lg text-clr_pra leading-relaxed mb-4">
          The cost of creating a website in Slovakia ranges from &euro;390 to
          tens of thousands of euros. Why is the range so wide? It all depends
          on the type of website, the provider, design, functionality, and
          other factors. In this article, I will give you a concrete price
          overview, compare freelancers with agencies, and advise how much you
          should realistically invest in a website.
        </p>
        <p className="text-clr_pra leading-relaxed mb-4">
          If you are an entrepreneur or small business owner, you probably
          don&apos;t want to spend thousands of euros on a website, but at the
          same time, you need a professional page that actually works. The good
          news is that in 2025, a quality website is more affordable than ever.
        </p>
        <p className="text-clr_pra leading-relaxed">
          This article is based on real prices from the Slovak market. All
          figures are taken from my own practice and competitor price analysis
          over the past 3 years.
        </p>
      </div>

      {/* ------------------------------------------------------------ */}
      {/*  1. Pricing Overview in Slovakia                              */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">
          Pricing Overview in Slovakia
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {pricingOverview.map((tier) => (
            <div
              key={tier.provider}
              className={`rounded-xl border ${tier.accent} bg-[rgb(30,30,30)] p-6`}
            >
              <h3 className="text-lg font-semibold text-white mb-1">
                {tier.provider}
              </h3>
              <p className="text-2xl font-bold text-clr_base mb-4">
                {tier.startPrice}
              </p>
              <ul className="space-y-3 text-sm">
                <li>
                  <span className="block font-medium text-clr_pra">Landing Page</span>
                  <span className="text-white">{tier.landing}</span>
                </li>
                <li>
                  <span className="block font-medium text-clr_pra">Corporate Website</span>
                  <span className="text-white">{tier.corporate}</span>
                </li>
                <li>
                  <span className="block font-medium text-clr_pra">Online Store</span>
                  <span className="text-white">{tier.eshop}</span>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  2. What Affects the Price                                    */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">
          What Affects Website Cost?
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {priceFactors.map((factor) => (
            <div
              key={factor.title}
              className="bg-[rgb(30,30,30)] rounded-xl p-6"
            >
              <div className="w-12 h-12 bg-clr_base/10 rounded-xl flex items-center justify-center mb-4">
                <factor.icon className="text-clr_base text-xl" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {factor.title}
              </h3>
              <p className="text-sm text-clr_pra leading-relaxed">
                {factor.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  3. Specific Price Ranges                                     */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">
          Specific Price Ranges
        </h2>

        <div className="space-y-6">
          {detailedPricing.map((item) => (
            <div
              key={item.type}
              className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-6 md:p-8"
            >
              <h3 className="text-xl font-bold text-white mb-2">
                {item.type}
              </h3>
              <p className="text-clr_pra mb-4">{item.description}</p>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div className="bg-[rgb(20,20,20)] rounded-xl p-4">
                  <span className="block text-sm font-medium text-clr_pra mb-1">
                    Freelancer
                  </span>
                  <span className="text-xl font-bold text-clr_base">
                    {item.freelancer}
                  </span>
                </div>
                <div className="bg-[rgb(20,20,20)] rounded-xl p-4">
                  <span className="block text-sm font-medium text-clr_pra mb-1">
                    Agency
                  </span>
                  <span className="text-xl font-bold text-white">
                    {item.agency}
                  </span>
                </div>
              </div>

              <ul className="space-y-2">
                {item.includes.map((inc) => (
                  <li
                    key={inc}
                    className="flex items-center gap-2 text-sm text-clr_pra"
                  >
                    <CheckCircleFill className="text-clr_base shrink-0" />
                    {inc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  3b. Hidden Costs and Monthly Expenses                        */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Hidden Costs That Agencies Won&apos;t Tell You About
        </h2>
        <p className="text-clr_pra mb-8">
          The cost of building a website is just the beginning. There are
          recurring expenses that need to be factored into your budget. Here
          is a complete overview:
        </p>

        <div className="bg-[rgb(30,30,30)] rounded-xl p-6 md:p-8 mb-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            One-Time Costs (pay once)
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {oneTimeCosts.map((cost) => (
              <div key={cost.item} className="bg-[rgb(20,20,20)] rounded-xl p-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-white text-sm">{cost.item}</span>
                  <span className="text-clr_base font-semibold text-sm">{cost.price}</span>
                </div>
                <p className="text-xs text-clr_pra">{cost.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[rgb(30,30,30)] rounded-xl p-6 md:p-8">
          <h3 className="text-lg font-semibold text-white mb-4">
            Monthly Costs After Launch
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {monthlyCosts.map((cost) => (
              <div key={cost.item} className="bg-[rgb(20,20,20)] rounded-xl p-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-white text-sm">{cost.item}</span>
                  <span className="text-clr_base font-semibold text-sm">{cost.price}</span>
                </div>
                <p className="text-xs text-clr_pra">{cost.note}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-clr_pra text-sm mt-4">
          <strong className="text-white">Real example:</strong> If you order a
          corporate website from a freelancer for &euro;599 + domain &euro;12/year
          + hosting free (Vercel), your total annual cost is &euro;611 in the
          first year and just &euro;12 in subsequent years. That&apos;s less than
          &euro;1 per month for a professional online presence.
        </p>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  4. Freelancer vs Agency                                      */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">
          Freelancer vs Agency &mdash; Which Is Better?
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Freelancer */}
          <div className="bg-[rgb(30,30,30)] rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">
              Freelancer
            </h3>
            <div className="space-y-3 mb-6">
              {freelancerPros.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
                  <span className="text-sm text-clr_pra">{item}</span>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              {freelancerCons.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <XCircleFill className="text-red-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-clr_pra">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Agency */}
          <div className="bg-[rgb(30,30,30)] rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">
              Agency
            </h3>
            <div className="space-y-3 mb-6">
              {agencyPros.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
                  <span className="text-sm text-clr_pra">{item}</span>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              {agencyCons.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <XCircleFill className="text-red-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-clr_pra">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-6 mt-6">
          <p className="text-clr_pra leading-relaxed">
            <strong className="text-white">Verdict:</strong> For small and
            medium businesses in Slovakia, a freelancer is usually the better
            choice &mdash; you get the same quality at a fraction of an
            agency&apos;s cost. An agency is justified for large enterprise
            projects with budgets starting at &euro;10,000, where an entire
            team of specialists is needed.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  5. What Not to Save On                                       */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">
          What You Shouldn&apos;t Save On
        </h2>

        <div className="bg-[rgb(30,30,30)] rounded-2xl p-8 md:p-12">
          <p className="text-clr_pra mb-6">
            A cheap website isn&apos;t necessarily bad. But there are areas
            where saving ends up costing more than what you save:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {dontSaveOn.map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-clr_pra text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  6. How Much to Invest Based on Business Type                  */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          How Much to Invest Based on Business Type
        </h2>
        <p className="text-clr_pra mb-8">
          Not every business needs the same website. Here are specific
          recommendations for different types of businesses in Slovakia:
        </p>

        <div className="space-y-4">
          {businessTypes.map((item) => (
            <div
              key={item.business}
              className="bg-[rgb(30,30,30)] rounded-xl p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-white">
                  {item.business}
                </h3>
                <span className="text-clr_base font-bold">{item.budget}</span>
              </div>
              <p className="text-sm text-clr_pra">{item.recommendation}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  7. Summary                                                    */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Summary: How Much Does a Website Actually Cost?
        </h2>
        <div className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-6 md:p-8">
          <p className="text-clr_pra leading-relaxed mb-4">
            For most small businesses and entrepreneurs in Slovakia, the optimal
            investment in a website is between{" "}
            <strong className="text-white">&euro;399 and &euro;999</strong>.
            For this amount, you get a professional website with modern design,
            mobile version, SEO optimization, and a contact form.
          </p>
          <p className="text-clr_pra leading-relaxed mb-4">
            The key is not to save on speed, mobile-first design, and basic SEO.
            A website is an investment, not an expense. A quality website pays
            for itself through new customers who would never have found you on
            Google otherwise.
          </p>
          <p className="text-clr_pra leading-relaxed">
            If you&apos;re unsure whether you need a landing page for &euro;390
            or a corporate website for &euro;599 &mdash; write to me. I will
            advise you based on your situation and prepare a free price quote
            within 24 hours.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  Related pages                                                */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-xl text-white font-bold mb-4">
          Related Articles
        </h2>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/ru/all-services"
            className="inline-flex items-center gap-2 text-clr_base hover:underline"
          >
            Website Creation <ArrowRight />
          </Link>
          <Link
            href="/ru/blog/website-for-entrepreneurs"
            className="inline-flex items-center gap-2 text-clr_base hover:underline"
          >
            Website for Entrepreneurs <ArrowRight />
          </Link>
          <Link
            href="/ru/blog/improve-website-seo"
            className="inline-flex items-center gap-2 text-clr_base hover:underline"
          >
            How to Improve SEO <ArrowRight />
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
          Want to Know the Exact Cost of Your Website?
        </h2>
        <p className="text-clr_pra mb-8 max-w-xl mx-auto">
          Write to me about your project, and within 24 hours you&apos;ll
          receive a free price quote. Free, accurate, and personalized.
        </p>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-clr_base text-clr_title rounded-full font-medium hover:opacity-90 transition-opacity"
        >
          I Want a Price Quote
          <ArrowRight />
        </Link>
      </section>
    </article>
  );
};

export default WebsiteCostArticle;

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

const LOCALE = "en";

const howItWorks = [
  {
    icon: ChatDots,
    title: "Refines the request",
    text: "ChatGPT follows up conversationally (what's the square footage, pets at home, how often you vacuum) to narrow the selection.",
  },
  {
    icon: Search,
    title: "Searches the web",
    text: "With priority on trusted retailers and manufacturers — not pages that just resell other people's products.",
  },
  {
    icon: Cart4,
    title: "Returns a visual comparison",
    text: "3–8 products with prices, reviews, key features, and links straight to sellers.",
  },
];

const whyItMatters = [
  {
    icon: People,
    title: "Volume",
    text: "ChatGPT is used by more than 700 million people weekly. In the US, AI traffic to retail sites grew by hundreds of percent. For Central Europe, this wave lags the US by 6–12 months.",
  },
  {
    icon: ShieldCheck,
    title: "Low competition",
    text: "Regional e-commerce stores are practically invisible in AI search. If your product pages have clean Schema.org and descriptions, you can appear in results before competitors realize it exists.",
  },
  {
    icon: Stars,
    title: "New rules",
    text: "Classic SEO optimizes for the click from Google. AI search optimizes for citation in the answer. Different priorities, and a lead for whoever figures this out first.",
  },
];

const acpPaths = [
  {
    title: "Via Shopify",
    text: "If your store runs on Shopify, products are automatically integrated into ChatGPT through Shopify Catalog. The simplest path.",
  },
  {
    title: "Via Stripe",
    text: "If you already use Stripe for payments, Stripe offers ACP integration as an extension.",
  },
  {
    title: "Custom implementation",
    text: "For WooCommerce, PrestaShop, Magento, or custom platforms — connecting to ACP endpoints via API.",
  },
];

const checklist = [
  {
    icon: CodeSlash,
    title: "Schema.org structured data",
    text: "Minimum: Product, Offer, AggregateRating, Review. Without them, AI systems rely on HTML scraping — which is unreliable.",
  },
  {
    icon: Tags,
    title: "Complete and consistent attributes",
    text: "Size, weight, material, compatibility, power, country of origin, warranty. A product with 20 attributes beats one with three lines of description.",
  },
  {
    icon: Stars,
    title: "Reviews outside your own site",
    text: "68% of citations in AI answers come from third parties. Google Reviews, Trustpilot, Amazon — worth more than your own product copy.",
  },
  {
    icon: Speedometer2,
    title: "Fast, clean website",
    text: "ChatGPT verifies info directly on the merchant's site. Slow site with popups and broken meta tags = AI prefers another source.",
  },
  {
    icon: Robot,
    title: "Descriptions for humans, not keywords",
    text: "AI understands natural language. A description covering usage and scenarios works better than one stuffed with keywords.",
  },
  {
    icon: GraphUpArrow,
    title: "Track AI traffic in GA4",
    text: "Create an \"AI Referral\" channel for chatgpt.com, openai.com, perplexity.ai, claude.ai, gemini.google.com — otherwise they hide under Direct.",
  },
];

const stats = [
  { metric: "Weekly ChatGPT users", value: "700M+" },
  { metric: "AI traffic growth to US retail sites (2025)", value: "+693%" },
  { metric: "AI citations from third parties", value: "68%" },
  { metric: "Brands tracking AI visibility", value: "16%" },
  { metric: "Walmart: Instant Checkout vs own site conversion drop", value: "3× lower" },
];

const myths = [
  {
    q: "\"I have to pay OpenAI for my products to show up.\"",
    a: "No. Results are organic. OpenAI currently does not sell paid placements in Shopping results. This is explicitly confirmed in the Agentic Commerce Protocol documentation.",
  },
  {
    q: "\"This only applies to giants like Target or Sephora.\"",
    a: "They were first, but ACP is an open standard. A smaller store with good data can be significantly more visible in a niche category than a large player with a chaotic catalog.",
  },
  {
    q: "\"Good Google SEO is enough.\"",
    a: "Classic SEO optimizes for the click. AI search optimizes for presence in the answer. The overlap is large (both love Schema.org, speed, and quality content), but it's not 100%. You need both.",
  },
  {
    q: "\"The AI will make up or confuse my product.\"",
    a: "Yes, it happens. That's why correct Schema.org is critical — ChatGPT Shopping reads product pages directly via structured data. The cleaner the feed, the lower the chance of hallucination.",
  },
];

const weeks = [
  {
    icon: ListCheck,
    step: "Week 1",
    title: "Product catalog audit",
    text: "Schema.org Product + Offer on all products. Empty attributes. Image quality (min. 1200×1200 px, no watermarks).",
  },
  {
    icon: CpuFill,
    step: "Week 2",
    title: "Technical basics",
    text: "Core Web Vitals (LCP under 2.5s, CLS 0.1, INP 200ms). Working sitemap.xml and robots.txt. llms.txt in the root.",
  },
  {
    icon: Stars,
    step: "Week 3",
    title: "Reviews and trust",
    text: "Email 7 days after delivery asking for a rating. Register on Google Reviews, Trustpilot. Respond to existing reviews.",
  },
  {
    icon: RocketTakeoff,
    step: "Week 4",
    title: "Integration and measurement",
    text: "Shopify Catalog or ACP connector for your platform. AI Referral channel in GA4. After a month, track traffic from chatgpt.com.",
  },
];

const worthNow = [
  "E-commerce stores with 50+ SKUs in attractive categories (electronics, fashion, home, sports, beauty)",
  "Brands with their own products that want to stand out from resellers",
  "Stores where products are technically describable with clear attributes",
];

const canWait = [
  "Very small stores with a handful of products where basic SEO is missing — fix the basics first",
  "Services and intangible offerings — ChatGPT Shopping is about physical products for now",
  "Strictly local stores without online sales",
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
            April 21, 2026
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="text-xs" />
            9 min read
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Person className="text-xs" />
            Vladislav Khvorov
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6 leading-tight">
          ChatGPT Shopping for E-commerce &mdash; How to Appear in{" "}
          <span className="text-clr_base">ChatGPT Results</span> in 2026
        </h1>

        <p className="text-lg text-clr_pra leading-relaxed">
          In March 2026, OpenAI launched a new generation of shopping inside
          ChatGPT. Users no longer have to switch between dozens of tabs &mdash;
          ChatGPT returns a visual comparison of products with price, reviews,
          and key details. For online stores, it&apos;s a new category of
          organic traffic. This article explains how to appear in ChatGPT
          Shopping and why it makes sense to start now, not in six months.
        </p>
      </div>

      {/* What is ChatGPT Shopping */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-6">
          What ChatGPT Shopping Is
        </h2>
        <p className="text-clr_pra leading-relaxed mb-6">
          ChatGPT Shopping is not an ad platform. It&apos;s a search and
          comparison layer inside ChatGPT that shows products{" "}
          <strong className="text-white">organically</strong> &mdash; with no
          paid placements. When a user types something like &quot;I need a quiet
          cordless vacuum for a small apartment under €300,&quot; ChatGPT does
          three things:
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
            In March 2026 OpenAI acknowledged that their original attempt to put
            the transaction itself inside ChatGPT (<em>Instant Checkout</em>)
            didn&apos;t work &mdash; Walmart measured that in-ChatGPT conversion
            was <strong className="text-white">3× lower</strong> than on their
            own site. So OpenAI pivoted: ChatGPT handles{" "}
            <strong className="text-white">discovery and comparison</strong>,
            the click and payment happen on the merchant&apos;s website. Good
            news &mdash; ChatGPT sends the retailer qualified traffic, not a
            low-margin transaction.
          </p>
        </div>
      </section>

      {/* Why it matters */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">
          Why This Matters Even for Small Online Stores
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
          How It Works Technically &mdash; Agentic Commerce Protocol (ACP)
        </h2>
        <p className="text-clr_pra leading-relaxed mb-6">
          ACP is an open standard OpenAI develops together with Stripe. It&apos;s
          an interface between the merchant&apos;s store and the AI agent.
          Instead of ChatGPT crawling your page like a user, it receives
          structured data directly through ACP: complete product feed, current
          promotions, availability, and attributes.
        </p>
        <div className="bg-[rgb(30,30,30)] rounded-xl p-6 mb-6">
          <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
            <ShieldCheck className="text-clr_base" />
            ACP does not take over your checkout
          </h3>
          <p className="text-sm text-clr_pra leading-relaxed">
            Orders, payments, logistics, and customer data stay in your system.
            ACP is just a layer that ensures ChatGPT sees your products with the
            same detail and currency as visitors do.
          </p>
        </div>
        <h3 className="text-xl text-white font-semibold mb-4">
          Three ways to get onto ACP
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
          What an E-commerce Site Must Do to Appear
        </h2>
        <p className="text-clr_pra mb-6 leading-relaxed">
          Even without formal ACP integration, there&apos;s a baseline level of
          optimization that increases the chance that ChatGPT finds your
          products. These steps make sense for every online store, regardless of
          size.
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
          What the Data Actually Shows
        </h2>
        <p className="text-clr_pra mb-6 leading-relaxed">
          Sources: OpenAI, Erlin, Walmart, Stripe &mdash; 2026.
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
          Common Myths
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
          Step by Step &mdash; How to Start
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
            When It Makes Sense and When to Wait
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-clr_base">
                <CheckCircleFill />
                Worth doing now
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
                Can wait
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
          Summary
        </h2>
        <p className="text-clr_pra leading-relaxed mb-4">
          ChatGPT Shopping is not an add-on to SEO. It&apos;s a new distribution
          layer where visibility is decided by{" "}
          <strong className="text-white">
            clean data, complete attributes, third-party reviews, and a fast
            website
          </strong>
          . Whoever gets these basics right in 2026 gains a lead that will be
          hard to catch up with in 2027.
        </p>
        <p className="text-clr_pra leading-relaxed">
          For most small and mid-sized e-commerce stores, the right move today
          is auditing product data and structure, not waiting for the perfect
          ACP integration. The basics can be done in a month.
        </p>
      </section>

      {/* CTA */}
      <section
        className="text-center mb-12"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Need Help with ChatGPT Shopping Integration?
        </h2>
        <p className="text-clr_pra mb-8 max-w-xl mx-auto">
          Write to me. I&apos;ll audit your product catalog, Schema.org
          structure, and recommend the fastest path to visibility in ChatGPT.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={serviceHref}
            className="inline-flex items-center gap-2 px-8 py-4 bg-clr_base text-clr_title rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            I Want a ChatGPT Shopping Audit
            <ArrowRight />
          </Link>
          <Link
            href="/en/all-blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[rgb(30,30,30)] text-white rounded-full font-medium hover:bg-[rgb(40,40,40)] transition-colors"
          >
            All Articles
            <Cart4 />
          </Link>
        </div>
      </section>

      {/* Related articles */}
      <section data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-xl text-white font-semibold mb-4">
          Related Articles
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
              How to Improve Your Website SEO
            </p>
          </Link>
          <Link
            href={chatbotHref}
            className="bg-[rgb(30,30,30)] rounded-xl p-5 hover:bg-[rgb(40,40,40)] transition-colors"
          >
            <span className="text-xs text-clr_base uppercase tracking-wide">
              AI
            </span>
            <p className="text-white font-medium mt-2">
              AI Chatbot for Business
            </p>
          </Link>
          <Link
            href={costHref}
            className="bg-[rgb(30,30,30)] rounded-xl p-5 hover:bg-[rgb(40,40,40)] transition-colors"
          >
            <span className="text-xs text-clr_base uppercase tracking-wide">
              Pricing
            </span>
            <p className="text-white font-medium mt-2">
              How Much Does a Website Cost in 2026
            </p>
          </Link>
        </div>
      </section>
    </article>
  );
};

export default ChatgptShoppingArticle;

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
    aspect: "Loading Speed",
    icon: LightningChargeFill,
    wordpress: { good: false, text: "Slower \u2014 many plugins, heavy themes" },
    modern: { good: true, text: "Lightning fast \u2014 static pages, CDN" },
  },
  {
    aspect: "Security",
    icon: ShieldFill,
    wordpress: { good: false, text: "Frequent attacks, regular updates required" },
    modern: { good: true, text: "Minimal attack surface, no database" },
  },
  {
    aspect: "SEO",
    icon: Search,
    wordpress: { good: false, text: "Good with plugins (Yoast, RankMath)" },
    modern: { good: true, text: "Excellent native \u2014 speed, metadata, Core Web Vitals" },
  },
  {
    aspect: "Operating Cost",
    icon: HddFill,
    wordpress: { good: false, text: "Hosting \u20AC5\u201320/mo + premium plugins" },
    modern: { good: true, text: "Often free or \u20AC0\u20135/mo (Vercel, Netlify)" },
  },
  {
    aspect: "Ease of Editing",
    icon: GearFill,
    wordpress: { good: true, text: "Yes \u2014 admin panel, visual editor" },
    modern: { good: false, text: "Through CMS or developer" },
  },
  {
    aspect: "Design",
    icon: PaletteFill,
    wordpress: { good: false, text: "Templates \u2014 limited, generic look" },
    modern: { good: true, text: "No limits \u2014 custom design to order" },
  },
  {
    aspect: "Scalability",
    icon: GraphUpArrow,
    wordpress: { good: false, text: "Limited \u2014 slows down with growth" },
    modern: { good: true, text: "Excellent \u2014 global CDN, edge computing" },
  },
];

const wordpressUseCases = [
  {
    title: "Bloggers and Content Creators",
    description:
      "If you write dozens of articles per week and need a simple way to manage content without a developer.",
  },
  {
    title: "DIY Projects with Minimal Budget",
    description:
      "If you want to build a website yourself for a few euros per month and don\u2019t need outstanding performance.",
  },
  {
    title: "Large Content Websites",
    description:
      "Managing thousands of articles with multiple authors, where the WordPress plugin ecosystem is irreplaceable.",
  },
  {
    title: "E-commerce on WooCommerce",
    description:
      "If you already have a running WooCommerce store and migration would be too costly.",
  },
];

const modernWebUseCases = [
  {
    title: "Small Business That Values Speed and SEO",
    description:
      "When you need customers to find you on Google and your website to load instantly.",
  },
  {
    title: "Companies That Value Their Brand",
    description:
      "A unique custom design that sets you apart from competitors using identical WordPress templates.",
  },
  {
    title: "Entrepreneurs Who Don\u2019t Want to Deal with Maintenance",
    description:
      "No plugin updates, no security patches, no crashing pages.",
  },
  {
    title: "Professionals and Freelancers",
    description:
      "A portfolio, landing page, or corporate presentation that makes a professional impression.",
  },
];

const recommendationPoints = [
  "Fast loading = better Google rankings",
  "Minimal maintenance = fewer worries and costs",
  "Security without constant updates",
  "Custom design that sets you apart from competitors",
  "Lower operating costs (hosting is often free)",
  "Better Core Web Vitals = better SEO",
];

const caseStudies = [
  {
    icon: Scissors,
    iconBg: "bg-pink-500/10",
    iconColor: "text-pink-500",
    title: "Hair Salon in Bratislava",
    text: (
      <>
        A small salon had a WordPress website that loaded in{" "}
        <strong className="text-white">4.2 seconds</strong> and was hacked
        twice. After switching to a modern website, loading time dropped to{" "}
        <strong className="text-white">0.8 seconds</strong>, security issues
        disappeared completely, and thanks to improved Core Web Vitals, their
        Google ranking improved significantly. New clients from the internet
        increased by a third.
      </>
    ),
  },
  {
    icon: RocketTakeoff,
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
    title: "IT Startup in Kosice",
    text: (
      <>
        A team of young developers first tried WordPress but quickly hit
        limitations &mdash; templates couldn&apos;t provide the{" "}
        <strong className="text-white">unique, pixel-perfect design</strong>{" "}
        needed for their brand. Switching to a modern React website gave them
        full control over every detail. A lightning-fast page with animations
        that impresses investors and clients. All with free hosting on Vercel.
      </>
    ),
  },
  {
    icon: Cup,
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-500",
    title: "Restaurant in Zilina",
    text: (
      <>
        A family restaurant had WordPress with{" "}
        <strong className="text-white">12 plugins</strong> &mdash; contact form,
        gallery, maps, booking system, and more. Every month something stopped
        working after an update. After migration to a modern website &mdash;{" "}
        <strong className="text-white">zero plugins, zero maintenance</strong>.
        Everything is built right into the code, works reliably, and the owner
        can finally focus on what he does best.
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
            February 12, 2026
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="text-xs" />
            7 min read
          </span>
          <span className="inline-flex items-center gap-1.5">
            <PersonFill className="text-xs" />
            Vladislav Khvorov
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6 leading-tight">
          WordPress vs Modern Website &mdash;{" "}
          <span className="text-clr_base">
            What&apos;s Better for Small Business?
          </span>
        </h1>

        <p className="text-lg text-clr_pra leading-relaxed mb-4">
          The eternal question &mdash; WordPress or something modern? If
          you&apos;re currently thinking about a new website or looking for the
          best solution for your business, this article is for you. We&apos;ll
          compare both options objectively &mdash; without bias, with facts and
          figures.
        </p>
        <p className="text-base text-clr_pra leading-relaxed">
          WordPress dominates the web &mdash; by estimates,{" "}
          <strong className="text-white">
            about 43% of all websites in the world run on WordPress
          </strong>
          . However, what&apos;s quick to deploy isn&apos;t necessarily quick to
          load. And that&apos;s exactly where the modern web comes in, which is
          still used by only a small percentage of companies &mdash; but those
          who switched aren&apos;t going back.
        </p>
      </div>

      {/* ------------------------------------------------------------ */}
      {/*  What Is WordPress?                                          */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-6">
          What Is WordPress?
        </h2>
        <div className="bg-[rgb(30,30,30)] rounded-xl p-6 md:p-8 space-y-4">
          <p className="text-clr_pra leading-relaxed">
            WordPress is an open-source content management system (CMS) that
            appeared in 2003.{" "}
            <strong className="text-white">
              Approximately 43% of all websites
            </strong>{" "}
            on the internet run on it &mdash; from simple blogs to large online
            stores.
          </p>
          <p className="text-clr_pra leading-relaxed">
            Its strength lies in its massive ecosystem &mdash; thousands of
            themes and plugins that allow you to add virtually any functionality
            without programming. A WordPress website can be created even without
            technical knowledge.
          </p>
          <p className="text-clr_pra leading-relaxed">
            On the other hand, WordPress&apos;s popularity makes it the most
            frequent target for hackers. And the more plugins you add, the slower
            and more unstable the website becomes.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  What Is a Modern Website?                                   */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-6">
          What Is a Modern Website?
        </h2>
        <div className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-6 md:p-8 space-y-4">
          <p className="text-clr_pra leading-relaxed">
            A modern website uses technologies like{" "}
            <strong className="text-white">React, Next.js, Astro</strong> and
            the Jamstack approach. Instead of the server generating each page on
            every visit, a modern website pre-generates pages as static HTML
            files.
          </p>
          <p className="text-clr_pra leading-relaxed">
            The result? Lightning-fast loading, better SEO, minimal security
            risks, and hosting that is often completely free. For content
            management, a headless CMS provides a convenient admin panel without
            slowing down the website.
          </p>
          <p className="text-clr_pra leading-relaxed">
            A modern website is like a custom-built car &mdash; tailored exactly
            to your needs, without unnecessary weight. WordPress is like a used
            car from a dealer &mdash; it works, but it doesn&apos;t suit
            everyone.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  Comparison Table                                            */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">
          Comparison: WordPress vs Modern Website
        </h2>

        {/* Desktop header */}
        <div className="hidden md:grid md:grid-cols-[1fr_1fr_1fr] gap-4 mb-4 px-4">
          <span className="text-sm font-semibold text-clr_pra uppercase tracking-wide">
            Aspect
          </span>
          <span className="text-sm font-semibold text-clr_pra uppercase tracking-wide text-center">
            WordPress
          </span>
          <span className="text-sm font-semibold text-clr_pra uppercase tracking-wide text-center">
            Modern Website
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
                      <strong className="text-white">Modern:</strong>{" "}
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
      {/*  Real-World Experience                                       */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Real-World Experience
        </h2>
        <p className="text-clr_pra mb-8">
          Numbers and comparisons are great, but the differences are best seen in
          real examples:
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
      {/*  Who Is WordPress For?                                       */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-6">
          Who Is WordPress For?
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
      {/*  Who Is a Modern Website For?                                */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-6">
          Who Is a Modern Website For?
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
      {/*  Our Recommendation                                         */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-6">
          Our Recommendation
        </h2>
        <div className="bg-[rgb(30,30,30)] rounded-2xl p-8 md:p-12">
          <p className="text-lg text-clr_pra leading-relaxed mb-6">
            For most small businesses,{" "}
            <strong className="text-clr_base">
              a modern website is clearly the better investment
            </strong>
            . Here&apos;s why:
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
            WordPress still has its place &mdash; mainly for large content
            websites and bloggers. But if you&apos;re a small business, sole
            proprietor, or professional who needs a fast, secure, and
            professional-looking website, modern technologies are the obvious
            choice.
          </p>
          <p className="text-clr_pra leading-relaxed mb-4">
            Specific numbers: a small business typically invests{" "}
            <strong className="text-clr_base">
              &euro;300 &ndash; &euro;1,000
            </strong>{" "}
            in a website. With WordPress, add &euro;5&ndash;20/mo for hosting,
            &euro;50&ndash;100/year for premium plugins, and hours for updates.
            With a modern website, operating costs are virtually zero &mdash;
            hosting on Vercel is free, no plugins, no security patches.
          </p>
          <p className="text-clr_pra leading-relaxed">
            The ROI for a modern website is simply better &mdash; you pay less
            for maintenance and earn more thanks to better visibility on Google.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  Migration from WordPress                                    */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-6">
          Migration from WordPress
        </h2>
        <div className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-6 md:p-8">
          <div className="flex items-start gap-4">
            <span className="w-10 h-10 bg-clr_base/10 rounded-xl flex items-center justify-center shrink-0 mt-1">
              <ArrowRepeat className="text-clr_base" />
            </span>
            <div className="space-y-4">
              <p className="text-clr_pra leading-relaxed">
                Already have WordPress and considering a switch? Good news
                &mdash; migration is{" "}
                <strong className="text-white">easier than you think</strong>.
                Your existing content &mdash; texts, images, page structure
                &mdash; can be fully transferred to the new solution.
              </p>
              <p className="text-clr_pra leading-relaxed">
                As for SEO, your Google rankings will be preserved. With{" "}
                <strong className="text-white">
                  properly configured 301 redirects
                </strong>
                , all existing URLs will be redirected to new ones, so neither
                Google nor visitors will notice any disruption.
              </p>
              <p className="text-clr_pra leading-relaxed">
                The entire migration process usually takes{" "}
                <strong className="text-white">1&ndash;2 weeks</strong>{" "}
                depending on the site size. Throughout the process, your original
                WordPress site works normally &mdash; the switch happens only
                when the new site is fully ready and tested.
              </p>
            </div>
          </div>
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
              How Much Does a Website Cost? <ArrowRight />
            </Link>
            <Link
              href="/blog/website-for-entrepreneurs"
              className="inline-flex items-center gap-2 text-clr_base hover:underline text-sm"
            >
              Website for Entrepreneurs <ArrowRight />
            </Link>
            <Link
              href="/blog/improve-website-seo"
              className="inline-flex items-center gap-2 text-clr_base hover:underline text-sm"
            >
              How to Improve SEO <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  CTA                                                         */}
      {/* ------------------------------------------------------------ */}
      <section className="text-center" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Want a Modern Website for Your Business?
        </h2>
        <p className="text-clr_pra mb-8 max-w-xl mx-auto">
          Write to me, and together we&apos;ll find the best solution for your
          company. Free consultation, non-binding offer within 24 hours.
        </p>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-clr_base text-clr_title rounded-full font-medium hover:opacity-90 transition-opacity"
        >
          I Want a Modern Website
          <ArrowRight />
        </Link>
      </section>
    </article>
  );
};

export default WordpressVsModernArticle;

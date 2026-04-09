"use client";

import React from "react";
import Link from "next/link";
import {
  FileText,
  LightningChargeFill,
  PhoneFill,
  PenFill,
  GeoAltFill,
  Link45deg,
  TypeH1,
  ImageFill,
  CodeSlash,
  BarChartFill,
  CheckCircleFill,
  XCircleFill,
  Calendar3,
  Clock,
  Person,
  ArrowRight,
} from "react-bootstrap-icons";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const tips = [
  {
    number: "01",
    icon: FileText,
    title: "Optimize Title Tags and Meta Descriptions",
    content: (
      <>
        <p className="text-clr_pra leading-relaxed mb-4">
          The title tag is the first thing Google (and people) see in search
          results. The meta description is the short text below the heading that
          determines whether someone clicks on your link. These two elements work
          as your &quot;storefront&quot; in Google &mdash; if they&apos;re not
          attractive and relevant, people will simply click on competitors. A
          well-written title tag and meta description can increase click-through
          rate (CTR) by 30-50%, which directly affects your traffic.
        </p>
        <p className="text-clr_pra leading-relaxed mb-4">
          <strong className="text-white">How to do it:</strong> The title tag
          should be 50-60 characters and contain the main keyword. The meta
          description should be 150-160 characters and motivate the click. Always
          include the city or region name if you provide local services.
        </p>
        <div className="bg-[rgb(20,20,20)] rounded-xl p-4 text-sm">
          <p className="text-clr_pra mb-1">
            <strong className="text-white">Title tag example:</strong>
          </p>
          <p className="text-clr_base font-medium mb-3">
            &quot;Website Design Bratislava | Modern Websites from
            &euro;390&quot;
          </p>
          <p className="text-clr_pra mb-1">
            <strong className="text-white">Meta description example:</strong>
          </p>
          <p className="text-clr_base font-medium">
            &quot;Professional website creation for companies and entrepreneurs.
            Fast, modern, and SEO-optimized websites. Ready in 5 days.&quot;
          </p>
        </div>
      </>
    ),
  },
  {
    number: "02",
    icon: LightningChargeFill,
    title: "Ensure Fast Website Loading",
    content: (
      <>
        <p className="text-clr_pra leading-relaxed mb-4">
          Website speed is one of the most important ranking factors in Google. A
          slow website loses visitors &mdash; 53% of mobile users leave a page if
          it doesn&apos;t load within 3 seconds. Since 2021, the so-called Core
          Web Vitals (LCP, FID, CLS) are an official Google ranking factor.
        </p>
        <p className="text-clr_pra leading-relaxed mb-4">
          <strong className="text-white">What you can do:</strong> Start by
          testing your website with{" "}
          <strong className="text-white">Google PageSpeed Insights</strong> and{" "}
          <strong className="text-white">GTmetrix</strong>. The goal is to
          achieve a score of 90+ on mobile devices.
        </p>
        <ul className="space-y-2 text-clr_pra">
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            Test your website with Google PageSpeed Insights &mdash; aim for 90+
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            Compress images and use modern formats (WebP, AVIF)
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            Minimize JavaScript and CSS &mdash; remove unused code
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            Use quality hosting with fast servers
          </li>
        </ul>
      </>
    ),
  },
  {
    number: "03",
    icon: PhoneFill,
    title: "Use Mobile-First Design",
    content: (
      <>
        <p className="text-clr_pra leading-relaxed mb-4">
          Google uses{" "}
          <strong className="text-white">mobile-first indexing</strong> &mdash;
          this means it evaluates your website primarily based on its mobile
          version. If your website performs poorly on mobile devices, you&apos;ll
          lose rankings on desktop as well.
        </p>
        <p className="text-clr_pra leading-relaxed mb-4">
          Over 60% of all website visits come from mobile devices. Responsive
          design is not a luxury &mdash; it&apos;s a necessity.
        </p>
        <p className="text-clr_pra leading-relaxed">
          <strong className="text-white">Tip:</strong> Test your website with{" "}
          <strong className="text-white">Google Mobile-Friendly Test</strong>{" "}
          and check that texts are readable without zooming, buttons are large
          enough, and the layout is adapted for small screens.
        </p>
      </>
    ),
  },
  {
    number: "04",
    icon: PenFill,
    title: "Create Quality Content",
    content: (
      <>
        <p className="text-clr_pra leading-relaxed mb-4">
          Google aims to show users the best answer to their question. If your
          content answers the real questions of your customers, Google will reward
          it with a higher position.
        </p>
        <p className="text-clr_pra leading-relaxed mb-4">
          <strong className="text-white">
            Write for people, not robots.
          </strong>{" "}
          Instead of repeating keywords, focus on:
        </p>
        <ul className="space-y-2 text-clr_pra">
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            Answering specific questions from your customers
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            Clear structure with headings and lists
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            Updating content &mdash; outdated information drops in rankings
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            Unique content &mdash; don&apos;t copy texts from other websites
          </li>
        </ul>
      </>
    ),
  },
  {
    number: "05",
    icon: GeoAltFill,
    title: "Set Up Your Google Business Profile",
    content: (
      <>
        <p className="text-clr_pra leading-relaxed mb-4">
          For local businesses,{" "}
          <strong className="text-white">Google Business Profile</strong>{" "}
          (formerly Google My Business) is one of the most important SEO tools.
          A 100% completed profile has 7 times more chances of getting clicks
          than an incomplete profile. Moreover, it appears in Google Maps, which
          is critical for local business.
        </p>
        <p className="text-clr_pra leading-relaxed mb-4">
          <strong className="text-white">Complete your profile fully:</strong>{" "}
          Add exact business hours including holidays, a description of your
          services, and business categories. Actively respond to reviews. Add
          posts at least once a week &mdash; companies that regularly post receive
          on average 42% more route requests and 35% more website clicks.
        </p>
        <ul className="space-y-2 text-clr_pra">
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            Accurate address, phone, business hours, and website
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            Quality photos of your business (exterior, interior, products)
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            Actively collect reviews from satisfied customers
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            Regularly add posts and news
          </li>
        </ul>
      </>
    ),
  },
  {
    number: "06",
    icon: Link45deg,
    title: "Get Backlinks",
    content: (
      <>
        <p className="text-clr_pra leading-relaxed mb-4">
          Backlinks are links from other websites to yours. Google considers them
          as &quot;votes of trust&quot; &mdash; the more quality links you have,
          the higher you&apos;ll rank in search results.
        </p>
        <p className="text-clr_pra leading-relaxed mb-4">
          <strong className="text-white">
            Quality matters more than quantity.
          </strong>{" "}
          One link from an authoritative website is worth more than 100 links from
          spam pages.
        </p>
        <ul className="space-y-2 text-clr_pra">
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            Local business directories and listings
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            Websites of partners and suppliers
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            Industry associations and organizations
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            Guest posts &mdash; write articles for other websites in your industry
          </li>
        </ul>
      </>
    ),
  },
  {
    number: "07",
    icon: TypeH1,
    title: "Use Proper Headings (H1-H6)",
    content: (
      <>
        <p className="text-clr_pra leading-relaxed mb-4">
          Headings help Google understand the structure of your content. A proper
          heading hierarchy is like a table of contents that allows quick
          navigation.
        </p>
        <ul className="space-y-2 text-clr_pra">
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            <span>
              <strong className="text-white">One H1 per page</strong> &mdash;
              the main heading, containing the primary keyword
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            <span>
              <strong className="text-white">H2 for main sections</strong>{" "}
              &mdash; divide content into logical blocks
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            <span>
              <strong className="text-white">H3-H6 for subsections</strong>{" "}
              &mdash; maintain the hierarchy (don&apos;t skip from H2 to H4)
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            Insert keywords naturally &mdash; don&apos;t write headings only for
            Google
          </li>
        </ul>
      </>
    ),
  },
  {
    number: "08",
    icon: ImageFill,
    title: "Optimize Images",
    content: (
      <>
        <p className="text-clr_pra leading-relaxed mb-4">
          Images often make up 50-80% of a web page&apos;s size. Unoptimized
          images are the most common cause of slow loading and poor SEO scores.
        </p>
        <ul className="space-y-2 text-clr_pra">
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            <span>
              <strong className="text-white">Alt texts</strong> &mdash; every
              image should have a descriptive alt text
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            <span>
              <strong className="text-white">Compression</strong> &mdash; reduce
              file size without visible quality loss (TinyPNG, Squoosh)
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            <span>
              <strong className="text-white">Proper formats</strong> &mdash;
              WebP and AVIF are 30-50% smaller than JPEG
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            <span>
              <strong className="text-white">Lazy loading</strong> &mdash; load
              images below the visible area only when scrolling
            </span>
          </li>
        </ul>
      </>
    ),
  },
  {
    number: "09",
    icon: CodeSlash,
    title: "Add Schema Markup (Structured Data)",
    content: (
      <>
        <p className="text-clr_pra leading-relaxed mb-4">
          Schema markup is special code that helps Google better understand your
          page&apos;s content. Thanks to it, you can get{" "}
          <strong className="text-white">rich snippets</strong> &mdash; enhanced
          search results with stars, prices, or FAQs that significantly increase
          visibility and click-through rates.
        </p>
        <p className="text-clr_pra leading-relaxed mb-4">
          <strong className="text-white">Most useful Schema types:</strong>
        </p>
        <ul className="space-y-2 text-clr_pra">
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            <span>
              <strong className="text-white">LocalBusiness</strong> &mdash; for
              local businesses (address, hours, contacts)
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            <span>
              <strong className="text-white">FAQ Schema</strong> &mdash;
              questions and answers displayed directly in search results
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            <span>
              <strong className="text-white">Product / Service</strong> &mdash;
              for products and services with prices and ratings
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            <span>
              <strong className="text-white">BlogPosting</strong> &mdash; for
              articles and blog posts
            </span>
          </li>
        </ul>
      </>
    ),
  },
  {
    number: "10",
    icon: BarChartFill,
    title: "Track Results and Adjust Your Strategy",
    content: (
      <>
        <p className="text-clr_pra leading-relaxed mb-4">
          SEO without measurement is like driving without a speedometer. You need
          to know what works and what doesn&apos;t.
        </p>
        <p className="text-clr_pra leading-relaxed mb-4">
          <strong className="text-white">Essential tools (free):</strong>
        </p>
        <ul className="space-y-2 text-clr_pra mb-4">
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            <span>
              <strong className="text-white">Google Search Console</strong>{" "}
              &mdash; rankings, indexing, technical errors
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            <span>
              <strong className="text-white">Google Analytics</strong> &mdash;
              traffic, user behavior, conversions
            </span>
          </li>
        </ul>
        <p className="text-clr_pra leading-relaxed">
          <strong className="text-white">What to track:</strong> keyword
          rankings, organic traffic, bounce rate, number and quality of
          backlinks, and most importantly &mdash; conversions: how many visitors
          become customers.
        </p>
      </>
    ),
  },
];

const myths = [
  {
    title: "SEO is not a one-time effort",
    description:
      "Many companies think that SEO needs to be done once and forgotten. The reality is different \u2014 SEO is an ongoing process. Google constantly changes algorithms, competitors improve, and content needs regular updating.",
  },
  {
    title: "SEO is not just about keywords",
    description:
      "Keywords are important, but they\u2019re just one piece of the puzzle. Google also evaluates website speed, mobile optimization, page structure, content quality, and user experience (UX).",
  },
  {
    title: "SEO results won\u2019t appear in a week",
    description:
      "SEO is a marathon, not a sprint. A realistic timeframe is 3-6 months for visible results. Local SEO in less competitive areas can bring results faster, but even then we\u2019re talking about weeks, not days.",
  },
];

const checklist = [
  { bold: "Title tag", text: "contains the main keyword + city" },
  { bold: "Meta description", text: "is written for people, not robots" },
  { bold: null, text: "Website loads in under 3 seconds on both mobile and desktop" },
  { bold: null, text: "Website is fully responsive and works on all devices" },
  { bold: "Google Business Profile", text: "is 100% complete" },
  { bold: null, text: "Every page has a unique H1 heading with a keyword" },
  { bold: null, text: "Images have alt texts filled in and are compressed" },
  { bold: "SSL certificate", text: "(HTTPS) installed \u2014 without it, Google marks the site as insecure" },
  { bold: "Google Search Console", text: "registered with no critical errors" },
  { bold: "Schema markup", text: "is implemented (at minimum LocalBusiness or FAQ)" },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

const SeoArticle = () => {
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
            9 min read
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Person className="text-xs" />
            Vladislav Khvorov
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6 leading-tight">
          How to Improve Your Website SEO &mdash;{" "}
          <span className="text-clr_base">10 Practical Tips</span>
        </h1>

        <p className="text-lg text-clr_pra leading-relaxed mb-6">
          SEO doesn&apos;t have to be complicated. There are specific steps you
          can take today to help your website rank higher on Google. In this
          article, I&apos;ll show you 10 practical tips for website optimization
          that work for small businesses and entrepreneurs. No technical jargon
          &mdash; just clear recommendations that deliver results.
        </p>

        <p className="text-base text-clr_pra leading-relaxed">
          SEO (Search Engine Optimization) is a set of techniques that help your
          website rank higher in Google results. It&apos;s not magic and it&apos;s
          not a trick &mdash; it&apos;s systematic work to make your website fast,
          relevant, and authoritative. Local SEO is especially important because
          most of your customers search for services in their city.
        </p>
      </div>

      {/* ------------------------------------------------------------ */}
      {/*  10 SEO Tips                                                 */}
      {/* ------------------------------------------------------------ */}
      <div className="space-y-6 mb-16">
        {tips.map((tip) => (
          <section
            key={tip.number}
            className="bg-[rgb(30,30,30)] rounded-xl p-6 md:p-8"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="flex items-start gap-4 mb-4">
              <span className="w-12 h-12 bg-clr_base/10 rounded-xl flex items-center justify-center shrink-0">
                <tip.icon className="text-clr_base text-xl" />
              </span>
              <div>
                <span className="text-sm font-bold text-clr_base">
                  {tip.number}
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  {tip.title}
                </h2>
              </div>
            </div>
            {tip.content}
          </section>
        ))}
      </div>

      {/* ------------------------------------------------------------ */}
      {/*  Bonus: What SEO Is NOT                                      */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">
          Bonus: What SEO Is NOT
        </h2>

        <div className="bg-[rgb(30,30,30)] rounded-2xl p-8 md:p-12">
          <p className="text-clr_pra mb-6">
            Besides knowing what to do, it&apos;s important to know the common
            myths about SEO:
          </p>
          <div className="space-y-6">
            {myths.map((myth) => (
              <div key={myth.title} className="flex items-start gap-4">
                <XCircleFill className="text-red-500 text-lg shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {myth.title}
                  </h3>
                  <p className="text-clr_pra text-sm leading-relaxed">
                    {myth.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  SEO Checklist                                               */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">
          SEO Checklist for Small Business
        </h2>

        <div className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-8 md:p-12">
          <p className="text-clr_pra mb-6 leading-relaxed">
            Here is a brief overview of the most important things every small
            business website should have. Use this list as a checklist:
          </p>
          <ul className="space-y-4 text-clr_pra">
            {checklist.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
                <span>
                  {item.bold && (
                    <strong className="text-white">{item.bold} </strong>
                  )}
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  CTA                                                         */}
      {/* ------------------------------------------------------------ */}
      <section
        className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-8 md:p-12 text-center"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Need Help with SEO?
        </h2>
        <p className="text-clr_pra mb-8 max-w-xl mx-auto">
          If you don&apos;t want to handle SEO yourself, I&apos;m happy to help.
          I&apos;ll conduct an SEO audit of your website, propose a strategy, and
          implement changes that deliver results.
        </p>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-clr_base text-clr_title rounded-full font-medium hover:opacity-90 transition-opacity"
        >
          I Want an SEO Consultation
          <ArrowRight />
        </Link>
      </section>
    </article>
  );
};

export default SeoArticle;

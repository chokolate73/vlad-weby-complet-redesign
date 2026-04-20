"use client";

import React from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import {
  CheckCircleFill,
  ArrowRight,
  StarFill,
  PersonCheckFill,
  ChatDotsFill,
} from "react-bootstrap-icons";
import { localePath } from "@/lib/localizedPaths";

const ServicePage = ({ serviceKey }) => {
  const t = useTranslations(`servicePages.${serviceKey}`);
  const c = useTranslations("servicePages.common");
  const locale = useLocale();
  const contactHref = localePath('/contact', locale);
  const allServicesHref = localePath('/all-services', locale);

  const included = t.raw("included");
  const plans = t.raw("plans");
  const audience = t.raw("audience");
  const faqs = t.raw("faqs");

  return (
    <article className="pb_120">
      {/* Hero */}
      <section
        className="container pt_120 pb_120"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="max-w-[860px] mx-auto text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-bold mb-6 leading-tight">
            {t("heroTitle")}{" "}
            <span className="text-clr_base">{t("heroHighlight")}</span>
          </h1>
          <p className="text-lg md:text-xl text-clr_pra leading-relaxed mb-10">
            {t("heroSubtitle")}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href={contactHref}
              className="inline-flex items-center gap-2 px-8 py-4 bg-clr_base text-clr_title rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              {t("heroCta")}
              <ArrowRight />
            </Link>
            <Link
              href={allServicesHref}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white hover:border-clr_base hover:text-clr_base transition-colors"
            >
              {c("secondaryCta")}
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section
        className="container pb_120"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-2xl md:text-4xl text-white font-bold mb-12 text-center">
            {c("includedTitle")}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {included.map((item, i) => (
              <div
                key={i}
                className="bg-[rgb(30,30,30)] rounded-xl p-5 flex items-start gap-3"
              >
                <CheckCircleFill className="text-clr_base text-lg shrink-0 mt-1" />
                <span className="text-clr_pra leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        className="container pb_120"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-2xl md:text-4xl text-white font-bold mb-12 text-center">
            {c("pricingTitle")}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-2xl p-8 flex flex-col ${
                  plan.highlight
                    ? "bg-clr_base/5 border-2 border-clr_base"
                    : "bg-[rgb(30,30,30)] border border-white/5"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 right-6 bg-clr_base text-clr_title text-xs font-bold uppercase px-3 py-1 rounded-full flex items-center gap-1">
                    <StarFill className="text-xs" />
                    {c("mostPopular")}
                  </span>
                )}
                <h3 className="text-xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-clr_base">
                    {plan.price}
                  </span>
                  <span className="text-sm text-clr_pra">{plan.period}</span>
                </div>
                <p className="text-clr_pra leading-relaxed mb-6">
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, k) => (
                    <li
                      key={k}
                      className="flex items-start gap-2 text-clr_pra"
                    >
                      <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={contactHref}
                  className={`mt-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-opacity ${
                    plan.highlight
                      ? "bg-clr_base text-clr_title hover:opacity-90"
                      : "border border-white/20 text-white hover:border-clr_base hover:text-clr_base"
                  }`}
                >
                  {t("heroCta")}
                  <ArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience */}
      <section
        className="container pb_120"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-2xl md:text-4xl text-white font-bold mb-12 text-center">
            {c("audienceTitle")}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {audience.map((item, i) => (
              <div
                key={i}
                className="bg-[rgb(30,30,30)] rounded-xl p-6 flex items-start gap-4"
              >
                <span className="w-10 h-10 bg-clr_base/10 rounded-xl flex items-center justify-center shrink-0">
                  <PersonCheckFill className="text-clr_base" />
                </span>
                <span className="text-clr_pra leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="container pb_120"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="max-w-[860px] mx-auto">
          <h2 className="text-2xl md:text-4xl text-white font-bold mb-12 text-center">
            {c("faqTitle")}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-[rgb(30,30,30)] rounded-xl p-6 open:bg-[rgb(35,35,35)]"
              >
                <summary className="flex items-start gap-3 cursor-pointer text-white font-semibold text-lg list-none">
                  <ChatDotsFill className="text-clr_base shrink-0 mt-1" />
                  <span className="flex-1">{faq.q}</span>
                  <span className="text-clr_base text-2xl leading-none transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="text-clr_pra leading-relaxed mt-4 pl-8">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="container"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="max-w-[900px] mx-auto bg-clr_base/5 border border-clr_base/10 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-4xl text-white font-bold mb-4">
            {c("finalCtaTitle")}
          </h2>
          <p className="text-clr_pra mb-8 max-w-xl mx-auto leading-relaxed">
            {c("finalCtaDesc")}
          </p>
          <Link
            href={contactHref}
            className="inline-flex items-center gap-2 px-8 py-4 bg-clr_base text-clr_title rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            {c("finalCtaButton")}
            <ArrowRight />
          </Link>
        </div>
      </section>
    </article>
  );
};

export default ServicePage;

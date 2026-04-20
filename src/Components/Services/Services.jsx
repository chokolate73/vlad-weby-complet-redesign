'use client'
import React from "react";
import Service from "./Service";
import PageHeader from "../Shared/PageHeader";
import { useTranslations, useLocale } from 'next-intl';
import { serviceUrl } from "@/lib/localizedPaths";

const serviceKeys = ['ai', 'chatgptShopping', 'speed', 'seo', 'direct', 'earn'];

const serviceKeyMap = {
  ai: 'ai-chatbot',
  chatgptShopping: 'chatgpt-shopping',
  seo: 'seo',
  earn: 'web-design',
};

const Services = ({ isHeading }) => {
  const t = useTranslations('services');
  const tPage = useTranslations('pages.allServices');
  const locale = useLocale();

  const serviceList = serviceKeys.map((key, index) => ({
    id: String(index + 1).padStart(2, '0'),
    heading: t(`items.${key}.heading`),
    subHeading: t(`items.${key}.subHeading`),
    para: t(`items.${key}.para`),
    href: serviceKeyMap[key] ? serviceUrl(serviceKeyMap[key], locale) : undefined,
  }));

  return (
    <section id="services" className="pb_120">
      {isHeading && (
        <PageHeader heading={tPage('heading')} page={tPage('page')} />
      )}
      <div className="container">
        <div>
          {serviceList.map(({ id, heading, subHeading, para, href }) => (
            <Service
              key={id}
              id={id}
              heading={heading}
              subHeading={subHeading}
              para={para}
              href={href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

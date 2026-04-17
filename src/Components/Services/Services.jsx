'use client'
import React from "react";
import Service from "./Service";
import PageHeader from "../Shared/PageHeader";
import { useTranslations } from 'next-intl';

const serviceKeys = ['ai', 'languages', 'speed', 'seo', 'direct', 'earn'];

const Services = ({ isHeading }) => {
  const t = useTranslations('services');
  const tPage = useTranslations('pages.allServices');

  const serviceList = serviceKeys.map((key, index) => ({
    id: String(index + 1).padStart(2, '0'),
    heading: t(`items.${key}.heading`),
    subHeading: t(`items.${key}.subHeading`),
    para: t(`items.${key}.para`),
  }));

  return (
    <section id="services" className="pb_120">
      {isHeading && (
        <PageHeader heading={tPage('heading')} page={tPage('page')} />
      )}
      <div className="container">
        <div>
          {serviceList.map(({ id, heading, subHeading, para }) => (
            <Service
              key={id}
              id={id}
              heading={heading}
              subHeading={subHeading}
              para={para}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

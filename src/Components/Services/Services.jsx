'use client'
import React from "react";
import Service from "./Service";
import Title from "../Shared/Title";
import { useTranslations, useLocale } from 'next-intl';

const serviceKeys = ['ai', 'languages', 'speed', 'seo', 'direct', 'earn'];

const linkedServiceKeys = [
  { key: 'webDesign', slug: 'web-design' },
  { key: 'seo', slug: 'seo' },
  { key: 'aiChatbot', slug: 'ai-chatbot' },
  { key: 'chatgptShopping', slug: 'chatgpt-shopping' },
];

const Services = ({ isHeading, variant = 'default' }) => {
  const t = useTranslations('services');
  const tService = useTranslations('servicePages');
  const locale = useLocale();

  const serviceList =
    variant === 'linked'
      ? linkedServiceKeys.map(({ key, slug }, index) => ({
          id: String(index + 1).padStart(2, '0'),
          heading: tService(`${key}.heroTitle`),
          subHeading: tService(`${key}.heroHighlight`),
          para: tService(`${key}.heroSubtitle`),
          href: `/${locale}/services/${slug}`,
        }))
      : serviceKeys.map((key, index) => ({
          id: String(index + 1).padStart(2, '0'),
          heading: t(`items.${key}.heading`),
          subHeading: t(`items.${key}.subHeading`),
          para: t(`items.${key}.para`),
        }));

  return (
    <section
      id="services"
      className={`${isHeading && "pt_120"}  pb_120`}
    >
      <div className="container">
        {isHeading && (
          <Title
            mainTitle={t('mainTitle')}
            sortTitle={t('sortTitle')}
          />
        )}

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

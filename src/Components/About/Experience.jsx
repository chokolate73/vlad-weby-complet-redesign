import React from "react";
import AboutCard from "./AboutCard";
import { useTranslations } from 'next-intl';

const Experience = ({ isTabActive }) => {
  const t = useTranslations('experience');

  return (
    <div
      className={`w-full duration-700 ${isTabActive === "experience" ? "z-10 opacity-100 translate-y-0" : "translate-y-20 -z-10 opacity-0 absolute  top-0 "} `}
    >
      <AboutCard
        title={t('title')}
        para={t('description')}
        info={[
          {
            date: t('items.lenovo.date'),
            position: t('items.lenovo.position'),
            instition: t('items.lenovo.role'),
          },
          {
            date: t('items.chatbot.date'),
            position: t('items.chatbot.position'),
            instition: t('items.chatbot.role'),
          },
          {
            date: t('items.freelance.date'),
            position: t('items.freelance.position'),
            instition: t('items.freelance.role'),
          },
          {
            date: t('items.founded.date'),
            position: t('items.founded.position'),
            instition: t('items.founded.role'),
          },
        ]}
      />
    </div>
  );
};

export default Experience;

import React from "react";
import AboutCard from "./AboutCard";
import { useTranslations } from 'next-intl';

const Education = ({ isTabActive }) => {
  const t = useTranslations('education');

  return (
    <div className={`w-full duration-700 ${isTabActive === "education" ? "z-10 opacity-100 translate-y-0" : "translate-y-20 -z-10 opacity-0 absolute  top-0 "} `}>
      <AboutCard
        title={t('title')}
        para={t('description')}
        info={[
          { date: "SK", position: "", instition: t('sk') },
          { date: "EN", position: "", instition: t('en') },
          { date: "DE", position: "", instition: t('de') },
          { date: "RU", position: "", instition: t('ru') },
        ]}
      />
    </div>
  );
};

export default Education;

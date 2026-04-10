'use client'
import React from "react";
import Price from "./Price";
import Title from "../Shared/Title";
import { useTranslations } from 'next-intl';

const planKeys = ['landing', 'multipage', 'ai'];

const Pricing = () => {
  const t = useTranslations('pricing');

  const planData = planKeys.map((key, index) => ({
    id: index + 1,
    planName: t(`plans.${key}.name`),
    price: t(`plans.${key}.price`),
    time: t(`plans.${key}.time`),
    fetcher: [
      t(`plans.${key}.features.f1`),
      t(`plans.${key}.features.f2`),
      t(`plans.${key}.features.f3`),
      t(`plans.${key}.features.f4`),
      t(`plans.${key}.features.f5`),
    ],
    image: ["/img/project/basic.png", "/img/project/warranty.png", "/img/project/premium-quality.png"][index],
  }));

  return (
    <section className="pt_120 pb_120">
      <div className="container">
        <Title
          mainTitle={t('mainTitle')}
          sortTitle={t('sortTitle')}
        />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 justify-center">
          {planData.map(({ id, image, planName, fetcher, price, time }) => (
            <Price
              key={id}
              image={image}
              planName={planName}
              price={price}
              time={time}
              fetcher={fetcher}
              id={id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

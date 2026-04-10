'use client'
import React from "react";
import Title from "../Shared/Title";
import WorkProcessCard from "./WorkProcessCard";
import { useTranslations } from 'next-intl';

const processKeys = ['pricing', 'changes', 'speed'];

const WorkeProcess = () => {
  const t = useTranslations('faqSection');

  const processList = processKeys.map((key, index) => ({
    id: index + 1,
    title: t(`items.${key}.title`),
    info: t(`items.${key}.info`),
    list: [
      t(`items.${key}.list1`),
      t(`items.${key}.list2`),
      t(`items.${key}.list3`),
    ],
  }));

  return (
    <section id="faq" className="bg-common_bg bg-center bg-no-repeat bg-cover rounded-[10px] overflow-hidden sm:p-[60px] py-[30px] px-[10px] pt_120 pb_120">
      <div className="container">
        <Title
          mainTitle={t('mainTitle')}
          sortTitle={t('sortTitle')}
        />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
          {processList.map(({ id, info, list, title }) => (
            <WorkProcessCard key={id} info={info} list={list} title={title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkeProcess;

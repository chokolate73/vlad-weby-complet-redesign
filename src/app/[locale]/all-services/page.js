'use client'
import React from "react";

import Services from "@/Components/Services/Services";
import Metting from "@/Components/Metting";
import WorkeProcess from "@/Components/WorkeProcess/WorkeProcess";
import PageHeader from "@/Components/Shared/PageHeader";
import { useTranslations } from 'next-intl';

const AllServices = () => {
  const t = useTranslations('pages.allServices');

  return (
    <>
      <PageHeader heading={t('heading')} page={t('page')} />
      <Services isHeading={false} />
      <Metting />
      <WorkeProcess />
    </>
  );
};

export default AllServices;

'use client'
import React from "react";
import ServicePage from "@/Components/ServicePages/ServicePage";
import PageHeader from "@/Components/Shared/PageHeader";
import { useTranslations } from 'next-intl';

const SeoServicePage = () => {
  const t = useTranslations('nav.servicesDropdown');

  return (
    <>
      <PageHeader heading={t('seo')} page={t('seo')} />
      <ServicePage serviceKey="seo" />
    </>
  );
};

export default SeoServicePage;

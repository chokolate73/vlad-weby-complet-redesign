'use client'
import React from "react";
import ServicePage from "@/Components/ServicePages/ServicePage";
import PageHeader from "@/Components/Shared/PageHeader";
import { useTranslations } from 'next-intl';

const WebDesignServicePage = () => {
  const t = useTranslations('nav.servicesDropdown');

  return (
    <>
      <PageHeader heading={t('webDesign')} page={t('webDesign')} />
      <ServicePage serviceKey="webDesign" />
    </>
  );
};

export default WebDesignServicePage;

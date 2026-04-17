'use client'
import React from "react";
import ServicePage from "@/Components/ServicePages/ServicePage";
import PageHeader from "@/Components/Shared/PageHeader";
import { useTranslations } from 'next-intl';

const AIChatbotServicePage = () => {
  const t = useTranslations('nav.servicesDropdown');

  return (
    <>
      <PageHeader heading={t('aiChatbot')} page={t('aiChatbot')} />
      <ServicePage serviceKey="aiChatbot" />
    </>
  );
};

export default AIChatbotServicePage;

'use client'
import React from "react";
import ServicePage from "@/Components/ServicePages/ServicePage";
import PageHeader from "@/Components/Shared/PageHeader";
import { useTranslations } from 'next-intl';

const ChatGPTShoppingServicePage = () => {
  const t = useTranslations('nav.servicesDropdown');

  return (
    <>
      <PageHeader heading={t('chatgptShopping')} page={t('chatgptShopping')} />
      <ServicePage serviceKey="chatgptShopping" />
    </>
  );
};

export default ChatGPTShoppingServicePage;

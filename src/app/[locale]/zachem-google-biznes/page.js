"use client";
import React from "react";
import PageHeader from "@/Components/Shared/PageHeader";
import ServicePage from "@/Components/ServicePages/ServicePage";

const ZachemGoogleBiznesPage = () => (
  <>
    <PageHeader
      heading="Зачем бизнесу Google профиль"
      page="Google профиль"
    />
    <ServicePage serviceKey="seo" />
  </>
);

export default ZachemGoogleBiznesPage;

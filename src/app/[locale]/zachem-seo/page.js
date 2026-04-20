"use client";
import React from "react";
import PageHeader from "@/Components/Shared/PageHeader";
import ServicePage from "@/Components/ServicePages/ServicePage";

const ZachemSeoPage = () => (
  <>
    <PageHeader heading="Зачем нужно SEO" page="Зачем SEO" />
    <ServicePage serviceKey="seo" />
  </>
);

export default ZachemSeoPage;

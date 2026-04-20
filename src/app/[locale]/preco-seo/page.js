"use client";
import React from "react";
import PageHeader from "@/Components/Shared/PageHeader";
import ServicePage from "@/Components/ServicePages/ServicePage";

const PrecoSeoPage = () => (
  <>
    <PageHeader heading="Prečo potrebujete SEO" page="Prečo SEO" />
    <ServicePage serviceKey="seo" />
  </>
);

export default PrecoSeoPage;

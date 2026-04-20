"use client";
import React from "react";
import PageHeader from "@/Components/Shared/PageHeader";
import ServicePage from "@/Components/ServicePages/ServicePage";

const WhyWebsitePage = () => (
  <>
    <PageHeader heading="Why Do You Need a Website" page="Why website" />
    <ServicePage serviceKey="webDesign" />
  </>
);

export default WhyWebsitePage;

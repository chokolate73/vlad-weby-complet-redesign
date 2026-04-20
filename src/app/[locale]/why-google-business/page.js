"use client";
import React from "react";
import PageHeader from "@/Components/Shared/PageHeader";
import ServicePage from "@/Components/ServicePages/ServicePage";

const WhyGoogleBusinessPage = () => (
  <>
    <PageHeader
      heading="Why Your Business Needs a Google Business Profile"
      page="Google Business"
    />
    <ServicePage serviceKey="seo" />
  </>
);

export default WhyGoogleBusinessPage;

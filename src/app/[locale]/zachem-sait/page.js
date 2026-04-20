"use client";
import React from "react";
import PageHeader from "@/Components/Shared/PageHeader";
import ServicePage from "@/Components/ServicePages/ServicePage";

const ZachemSaitPage = () => (
  <>
    <PageHeader heading="Зачем вашему бизнесу сайт" page="Зачем сайт" />
    <ServicePage serviceKey="webDesign" />
  </>
);

export default ZachemSaitPage;

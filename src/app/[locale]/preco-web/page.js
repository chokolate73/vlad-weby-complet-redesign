"use client";
import React from "react";
import PageHeader from "@/Components/Shared/PageHeader";
import ServicePage from "@/Components/ServicePages/ServicePage";

const PrecoWebPage = () => (
  <>
    <PageHeader heading="Prečo potrebujete webstránku" page="Prečo web" />
    <ServicePage serviceKey="webDesign" />
  </>
);

export default PrecoWebPage;

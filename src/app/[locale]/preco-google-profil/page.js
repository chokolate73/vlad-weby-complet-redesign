"use client";
import React from "react";
import PageHeader from "@/Components/Shared/PageHeader";
import ServicePage from "@/Components/ServicePages/ServicePage";

const PrecoGoogleProfilPage = () => (
  <>
    <PageHeader
      heading="Prečo potrebujete Google profil firmy"
      page="Google profil"
    />
    <ServicePage serviceKey="seo" />
  </>
);

export default PrecoGoogleProfilPage;

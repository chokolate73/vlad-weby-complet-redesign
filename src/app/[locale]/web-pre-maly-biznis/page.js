"use client";
import React from "react";
import PageHeader from "@/Components/Shared/PageHeader";
import EntrepreneursArticleSk from "@/Components/Articles/sk/EntrepreneursArticle";

const WebPreMalyBiznisPage = () => (
  <>
    <PageHeader
      heading="Webstránka pre malý biznis"
      page="Web pre malý biznis"
      isHeading={false}
    />
    <EntrepreneursArticleSk />
  </>
);

export default WebPreMalyBiznisPage;

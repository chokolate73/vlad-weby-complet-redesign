"use client";
import React from "react";
import PageHeader from "@/Components/Shared/PageHeader";
import WebsiteCostArticleSk from "@/Components/Articles/sk/WebsiteCostArticle";

const CenaWebStrankyPage = () => (
  <>
    <PageHeader heading="Cena webstránky 2026" page="Cena webstránky" isHeading={false} />
    <WebsiteCostArticleSk />
  </>
);

export default CenaWebStrankyPage;

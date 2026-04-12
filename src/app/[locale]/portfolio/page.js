'use client'
import PageHeader from "@/Components/Shared/PageHeader";
import WorkeProcess from "@/Components/WorkeProcess/WorkeProcess";
import ProfolioTab from "@/Components/ProfolioTab";
import { useTranslations } from 'next-intl';

const Protfolio = () => {
  const t = useTranslations('pages.portfolio');

  return (
    <>
      <PageHeader heading={t('heading')} page={t('page')} />
      <ProfolioTab />
      <WorkeProcess />
    </>
  );
};

export default Protfolio;

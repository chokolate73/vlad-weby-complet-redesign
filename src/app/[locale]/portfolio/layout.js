import { getPageMetadata, getBreadcrumbs } from "@/lib/seo";
import BreadcrumbJsonLd from "@/Components/Seo/BreadcrumbJsonLd";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata('portfolio', locale);
}

export default async function PortfolioLayout({ children, params }) {
  const { locale } = await params;
  return (
    <>
      <BreadcrumbJsonLd items={getBreadcrumbs('portfolio', locale)} />
      {children}
    </>
  );
}

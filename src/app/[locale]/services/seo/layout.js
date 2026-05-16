import { getPageMetadata, getBreadcrumbs } from "@/lib/seo";
import BreadcrumbJsonLd from "@/Components/Seo/BreadcrumbJsonLd";
import ServiceJsonLd from "@/Components/Seo/ServiceJsonLd";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata('service-seo', locale);
}

export default async function SeoServiceLayout({ children, params }) {
  const { locale } = await params;
  return (
    <>
      <ServiceJsonLd locale={locale} serviceKey="seo" />
      <BreadcrumbJsonLd items={getBreadcrumbs('service-seo', locale)} />
      {children}
    </>
  );
}

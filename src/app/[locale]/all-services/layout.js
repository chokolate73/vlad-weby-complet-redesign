import { getPageMetadata, getBreadcrumbs } from "@/lib/seo";
import ServiceJsonLd from "@/Components/Seo/ServiceJsonLd";
import BreadcrumbJsonLd from "@/Components/Seo/BreadcrumbJsonLd";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata('services', locale);
}

export default async function ServicesLayout({ children, params }) {
  const { locale } = await params;
  return (
    <>
      <ServiceJsonLd locale={locale} />
      <BreadcrumbJsonLd items={getBreadcrumbs('services', locale)} />
      {children}
    </>
  );
}

import { getPageMetadata, getBreadcrumbs } from "@/lib/seo";
import BreadcrumbJsonLd from "@/Components/Seo/BreadcrumbJsonLd";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata('service-web-design', locale);
}

export default async function WebDesignServiceLayout({ children, params }) {
  const { locale } = await params;
  return (
    <>
      <BreadcrumbJsonLd items={getBreadcrumbs('service-web-design', locale)} />
      {children}
    </>
  );
}

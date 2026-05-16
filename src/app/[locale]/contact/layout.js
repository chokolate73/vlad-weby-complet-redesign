import { getPageMetadata, getBreadcrumbs } from "@/lib/seo";
import BreadcrumbJsonLd from "@/Components/Seo/BreadcrumbJsonLd";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata('contact', locale);
}

export default async function ContactLayout({ children, params }) {
  const { locale } = await params;
  return (
    <>
      <BreadcrumbJsonLd items={getBreadcrumbs('contact', locale)} />
      {children}
    </>
  );
}

import { getPageMetadata, getBreadcrumbs } from "@/lib/seo";
import BreadcrumbJsonLd from "@/Components/Seo/BreadcrumbJsonLd";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata('privacy-policy', locale);
}

export default async function PrivacyPolicyLayout({ children, params }) {
  const { locale } = await params;
  return (
    <>
      <BreadcrumbJsonLd items={getBreadcrumbs('privacy-policy', locale)} />
      {children}
    </>
  );
}

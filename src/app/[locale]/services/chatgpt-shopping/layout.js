import { getPageMetadata, getBreadcrumbs } from "@/lib/seo";
import BreadcrumbJsonLd from "@/Components/Seo/BreadcrumbJsonLd";
import ServiceJsonLd from "@/Components/Seo/ServiceJsonLd";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata('service-chatgpt-shopping', locale);
}

export default async function ChatGPTShoppingServiceLayout({ children, params }) {
  const { locale } = await params;
  return (
    <>
      <ServiceJsonLd locale={locale} serviceKey="chatgpt-shopping" />
      <BreadcrumbJsonLd items={getBreadcrumbs('service-chatgpt-shopping', locale)} />
      {children}
    </>
  );
}

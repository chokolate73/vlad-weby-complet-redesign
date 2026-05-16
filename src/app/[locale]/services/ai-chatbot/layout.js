import { getPageMetadata, getBreadcrumbs } from "@/lib/seo";
import BreadcrumbJsonLd from "@/Components/Seo/BreadcrumbJsonLd";
import ServiceJsonLd from "@/Components/Seo/ServiceJsonLd";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata('service-ai-chatbot', locale);
}

export default async function AIChatbotServiceLayout({ children, params }) {
  const { locale } = await params;
  return (
    <>
      <ServiceJsonLd locale={locale} serviceKey="ai-chatbot" />
      <BreadcrumbJsonLd items={getBreadcrumbs('service-ai-chatbot', locale)} />
      {children}
    </>
  );
}

import { getPageMetadata } from "@/lib/seo";
import ServiceJsonLd from "@/Components/Seo/ServiceJsonLd";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata('services', locale);
}

export default async function ServicesLayout({ children, params }) {
  const { locale } = await params;
  return (
    <>
      <ServiceJsonLd locale={locale} />
      {children}
    </>
  );
}

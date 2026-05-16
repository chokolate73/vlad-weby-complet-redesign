import { notFound } from "next/navigation";
import { getPageMetadata, getBreadcrumbs } from "@/lib/seo";
import BreadcrumbJsonLd from "@/Components/Seo/BreadcrumbJsonLd";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (locale !== "sk") return {};
  return getPageMetadata("landing-cena-web-stranky", locale);
}

export default async function Layout({ children, params }) {
  const { locale } = await params;
  if (locale !== "sk") notFound();
  return (
    <>
      <BreadcrumbJsonLd items={getBreadcrumbs('landing-cena-web-stranky', locale)} />
      {children}
    </>
  );
}

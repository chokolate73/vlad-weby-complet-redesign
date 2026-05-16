import { getPageMetadata, getBreadcrumbs } from "@/lib/seo";
import BreadcrumbJsonLd from "@/Components/Seo/BreadcrumbJsonLd";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata('blog', locale);
}

export default async function BlogLayout({ children, params }) {
  const { locale } = await params;
  return (
    <>
      <BreadcrumbJsonLd items={getBreadcrumbs('blog', locale)} />
      {children}
    </>
  );
}

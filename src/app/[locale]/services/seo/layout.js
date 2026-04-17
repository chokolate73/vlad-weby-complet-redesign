import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata('service-seo', locale);
}

export default async function SeoServiceLayout({ children }) {
  return <>{children}</>;
}

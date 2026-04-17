import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata('service-web-design', locale);
}

export default async function WebDesignServiceLayout({ children }) {
  return <>{children}</>;
}

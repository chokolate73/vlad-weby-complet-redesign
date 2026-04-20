import { notFound } from "next/navigation";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (locale !== "en") return {};
  return getPageMetadata("landing-why-website", locale);
}

export default async function Layout({ children, params }) {
  const { locale } = await params;
  if (locale !== "en") notFound();
  return <>{children}</>;
}

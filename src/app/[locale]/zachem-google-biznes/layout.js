import { notFound } from "next/navigation";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (locale !== "ru") return {};
  return getPageMetadata("landing-zachem-google-biznes", locale);
}

export default async function Layout({ children, params }) {
  const { locale } = await params;
  if (locale !== "ru") notFound();
  return <>{children}</>;
}

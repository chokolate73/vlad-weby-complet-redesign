import { notFound } from "next/navigation";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (locale !== "sk") return {};
  return getPageMetadata("landing-preco-web", locale);
}

export default async function Layout({ children, params }) {
  const { locale } = await params;
  if (locale !== "sk") notFound();
  return <>{children}</>;
}

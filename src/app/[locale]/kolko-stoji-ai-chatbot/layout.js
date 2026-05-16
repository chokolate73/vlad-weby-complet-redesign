import { notFound } from "next/navigation";
import { getPageMetadata, getBreadcrumbs } from "@/lib/seo";
import KolkoStojiAiChatbotJsonLd from "@/Components/Seo/KolkoStojiAiChatbotJsonLd";
import BreadcrumbJsonLd from "@/Components/Seo/BreadcrumbJsonLd";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (locale !== "sk") return {};
  return getPageMetadata("landing-kolko-stoji-ai-chatbot", locale);
}

export default async function Layout({ children, params }) {
  const { locale } = await params;
  if (locale !== "sk") notFound();
  return (
    <>
      <KolkoStojiAiChatbotJsonLd />
      <BreadcrumbJsonLd items={getBreadcrumbs('landing-kolko-stoji-ai-chatbot', locale)} />
      {children}
    </>
  );
}

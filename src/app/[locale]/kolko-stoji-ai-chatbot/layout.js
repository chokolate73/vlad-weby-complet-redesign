import { notFound } from "next/navigation";
import { getPageMetadata } from "@/lib/seo";
import KolkoStojiAiChatbotJsonLd from "@/Components/Seo/KolkoStojiAiChatbotJsonLd";

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
      {children}
    </>
  );
}

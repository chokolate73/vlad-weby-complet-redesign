import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata('service-ai-chatbot', locale);
}

export default async function AIChatbotServiceLayout({ children }) {
  return <>{children}</>;
}

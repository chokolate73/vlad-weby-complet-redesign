import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata('service-chatgpt-shopping', locale);
}

export default async function ChatGPTShoppingServiceLayout({ children }) {
  return <>{children}</>;
}

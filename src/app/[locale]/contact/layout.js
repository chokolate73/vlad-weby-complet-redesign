import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata('contact', locale);
}

export default function ContactLayout({ children }) {
  return children;
}

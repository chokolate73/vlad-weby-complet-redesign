import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata('cookies', locale);
}

export default function CookiesLayout({ children }) {
  return children;
}

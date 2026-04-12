import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata('blog', locale);
}

export default function BlogLayout({ children }) {
  return children;
}

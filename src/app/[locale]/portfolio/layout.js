import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata('portfolio', locale);
}

export default function PortfolioLayout({ children }) {
  return children;
}

import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata('privacy-policy', locale);
}

export default function PrivacyPolicyLayout({ children }) {
  return children;
}

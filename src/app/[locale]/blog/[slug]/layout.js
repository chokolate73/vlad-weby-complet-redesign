import { notFound } from "next/navigation";
import { getPageMetadata } from "@/lib/seo";
import { canonicalBlogKey } from "@/lib/localizedPaths";
import BlogPostingJsonLd from "@/Components/Seo/BlogPostingJsonLd";

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const canonical = canonicalBlogKey(slug, locale);
  if (!canonical) return {};
  return getPageMetadata('blog-post', locale, { slug: canonical });
}

export default async function BlogPostLayout({ children, params }) {
  const { locale, slug } = await params;
  const canonical = canonicalBlogKey(slug, locale);
  if (!canonical) notFound();
  return (
    <>
      <BlogPostingJsonLd slug={canonical} locale={locale} />
      {children}
    </>
  );
}

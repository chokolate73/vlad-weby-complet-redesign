import { notFound } from "next/navigation";
import { getPageMetadata, BLOG_SLUGS } from "@/lib/seo";
import BlogPostingJsonLd from "@/Components/Seo/BlogPostingJsonLd";

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  if (!BLOG_SLUGS.includes(slug)) return {};
  return getPageMetadata('blog-post', locale, { slug });
}

export default async function BlogPostLayout({ children, params }) {
  const { locale, slug } = await params;
  if (!BLOG_SLUGS.includes(slug)) notFound();
  return (
    <>
      <BlogPostingJsonLd slug={slug} locale={locale} />
      {children}
    </>
  );
}

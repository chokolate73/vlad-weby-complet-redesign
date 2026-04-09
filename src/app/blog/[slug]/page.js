import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogsList } from "../../../Utlits/blogList";
import AiChatbotArticle from "../../../Components/Articles/AiChatbotArticle";
import SeoArticle from "../../../Components/Articles/SeoArticle";
import EntrepreneursArticle from "../../../Components/Articles/EntrepreneursArticle";

const articleComponents = {
  "ai-chatbot-for-business": AiChatbotArticle,
  "improve-website-seo": SeoArticle,
  "website-for-entrepreneurs": EntrepreneursArticle,
};

export function generateStaticParams() {
  return blogsList.map((blog) => ({ slug: blog.slug }));
}

const BlogArticle = ({ params }) => {
  const blog = blogsList.find((b) => b.slug === params.slug);

  if (!blog) {
    notFound();
  }

  const ArticleComponent = articleComponents[blog.slug];

  return (
    <section className="pt_120">
      {/* Breadcrumbs */}
      <div className="container max-w-[800px] mb-8">
        <nav className="flex items-center gap-2 text-sm text-clr_pra">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/all-blog" className="hover:text-white transition-colors">
            Blog
          </Link>
          <span>/</span>
          <span className="text-white">{blog.category}</span>
        </nav>
      </div>

      {ArticleComponent ? (
        <ArticleComponent />
      ) : (
        <div className="container max-w-[800px] pb_120">
          <h1 className="text-3xl md:text-4xl text-white font-bold mb-6">
            {blog.heading}
          </h1>
          <p className="text-clr_pra text-lg leading-relaxed mb-6">
            {blog.para}
          </p>
          <p className="text-white text-lg">Full article coming soon.</p>
        </div>
      )}
    </section>
  );
};

export default BlogArticle;

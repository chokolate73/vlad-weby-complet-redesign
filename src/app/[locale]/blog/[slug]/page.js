'use client'
import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { useTranslations, useLocale } from 'next-intl';
import AiChatbotArticle from "@/Components/Articles/AiChatbotArticle";
import SeoArticle from "@/Components/Articles/SeoArticle";
import EntrepreneursArticle from "@/Components/Articles/EntrepreneursArticle";
import WordpressVsModernArticle from "@/Components/Articles/WordpressVsModernArticle";
import WebsiteCostArticle from "@/Components/Articles/WebsiteCostArticle";

const articleComponents = {
  "ai-chatbot-for-business": AiChatbotArticle,
  "improve-website-seo": SeoArticle,
  "website-for-entrepreneurs": EntrepreneursArticle,
  "wordpress-vs-modern-website": WordpressVsModernArticle,
  "website-cost-2025": WebsiteCostArticle,
};

const blogKeys = ['seo', 'chatbot', 'cost', 'entrepreneurs', 'wordpress'];
const blogSlugs = [
  'improve-website-seo',
  'ai-chatbot-for-business',
  'website-cost-2025',
  'website-for-entrepreneurs',
  'wordpress-vs-modern-website',
];

const BlogArticle = ({ params }) => {
  const t = useTranslations('blogs');
  const locale = useLocale();

  const slugIndex = blogSlugs.indexOf(params.slug);
  const blogKey = slugIndex >= 0 ? blogKeys[slugIndex] : null;

  if (!blogKey) {
    notFound();
  }

  const blog = {
    slug: params.slug,
    category: t(`items.${blogKey}.category`),
    heading: t(`items.${blogKey}.heading`),
    para: t(`items.${blogKey}.para`),
  };

  const ArticleComponent = articleComponents[blog.slug];

  return (
    <section className="pt_120">
      <div className="container max-w-[800px] mb-8">
        <nav className="flex items-center gap-2 text-sm text-clr_pra">
          <Link href={`/${locale}`} className="hover:text-white transition-colors">
            {locale === 'sk' ? 'Domov' : locale === 'ru' ? 'Главная' : 'Home'}
          </Link>
          <span>/</span>
          <Link href={`/${locale}/all-blog`} className="hover:text-white transition-colors">
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
        </div>
      )}
    </section>
  );
};

export default BlogArticle;

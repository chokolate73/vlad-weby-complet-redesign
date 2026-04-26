'use client'
import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { useTranslations, useLocale } from 'next-intl';
import { canonicalBlogKey } from "@/lib/localizedPaths";

// English articles
import AiChatbotArticle from "@/Components/Articles/AiChatbotArticle";
import SeoArticle from "@/Components/Articles/SeoArticle";
import EntrepreneursArticle from "@/Components/Articles/EntrepreneursArticle";
import WordpressVsModernArticle from "@/Components/Articles/WordpressVsModernArticle";
import WebsiteCostArticle from "@/Components/Articles/WebsiteCostArticle";
import ChatgptShoppingArticle from "@/Components/Articles/ChatgptShoppingArticle";

// Slovak articles
import SeoArticleSk from "@/Components/Articles/sk/SeoArticle";
import AiChatbotArticleSk from "@/Components/Articles/sk/AiChatbotArticle";
import WebsiteCostArticleSk from "@/Components/Articles/sk/WebsiteCostArticle";
import EntrepreneursArticleSk from "@/Components/Articles/sk/EntrepreneursArticle";
import WordpressVsModernArticleSk from "@/Components/Articles/sk/WordpressVsModernArticle";
import ChatgptShoppingArticleSk from "@/Components/Articles/sk/ChatgptShoppingArticle";
import KolkoStojiAiChatbotArticleSk from "@/Components/Articles/sk/KolkoStojiAiChatbotArticle";

// Russian articles
import SeoArticleRu from "@/Components/Articles/ru/SeoArticle";
import AiChatbotArticleRu from "@/Components/Articles/ru/AiChatbotArticle";
import WebsiteCostArticleRu from "@/Components/Articles/ru/WebsiteCostArticle";
import EntrepreneursArticleRu from "@/Components/Articles/ru/EntrepreneursArticle";
import WordpressVsModernArticleRu from "@/Components/Articles/ru/WordpressVsModernArticle";
import ChatgptShoppingArticleRu from "@/Components/Articles/ru/ChatgptShoppingArticle";

const articleComponents = {
  en: {
    "ai-chatbot-for-business": AiChatbotArticle,
    "improve-website-seo": SeoArticle,
    "website-for-entrepreneurs": EntrepreneursArticle,
    "wordpress-vs-modern-website": WordpressVsModernArticle,
    "website-cost-2025": WebsiteCostArticle,
    "chatgpt-shopping-for-ecommerce": ChatgptShoppingArticle,
  },
  sk: {
    "ai-chatbot-for-business": AiChatbotArticleSk,
    "improve-website-seo": SeoArticleSk,
    "website-for-entrepreneurs": EntrepreneursArticleSk,
    "wordpress-vs-modern-website": WordpressVsModernArticleSk,
    "website-cost-2025": WebsiteCostArticleSk,
    "chatgpt-shopping-for-ecommerce": ChatgptShoppingArticleSk,
    "ai-chatbot-cost-2026": KolkoStojiAiChatbotArticleSk,
  },
  ru: {
    "ai-chatbot-for-business": AiChatbotArticleRu,
    "improve-website-seo": SeoArticleRu,
    "website-for-entrepreneurs": EntrepreneursArticleRu,
    "wordpress-vs-modern-website": WordpressVsModernArticleRu,
    "website-cost-2025": WebsiteCostArticleRu,
    "chatgpt-shopping-for-ecommerce": ChatgptShoppingArticleRu,
  },
};

const blogKeyByCanonical = {
  'improve-website-seo': 'seo',
  'ai-chatbot-for-business': 'chatbot',
  'website-cost-2025': 'cost',
  'website-for-entrepreneurs': 'entrepreneurs',
  'wordpress-vs-modern-website': 'wordpress',
  'chatgpt-shopping-for-ecommerce': 'chatgptShopping',
  'ai-chatbot-cost-2026': 'aiChatbotCost',
};

const BlogArticle = ({ params }) => {
  const t = useTranslations('blogs');
  const pt = useTranslations('pageHeader');
  const locale = useLocale();

  const canonical = canonicalBlogKey(params.slug, locale);
  const translationKey = canonical ? blogKeyByCanonical[canonical] : null;

  if (!canonical || !translationKey) {
    notFound();
  }

  const blog = {
    slug: canonical,
    category: t(`items.${translationKey}.category`),
    heading: t(`items.${translationKey}.heading`),
    para: t(`items.${translationKey}.para`),
  };

  const localeArticles = articleComponents[locale] || articleComponents.en;
  const ArticleComponent = localeArticles[canonical];

  const blogIndexHref = locale === 'sk' ? '/all-blog' : `/${locale}/all-blog`;
  const homeHref = locale === 'sk' ? '/' : `/${locale}`;

  return (
    <section className="pt_120">
      <div className="container max-w-[800px] mb-8">
        <nav className="flex items-center gap-2 text-sm text-clr_pra">
          <Link href={homeHref} className="hover:text-white transition-colors">
            {pt('home')}
          </Link>
          <span>/</span>
          <Link href={blogIndexHref} className="hover:text-white transition-colors">
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

'use client'
import React from "react";
import PageHeader from "@/Components/Shared/PageHeader";
import Blog from "@/Components/Blogs/Blog";
import { useTranslations } from 'next-intl';

const blogKeys = ['seo', 'chatbot', 'cost', 'entrepreneurs', 'wordpress'];
const blogSlugs = [
  'improve-website-seo',
  'ai-chatbot-for-business',
  'website-cost-2025',
  'website-for-entrepreneurs',
  'wordpress-vs-modern-website',
];

const AllBlogs = () => {
  const t = useTranslations('blogs');
  const pt = useTranslations('pages.allBlog');

  const blogsList = blogKeys.map((key, index) => ({
    id: index + 1,
    slug: blogSlugs[index],
    category: t(`items.${key}.category`),
    date: t(`items.${key}.date`),
    readTime: t(`items.${key}.readTime`),
    heading: t(`items.${key}.heading`),
    para: t(`items.${key}.para`),
  }));

  return (
    <>
      <PageHeader heading={pt('heading')} page={pt('page')} />
      <section className="pb_120">
        <div className="container max-w-[900px]">
          {blogsList.map(({ id, slug, category, date, readTime, heading, para }) => (
            <Blog
              key={id}
              slug={slug}
              category={category}
              date={date}
              readTime={readTime}
              heading={heading}
              para={para}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default AllBlogs;

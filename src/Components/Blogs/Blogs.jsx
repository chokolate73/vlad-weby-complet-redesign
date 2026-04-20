'use client'
import React from "react";
import Link from "next/link";
import { ArrowRight } from "react-bootstrap-icons";
import Blog from "./Blog";
import TitleSecond from "../Shared/TitleSecond";
import { useTranslations, useLocale } from 'next-intl';
import { localePath } from "@/lib/localizedPaths";

const blogKeys = ['seo', 'chatbot', 'cost', 'entrepreneurs', 'wordpress'];
const blogSlugs = [
  'improve-website-seo',
  'ai-chatbot-for-business',
  'website-cost-2025',
  'website-for-entrepreneurs',
  'wordpress-vs-modern-website',
];

const Blogs = () => {
  const t = useTranslations('blogs');
  const locale = useLocale();

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
    <section className="bg-common_bg bg-no-repeat bg-cover bg-center overflow-hidden pt_120 pb_120" id="blog">
      <div className="container">
        <div className="grid xl:grid-cols-[33%_auto] lg:grid-cols-[28%_auto] grid-cols-1 gap-12">
          <div>
            <TitleSecond mainTitle={t('mainTitle')} sortTitle={t('sortTitle')} />
            <Link
              href={localePath('/all-blog', locale)}
              className="md:w-52 md:h-52 w-32 h-32 bg-clr_base rounded-full flex justify-center items-center text-center relative before:w-full before:h-full before:rounded-full before:border before:border-clr_base before:content-[''] before:absolute before:top-[10px] before:-left-[7px] before:duration-500 hover:before:-top-[10px]"
              data-aos="zoom-out-down"
              data-aos-duration="2000"
            >
              <span className="relative z-10">
                <i className="mb-[1px] md:text-[28px] text-base text-center flex justify-center text-clr_title transition-all">
                  <ArrowRight />
                </i>
                <span className="text-[#282828] md:text-lg text-sm font-medium leading-[30px] capitalize transition-all">
                  {t('allArticles')}
                </span>
              </span>
            </Link>
          </div>
          <div>
            <div>
              <div>
                {blogsList
                  .slice(0, 3)
                  .map(({ id, slug, category, date, readTime, heading, para }) => (
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;

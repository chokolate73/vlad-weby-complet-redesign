'use client'
import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "react-bootstrap-icons";

const Blog = ({ slug, category, date, readTime, heading, para }) => {
  const href = slug ? `/blog/${slug}` : "#";
  return (
    <Link
      href={href}
      className="block lg:pb-8 pb-6 lg:pt-8 pt-6 group duration-500 border-b border-b-[rgb(38_37_37)] hover:border-b-clr_base first:border-t first:border-t-[rgb(38_37_37)] hover:first:border-t-clr_base px-6"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm text-clr_base border border-clr_base rounded-full py-1 px-3">
              {category}
            </span>
            <span className="flex items-center gap-1.5 text-clr_pra text-sm">
              <Calendar className="text-xs" />
              {date}
            </span>
            <span className="flex items-center gap-1.5 text-clr_pra text-sm">
              <Clock className="text-xs" />
              {readTime}
            </span>
          </div>
          <h3 className="xl:text-2xl sm:text-xl text-lg text-white font-semibold mb-3 duration-500 group-hover:text-clr_base">
            {heading}
          </h3>
          <p className="text-clr_pra text-sm leading-relaxed">
            {para}
          </p>
        </div>
        <div className="w-[50px] h-[50px] flex justify-center items-center shrink-0 mt-1">
          <ArrowRight className="text-white text-xl duration-500 group-hover:text-clr_base" />
        </div>
      </div>
    </Link>
  );
};

export default Blog;

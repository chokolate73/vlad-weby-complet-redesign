import React from "react";
import Link from "next/link";
import { ArrowRight } from "react-bootstrap-icons";
import Blog from "./Blog";
import { blogsList } from "../../Utlits/blogList";
import TitleSecond from "../Shared/TitleSecond";

const Blogs = () => {
  return (
    <section className="bg-common_bg bg-no-repeat bg-cover bg-center overflow-hidden pt_120 pb_120" id="blog">
      <div className="container">
        <div className="grid xl:grid-cols-[33%_auto] lg:grid-cols-[28%_auto] grid-cols-1 gap-12">
          <div>
            <TitleSecond mainTitle={"Latest Articles"} sortTitle={"Blog"} />
            <Link
              href="/all-blog"
              className="md:w-52 md:h-52 w-32 h-32 bg-clr_base rounded-full flex justify-center items-center text-center relative before:w-full before:h-full before:rounded-full before:border before:border-clr_base before:content-[''] before:absolute before:top-[10px] before:-left-[7px] before:duration-500 hover:before:-top-[10px]"
              data-aos="zoom-out-down"
              data-aos-duration="2000"
            >
              <span className="relative z-10">
                <i className="mb-[1px] md:text-[28px] text-base text-center flex justify-center text-clr_title transition-all">
                  <ArrowRight />
                </i>
                <span className="text-[#282828] md:text-lg text-sm font-medium leading-[30px] capitalize transition-all">
                  All Articles
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

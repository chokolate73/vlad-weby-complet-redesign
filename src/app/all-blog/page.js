import React from "react";
import PageHeader from "../../Components/Shared/PageHeader";
import Blog from "../../Components/Blogs/Blog";
import { blogsList } from "../../Utlits/blogList";

const AllBlogs = () => {
  return (
    <>
      <PageHeader heading={"Blog"} page={"Blog"} />
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

import React from "react";
import { notFound } from "next/navigation";
import PageHeader from "../../../Components/Shared/PageHeader";
import { blogsList } from "../../../Utlits/blogList";

export function generateStaticParams() {
  return blogsList.map((blog) => ({ slug: blog.slug }));
}

const BlogArticle = ({ params }) => {
  const blog = blogsList.find((b) => b.slug === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <PageHeader heading={blog.heading} page={"Blog"} />
      <section className="pb_120">
        <div className="container max-w-[800px]">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-sm text-clr_base border border-clr_base rounded-full py-1 px-3">
              {blog.category}
            </span>
            <span className="text-clr_pra text-sm">{blog.date}</span>
            <span className="text-clr_pra text-sm">{blog.readTime} read</span>
          </div>
          <div className="text-clr_pra text-base leading-relaxed">
            <p>{blog.para}</p>
            <p className="mt-6 text-white text-lg">Full article coming soon.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogArticle;

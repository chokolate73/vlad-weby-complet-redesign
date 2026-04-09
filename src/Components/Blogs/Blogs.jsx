import React from "react";
import Blog from "./Blog";
import { blogsList } from "../../Utlits/blogList";
import TitleSecond from "../Shared/TitleSecond";
import CircleBox from "../Shared/CircleBox";

const Blogs = () => {
  return (
    <section className="bg-common_bg bg-no-repeat bg-cover bg-center overflow-hidden pt_120 pb_120" id="blog">
      <div className="container">
        <div className="grid xl:grid-cols-[33%_auto] lg:grid-cols-[28%_auto] grid-cols-1 gap-12">
          <div>
            <TitleSecond mainTitle={"Latest Articles"} sortTitle={"Blog"} />
            <CircleBox />
          </div>
          <div>
            <div>
              <div>
                {blogsList
                  .slice(0, 3)
                  .map(({ id, category, date, readTime, heading, para }) => (
                    <Blog
                      key={id}
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

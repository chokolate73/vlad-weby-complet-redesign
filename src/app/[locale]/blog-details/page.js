import React from "react";
import Link from "next/link";

import PageHeader from "@/Components/Shared/PageHeader";
import BlogSidebar from "@/Components/Blogs/BlogSidebar";

import Form from "@/Components/Shared/Form";
import { socialIcons } from "@/Utlits/socilIcons";

const BlogDetails = () => {
  return (
    <>
      <PageHeader
        heading={"Brand design that helps the company grow"}
        page={"Brand design that helps the company grow"}
      />
      <section className="pb_120">
        <div className="container">
          <div className="grid lg:grid-cols-[66.66%_auto] gap-6">
            <div>
              <div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <Link href="#" className="overflow-hidden block w-full">
                    <img
                      src={"/img/blog/bblog1.png"}
                      alt="img"
                      className="w-full overflow-hidden duration-500"
                    />
                  </Link>
                  <div className="py-[30px]">
                    <div
                      className="lg:mb-[30px] mb-5 "
                      data-aos="fade-up"
                      data-aos-duration="1400"
                    >
                      <span className="text-lg font-medium text-white border-b border-b-clr_cusborder xl:pb-[30px] pb-5 xl:mb-7 mb-[19px] block">
                        By: admin / Lifestyle / Posted on September 19, 2025 /
                        Comments: 0
                      </span>
                      <p className="text-clr_pra text-base">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don&apos;t look even slightly believable.
                      </p>
                    </div>
                    <div className="lg:mb-[30px] mb-5 bg-clr_base rounded-lg lg:p-[30px] p-5">
                      <img
                        src={"/img/blog/straight-quotes.png"}
                        alt="img"
                        className="mb-[30px]"
                      />
                      <p className="text-xl text-clr_title mb-9">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia consequuntur magni dolores
                        eos qui ratione voluptatem sequi nesciunt.
                      </p>
                      <Link
                        href=""
                        className="font-medium text-xl underline text-clr_title"
                      >
                        David Kingston
                      </Link>
                    </div>
                  </div>
                  <div className="bg-common_bg xl:mb-[60px] mb-10 rounded-lg xl:p-[30px] sm:p-5 py-5 px-[14px] flex items-center xl:justify-between justify-center xl:flex-nowrap flex-wrap gap-5">
                    <div className="flex items-center sm:gap-5 gap-[10px]">
                      <span className="text-xl font-medium text-white">
                        Posted in :
                      </span>
                      <Link
                        href=""
                        className="rounded-[10px] bg-[rgb(29_29_29_)] sm:py-[12px] py-2 sm:px-5 px-[10px] sm:text-base text-[12px] uppercase text-clr_pra"
                      >
                        Business
                      </Link>
                    </div>
                    <div className="flex items-center gap-5">
                      <span className="text-xl font-medium text-white">
                        Share :
                      </span>
                      <ul className="social-cus flex items-center rounded-[10px] bg-[rgb(29_29_29_)] py-[10px] px-5 gap-5 ">
                        {socialIcons.map(({ id, icon }) => (
                          <li key={id}>
                            <Link href="">
                              <i className="text-white duration-500 hover:text-clr_base">
                                {icon}
                              </i>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Form isColTwo={true} />
                </div>
              </div>
            </div>
            <div>
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;

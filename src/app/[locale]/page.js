import React from "react";
import { images, images2 } from "../../Utlits/marqueeItems";
import About from "../../Components/About/About";
import Projects from "../../Components/Projects";
import Metting from "../../Components/Metting";
import Services from "../../Components/Services/Services";
import WorkeProcess from "../../Components/WorkeProcess/WorkeProcess";
import Testimonial from "../../Components/Testimonial";
import Blogs from "../../Components/Blogs/Blogs";
import MarqueeWapper from "../../Components/Shared/MarqueeWapper";
import Awards from "../../Components/About/Awards";
import LocalBusinessJsonLd from "@/Components/Seo/LocalBusinessJsonLd";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata('home', locale);
}

const Home = async ({ params }) => {
  const { locale } = await params;
  return (
    <>
      <LocalBusinessJsonLd locale={locale} />
      <MarqueeWapper direction="left" images={images} />
      <About />
      <MarqueeWapper direction="right" images={images2} />
      <Awards />
      <Projects />
      <Metting />
      <Services isHeading={false} />
      <WorkeProcess />
      <Testimonial />
      <Blogs />
    </>
  );
};

export default Home;

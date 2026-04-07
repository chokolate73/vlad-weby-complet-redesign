import React from "react";
import Service from "./Service";
import Title from "../Shared/Title";

const serviceList = [
  {
    id: "01",
    heading: "AI & Automation",
    subHeading: "Competitive edge",
    para: "ChatGPT Shopping, AI chatbots, n8n workflows — not just static websites. Give your business a competitive edge with smart automation.",
  },
  {
    id: "02",
    heading: "4 Languages, 3+ Markets",
    subHeading: "SK · EN · DE · RU",
    para: "Multilingual websites for the Central European market. Reach customers in Slovakia, Germany, Austria, and beyond.",
  },
  {
    id: "03",
    heading: "Delivery in 3–5 Days",
    subHeading: "Express delivery",
    para: "No month-long waits. Fast delivery without compromising quality. From first call to finished website in days, not weeks.",
  },
  {
    id: "04",
    heading: "Data-Driven Approach",
    subHeading: "Measurable results",
    para: "SEO, PageSpeed, analytics — measurable results, not just pretty design. Every decision backed by data.",
  },
  {
    id: "05",
    heading: "Direct Communication",
    subHeading: "No middlemen",
    para: "No account manager. You talk directly with the person building your website. One contact, zero overhead.",
  },
  {
    id: "06",
    heading: "Modern Tech Stack",
    subHeading: "Production-ready code",
    para: "React, Next.js, Tailwind — clean code, fast websites, easy updates. Built for performance and scalability.",
  },
];

const Services = ({ isHeading }) => {
  return (
    <section
      id="services"
      className={`${isHeading && "pt_120"}  pb_120`}
    >
      <div className="container">
        {isHeading && (
          <Title
            mainTitle="Business thinking, AI expertise, and freelance flexibility — at a fair price."
            sortTitle="I'm not another web agency"
          />
        )}

        <div>
          {serviceList.map(({ id, heading, subHeading, para }) => (
            <Service
              key={id}
              id={id}
              heading={heading}
              subHeading={subHeading}
              para={para}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

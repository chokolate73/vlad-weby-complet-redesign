import React from "react";
import Service from "./Service";
import Title from "../Shared/Title";

const serviceList = [
  {
    id: "01",
    heading: "AI & Automation",
    subHeading: "Your competitive edge",
    para: "AI chatbots that handle customer inquiries, workflow automation that eliminates repetitive tasks, and API integrations that connect your tools. Less manual work, more clients, faster growth.",
  },
  {
    id: "02",
    heading: "4 Languages, 3+ Markets",
    subHeading: "SK · EN · DE · RU",
    para: "Multilingual websites for the Central European market. Reach customers in Slovakia, Germany, Austria, and beyond.",
  },
  {
    id: "03",
    heading: "Weeks, Not Months",
    subHeading: "Fast turnaround",
    para: "Landing pages launch in days. Full websites go live in 1–2 weeks. Fast because the process is efficient — not because corners are cut.",
  },
  {
    id: "04",
    heading: "SEO & Performance Built In",
    subHeading: "Found on Google",
    para: "Every site is built for search engines from day one — fast loading, mobile-first, proper structure. Not an afterthought, not an upsell.",
  },
  {
    id: "05",
    heading: "Direct Communication",
    subHeading: "No middlemen",
    para: "No account manager. You talk directly with the person building your website. One contact, zero overhead.",
  },
  {
    id: "06",
    heading: "Websites That Earn",
    subHeading: "Not just pretty design",
    para: "Landing pages, business websites, web apps — designed to convert visitors into customers. Clean design that works for your business, not just looks good in a portfolio.",
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
            mainTitle="Business thinking, AI expertise, and freelance flexibility - at a fair price."
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

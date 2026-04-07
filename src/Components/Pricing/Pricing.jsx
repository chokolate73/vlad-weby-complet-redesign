import React from "react";
import Price from "./Price";
import Title from "../Shared/Title";

const planData = [
  {
    id: 1,
    planName: "Landing Page",
    price: "€390",
    time: "one-time",
    fetcher: [
      "Custom One-Page Design",
      "SEO Optimization",
      "Fast Speed",
      "Contact Form",
      "Mobile Responsive",
    ],
    image: "/img/project/basic.png",
  },
  {
    id: 2,
    planName: "Multi-Page Website",
    price: "€599",
    time: "Best Value",
    fetcher: [
      "Up to 5 Custom Pages",
      "Advanced SEO",
      "CMS for Easy Editing",
      "Blog / News Section",
      "Google Maps & Analytics",
    ],
    image: "/img/project/warranty.png",
  },
  {
    id: 3,
    planName: "AI Growth Engine",
    price: "€999",
    time: "AI Powered",
    fetcher: [
      "Everything in Multi-Page",
      "Custom AI Chatbot",
      "Client Conversions",
      "Web & Social Media",
      "Auto-Booking System",
    ],
    image: "/img/project/premium-quality.png",
  },
];

const Pricing = () => {
  return (
    <section className="pt_120 pb_120">
      <div className="container">
        <Title
          mainTitle={"Transparent pricing. High ROI. No hidden agency fees."}
          sortTitle={"Invest in Your Growth"}
        />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 justify-center">
          {planData.map(({ id, image, planName, fetcher, price, time }) => (
            <Price
              key={id}
              image={image}
              planName={planName}
              price={price}
              time={time}
              fetcher={fetcher}
              id={id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

import React from "react";
import AboutCard from "./AboutCard";

const Experience = ({ isTabActive }) => {
  return (
    <div
      className={`w-full duration-700 ${isTabActive === "experience" ? "z-10 opacity-100 translate-y-0" : "translate-y-20 -z-10 opacity-0 absolute  top-0 "} `}
    >
      <AboutCard
        title={"Professional Experience"}
        para={
          "AI automation and high-performance web development for businesses across Central Europe."
        }
        info={[
          {
            date: "2024–Now",
            position: "Lenovo · Bratislava",
            instition: "AI Automation Analyst",
          },
          {
            date: "2024",
            position: "Web & Social Media",
            instition: "First AI Chatbot Deployed",
          },
          {
            date: "2022–Now",
            position: "vlad-weby.sk · 18+ projects",
            instition: "Freelance Web Developer",
          },
          {
            date: "2022",
            position: "Freelance · 4 markets",
            instition: "Vlad Weby Founded",
          },
        ]}
      />
    </div>
  );
};

export default Experience;

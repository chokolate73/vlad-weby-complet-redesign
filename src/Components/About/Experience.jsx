import React from "react";
import AboutCard from "./AboutCard";

const Experience = ({ isTabActive }) => {
  return (
    <div
      className={`w-full duration-700 ${isTabActive === "experience" ? "z-10 opacity-100 translate-y-0" : "translate-y-20 -z-10 opacity-0 absolute  top-0 "} `}
    >
      <AboutCard
        title={"My Experience"}
        para={
          "3+ years of hands-on experience building modern websites and AI integrations for businesses across Slovakia, Germany, and Austria."
        }
        info={[
          {
            date: "2022–Now",
            position: "Freelance · Bratislava",
            instition: "Web Developer & AI Specialist",
          },
          {
            date: "2023",
            position: "Microsoft Certified",
            instition: "Copilot Certification",
          },
          {
            date: "2022",
            position: "SK · EN · DE · RU markets",
            instition: "Vlad Weby Founded",
          },
        ]}
      />
    </div>
  );
};

export default Experience;

import React from "react";
import AboutCard from "./AboutCard";

const Education = ({ isTabActive }) => {
  return (
    <div className={`w-full duration-700 ${isTabActive === "education" ? "z-10 opacity-100 translate-y-0" : "translate-y-20 -z-10 opacity-0 absolute  top-0 "} `}>
      <AboutCard
        title={"Languages & Markets"}
        para={
          "Four languages, multiple markets. I build multilingual websites for the Central European market and beyond."
        }
        info={[
          {
            date: "SK",
            position: "",
            instition: "Slovak",
          },
          {
            date: "EN",
            position: "",
            instition: "English",
          },
          {
            date: "DE",
            position: "",
            instition: "German",
          },
          {
            date: "RU",
            position: "",
            instition: "Russian",
          },
        ]}
      />
    </div>
  );
};

export default Education;

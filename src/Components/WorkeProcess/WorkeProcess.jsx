import React from "react";
import Title from "../Shared/Title";
import WorkProcessCard from "./WorkProcessCard";

const processList = [
  {
    id: 1,
    title: "Pricing",
    info: "Do I have to pay monthly fees?",
    list: [
      "Website design is a one-time fee",
      "Optional Care Package: €25/month",
      "Covers updates, security & hosting",
    ],
  },
  {
    id: 2,
    title: "Changes",
    info: "What if I need to change text or photos later?",
    list: [
      "Care Package: we handle it for you",
      "Just send a message with changes",
      "Stock photos & text included free",
    ],
  },
  {
    id: 3,
    title: "Speed",
    info: "How fast will it be ready?",
    list: [
      "Typically 3 to 5 business days",
      "Full setup and content handled",
      "Mobile-first, works on every device",
    ],
  },
];
const WorkeProcess = () => {
  return (
    <section id="faq" className="bg-common_bg bg-center bg-no-repeat bg-cover rounded-[10px] overflow-hidden sm:p-[60px] py-[30px] px-[10px] pt_120 pb_120">
      <div className="container">
        <Title
          mainTitle="Answers to Common Questions"
          sortTitle="FAQ"
        />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
          {processList.map(({ id, info, list, title }) => (
            <WorkProcessCard key={id} info={info} list={list} title={title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkeProcess;

'use client'
import React from "react";

const clients = [
  { name: "Dobry Vodár", image: "/img/clients/dobry-vodar.png" },
  { name: "TopSicher Umzüge", image: "/img/clients/topsicher-umzuge.png" },
  { name: "ManželPro", image: "/img/clients/manzelpro.png" },
  { name: "Massage Traunstein", image: "/img/clients/massage-traunstein.png" },
  { name: "OST-West Travel", image: "/img/clients/ost-west-travel.png" },
  { name: "dokto.sk", image: "/img/clients/dokto-sk.png" },
];

const Partner = () => {
  // Duplicate list for seamless infinite scroll
  const doubled = [...clients, ...clients];

  return (
    <div className="pt_120">
      <h4
        className="text-center mx-auto mb-[60px] text-white text-2xl font-semibold leading-[130%]"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        Serving clients across the world
      </h4>
      <div className="overflow-hidden">
        <div className="flex animate-marquee w-max gap-8 sm:gap-12">
          {doubled.map(({ name, image }, index) => (
            <div
              key={index}
              className="flex-shrink-0 sm:w-[300px] sm:h-[120px] w-[240px] h-[100px] flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-500 cursor-default"
            >
              <img src={image} alt={name} className="max-w-[240px] max-h-[80px] object-contain grayscale brightness-200 hover:grayscale-0 hover:brightness-100 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partner;

'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Instagram, Envelope, Whatsapp, Telephone, ArrowUpRight, PlayFill } from "react-bootstrap-icons";
import VideoPlay from "./Shared/VideoPlay";

const socalIcon = [
  {
    id: 1,
    link: "https://www.instagram.com/vladislav.als",
    icon: <Instagram />,
  },
  {
    id: 2,
    link: "mailto:v.hvorov73@gmail.com",
    icon: <Envelope />,
  },
  {
    id: 3,
    link: "https://wa.me/421919208426",
    icon: <Whatsapp />,
  },
  {
    id: 4,
    link: "tel:+421919208426",
    icon: <Telephone />,
  },
];

const rotatingWords = ["sell", "convert", "grow", "earn"];

const Banner = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [position, setPosition] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (!position) {
      setPosition(true);
    }
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const openLightbox = () => {
    setLightboxOpen(true);
  };

  return (
    <section id="home">
      <div className="container">
        <div className="grid md:grid-cols-[70%_auto] gap-5">
          <div>
            <div className="xl:pt-[145px] xl:pb-[180px] lg:pt-[120px] lg:pb-[150px] md:pt-[90px] md:pb-[100px] sm:pt-[80px] sm:pb-[85px] py-[60px] xl:pl-10 pl-0">
              <div className="flex items-center gap-3 md:mb-[50px] mb-6">
                <span className="bg-clr_base text-clr_title text-sm font-bold px-3 py-1 rounded-full uppercase">New</span>
                <span className="text-clr_white md:text-lg text-sm">AI & ChatGPT Shopping integrations</span>
              </div>
              <h1 className="lg:text-[116px] md:text-[68px] sm:text-[48px] text-[34px] font-semibold sm:mb-[30px] mb-[20px] leading-[120%]">
                <span className="text-clr_white">I build websites</span>
                <span className="block">
                  <span className="text-clr_white">that </span>
                  <span className="designers text-clr_base" data-text={rotatingWords[wordIndex]}>
                    {rotatingWords[wordIndex]}
                  </span>
                </span>
              </h1>
              <p className="text-clr_pra md:text-xl text-base mb-[40px] max-w-[600px] leading-relaxed">
                From first call to finished website in 3–5 days. Mobile-optimized, SEO-ready. Fair pricing, no agency fees.
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <Link
                  href="https://calendar.app.google/uvuY4SVfiJS92eRB6"
                  target="_blank"
                  className="flex items-center gap-2 font-medium px-[30px] py-5 text-lg capitalize bg-clr_base overflow-hidden rounded-[5px] duration-500 text-clr_subtitle hover:bg-[#aad302]"
                >
                  Free Consultation
                  <ArrowUpRight />
                </Link>
                <Link
                  href="#portfolio"
                  className="flex items-center gap-2 font-medium px-[30px] py-5 text-lg capitalize border border-clr_white rounded-[5px] duration-500 text-clr_white hover:bg-clr_base hover:text-clr_title hover:border-clr_base"
                >
                  View My Work
                </Link>
              </div>
              <div className="flex items-center gap-8 mt-[50px]">
                <div className="text-center">
                  <span className="text-clr_base text-3xl font-bold block">18+</span>
                  <span className="text-clr_pra text-sm">Projects</span>
                </div>
                <div className="w-[1px] h-[40px] bg-clr_cusborder"></div>
                <div className="text-center">
                  <span className="text-clr_base text-3xl font-bold block">3–5</span>
                  <span className="text-clr_pra text-sm">Day delivery</span>
                </div>
                <div className="w-[1px] h-[40px] bg-clr_cusborder"></div>
                <div className="text-center">
                  <span className="text-clr_base text-3xl font-bold block">5.0</span>
                  <span className="text-clr_pra text-sm">Star rating</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`absolute xxl:left-[calc(50%--120px)] left-[calc(50%--80px)] bottom-0 ${position ? "right_up_animat" : "right_up"
                }`}
            >
              <img src={"/img/banner/banner-man.png"} alt="Vladislav Khvorov" className="w-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden absolute -left-[40px] top-1/2 -translate-y-1/2 xl:grid gap-[220px] ">
        <div className="rotate-90 flex items-center justify-center gap-[16px] ">
          <Link href={"tel:+421919208426"}>
            <img src={"/img/banner/dial.png"} alt="img" className="-rotate-90 w-4" />
          </Link>
          <Link href={"tel:+421919208426"} className="text-clr_white">+421 919 208 426</Link>
        </div>
        <div className="flex items-center justify-center gap-[50px] rotate-90 mb-[0px]">
          <Link href={"#portfolio"} className="scroll text-clr_pra uppercase text-[15px]">
            scroll down
          </Link>
          <Link href={"#portfolio"} className="-rotate-90">
            <img src={"/img/banner/scroll-down.png"} alt="img" className="w-5" />
          </Link>
        </div>
      </div>
      <div className="hidden absolute right-0 top-[55%] -translate-y-1/2 xl:grid gap-[150px]  ">
        <div className="flex items-center justify-center gap-[50px] rotate-90">
          <Link href={"https://www.instagram.com/vladislav.als"} target="_blank" className="scroll text-clr_pra uppercase text-[15px]">
            Follow Me
          </Link>
          <Link href={"https://www.instagram.com/vladislav.als"} target="_blank" className="-rotate-90">
            <img src={"/img/banner/scroll-down.png"} alt="img" className="w-5" />
          </Link>
        </div>
        <div>
          <ul className="grid justify-center lg:gap-[14px] gap-[10px]">
            {socalIcon.map(({ icon, id, link }) => {
              return (
                <li key={id} >
                  <Link href={link} target="_blank" className="lg:w-[46px] lg:h-[46px] h-[38px] w-[38xp] rounded-full bg-[rgb(18_18_18)] flex justify-center items-center" >
                    <i className="text-white">{icon}</i>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {lightboxOpen && (
        <VideoPlay
          setLightboxOpen={setLightboxOpen}
          url="https://www.youtube.com/embed/tgbNymZ7vqY"
        />
      )}
    </section>
  );
};

export default Banner;

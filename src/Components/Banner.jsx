'use client'
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Envelope, Whatsapp, Telephone, PlayFill, ArrowUpRight } from "react-bootstrap-icons";
import VideoPlay from "./Shared/VideoPlay";
import { useTranslations, useLocale } from 'next-intl';

const WorkProcessModal = dynamic(() => import("./WorkProcessModal"), { ssr: false });

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
const Banner = () => {
  const t = useTranslations('banner');
  const locale = useLocale();
  const heroSizeClass =
    locale === 'ru'
      ? 'lg:text-[92px] md:text-[56px] sm:text-[40px] text-[28px]'
      : 'lg:text-[116px] md:text-[68px] sm:text-[48px] text-[34px]';
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [workProcessOpen, setWorkProcessOpen] = useState(false);
  const [position, setPosition] = useState(false);

  useEffect(() => {
    if (!position) {
      setPosition(true)
    }
  }, []);

  const openLightbox = () => {
    setLightboxOpen(true);
  };

  return (
    <section id="home" className="relative">
      <div className="container">
        <div className="grid md:grid-cols-[70%_auto] gap-5">
          <div>
            <div className="xl:pt-[145px] xl:pb-[180px] lg:pt-[120px] lg:pb-[150px] md:pt-[90px] md:pb-[100px] sm:pt-[40px] sm:pb-[180px] pt-[30px] pb-[200px] xl:pl-10 pl-0">
              <Link href={"https://calendar.app.google/uvuY4SVfiJS92eRB6"} target="_blank" className="md:text-[24px] text-sm sm:text-base leading-[140%] md:mb-[50px] mb-4  border-b border-b-clr_white text-clr_white inline-block pb-2 sm:pb-4 hover:text-clr_base hover:border-b-clr_base capitalize">
                <span className="inline-flex items-center gap-2">
                  {t('availableForProjects')}
                  <ArrowUpRight />
                </span>
              </Link>
              <h1 className={`${heroSizeClass} font-semibold sm:mb-[50px] mb-[16px] leading-[120%]`}>
                <span className="text-clr_white"> {t('websitesThat')}</span>
                <span className="block designers" data-text={t('earnMoney')}>
                  {t('earnMoney')}
                </span>
              </h1>
              <div className="md:flex hidden items-center gap-3 sm:gap-4 md:gap-6">
                <Image src="/img/hero/bn-arrow.png" alt="" width={55} height={68} className="w-[24px] sm:w-[30px] md:w-[40px] h-auto" />
                <button onClick={() => setWorkProcessOpen(true)} aria-label={t('workProcess')} className="cursor-pointer relative xl:w-[60px] xl:h-[60px] md:w-[46px] md:h-[46px] sm:w-[38px] sm:h-[38px] w-[32px] h-[32px] flex justify-center items-center rounded-full border border-clr_white before:absolute before:border-2 before:border-clr_white before:w-full before:h-full before:content:[''] before:rounded-full before:animate-scales bg-transparent">
                  <i className="text-clr_white md:text-[32px] sm:text-[24px] text-[18px]">
                    <PlayFill />
                  </i>
                </button>
                <span onClick={() => setWorkProcessOpen(true)} className="cursor-pointer md:text-base sm:text-sm text-xs text-clr_white w-[50px] sm:w-[60px]">{t('workProcess')}</span>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`absolute xxl:left-[calc(50%_+_160px)] md:left-[calc(50%_+_120px)] left-[calc(50%_+_30px)] bottom-0 ${position ? "right_up_animat" : "right_up"
                }`}

            >
              <Image
                src="/img/hero/hero-man.png"
                alt="Vladislav Khvorov"
                width={563}
                height={805}
                priority
                sizes="(max-width: 768px) 60vw, 30vw"
                className="w-full h-auto md:scale-110 scale-[1.4] origin-bottom"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden flex items-center gap-3 absolute bottom-[16px] left-[12px] z-10">
        <Image src="/img/hero/bn-arrow.png" alt="" width={55} height={68} className="w-[24px] sm:w-[30px] h-auto" />
        <button onClick={() => setWorkProcessOpen(true)} aria-label={t('workProcess')} className="cursor-pointer relative sm:w-[38px] sm:h-[38px] w-[32px] h-[32px] flex justify-center items-center rounded-full border border-clr_white before:absolute before:border-2 before:border-clr_white before:w-full before:h-full before:content:[''] before:rounded-full before:animate-scales bg-transparent">
          <i className="text-clr_white sm:text-[24px] text-[18px]">
            <PlayFill />
          </i>
        </button>
        <span onClick={() => setWorkProcessOpen(true)} className="cursor-pointer sm:text-sm text-xs text-clr_white w-[50px] sm:w-[60px]">{t('workProcess')}</span>
      </div>
      <div className="hidden absolute -left-[40px] top-1/2 -translate-y-1/2 xl:grid gap-[220px] ">
        <div className="rotate-90 flex items-center justify-center gap-[16px] ">
          <Link href={"tel:+421919208426"}>
            <Image src="/img/hero/dial.png" alt="" width={18} height={25} className="-rotate-90 w-4 h-auto" />
          </Link>
          <Link href={"tel:+421919208426"} className="text-clr_white">+421 919 208 426</Link>
        </div>
        <div className="flex items-center justify-center gap-[50px] rotate-90 mb-[0px]">
          <Link href={"#portfolio"} className="scroll text-clr_pra uppercase text-[15px]">
            {t('scrollDown')}
          </Link>
          <Link href={"#portfolio"} className="-rotate-90">
            <Image src="/img/hero/scroll-down.png" alt="" width={44} height={193} className="w-5 h-auto" />
          </Link>
        </div>
      </div>
      <div className="hidden absolute right-0 top-[55%] -translate-y-1/2 xl:grid gap-[150px]  ">
        <div className="flex items-center justify-center gap-[50px] rotate-90">
          <Link href={"https://www.instagram.com/vladislav.als"} target="_blank" className="scroll text-clr_pra uppercase text-[15px]">
            {t('followMe')}
          </Link>
          <Link href={"https://www.instagram.com/vladislav.als"} target="_blank" className="-rotate-90">
            <Image src="/img/hero/scroll-down.png" alt="" width={44} height={193} className="w-5 h-auto" />
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
      {workProcessOpen && (
        <WorkProcessModal onClose={() => setWorkProcessOpen(false)} />
      )}
    </section>
  );
};

export default Banner;

import React from "react";
import { XLg, ChevronRight } from "react-bootstrap-icons";
import { socialIcons } from "../../../Utlits/socilIcons";
import Link from "next/link";
import { useTranslations } from 'next-intl';

const Drawer = ({ isSidebarActive, setIsSidebarActive }) => {
  const t = useTranslations('drawer');

  return (
    <div
      className={`w-80 h-full fixed z-50  top-0 duration-500 overflow-y-scroll bg-black ${
        isSidebarActive ? "right-0" : "-right-80"
      }`}
    >
      <div
        onClick={() => setIsSidebarActive(false)}
        className="flex justify-center items-center w-10 h-10 m-[10px] bg-clr_base ml-auto p-[5px] rounded-md hover:cursor-pointer"
      >
        <i className="text-[22px] text-clr_mtitle">
          <XLg />
        </i>
      </div>
      <div className="grid py-10 px-5">
        <Link href={""} className="mb-5">
          <img src={"/img/logo/logo.png"} alt="Vlad Weby logo" />
        </Link>
        <p className="text-sm mb-10 text-clr_pra break-words leading-normal">
          {t('description')}
        </p>
        <div className="grid gap-6 mb-10">
          <div>
            <div>
              <span className="block mb-2 uppercase text-clr_pra font-bold text-sm"> {t('address')} </span>
              <span className="textp capitalize text-white font-medium leading-[120%]"> Bottova 2A, Bratislava </span>
            </div>
          </div>
          <div>
            <div>
              <span className="block mb-2 uppercase text-clr_pra font-bold text-sm"> {t('email')} </span>
              <Link href={"mailto:v.hvorov73@gmail.com"} className="textp text-white font-medium leading-[120%]"> v.hvorov73@gmail.com </Link>
            </div>
          </div>
          <div>
            <div>
              <span className="block mb-2 uppercase text-clr_pra font-bold text-sm"> {t('callNow')} </span>
              <Link href={"tel:+421919208426"} className="textp capitalize text-white font-medium leading-[120%]"> +421 919 208 426 </Link>
            </div>
          </div>
        </div>
        <div className="lg:mb-20 mb-14 relative">
          <ul className="flex gap-[14px]">
            {socialIcons.map(({ icon, id }) => (
              <li key={id}>
                <Link
                  href={"#"}
                  className="w-[45px] h-[45px] rounded-full bg-clr_base border border-clr_base  flex justify-center items-center "
                >
                  <i className="text-clr_title">{icon}</i>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link
          href="https://calendar.app.google/uvuY4SVfiJS92eRB6"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center gap-2 font-medium px-[30px] pt-5 pb-[21px] text-lg leading-[120%]  capitalize relative bg-clr_base overflow-hidden rounded-[5px] duration-500 text-clr_subtitle before:absolute before:content-[''] before:bottom-full before:bg-[#aad302] before:left-0 before:w-full before:h-full before:duration-500 before:bg-opacity-80 hover:before:bottom-0"
        >
          <span className="z-10 relative duration-500">
            <i>
              <ChevronRight />
            </i>
          </span>
          <span className="z-10 relative duration-500"> {t('letsTalk')} </span>
        </Link>
      </div>
    </div>
  );
};

export default Drawer;

'use client'
import Link from "next/link";
import React from "react";
import { ArrowUpShort, ArrowRight } from "react-bootstrap-icons";
import { useTranslations, useLocale } from 'next-intl';
import { localePath } from "@/lib/localizedPaths";

const socalList = [
  {
    id: 1,
    platfrom: "Instagram",
    icon: <ArrowRight />,
    link: "https://www.instagram.com/vladislav.als",
  },
  {
    id: 2,
    platfrom: "WhatsApp",
    icon: <ArrowRight />,
    link: "https://wa.me/421919208426",
  },
  {
    id: 3,
    platfrom: "Email",
    icon: <ArrowRight />,
    link: "mailto:v.hvorov73@gmail.com",
  },
  {
    id: 4,
    platfrom: "Calendar",
    icon: <ArrowRight />,
    link: "https://calendar.app.google/uvuY4SVfiJS92eRB6",
  },
];
const Footer = () => {
  const t = useTranslations('footer');
  const locale = useLocale();

  return (
    <footer>
      <div className="container">
        <div className="pt_120 pb-[120px]">
          <div
            className="text-[10.5vw] uppercase font-medium leading-none w-full xl:mb-[60px] sm:mb-10 mb-5 border border-clr_cusborder rounded-lg text-center p-[10px] text-white"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {t('getInTouch')}
          </div>
          <div className="flex md:flex-row flex-col justify-between gap-4">
            <div className="basis-1/2 shrink">
              <div>
                <p className="xl:mb-[60px] lg:mb-10 mb-[10px]  lg:text-2xl sm:text-lg text-[17px] text-white max-w-lg">
                  {t('description')}
                </p>
                <Link
                  href={"mailto:v.hvorov73@gmail.com"}
                  className="text-white lg:text-4xl sm:text-[28px] text-lg underline"
                >
                  v.hvorov73@gmail.com
                </Link>
                <address className="not-italic mt-8 text-clr_pra text-base leading-relaxed">
                  <p className="text-white font-semibold">Bc. Vladislav Khvorov</p>
                  <p className="text-white font-semibold mb-2">Vlad Weby</p>
                  <p>
                    Tel:{" "}
                    <Link
                      href="tel:+421919208426"
                      className="hover:text-clr_base transition-colors"
                    >
                      +421 919 208 426
                    </Link>
                  </p>
                </address>
              </div>
            </div>
            <div className="basis-1/2 shrink">
              <div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {socalList.map(({ id, icon, platfrom }) => {
                    return (
                      <div key={id} >
                        <Link
                          href={""}
                          className="lg:py-[26px] py-[14px] lg:px-7 px-6 rounded-[10px] border border-clr_cusborder flex items-center justify-between text-white lg:text-2xl text-xl duration-500 hover:bg-clr_base hover:border-clr_base hover:text-clr_title group"
                        >
                          {platfrom}
                          <i className="text-white text-[22px] duration-500 group-hover:text-clr_title">{icon}</i>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-common_bg bg-no-repeat bg-center bg-cover">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between py-[34px] lg:flex-nowrap  gap-4 ">
            <p className="text-white text-lg">
              © 2025{" "}
              <Link href={"/"} className="text-clr_base">
                VladWeby.
              </Link>{" "}
              {t('copyright')}
            </p>
            <ul className="terms flex gap-[38px]">
              <li>
                <Link href={localePath('/cookies', locale)} className="text-lg text-white duration-500 hover:text-clr_base"> {t('cookiePolicy')} </Link>
              </li>
              <li>
                <Link href={localePath('/privacy-policy', locale)} className="text-lg text-white duration-500 hover:text-clr_base"> {t('privacyPolicy')} </Link>
              </li>
            </ul>
            <Link href={""} className="w-10 h-[50px] bg-clr_base rounded-[5px] flex justify-center items-center">
              <i className="text-lg">
                <ArrowUpShort />
              </i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

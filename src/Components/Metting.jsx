"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Envelope, Telephone, Clock } from "react-bootstrap-icons";
import TitleSecond from "./Shared/TitleSecond";
import { useTranslations } from 'next-intl';

const Metting = () => {
  const t = useTranslations('meeting');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xzznlkne", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="bg-common_bg bg-center bg-no-repeat bg-cover rounded-[10px] overflow-hidden pt_120 pb_120"
    >
      <style>{`
        @keyframes wm-circle {
          0%   { transform: scale(0); opacity: 0; }
          60%  { transform: scale(1.08); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes wm-check {
          0%   { stroke-dashoffset: 60; opacity: 0; }
          25%  { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 1; }
        }
        @keyframes wm-fadein {
          0%   { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .wm-circle { animation: wm-circle 0.45s cubic-bezier(0.16,1,0.3,1) 0.1s both; }
        .wm-check  { stroke-dasharray: 60; stroke-dashoffset: 60;
                     animation: wm-check 0.4s ease-out 0.45s both; }
        .wm-text   { animation: wm-fadein 0.4s ease-out 0.7s both; }
        .wm-sub    { animation: wm-fadein 0.4s ease-out 0.85s both; }
        .wm-link   { animation: wm-fadein 0.4s ease-out 1s both; }
        @media (prefers-reduced-motion: reduce) {
          .wm-circle, .wm-check, .wm-text, .wm-sub, .wm-link {
            animation: none; stroke-dashoffset: 0; opacity: 1;
          }
        }
      `}</style>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div>
              <div className="border-b border-b-[rgb(39,38,38)] hover:border-b-clr_base duration-500 transition-all">
                <TitleSecond
                  mainTitle={t('mainTitle')}
                  sortTitle={t('sortTitle')}
                />
              </div>
              <div
                className="hover:border-b hover:border-b-clr_base flex items-center md:gap-5 gap-4 duration-500 transition-all border-b border-b-[rgb(38_37_37)] lg:pb-[30px] pb-5 lg:pt-[30px] pt-[20px]"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <span className="w-[60px] h-[60px] rounded-full bg-clr_base flex justify-center items-center shrink-0">
                  <Envelope className="text-[26px] text-clr_title" />
                </span>
                <span>
                  <span className="text-clr_pra md:text-lg text-base mb-1 block">
                    {t('email')}
                  </span>
                  <Link
                    href="mailto:v.hvorov73@gmail.com"
                    className="text-white md:text-xl text-base font-medium"
                  >
                    v.hvorov73@gmail.com
                  </Link>
                </span>
              </div>
              <div
                className="hover:border-b hover:border-b-clr_base flex items-center md:gap-5 gap-4 duration-500 border-b border-b-[rgb(38_37_37)] lg:pb-[30px] pb-5 lg:pt-[30px] pt-[20px]"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <span className="w-[60px] h-[60px] rounded-full bg-clr_base flex justify-center items-center shrink-0">
                  <Telephone className="text-[26px] text-clr_title" />
                </span>
                <span>
                  <span className="text-clr_pra md:text-lg text-base mb-1 block">
                    {t('phone')}
                  </span>
                  <Link
                    href="tel:+421919208426"
                    className="text-white md:text-xl text-base font-medium"
                  >
                    +421 919 208 426
                  </Link>
                </span>
              </div>
              <div
                className="hover:border-b hover:border-b-clr_base flex items-center md:gap-5 gap-4 duration-500 border-b border-b-[rgb(38_37_37)] lg:pb-[30px] pb-5 lg:pt-[30px] pt-[20px]"
                data-aos="fade-up"
                data-aos-duration="1800"
              >
                <span className="w-[60px] h-[60px] rounded-full bg-clr_base flex justify-center items-center shrink-0">
                  <Clock className="text-[26px] text-clr_title" />
                </span>
                <span>
                  <span className="text-clr_pra md:text-lg text-base mb-1 block">
                    {t('responseTime')}
                  </span>
                  <span className="text-white md:text-xl text-base font-medium">
                    {t('replyWithin')}
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="1500">
            {status === "success" ? (
              <div className="bg-[rgb(30,30,30)] rounded-[10px] p-8 md:p-10 flex flex-col items-center justify-center gap-6 min-h-[420px] text-center">
                <svg
                  className="wm-circle"
                  width="88"
                  height="88"
                  viewBox="0 0 88 88"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="44" cy="44" r="44" fill="#b4f541" fillOpacity="0.12" />
                  <circle cx="44" cy="44" r="34" fill="#b4f541" />
                  <polyline
                    className="wm-check"
                    points="28,44 40,56 61,33"
                    fill="none"
                    stroke="#111"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div>
                  <h3 className="wm-text text-white text-2xl font-semibold mb-2">
                    {t('successTitle')}
                  </h3>
                  <p className="wm-sub text-clr_pra text-base leading-relaxed max-w-[320px] mx-auto">
                    {t('successMessage')}
                  </p>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className="wm-link text-clr_base text-sm underline underline-offset-4 hover:opacity-70 transition-opacity duration-200 bg-transparent border-none cursor-pointer"
                >
                  {t('sendAnother')}
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[rgb(30,30,30)] rounded-[10px] p-8 md:p-10 flex flex-col gap-5"
              >
                <input
                  type="text"
                  name="name"
                  placeholder={t('yourName')}
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[rgb(20,20,20)] border border-[rgb(50,50,50)] rounded-lg px-5 py-4 text-white placeholder:text-[#666] text-base outline-none focus:border-clr_base transition-colors duration-300"
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t('yourEmail')}
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[rgb(20,20,20)] border border-[rgb(50,50,50)] rounded-lg px-5 py-4 text-white placeholder:text-[#666] text-base outline-none focus:border-clr_base transition-colors duration-300"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder={t('yourPhone')}
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[rgb(20,20,20)] border border-[rgb(50,50,50)] rounded-lg px-5 py-4 text-white placeholder:text-[#666] text-base outline-none focus:border-clr_base transition-colors duration-300"
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full bg-[rgb(20,20,20)] border border-[rgb(50,50,50)] rounded-lg px-5 py-4 ${formData.service ? "text-white" : "text-[#666]"} text-base outline-none focus:border-clr_base transition-colors duration-300 appearance-none`}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 20px center",
                  }}
                >
                  <option value="" disabled className="text-[#666]">{t('whatDoYouNeed')}</option>
                  <option value="landing">{t('landingPage')}</option>
                  <option value="website">{t('fullWebsite')}</option>
                  <option value="ai">{t('aiChatbot')}</option>
                  <option value="seo">{t('seoOptimization')}</option>
                  <option value="other">{t('other')}</option>
                </select>
                <textarea
                  name="message"
                  placeholder={t('yourMessage')}
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[rgb(20,20,20)] border border-[rgb(50,50,50)] rounded-lg px-5 py-4 text-white placeholder:text-[#666] text-base outline-none focus:border-clr_base transition-colors duration-300 resize-none"
                />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-clr_base text-clr_title font-semibold text-lg py-4 rounded-lg hover:opacity-90 transition-opacity duration-300 mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? t('sending') : t('getMyFreeQuote')}
                </button>
                {status === "error" && (
                  <p className="text-red-500 text-center text-sm mt-2">
                    {t('errorMessage')}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metting;

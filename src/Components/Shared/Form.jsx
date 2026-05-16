'use client'
import React, { useState } from "react";
import { useTranslations } from 'next-intl';

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzznlkne";

const Form = () => {
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
      const res = await fetch(FORMSPREE_ENDPOINT, {
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

  if (status === "success") {
    return (
      <div className="bg-common_bg rounded-[10px] p-8 md:p-10 flex flex-col items-center justify-center gap-6 min-h-[420px] text-center">
        <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="44" cy="44" r="44" fill="#b4f541" fillOpacity="0.12" />
          <circle cx="44" cy="44" r="34" fill="#b4f541" />
          <polyline
            points="28,44 40,56 61,33"
            fill="none"
            stroke="#111"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div>
          <h3 className="text-white text-2xl font-semibold mb-2">{t('successTitle')}</h3>
          <p className="text-clr_pra text-base leading-relaxed max-w-[320px] mx-auto">
            {t('successMessage')}
          </p>
        </div>
        <button
          onClick={() => setStatus("idle")}
          className="text-clr_base text-sm underline underline-offset-4 hover:opacity-70 transition-opacity duration-200 bg-transparent border-none cursor-pointer"
        >
          {t('sendAnother')}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-common_bg rounded-[10px] p-8 md:p-10 flex flex-col gap-5">
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
        <p className="text-red-500 text-center text-sm mt-2">{t('errorMessage')}</p>
      )}
    </form>
  );
};

export default Form;

"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Envelope, Telephone } from "react-bootstrap-icons";
import TitleSecond from "./Shared/TitleSecond";

const Metting = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;
    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:v.hvorov73@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="bg-common_bg bg-center bg-no-repeat bg-cover rounded-[10px] overflow-hidden pt_120 pb_120"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left column */}
          <div>
            <div>
              <div className="border-b border-b-[rgb(39,38,38)] hover:border-b-clr_base duration-500 transition-all">
                <TitleSecond
                  mainTitle={"Let's build something that earns for you."}
                  sortTitle={"Need a Website?"}
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
                    Email
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
                    Phone
                  </span>
                  <Link
                    href="tel:+421XXX XXX XXX"
                    className="text-white md:text-xl text-base font-medium"
                  >
                    +421 XXX XXX XXX
                  </Link>
                </span>
              </div>
            </div>
          </div>

          {/* Right column - Contact Form */}
          <div data-aos="fade-up" data-aos-duration="1500">
            <form
              onSubmit={handleSubmit}
              className="bg-[rgb(30,30,30)] rounded-[10px] p-8 md:p-10 flex flex-col gap-5"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-[rgb(20,20,20)] border border-[rgb(50,50,50)] rounded-lg px-5 py-4 text-white placeholder:text-[#666] text-base outline-none focus:border-clr_base transition-colors duration-300"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[rgb(20,20,20)] border border-[rgb(50,50,50)] rounded-lg px-5 py-4 text-white placeholder:text-[#666] text-base outline-none focus:border-clr_base transition-colors duration-300"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone (optional)"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-[rgb(20,20,20)] border border-[rgb(50,50,50)] rounded-lg px-5 py-4 text-white placeholder:text-[#666] text-base outline-none focus:border-clr_base transition-colors duration-300"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-[rgb(20,20,20)] border border-[rgb(50,50,50)] rounded-lg px-5 py-4 text-white placeholder:text-[#666] text-base outline-none focus:border-clr_base transition-colors duration-300 resize-none"
              />
              <button
                type="submit"
                className="w-full bg-clr_base text-clr_title font-semibold text-lg py-4 rounded-lg hover:opacity-90 transition-opacity duration-300 mt-1"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metting;

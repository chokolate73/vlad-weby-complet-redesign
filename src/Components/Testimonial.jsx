'use client'
import React from "react";
import Partner from "./Partner";
import Rating from "./Shared/Rating";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



const reviewList = [
  {
    id: 1,
    name: "Stanislav Zavydniak",
    position: "Local Guide · Slovakia 🇸🇰",
    review: `Good experience. Website done in 3 days. Nice price compared
    to others. Recommend.`,
    stars: 5,
  },
  {
    id: 2,
    name: "Tsapenko Oleg",
    position: "Slovakia 🇸🇰",
    review: `Huge thanks to Vlad! He built our website and helped promote
    the company — the result exceeded all expectations. Vlad is a true
    professional, attentive to details, always available and ready to
    offer the best solutions. Very happy with the collaboration,
    definitely recommend!`,
    stars: 5,
  },
  {
    id: 3,
    name: "Katerina Fetisova",
    position: "Germany 🇩🇪",
    review: `Came to Vlad with a complex request. Vlad was very patient
    with all my ideas, implemented quickly, suggested his own options,
    made corrections. Vlad will remain my reliable partner, as he proved
    himself a professional ready to responsibly and quickly solve tasks.
    Thank you from the bottom of my heart!`,
    stars: 5,
  },
];

const Testimonial = () => {
  return (
    <section
      className="overflow-hidden pt_120 pb_120"
      id="testimonial"
    >
      <div className="container">
        <div className="text-center md:mb-[60px] sm:mb-[50px] mb-[45px] max-w-[920px] mx-auto">
          <span
            className="text-2xl font-caveat text-clr_base relative flex justify-center items-center sm:gap-6 gap-[14px] mx-auto mb-[30px]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <span className="sm:w-20 w-[50px] h-[1px] bg-clr_base"></span>
            <span>Testimonial</span>
            <span className="sm:w-20 w-[50px] h-[1px] bg-clr_base"></span>
          </span>
          <h2
            className="font-medium lg:text-6xl md:text-5xl sm:text-4xl text-[29px] text-white lg:leading-[120%] md:leading-tight leading-9"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            What Clients Say
          </h2>
        </div>
        <div
          className="bg-common_bg bg-center bg-no-repeat bg-cover rounded-[10px] overflow-hidden lg:py-[130px] lg:px-[60px] md:py-[100px] md:px-[30px] sm:py-4 px-0 py-[10px] relative"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div>
            <div className="lg:max-w-[66%] w-auto mx-auto">
              <div className="sm:mr-[10px] sm:ml-[30px] mr-0 ml-0">
                <Swiper
                  spaceBetween={50}
                  slidesPerView={1}
                  speed={3000}
                  pagination={{
                    clickable: true,
                    el: ".swiper-pagination3",
                  }}
                  autoplay={{
                    delay: 2000,
                  }}
                  loop={true}
                  modules={[Pagination, Autoplay]}
                >
                  {/* <div className="swiper-wrapper"> */}
                  {reviewList.map(({ id, name, position, review, stars }) => {
                    return (
                      <SwiperSlide key={id}>
                        <div className="relative">
                          <div>
                            <Rating star={stars} />
                          </div>
                          <i className="sm:text-xl text-base text-clr_white sm:mb-10 mb-5 block ">
                            {review}
                          </i>
                          <h4 className="text-clr_base mb-2 font-semibold text-2xl leading-[130%]">
                            {name}
                          </h4>
                          <span className="text-lg text-clr_pra">
                            {position}{" "}
                          </span>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                  {/* </div> */}
                </Swiper>

                <div className="swiper-pagination3"></div>
              </div>
            </div>
          </div>
          <div className="absolute top-[99px] xl:left-[291px] lg:left-60 lg:block hidden">
            <img src={"/img/testimonial/quote.png"} alt="img" />
          </div>
          <div className="absolute top-5 left-5 opacity-10 lg:opacity-100 w-[60px] sm:w-[120px] h-[60px] sm:h-[120px] overflow-hidden rounded-full border-4 border-white">
            <img src={"/img/testimonial/man1.jpg"} alt="img" className="w-full h-full object-cover" />
          </div>
          <div className="absolute left-5 bottom-5 opacity-10 lg:opacity-100 w-[60px] sm:w-[160px] h-[80px] sm:h-[210px] overflow-hidden rounded-[20px]">
            <img src={"/img/testimonial/man3.jpg"} alt="img" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-5 right-5 opacity-10 lg:opacity-100 w-[60px] sm:w-[160px] h-[80px] sm:h-[210px] overflow-hidden rounded-[20px]">
            <img src={"/img/testimonial/man2.jpg"} alt="img" className="w-full h-full object-cover" />
          </div>
          <div className="absolute lg:bottom-[50px] lg:right-[50px] bottom-[15px] right-[15px] sm:block hidden ">
            <img src={"/img/testimonial/testi-arrow.png"} alt="img" />
          </div>
        </div>
        <Partner />
      </div>
    </section>
  );
};

export default Testimonial;

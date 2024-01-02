// import React, { useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

export default function HomeCarousel() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        effect={"fade"}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        onSlideChange={() => console.log("slide change")}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Pagination, Navigation, EffectFade, Autoplay]}
        className=" w-full h-auto "
      >
        <SwiperSlide>
          <div className="block bg-[url('/banner1.jpeg')] relative bg-cover bg-no-repeat bg-center z-10 overflow-visible px-0 ">
            <div className="com:mx-40 tv:mx-40 cin:mx-40 mx-4 w-full com:px-4 tv:px-4 cin:px-4 px-2">
              <div className="pt-[215px] pb-[180px] sm:pb-[100px] px-0 sm:mr-40">
                <div>
                  <h1 className="com:text-[80px] tv:text-[80px] cin:text-[80px] text-[60px] sm:text-[40px] relative sm:-top-24 w-sm:text-[40px] com:w-[50%] w-[40%] sm:w-[120%] text-white com:py-5 tv:py-5  px-0 font-semibold opacity-100 translate-y-0 transition-all ease-in duration-[1500ms] delay-1000 leading-[1.25]">
                    Expert Gemology and Jewelry Appraisal
                  </h1>
                </div>
                <div className="mt-5 sm:-mt-20 mr-7 mb-5 ml-0 bg-[#0b2545] w-60 sm:w-48 lg:px-11 px-6 py-4 hover:bg-[#343434]">
                  <Link
                    to="/about"
                    className="text-white font-bold font-[Syne] text-sm max-[1303px]:text-xs tracking-widest uppercase"
                  >
                    About Me
                  </Link>
                </div>
                <div className="grid grid-cols-1 absolute right-12 sm:top-[15rem] top-[26.5rem]">
                  <button
                    onClick={""}
                    className="z-10 text-white border-[3px] com:w-16 sm:w-11 hover:bg-[#0b2545] duration-500 hover:border-[#0b2545] border-[#e6e6e6] com:p-5 sm:p-3"
                  >
                    <FaArrowLeft />
                  </button>
                  <button
                    onClick={""}
                    className="z-10 text-white border-[3px] com:w-16 sm:w-11 hover:bg-[#0b2545] duration-500 hover:border-[#0b2545] border-[#e6e6e6] com:p-5 sm:p-3"
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="block bg-[url('/banner2.jpeg')] relative bg-cover bg-no-repeat bg-center z-10 overflow-visible px-0 ">
            <div className="com:mx-40 tv:mx-40 cin:mx-40 mx-4 w-full com:px-4 tv:px-4 cin:px-4 px-2">
              <div className="pt-[215px] pb-[180px] sm:pb-[100px] px-0 sm:mr-40">
                <div>
                  <h1 className="com:text-[80px] tv:text-[80px] cin:text-[80px] text-[60px] sm:text-[40px] relative sm:-top-24 w-sm:text-[40px] com:w-[50%] w-[40%] sm:w-[120%] text-white com:py-5 tv:py-5  px-0 font-semibold opacity-100 translate-y-0 transition-all ease-in duration-[1500ms] delay-1000 leading-[1.25]">
                    Professional Gems and Jewelry Appraisal
                  </h1>
                </div>
                <div className=" mt-5 sm:-mt-20 mr-7 mb-5 ml-0 bg-[#0b2545] w-60 sm:w-48 lg:px-11 px-6 py-4 hover:bg-[#343434]">
                  <Link
                    to="/services"
                    className="text-white font-bold font-[Syne] text-sm max-[1303px]:text-xs tracking-widest uppercase"
                  >
                    Our Services
                  </Link>
                </div>
                <div className="grid grid-cols-1 absolute right-12 sm:top-[15rem] top-[26.5rem]">
                  <button
                    onClick={""}
                    className="z-10 text-white border-[3px] com:w-16 sm:w-11 hover:bg-[#0b2545] duration-500 hover:border-[#0b2545] border-[#e6e6e6] com:p-5 sm:p-3"
                  >
                    <FaArrowLeft />
                  </button>
                  <button
                    onClick={""}
                    className="z-10 text-white border-[3px] com:w-16 sm:w-11 hover:bg-[#0b2545] duration-500 hover:border-[#0b2545] border-[#e6e6e6] com:p-5 sm:p-3"
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

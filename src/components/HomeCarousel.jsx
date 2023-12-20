// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';



// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function HomeCarousel() {
  return (
    <>
      <Swiper slidesPerView={1}
        spaceBetween={0}
        loop={true}
        effect={'fade'}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        onSlideChange={() => console.log('slide change')}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, EffectFade, Autoplay]} className=" w-full h-auto ">
        <SwiperSlide>
            <div className="block bg-[url('/banner1.jpeg')] relative bg-cover bg-no-repeat bg-center z-10 overflow-visible px-0 ">
                <div className='container com:mx-40 tv:mx-40 cin:mx-40 mx-20 com:px-4 tv:px-4 cin:px-4 px-2'>
                    <div className='pt-[215px] pb-[180px] px-0 max-w-[580px]'>
                        <div>
                            <h1 className='com:text-[80px] tv:text-[80px] cin:text-[80px] text-[60px] text-white com:py-5 tv:py-5 py-3  px-0 font-semibold opacity-100 translate-y-0 transition-all ease-in duration-[1500ms] delay-1000 '>
                                Expert Gemology and Jewelry Appraisal
                            </h1>
                        </div>
                        <div className=" mt-5 mr-7 mb-5 ml-0 bg-[#0b2545] w-60 lg:px-11 x px-6 py-4 hover:bg-[#343434]">
                            <Link to="/about" className="text-white font-bold font-[Syne] text-sm max-[1303px]:text-xs tracking-widest">
                                About Me
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="block bg-[url('/banner2.jpeg')] relative bg-cover bg-no-repeat bg-center z-10 overflow-visible px-0 ">
                <div className='container com:mx-40 tv:mx-40 cin:mx-40 mx-20 com:px-4 tv:px-4 cin:px-4 px-2'>
                    <div className='pt-[215px] pb-[180px] px-0 max-w-[580px]'>
                        <div>
                            <h1 className='com:text-[80px] tv:text-[80px] cin:text-[80px] text-[60px] text-white com:py-5 tv:py-5 py-3  px-0 font-semibold opacity-100 translate-y-0 transition-all ease-in duration-[1500ms] delay-1000 '>
                                Professional Gems and Jewelry Appraisal
                            </h1>
                        </div>
                        <div className=" mt-5 mr-7 mb-5 ml-0 bg-[#0b2545] w-60 lg:px-11 x px-6 py-4 hover:bg-[#343434]">
                            <Link to="/services" className="text-white font-bold font-[Syne] text-sm max-[1303px]:text-xs tracking-widest uppercase">
                                Our Services
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
      
      </Swiper>
    </>
  );
}

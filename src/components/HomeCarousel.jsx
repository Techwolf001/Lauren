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
        spaceBetween={30}
        loop={true}
        effect={'fade'}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSlideChange={() => console.log('slide change')}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, EffectFade, Autoplay]} className="mySwiper w-full h-auto ">
        <SwiperSlide>
            <div className="block bg-[url('/Pre-Purchase-and-Quality-Verification.png')] relative bg-cover bg-no-repeat bg-center z-10 overflow-visible px-0 ">
                <div className='container mx-40 px-4'>
                    <div className='pt-[215px] pb-[180px] px-0 max-w-[580px]'>
                        <div>
                            <h1 className='text-[80px] text-white py-5 px-0 font-semibold opacity-100 translate-y-0 transition-all ease duration-[1500ms] delay-1000 '>
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
        <div className="block bg-[url('/Pre-Purchase-and-Quality-Verification.png')] relative bg-cover bg-no-repeat bg-center z-10 overflow-visible px-0 ">
                <div className='container mx-40 px-4'>
                    <div className='pt-[215px] pb-[180px] px-0 max-w-[580px]'>
                        <div>
                            <h1 className='text-[80px] text-white py-5 px-0 font-semibold opacity-100 translate-y-0 transition-all ease duration-[1500ms] delay-1000 '>
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

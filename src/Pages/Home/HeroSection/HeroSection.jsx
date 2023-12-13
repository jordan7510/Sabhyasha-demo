import React from 'react';
import { GiBamboo } from "react-icons/gi";
import { FaLayerGroup, FaTools, FaTree } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade,Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSection = () => {
    return (
        <section className="relative h-[750px] md:h-screen">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Autoplay, Navigation, Pagination]}
          className="mySwiper mainSlider h-[750px] md:h-screen"
        >
          <SwiperSlide>
            <div  className="image-layer  h-[750px] md:h-screen img1"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div  className="image-layer  h-[750px] md:h-screen img2"></div>
          </SwiperSlide>
        </Swiper>
  
        <div className="absolute flex flex-col gap-6 md:gap-28 w-full bottom-0 z-50 left-1/2 -translate-x-1/2">
          <div className="text-white max-w-full w-11/12 md:w-6/12 mx-auto text-center space-y-3">
            <h2 className=" text-2xl md:text-6xl font-bold">
              We Save You Time and Money on Gardening & Lawn Care
            </h2>
            <p className="md:text-xl md:font-semibold">
              Fully insured with a total satisfaction guarantee and amazing
              customer support.
            </p>
            <button className="btn text-white border-0  rounded px-6 bg-[#6A9620]">
              Discover more
            </button>
          </div>
          <div data-aos="zoom-in" className="container  bg-[#6b9620e5]">
            <div  className="p-4 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
              <div className="flex gap-2 md:gap-4 px-2 md:p-4 ">
                <GiBamboo className="text-4xl md:text-6xl text-[#E9F622]"></GiBamboo>
                <div className="text-white">
                  <h3 className="text-2xl md:text-3xl mb-2 font-bold">Gardening</h3>
                  <p>Tellus vivamus non rutrum urna cras laoreet magnis.</p>
                </div>
              </div>
              <div className="flex gap-2 md:gap-4 px-2 md:p-4 md:border-l">
                <FaLayerGroup className="text-4xl md:text-6xl text-[#E9F622]"></FaLayerGroup>
                <div className="text-white">
                  <h3 className="text-2xl md:text-3xl mb-2 font-bold">Landscaping</h3>
                  <p>Tellus vivamus non rutrum urna cras laoreet magnis.</p>
                </div>
              </div>
              <div className="flex gap-2 md:gap-4 px-2 md:p-4 md:border-l">
                <FaTools className="text-4xl md:text-6xl text-[#E9F622]"></FaTools>
                <div className="text-white">
                  <h3 className="text-2xl md:text-3xl mb-2 font-bold">Maintenance</h3>
                  <p>Tellus vivamus non rutrum urna cras laoreet magnis.</p>
                </div>
              </div>
              <div className="flex gap-2 md:gap-4 px-2 md:p-4 md:border-l">
                <FaTree className="text-4xl md:text-6xl text-[#E9F622]"></FaTree>
                <div className="text-white">
                  <h3 className="text-2xl md:text-3xl mb-2 font-bold">Nursery</h3>
                  <p>Tellus vivamus non rutrum urna cras laoreet magnis.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default HeroSection;
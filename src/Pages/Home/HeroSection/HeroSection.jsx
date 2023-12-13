import React from "react";
import { GiBamboo } from "react-icons/gi";
import { FaLayerGroup, FaTools, FaTree } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";
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
          <div className="image-layer  h-[750px] md:h-screen img1"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-layer  h-[750px] md:h-screen img2"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-layer  h-[750px] md:h-screen img3"></div>
        </SwiperSlide>
      </Swiper>

      <div className="absolute flex flex-col gap-6 md:gap-28 w-full top-1/2 z-50 left-1/2 -translate-x-1/2 -translate-y-16">
        <div className="text-white max-w-full w-11/12 md:w-6/12 mx-auto text-center space-y-3">
          <h2 className=" text-2xl md:text-6xl uppercase font-bold">
            Empowering India's Artisans
          </h2>
          <p className="md:text-xl">
            Fully insured with a total satisfaction guarantee and amazing
            customer support.
          </p>
          {/* <button className="btn text-white border-0  rounded py-3 px-6 bg-[#C68732]">
            Discover more
          </button> */}
          <a
            href="#_"
            class="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white border-2 border-[#C68732] rounded-full hover:text-white group hover:bg-gray-50"
          >
            <span class="absolute left-0 block w-full h-0 transition-all bg-[#C68732] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="relative">
            Discover more
            </span>
          </a>
        </div>
        {/* <div data-aos="zoom-in" className="container  bg-[#6b9620e5]">
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
          </div> */}
      </div>
    </section>
  );
};

export default HeroSection;

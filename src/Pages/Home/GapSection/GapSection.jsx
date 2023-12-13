import React from "react";
import img from "../../../assets/images/embro-img.jpg";

const GapSection = () => {
  return (
    <div className="bg-white pb-64 container py-32 font-[200]">
      <div className="flex flex-col-reverse gap-7 md:flex-row items-center justify-center">
        <div className="flex-1">
          <div className="mb-8">
            <h2 className="text-5xl font-bold mb-3">
              Why is there a <span className="text-[#C4832A] ">GAP ?</span>
            </h2>

            <p className="text-3xl font-medium mb-4">
              Because their <span className="text-[#C4832A]">livelihood</span>{" "}
              <span className="text-[#C4832A]">heavily</span> depends on
            </p>
          </div>
          <ul className="space-y-3">
            <li>
              <span className="text-2xl font-semibold text-[#C4832A]">
                Government -
              </span>{" "}
              <span className="text-lg text-[#5A444B]">
                But they cannot support everyone.
              </span>
            </li>

            <li>
              <span className="text-2xl font-semibold text-[#C4832A]">
                Trade Fairs -
              </span>{" "}
              <span className="text-lg  text-[#5A444B]">
                But every artisan does not have access to these.
              </span>
            </li>

            <li>
              <span className="text-2xl font-semibold text-[#C4832A]">
                Tourists -
              </span>{" "}
              <span className="text-lg  text-[#5A444B]">
                But they do not visit every nook & corner of the country.
              </span>
            </li>

            <li>
              <span className="text-2xl font-semibold text-[#C4832A]">
                The "Middle Man" -
              </span>{" "}
              <span className="text-lg  text-[#5A444B]">
                But they do not support the artisans.
              </span>
            </li>
          </ul>
          <a
            href="#_"
            class="relative mt-12 inline-flex items-center px-8 py-3 overflow-hidden text-lg font-medium text-[#C68732] border-2 border-[#C68732] rounded-full hover:text-white group hover:bg-gray-50"
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
            <span class="relative">Discover more</span>
          </a>
        </div>
        <div className="flex-1 flex flex-col relative items-center justify-center mx-auto">
          <img
            src={img}
            className=" rounded-t-full hover:scale-105 duration-500"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default GapSection;

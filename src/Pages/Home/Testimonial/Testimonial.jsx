import React from "react";
import testi from "../../../assets/images/testmonial.webp";
const Testimonial = () => {
  return (
    <div className="py-24 bg-testimonial">
      <div className="max-w-full w-[900px] mx-auto rounded-2xl shadow-xl bg-[#F8EBE1]">
        <div className=" px-24 py-16">
          <div className=" flex items-start justify-center">
            <span className="text-7xl font-semibold -mt-5 text-black">“</span>
            <img src={testi} alt="" />
          </div>
          <div>
            <p className="font-normal text-center text-2xl">
              Investors looking to invest in the artisan sector need to be in it
              for the long haul, and need to understand impact better. They need
              to have a clear understanding of rural marketing to help
              communities break the poverty cycle and access opportunities for
              sustained, dignified livelihoods.”
            </p>
            <p className="mt-4 text-center">— ARINDAM DASGUPTA, CO-FOUNDER & CEO, TAMUL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

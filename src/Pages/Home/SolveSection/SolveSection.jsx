import React from "react";
import image from "../../../assets/images/solveImage.jpg";
import image2 from "../../../assets/images/solveimage2.jpg";
import image3 from "../../../assets/images/solveimage3.jpg";


const SolveSection = () => {
  return (
    <div className="flex pt-60 py-32 flex-col bg-[#F8EBE1] min-h-screen font-[200]">
      <div className="py-10">
        <h3 className="text-4xl mb-3 font-bold font-lora text-center">A&d</h3>
        <p className="text-2xl font-medium text-center">
          we are here to solve it so that
        </p>
      </div>

      <div className="flex gap-12 flex-col md:flex-row py-2 px-5 items-center justify-center">
        <div className="image-section  flex justify-center align-items-start flex-1 w-full px-5">
          <div className="hover:scale-105 duration-500 text-center relative left-8 ">
            <img
              src={image}
              alt="artisan"
              className="h-[400px] rounded-full w-72 "
            />
          </div>

          <div className=" hover:scale-105 duration-500 text-center pt-10 z-10 ">
            <img
              src={image3}
              alt="artisan"
              className="h-[400px] rounded-t-full w-72"
            />
          </div>
        </div>

        <div className="info-section overflow-hidden space-y-6 flex-1 relative">
          <div data-aos="fade-left" data-aos-duration="2000">
            <h2 className="text-2xl">
              <span className="text-5xl font-bold text-[#C4832A]">A</span>nd
              1000s of others can <span className="text-[#C4832A]">tap</span>{" "}
              the <span className="text-[#C4832A]">untapped</span> potential of
              the <span className="text-[#C4832A]">$752</span> billion industry.
            </h2>
            <div className="w-[145px] my-3 h-1  bg-[#952125]"></div>
          </div>
          <div data-aos="fade-left" data-aos-duration="2000">
            <h2 className="text-2xl">
              <span className="text-5xl font-bold text-[#C4832A]">A</span>nd
              1000s of others can <span className="text-[#C4832A]">tap</span>{" "}
              the <span className="text-[#C4832A]">untapped</span> potential of
              the <span className="text-[#C4832A]">$752</span> billion industry.
            </h2>
            <div className="w-[145px] my-3 h-1  bg-[#952125]"></div>
          </div>
          <div data-aos="fade-left" data-aos-duration="2000">
            <h2 className="text-2xl">
              <span className="text-5xl font-bold text-[#C4832A]">A</span>nd
              1000s of others can <span className="text-[#C4832A]">tap</span>{" "}
              the <span className="text-[#C4832A]">untapped</span> potential of
              the <span className="text-[#C4832A]">$752</span> billion industry.
            </h2>
            <div className="w-[145px] my-3 h-1  bg-[#952125]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolveSection;

import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import PieCharts from "../../../components/PieCharts/PieCharts";

const tokenDetailsData = [
  {
    heading: "Total Usage digital product",
    para: ["TrustXGaming"],
    itemColor: "#5C2F18",
  },
  {
    heading: "Business intelligence ,",
    para: ["TXG"],
    itemColor: "#C4832A",
  },
  {
    heading: "Product Photography",
    para: ["660,000"],
    itemColor: "#5C2F18",
  },
  {
    heading: "Ai Voice Command",
    para: ["0x9f46EcF92E7F6eE8C03f393ADf04C", "2e17B8cD0B0"],
    itemColor: "#C4832A",
  },
  {
    heading: "Shipping and Packing Process",
    para: ["0x94869e27C0f8Abf5AFa0bE90e027", "4cfDdA2d27cC"],
    itemColor: "#5C2F18",
  }
];

const CapitalizeSentence = (sentence) => {
  return sentence
    .split(". ")
    .map((item, index) => {
      return item.charAt(0).toUpperCase() + item.slice(1);
    })
    .join(". ");
};

const Chart = () => {
  return (
    <section
      id="token-section"
      className="py-32 gap-28 flex items-center justify-between container"
    >
      <div className="flex-1 w-full">
        <ul className="space-y-6">
          {tokenDetailsData.map((item, index) => {
            return (
              <li className="path-warper" key={index}>
                <div
                  className={`w-full flex-col md:flex-row flex items-start md:items-center list-card-clip-path px-5 py-4 rounded-lg gap-2 md:gap-5 bg-[${item.itemColor}] drop-shadow-lg`}
                  style={{
                    backgroundColor: `${item.itemColor}`,
                    marginLeft:`${index*20}px`
                  }}
                >
                  <p className="text-2xl md:text-3xl font-semibold text-white ">
                    0{index + 1}
                  </p>
                  <div className="text-white md:px-5">
                    <h2 className="text-2xl uppercase font-semibold">
                      {item.heading}
                    </h2>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex-1">
        <PieCharts></PieCharts>
      </div>
    </section>
  );
};

export default Chart;

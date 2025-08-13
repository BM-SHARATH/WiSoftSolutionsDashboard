import React from "react";

import groupimg from "../assets/Group.png";
import groupimg1 from "../assets/Group1.png";
import groupimg2 from "../assets/Group2.png";
import groupimg3 from "../assets/Group3.png";
import groupimg4 from "../assets/Group4.png";
import groupimg5 from "../assets/Group5.png";
import groupimg6 from "../assets/Group6.png";
import groupimg7 from "../assets/Group7.png";
import groupimg8 from "../assets/Group8.png";

const services = [
  {
    icon: (
      <img src={groupimg} className="h-16 w-16 object-contain mb-6" alt="" />
    ),

    title: "Leasing And Management Of Other People's Property",
  },

  {
    icon: (
      <img src={groupimg1} className="h-16 w-16 object-contain mb-6" alt="" />
    ),

    title: "Real Estate Management Supervision Services",
  },

  {
    icon: (
      <img src={groupimg2} className="h-16 w-16 object-contain mb-6" alt="" />
    ),

    title: "Real Estate Buying & Selling Brokerage",
  },

  {
    icon: (
      <img src={groupimg3} className="h-16 w-16 object-contain mb-6" alt="" />
    ),

    title: "Leasing Property Brokerage Agents",
  },

  {
    icon: (
      <img src={groupimg4} className="h-16 w-16 object-contain mb-6" alt="" />
    ),

    title: "Facilities Management Services",
  },

  {
    icon: (
      <img src={groupimg5} className="h-16 w-16 object-contain mb-6" alt="" />
    ),

    title: "Buying And Selling Of Own Real Estate",
  },

  {
    icon: (
      <img src={groupimg6} className="h-16 w-16 object-contain mb-6" alt="" />
    ),

    title: "Others Letting And Operating Of Own Or Leased Real Estate",
  },

  {
    icon: (
      <img src={groupimg7} className="h-16 w-16 object-contain mb-6" alt="" />
    ),

    title: "Real Estate Agencies",
  },

  {
    icon: (
      <img src={groupimg8} className="h-16 w-16 object-contain mb-6" alt="" />
    ),

    title: "Management Of Real Estate On A Fee Or Contract Basis",
  },
];

const Services = () => {
  return (
    <div className="flex flex-col min-h-[calc(100vh-80px)]">
      <section className="flex-1 flex flex-col justify-center bg-[#FBF5EF] py-8 px-2 sm:px-4 md:px-12 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#231F20] mb-8 tracking-wide">
          OUR SERVICES
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {service.icon}
              <p className="mt-2 text-lg font-bold text-[#231F20] leading-snug">
                {service.title}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-10 flex justify-center">
          <button className="bg-gradient-to-r from-[#B8943E] to-[#976621] text-white px-8 py-3 rounded font-semibold tracking-wide shadow hover:opacity-90 transition">
            ENQUIRE NOW
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;

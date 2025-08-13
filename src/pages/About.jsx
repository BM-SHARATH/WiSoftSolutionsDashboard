import React from "react";
import aboutusbg from "../assets/about_bg.png";
import aboutusbg2 from "../assets/About_bg2.png";
import bg_group from "../assets/Group 26.png";

const AboutUs = () => {
  return (
    <section className="relative bg-[#1A1A1A] text-white px-6 lg:px-20 py-16 lg:py-24 min-h-[calc(100vh-80px)] flex items-center ">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url(${bg_group})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
        <div className="space-y-6">
          <p className="uppercase text-sm tracking-widest text-gray-300">
            About Us
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#B8943E] leading-snug">
            A TRAILBLAZER IN THE REALM OF REAL ESTATE
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Praesent
            Posuere, Quam Vitae Pretium Tincidunt, Nulla Lorem Varius Velit, Nec
            Iaculis Metus Tortor A Tellus. Lorem Ipsum Dolor Sit Amet,
            Consectetur Adipiscing Elit. Praesent Posuere, Quam Vitae Pretium
            Tincidunt, Nulla Lorem Varius Velit, Nec Iaculis Metus Tortor A
            Tellus. Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
            Praesent Posuere, Quam Vitae Pretium Tincidunt, Nulla Lorem Varius
            Velit, Nec Iaculis Metus Tortor A Tellus. Lorem Ipsum Dolor Sit
            Amet, Consectetur Adipiscing Elit. Praesent Posuere, Quam Vitae
            Pretium Tincidunt, Nulla Lorem Varius Velit, Nec Iaculis Metus
            Tortor A Tellus.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Donec Vehicula Turpis Eget Velit Malesuada, Non Consequat Elit Donec
            Vehicula Turpis Eget Velit Malesuada, Non Consequat Elit Rutrum.
            Pellentesque Non Mi Porta, Posuere Ante A, Mattis Erat. Donec
            Vehicula Turpis Eget Velit Malesuada, Non Consequat Elit Rutrum.
            Pellentesque Non Mi Porta, Posuere Ante A, Mattis Erat. Donec
            Vehicula Turpis Eget Velit Malesuada, Non Consequat Elit Rutrum.
            Pellentesque Non Mi Porta, Posuere Ante A, Mattis Erat.
          </p>
          <button className="bg-gradient-to-r from-[#B8943E] to-[#976621] text-white px-6 py-3 rounded font-medium hover:opacity-90 transition">
            LEARN MORE
          </button>
        </div>

        <div className="relative flex justify-center">
          <img
            src={aboutusbg}
            alt="City View"
            className="max-w-[90%] lg:max-w-[500px] aspect-[5/3] object-cover rounded shadow-lg relative z-20 min-h-96"
          />
          <img
            src={aboutusbg2}
            alt="Family"
            className="absolute lg:left-[-45px] lg:top-[65px] max-w-[70%] lg:max-w-[260px] aspect-[3/4] object-cover rounded shadow-lg z-20 hidden sm:block"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

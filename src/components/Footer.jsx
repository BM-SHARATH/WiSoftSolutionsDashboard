import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#232323] text-gray-300 pt-10 pb-4 px-4 mt-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-8 border-b border-gray-700 pb-8">
        {/* Contact Info */}
        <div className="space-y-1 text-sm">
          <div className="font-semibold text-white mb-3">CONTACT INFO</div>
          <div>042 - DUBAI</div>
          <div>ADMIN@CLOUDSTARGT.AE</div>
          <div>AL QUOZ-3, AL QUOZ-3 - DUBAI</div>
        </div>

        {/* Quick Links */}
        <div className="text-sm flex flex-col">
          <NavLink className="font-semibold text-white mb-3">
            QUICK LINKS
          </NavLink>
          <NavLink to="/about">ABOUT US</NavLink>
          <NavLink>LEADERSHIP</NavLink>
          <NavLink to="/contact">CONTACT US</NavLink>
          <NavLink to="/projects">OUR PROJECTS</NavLink>
          <NavLink>TERMS & CONDITIONS</NavLink>
          <NavLink>PRIVACY POLICY</NavLink>
        </div>

        {/* Services */}
        <div className="space-y-1 text-sm">
          <div className="font-semibold text-white mb-3">SERVICES</div>
          <div>LABOR CAMPS</div>
          <div>PROPERTY BROKERAGE</div>
          <div>PROPERTY MARKETING</div>
          <div>PROPERTY SERVICES</div>
          <div>PROPERTY APPRAISAL</div>
          <div>PROPERTY INVESTMENT</div>
        </div>

        {/* Resources */}
        <div className="space-y-1 text-sm">
          <div className="font-semibold text-white mb-3">RESOURCES</div>
          <div>NEWS</div>
          <div>FAQ</div>
          <div>INFOGRAPHICS</div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row md:justify-between items-center mt-6 gap-4 text-center md:text-left">
        <div className="flex items-center gap-2">
          <img
            src="/src/assets/Footer_logo.png"
            alt="Cloud Star Group"
            className="h-8"
          />
          <span className="font-semibold text-white">CLOUD STAR GROUP</span>
        </div>
        <div className="text-xs text-gray-400 text-center">
          COPYRIGHT © 2024 LOREUM GROUP. DESIGNED & DEVELOPED BY WISOFT
          SOLUTIONS
        </div>
        <div className="flex gap-4 text-white text-lg">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-tiktok"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

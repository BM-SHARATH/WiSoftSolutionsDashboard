import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import navicon from "../assets/Logo-Square_With-Padding 1.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";
  const navbarBg = isHome
    ? "bg-gradient-to-b from-[#2B3A4A]/80 to-transparent"
    : "bg-gradient-to-r from-[#2B3A4A] to-[#455774]/80";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 ${navbarBg} px-4 sm:px-8 py-3 flex items-center justify-between text-white`}
    >
      {/* Left Section - Phone */}
      <div className="flex items-center gap-2 text-yellow-500">
        <Phone size={18} />
        <span className="text-white">042 - 123456</span>
      </div>

      {/* Hamburger for mobile */}
      <button className="sm:hidden text-white" onClick={() => setOpen(!open)}>
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Center Nav Links + Logo */}
      <ul
        className={`fixed sm:static top-[60px] left-0 w-full sm:w-auto bg-black/95 sm:bg-transparent flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-sm font-medium transition-all duration-300

        ${open ? "flex" : "hidden sm:flex"}`}
      >
        <NavLink
          to="/"
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            `hover:text-yellow-500 ${
              isActive ? "text-yellow-500 border-b-2 border-yellow-500" : ""
            }`
          }
        >
          HOME
        </NavLink>
        <NavLink
          to="/about"
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            `hover:text-yellow-500 ${
              isActive ? "text-yellow-500 border-b-2 border-yellow-500" : ""
            }`
          }
        >
          ABOUT US
        </NavLink>
        <NavLink
          to="/services"
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            `hover:text-yellow-500 ${
              isActive ? "text-yellow-500 border-b-2 border-yellow-500" : ""
            }`
          }
        >
          OUR SERVICES
        </NavLink>
        <NavLink
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center justify-center"
        >
          <img src={navicon} alt="Logo" className="w-12 h-12 object-contain" />
        </NavLink>
        <NavLink
          to="/carousel"
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            `hover:text-yellow-500 ${
              isActive ? "text-yellow-500 border-b-2 border-yellow-500" : ""
            }`
          }
        >
          PROPERTIES
        </NavLink>
        <NavLink
          to="/clients"
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            `hover:text-yellow-500 ${
              isActive ? "text-yellow-500 border-b-2 border-yellow-500" : ""
            }`
          }
        >
          RESOURCES
        </NavLink>
        <NavLink
          to="/blog-cards"
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            `hover:text-yellow-500 ${
              isActive ? "text-yellow-500 border-b-2 border-yellow-500" : ""
            }`
          }
        >
          BLOG
        </NavLink>
        <NavLink
          to="/contact"
          onClick={() => setOpen(false)}
          className="block sm:hidden bg-gradient-to-r from-[#B8943E] to-[#976621] text-white px-5 py-2 rounded hover:opacity-90 mt-2"
        >
          CONTACT US
        </NavLink>
      </ul>

      {/* Right - Contact Button (desktop only) */}
      <NavLink
        to="/contact"
        className="hidden sm:block bg-gradient-to-r from-[#B8943E] to-[#976621] text-white px-5 py-2 rounded hover:opacity-90"
      >
        CONTACT US
      </NavLink>
    </nav>
  );
};

export default Navbar;

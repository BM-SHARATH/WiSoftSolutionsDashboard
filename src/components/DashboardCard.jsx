import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const projects = [
  {
    title: "Accommodation 1",
    location: "JABEL ALI 1, DUBAI",
    rooms: "113 Rooms",
    size: "230 SqFt",
    image: "/src/assets/Mask_group.png",
  },

  {
    title: "Accommodation 2",
    location: "JABEL ALI 2, DUBAI",
    rooms: "295 Rooms",
    size: "230 SqFt",
    image: "/src/assets/Mask_group_1.png",
  },

  {
    title: "Accommodation 3",
    location: "JABELPUR 3, DUBAI",
    rooms: "200 Rooms",
    size: "230 SqFt",
    image: "/src/assets/Mask_group_2.png",
  },

  {
    title: "Accommodation 4",
    location: "JABEL ALI 4, DUBAI",
    rooms: "57 Rooms",
    size: "200 SqFt",
    image: "/src/assets/Mask_group_1.png",
  },

  {
    title: "Accommodation 5",
    location: "JABEL ALI 5, DUBAI",
    rooms: "80 Rooms",
    size: "210 SqFt",
    image: "/src/assets/Mask_group.png",
  },

  {
    title: "Accommodation 6",
    location: "JABEL ALI 6, DUBAI",
    rooms: "120 Rooms",
    size: "220 SqFt",
    image: "/src/assets/Mask_group_1.png",
  },
];

const CARDS_VISIBLE = 3;

export default function DashboardCard() {
  const [startIdx, setStartIdx] = useState(0);

  const handlePrev = () => {
    setStartIdx((prev) => Math.max(prev - CARDS_VISIBLE, 0));
  };

  const handleNext = () => {
    setStartIdx((prev) =>
      Math.min(prev + CARDS_VISIBLE, projects.length - CARDS_VISIBLE)
    );
  };

  const visibleProjects = projects.slice(startIdx, startIdx + CARDS_VISIBLE);

  return (
    <div className="bg-[#1A1A1A] text-white py-8 min-h-[calc(100vh-80px)]">
      <div className="max-w-8xl mx-auto px-2 sm:px-4">
        <h2 className="uppercase text-sm mb-4">Our Projects</h2>
        <div className="border-t border-gray-600 mb-6"></div>
        <div className="flex items-center justify-center">
          {/* Left Chevron */}
          <button
            onClick={handlePrev}
            disabled={startIdx === 0}
            className={`p-2 rounded-full border border-gray-600 bg-[#232323] hover:bg-gray-700 transition mr-2 sm:mr-4 ${
              startIdx === 0 ? "opacity-40 cursor-not-allowed" : ""
            }`}
            style={{
              height: 48,
              width: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Previous"
          >
            <FiChevronLeft size={28} />
          </button>

          {/* Cards */}
          <div className="flex gap-4 sm:gap-8 overflow-x-auto">
            {visibleProjects.map((p, i) => (
              <div
                key={i}
                className="bg-white text-black rounded-lg shadow-md w-64 sm:w-72 flex-shrink-0"
              >
                <div className="relative">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-40 sm:h-48 w-full object-cover rounded-t-lg"
                  />
                  <span className="absolute top-3 right-3 bg-yellow-200 text-xs font-semibold px-3 py-1 rounded-full">
                    LABOUR CAMP
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-xs text-gray-600">{p.location}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {p.rooms} • {p.size}
                  </p>
                  <a
                    href="#"
                    className="text-yellow-600 text-xs font-semibold mt-3 inline-block"
                  >
                    LEARN MORE <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right Chevron */}
          <button
            onClick={handleNext}
            disabled={startIdx >= projects.length - CARDS_VISIBLE}
            className={`p-2 rounded-full border border-gray-600 bg-[#232323] hover:bg-gray-700 transition ml-2 sm:ml-4 ${
              startIdx >= projects.length - CARDS_VISIBLE
                ? "opacity-40 cursor-not-allowed"
                : ""
            }`}
            style={{
              height: 48,
              width: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Next"
          >
            <FiChevronRight size={28} />
          </button>
        </div>
      </div>
    </div>
  );
}

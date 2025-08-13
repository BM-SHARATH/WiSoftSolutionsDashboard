import React, { useRef, useState } from "react";

import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const clients = [
  { name: "Rixos", logo: "/src/assets/Clients/1.png" },
  { name: "Dubai Hills", logo: "/src/assets/Clients/2.png" },
  { name: "Emaar", logo: "/src/assets/Clients/3.png" },
  { name: "Bvlgari", logo: "/src/assets/Clients/4.png" },
  { name: "Hilton", logo: "/src/assets/Clients/5.png" },
  { name: "Meraas", logo: "/src/assets/Clients/6.png" },
  { name: "Damac", logo: "/src/assets/Clients/7.png" },
];

const features = [
  {
    title: "HOLISTIC APPROACH",
    description:
      "Our Multifaceted Services Cover Every Facet Of The Real Estate Journey, Offering A One-Stop Des...",
  },
  {
    title: "FOCUS",
    description:
      "Your Satisfaction Is Our Driving Force. We Tailor Our Services To Meet Your Unique Needs, Fosteri...",
  },
  {
    title: "INNOVATION",
    description:
      "We Stay Ahead Of The Curve By Embracing Cutting-Edge Technologies And Innovative Prac...",
  },
  {
    title: "COMMUNITY ENRICHMENT",
    description:
      "Beyond Transactions, We Are Committed To Uplifting The Communities We Operate In, Con...",
  },
];

const OurClientsSection = () => {
  const logoRowRef = useRef(null);

  const [scrollX, setScrollX] = useState(0);

  const scrollLogos = (dir) => {
    if (logoRowRef.current) {
      const scrollAmount = 200;

      logoRowRef.current.scrollBy({
        left: dir * scrollAmount,
        behavior: "smooth",
      });

      setScrollX(logoRowRef.current.scrollLeft + dir * scrollAmount);
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col bg-[#FAF4EF]">
      <div className="bg-[#232323] py-6 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <h2 className="text-white text-2xl font-semibold tracking-wide uppercase text-left">
              OUR CLIENTS
            </h2>
            <div className="flex gap-2">
              <button
                className="p-2 rounded border border-white text-white hover:bg-white/10 transition"
                onClick={() => scrollLogos(-1)}
                aria-label="Scroll left"
              >
                <FiChevronLeft size={22} />
              </button>
              <button
                className="p-2 rounded border border-white text-white hover:bg-white/10 transition"
                onClick={() => scrollLogos(1)}
                aria-label="Scroll right"
              >
                <FiChevronRight size={22} />
              </button>
            </div>
          </div>

          <div
            ref={logoRowRef}
            className="flex items-center justify-center gap-12 mt-8 overflow-x-auto scrollbar-hide"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {clients.map((client, idx) => (
              <img
                key={idx}
                src={client.logo}
                alt={client.name}
                className="h-20 w-32 object-contain"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-4 py-12">
        <h3 className="text-center text-2xl md:text-2xl font-semibold mb-10 tracking-wide">
          WHY CHOOSE LOREUM EPSOM ?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 border-t border-b border-gray-300 divide-y md:divide-y-0 md:divide-x divide-gray-300 mb-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-between px-6 py-8 min-h-[180px]"
            >
              <h4 className="font-bold uppercase mb-3 text-base md:text-lg text-center">
                {feature.title}
              </h4>
              <p className="text-sm text-gray-700 mb-4 text-center line-clamp-3">
                {feature.description}
              </p>
              <a
                href="#"
                className="text-yellow-600 font-semibold inline-flex items-center gap-1 hover:underline"
              >
                READ MORE <FiArrowUpRight />
              </a>
            </div>
          ))}
        </div>
        <p className="text-gray-700 max-w-3xl mx-auto mb-8 text-center text-sm md:text-base">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vivamus
          Aenean Pharetra Dignissim Nisl, At Efficitur Justo. Curabitur Ornare,
          Massa Vitae Placerat Tempus, Velit Justo Dapibus Nibh, Vitae Volutpat
          Ex Nunc Sed Risus. Tuae Visionem, Nostra Peritia – Una Nobiscum,
          Futurum Luminis Aedificamus In Proprietate.
        </p>
        <div className="flex justify-center">
          <button className="bg-[#B8943E] hover:bg-[#976621] text-white px-8 py-3 rounded font-semibold tracking-wide shadow transition">
            ENQUIRE NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurClientsSection;

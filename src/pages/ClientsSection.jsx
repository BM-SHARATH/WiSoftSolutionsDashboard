import React from "react";

import { FiArrowUpRight } from "react-icons/fi";

// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const OurClientsSection = () => {
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

  return (
    <section className="bg-[#FAF4EF]">
      {/* Our Clients */}
      <div className="bg-black text-white py-6 relative">
        <div className="container mx-auto px-2 sm:px-4">
          <h2 className="text-2xl sm:text-3xl font-semibold uppercase tracking-wide text-center">
            Our Clients
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-16 mt-4">
            {clients.map((client, index) => (
              <img
                key={index}
                src={client.logo}
                alt={client.name}
                className="h-12 w-24 sm:h-16 sm:w-32 object-contain "
                style={{ filter: "brightness(0) invert(1)" }} // makes logos white if they're black PNGs
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-2 sm:px-4 py-10 sm:py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold uppercase mb-8 sm:mb-12 tracking-wide">
          WHY CHOOSE LOREUM EPSOM ?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10 sm:mb-12 border-t border-b border-gray-300">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`px-4 sm:px-6 py-8 ${
                index !== features.length - 1 ? "border-r border-gray-300" : ""
              }`}
            >
              <h3 className="font-bold uppercase mb-3 sm:mb-4 text-base sm:text-lg">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-700 mb-4">
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

        {/* Bottom Text */}
        <p className="text-gray-700 max-w-4xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vivamus
          Aenean Pharetra Dignissim Nisl, At Efficitur Justo. Curabitur Ornare,
          Massa Vitae Placerat Tempus, Velit Justo Dapibus Nibh, Vitae Volutpat
          Ex Nunc Sed Risus. Tuae Visionem, Nostra Peritia – Una Nobiscum,
          Futurum Luminis Aedificamus In Proprietate.
        </p>

        {/* Button */}
        <button className="bg-yellow-600 text-white px-6 sm:px-8 py-3 font-semibold uppercase rounded-md shadow-md hover:bg-yellow-700 transition">
          Enquire Now
        </button>
      </div>
    </section>
  );
};

export default OurClientsSection;

import React, { useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonials = [
  {
    quote: "“Lorem ipsum dolor sit amet consectetur”",
    text: "Lorem Ipsum Dolor Sit Amet Consectetur. Egestas Arcu Vitae Mollis Mauris Tempor. Accumsan Feugiat Parturient Porttitor Ornare Auctor Nunc Quam. Massa Sagittis Lorem Duis Neque Eu. Sed Volutpat.",
    name: "RAHUL DESHMUKH",
    role: "Senior Architect",
  },
  {
    quote: "“Lorem ipsum dolor sit amet consectetur”",
    text: "Lorem Ipsum Dolor Sit Amet Consectetur. Egestas Arcu Vitae Mollis Mauris Tempor. Accumsan Feugiat Parturient Porttitor Ornare Auctor Nunc Quam. Massa Sagittis Lorem Duis Neque Eu. Sed Volutpat.",
    name: "RAHUL SHARMA",
    role: "Senior Developer",
  },
  {
    quote: "“Lorem ipsum dolor sit amet consectetur”",
    text: "Lorem Ipsum Dolor Sit Amet Consectetur. Egestas Arcu Vitae Mollis Mauris Tempor. Accumsan Feugiat Parturient Porttitor Ornare Auctor Nunc Quam. Massa Sagittis Lorem Duis Neque Eu. Sed Volutpat.",
    name: "RAKESh VARMA",
    role: "Architect",
  },
  {
    quote: "“Lorem ipsum dolor sit amet consectetur”",
    text: "Lorem Ipsum Dolor Sit Amet Consectetur. Egestas Arcu Vitae Mollis Mauris Tempor. Accumsan Feugiat Parturient Porttitor Ornare Auctor Nunc Quam. Massa Sagittis Lorem Duis Neque Eu. Sed Volutpat.",
    name: "PRIYANKA DESHMUKH",
    role: "Assitant Manager",
  },
  {
    quote: "“Lorem ipsum dolor sit amet consectetur”",
    text: "Lorem Ipsum Dolor Sit Amet Consectetur. Egestas Arcu Vitae Mollis Mauris Tempor. Accumsan Feugiat Parturient Porttitor Ornare Auctor Nunc Quam. Massa Sagittis Lorem Duis Neque Eu. Sed Volutpat.",
    name: "DESHMUKH",
    role: "Advisor",
  },

  {
    quote: "“Lorem ipsum dolor sit amet consectetur”",
    text: "Lorem Ipsum Dolor Sit Amet Consectetur. Egestas Arcu Vitae Mollis Mauris Tempor. Accumsan Feugiat Parturient Porttitor Ornare Auctor Nunc Quam. Massa Sagittis Lorem Duis Neque Eu. Sed Volutpat.",
    name: "RAHUL",
    role: "Senior Advisor",
  },
];

const CARDS_VISIBLE = 3;

const Carousel = () => {
  const [startIdx, setStartIdx] = useState(0);
  const scrollRef = useRef(null);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;

  const handlePrev = () => {
    if (isMobile) {
      if (scrollRef.current) {
        const cardWidth = scrollRef.current.firstChild.offsetWidth + 24;
        scrollRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
      }
    } else {
      setStartIdx((prev) => Math.max(prev - CARDS_VISIBLE, 0));
    }
  };

  const handleNext = () => {
    if (isMobile) {
      if (scrollRef.current) {
        const cardWidth = scrollRef.current.firstChild.offsetWidth + 24;
        scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    } else {
      setStartIdx((prev) =>
        Math.min(prev + CARDS_VISIBLE, testimonials.length - CARDS_VISIBLE)
      );
    }
  };

  const visibleTestimonials = isMobile
    ? testimonials
    : testimonials.slice(startIdx, startIdx + CARDS_VISIBLE);

  return (
    <div className="bg-[#232323] min-h-[calc(100vh-80px)] py-8 px-2 sm:px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white text-2xl font-semibold uppercase tracking-wide">
            What Our Clients Say?
          </h2>
          <div className="flex gap-2">
            <button
              className="p-2 rounded border border-white text-white hover:bg-white/10 transition"
              onClick={handlePrev}
              aria-label="Scroll left"
              disabled={!isMobile && startIdx === 0}
              style={{
                opacity: !isMobile && startIdx === 0 ? 0.4 : 1,

                cursor: !isMobile && startIdx === 0 ? "not-allowed" : "pointer",
              }}
            >
              <FiChevronLeft size={22} />
            </button>
            <button
              className="p-2 rounded border border-white text-white hover:bg-white/10 transition"
              onClick={handleNext}
              aria-label="Scroll right"
              disabled={
                !isMobile && startIdx >= testimonials.length - CARDS_VISIBLE
              }
              style={{
                opacity:
                  !isMobile && startIdx >= testimonials.length - CARDS_VISIBLE
                    ? 0.4
                    : 1,

                cursor:
                  !isMobile && startIdx >= testimonials.length - CARDS_VISIBLE
                    ? "not-allowed"
                    : "pointer",
              }}
            >
              <FiChevronRight size={22} />
            </button>
          </div>
        </div>
        <div className="border-t border-gray-400 mb-6"></div>

        <div
          ref={scrollRef}
          className={`flex gap-6 ${
            isMobile
              ? "overflow-x-auto pb-4 scrollbar-hide"
              : "overflow-x-hidden justify-center"
          }`}
          style={{
            scrollBehavior: "smooth",

            WebkitOverflowScrolling: "touch",
          }}
        >
          {visibleTestimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded shadow-md min-w-[320px] max-w-[340px] w-full flex-shrink-0 p-6 flex flex-col justify-between border border-gray-200"
            >
              <div>
                <div className="font-semibold text-lg mb-3">{t.quote}</div>
                <div className="text-sm text-black mb-6">{t.text}</div>
              </div>
              <div className="mt-auto pt-4 border-t border-gray-200">
                <div className="text-xs font-semibold text-yellow-600 mb-1 uppercase tracking-wide">
                  {t.name}
                </div>
                <div className="text-xs text-gray-600">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

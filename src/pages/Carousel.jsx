import React from "react";

const Carousel = () => {
  const testimonials = [
    {
      quote: "“Lorem ipsum dolor sit amet consectetur”",
      text: "Lorem Ipsum Dolor Sit Amet Consectetur. Egestas Augue Vitae Mollis Mauris Tristique. Accumsan Porta Pharetra Parturient Ornare Auctor Nunc Quam. Massa Sagittis Lorem Duis Neque Eu. Sed Volutpat.",
      name: "Rahul Deshmukh",
      role: "Senior Architect",
    },
    {
      quote: "“Lorem ipsum dolor sit amet consectetur”",
      text: "Lorem Ipsum Dolor Sit Amet Consectetur. Egestas Augue Vitae Mollis Mauris Tristique. Accumsan Porta Pharetra Parturient Ornare Auctor Nunc Quam. Massa Sagittis Lorem Duis Neque Eu. Sed Volutpat.",
      name: "Rahul Deshmukh",
      role: "Senior Architect",
    },
    {
      quote: "“Lorem ipsum dolor sit amet consectetur”",
      text: "Lorem Ipsum Dolor Sit Amet Consectetur. Egestas Augue Vitae Mollis Mauris Tristique. Accumsan Porta Pharetra Parturient Ornare Auctor Nunc Quam. Massa Sagittis Lorem Duis Neque Eu. Sed Volutpat.",
      name: "Rahul Deshmukh",
      role: "Senior Architect",
    },
    {
      quote: "“Lorem ipsum dolor sit amet consectetur”",
      text: "Lorem Ipsum Dolor Sit Amet Consectetur. Egestas Augue Vitae Mollis Mauris Tristique. Accumsan Porta Pharetra Parturient Ornare Auctor Nunc Quam. Massa Sagittis Lorem Duis Neque Eu. Sed Volutpat.",
      name: "Rahul Deshmukh",
      role: "Senior Architect",
    },
  ];

  return (
    <div className="bg-[#232323] min-h-[calc(100vh-80px)] flex items-start text-white">
      <section className="py-10 px-2 sm:px-4 w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="uppercase text-lg font-semibold tracking-wide">
            What Our Clients Say?
          </h2>
        </div>
        <div className=" overflow-x-auto ">
          <div className="flex gap-4 sm:gap-6 min-w-[260px] ">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white text-black rounded-sm p-4 sm:p-6 min-w-[220px] max-w-[340px] flex-shrink-0"
              >
                <div className="font-semibold mb-2 text-sm sm:text-base">
                  {t.quote}
                </div>
                <div className="text-sm sm:text-sm mb-6">{t.text}</div>
                <div className="text-xs font-semibold text-yellow-700 mb-1">
                  {t.name}
                </div>
                <div className="text-xs text-gray-600">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Carousel;

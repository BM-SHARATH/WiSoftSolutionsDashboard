import React from "react";
import Carousel from "./Carousel";
import Footer from "../components/Footer";

const ClientsAndContact = () => {
  return (
    <div className="bg-[#232323] min-h-screen text-white">
      {/* Testimonials Section */}
      <Carousel />
      {/* Contact Section */}
      <section className="py-12 px-4">
        <h2 className="uppercase text-lg font-semibold mb-8">
          Reach Out To Us
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Form */}
          <form className="flex-1 max-w-lg space-y-4">
            <input
              type="text"
              placeholder="Full name"
              className="w-full bg-black border border-gray-700 text-white px-4 py-2 rounded-lg"
            />
            <input
              type="text"
              placeholder="Phone number"
              className="w-full bg-black border border-gray-700 text-white px-4 py-2 rounded-lg"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-black border border-gray-700 text-white px-4 py-2 rounded-lg"
            />
            <select className="w-full bg-black border border-gray-700 text-white px-4 py-2 rounded-lg">
              <option>What are you interested in?</option>
              <option>Property Investment</option>
              <option>Property Services</option>
              <option>Other</option>
            </select>
            <textarea
              placeholder="Message"
              className="w-full bg-black border border-gray-700 text-white px-4 py-2 min-h-[80px] rounded-lg"
            />
            <div className="flex items-center">
              <input type="checkbox" id="privacy" className="mr-2" />
              <label htmlFor="privacy" className="text-xs">
                I have read and I understand{" "}
                <a href="#" className="text-yellow-500 underline">
                  data privacy notice
                </a>
              </label>
            </div>
            <button
              type="submit"
              className="bg-yellow-700 text-white px-6 py-2 uppercase font-semibold rounded-sm mt-2"
            >
              Enquire Now
            </button>
          </form>

          {/* Map */}
          <div className="flex-1 min-w-[320px]">
            <iframe
              title="Cloud Star Group Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.123456789!2d55.27078231501047!3d25.20484998389345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43456789abcd%3A0x123456789abcdef!2sCloud%20Star%20Group!5e0!3m2!1sen!2sae!4v1680000000000!5m2!1sen!2sae"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-sm"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ClientsAndContact;

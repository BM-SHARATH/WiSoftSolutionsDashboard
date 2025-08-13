//

import Footer from "../components/Footer";

const ClientsAndContact = () => {
  return (
    <div className="bg-[#232323] min-h-screen text-white">
      {/* Contact Section */}
      <section className="pt-8 pb-12 px-4 max-w-7xl mx-auto">
        <h2 className="uppercase text-xl font-semibold mb-8 tracking-wide">
          Reach Out To Us
        </h2>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Form */}
          <form className="flex-1 max-w-xl space-y-4">
            <input
              type="text"
              placeholder="Full name"
              className="w-full bg-black border border-[#444] text-white px-4 py-2.5 rounded-none focus:outline-none focus:border-yellow-600 transition"
            />
            <input
              type="text"
              placeholder="Phone number"
              className="w-full bg-black border border-[#444] text-white px-4 py-2.5 rounded-none focus:outline-none focus:border-yellow-600 transition"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-black border border-[#444] text-white px-4 py-2.5 rounded-none focus:outline-none focus:border-yellow-600 transition"
            />
            <select className="w-full bg-black border border-[#444] text-white px-4 py-2.5 rounded-none focus:outline-none focus:border-yellow-600 transition">
              <option>What are you interested in?</option>
              <option>Property Investment</option>
              <option>Property Services</option>
              <option>Other</option>
            </select>
            <textarea
              placeholder="Message"
              className="w-full bg-black border border-[#444] text-white px-4 py-2.5 min-h-[80px] rounded-none focus:outline-none focus:border-yellow-600 transition"
            />
            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                id="privacy"
                className="mr-2 accent-yellow-600"
              />
              <label htmlFor="privacy" className="text-xs text-gray-300">
                I have read and I understand{" "}
                <a href="#" className="text-yellow-500 underline">
                  data privacy notice
                </a>
              </label>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-[#B8943E] to-[#976621] text-white px-7 py-2.5 uppercase font-semibold rounded-none mt-4 shadow hover:opacity-90 transition"
            >
              Enquire Now
            </button>
          </form>

          {/* Map */}
          <div className="flex-1 min-w-[320px] flex justify-start items-start">
            <iframe
              title="Cloud Star Group Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.123456789!2d55.27078231501047!3d25.20484998389345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43456789abcd%3A0x123456789abcdef!2sCloud%20Star%20Group!5e0!3m2!1sen!2sae!4v1680000000000!5m2!1sen!2sae"
              width="100%"
              height="320"
              style={{ border: 0, minWidth: 320, maxWidth: 400 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-none"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="border-t-2 border-[#D9D9D9] mx-80">
        <Footer />
      </div>
    </div>
  );
};

export default ClientsAndContact;

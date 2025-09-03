import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPhoneAlt } from "react-icons/fa";
import {
  FaMapMarkerAlt,
  FaDirections,
  FaCopy,
  FaPaw,
  FaLeaf,
  FaClock,
  FaPhone,
  FaTicketAlt,
  FaCar,
  FaBus,
  FaMap
} from "react-icons/fa";

export default function Map() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  const copyAddress = () => {
    navigator.clipboard.writeText("123 Wildlife Avenue, Melbourne VIC 3000");
    // You can add a toast notification here if needed
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 opacity-10">
        <FaPaw className="text-6xl text-green-600" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10">
        <FaLeaf className="text-6xl text-green-600" />
      </div>

      <div className="max-w-8xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center justify-center mb-4 relative">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent to-green-800 mr-4"></div>
            <span className="text-lg font-semibold tracking-wider text-green-800 uppercase bg-green-100 px-4 py-2 rounded-full shadow-inner flex items-center gap-2">
              <FaMap className="text-green-700" />
              Zoo Location
            </span>
            <div className="w-16 h-1 bg-gradient-to-r from-green-800 to-transparent ml-4"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 font-serif ">
            Visit Our Wildlife Sanctuary
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore a world of wildlife! Our zoo is open year-round and
            located in the heart of the city. Come with your family and enjoy
            the amazing animals, nature trails, and fun activities.
          </p>
        </div>

        {/* Map Container */}
        <div
          className="bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-green-100 transition-all duration-500 hover:shadow-3xl"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <div className="relative w-full h-80 md:h-96 group">
            <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 to-emerald-900/5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093746!2d144.95373531531766!3d-37.81627974202137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577cb3f2b6c3e0!2sMelbourne%20Zoo!5e0!3m2!1sen!2s!4v1635000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              title="Zoo Location"
              style={{ filter: "grayscale(0.2) contrast(1.1)" }}
            ></iframe>
          </div>

          {/* Map Overlay Info */}
          <div className="p-8 bg-gradient-to-r from-green-50 to-emerald-50 border-t-2 border-green-200">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-[#1B4332] to-[#2D6A4F] p-3 rounded-full shadow-lg mt-1">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Wildlife Zoo Park</h3>
                  <p className="text-gray-600 mt-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-800 rounded-full"></span>
                    123 Wildlife Avenue
                  </p>
                  <p className="text-gray-600 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-800 rounded-full"></span>
                    Melbourne, VIC 3000
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-center">
                <a
                  href="https://maps.google.com/?q=Melbourne+Zoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 bg-green-900 hover:bg-green-950 text-white rounded-xl font-semibold  transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 group"
                >
                  <FaDirections className="text-yellow-300 group-hover:scale-110 transition-transform duration-300" />
                  Get Directions
                </a>

                <button
                  onClick={copyAddress}
                  className="w-full sm:w-auto px-6 py-3 border-2 border-green-900 text-gray-800 rounded-xl font-semibold hover:bg-green-900 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2 group"
                >
                  <FaCopy className="text-green-700 group-hover:text-white transition-colors duration-300" />
                  Copy Address
                </button>
              </div>
            </div>
            {/* Additional Info */}
            <div className="mt-6 pt-6 border-t border-green-200 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: FaClock, label: "Opening Hours", value: "9:00 AM - 6:00 PM" },
                { icon: FaPhoneAlt, label: "Contact", value: "+123 456 7890" },
                { icon: FaTicketAlt, label: "Tickets", value: "Available Online" }
              ].map((item, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 group hover:-translate-y-1">
                  <div className="flex justify-center mb-2">
                    <item.icon className="text-2xl text-green-800 hover:text-green-900 transition-colors duration-300" />
                  </div>
                  <div className="text-sm text-gray-600">{item.label}</div>
                  <div className="font-semibold text-green-800">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Transportation Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="400">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-green-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FaCar className="text-green-800 text-xl" /> By Car
            </h3>
            <p className="text-gray-600">Free parking available. Follow signs to Zoo parking area.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-green-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FaBus className="text-green-800 text-xl" /> Public Transport
            </h3>
            <p className="text-gray-600">Bus routes 505 and 506 stop right outside the zoo entrance.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Map() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-green-100 px-4 sm:px-8 lg:px-16">
      <div className="max-w-8xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-0.5 bg-green-700 mr-3"></div>
            <span className="text-lg font-semibold tracking-wider text-green-700 uppercase">
              Zoo Location
            </span>
            <div className="w-12 h-0.5 bg-green-700 ml-3"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-sans">
            Visit Our Zoo
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore a world of wildlife! 🦁🐼🦒 Our zoo is open year-round and 
            located in the heart of the city. Come with your family and enjoy 
            the amazing animals, nature trails, and fun activities.
          </p>
        </div>

        {/* Map Container */}
        <div
          className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-100 transition-all duration-300 hover:shadow-2xl"
          data-aos="zoom-in"
        >
          <div className="relative w-full h-80 md:h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093746!2d144.95373531531766!3d-37.81627974202137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577cb3f2b6c3e0!2sMelbourne%20Zoo!5e0!3m2!1sen!2s!4v1635000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0"
              title="Zoo Location"
            ></iframe>
          </div>

          {/* Map Overlay Info */}
          <div className="p-6 bg-white border-t border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-semibold text-gray-900">City Zoo</h3>
                <p className="text-gray-600 mt-1">123 Wildlife Avenue</p>
                <p className="text-gray-600">Melbourne, VIC 3000</p>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://maps.google.com/?q=Melbourne+Zoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-green-700 text-white rounded-lg font-medium hover:bg-green-800 transition-colors duration-300 text-sm shadow-md hover:shadow-lg"
                >
                  Get Directions
                </a>
                <button
                  onClick={() =>
                    navigator.clipboard.writeText("123 Wildlife Avenue, Melbourne VIC 3000")
                  }
                  className="px-5 py-2.5 border border-green-700 text-gray-800 rounded-lg font-medium hover:bg-green-700 hover:text-white transition-colors duration-300 text-sm"
                >
                  Copy Address
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

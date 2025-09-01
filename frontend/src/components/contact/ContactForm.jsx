import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFileAlt,
  FaComments,
  FaQuestionCircle,
  FaPaperPlane,
  FaUser,
  FaHeading,
} from "react-icons/fa";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="max-w-8xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="text-center mb-16" data-aos="fade-up">
        <h1
          className="text-4xl font-bold text-gray-900 mb-4 font-serif"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Contact Our Zoo Team
        </h1>
        <p
          className="text-xl text-gray-600 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Have questions about tickets, animals, or events? Reach out and we'll
          be happy to help!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div
          className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-2xl sm:h-[115vh]"
          data-aos="fade-up"
        >
          <div className="bg-gradient-to-r from-[#2D6A4F] to-[#1B4332] py-6 px-8">
            <h2 className="text-white text-2xl font-semibold flex items-center gap-2">
              <FaPaperPlane className="text-white" />
              Send us a Message
            </h2>
            <p className="text-[#D8F3DC] mt-1">
              Our zookeepers reply as soon as possible 🦁
            </p>
          </div>

          <form className="p-8 space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FaUser className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full border border-gray-200 rounded-lg pl-10 p-3.5 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]/30 transition-all duration-300"
                required
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FaEnvelope className="text-gray-400" />
              </div>
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full border border-gray-200 rounded-lg pl-10 p-3.5 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]/30 transition-all duration-300"
                required
              />
            </div>

            <select className="w-full border border-gray-200 rounded-lg p-3.5 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]/30 transition-all duration-300 bg-white appearance-none">
              <option>Choose a Topic</option>
              <option>Ticket Information</option>
              <option>Animal Adoption</option>
              <option>Zoo Events</option>
              <option>General Inquiry</option>
            </select>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FaHeading className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-200 rounded-lg pl-10 p-3.5 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]/30 transition-all duration-300"
                required
              />
            </div>

            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full border border-gray-200 rounded-lg p-3.5 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]/30 transition-all duration-300"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#2D6A4F] hover:bg-[#1B4332] text-white py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 font-medium"
            >
              <FaPaperPlane />
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info + Quick Links */}
        <div
          className="space-y-8"
          data-aos="zoom-in-up"
          data-aos-delay="200"
        >
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 transition-all duration-300 hover:shadow-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200 flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#2D6A4F]" />
              Zoo Contact Information
            </h2>
            <ul className="space-y-6 text-gray-700">
              <li className="flex items-start gap-4">
                <div className="bg-[#D8F3DC] p-3 rounded-full flex items-center justify-center mt-1">
                  <FaEnvelope className="text-[#2D6A4F] text-lg" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600">info@wildlifezoo.org</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Replies within 24 hours
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-[#D8F3DC] p-3 rounded-full flex items-center justify-center mt-1">
                  <FaPhone className="text-[#2D6A4F] text-lg" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Phone</h3>
                  <p className="text-gray-600">+123 456 7890</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Call hours: 9AM - 5PM
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-[#D8F3DC] p-3 rounded-full flex items-center justify-center mt-1">
                  <FaMapMarkerAlt className="text-[#2D6A4F] text-lg" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Visit Us</h3>
                  <p className="text-gray-600">
                    Wildlife Zoo Park, Main City, Country
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Open daily 9AM - 7PM
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div
            className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 transition-all duration-300 hover:shadow-2xl"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200 flex items-center gap-2">
              <FaQuestionCircle className="text-[#2D6A4F]" />
              Quick Support
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 cursor-pointer transition-all duration-300 group">
                <div className="bg-[#D8F3DC] p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <FaFileAlt className="text-[#2D6A4F] text-lg" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Download Tickets</h3>
                  <p className="text-sm text-gray-600">
                    Access your zoo tickets
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 cursor-pointer transition-all duration-300 group">
                <div className="bg-[#D8F3DC] p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <FaComments className="text-[#2D6A4F] text-lg" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">
                    Animal Adoption & FAQs
                  </h3>
                  <p className="text-sm text-gray-600">
                    Learn how you can support animals
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 cursor-pointer transition-all duration-300 group">
                <div className="bg-[#D8F3DC] p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <FaQuestionCircle className="text-[#2D6A4F] text-lg" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Visit FAQs</h3>
                  <p className="text-sm text-gray-600">
                    Find answers about zoo timings & events
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Success message */}
      {isSubmitted && (
        <div
          className="mt-8 text-center text-green-700 font-semibold"
          data-aos="fade-up"
        >
          ✅ Thank you! Your message has been sent to the Zoo team.
        </div>
      )}
    </div>
  );
}

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
  FaLeaf,
  FaPaw,
  FaHeart
} from "react-icons/fa";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="max-w-8xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 to-emerald-50">
      {/* Decorative elements */}
      <div className="absolute left-10 top-20 opacity-10">
        <FaPaw className="text-6xl text-green-600" />
      </div>
      <div className="absolute right-10 bottom-20 opacity-10">
        <FaLeaf className="text-6xl text-green-600" />
      </div>

      {/* Heading */}
      <div className="text-center mb-16 relative" data-aos="fade-up">
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full"></div>
        <h1
          className="text-4xl md:text-5xl font-bold   mb-4 font-serif bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-emerald-800"
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

      <div className="grid md:grid-cols-2 gap-12 relative ">
        {/* Contact Form */}
        <div
          className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-green-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-[120vh]"
          data-aos="fade-up"
        >
          <div className="bg-gradient-to-r from-green-600 to-emerald-700 py-6 px-8 relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-green-500 rounded-full opacity-20"></div>
            <div className="absolute -left-4 -bottom-4 w-16 h-16 bg-emerald-400 rounded-full opacity-20"></div>
            
            <h2 className="text-white text-2xl font-semibold flex items-center gap-2 relative z-10">
              <FaPaperPlane className="text-yellow-300 animate-pulse" />
              Send us a Message
            </h2>
            <p className="text-green-100 mt-1 relative z-10">
            Our zookeepers reply as soon as possible 
          </p>
          </div>

          <form className="p-8 space-y-6" onSubmit={handleSubmit}>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FaUser className="text-green-500 group-hover:text-emerald-600 transition-colors duration-300" />
              </div>
              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full border border-green-200 rounded-xl pl-12 p-4 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 group-hover:shadow-lg group-hover:border-green-300"
                required
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FaEnvelope className="text-green-500 group-hover:text-emerald-600 transition-colors duration-300" />
              </div>
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full border border-green-200 rounded-xl pl-12 p-4 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 group-hover:shadow-lg group-hover:border-green-300"
                required
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FaFileAlt className="text-green-500 group-hover:text-emerald-600 transition-colors duration-300" />
              </div>
              <select className="w-full border border-green-200 rounded-xl pl-12 p-4 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 group-hover:shadow-lg group-hover:border-green-300 appearance-none bg-white">
                <option>Choose a Topic</option>
                <option>Ticket Information</option>
                <option>Animal Adoption</option>
                <option>Zoo Events</option>
                <option>General Inquiry</option>
              </select>
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FaHeading className="text-green-500 group-hover:text-emerald-600 transition-colors duration-300" />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-green-200 rounded-xl pl-12 p-4 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 group-hover:shadow-lg group-hover:border-green-300"
                required
              />
            </div>

            <div className="relative group">
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full border border-green-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 group-hover:shadow-lg group-hover:border-green-300"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 font-semibold transform hover:-translate-y-1 group"
            >
              <FaPaperPlane className="transform group-hover:translate-x-1 transition-transform duration-300" />
              Send Message
              <FaHeart className="text-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2" />
            </button>
          </form>
        </div>

        {/* Contact Info + Quick Links */}
        <div className="space-y-8">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-2xl shadow-2xl border border-green-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2" data-aos="zoom-in-up" data-aos-delay="200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-green-200 flex items-center gap-2">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-2 rounded-full">
                <FaMapMarkerAlt className="text-white text-lg" />
              </div>
              Contact Information
            </h2>
            <ul className="space-y-6 text-gray-700">
              {[
                { icon: FaEnvelope, title: "Email", info: "info@wildlifezoo.org", details: "Replies within 24 hours" },
                { icon: FaPhone, title: "Phone", info: "+123 456 7890", details: "Call hours: 9AM - 5PM" },
                { icon: FaMapMarkerAlt, title: "Visit Us", info: "Wildlife Zoo Park, Main City, Country", details: "Open daily 9AM - 7PM" }
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4 group hover:bg-green-50 p-3 rounded-xl transition-all duration-300">
                  <div className="bg-green-100 p-3 rounded-full flex items-center justify-center mt-1 group-hover:bg-green-200 group-hover:scale-110 transition-all duration-300">
                    <item.icon className="text-green-600 text-lg" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.info}</p>
                    <p className="text-sm text-green-500 mt-1">{item.details}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="bg-white p-8 rounded-2xl shadow-2xl border border-green-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2" data-aos="zoom-in" data-aos-delay="200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-green-200 flex items-center gap-2">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-2 rounded-full">
                <FaQuestionCircle className="text-white text-lg" />
              </div>
              Quick Support
            </h2>
            <ul className="space-y-4">
              {[
                { icon: FaFileAlt, title: "Download Tickets", description: "Access your zoo tickets" },
                { icon: FaComments, title: "Animal Adoption & FAQs", description: "Learn how you can support animals" },
                { icon: FaQuestionCircle, title: "Visit FAQs", description: "Find answers about zoo timings & events" }
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-4 p-4 rounded-xl hover:bg-green-50 cursor-pointer transition-all duration-300 group border border-transparent hover:border-green-200">
                  <div className="bg-green-100 p-3 rounded-full group-hover:bg-green-200 group-hover:scale-110 transition-all duration-300">
                    <item.icon className="text-green-600 text-lg" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 group-hover:text-emerald-800 transition-colors duration-300">{item.title}</h3>
                    <p className="text-sm text-gray-600 group-hover:text-green-700 transition-colors duration-300">{item.description}</p>
                  </div>
                  <FaPaw className="text-green-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Success message */}
      {isSubmitted && (
        <div
          className="mt-8 text-center py-4 px-6 bg-green-100 border border-green-400 text-green-700 rounded-xl font-semibold animate-pulse"
          data-aos="fade-up"
        >
          ✅ Thank you! Your message has been sent to the Zoo team.
        </div>
      )}
    </div>
  );
}
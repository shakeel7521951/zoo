import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPaw, FaTicketAlt, FaTimes, FaBars } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-gradient-to-r from-green-800 to-emerald-800 py-1 shadow-md">
        <div className="max-w-8xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-gradient-to-r from-emerald-600 to-green-700 p-2 rounded-lg mr-3 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <FaPaw className="h-7 w-7 text-white" />
              </div>
              <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-500">
                City Zoo
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-6">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="relative px-4 py-2 rounded-md text-sm font-medium text-white group overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-yellow-400 rounded-md transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out"></div>
                    <span className="relative text-[18px] z-10 group-hover:text-green-900 transition-colors duration-300">
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={() => setShowModal(true)}
                className="flex items-center text-[18px] px-4 py-2 bg-yellow-400 text-green-900 font-semibold rounded-md shadow-md hover:bg-yellow-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group"
              >
                <FaTicketAlt className="mr-2 text-[18px] transform group-hover:scale-110 transition-transform duration-300" />
                Buy Tickets
              </button>
              <Link
                to="/login"
                className="flex items-center text-[18px] px-4 py-2 bg-white text-green-700 font-medium rounded-md shadow hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group"
              >
                <IoMdLogIn className="mr-2 text-[18px] transform group-hover:scale-110 transition-transform duration-300" />
                Login
              </Link>
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-green-800 focus:outline-none transition-colors duration-300"
              >
                {isOpen ? (
                  <FaTimes className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out  ${
            isOpen
              ? "max-h-[70vh] opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          } bg-gradient-to-b from-green-700 to-emerald-800 shadow-xl`}
        >
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="block px-3 py-3 text-center rounded-md text-base font-medium text-white hover:bg-green-800 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-green-600 mt-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  setShowModal(true);
                }}
                className="flex items-center justify-center px-4 py-3 my-2 bg-yellow-400 text-green-900 font-semibold rounded-md shadow hover:bg-yellow-500 transition-colors duration-300 w-full"
              >
                <FaTicketAlt className="mr-2" /> Buy Tickets
              </button>
              <Link
                to="/login"
                className="flex items-center justify-center px-4 py-3 bg-white text-green-700 font-medium rounded-md shadow hover:bg-gray-100 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                <IoMdLogIn className="mr-2" /> Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Tickets Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div
            data-aos="zoom-in"
            className="bg-white w-full max-w-xl rounded-2xl shadow-2xl p-8 relative animate-fadeIn"
          >
            {/* Close */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition-colors"
            >
              <FaTimes size={22} />
            </button>

            {/* Header */}
            <div className="flex flex-col items-center text-center mb-8">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#2D6A4F]/100 hover:bg-yellow-400 shadow-md mb-3">
                <FaPaw className="text-white text-2xl" />
              </div>
              <h2 className="text-3xl font-extrabold text-green-800">
                Book Your Tickets
              </h2>
              <p className="text-gray-600 mt-2 text-sm">
                Experience a day full of adventure and wildlife at City Zoo
              </p>
            </div>

            {/* Form */}
            <form className="space-y-6">
              <div>
                <label className="block text-green-900 font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-600 focus:outline-none shadow-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-green-900 font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-600 focus:outline-none shadow-sm transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-green-900 font-semibold mb-2">
                    Tickets
                  </label>
                  <input
                    type="number"
                    min="1"
                    placeholder="e.g. 2"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-600 focus:outline-none shadow-sm transition-all"
                  />
                </div>
                <div>
                  <label className="block text-green-900 font-semibold mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-600 focus:outline-none shadow-sm transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 mt-4 bg-gradient-to-r from-green-800 to-emerald-900 text-white text-lg font-bold rounded-xl shadow-lg hover:from-green-900 hover:to-emerald-800 transform hover:-translate-y-1 transition-all duration-300"
              >
                Confirm Purchase
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

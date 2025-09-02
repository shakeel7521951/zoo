import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { FaPaw, FaLeaf, FaTicketAlt, FaTimes, FaBars } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Throttle function to limit how often scroll events are processed
  const throttle = (func, limit) => {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  }

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic'
    });
    
    const handleScroll = () => {
      // Use requestAnimationFrame for smoother performance
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 10);
      });
    };
    
    // Throttle the scroll event for better performance
    const throttledScroll = throttle(handleScroll, 100);
    
    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-green-700 via-green-600 to-emerald-700 shadow-xl py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link 
              to="/" 
              className="flex items-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-gradient-to-r from-emerald-600 to-green-700 p-2 rounded-lg mr-3 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <FaPaw className="h-7 w-7 text-white" />
              </div>
              <span
                className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-400`}
              >
                City Zoo
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="relative px-4 py-2 rounded-md text-sm font-medium text-white group overflow-hidden"
                >
                  {/* Hover effect background */}
                  <div className="absolute inset-0 bg-yellow-400 rounded-md transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out"></div>
                  
                  {/* Text with hover color change */}
                  <span className="relative z-10 group-hover:text-green-900 transition-colors duration-300">
                    {item.name}
                  </span>
                  
                  {/* Bottom indicator */}
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-yellow-400 group-hover:left-0 group-hover:w-full transition-all duration-300"></div>
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/tickets"
              className="flex items-center px-4 py-2 bg-yellow-400 text-green-900 text-sm font-semibold rounded-md shadow-md hover:bg-yellow-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group"
            >
              <FaTicketAlt className="mr-2 transform group-hover:scale-110 transition-transform duration-300" /> 
              Buy Tickets
            </Link>
            <Link
              to="/donate"
              className="flex items-center px-4 py-2 bg-white text-green-700 font-medium rounded-md shadow hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group"
            >
              <IoMdLogIn className="mr-2 transform group-hover:scale-110 transition-transform duration-300" /> 
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-green-800 focus:outline-none transition-colors duration-300"
              aria-label="Toggle menu"
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

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? "max-h-96 opacity-100 visible" 
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
            <Link
              to="/tickets"
              className="flex items-center justify-center px-4 py-3 my-2 bg-yellow-400 text-green-900 font-semibold rounded-md shadow hover:bg-yellow-500 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              <FaTicketAlt className="mr-2" /> Buy Tickets
            </Link>
            <Link
              to="/donate"
              className="flex items-center justify-center px-4 py-3 bg-white text-green-700 font-medium rounded-md shadow hover:bg-gray-100 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              <IoMdLogIn className="mr-2" /> Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
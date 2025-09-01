import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { GiElephant } from "react-icons/gi"; // Elephant icon

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2 text-green-700 font-bold text-2xl">
          <GiElephant className="text-3xl text-orange-500" />
          Zoofari
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-green-900 font-medium">
          <a href="#" className="hover:text-green-600">Home</a>
          <a href="#" className="hover:text-green-600">About</a>
          <a href="#" className="hover:text-green-600">Services</a>
          <a href="#" className="hover:text-green-600">Gallery</a>
          <a href="#" className="hover:text-green-600">Contact</a>
        </nav>

        {/* CTA Button */}
        <a
          href="#"
          className="hidden md:block bg-green-900 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-950 transition"
        >
          Buy Tickets
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-green-900 text-2xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden bg-green-50 shadow-lg px-6 py-4 flex flex-col gap-4 text-green-900 font-medium">
          <a href="#" className="hover:text-green-600">Home</a>
          <a href="#" className="hover:text-green-600">About</a>
          <a href="#" className="hover:text-green-600">Services</a>
          <a href="#" className="hover:text-green-600">Gallery</a>
          <a href="#" className="hover:text-green-600">Contact</a>
          <a
            href="#"
            className="bg-orange-500 text-white px-4 py-2 rounded-lg text-center shadow-md hover:bg-orange-600 transition"
          >
            Buy Tickets
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;

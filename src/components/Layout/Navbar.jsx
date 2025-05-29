// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"; // Adjusted path to src/components/

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0B0B5C] text-white h-[150px]">
      <div className="max-w-7xl mx-auto px-12 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                className="h-20 w-auto mt-[60px]"
                src={logo}
                alt="Data Driven Data Logo"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 mt-[60px]">
            <Link
              to="/"
              className="hover:text-[#F47B20] px-3 py-2 rounded-md text-sm font-bold"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-[#F47B20] px-3 py-2 rounded-md text-sm font-bold"
            >
              About
            </Link>
            <Link
              to="/service"
              className="hover:text-[#F47B20] px-3 py-2 rounded-md text-sm font-bold"
            >
              Services
            </Link>
            <Link
              to="/team"
              className="hover:text-[#F47B20] px-3 py-2 rounded-md text-sm font-bold"
            >
              Our Team
            </Link>
            <Link
              to="/contact"
              className="hover:text-[#F47B20] px-3 py-2 rounded-md text-sm font-bold"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex justify-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                /* Icon when menu is open */
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex justify-center md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-[#0b0b5c] w-full">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#f47b20]"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#f47b20]"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              About
            </Link>
            <Link
              to="/service"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#f47b20]"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              Services
            </Link>
            <Link
              to="/team"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#f47b20]"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              Our Team
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#f47b20]"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

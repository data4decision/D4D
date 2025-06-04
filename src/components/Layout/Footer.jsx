// src/components/Footer.jsx
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";
import logo from "../../assets/logo.png"; // Adjusted path for src/components/

const Footer = ({ navbarRef }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Function to handle navigation and scrolling
  const handleLinkClick = (path) => {
    // Navigate to the path
    if (location.pathname !== path) {
      navigate(path);
    }
    // Scroll to the navbar smoothly
    if (navbarRef && navbarRef.current) {
      navbarRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0b0b5c] text-white min-h-[800px] sm:min-h-[600px] py-12">
      <div className="max-w-8xl mx-auto px-6 sm:px-4 lg:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[30%_20%_15%_35%] gap-10 sm:gap-10 md:gap-8">
          {/* Column 1: Logo and Description (32%) */}
          <div className="flex flex-col items-center sm:items-start">
            <img
              src={logo}
              alt="Data Driven Data Logo"
              className="h-30 w-auto mb-4 m-auto"
            />
            <h1 className="text-[24px] sm:text-[28px] md:text-[30px] m-auto font-bold mb-6 text-center sm:text-left">
              D4D International
            </h1>
            <p className="text-[14px] sm:text-[15px] text-center md:text-justify max-w-[100%] m-auto sm:max-w-xs">
              We are a data-driven organization dedicated to empowering
              governments, NGOs, and businesses by transforming complex data
              into clear, actionable insights that drive strategic decisions and
              measurable impact.
            </p>
          </div>

          {/* Column 2: Contact Us (20%) */}
          <div className="flex flex-col items-center sm:items-start pl-2.5 mt-10">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              Contact Us
            </h3>
            <div className="flex items-center mb-3">
              <FaPhoneAlt className="mr-2" />
              <p className="text-[14px] sm:text-[15px]">Phone: 08069517707</p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2" />
              <p className="text-[14px] sm:text-[15px]">
                Email: data4decison25@gmail.com
              </p>
            </div>
          </div>

          {/* Column 3: Quick Links and Social Media (15%) */}
          <div className="flex flex-col items-center sm:items-start pl-3.5 mt-10">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 mb-6">
              <li>
                <button
                  onClick={() => handleLinkClick("/")}
                  className="text-[14px] sm:text-[15px] hover:text-[#F47B20] cursor-pointer bg-transparent border-none p-0 text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("/about")}
                  className="text-[14px] sm:text-[15px] hover:text-[#F47B20] cursor-pointer bg-transparent border-none p-0 text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("/service")}
                  className="text-[14px] sm:text-[15px] hover:text-[#F47B20] cursor-pointer bg-transparent border-none p-0 text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("/contact")}
                  className="text-[14px] sm:text-[15px] hover:text-[#F47B20] cursor-pointer bg-transparent border-none p-0 text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/baba_jehjeh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E1306C] hover:text-[#F47B20]"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://facebook.com/OluwamayowaAkinkunmi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1877F2] hover:text-[#F47B20]"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://wa.me/8069517707"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] hover:text-[#F47B20]"
              >
                <FaWhatsapp size={24} />
              </a>
              <a
                href="https://twitter.com/MrKunmi0903003"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1DA1F2] hover:text-[#F47B20]"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          {/* Column 4: Working Hours and About the Company (25%) */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 md:text-justify">
              Our Working Hours
            </h3>
            <h5 className="text-base sm:text-lg font-medium mb-4 md:text-justify">
              24 Hours Per Day
            </h5>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 md:text-justify">
              About the Company
            </h3>
            <p className="text-[14px] sm:text-[15px] text-center sm:text-left max-w-[90%] sm:max-w-xs md:text-justify">
              We are a data-driven organization committed to helping
              governments, non-governmental organizations (NGOs), and businesses
              harness the power of data to make informed decisions. By
              transforming complex and fragmented data into meaningful insights,
              we enable our partners to enhance service delivery, improve
              planning, and achieve greater impact. Our solutions are tailored
              to meet diverse contextual needs, ensuring data is accurate,
              accessible, and actionable for sustainable development and policy
              formulation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

<<<<<<< HEAD
import React, { useState, useEffect, useRef } from 'react';
import { 
  FaBars, 
  FaTimes, 
  FaChevronDown,
  FaChartBar,
  FaSearch,
  FaDatabase,
  FaChartLine,
  FaLaptopCode,
  FaLeaf,
  FaUsers
} from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const services = [
    { 
      name: "Monitoring, Evaluation, Accountability & Learning (MEAL)", 
      icon: <FaChartBar />,
      link: "#meal"
    },
    { 
      name: "Research & Evidence Generation", 
      icon: <FaSearch />,
      link: "#research"
    },
    { 
      name: "Data Collection & Management", 
      icon: <FaDatabase />,
      link: "#data-collection"
    },
    { 
      name: "Data Analytics & Business Intelligence", 
      icon: <FaChartLine />,
      link: "#analytics"
    },
    { 
      name: "Digital Transformation Solutions", 
      icon: <FaLaptopCode />,
      link: "#digital-transformation"
    },
    { 
      name: "Agriculture & Rural Development Solutions", 
      icon: <FaLeaf />,
      link: "#agriculture"
    },
    { 
      name: "Capacity Building & Technical Assistance", 
      icon: <FaUsers />,
      link: "#capacity-building"
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
  ${isScrolled 
    ? 'bg-white shadow-lg' 
    : 'bg-white/95 backdrop-blur-md shadow-sm'
  }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src='/logo.png' className='bg-white w-11 h-11 rounded-2xl object-contain shadow' alt="D4D Logo" />
            <div>
              <h1 className="text-[22px] font-bold tracking-tighter text-[#0b0b5c]">Data4Decision</h1>
              <p className="text-[10px] -mt-1 font-semibold tracking-[1.5px] text-[#0b0b5c]">INTERNATIONAL</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-9 text-[15px] font-medium">
            <a href="/home" className="nav-link text-[#0b0b5c] hover:text-[#f47b20] transition-colors duration-200">Home</a>
            <a href="/about" className="nav-link text-[#0b0b5c] hover:text-[#f47b20] transition-colors duration-200">About Us</a>
            
            {/* Services Dropdown - Improved */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onMouseEnter={() => setIsServicesOpen(true)}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center gap-1.5 text-[#0b0b5c] hover:text-[#f47b20] transition-colors duration-200 py-2"
              >
                Services
                <FaChevronDown className={`text-xs transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega Menu - Enhanced Styling */}
              {isServicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[440px] bg-white  rounded-3xl shadow-2xl p-3 border border-zinc-100">
                  {services.map((service, index) => (
                    <a 
                      key={index}
                      href={service.link}
                      onClick={() => setIsServicesOpen(false)}
                      className="flex items-start gap-5 p-3 rounded-2xl hover:bg-zinc-50 group transition-all duration-300 hover:-translate-x-1"
                    >
                      <div className="w-10 h-10 bg-[#0b0b5c]/5 text-[#f47b20] rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <div className="text-[15px] leading-tight text-[#0b0b5c] pt-1 font-medium group-hover:text-[#f47b20] transition-colors">
                        {service.name}
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#sectors" className="nav-link text-[#0b0b5c] hover:text-[#f47b20] transition-colors duration-200">Sectors</a>
            <a href="#projects" className="nav-link text-[#0b0b5c] hover:text-[#f47b20] transition-colors duration-200">Projects</a>
            <a href="#insights" className="nav-link text-[#0b0b5c] hover:text-[#f47b20] transition-colors duration-200">Insights</a>
            <a href="/contact" className="py-3 text-[#0b0b5c]" onClick={() => setIsOpen(false)}>Contacts</a>
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => alert("Get in Touch - Contact form would open here")}
            className="hidden lg:block px-8 py-3.5 bg-[#f47b20] hover:bg-[#e06a1a] text-white font-semibold rounded-full text-sm tracking-wider transition-all active:scale-95 shadow-lg shadow-orange-500/30"
          >
            Get in Touch
          </button>

          {/* Mobile Hamburger */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-3xl text-[#0b0b5c] transition-transform"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t shadow-2xl">
          <div className="px-6 py-10 flex flex-col gap-6 text-[17px] font-medium">
            <a href="/home" className="py-3 text-[#0b0b5c]" onClick={() => setIsOpen(false)}>Home</a>
            <a href="/about" className="py-3 text-[#0b0b5c]" onClick={() => setIsOpen(false)}>About Us</a>
            
            {/* Mobile Services */}
            <div className="py-3">
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full flex justify-between items-center text-left text-[#0b0b5c]"
              >
                Services
                <FaChevronDown className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="mt-6 pl-4 space-y-3 text-base">
                  {services.map((service, i) => (
                    <a 
                      key={i} 
                      href={service.link}
                      className="flex items-center gap-2 text-zinc-700 hover:text-[#f47b20] transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-[#f47b20] text-xl">{service.icon}</span>
                      <span>{service.name}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#sectors" className="py-3 text-[#0b0b5c]" onClick={() => setIsOpen(false)}>Sectors</a>
            <a href="#projects" className="py-3 text-[#0b0b5c]" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#insights" className="py-3 text-[#0b0b5c]" onClick={() => setIsOpen(false)}>Insights</a>
            <a href="/contact" className="py-3 text-[#0b0b5c]" onClick={() => setIsOpen(false)}>Contact</a>

            <button 
              onClick={() => {
                setIsOpen(false);
                alert("Get in Touch - Contact form would open here");
              }}
              className="mt-8 w-full py-5 bg-[#f47b20] text-white font-semibold rounded-3xl text-lg"
            >
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
=======
// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// // import logo from "../../assets/logo.png";

// // const Navbar = ({ navbarRef }) => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   return (
// //     <nav ref={navbarRef} className="bg-[#0B0B5C] text-white h-[150px]">
// //       <div className="max-w-7xl mx-auto px-12 sm:px-6 lg:px-8">
// //         <div className="flex items-center justify-between h-20">
// //           {/* Logo */}
// //           <div className="flex-shrink-0">
// //             <Link to="/">
// //               <img
// //                 className="h-20 w-auto mt-[60px]"
// //                 src={logo}
// //                 alt="Data Driven Data Logo"
// //               />
// //             </Link>
// //           </div>

// //           {/* Desktop Menu */}
// //           <div className="hidden md:flex space-x-8 mt-[60px]">
// //             <Link
// //               to="/"
// //               className="hover:text-[#F47B20] px-3 py-2 rounded-md text-sm font-bold"
// //             >
// //               Home
// //             </Link>
// //             <Link
// //               to="/about"
// //               className="hover:text-[#F47B20] px-3 py-2 rounded-md text-sm font-bold"
// //             >
// //               About
// //             </Link>
// //             <Link
// //               to="/service"
// //               className="hover:text-[#F47B20] px-3 py-2 rounded-md text-sm font-bold"
// //             >
// //               Services
// //             </Link>
// //             <Link
// //               to="/contact"
// //               className="hover:text-[#F47B20] px-3 py-2 rounded-md text-sm font-bold"
// //             >
// //               Contact
// //             </Link>
// //             <Link
// //               to="/video"
// //               className="hover:text-[#F47B20] px-3 py-2 rounded-md text-sm font-bold"
// //             >
// //               Conference
// //             </Link>
// //           </div>

// //           {/* Mobile Hamburger Button */}
// //           <div className="flex justify-center md:hidden">
// //             <button
// //               onClick={() => setIsOpen(!isOpen)}
// //               type="button"
// //               className="inline-flex items-center justify-center p-2 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
// //               aria-controls="mobile-menu"
// //               aria-expanded={isOpen}
// //             >
// //               <span className="sr-only">Open main menu</span>
// //               {!isOpen ? (
// //                 <svg
// //                   className="block h-6 w-6"
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   fill="none"
// //                   viewBox="0 0 24 24"
// //                   stroke="currentColor"
// //                   aria-hidden="true"
// //                 >
// //                   <path
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     strokeWidth="2"
// //                     d="M4 6h16M4 12h16M4 18h16"
// //                   />
// //                 </svg>
// //               ) : (
// //                 <svg
// //                   className="block h-6 w-6"
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   fill="none"
// //                   viewBox="0 0 24 24"
// //                   stroke="currentColor"
// //                   aria-hidden="true"
// //                 >
// //                   <path
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     strokeWidth="2"
// //                     d="M6 18L18 6M6 6l12 12"
// //                   />
// //                 </svg>
// //               )}
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Mobile Menu */}
// //       {isOpen && (
// //         <div className="flex justify-center md:hidden" id="mobile-menu">
// //           <div className="px-2 pt-2 pb-3 space-y-1 mt-9.5 bg-[#0b0b5c] w-full">
// //             <Link
// //               to="/"
// //               className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#f47b20]"
// //               onClick={() => setIsOpen(false)}
// //             >
// //               Home
// //             </Link>
// //             <Link
// //               to="/about"
// //               className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#f47b20]"
// //               onClick={() => setIsOpen(false)}
// //             >
// //               About
// //             </Link>
// //             <Link
// //               to="/service"
// //               className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#f47b20]"
// //               onClick={() => setIsOpen(false)}
// //             >
// //               Services
// //             </Link>
// //             <Link
// //               to="/contact"
// //               className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#f47b20]"
// //               onClick={() => setIsOpen(false)}
// //             >
// //               Contact
// //             </Link>
// //             <Link
// //               to="/video"
// //               className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#f47b20]"
// //               onClick={() => setIsOpen(false)}
// //             >
// //               Conference
// //             </Link>
// //           </div>
// //         </div>
// //       )}
// //     </nav>
// //   );
// // };

// // export default Navbar;

// // src/components/Navbar/Navbar.jsx
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../../assets/logo.png";

// const Navbar = ({ navbarRef }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav
//       ref={navbarRef}
//       className="bg-[#0B0B5C] text-white h-[150px] fixed top-0 left-0 right-0 z-50"
//     >
//       <div className="max-w-7xl mx-auto px-12 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <div className="flex-shrink-0 ">
//             <Link to="/">
//               <img
//                 className="sm:h-15 sm:w-15 h-12 w-12 mt-[60px] bg-white rounded-full"
//                 src={logo}
//                 alt="Data Driven Data Logo"
//               />
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-8 mt-[60px]">
//             <Link
//               to="/"
//               className="hover:text-[#F47B20] px-3 py-2 rounded-md text-sm font-bold"
//             >
//               Home
//             </Link>
//             <Link
//               to="/about"
//               className="hover:text-[#F47B20] px-3 py-2 rounded-md text-sm font-bold"
//             >
//               About
//             </Link>
//             <Link
//               to="/service"
//               className="hover:text-[#F47B20] px-3 py-2 rounded-md text-sm font-bold"
//             >
//               Services
//             </Link>
//             <Link
//               to="/contact"
//               className="hover:text-[#F47B20] px-3 py-2 rounded-md text-sm font-bold"
//             >
//               Contact
//             </Link>
//             {/* <Link
//               to="/video"
//               className="hover:text-[#F47B20] px-3 py-2 rounded-md text-sm font-bold"
//             >
//               Video Conference
//             </Link> */}
//           </div>

//           {/* Mobile Hamburger Button */}
//           <div className="flex justify-center md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               type="button"
//               className="inline-flex items-center justify-center p-2 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//               aria-controls="mobile-menu"
//               aria-expanded={isOpen}
//             >
//               <span className="sr-only">Open main menu</span>
//               {!isOpen ? (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="flex justify-center md:hidden" id="mobile-menu">
//           <div className="px-2 pt-2 pb-3 space-y-1 mt-9.5 bg-[#0b0b5c] w-full">
//             <Link
//               to="/"
//               className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#f47b20]"
//               onClick={() => setIsOpen(false)}
//             >
//               Home
//             </Link>
//             <Link
//               to="/about"
//               className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#f47b20]"
//               onClick={() => setIsOpen(false)}
//             >
//               About
//             </Link>
//             <Link
//               to="/service"
//               className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#f47b20]"
//               onClick={() => setIsOpen(false)}
//             >
//               Services
//             </Link>
//             <Link
//               to="/contact"
//               className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#f47b20]"
//               onClick={() => setIsOpen(false)}
//             >
//               Contact
//             </Link>
//             {/* <Link
//               to="/video"
//               className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#f47b20]"
//               onClick={() => setIsOpen(false)}
//             >
//               Video Conference
//             </Link> */}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, {useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <div className="hidden md:flex items-center justify-between px-20 py-5 bg-[#0b0b5c] border-b-5 border-[#f47b20]">
        <div className="flex items-center gap-2">
          <img src='/logo.png'  className='bg-white w-10 h-10 rounded-full object-contain'/>
          <h1 className='text-white text-[20px] font-bold'>Data4decision International</h1>
        </div>
        <div className="">
          <ul className='flex items-center gap-6 text-white text-[17px] font-bold'>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/service">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="md:hidden flex items-center justify-between px-10 py-3 bg-[#0b0b5c] border-b border-[#f47b20]">
        <div className="flex items-center gap-2">
          <img src='/logo.png'  className='bg-white w-10 h-10 rounded-full'/>
        </div>
        <div className="">
          <button onClick={()=>setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={25} className='text-[#0b0b5c] bg-white p-1'/> : <FaBars size={25} className='text-[#0b0b5c] bg-white p-1'/> }
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="">
          <ul className='flex flex-col  gap-3 py-3 bg-[#0b0b5c]  text-[17px]'>
            <li className='hover:text-[#f47b20] text-white hover:bg-[#ffffff] rounded-lg px-3 transition-all duration-300 ease-in-out'>
              <a href="/">Home</a>
            </li>
            <li className='py-1 hover:text-[#f47b20] text-white hover:bg-[#ffffff] rounded-lg px-3 transition-all duration-300 ease-in-out'>
              <a href="/about">About</a>
            </li>
            <li py-1 className='hover:text-[#f47b20] text-white hover:bg-[#ffffff] rounded-lg px-3 transition-all duration-300 ease-in-out'>
              <a href="/service">Services</a>
            </li>
            <li className='hover:text-[#f47b20] text-white hover:bg-[#ffffff] rounded-lg px-3 transition-all duration-300 ease-in-out'>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar
>>>>>>> 52e79d7ac623781fd5c4ba702b227a2f498a84a0

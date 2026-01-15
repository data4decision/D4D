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
      <div className="hidden md:flex items-center h-50 justify-between px-10 py-3 bg-[#0b0b5c] border-b border-[#f47b20]">
        <div className="flex items-center gap-2">
          <img src='/logo.png'  className='bg-white w-10 h-10 rounded-full'/>
          <h1 className='text-white text-[20px]'>Data4decision International</h1>
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

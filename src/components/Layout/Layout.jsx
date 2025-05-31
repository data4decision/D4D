import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Layout/Navbar";
import MapSection from "../Layout/map";
import Footer from "../Layout/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar /> {/* Renders Navbar once */}
      <main>
        <Outlet />
      </main>
      <MapSection />
      <Footer />
    </div>
  );
};

export default Layout;

// import { Link } from "react-router-dom";

// const Layout = () => {
//   return (
//     <div>
//       <nav>
//         <Link to="/">Home</Link>
//         <Link to="/aboutus">About Us</Link>
//         <Link to="/service">Service</Link>
//         <Link to="/team">Team</Link>
//         <Link to="/contact">Contact</Link>
//       </nav>
//       <Outlet />
//     </div>
//   );
// };

// export default Layout;

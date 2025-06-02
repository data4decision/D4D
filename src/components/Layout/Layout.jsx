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

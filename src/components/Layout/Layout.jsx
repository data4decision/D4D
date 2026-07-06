// src/components/Layout/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Layout/Navbar";
import MapSection from "../Layout/map";
import Footer from "../Layout/Footer";

const Layout = ({ navbarRef }) => {
  return (
    <div>
      <Navbar navbarRef={navbarRef} /> {/* Pass navbarRef to Navbar */}
      <main>
        <Outlet />
      </main>
      <MapSection />
      <Footer navbarRef={navbarRef} /> {/* Pass navbarRef to Footer */}
    </div>
  );
};

export default Layout;

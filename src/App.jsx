// src/App.jsx
import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./page/Home.jsx";
import About from "./page/About.jsx";
import Service from "./page/Service.jsx";
// import Team from "./page/Team.jsx";
import Contact from "./page/Contact.jsx";

const App = () => {
  const navbarRef = useRef(null);

  return (
    <Router basename="/">
      <Routes>
        <Route element={<Layout navbarRef={navbarRef} />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          {/* <Route path="/team" element={<Team />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

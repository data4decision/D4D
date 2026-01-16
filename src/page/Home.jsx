import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Hero1 from "../assets/Hero1.png";
import Hero2 from "../assets/Hero2.png";
import AboutSection from "../components/AboutSection.jsx";
import ServiceSection from "../components/ServiceSection.jsx";
import OurApproach from "../components/ourApproach.jsx"; // Fixed case (was ourApproach)
import AppointmentSection from "../components/AppointmentSection.jsx";
import ContactSection from "../components/ContactSection.jsx";
// import OurTeam from "../components/OurTeam.jsx";

const images = [Hero1, Hero2];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="flex flex-col md:flex-row h-[100vh] md:h-[400px] w-full bg-white text-[#0B0B5C]">
        <div className="w-full md:w-[60%] h-[50%] md:h-full flex flex-col justify-center p-6 md:p-20 mt-38">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-snug md:leading-tight">
            Empower Smarter Decisions Through Data Intelligence
          </h1>
          <p className="mb-6 md:mb-6 text-base md:text-lg max-w-[95%]">
            We are a data-driven organization dedicated to empowering
            governments, NGOs, and businesses by transforming complex data into
            clear, actionable insights that drive strategic decisions and
            measurable impact.
          </p>

          <Link
            to="/about" 
            className="bg-[#F47B20] mb-10 text-white font-semibold px-5 py-2 md:px-6 md:py-3 rounded hover:bg-white hover:text-[#F47B20] transition duration-300 w-max"
          >
            Learn More
          </Link>
        </div>
        <div className="w-full md:w-[40%] h-[50%] md:h-full bg-[#FFF] relative overflow-hidden flex items-center justify-center p-4 mt-30">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Hero ${index + 1}`}
              className={`absolute max-h-[90%] max-w-[90%] object-contain rounded-lg transition-transform duration-1000 ease-in-out
                ${
                  index === currentIndex
                    ? "translate-x-0 opacity-100 z-10"
                    : "translate-x-full opacity-0 z-0"
                }`}
            />
          ))}
        </div>
      </section>
      <AboutSection className="mb-[150px]" />
      <ServiceSection />
      <OurApproach />
      <AppointmentSection />

      <div className="mb-50">
        <ContactSection />
        {/* <OurTeam /> */}
      </div>
    </>
  );
};

export default Home;

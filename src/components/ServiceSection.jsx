import React from "react";
import { Link } from "react-router-dom";
import Service1 from "../assets/Service1.png";
import Service2 from "../assets/Service2.png";
import Service3 from "../assets/Service3.png";

const ServiceSection = () => {
  return (
    <section className="bg-[#fff] py-20 px-6 md:px-16 mt-[100px]">
      <h1 className="text-[70px] text-[#0B0B5C] text-center font-bold mb-6">
        Our Services
      </h1>
      <p className="text-[#0B0B5C] text-center max-w-5xl mx-auto mb-12 text-base">
        At Data4Decision, we provide full-cycle data management and analytics,
        from collection to insight, empowering governments, NGOs, and businesses
        to make impactful, data-driven decisions. We decode complex data to
        drive transformational change for people, products, and organizations
        through tailored strategies, smart reporting, and actionable
        intelligence that fuel growth, innovation, and success.
      </p>

      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8">
        {/* Left Column */}
        <div className="bg-[#0B0B5C] p-5 text-center text-white rounded-[10px] max-w-sm w-full mx-auto lg:ml-[100px] lg:mr-0 shadow-[0_4px_8px_rgba(0,0,0,0.1)] animate-slide-up">
          <img
            src={Service1}
            alt="Real-time Learning"
            className="mx-auto mb-4 h-40"
          />
          <h3 className="text-[20px] font-semibold mb-2">
            Real-time Learning and Adaptation
          </h3>
          <p className="text-[15px]">
            We implement real-time learning and adaptation to ensure our systems
            continuously evolve. By instantly learning from new data, we stay
            agile, improving accuracy, anticipating user needs, and responding
            swiftly to market shifts.
          </p>
        </div>

        {/* Middle Column */}
        <div className="bg-[#0B0B5C] p-5 text-center text-white rounded-[10px] max-w-sm w-full mx-auto lg:mx-[50px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] animate-slide-up">
          <img
            src={Service2}
            alt="Personalization"
            className="mx-auto mb-4 h-40"
          />
          <h3 className="text-[20px] font-semibold mb-2">
            Personalization Algorithms
          </h3>
          <p className="text-[15px]">
            These tools adjust what users see based on their needs or actions,
            helping make information more relevant and easy to use.
          </p>
        </div>

        {/* Right Column */}
        <div className="bg-[#0B0B5C] p-5 text-center text-white rounded-[10px] max-w-sm w-full mx-auto lg:mr-[100px] lg:ml-0 shadow-[0_4px_8px_rgba(0,0,0,0.1)] animate-slide-up">
          <img
            src={Service3}
            alt="Autonomous Decision"
            className="mx-auto mb-4 h-40"
          />
          <h3 className="text-[20px] font-semibold mb-2">
            Autonomous Decision-Making
          </h3>
          <p className="text-[15px]">
            We leverage autonomous decision-making systems to streamline
            operations by enabling technology to make real-time, data-driven
            choices without human intervention. This boosts efficiency, reduces
            errors, accelerates response times, and enhances overall accuracy.
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-6 mt-12">
        <Link
          to="/service" // Updated path to match the route in App.jsx
          className="bg-[#F47B20] text-white px-6 py-3 rounded-md text-[13px] hover:bg-[#0B0B5C] transition"
        >
          Discover More
        </Link>
        <Link
          to="/contact" // Path matches the route in App.jsx
          className="bg-[#0B0B5C] text-[#FFF] px-6 py-3 rounded-md text-[13px] hover:bg-[#F47B20] transition"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default ServiceSection;

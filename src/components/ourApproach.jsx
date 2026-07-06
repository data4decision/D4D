import React from "react";
import ApproachImage from "../assets/approach.jpg"; // Adjust the path to your image
import WhatImage from "../assets/what.jpg"; // Adjust the path to your image
import SolveImage from "../assets/solve.jpg"; // Adjust the path to your image

const ourApproach = () => {
  return (
    <>
      {/* Our Approach Section */}
      <section
        className="h-[500px] bg-cover bg-top bg-no-repeat flex justify-center items-center text-center mb-[100px] mt-[150px]"
        style={{ backgroundImage: `url(${ApproachImage})` }}
      >
        <div className="max-w-full px-5 pr-4 pl-4 sm:pr-10 sm:pl-10 md:pr-20 md:pl-20">
          <h1 className="text-[40px] md:text-[70px] text-white mb-0 font-bold font-['Montserrat'] tracking-tight">
            Our Approach
          </h1>
          <p className="text-[15px] text-white leading-relaxed font-['Montserrat'] font-light">
            We take a strategic and collaborative approach to advancing data
            excellence across sectors. Grounded in our core mandate, we work to
            strengthen information systems, build local capacity, and promote
            robust data governance. Through tailored technical support, hands-on
            training, and ethical data practices, we deliver sustainable
            solutions that empower stakeholders to manage, interpret, and apply
            data effectively for informed decision-making, improved service
            delivery, and long-term development impact.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-white mt-[150px] mb-[100px] flex flex-col md:flex-row">
        {/* Text Column (Left on Desktop, Top on Mobile) */}
        <div className="w-full md:w-1/2 flex items-center justify-center m-6 sm:m-10 md:m-[100px] order-1 md:order-1">
          <div>
            <h4 className="text-[30px] sm:text-[40px] text-[#0B0B5C] mb-4 font-bold font-['Montserrat'] tracking-tight">
              What We Do
            </h4>
            <p className="text-[1px] sm:text-[15px] text-[#0B0B5C] leading-relaxed font-['Montserrat'] font-light">
              We empower organizations to make informed decisions through
              data-driven solutions. Our expertise spans tailored technical
              support for strengthening information systems, developing
              sustainable local capacity in data management, and promoting high
              standards in data governance. We work across public and private
              sectors to design, implement, and optimize platforms that ensure
              timely, ethical, and impactful decision-making. Through our
              consulting services, we bridge data gaps, enhance analytical
              capabilities, and build resilient systems that drive progress.
              Whether it’s strategy, capacity building, or governance, we
              deliver actionable insights and support that turn complex data
              into meaningful results.
            </p>
          </div>
        </div>

        {/* Image Column (Right on Desktop, Bottom on Mobile) */}
        <div className="w-full md:w-1/2 flex items-center justify-center order-2 md:order-2 md:ml-[10px] md:mr-[100px]">
          <img
            src={WhatImage}
            alt="What We Do"
            className="w-full max-w-[600px] h-auto m-6 sm:m-10 animate-slide-up md:animate-none"
          />
        </div>
      </section>

      {/* What We Solve Section */}
      <section className="bg-white mt-[100px] mb-[150px] flex flex-col md:flex-row">
        {/* Image Column (Left on Desktop, Bottom on Mobile) */}
        <div className="w-full md:w-2/5 flex items-center justify-center order-2 md:order-1 md:mr-[10px] md:ml-[100px] ">
          <img
            src={SolveImage}
            alt="What We Solve"
            className="w-full max-w-[500px] h-auto m-6 sm:m-10 md:mr-[10px] md:ml-[7px] animate-slide-up md:animate-none"
          />
        </div>

        {/* Text Column (Right on Desktop, Top on Mobile) */}
        <div className="w-full md:w-1/2 flex items-center justify-center m-6 sm:m-10 md:m-[100px]  order-1 md:order-2">
          <div>
            <h4 className="text-[30px] sm:text-[40px] text-[#0B0B5C] mb-4 font-bold font-['Montserrat'] tracking-tight">
              What We Solve
            </h4>
            <p className="text-[14px] sm:text-[15px] text-[#0B0B5C] leading-relaxed font-['Montserrat'] font-light">
              At D4D International, we address critical challenges that hinder
              effective decision-making in data-scarce environments. Many
              organizations struggle with fragmented information systems, low
              data literacy, and unreliable data sources. We solve these
              problems by strengthening digital infrastructures, streamlining
              data flows, and delivering targeted technical support that ensures
              systems are responsive, interoperable, and secure. Our work
              tackles skill gaps through sustainable capacity-building programs,
              empowering local professionals to analyze, manage, and use data
              confidently. We also champion data governance and quality
              assurance, ensuring that information is accurate, ethical, and
              decision-ready. From improving public health reporting to
              optimizing service delivery across sectors, we provide holistic,
              context-specific solutions that build trust in data and enhance
              institutional performance. Our integrated approach ensures that
              data is not just collected—but transformed into a powerful tool
              for planning, accountability, and growth. With D4D, organizations
              move from information overload to strategic clarity.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ourApproach;

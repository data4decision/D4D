import React, { useEffect, useRef, useState } from "react";
import AboutImage from "../assets/about.jpg";
import { Link } from "react-router-dom";
const AboutSection = () => {
  const imageRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (imageRef.current) observer.observe(imageRef.current);
    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section className="mt-[150px] mb-[50px] pt-[150px] pb-[150px] bg-[#0B0B5C] text-[#FFF] px-4 md:px-[70px]">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-[100px]">
        {/* Left - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={AboutImage}
            alt="About Us"
            ref={imageRef}
            className={`w-[90%] md:w-[95%] lg:w-full max-w-[600px] h-auto object-contain rounded-lg transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        {/* Right - Text Section */}
        <div className="w-full md:w-1/2 ml-0 md:mr-[0px] text-center md:text-left">
          {/* 👉 Margin-left on desktop, centered on mobile */}
          <h1 className="text-[36px] md:text-[50px] lg:text-[70px] font-bold mb-4">
            About us
          </h1>
          <h4 className="text-[22px] md:text-[30px] lg:text-[40px] font-semibold mb-4">
            Who we are
          </h4>
          <p className="text-[15px] mb-6 leading-relaxed px-2 md:px-0">
            We are a data-driven organization committed to helping governments,
            non-governmental organizations (NGOs), and businesses harness the
            power of data to make informed decisions. By transforming complex
            and fragmented data into meaningful insights, we enable our partners
            to enhance service delivery, improve planning, and achieve greater
            impact. Our solutions are tailored to meet diverse contextual needs,
            ensuring data is accurate, accessible, and actionable for
            sustainable development and policy formulation.
          </p>

          <Link
            to="/about"
            className="bg-[#F47B20] text-white text-[15px] font-semibold px-6 py-2 rounded hover:bg-white hover:text-[#0B0B5C] transition duration-300"
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion"; // Import framer-motion
import AboutImage from "../assets/about.jpg";
import WhyChooseUs from "../components/WhyChooseUs";

const AboutUs = () => {
  // Animation variants for Mission (slide in from left)
  const missionVariants = {
    hidden: { opacity: 0, x: -100 }, // Start off-screen to the left
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: "easeOut", delay: 0.4 },
    },
  };

  // Animation variants for Vision (slide in from right)
  const visionVariants = {
    hidden: { opacity: 0, x: 100 }, // Start off-screen to the right
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: "easeOut", delay: 0.4 },
    },
  };

  // Intersection Observer for image animation
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
    <div className="bg-white">
      {/* About Section */}
      <section className="mb-[50px] pt-[150px] pb-[150px] bg-white text-[#0B0B5C] px-4 md:px-[70px]">
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
          <div className="w-full md:w-1/2 ml-0 md:mr-[100px] text-center md:text-left">
            <h1 className="text-[36px] md:text-[50px] lg:text-[70px] font-bold mb-4">
              About us
            </h1>
            <h4 className="text-[22px] md:text-[30px] lg:text-[40px] font-semibold mb-4">
              Who we are
            </h4>
            <p className="text-[15px] mb-6 leading-relaxed px-2 md:px-0">
              We are a data-driven organization committed to helping
              governments, non-governmental organizations (NGOs), and businesses
              harness the power of data to make informed decisions. By
              transforming complex and fragmented data into meaningful insights,
              we enable our partners to enhance service delivery, improve
              planning, and achieve greater impact. Our solutions are tailored
              to meet diverse contextual needs, ensuring data is accurate,
              accessible, and actionable for sustainable development and policy
              formulation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision Content */}
      <div className="  mt-20">
        <div className="bg-[#0B0B5C] h-[500px] max-w-8xl mx-auto px-4 sm:px-6 lg:px-16 py-10 sm:py-12 lg:py-16">
          <div className=" mt-15 flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* First Column: Mission */}
            <motion.div
              className="flex-1 bg-[#fff] item-center p-6 sm:p-8 rounded-lg shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={missionVariants}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-[#0B0B5C]">
                OUR MISSION
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-[#0B0B5C]">
                Our mission is to strengthen information systems, promote
                ethical data governance, and build sustainable local capacity by
                providing tailored technical support, inclusive training, and
                reliable digital tools that drive informed decision-making and
                long-term impact.
              </p>
            </motion.div>

            {/* Second Column: Vision */}
            <motion.div
              className="flex-1 bg-[#F47B20] p-6 sm:p-8 rounded-lg shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={visionVariants}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
                OUR VISION
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-white/90">
                To be a leading force in transforming communities through
                data-driven development, empowering organizations and
                individuals with innovative digital solutions that ensure
                equity, accountability, and sustainable progress.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <div className=" bg-amber-900 mt-48 mb-40">
        <WhyChooseUs />
      </div>
    </div>
  );
};

export default AboutUs;

import React from "react";
import { motion } from "framer-motion"; // Import framer-motion
import AboutSection from "../components/AboutSection";
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
      transition: { duration: 0.9, ease: "easeOut", delay: 0.4 }, // Slight delay for staggered effect
    },
  };

  return (
    <div className="bg-white">
      {/* Existing AboutSection */}
      <AboutSection />

      {/* Mission and Vision Content */}
      <div className="bg-white mb-16 mt-20">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-16 py-10 sm:py-12 lg:py-16">
          <div className="mt-20 flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* First Column: Mission */}
            <motion.div
              className="flex-1 bg-[#0B0B5C] p-6 sm:p-8 rounded-lg shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the element is in view
              variants={missionVariants}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
                OUR MISSION
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-white/90">
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
          <WhyChooseUs />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

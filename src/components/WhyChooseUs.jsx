import React from "react";
import { motion } from "framer-motion";
import choose1 from "../assets/choose1.png";
import choose2 from "../assets/choose2.png";
import choose3 from "../assets/choose3.png";
import choose4 from "../assets/choose4.png";

const WhyChooseUs = () => {
  // Animation variants for the header (slide in from left)
  const headerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Animation variants for the paragraph (slide in from right)
  const paragraphVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  // Animation variants for the columns (slide in from bottom)
  const columnVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: i * 0.2, // Staggered animation for each column
      },
    }),
  };

  // Data for the four columns
  const columnsData = [
    {
      image: choose1,
      title: "Strengthening Information Systems",
      text: "we design adaptive and resilient information systems tailored to real-world challenges. Our integrated solutions help organizations collect, manage, and analyze data effectively—enabling strategic decisions that produce sustainable, measurable results.",
    },
    {
      image: choose2,
      title: "Promoting Ethical Data Governance",
      text: "We champion ethical data use by embedding transparency, privacy, and responsibility into every solution. Our governance frameworks ensure that data protects communities’ rights and contributes to development goals without compromising trust or ethical standards. ",
    },
    {
      image: choose3,
      title: "Building Sustainable Local Capacity",
      text: "We foster lasting impact by empowering local institutions through inclusive training and mentorship. Our goal is sustainable independence—equipping stakeholders with the skills and confidence to manage and maintain data systems long after implementation.",
    },
    {
      image: choose4,
      title: "Providing Tailored Technical Support & Reliable Tools",
      text: "D4D International offers expert technical support and digital tools customized for unique environments. Whether for governments, NGOs, or businesses, our solutions simplify complexity, enabling impactful decisions through collaborative innovation and reliable technology.",
    },
  ];

  return (
    <>
      {/* First Section: Why Choose Us Header and Paragraph */}
      <div className="bg-[#0B0B5C] py-10 mt-[150px] sm:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#fff] mb-4 sm:mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={headerVariants}
          >
            WHY CHOOSE US
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg lg:text-xl text-[#fff] max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={paragraphVariants}
          >
            We empower governments, institutions, and organizations through
            expert training, ethical data governance, and tailored solutions
            that enhance data-driven decision-making for sustainable development
            and long-term impact.
          </motion.p>
        </div>
      </div>

      {/* Second Section: Four Columns */}
      <div className="bg-[#0B0B5C] py-10 sm:py-12 lg:py-16">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {columnsData.map((column, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={columnVariants}
                custom={index} // Pass index for staggered animation
              >
                <img
                  src={column.image}
                  alt={column.title}
                  className="w-24 h-24 sm:w-28 sm:h-28 object-contain mb-4"
                />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#0B0B5C] mb-3">
                  {column.title}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-[#0B0B5C]">
                  {column.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;

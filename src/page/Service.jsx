import { motion } from "framer-motion";
import solve1 from "../assets/solve1.png";
import solve2 from "../assets/solve2.png";
import solve3 from "../assets/solve3.png";
import solve4 from "../assets/solve4.png";
import Service1 from "../assets/Service1.png";
import Service2 from "../assets/Service2.png";
import Service3 from "../assets/Service3.png";

const Service = () => {
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
      image: solve1,
      title: "Breaking barriers between data systems.",
      text: "we address the widespread issue of disconnected systems and scattered data. We design integrated digital infrastructures that promote interoperability and streamline data collection, making critical information accessible, reliable, and actionable across various platforms and institutions.",
    },
    {
      image: solve2,
      title: "Low Data Literacy and Capacity Gaps",
      text: "Many organizations face skill shortages in managing and interpreting data. We fill these gaps through inclusive training and mentoring programs that build local expertise—empowering teams to confidently analyze data, generate insights, and make evidence-based decisions. ",
    },
    {
      image: solve3,
      title: "Unethical Data Use and Governance Challenges",
      text: "We champion ethical data governance by embedding transparency, privacy, and accountability into every project. Our policies and frameworks ensure that data is collected and used responsibly, protecting rights while maximizing its value for development.",
    },
    {
      image: solve4,
      title: "Poor Decision-Making from Unusable Data",
      text: "From public health to education, poor data quality leads to weak planning. D4D provides tailored support to improve data accuracy and usability, transforming raw data into strategic tools that drive better service delivery, planning, and institutional growth.",
    },
  ];

  return (
    <div>
      <div className="bg-[#fff] py-20 px-6 md:px-16 mt-[100px]">
        <h1 className="text-[70px] text-[#0B0B5C] text-center font-bold mb-6">
          Our Services
        </h1>
        <p className="text-[#0B0B5C] text-center max-w-5xl mx-auto mb-12 text-base">
          At Data4Decision, we provide full-cycle data management and analytics,
          from collection to insight, empowering governments, NGOs, and
          businesses to make impactful, data-driven decisions. We decode complex
          data to drive transformational change for people, products, and
          organizations through tailored strategies, smart reporting, and
          actionable intelligence that fuel growth, innovation, and success.
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
              We implement real-time learning and adaptation to ensure our
              systems continuously evolve. By instantly learning from new data,
              we stay agile, improving accuracy, anticipating user needs, and
              responding swiftly to market shifts.
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
              choices without human intervention. This boosts efficiency,
              reduces errors, accelerates response times, and enhances overall
              accuracy.
            </p>
          </div>
        </div>
      </div>
      {/* First Section: Why Choose Us Header and Paragraph */}
      <div className="bg-[#0B0B5C] py-10 mt-[150px] sm:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
          <motion.h1
            className="text-3xl mt-5.5 sm:text-4xl lg:text-5xl font-bold text-[#fff] mb-4 sm:mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={headerVariants}
          >
            What We Solve
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg lg:text-xl text-[#fff] max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={paragraphVariants}
          >
            We fix broken systems, teach people how to use data, keep data safe
            and honest, and turn data into smart decisions.
          </motion.p>
        </div>
      </div>

      {/* Second Section: Four Columns */}
      <div className="bg-[#0B0B5C] py-20 mb-[200px] sm:py-12 lg:py-16">
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
    </div>
  );
};

export default Service;

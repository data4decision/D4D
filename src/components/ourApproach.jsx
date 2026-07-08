import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaSearch, 
  FaDatabase, 
  FaChartLine, 
  FaBullseye, 
  FaArrowRight 
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const steps = [
  {
    icon: <FaSearch />,
    title: "Research & Needs Assessment",
    desc: "We begin by understanding client objectives, identifying challenges, and conducting comprehensive research."
  },
  {
    icon: <FaDatabase />,
    title: "Data Collection & Management",
    desc: "We collect, organize, and manage high-quality data using reliable methodologies and digital tools."
  },
  {
    icon: <FaChartLine />,
    title: "Analysis & Strategic Insights",
    desc: "Transforming complex data into meaningful insights through advanced analysis and visualization."
  },
  {
    icon: <FaBullseye />,
    title: "Implementation & Sustainable Impact",
    desc: "Supporting implementation, monitoring outcomes, and ensuring long-term sustainable results."
  },
];

const OurApproach = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#f47b20]/70 to-[#0b0b5c]/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Uniform 2x2 Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4 h-[620px]">
              {/* Top Left */}
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80" 
                  alt="Workshop" 
                  className="w-full h-full object-cover" 
                />
              </div>
              
              {/* Top Right */}
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80" 
                  alt="Presentation" 
                  className="w-full h-full object-cover" 
                />
              </div>
              
              {/* Bottom Left */}
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80" 
                  alt="Large Training" 
                  className="w-full h-full object-cover" 
                />
              </div>
              
              {/* Bottom Right */}
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80" 
                  alt="Speaker" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Process Timeline */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block bg-[#f47b20] text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
                How We Work
              </div>
              <h2 className="text-5xl font-bold tracking-tighter text-[#0b0b5c] mb-6">
                Our Approach
              </h2>
              <p className="text-lg text-[#0b0b5c]/90">
                At Data4Decision International, we follow a collaborative, evidence-based approach that transforms data into actionable insights and sustainable impact.
              </p>
            </motion.div>

            {/* Vertical Timeline */}
            <div className="mt-6 relative pl-8 border-l-2 border-[#f47b20]/20 space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.12 }}
                  className="relative"
                >
                  <div className="absolute -left-[53px] w-10 h-10 bg-white border-4 border-[#f47b20] rounded-full flex items-center justify-center text-[#f47b20] text-2xl z-10">
                    {step.icon}
                  </div>

                  <div className="bg-white rounded-3xl px-8 py-4 shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-[#f47b20]">
                    <h3 className="text-2xl font-semibold text-[#0b0b5c] mb-4">{step.title}</h3>
                    <p className="text-[#0b0b5c]/90 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Commitment & CTA */}
        <div className="mt-10 text-center">
          <div className="inline-block bg-white border-l-8 border-[#f47b20] rounded-3xl px-10 py-5 md:px-7 py-7 shadow-xl max-w-3xl">
            <h3 className="text-3xl font-bold text-[#0b0b5c] mb-4">Our Commitment</h3>
            <p className="text-lg text-[#0b0b5c]/90">
              We combine research excellence, innovative technology, and collaborative partnerships 
              to deliver sustainable, measurable, and data-driven solutions that create lasting impact.
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">
            <Link to="/services" className="px-10 py-4 bg-[#f47b20] hover:bg-orange-600 text-white font-semibold rounded-2xl transition-all hover:scale-105 flex items-center gap-3">
              Explore Our Services <FaArrowRight />
            </Link>
            <Link to="/contact" className="px-10 py-4 border-2 border-[#0b0b5c] text-[#0b0b5c] hover:bg-[#0b0b5c] hover:text-white font-semibold rounded-2xl transition-all">
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCheck } from 'react-icons/fa';

const ResearchSection = () => {
  const coreServices = [
    "Quantitative Research",
    "Qualitative Research",
    "Mixed-Methods Studies",
    "Needs Assessments",
    "Market Assessments",
    "Household Surveys",
    "Community Assessments",
    "Policy Research",
    "Operational Research",
    "Socioeconomic Studies",
    "Report Writing and Publication Support"
  ];

  return (
    <section id="research" className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 mb-6 bg-[#F47B20]/20 px-3 py-1 rounded-2xl animate-pulse">
              <div className="w-2 h-2 bg-[#F47B20] rounded-full" />
              <span className="uppercase tracking-[3px] text-sm font-semibold text-[#F47B20]">
                SERVICE AREA 02
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0B0B5C] leading-tight tracking-tight mb-4">
              RESEARCH &amp;<br />
              EVIDENCE GENERATION
            </h2>

            <p className="text-2xl text-[#F47B20] font-medium leading-tight mb-8">
              Generate evidence. Understand realities. Inform decisions.
            </p>

            <p className="md:text-lg text-sm text-[#0b0b5c]  leading-relaxed mb-12">
              We provide high-quality research services that generate actionable insights for decision-makers, 
              helping organisations understand complex challenges, identify opportunities, and develop 
              evidence-based strategies, programmes, and policies.
            </p>

            {/* Core Services */}
            <div className="mb-12">
              <h4 className="font-semibold text-[#0B0B5C] text-xl mb-6">Core Services</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {coreServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3 group/item"
                  >
                    <div className="mt-1.5 text-[#F47B20]">
                      <FaCheck className="w-4 h-4" />
                    </div>
                    <span className="text-[#0b0b5c] text-sm leading-snug group-hover/item:text-[#0B0B5C] transition-colors">
                      {service}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-3 bg-[#0B0B5C] hover:bg-[#F47B20] text-white px-5 py-3 rounded-2xl font-medium text-lg transition-all duration-300"
            >
              Discuss Your Research Needs
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3.1] group"
          >
            <img 
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070" 
              alt="Research and evidence generation in development"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0b0b5c]/40 via-transparent to-[#0b0b5c]/30" />
            
            {/* Number Overlay */}
            <div className="absolute top-8 right-8">
              <div className="text-[140px] font-bold leading-none text-white/10 tracking-[-0.04em]">
                02
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
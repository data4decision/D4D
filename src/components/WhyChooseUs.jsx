import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaBrain, 
  FaUsers, 
  FaChartLine, 
  FaLightbulb, 
  FaGlobeAfrica, 
  FaShieldAlt 
} from 'react-icons/fa';

const features = [
  {
    icon: <FaBrain />,
    title: "Evidence-Based Decision Making",
    desc: "We transform complex data into clear, actionable insights that drive smarter policies and strategies."
  },
  {
    icon: <FaUsers />,
    title: "Expert Multidisciplinary Team",
    desc: "Seasoned experts across research, data science, technology, agriculture, health, and development."
  },
  {
    icon: <FaChartLine />,
    title: "Data Analytics & Research Excellence",
    desc: "High-quality research, advanced analytics, monitoring, and evaluation with proven methodologies."
  },
  {
    icon: <FaLightbulb />,
    title: "Innovation & Digital Solutions",
    desc: "Cutting-edge digital platforms, information systems, and technology-driven solutions."
  },
  {
    icon: <FaGlobeAfrica />,
    title: "Sustainable Development Focus",
    desc: "Solutions designed for long-term impact, institutional strengthening, and community empowerment."
  },
  {
    icon: <FaShieldAlt />,
    title: "Integrity & Professionalism",
    desc: "Uncompromising standards of ethics, transparency, and accountability in all our work."
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-[#0b0b5c] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-6"
          >
            <span className="text-[#f47b20]">★</span>
            <span className="uppercase tracking-widest text-sm font-medium">Why Choose Us</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
            Why Organizations Trust <span className="text-[#f47b20]">D4D</span>
          </h2>
          <p className="mt-6 text-xl text-white/70 max-w-2xl mx-auto">
            We deliver more than data - we deliver clarity, confidence, and lasting impact.
          </p>
        </div>

        {/* Features Grid - New Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -12 }}
              className="group bg-white/5 backdrop-blur-lg border border-white/10 hover:border-[#f47b20] rounded-3xl p-10 transition-all duration-500 hover:bg-white/10"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-[#f47b20]/10 rounded-2xl text-[#f47b20] text-4xl mb-8 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-[#f47b20] transition-colors">
                {feature.title}
              </h3>

              <p className="text-white/70 leading-relaxed text-[15.5px]">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 bg-white text-[#0b0b5c] rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h3 className="text-3xl font-bold">Ready to Work with the Best?</h3>
            <p className="text-lg text-[#f47b20] mt-2">Let's create meaningful impact together.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-10 py-4 bg-[#f47b20] text-white font-semibold rounded-2xl hover:bg-orange-600 transition-all hover:scale-105">
              Partner With Us
            </button>
            <button className="px-10 py-4 border-2 border-[#0b0b5c] font-semibold rounded-2xl hover:bg-[#0b0b5c] hover:text-white transition-all">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
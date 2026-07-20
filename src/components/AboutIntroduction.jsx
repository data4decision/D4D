import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaChartBar, FaLightbulb, FaRocket } from 'react-icons/fa';

const AboutIntroduction = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl lg:text-4xl font-bold tracking-tighter leading-[1.1] text-[#0b0b5c] mb-10">
              Turning <span className="text-[#f47b20]">Data</span> into Decisions.<br />
              Driving <span className="text-[#f47b20]">Sustainable Development.</span>
            </h2>

            <div className="space-y-8 text-[15px] leading-relaxed text-[#0b0b5c]">
              <p>
                Data for Decision (D4D) is a development-focused data, research, monitoring, 
                evaluation, and technology organisation committed to improving the quality of 
                decision-making across public, private, and development sectors.
              </p>
              
              <p>
                We help governments, development partners, NGOs, INGOs, donor-funded projects, 
                academic institutions, and businesses leverage data, technology, and evidence to 
                design, implement, monitor, and evaluate impactful programmes and policies.
              </p>
              
              <p>
                At D4D, we believe that effective decisions require reliable data, robust analysis, 
                and innovative digital systems. We therefore provide integrated solutions that 
                transform raw data into actionable intelligence for planning, implementation, 
                accountability, and sustainable development outcomes.
              </p>
            </div>

            <motion.a
              href="#services"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 mt-12 px-8 py-4 bg-[#0b0b5c] text-white font-semibold rounded-2xl hover:bg-black transition-all group"
            >
              Explore Our Services
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg aspect-[4/3.35] rounded-3xl overflow-hidden shadow-2xl border border-zinc-100">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070" 
                alt="Data analytics and strategic insights"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0b0b5c]/40 to-transparent" />
              
              {/* Subtle data pattern overlay */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f47b20_1px,transparent_1px)] [background-size:50px_50px]" />
            </div>
          </motion.div>
        </div>

        {/* Three Highlights */}
        <div className="mt-18 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaChartBar className="w-8 h-8" />,
              title: "Reliable Data",
              desc: "Quality information for better understanding and stronger decisions."
            },
            {
              icon: <FaLightbulb className="w-8 h-8" />,
              title: "Actionable Insights",
              desc: "Evidence and analysis transformed into practical intelligence."
            },
            {
              icon: <FaRocket className="w-8 h-8" />,
              title: "Digital Innovation",
              desc: "Technology-driven solutions for sustainable development impact."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 border border-zinc-100 hover:border-[#f47b20]/30 rounded-3xl transition-all hover:shadow-lg"
            >
              <div className="text-[#f47b20] mb-6 transition-transform group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold text-[#0b0b5c] mb-4">{item.title}</h3>
              <p className="text-[#0b0b5c] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutIntroduction;
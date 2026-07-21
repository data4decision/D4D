import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaDatabase, 
  FaUsers, 
  FaShieldAlt, 
  FaArrowRight 
} from 'react-icons/fa';

const OurMandate = () => {
  return (
    <section className="py-18 bg-[#0b0b5c]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex items-center gap-3 mb-10 m-auto bg-[#0b0b5c]/20 px-3 py-2 rounded-3xl inline-flex ">
          <div className="w-2 h-2 bg-[#0b0b5c] rounded-full animate-pulse"/>
          <span className='font-bold text-sm font-medium tracking-widest text-[#0b0b5c]'>Our Mandate</span>
        </div>
        <motion.h2
        initial={{ opacity: 0, x: -40}}
        whileInView={{opacity: 1, x: 0}}
        viewport={{once: true}}
        className='lg:col-span-5'>
          <h2 className="text-4xl lg:text-4xl font-bold tracking-tighter text-center text-[#0b0b5c] leading-tight mb-6">
                Strengthening Systems.
                Building Capacity.
                Improving Decisions.
              </h2>
        </motion.h2>

        <motion.p
        initial={{ opacity: 0, x: -40}}
        whileInView={{opacity: 1, x: 0}}
        viewport={{once: true}}
        className='lg:col-span-5'>
          <p className="text-lg text-[#0b0b5c] text-center sm:px-20">
                Our mandate is to strengthen the systems, skills, and standards that enable 
                organisations to collect, manage, understand, and use data effectively for 
                better decision-making and sustainable development.
              </p>
        </motion.p>
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center  mt-15">
          
          {/* Left Side - Visual */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="aspect-[4/4.1] rounded-3xl overflow-hidden shadow-2xl border border-zinc-100">
                <img 
                  src="/mandate.png" 
                  alt="Digital systems and capacity building"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0b0b5c]/60 via-transparent" />
              </div>
              
              {/* Decorative accent */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-[220px]">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#f47b20]/10 flex items-center justify-center text-[#f47b20]">
                    <FaDatabase className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0b0b5c]">Integrated Systems</div>
                    <div className="text-sm text-[#0b0b5c]/70">for lasting impact</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Mandates */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            
            {/* Mandate Cards */}
            <div className="space-y-6">
              {/* Mandate 01 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="group bg-white rounded-3xl px-8 py-6 border border-transparent hover:border-[#f47b20]/20 transition-all hover:shadow-xl"
              >
                <div className="flex gap-4">
                  {/* <div className="shrink-0">
                    <div className="w-12 h-12 rounded-2xl bg-[#0b0b5c] text-white flex items-center justify-center text-xl font-bold">01</div>
                  </div> */}
                  <div className="flex-1">
                    <div className="flex gap-2 justify-between mb-4">
                      <div className="w-10 h-10 p-2 rounded-2xl bg-[#0b0b5c] text-white flex items-center justify-center text-xl font-bold">01</div>                     
                      <h3 className="sm:text-xl text-lg font-semibold text-[#0b0b5c] pr-8">
                        Strengthening Information Systems through Tailored Technical Support
                      </h3>
                      <p className="text-[#f47b20] opacity-40 group-hover:opacity-100 transition">
                        <FaDatabase className="w-7 h-7" />
                      </p>
                    </div>
                    <p className="text-[#0b0b5c]/90 leading-relaxed">
                      We provide customised technical support that helps organisations improve their information systems, 
                      data processes, digital tools, and decision-making infrastructure.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Mandate 02 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="group bg-white rounded-3xl p-8 border border-transparent hover:border-[#f47b20]/20 transition-all hover:shadow-xl"
              >
                <div className="flex gap-6">
                  {/* <div className="shrink-0">
                    <div className="w-12 h-12 rounded-2xl bg-[#0b0b5c] text-white flex items-center justify-center text-xl font-bold">02</div>
                  </div> */}
                  <div className="flex-1">
                    <div className="flex gap-2 justify-between mb-4">
                      <div className="w-10 h-10 rounded-2xl p-2 bg-[#0b0b5c] text-white flex items-center justify-center text-xl font-bold">02</div>
                      <h3 className="text-xl font-semibold text-[#0b0b5c] pr-8">
                        Building Sustainable Local Capacity in Data Management and Use
                      </h3>
                      <div className="text-[#f47b20] opacity-40 group-hover:opacity-100 transition">
                        <FaUsers className="w-7 h-7" />
                      </div>
                    </div>
                    <p className="text-[#0b0b5c]/90 leading-relaxed">
                      We strengthen the skills and capabilities of individuals and institutions to collect, manage, 
                      analyse, interpret, and effectively use data for planning and decision-making.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Mandate 03 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="group bg-white rounded-3xl p-8 border border-transparent hover:border-[#f47b20]/20 transition-all hover:shadow-xl"
              >
                <div className="flex gap-6">
                  {/* <div className="shrink-0">
                    <div className="w-12 h-12 rounded-2xl bg-[#0b0b5c] text-white flex items-center justify-center text-xl font-bold">03</div>
                  </div> */}
                  <div className="flex-1">
                    <div className="flex gap-2 justify-between mb-4">
                      <div className="w-10 h-10 rounded-2xl p-2 bg-[#0b0b5c] text-white flex items-center justify-center text-xl font-bold">03</div>
                      <h3 className="text-xl font-semibold text-[#0b0b5c] pr-8">
                        Promoting Data Governance and Quality Assurance Standards
                      </h3>
                      <div className="text-[#f47b20] opacity-40 group-hover:opacity-100 transition">
                        <FaShieldAlt className="w-7 h-7" />
                      </div>
                    </div>
                    <p className="text-[#0b0b5c]/90 leading-relaxed">
                      We support the adoption of strong data governance principles, quality assurance systems, 
                      accountability mechanisms, and standards that promote reliable, secure, and usable data.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurMandate;
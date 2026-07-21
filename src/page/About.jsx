

import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import AboutIntroduction from '../components/AboutIntroduction';
import OurMandate from '../components/OurMandate';

const AboutHero = () => {
  return (
    <div className="">
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070')`,
        }}
      />
      <div className="absolute inset-0 bg-[#0b0b5c]/75" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-white">
        <div className="max-w-3xl">
          {/* Breadcrumb */}
          {/* <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 text-sm uppercase tracking-widest mb-6 text-white/70"
          >
            HOME <span className="text-white/40">→</span> 
            <span className="text-[#f47b20] font-medium">ABOUT US</span>
          </motion.div> */}

          {/* Main Title */}
          <div className="">
            <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-7xl font-bold tracking-tighter leading-none mb-6"
          >
          <div className="flex items-center gap-3 bg-[#f47b20]/30 px-4 py-2 rounded-full inline-flex">
            <div className="w-2 h-2 bg-[#ffffff] rounded-full animate-pulse"/>
            <span className="text-white text-sm font-medium tracking-widest">ABOUT US</span>
          </div>
            </motion.h1>
          </div>
        
          
            
          

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-white mb-8"
          >
            Turning Data into Decisions.<br />
            Driving <span className="text-[#f47b20]">Sustainable Development.</span>
          </motion.h2>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-white/90 max-w-2xl leading-relaxed mb-12"
          >
            Data for Decision International transforms data, research, technology, and evidence 
            into actionable insights that support better decisions, stronger systems, and sustainable 
            development outcomes across Africa and beyond.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-5"
          >
            <a 
              href="#our-story"
              className="group px-9 py-5 bg-[#f47b20] hover:bg-[#e06a18] rounded-2xl font-semibold flex items-center gap-3 transition-all text-lg"
            >
              Discover Our Story
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a 
              href="#approach"
              className="px-9 py-5 border-2 border-white/70 hover:border-white rounded-2xl font-semibold transition-all text-lg"
            >
              Our Approach
            </a>
          </motion.div>
        </div>
      </div>
    

      {/* Scroll Indicator */}
      {/* <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60"
      >
        <p className="text-xs tracking-widest mb-2">SCROLL TO EXPLORE</p>
        <FaArrowRight className="rotate-90 text-2xl animate-bounce" />
      </motion.div> */}
    </section>
    <AboutIntroduction/>
    <OurMandate/>
    </div>
  );
};

export default AboutHero;
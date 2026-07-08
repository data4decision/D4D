

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';     // ← Import this
import { FaArrowRight, FaChartBar, FaChartLine, FaGlobeAfrica } from 'react-icons/fa';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", alt: "Data Analytics Dashboard" },
    { image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80", alt: "Field Data Collection" },
    { image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80", alt: "Strategic Meeting" },
    { image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", alt: "GIS & Data Visualization" },
    { image: "/agricSurvey.jpg", alt: "Agricultural Data" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0b0b5c] via-[#102a8a] to-[#1e40af] md:pt-20 pt-25">
      
      <div className="max-w-7xl mx-auto px-6 pb-16 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20">
            <div className="w-2 h-2 bg-[#f47b20] rounded-full animate-pulse" />
            <span className="text-white text-sm font-medium tracking-widest">DATA FOR DECISION</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white tracking-tighter">
            Transforming Data into<br />
            <span className="text-[#f47b20]">Actionable Intelligence</span>
          </h1>

          <p className="text-base text-white/80 max-w-lg">
            Empowering governments, NGOs, businesses, and communities across Africa through 
            world-class research, monitoring, evaluation, and digital solutions.
          </p>

          <div className="flex flex-wrap gap-4 pt-6">
            {/* Updated Buttons with React Router Link */}
            <Link 
              to="/service"
              className="group px-8 py-4 bg-[#f47b20] hover:bg-orange-600 text-white font-semibold rounded-2xl flex items-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-orange-500/40"
            >
              Explore Our Services
              <FaArrowRight className="group-hover:translate-x-1 transition" />
            </Link>

            <Link 
              to="/contact"
              className="px-8 py-4 border-2 border-white/80 hover:border-white text-white font-semibold rounded-2xl transition-all hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Right Side Image Slider */}
        <div className="relative lg:h-[620px] flex items-center justify-center">
          <div className="relative w-full max-w-lg lg:max-w-xl aspect-[4/3.2] rounded-3xl overflow-hidden shadow-2xl shadow-black/40">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].alt}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 scale-105"
            />
           {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            {/* Floating Stats Cards */}
            <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-xl text-sm w-52 animate-float">
              <div className="flex items-center gap-3">
                <FaChartBar className="text-[#f47b20] text-2xl" />
                <div>
                  <div className="font-semibold text-[#0b0b5c]">+87% Efficiency</div>
                  <div className="text-zinc-500 text-xs">Average improvement for clients</div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-12 right-8 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-xl text-sm w-52 animate-float-delay">
              <div className="flex items-center gap-3">
                <FaGlobeAfrica className="text-[#f47b20] text-2xl" />
                <div>
                  <div className="font-semibold text-[#0b0b5c]">Pan-African Reach</div>
                  <div className="text-zinc-500 text-xs">5 countries • Growing</div>
                </div>
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${currentSlide === idx ? 'bg-[#f47b20] w-8' : 'bg-white/60'}`}
                />
              ))}
            </div>

            {/* Caption */}
            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-sm font-medium opacity-90">{slides[currentSlide].alt}</p>
            </div>
          </div>

          {/* Decorative Floating Icons */}
          <div className="absolute -top-6 -right-6 text-5xl opacity-20 animate-float-slow"><FaChartBar className='text-[#ffffff]'/></div>
          <div className="absolute -bottom-8 left-12 text-5xl opacity-20 animate-float"><FaChartLine className='text-[#ffffff]'/></div>
          <div className="absolute top-1/3 -left-8 text-4xl opacity-20 animate-float-delay"><FaGlobeAfrica className='text-[#ffffff]'/></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60 text-xs tracking-widest">
        SCROLL TO EXPLORE
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/40 to-transparent mt-3" />
      </div> */}
    </section>
  );
};

export default Hero;
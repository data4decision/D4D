import React from 'react';
import {  
  FaArrowRight 
} from 'react-icons/fa';

const ServiceAreaSection = ({
  id,
  number,
  title,
  tagline,
  description,
  image,
  services = [],
  onLearnMore
}) => {
  return (
    <section id={id} className="py-24 bg-white border-b border-gray-100 last:border-none">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative rounded-3xl overflow-hidden h-[520px] shadow-xl">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b5c]/20 via-[#0b0b5c]/20 to-transparent" />
            
            {/* Number Overlay */}
            <div className="absolute top-8 left-8 text-white">
              <div className="text-4xl font-bold text-white/50">{number}</div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-[#F47B20] rounded-full animate-pulse" />
                <span className="uppercase tracking-[3px] text-sm font-medium text-[#F47B20]">SERVICE {number}</span>
              </div>
              
              <h2 className="md:text-4xl text-3xl font-bold text-[#0B0B5C] leading-tight mb-4">
                {title}
              </h2>
              
              <p className="text-2xl text-[#F47B20] font-medium leading-tight">
                {tagline}
              </p>
            </div>

            <p className="text-[#0b0b5c] leading-relaxed text-lg">
              {description}
            </p>

            {/* Core Services */}
            <div>
              <h4 className="font-semibold text-[#0B0B5C] mb-5">Core Services</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-[#0b0b5c]">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-[#F47B20] mt-1.5">•</span>
                    <span className="text-[15px]">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button 
              onClick={onLearnMore}
              className="group inline-flex items-center gap-3 bg-[#0B0B5C] text-white px-8 py-4 rounded-2xl font-medium hover:bg-[#F47B20] transition-all duration-300 mt-6"
            >
              Discuss This Service
              <FaArrowRight className="group-hover:translate-x-1 transition" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaSection;
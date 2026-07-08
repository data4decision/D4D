import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHandshake, 
  FaGlobe, 
  FaLightbulb, 
  FaHeart, 
  FaArrowRight 
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const partners = [
  { name: "UNICEF", category: "UN Agency", logo: "/UNICEF.png" },
  { name: "World Bank", category: "Development Partner", logo: "/worldbank logo.jfif" },
  { name: "WHO", category: "UN Agency", logo: "/who.png" },
  { name: "USAID", category: "Government", logo: "/USAID.png" },
  { name: "African Union", category: "Regional Body", logo: "/Africaunioun.png" },
  { name: "GIZ", category: "Development Partner", logo: "/GIZ.png" },
];

const benefits = [
  { icon: <FaHandshake />, title: "Strategic Collaboration", desc: "We build long-term partnerships that strengthen institutions and improve decision-making." },
  { icon: <FaGlobe />, title: "Global Reach", desc: "Working with international organizations to deliver sustainable development solutions." },
  { icon: <FaLightbulb />, title: "Innovation", desc: "Leveraging technology, research, and data to solve complex development challenges." },
  { icon: <FaHeart />, title: "Shared Impact", desc: "Creating measurable outcomes through trust, collaboration, and shared goals." },
];

const PartnersCollaborators = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b5c]/70 via-[#0b0b5c]/60 to-[#f47b20]/80" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 text-white">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block bg-white/20 backdrop-blur-md text-white border border-white/30 px-6 py-2 rounded-full text-sm font-medium mb-5"
          >
            Our Partners
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            Building Strong Partnerships for Sustainable Impact
          </h2>
          <p className="md:text-lg text-[15px] text-white/80">
            We collaborate with governments, development agencies, NGOs, healthcare institutions, 
            academic organizations, and private sector partners to deliver innovative, evidence-based solutions.
          </p>
        </div>

        {/* Partner Logo Marquee */}
        <div className="mb-20 overflow-hidden py-6">
          <div className="flex animate-marquee whitespace-nowrap gap-12">
            {[...partners, ...partners].map((partner, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08, y: -5 }}
                className="bg-white backdrop-blur-md border border-white/30 hover:border-[#f47b20] rounded-2xl px-10 py-8 shadow-xl flex-shrink-0 w-72 text-center transition-all"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-14 mx-auto mb-5 object-contain" 
                />
                <p className="font-semibold text-[#0b0b5c]">{partner.name}</p>
                <p className="text-sm text-[#f47b20]">{partner.category}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white border border-zinc-100 hover:border-[#f47b20] rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="text-5xl text-[#f47b20] mb-6">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-[#0b0b5c] mb-3">{benefit.title}</h3>
              <p className="text-[#f47b20] leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-white backdrop-blur-md border border-white rounded-3xl md:px-12 px-10 py-6  text-center shadow-2xl">
          <h3 className="md:text-4xl text-3xl font-bold text-[#0b0b5c] mb-4">Let's Build Impact Together</h3>
          <p className="max-w-2xl mx-auto text-[15px] md:text-lg text-[#f47b20] mb-10">
            We believe that meaningful change happens through collaboration. 
            Partner with us to transform data into decisions that improve lives and strengthen communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link to="/contact" className="px-10 py-4 bg-[#f47b20] hover:bg-orange-600 text-white font-semibold rounded-2xl transition-all hover:scale-105 flex items-center justify-center gap-3">
              Become a Partner <FaArrowRight />
            </Link>
            <Link to="/contact" className="px-10 py-4 border-2 border-[#0b0b5c] text-[#0b0b5c] hover:bg-[#0b0b5c] hover:text-white font-semibold rounded-2xl transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersCollaborators;
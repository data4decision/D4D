import React from 'react';
import { motion } from 'framer-motion';
import { FaChartBar, FaSearch, FaDatabase, FaHandsHelping, FaLaptopCode, FaLeaf, FaRegChartBar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Monitoring, Evaluation, Accountability and Learning (MEAL)",
    desc: "Comprehensive MEAL systems to track progress, ensure accountability, and facilitate continuous learning for impactful programs.",
    icon: <FaChartBar className="text-5xl" />,
    link: "/services/meal",
    bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  },
  {
    title: "Research and Evidence Generation",
    desc: "Rigorous research, impact evaluations, and evidence synthesis to inform policy and development interventions.",
    icon: <FaSearch className="text-5xl" />,
    link: "/services/research",
    bgImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
  },
  {
    title: "Data Collection and Management",
    desc: "Efficient, reliable, and technology-enabled data collection systems with robust data management solutions.",
    icon: <FaDatabase className="text-5xl" />,
    link: "/services/data-collection",
    bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  },
  {
    title: "Capacity Building and Technical Assistance",
    desc: "Tailored training programs and technical support to strengthen institutions and local expertise.",
    icon: <FaHandsHelping className="text-5xl" />,
    link: "/services/capacity-building",
    bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
  },
  {
  title: "Digital Transformation Solutions",
  desc: "End-to-end digital solutions including system development, automation, cloud services, and technology integration to modernize operations.",
  icon: <FaLaptopCode className="text-5xl" />,
  link: "/services/digital-transformation",
  bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
},

{
  title: "Agriculture and Rural Development Solutions",
  desc: "Specialized data-driven solutions for agricultural value chains, farmer profiling, climate-smart agriculture, and rural development initiatives.",
  icon: <FaLeaf className="text-5xl" />,
  link: "/services/agriculture-rural-development",
  bgImage: "/Agriculture.jpg"
},

{
  title: "Data Analytics and Business Intelligence",
  desc: "Advanced analytics, interactive dashboards, predictive modeling, and business intelligence tools to support informed decision-making.",
  icon: <FaRegChartBar className="text-5xl" />,
  link: "/services/data-analytics",
  bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
}
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative bg-[#0b0b5c]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-[url('/ourservices.jpg')] bg-cover bg-center opacity-40" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block bg-[#f47b20] text-white px-6 py-2 rounded-full text-sm font-medium mb-4"
          >
            What We Do
          </motion.div>

          <h2 className="md:text-5xl text-4xl font-bold text-[#ffffff] tracking-tighter mb-6">
            Our Professional Services
          </h2>

          <p className="md:text-lg text-[15px] text-[#ffffff]">
            We empower governments, NGOs, and development partners with high-quality data, research, 
            and capacity strengthening solutions that drive sustainable impact.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Link to={service.link} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="group relative h-[380px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Background Image */}
                <img 
                  src={service.bgImage} 
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/30 group-hover:via-black/50 transition-all" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="text-white mb-5 transition-transform group-hover:scale-110 duration-300">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-semibold text-white mb-3 leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-white/80 text-[15px] leading-relaxed mb-6 line-clamp-3">
                    {service.desc}
                  </p>

                  <div className="flex items-center text-[#f47b20] font-medium text-sm group-hover:gap-2 transition-all">
                    Learn More 
                    <span className="ml-2 text-xl transition-transform group-hover:translate-x-2">→</span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center bg-white rounded-3xl px-10 py-8 shadow-xl">
            <h3 className="md:text-2xl text-lg font-semibold text-[#0b0b5c] mb-3">Ready to Get Started?</h3>
            <p className="text-[#f47b20] md:text-lg text-[15px] mb-6 max-w-md">
              Let's discuss how our expertise can support your goals and create lasting impact.
            </p>
            <div className="flex gap-4 items-center">
              <Link 
                to="/contact"
                className="md:text-[14px] text-[10px] px-3 py-2 bg-[#f47b20] hover:bg-orange-600 text-white font-semibold rounded-2xl transition-all"
              >
                Contact Our Team
              </Link>
              <Link 
                to="/projects"
                className="md:text-[14px] text-[10px] px-3 py-2 border border-[#0b0b5c] text-[#0b0b5c] hover:bg-[#0b0b5c] hover:text-white font-semibold rounded-2xl transition-all"
              >
                View Our Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
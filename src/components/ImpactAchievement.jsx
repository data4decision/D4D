import React from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { 
  FaProjectDiagram, 
  FaHandshake, 
  FaGlobeAfrica, 
  FaDatabase, 
  FaUserGraduate, 
  FaBuilding, 
  FaAward, 
  FaArrowRight 
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const stats = [
  { icon: <FaProjectDiagram />, end: 50, suffix: "+", title: "Projects Completed", desc: "Successfully delivered impactful projects across multiple sectors." },
  { icon: <FaHandshake />, end: 30, suffix: "+", title: "Strategic Partnerships", desc: "Collaborating with international organizations and institutions." },
  { icon: <FaGlobeAfrica />, end: 10, suffix: "+", title: "Countries Reached", desc: "Supporting sustainable development initiatives globally." },
  { icon: <FaDatabase />, end: 1000000, suffix: "+", title: "Data Records Managed", desc: "Transforming complex datasets into actionable intelligence." },
  { icon: <FaUserGraduate />, end: 5000, suffix: "+", title: "Professionals Trained", desc: "Building local capacity through professional development." },
  { icon: <FaBuilding />, end: 100, suffix: "+", title: "Organizations Served", desc: "Helping organizations make informed, data-driven decisions." },
];

const AnimatedCounter = ({ end, suffix }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  React.useEffect(() => {
    const controls = animate(count, end, { 
      duration: 2.2,
      ease: "easeOut" 
    });
    return controls.stop;
  }, [end]);

  return <motion.span>{rounded}</motion.span>;
};

const ImpactAchievements = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-orange-100 text-[#f47b20] px-6 py-2.5 rounded-full text-sm font-medium mb-5">
            Our Impact
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#0b0b5c] leading-tight mb-6">
            Driving Sustainable Change Through Data & Innovation
          </h2>
          <p className="md:text-lg text-[15px] text-[#0b0b5c]">
            We empower governments, development partners, NGOs, healthcare institutions, businesses, 
            and communities by delivering evidence-based solutions that create measurable, sustainable impact.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="group bg-white border border-zinc-100 hover:border-[#f47b20] rounded-3xl p-10 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="text-6xl text-[#0b0b5c] group-hover:text-[#f47b20] transition-colors mb-6">
                {stat.icon}
              </div>

              <div className="text-6xl font-bold text-[#0b0b5c] mb-2">
                <AnimatedCounter end={stat.end} />{stat.suffix}
              </div>

              <h3 className="text-xl font-semibold text-[#0b0b5c] mb-3">{stat.title}</h3>
              <p className="text-[#f47b20] text-[15px] leading-relaxed">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Highlight Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 bg-gradient-to-br from-[#0b0b5c] to-[#1e40af] rounded-3xl p-12 md:p-16 text-white flex flex-col md:flex-row items-center gap-10"
        >
          <FaAward className="text-7xl text-[#f47b20] flex-shrink-0" />
          <div>
            <h3 className="md:text-3xl text-xl font-bold mb-4">Creating Lasting Impact Through Evidence-Based Solutions</h3>
            <p className="text-white/80 md:text-lg text-[15px] leading-relaxed">
              Our multidisciplinary team combines research, technology, innovation, and strategic partnerships 
              to help organizations solve complex challenges and improve decision-making.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h3 className="md:text-4xl text-3xl font-bold text-[#0b0b5c] mb-4">Ready to Create Meaningful Impact?</h3>
          <p className="text-[#0b0b5c] max-w-md mx-auto mb-10 md:text-lg text-[15px]">
            Let's work together to transform your data into measurable results that improve lives and strengthen organizations.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link to="/contact" className="px-10 py-4 bg-[#f47b20] hover:bg-orange-600 text-white font-semibold rounded-2xl transition-all hover:scale-105 flex items-center justify-center gap-3">
              Partner With Us <FaArrowRight />
            </Link>
            <Link to="/contact" className="px-10 py-4 border-2 border-[#0b0b5c] text-[#0b0b5c] hover:bg-[#0b0b5c] hover:text-white font-semibold rounded-2xl transition-all">
              Contact Our Experts
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactAchievements;
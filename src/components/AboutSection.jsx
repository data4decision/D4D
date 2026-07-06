import React, { useEffect, useRef, useState } from "react";
import { FaChartBar, FaGlobeAfrica, FaBrain } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [statsAnimated, setStatsAnimated] = useState(false);

  // Stats
  const [projects, setProjects] = useState(0);
  const [partners, setPartners] = useState(0);
  const [countries, setCountries] = useState(0);
  const [beneficiaries, setBeneficiaries] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (!statsAnimated) {
            animateStats();
            setStatsAnimated(true);
          }
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [statsAnimated]);

  const animateValue = (setter, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      setter(value);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setter(end);
      }
    };
    window.requestAnimationFrame(step);
  };

  const animateStats = () => {
    setTimeout(() => animateValue(setProjects, 0, 20, 1600), 300);
    setTimeout(() => animateValue(setPartners, 0, 15, 1600), 600);
    setTimeout(() => animateValue(setCountries, 0, 10, 1600), 900);
    setTimeout(() => animateValue(setBeneficiaries, 0, 1000, 2000), 1200);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-24 lg:py-32 bg-[#ffffff] text-[#0b0b5c] relative overflow-hidden"
    >
      {/* Background Decorative Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-[#0b0b5c]/10 rounded-full blur-3xl animate-[float_30s_infinite_linear]"></div>
        <div className="absolute bottom-32 -right-20 w-[500px] h-[500px] bg-[#f47b20]/10 rounded-full blur-3xl animate-[float_40s_infinite_linear]" style={{animationDelay: '-15s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left - Image */}
          <div className={`transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"}`}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-square">
              <img
                src="/about.jpg" // Update with your image path
                alt="Team working on data-driven solutions"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b5c]/60 via-transparent to-transparent" />
              
              {/* Floating badge on image */}
              <div className="absolute top-8 left-8 bg-[#0b0b5c]/95 text-[#ffffff] px-6 py-3 rounded-2xl font-semibold shadow-xl flex items-center gap-3">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                Impact in Progress
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className={`space-y-3 transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"}`}>
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#0b0b5c]/30 bg-[#0b0b5c]/10 backdrop-blur-md">
              <span className="text-[#f47b20] font-bold tracking-[2px] text-sm">WHO WE ARE</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
              Empowering Communities Through <span className="text-[#f47b20]">Data-Driven Solutions</span>
            </h2>

            {/* Description */}
            <p className="md:text-[15px] text-[12px] text-[#0b0b5c]/90 leading-relaxed">
              We are a data-driven organization committed to helping governments, 
              non-governmental organizations (NGOs), and businesses harness the 
              power of data to make informed decisions. By transforming complex 
              and fragmented data into meaningful insights, we enable our partners 
              to enhance service delivery, improve planning, and achieve greater impact.
            </p>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-6 pt-6">
              {[
                { icon: <FaChartBar/>, title: "Evidence-Based Decision Making", desc: "Turning raw data into actionable intelligence for better policies." },
                { icon: <FaBrain/>, title: "Capacity Building & Research", desc: "Empowering institutions with knowledge and technical expertise." },
                { icon: <FaGlobeAfrica/>, title: "Sustainable Development Solutions", desc: "Designing scalable programs that deliver long-term community impact." }
              ].map((card, idx) => (
                <div 
                  key={idx}
                  className={`bg-[#0b0b5c]/95 backdrop-blur-md text-[#ffffff] p-6 rounded-3xl hover:-translate-y-3 transition-all duration-500 shadow-xl ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <div className="text-4xl mb-3">{card.icon}</div>
                  <h3 className="font-semibold md:text-[14px] text-[12px] text-xl mb-2">{card.title}</h3>
                  <p className="md:text-[12px] text-[10px] text-[#ffffff] leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-8">
              <Link
                to="/about"
                className="group inline-flex items-center gap-3 bg-[#f47b20] hover:bg-white hover:text-[#0b0b5c] text-white font-semibold text-lg px-10 py-3 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                Discover Our Journey
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-14 pt-10 border-t border-[#0b0b5c]/20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            <div>
              <div className="text-6xl font-bold mb-2">10+</div>
              <div className="text-[#0b0b5c]/70 uppercase tracking-widest text-sm">Projects Completed</div>
            </div>
            <div>
              <div className="text-6xl font-bold mb-2">10+</div>
              <div className="text-[#0b0b5c]/70 uppercase tracking-widest text-sm">Partner Organizations</div>
            </div>
            <div>
              <div className="text-6xl font-bold mb-2">5+</div>
              <div className="text-[#0b0b5c]/70 uppercase tracking-widest text-sm">Countries Reached</div>
            </div>
            <div>
              <div className="text-6xl font-bold mb-2">50+</div>
              <div className="text-[#0b0b5c]/70 uppercase tracking-widest text-sm">Beneficiaries Impacted</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;



import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaWhatsapp,
  FaTwitter,
  FaArrowRight,
  FaYoutube, 
  FaArrowUp, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaClock, 
  FaPaperPlane 
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top CTA Banner */}
      <div className="max-w-7xl mx-auto px-6 py-16  relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#0b0b5c] to-[#12208a] rounded-3xl p-12 md:p-16 text-white text-center shadow-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            Let's Build Data-Driven Solutions Together
          </h2>
          <p className="md:text-lg text-[15px] text-white max-w-2xl mx-auto mb-10">
            Whether you're looking for research expertise, data analytics, digital health solutions, 
            or strategic partnerships, our team is ready to help you achieve meaningful impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              to="/contact"
              className="px-10 py-4 bg-[#f47b20] hover:bg-orange-600 text-white font-semibold rounded-2xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
            >
              Get in Touch
            </Link>
            <Link 
              to="/services"
              className="px-10 py-4 border-2 border-white/70 hover:bg-white hover:text-[#0b0b5c] font-semibold rounded-2xl transition-all"
            >
              Explore Our Services
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Main Footer */}
      <footer className="bg-[#0b0b5c] text-white pt-24 pb-12 mt-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            
            {/* Column 1: Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#0b0b5c] font-bold text-3xl">
                  <img src='/logo.png' className='bg-white w-11 h-11 rounded-2xl object-contain shadow' alt="D4D Logo" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold tracking-tighter">Data4Decision</h1>
                  <p className="text-xs tracking-widest text-white/60 -mt-1">INTERNATIONAL</p>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed max-w-sm">
                Empowering organizations through evidence-based research, data-driven insights, 
                monitoring and evaluation, digital innovation, and sustainable capacity development.
              </p>

              {/* Social Icons */}
              <div className="flex gap-4 mt-10">
                {[
                  { icon: <FaLinkedinIn />, link: "#" },
                  { icon: <FaFacebookF />, link: "https://facebook.com/SegunMandate" },
                  { icon: <FaTwitter />, link: "https://twitter.com/Data4Decision_Intl" },
                  { icon: <FaInstagram />, link: "https://instagram.com/Data4Decision_Intl" },
                  // { icon: <FaYoutube />, link: "#" },
                  { icon: <FaWhatsapp />, link: "https://wa.me/8069517707" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    whileHover={{ scale: 1.2, backgroundColor: "#f47b20" }}
                    className="w-11 h-11 bg-white/10 hover:bg-[#f47b20] rounded-2xl flex items-center justify-center transition-all"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3 text-white/70">
                {["Home", "About Us", "Our Services", "Our Approach", "Impact & Achievements", "Partners", "FAQs"].map((link, i) => (
                  <li key={i}>
                    <Link to={`/${link.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-[#f47b20] transition-colors flex items-center gap-2 group">
                      <FaArrowRight className="opacity-0 group-hover:opacity-100 transition-all text-sm" />
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-white mb-6 text-lg">Our Services</h4>
              <ul className="space-y-3 text-white/70">
                {[
                  "Research & Evidence",
                  "Monitoring & Evaluation",
                  "Data Analytics & BI",
                  "Digital Transformation",
                  "Capacity Building",
                  "Agriculture & Rural Dev"
                ].map((service, i) => (
                  <li key={i} className="hover:text-[#f47b20] transition-colors cursor-pointer">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-white mb-6 text-lg">Get In Touch</h4>
              <div className="space-y-6 text-white/70">
                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt className="mt-1 text-[#f47b20]" />
                  <div>
                    <p>Ilorin, Nigeria</p>
                    <p className="text-xs">Head Office</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaPhoneAlt className="mt-1 text-[#f47b20]" />
                  <div>
                    <p>+234 916 897 4621</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaEnvelope className="mt-1 text-[#f47b20]" />
                  <div>
                    <p>info@data4decision.org</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
            <p>© 2026 Data4Decision International. All Rights Reserved.</p>
            <div className="flex gap-6 mt-6 md:mt-0">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
              <Link to="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 right-8 bg-[#f47b20] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all z-50"
        >
          <FaArrowUp className="text-xl" />
        </motion.button>
      </footer>
    </>
  );
};

export default Footer;

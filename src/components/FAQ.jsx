import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaQuestionCircle, 
  FaChevronDown, 
  FaHeadset, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaArrowRight 
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "What does Data4Decision International do?",
    answer: "We provide data-driven solutions, research, monitoring and evaluation, digital health support, capacity building, and strategic consulting that help organizations improve decision-making and achieve sustainable impact."
  },
  {
    question: "Who do you work with?",
    answer: "We collaborate with governments, NGOs, healthcare institutions, academic organizations, development partners, private sector organizations, and international agencies."
  },
  {
    question: "What services do you offer?",
    answer: "Our services include research, data collection, data analytics, monitoring and evaluation, health information systems strengthening, digital transformation, project management, policy support, and capacity development."
  },
  {
    question: "How can my organization partner with Data4Decision International?",
    answer: "Organizations can partner with us by contacting our team through the contact page to discuss collaborative projects, research initiatives, technical assistance, and long-term strategic partnerships."
  },
  {
    question: "Do you provide capacity-building and training?",
    answer: "Yes. We deliver customized training, mentorship, workshops, and technical assistance that strengthen institutional capacity in data management, analytics, and evidence-based decision-making."
  },
  {
    question: "How do you ensure data quality?",
    answer: "We follow internationally recognized standards, quality assurance frameworks, and digital tools to ensure data accuracy, reliability, integrity, confidentiality, and security throughout every project."
  },
  {
    question: "Can you support projects outside Nigeria?",
    answer: "Yes. We work with organizations across Africa and internationally, providing remote and on-site technical support based on project requirements."
  },
  {
    question: "How do I request your services?",
    answer: "Simply reach out through our contact page or send us an inquiry. Our team will review your needs and schedule a consultation to discuss the best solution."
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#0b0b5c]/30 to-[#0b0b5c]/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 lg:sticky lg:top-24"
          >
            <div>
              <div className="inline-block bg-orange-100 text-[#f47b20] px-6 py-2 rounded-full text-sm font-medium mb-4">
                Frequently Asked Questions
              </div>
              <h2 className="md:text-5xl text-4xl font-bold tracking-tighter text-[#0b0b5c] leading-tight mb-6">
                Have Questions? We've Got Answers.
              </h2>
              <p className="md:text-lg text-[15px] text-[#ffffff]">
                Find answers to the most common questions about our services, partnerships, research, data management, capacity building, and how we help organizations make informed decisions.
              </p>
            </div>

            {/* Support Card */}
            <div className="bg-white border border-zinc-100 rounded-3xl p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <FaHeadset className="text-4xl text-[#f47b20]" />
                <div>
                  <h3 className="font-semibold text-[#0b0b5c]">Still Have Questions?</h3>
                  <p className="text-sm text-[#f47b20]">Our team is ready to help</p>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-[#f47b20]" />
                  <span className='text-[#0b0b5c]'>info@data4decision.org</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-[#f47b20]" />
                  <span className='text-[#0b0b5c]'>+234 916 897 4621</span>
                </div>
              </div>

              <Link 
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 bg-[#f47b20] hover:bg-orange-600 text-white px-8 py-3 rounded-2xl font-medium transition-all hover:scale-105"
              >
                Contact Support <FaArrowRight />
              </Link>
            </div>
          </motion.div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-zinc-100 hover:border-[#f47b20] rounded-3xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-4 flex items-center justify-between text-left hover:bg-zinc-50 transition-colors focus:outline-none"
                >
                  <div className="flex items-start gap-4 pr-8">
                    <FaQuestionCircle className="text-[#f47b20] mt-1 text-xl flex-shrink-0" />
                    <span className="font-medium text-[#0b0b5c] md:text-[18px] text-[15px] leading-tight text-left">
                      {faq.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <FaChevronDown className="text-[#f47b20] text-xl" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6 text-[#0b0b5c] leading-relaxed border-t pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-[#0b0b5c] to-[#1e40af] rounded-3xl p-12 md:p-16 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Need Personalized Assistance?</h3>
          <p className="max-w-md mx-auto text-white/80 mb-8">
            Our experts are ready to help you identify the right solutions for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              to="/contact"
              className="px-10 py-4 bg-[#f47b20] hover:bg-orange-600 text-white font-semibold rounded-2xl transition-all hover:scale-105"
            >
              Schedule a Consultation
            </Link>
            <Link 
              to="/contact"
              className="px-10 py-4 border-2 border-white hover:bg-white hover:text-[#0b0b5c] font-semibold rounded-2xl transition-all"
            >
              Send Us a Message
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
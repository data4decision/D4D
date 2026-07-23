import React from 'react'
import { FaAward, FaLeaf, FaLightbulb, FaShieldAlt, FaUser } from 'react-icons/fa';

const OurCoreValues = () => {

    const coreValues = [
  {
    number: "01",
    icon: <FaAward className="w-12 h-12 text-[#F47B20]" />,
    title: "EXCELLENCE",
    tagline: "We deliver quality with purpose.",
    description: "We maintain the highest standards of professionalism, quality, and integrity in everything we do.",
  },
  {
    number: "02",
    icon: <FaLightbulb className="w-12 h-12 text-[#F47B20]" />,
    title: "INNOVATION",
    tagline: "We find better ways to solve complex challenges.",
    description: "We continuously develop creative and technology-driven solutions to emerging development challenges.",
  },
  {
    number: "03",
    icon: <FaShieldAlt className="w-12 h-12 text-[#F47B20]" />,
    title: "ACCOUNTABILITY",
    tagline: "We take responsibility for our work and its impact.",
    description: "We promote transparency, responsibility, and data integrity in all our engagements.",
  },
  {
    number: "04",
    icon: <FaUser className="w-12 h-12 text-[#F47B20]" />,
    title: "COLLABORATION",
    tagline: "We achieve more by working together.",
    description: "We build strong partnerships that bring together knowledge, expertise, and shared commitment to create lasting impact.",
  },
  {
    number: "05",
    icon: <FaLeaf className="w-12 h-12 text-[#F47B20]" />,
    title: "SUSTAINABILITY",
    tagline: "We design solutions that create lasting value.",
    description: "We develop systems, knowledge, and solutions that remain useful and impactful beyond project lifecycles.",
  }
];


  return (
    <section className='py-24 bg-[#f47b20]/10'>
        <div className="max-w-7xl mx-auto px-6">
            {/* Section Heading */}
            <div className="text-center max-w-4xl mx-auto mb-16">
                <h2 className='text-4xl font-bold text-[#0b0b5c] leading-tight mb-6'>
                    The Values That Drive Our Work
                </h2>
                <p className='sm:text-xl text-lg text-[#0b0b5c]'>
                    Our values guide how we work, how we build partnerships, and how we deliver solutions that create lasting value for the organisations and communities we serve.
                </p>
            </div>
            {/* Value Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {coreValues.map((value, index) => (
                    <div key={index} 
                    className="group bg-[#ffffff] border border-[#f47b20] rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-10 h-10 bg-[#f47b20]/10 rounded-2xl flex items-center justify-center">
                            {value.icon}
                            </div>
                            <div className="text-4xl font-bold text-[#f47b20]/10 group-hover:text-[#0b0b5c]/40 transition-colors">
                            {value.number}
                            </div>
                        </div>

                        <h3 className='text-2xl font-semibold text-[#0b0b5c] mb-3 tracking-tight'>
                            {value.title}
                        </h3>
                        <p className='text-[#f47b20] font-medium mb-4'>
                            {value.tagline}
                        </p>
                        <p className='text-[#f47b20] leading-relaxed'>
                            {value.description}
                        </p>

                        <div className="mt-8 h-0.5 w-12 bg-[#f47b20] group-hover:w-20 transition-all"></div>
                    </div>
                ))}
            </div>

            {/* Closing Statement */}
            <div className="text-center mt-20">
                <p className='sm:text-xl text-lg font-medium text-[#0b0b5c]'>Driven by values. <span className='text-[#f47b20]'>Powered by evidence.</span>Focused on impact.</p>
            </div>
        </div>
    </section>
  )
}

export default OurCoreValues
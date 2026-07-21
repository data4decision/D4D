import React from 'react'
import { FaArrowRight, FaAward, FaChartBar, FaChartLine, FaDatabase, FaGlobe, FaLeaf, FaRegChartBar } from 'react-icons/fa';

const OurExpertise = () => {

    const expertiseData = [
  {
    number: "01",
    icon: <FaChartLine className="w-10 h-10 text-[#F47B20]" />,
    title: "Monitoring, Evaluation, Accountability and Learning",
    description: "We help organisations measure results, improve programme performance, strengthen accountability, and generate learning for continuous improvement.",
    keyAreas: [
      "MEL Framework Development",
      "Theory of Change Development",
      "Impact Assessments",
      "Real-Time Monitoring",
      "Learning and Knowledge Management"
    ]
  },
  {
    number: "02",
    icon: <FaGlobe className="w-10 h-10 text-[#F47B20]" />,
    title: "Research and Evidence Generation",
    description: "We generate reliable evidence and actionable insights to support effective planning, policy development, and decision-making.",
    keyAreas: [
      "Quantitative & Qualitative Research",
      "Mixed-Methods Studies",
      "Needs Assessments",
      "Policy and Operational Research"
    ]
  },
  {
    number: "03",
    icon: <FaDatabase className="w-10 h-10 text-[#F47B20]" />,
    title: "Data Collection and Management",
    description: "We deploy modern digital systems and data management solutions that improve data quality, accessibility, and timeliness.",
    keyAreas: [
      "Digital Data Collection",
      "KoboToolbox & ODK",
      "GIS Mapping",
      "Real-Time Monitoring Systems"
    ]
  },
  {
    number: "04",
    icon: <FaRegChartBar className="w-10 h-10 text-[#F47B20]" />,
    title: "Data Analytics & Business Intelligence",
    description: "We transform complex datasets into clear, meaningful insights that support strategic decision-making.",
    keyAreas: [
      "Statistical Analysis",
      "Dashboard Development",
      "Power BI Solutions",
      "Predictive Analytics"
    ]
  },
  {
    number: "05",
    icon: <FaGlobe className="w-10 h-10 text-[#F47B20]" />,
    title: "Digital Transformation Solutions",
    description: "We design and deploy digital platforms that improve organisational performance and operational efficiency.",
    keyAreas: [
      "Management Information Systems",
      "Mobile Applications",
      "Workflow Automation",
      "AI-Powered Reporting"
    ]
  },
  {
    number: "06",
    icon: <FaLeaf className="w-10 h-10 text-[#F47B20]" />,
    title: "Agriculture & Rural Development",
    description: "We apply data and technology to strengthen agricultural systems and rural development programmes.",
    keyAreas: [
      "Farmer Profiling",
      "Agricultural Surveys",
      "Value Chain Analysis",
      "Market Intelligence Systems"
    ]
  },
  {
    number: "07",
    icon: <FaAward className="w-10 h-10 text-[#F47B20]" />,
    title: "Capacity Building & Technical Assistance",
    description: "We strengthen institutional and individual capacity through tailored training and advisory services.",
    keyAreas: [
      "MEL Training",
      "Data Analysis Training",
      "KoboToolbox Training",
      "Technical Advisory Services"
    ]
  }
];
  return (
    <section className='py-24 bg-[#ffffff]'>
        <div className="max-w-7xl mx-auto px-6">
            {/* Heading */}
            <div className="text-center max-w-4xl mx-auto mb-16">
                <h2 className='text-4xl font-bold text-[#0b0b5c] leading-tight mb-6'>
                    Our Expertise Is Built Around Evidence and Innovation
                </h2>
                <p className='sm:text-xl text-lg text-[#0b0b5c]/70'>
                     We combine research, data, technology, monitoring, evaluation, and sector-specific expertise to provide practical solutions that help organisations make better decisions and achieve sustainable results.
                </p>
            </div>
            {/* Expertise Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {expertiseData.map((item, index) => (
                    <div key={index} 
                    className="group bg-white border border-[#f47b20] rounded-3xl px-4 py-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            
                            <div className="text-3xl font-bold bg-[#0b0b5c] p-1 rounded-lg text-[#ffffff] group-hover:text-[#fffff]/80 transition-colors">
                                {item.number}
                            </div>
                            <h3 className='sm:text-xl text-lg font-semibold text-[#0b0b5c] mb-4 leading-tight'>
                                {item.title}
                            </h3>
                            <div className="w-8 h-8 bg-[f47b20]/10 rounded-2xl flex items-center justify-center">
                            {item.icon}
                            </div>
                           
                        </div>
                         <p className='text-[#0b0b5c] leading-relaxed mb-6'>
                            {item.description}
                        </p>

                        <ul className='text-sm text-[#0b0b5c] space-y-2 mb-8'>
                            {item.keyAreas.map((area, i) => (
                                <li key={i} className='flex items-start gap-2'>
                                    <span className="text-[#F47B20] mt-1">•</span>
                                    {area}
                                </li>
                            ))}
                        </ul>

                        <div className="text-[#f47b20] text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all cursor-pointer">
                            Learn More <FaArrowRight className='w-4 h-4'/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default OurExpertise
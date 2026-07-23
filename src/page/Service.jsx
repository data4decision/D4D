import React from 'react';
import ServiceAreaSection from '../components/ServiceAreaSection';

const ServicesPage = () => {
  const handleLearnMore = (serviceName) => {
    alert(`Opening enquiry form for: ${serviceName}`);
    window.location.href = `/contact?service=${serviceName}`;
  };

  return (
    <div>
      {/* 01 — MEAL */}
      <ServiceAreaSection
        id="meal"
        number="01"
        title="Monitoring, Evaluation, Accountability & Learning"
        tagline="Measure results. Improve performance. Demonstrate impact."
        description="We support organisations in measuring results, improving programme performance, strengthening accountability, and generating learning for continuous improvement."
        image="/monitor.jpg"
        services={[
          "MEL Framework Development",
          "Theory of Change Development",
          "Indicator Design and Tracking",
          "Baseline, Midline and Endline Assessments",
          "Impact Assessments",
          "Third-Party Monitoring",
          "Data Quality Assessments",
          "Learning and Knowledge Management"
        ]}
        onLearnMore={() => handleLearnMore("MEAL")}
      />

      {/* 02 — Research */}
      <ServiceAreaSection
        id="research"
        number="02"
        title="Research and Evidence Generation"
        tagline="Reliable evidence. Actionable insights."
        description="We generate high-quality evidence and actionable insights to support effective planning, policy development, and decision-making."
        image="/research.jpg"
        services={[
          "Quantitative Research",
          "Qualitative Research",
          "Mixed-Methods Studies",
          "Needs and Market Assessments",
          "Household and Community Surveys",
          "Policy and Operational Research",
          "Socioeconomic Studies"
        ]}
        onLearnMore={() => handleLearnMore("Research")}
      />

      {/* 03 — Data Collection */}
      <ServiceAreaSection
        id="datacollection"
        number="03"
        title="Data Collection and Data Management"
        tagline="Accurate data. Reliable systems."
        description="We deploy modern digital systems and data management solutions that improve data quality, accessibility, accuracy, and timeliness."
        image="/collection.jpg"
        services={[
          "Digital Data Collection",
          "KoboToolbox and ODK",
          "SurveyCTO Programming",
          "Data Cleaning and Validation",
          "Database Design and Management",
          "GIS Mapping",
          "Real-Time Monitoring Systems"
        ]}
        onLearnMore={() => handleLearnMore("Data Collection")}
      />

      {/* 04 — Data Analytics */}
      <ServiceAreaSection
        id="analytics"
        number="04"
        title="Data Analytics and Business Intelligence"
        tagline="Transform data into decisions."
        description="We turn complex datasets into clear, meaningful insights that support strategic and operational decision-making."
        image="/analytic.jpg"
        services={[
          "Statistical Analysis",
          "Predictive Analytics",
          "Dashboard Development",
          "Data Visualisation",
          "Power BI Solutions",
          "GIS Analytics",
          "Performance Monitoring Systems"
        ]}
        onLearnMore={() => handleLearnMore("Data Analytics")}
      />

      {/* 05 — Digital Transformation */}
      <ServiceAreaSection
        id="digital"
        number="05"
        title="Digital Transformation Solutions"
        tagline="Technology that delivers impact."
        description="We design and deploy digital platforms and technology solutions that improve organisational performance, service delivery, and operational efficiency."
        image="/dbm.jpg"
        services={[
          "Management Information Systems",
          "Beneficiary Management Systems",
          "Case Management Systems",
          "E-Learning Platforms",
          "Mobile Applications",
          "Custom Web Applications",
          "Workflow Automation"
        ]}
        onLearnMore={() => handleLearnMore("Digital Transformation")}
      />

      {/* 06 — Agriculture */}
      <ServiceAreaSection
        id="agriculture"
        number="06"
        title="Agriculture and Rural Development Solutions"
        tagline="Empowering farmers. Strengthening food systems."
        description="We apply data and technology to strengthen agricultural systems, rural development programmes, and agribusiness decision-making."
        image="/Agric.png"
        services={[
          "Farmer Registration and Profiling",
          "Agricultural Surveys",
          "Extension Service Digitisation",
          "Farm Monitoring Systems",
          "Yield Assessment Studies",
          "Agricultural Value Chain Analysis",
          "Market Intelligence Systems"
        ]}
        onLearnMore={() => handleLearnMore("Agriculture")}
      />

      {/* 07 — Capacity Building */}
      <ServiceAreaSection
        id="capacity"
        number="07"
        title="Capacity Building & Technical Assistance"
        tagline="Building skills. Strengthening institutions."
        description="We strengthen institutional and individual capacity through tailored training, technical support, and advisory services."
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
        services={[
          "Monitoring and Evaluation Training",
          "Data Analysis Training",
          "Digital Literacy Programmes",
          "KoboToolbox Training",
          "Research Methodology Training",
          "GIS Training",
          "Technical Advisory Services"
        ]}
        onLearnMore={() => handleLearnMore("Capacity Building")}
      />
    </div>
  );
};

export default ServicesPage;
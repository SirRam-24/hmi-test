import React from 'react';
import SEO from '../components/SEO';
import Services from '../components/Services';

export default function ServicesPage() {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Software Engineering & UI/UX Design Services",
    "provider": {
      "@type": "Organization",
      "name": "HMI Digital Solutions"
    },
    "serviceType": "Web Application Development, Mobile App Design, UI/UX Branding, API Integration, Cloud Infrastructure, AI & Automation",
    "areaServed": "worldwide"
  };

  return (
    <>
      <SEO 
        title="Our Software Engineering & UI/UX Services"
        description="Explore HMI Digital's custom web development, mobile app design, UI/UX branding, API integrations, cloud infrastructure, and AI automation solutions."
        keywords="web application development, API integration, mobile app UI/UX, cloud infrastructure, AI automation, software engineering"
        canonicalUrl="/services"
        schema={servicesSchema}
      />
      <div className="pt-20">
        <Services />
      </div>
    </>
  );
}


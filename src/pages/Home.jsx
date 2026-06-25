import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import WhyChooseHMI from '../components/WhyChooseHMI';
import HowItWorks from '../components/HowItWorks';
import ReadyToBuild from '../components/ReadyToBuild';

export default function Home() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HMI Digital Solutions",
    "url": "https://hmi-proj.vercel.app",
    "logo": "https://hmi-proj.vercel.app/favicon.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-99999-99999",
      "contactType": "sales",
      "email": "hello@hmi.digital",
      "areaServed": "worldwide",
      "availableLanguage": ["en"]
    },
    "sameAs": [
      "https://github.com/hmi-digital",
      "https://linkedin.com/company/hmi-digital"
    ]
  };

  return (
    <>
      <SEO 
        title="AI-Powered Websites & Same-Day Custom React Apps"
        description="HMI Digital delivers high-converting custom websites and React applications the same day. Affordable pricing, expert engineering, and full optimization."
        keywords="same-day web development, custom React apps, AI engineering, fast websites, affordable web design, HMI Digital"
        canonicalUrl="/"
        schema={homeSchema}
      />
      <Hero />
      <WhyChooseHMI />
      <HowItWorks />
      <ReadyToBuild />
    </>
  );
}


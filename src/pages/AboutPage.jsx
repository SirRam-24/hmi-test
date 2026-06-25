import React from 'react';
import SEO from '../components/SEO';
import About from '../components/About';

export default function AboutPage() {
  return (
    <>
      <SEO 
        title="About HMI Digital | The Next-Gen Digital Engineers"
        description="Learn about the mission, values, and leadership of HMI Digital. Speak directly to our engineers and see how our workflow delivers websites same-day."
        keywords="about HMI Digital, Thirulingeshwar, web design company, digital agency founders, custom website agency"
        canonicalUrl="/about"
      />
      <div className="pt-20">
        <About />
      </div>
    </>
  );
}


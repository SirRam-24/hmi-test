import React from 'react';
import SEO from '../components/SEO';
import Portfolio from '../components/Portfolio';

export default function PortfolioPage() {
  return (
    <>
      <SEO 
        title="Our Work & Interactive Case Studies"
        description="Check out HMI Digital's case studies of modern React dashboards, fintech tracking suites, AI assistants, and fashion e-commerce platforms."
        keywords="React portfolio, web design showcase, fintech UI dashboard, e-commerce case study, digital solutions portfolio"
        canonicalUrl="/portfolio"
      />
      <div className="pt-20">
        <Portfolio />
      </div>
    </>
  );
}


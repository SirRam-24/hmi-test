import React from 'react';
import SEO from '../components/SEO';
import Team from '../components/Team';

export default function TeamPage() {
  return (
    <>
      <SEO 
        title="Meet the Co-Founders & Software Architects"
        description="Get to know the co-founders, UI developers, and full-stack cloud engineers behind HMI Digital Solutions. Active developers working on your project."
        keywords="HMI Digital team, company founders, lead react developer, full stack architect, K. Thirulingeshwar"
        canonicalUrl="/team"
      />
      <div className="pt-20">
        <Team />
      </div>
    </>
  );
}


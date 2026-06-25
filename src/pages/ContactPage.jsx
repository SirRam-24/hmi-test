import React from 'react';
import SEO from '../components/SEO';
import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <>
      <SEO 
        title="Start Your Project | Free Website Design Quote"
        description="Contact HMI Digital for a free consultation and project quote. Get your custom web app or responsive website designed and launched within 24 hours."
        keywords="contact web developer, hire React developer, get website quote, same day website setup, contact HMI Digital"
        canonicalUrl="/contact"
      />
      <div className="pt-20">
        <Contact />
      </div>
    </>
  );
}


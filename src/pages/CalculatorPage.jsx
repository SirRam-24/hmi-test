import React from 'react';
import SEO from '../components/SEO';
import Calculator from '../components/Calculator';

export default function CalculatorPage() {
  return (
    <>
      <SEO 
        title="Interactive App Cost & Timeline Estimator"
        description="Estimate your project cost and delivery timeline instantly. Select platform, complexity, pages, and integrations to get a customized HMI spec sheet."
        keywords="app cost calculator, website price estimator, app timeline planner, custom software pricing"
        canonicalUrl="/calculator"
      />
      <div className="pt-20">
        <Calculator />
      </div>
    </>
  );
}


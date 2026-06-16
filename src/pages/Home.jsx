import React from 'react';
import Hero from '../components/Hero';
import WhyChooseHMI from '../components/WhyChooseHMI';
import HowItWorks from '../components/HowItWorks';
import ReadyToBuild from '../components/ReadyToBuild';

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseHMI />
      <HowItWorks />
      <ReadyToBuild />
    </>
  );
}

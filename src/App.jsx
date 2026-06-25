import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Chatbot from './components/Chatbot';

// Pages - Lazy Loaded for Performance Code-Splitting
const Home = lazy(() => import('./pages/Home'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const CalculatorPage = lazy(() => import('./pages/CalculatorPage'));
const TeamPage = lazy(() => import('./pages/TeamPage'));

// Sleek loading fallback skeleton to improve CLS and INP
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50/50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
        <span className="text-xs font-semibold text-indigo-650 tracking-widest uppercase animate-pulse">Loading Page...</span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50/70 text-slate-800 selection:bg-indigo-600 selection:text-white">
      <ScrollToTop />

      {/* Centered Floating Header Glassmorphic Menu */}
      <Navbar />

      {/* Main Layout Sections */}
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<TermsPage />} />
            {/* Wildcard redirect to Home to prevent crawl errors */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>

      {/* Footer Section */}
      <Footer />

      {/* Global AI Chatbot helper */}
      <Chatbot />
    </div>
  );
}


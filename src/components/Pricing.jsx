import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Shield, Star, HelpCircle, Sparkles, Rocket, Zap, TrendingUp, ShoppingBag, Globe } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "Starter Landing Page",
      desc: "Essential Static Presence in 24 hours",
      categoryTag: "Startups & Personal Branding",
      icon: Rocket,
      price: "999",
      priceTooltip: "Perfect for lightweight single page launch. Fully coded landing page setup, ready within 24 hours.",
      investmentType: "One-time Investment",
      features: [
        "Professional Single Page",
        "24-Hour Speed Launch",
        "Mobile-Responsive Layout",
        "Direct WhatsApp Link",
        "Modern Visual Design",
        "SSL Trust Security",
      ],
      cta: "LAUNCH MY SITE",
      helperText: "Fast Turnaround Guaranteed",
      popular: false,
      badgeText: "",
      badgeColor: ""
    },
    {
      name: "Business Website",
      desc: "Establish authority & capture more leads",
      categoryTag: "Professional Services & Agencies",
      icon: Zap,
      price: "2,499",
      priceTooltip: "Standard dynamic multi-page website tailored to attract leads and present services cleanly.",
      investmentType: "One-time Investment",
      features: [
        "4-Page Professional Sales Machine",
        "Everything in Starter plan",
        "Authority-Building UI/UX",
        "Google Local SEO Setup",
        "Custom Multi-Step Lead Forms",
        "Sales Funnel Strategy Call",
      ],
      cta: "BUILD MY WEBSITE",
      helperText: "Fast Turnaround Guaranteed",
      popular: true,
      badgeText: "Most Popular",
      badgeColor: "bg-indigo-600 text-white border-indigo-650"
    },
    {
      name: "Growth Website",
      desc: "Scale your traffic & dominate your niche",
      categoryTag: "Established Brands & High Growth",
      icon: TrendingUp,
      price: "3,499",
      priceTooltip: "Advanced features with deep SEO integration and animations designed to capture high traffic.",
      investmentType: "One-time Investment",
      features: [
        "Up to 6 Professional Pages",
        "Everything in Business plan",
        "Full ROI-Focused Architecture",
        "High-Impact Sales Animations",
        "SEO Blog (Traffic Generator)",
        "Advanced Keywords Strategy",
      ],
      cta: "GROW MY BUSINESS",
      helperText: "Fast Turnaround Guaranteed",
      popular: false,
      badgeText: "Growth Ready",
      badgeColor: "bg-emerald-600 text-white border-emerald-650"
    },
    {
      name: "Ecommerce Website",
      desc: "Limited Offer: Sell anything 24/7",
      categoryTag: "Product Sales & Retail Brands",
      icon: ShoppingBag,
      price: "4,999",
      priceTooltip: "Complete interactive storefront with cart, checkout, payment integrations and stock control.",
      investmentType: "Starting At",
      features: [
        "Multi-Page Store (20+ Product Pages)",
        "Everything in Growth plan",
        "24/7 Global Sales Engine",
        "Frictionless Checkout UI",
        "Payment Gateway Integration",
        "Automated Order Management",
      ],
      cta: "START SELLING",
      helperText: "Scalable Store",
      popular: false,
      badgeText: "Exclusive Limited Offer",
      badgeColor: "bg-rose-600 text-white border-rose-650"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white/30 relative overflow-hidden">
      {/* Subtle coordinate markers and background patterns */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-50/10 blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-50/10 blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="text-center mb-20 flex flex-col items-center space-y-6">
          {/* Circular badge icon */}
          <div className="w-12 h-12 rounded-full border border-indigo-100 bg-indigo-50/50 flex items-center justify-center text-indigo-600 shadow-sm">
            <Star className="w-5 h-5 fill-indigo-600" />
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Simple, Transparent <span className="text-indigo-650 font-black">Pricing</span>
          </h2>

          {/* Badge Indicators */}
          <div className="flex flex-wrap justify-center gap-3">
            <span className="flex items-center gap-1.5 px-4.5 py-1.5 rounded-full border border-indigo-100/80 bg-indigo-50/30 text-indigo-600 text-xs font-bold shadow-sm">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
              One-time Payment
            </span>
            <span className="flex items-center gap-1.5 px-4.5 py-1.5 rounded-full border border-indigo-100/80 bg-indigo-50/30 text-indigo-600 text-xs font-bold shadow-sm">
              <Shield className="w-3.5 h-3.5 stroke-[3]" />
              100% Ownership
            </span>
          </div>

          {/* Custom Trustpilot rating widget */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200/60 rounded-full shadow-sm text-xs font-bold mt-2 hover:-translate-y-0.5 transition-transform duration-300">
            <span className="text-slate-800 flex items-center gap-1">
              <Star className="w-4 h-4 fill-emerald-500 stroke-emerald-500" />
              <span className="tracking-tight text-slate-800 font-extrabold">Trustpilot</span>
            </span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-4 h-4 bg-emerald-500 rounded-sm flex items-center justify-center text-white">
                  <Star className="w-2.5 h-2.5 fill-white stroke-white" />
                </div>
              ))}
            </div>
            <span className="text-slate-500 font-normal">4.2</span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch max-w-7xl mx-auto">
          {plans.map((plan, idx) => {
            const Icon = plan.icon;
            return (
              <div
                key={idx}
                className={`rounded-[32px] border p-6 md:p-8 flex flex-col justify-between relative transition-all duration-300 hover:shadow-lg bg-white/80 backdrop-blur-md ${
                  plan.popular 
                    ? 'border-indigo-600 ring-2 ring-indigo-600/10 shadow-xl shadow-indigo-100/20' 
                    : 'border-slate-200/60 shadow-sm'
                }`}
              >
                {/* Popular or Specific Offer Badge */}
                {plan.badgeText && (
                  <div className={`absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 text-[9px] font-black tracking-widest px-4 py-1.5 rounded-full uppercase shadow-sm flex items-center gap-1 border ${plan.badgeColor}`}>
                    {plan.badgeText === "Most Popular" && <Sparkles className="w-3 h-3" />}
                    <span>{plan.badgeText}</span>
                  </div>
                )}

                <div className="space-y-6 text-left">
                  {/* Top Block: Icon & Titles */}
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-full bg-indigo-50 border border-indigo-100/80 flex items-center justify-center text-indigo-600 flex-shrink-0 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-extrabold text-slate-800 tracking-tight leading-tight">
                        {plan.name}
                      </h3>
                      <p className="text-slate-500 text-xs font-light leading-snug">
                        {plan.desc}
                      </p>
                    </div>
                  </div>

                  {/* Category Target Label */}
                  <div>
                    <span className="inline-block px-3 py-1 bg-indigo-50/50 border border-indigo-100/60 text-indigo-600 text-[9px] font-black uppercase tracking-wider rounded-full">
                      {plan.categoryTag}
                    </span>
                  </div>

                  {/* Price Block */}
                  <div className="space-y-1.5 py-4 border-b border-slate-100">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">
                      {plan.investmentType}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-3xl font-extrabold text-slate-800 font-mono flex items-center">
                        <span className="text-2xl font-sans mr-0.5">₹</span>
                        {plan.price}
                      </span>
                      <div className="group relative">
                        <HelpCircle className="w-3.5 h-3.5 text-slate-405 hover:text-indigo-600 cursor-pointer" />
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-slate-850 text-white text-[10px] rounded-lg shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 z-30 text-center font-sans font-light">
                          {plan.priceTooltip}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3.5">
                    <ul className="space-y-3 text-xs md:text-sm font-light text-slate-600">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2.5">
                          <div className="w-4.5 h-4.5 rounded-full bg-indigo-50 border border-indigo-100/80 flex items-center justify-center text-indigo-600 flex-shrink-0 shadow-sm">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span className="text-xs text-slate-600 leading-tight font-light">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA & Helper */}
                <div className="pt-6 mt-8 border-t border-slate-100/60 space-y-2.5 text-center">
                  <Link
                    to="/contact"
                    className={`w-full block py-3.5 rounded-2xl text-xs font-bold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-150 hover:bg-indigo-750 hover:shadow-lg'
                        : 'bg-slate-50 hover:bg-indigo-50/50 hover:text-indigo-600 hover:border-indigo-100 text-slate-700 border border-slate-200/50'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                  <span className="block text-[8px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                    {plan.helperText}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Domain & Hosting Policy Card */}
        <div className="max-w-6xl mx-auto mt-16 bg-indigo-50/30 border border-indigo-100/50 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start text-left shadow-sm">
          <div className="w-12 h-12 rounded-full bg-indigo-50 border border-indigo-100/80 flex items-center justify-center text-indigo-600 flex-shrink-0 shadow-sm">
            <Globe className="w-5 h-5" />
          </div>
          <div className="space-y-2">
            <h4 className="text-base font-extrabold text-slate-800 tracking-tight">
              Domain & Hosting Policy
            </h4>
            <p className="text-slate-500 text-xs md:text-sm font-light leading-relaxed">
              Our listed package prices do not include domain name registration and hosting server fees. We do not sell domains or hosting as standalone products, but we can help you set them up through our partnered providers. You are also free to purchase hosting from any external provider of your choice, provided it is compatible with our React/Node.js stack. Please note that we are not responsible for configuring or maintaining externally purchased, non-partnered hosting services.
            </p>
          </div>
        </div>

        {/* Featured Package: Brand Launch Pack Card */}
        <div className="max-w-6xl mx-auto mt-8 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-[32px] p-6 md:p-8 flex flex-col lg:flex-row justify-between items-center gap-8 text-left shadow-md hover:shadow-lg transition-all duration-300">
          <div className="space-y-6 flex-1 w-full">
            {/* Label */}
            <div>
              <span className="inline-block px-3 py-1 bg-indigo-50/50 border border-indigo-100/60 text-indigo-650 text-[10px] font-black uppercase tracking-wider rounded-full">
                All-In-One Identity & Website Solution
              </span>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-indigo-50 border border-indigo-100/80 flex items-center justify-center text-indigo-600 flex-shrink-0 shadow-sm">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-extrabold text-slate-800 tracking-tight">
                  Brand Launch Pack
                </h3>
                <p className="text-slate-500 text-xs md:text-sm font-light">
                  For new brands that want everything handled in one go
                </p>
              </div>
            </div>

            {/* 2 Column Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 pt-4 border-t border-slate-100">
              {[
                "Full website build",
                "Logo design (2 concepts, 1 revision)",
                "Brand colours & font selection",
                "Social media profiles set up",
                "Business email setup walkthrough"
              ].map((feat, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs md:text-sm text-slate-600">
                  <div className="w-4.5 h-4.5 rounded-full bg-indigo-50 border border-indigo-100/80 flex items-center justify-center text-indigo-600 flex-shrink-0 shadow-sm">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span className="font-light text-slate-600">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side CTA panel */}
          <div className="lg:w-80 w-full p-6 bg-slate-50/80 border border-slate-100 rounded-2xl flex flex-col justify-center gap-4 text-center lg:text-left shadow-sm">
            <div className="space-y-1 text-center lg:text-left">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block font-mono">
                Starting Investment
              </span>
              <div className="flex items-center justify-center lg:justify-start gap-1">
                <span className="text-3xl font-extrabold text-slate-800 font-mono flex items-center">
                  <span className="text-2xl font-sans mr-0.5">₹</span>
                  7,999
                </span>
                <div className="group relative">
                  <HelpCircle className="w-3.5 h-3.5 text-slate-400 hover:text-indigo-600 cursor-pointer" />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-slate-800 text-white text-[10px] rounded-lg shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 z-30 text-center font-sans font-light">
                    Full service branding, logo design assets, custom site design, social banners setup, and domain/email configuration.
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className="w-full block py-3.5 rounded-xl text-xs font-bold text-center bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-150 transition-all duration-300"
            >
              CLAIM PACKAGE
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

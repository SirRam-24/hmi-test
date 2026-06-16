import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Smartphone, Palette, Database, Cloud, Zap, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: "Web App Development",
      description: "High-performance React and Next.js applications engineered with speed, security, and responsive layouts at their core.",
      color: "bg-indigo-600",
      glow: "glow-indigo"
    },
    {
      icon: Smartphone,
      title: "Mobile App Design",
      description: "Smooth, interactive iOS and Android mobile designs using modern cross-platform patterns that clients love.",
      color: "bg-purple-600",
      glow: "glow-purple"
    },
    {
      icon: Palette,
      title: "UI/UX & Branding",
      description: "Bespoke digital design systems, user journey flows, and high-fidelity interactive wireframes for modern brands.",
      color: "bg-pink-600",
      glow: "glow-pink"
    },
    {
      icon: Database,
      title: "APIs & Core Integrations",
      description: "Robust backend system architectures, custom database APIs, secure payment gateways, and system integrations.",
      color: "bg-indigo-50",
      glow: "glow-pink"
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scaleable deployment set-ups utilizing Vercel, AWS, and Cloudflare to achieve 99.99% uptime and global content delivery.",
      color: "bg-violet-600",
      glow: "glow-indigo"
    },
    {
      icon: Zap,
      title: "AI & Automation Services",
      description: "Intelligent chatbot modules, workflow automations, and LLM implementations to speed up your operations.",
      color: "bg-purple-500",
      glow: "glow-purple"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white/40 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            How We Can <span className="text-gradient font-black">Help Your Business</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base font-light">
            We handle the design, code, architecture, and deployment so you can focus entirely on growing your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, index) => {
            const Icon = svc.icon;
            return (
              <div 
                key={index} 
                className="group relative rounded-3xl p-8 glass-card hover:bg-white/80 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between text-left"
              >
                {/* Glow layer on hover */}
                <div className={`absolute -inset-0.5 rounded-3xl ${svc.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300`}></div>
                
                <div className="space-y-6 relative z-10">
                  {/* Icon Wrapper */}
                  <div className={`w-12 h-12 rounded-2xl ${svc.color} flex items-center justify-center text-white shadow-md shadow-slate-100`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-slate-800 tracking-tight">
                      {svc.title}
                    </h3>
                    <p className="text-slate-500 text-xs md:text-sm font-light leading-relaxed">
                      {svc.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100/60 flex items-center justify-between relative z-10">
                  <span className="text-xs font-semibold text-slate-400 group-hover:text-indigo-600 transition-colors">
                    Learn more
                  </span>
                  <Link 
                    to="/contact"
                    className="p-2 rounded-full bg-slate-50 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:bg-indigo-50 transition-all duration-300"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

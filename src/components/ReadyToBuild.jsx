import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

export default function ReadyToBuild() {
  return (
    <section className="py-20 relative overflow-hidden bg-slate-50/20">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Large Rounded Glassmorphic CTA Card */}
        <ScrollReveal>
          <div className="relative glass-card rounded-[40px] border border-white/60 p-10 md:p-16 text-center space-y-8 shadow-2xl shadow-slate-100/50 hover:shadow-indigo-100/20 transition-all duration-500 overflow-hidden">
            
            {/* Subtle colored glow overlay inside card */}
            <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-indigo-200/20 blur-3xl -z-10 animate-pulse-slow"></div>
            
            {/* Centered Icon Container */}
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-indigo-50 border border-indigo-100/60 flex items-center justify-center text-indigo-650 shadow-inner">
                <MessageCircle className="w-7 h-7 stroke-[1.5]" />
              </div>
            </div>

            {/* Heading & Subtext */}
            <div className="space-y-4 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Ready to Build Your Website?
              </h2>
              <p className="text-slate-500 text-sm md:text-base font-light leading-relaxed">
                Get a high-converting website for less than any traditional web design provider. 
                Talk to our digital business consultant and take your company live today.
              </p>
            </div>

            {/* Action Button */}
            <div className="flex justify-center pt-2">
              <Link
                to="/contact"
                className="group relative flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-8 rounded-full shadow-lg shadow-indigo-200/50 hover:shadow-xl hover:shadow-indigo-300/60 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>Talk to Website Consultant</span>
                <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

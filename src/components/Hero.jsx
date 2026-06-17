import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Shield, CheckCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-16 overflow-hidden min-h-screen flex flex-col justify-between bg-grid-pattern">
      
      {/* Dynamic Background Glowing Blobs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-indigo-200/40 blur-3xl animate-blob -z-10"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-purple-200/30 blur-3xl animate-blob animation-delay-2000 -z-10"></div>
      <div className="absolute bottom-10 left-1/3 w-80 h-80 rounded-full bg-pink-100/40 blur-3xl animate-blob animation-delay-4000 -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-12">
        
        {/* Left Column: Hero Text & CTAs */}
        <div className="lg:col-span-7 space-y-8 text-left">
          
          <ScrollReveal delay={100} className="space-y-4">
            {/* Badges Row */}
            <div className="flex flex-wrap items-center gap-3">
              {/* AI-Powered Development Badge */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200/85 shadow-sm text-slate-800 text-[10px] font-bold uppercase tracking-wider hover:border-indigo-300 transition-colors">
                <Sparkles className="w-3.5 h-3.5 text-indigo-650" />
                <span>AI-Powered Engineering</span>
              </div>
              {/* MSME Registered Badge */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200/85 shadow-sm text-slate-800 text-[10px] font-bold uppercase tracking-wider hover:border-emerald-300 transition-colors">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>MSME Registered</span>
              </div>
            </div>

            {/* Trustpilot Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200/85 shadow-sm text-xs font-semibold text-slate-700">
              <span className="text-emerald-600 font-extrabold flex items-center gap-0.5">
                <svg className="w-4 h-4 fill-current text-emerald-500" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                Trustpilot
              </span>
              <div className="flex items-center gap-0.5 text-white bg-emerald-500 rounded p-0.5 scale-90">
                <span className="w-3 h-3 text-[8px] font-bold flex items-center justify-center">★</span>
                <span className="w-3 h-3 text-[8px] font-bold flex items-center justify-center">★</span>
                <span className="w-3 h-3 text-[8px] font-bold flex items-center justify-center">★</span>
                <span className="w-3 h-3 text-[8px] font-bold flex items-center justify-center">★</span>
                <span className="w-3 h-3 text-[8px] font-bold flex items-center justify-center text-emerald-250">★</span>
              </div>
              <span className="text-slate-450 font-bold font-mono">4.2</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200} className="space-y-4">
            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                AI-Powered Websites. <br />
                <span className="text-gradient font-black">Delivered the Same Day.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-650 max-w-2xl font-light leading-relaxed">
                We build high-converting websites and launch them the same day — cheaper than any 
                traditional web design provider. Customized React apps and modern software solutions.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link 
                to="/pricing"
                className="group relative flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-8 rounded-full shadow-lg shadow-indigo-200/50 hover:shadow-xl hover:shadow-indigo-300/60 hover:-translate-y-0.5 transition-all duration-300 text-sm"
              >
                <span>Build My Website</span>
                <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                to="/services"
                className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold py-4 px-8 rounded-full shadow-sm hover:shadow-md transition-all duration-300 text-sm"
              >
                <span>Explore Services</span>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            {/* Stats Bar Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-100">
              <div className="bg-white/50 backdrop-blur-md border border-slate-200/40 rounded-2xl p-4 text-left shadow-sm hover:bg-white/80 transition-colors">
                <span className="block text-2xl font-black text-slate-800 font-mono leading-none">24h</span>
                <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">Same-Day Delivery</span>
              </div>
              <div className="bg-white/50 backdrop-blur-md border border-slate-200/40 rounded-2xl p-4 text-left shadow-sm hover:bg-white/80 transition-colors">
                <span className="block text-2xl font-black text-slate-800 font-mono leading-none">500+</span>
                <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">Projects Completed</span>
              </div>
              <div className="bg-white/50 backdrop-blur-md border border-slate-200/40 rounded-2xl p-4 text-left shadow-sm hover:bg-white/80 transition-colors">
                <span className="block text-2xl font-black text-slate-800 font-mono leading-none">99%</span>
                <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">Success Rate</span>
              </div>
              <div className="bg-white/50 backdrop-blur-md border border-slate-200/40 rounded-2xl p-4 text-left shadow-sm hover:bg-white/80 transition-colors flex flex-col justify-between">
                <div>
                  <span className="block text-2xl font-black text-slate-800 font-mono leading-none">15+</span>
                  <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">Dedicated Experts</span>
                </div>
                <div className="flex -space-x-1.5 mt-2">
                  <div className="w-5 h-5 rounded-full border border-white bg-indigo-500 flex items-center justify-center text-[7px] text-white font-bold">A</div>
                  <div className="w-5 h-5 rounded-full border border-white bg-purple-500 flex items-center justify-center text-[7px] text-white font-bold">B</div>
                  <div className="w-5 h-5 rounded-full border border-white bg-pink-500 flex items-center justify-center text-[7px] text-white font-bold">C</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Right Column: Floating Browser Mockup */}
        <div className="lg:col-span-5 relative mt-8 lg:mt-0">
          <ScrollReveal delay={250}>
            {/* Animated Glow in back of mockup */}
            <div className="absolute inset-0 bg-indigo-500/10 rounded-3xl opacity-20 blur-2xl animate-pulse-slow"></div>

            {/* The Browser Mockup */}
            <div className="relative glass-card rounded-2xl overflow-hidden border border-white/60 shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-rotate-1 animate-float">
              
              {/* Browser Window Header */}
              <div className="bg-slate-900/5 px-4 py-3 border-b border-slate-200/50 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                  <span className="w-3 h-3 rounded-full bg-green-400"></span>
                </div>
                <div className="bg-white/80 border border-slate-200/60 rounded-md py-0.5 px-6 text-[10px] text-slate-400 select-none max-w-xs truncate">
                  hmi.digital/editor
                </div>
                <div className="w-6"></div>
              </div>

              {/* Simulated App Screen Content */}
              <div className="p-5 bg-white/70 space-y-4 text-left select-none">
                
                {/* Production Metrics widget */}
                <div className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm space-y-3 text-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Production Metrics</span>
                  <div className="flex justify-around items-center gap-2">
                    {/* Performance */}
                    <div className="flex flex-col items-center gap-1">
                      <div className="relative w-12 h-12 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle cx="24" cy="24" r="20" className="stroke-slate-100" strokeWidth="3" fill="transparent" />
                          <circle cx="24" cy="24" r="20" className="stroke-emerald-500" strokeWidth="3.5" fill="transparent" strokeDasharray="125.6" strokeDashoffset="0" strokeLinecap="round" />
                        </svg>
                        <span className="absolute text-[11px] font-bold text-slate-800 font-mono">100</span>
                      </div>
                      <span className="text-[8px] font-bold text-slate-500 uppercase tracking-wide">Performance</span>
                    </div>
                    {/* SEO */}
                    <div className="flex flex-col items-center gap-1">
                      <div className="relative w-12 h-12 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle cx="24" cy="24" r="20" className="stroke-slate-100" strokeWidth="3" fill="transparent" />
                          <circle cx="24" cy="24" r="20" className="stroke-emerald-500" strokeWidth="3.5" fill="transparent" strokeDasharray="125.6" strokeDashoffset="0" strokeLinecap="round" />
                        </svg>
                        <span className="absolute text-[11px] font-bold text-slate-800 font-mono">100</span>
                      </div>
                      <span className="text-[8px] font-bold text-slate-500 uppercase tracking-wide">SEO</span>
                    </div>
                    {/* Best Practices */}
                    <div className="flex flex-col items-center gap-1">
                      <div className="relative w-12 h-12 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle cx="24" cy="24" r="20" className="stroke-slate-100" strokeWidth="3" fill="transparent" />
                          <circle cx="24" cy="24" r="20" className="stroke-emerald-500" strokeWidth="3.5" fill="transparent" strokeDasharray="125.6" strokeDashoffset="0" strokeLinecap="round" />
                        </svg>
                        <span className="absolute text-[11px] font-bold text-slate-800 font-mono">100</span>
                      </div>
                      <span className="text-[8px] font-bold text-slate-500 uppercase tracking-wide">Best Practices</span>
                    </div>
                  </div>
                </div>

                {/* Code Editor Panel */}
                <div className="bg-slate-950 border border-slate-900 rounded-xl p-4 shadow-inner text-left font-mono text-[9px] leading-relaxed overflow-x-auto text-slate-300">
                  <div className="flex items-center gap-1.5 pb-2 border-b border-slate-900 mb-2.5">
                    <span className="w-2 h-2 rounded-full bg-red-500/60"></span>
                    <span className="w-2 h-2 rounded-full bg-yellow-500/60"></span>
                    <span className="w-2 h-2 rounded-full bg-green-500/60"></span>
                    <span className="text-[9px] text-slate-500 ml-1">App.jsx</span>
                  </div>
                  <div className="space-y-1">
                    <div><span className="text-purple-400">const</span> <span className="text-blue-400">HMIApp</span> = () =&gt; &#123;</div>
                    <div className="pl-4"><span className="text-purple-400">return</span> (</div>
                    <div className="pl-8">&lt;<span className="text-rose-450">Website</span></div>
                    <div className="pl-12"><span className="text-amber-500">speed</span>=<span className="text-emerald-400">"instant"</span></div>
                    <div className="pl-12"><span className="text-amber-500">seo</span>=<span className="text-emerald-400">"optimized"</span></div>
                    <div className="pl-12"><span className="text-amber-500">delivery</span>=<span className="text-emerald-400">"same-day"</span></div>
                    <div className="pl-8">/&gt;</div>
                    <div className="pl-4">);</div>
                    <div>&#125;;</div>
                  </div>
                </div>

              </div>

            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}

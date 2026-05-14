'use client';

import { useEffect } from 'react';
import { ShieldCheck, CheckCircle, MapPin } from 'lucide-react';

export default function GlobalMap() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="compliance" className="py-24 bg-[#08080a] relative overflow-x-hidden overflow-y-visible border-t border-white/5">
      <div className="dot-grid absolute inset-0 opacity-40"></div>

      {/* Abstract glowing dots positioned relatively to approximate world map locations */}
      <div className="absolute inset-0 w-full h-full max-w-6xl mx-auto opacity-70 hidden md:block pointer-events-none">
        {/* UK/Europe Cluster */}
        <div className="glow-point top-[30%] left-[48%]"></div>
        <div className="glow-point top-[32%] left-[49%] animation-delay-500"></div>
        <div className="glow-point top-[35%] left-[47%]"></div>
        {/* Portugal/Gib */}
        <div className="glow-point top-[34%] left-[51%]"></div>
        {/* Romania */}

        {/* North America */}
        <div className="glow-point top-[33%] left-[25%] animation-delay-1000"></div>
        {/* Michigan */}

        {/* South America */}
        <div className="glow-point top-[60%] left-[28%]"></div>
        {/* Peru */}
        <div className="glow-point top-[70%] left-[32%]"></div>
        {/* Buenos Aires */}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-end h-full">
        <div className="max-w-xl mb-12 md:mb-0">
          <span className="text-primary font-medium tracking-wide uppercase text-xs mb-4 block">
            Compliance First
          </span>
          <h2 className="reveal text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            Certified for regulated markets worldwide.
          </h2>
          <p className="reveal text-lg text-neutral-400 mb-8">
            Murple ensures total peace of mind for operators. Our content is licensed for key jurisdictions including the
            UK, Malta, Gibraltar, Isle of Man, Portugal, Romania, Peru, Buenos Aires, and Michigan (USA).
          </p>
          <div className="reveal flex flex-wrap gap-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-neutral-300">
              <ShieldCheck className="w-4 h-4 text-primary" /> UKGC Licensed
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-neutral-300">
              <ShieldCheck className="w-4 h-4 text-primary" /> MGA Licensed
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-neutral-300">
              <CheckCircle className="w-4 h-4 text-primary" /> GLI Certified
            </span>
          </div>
        </div>

        {/* Side Stats Panel */}
        <div className="reveal w-full md:w-80 bg-neutral-900/80 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-2xl">
          <div className="space-y-6">
            <div>
              <div className="text-xs text-neutral-500 uppercase font-semibold mb-1">Headquarters</div>
              <div className="text-white font-medium flex items-center gap-2">
                <MapPin className="w-4 h-4 text-purple-500" /> Gibraltar
              </div>
            </div>
            <div className="h-px bg-white/10 w-full"></div>
            <div>
              <div className="text-xs text-neutral-500 uppercase font-semibold mb-1">Recent Expansion</div>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> USA (Michigan)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Buenos Aires (LOTBA)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Peru
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


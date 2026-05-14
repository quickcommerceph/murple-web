'use client';

import { useEffect } from 'react';

export default function StatsStrip() {
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
    <section className="border-y border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="reveal">
            <p className="text-neutral-500 text-xs font-medium uppercase tracking-wider mb-1">Global Reach</p>
            <p className="text-2xl font-semibold text-white">
              25+ <span className="text-neutral-500 text-lg font-normal">Languages</span>
            </p>
          </div>
          <div className="reveal">
            <p className="text-neutral-500 text-xs font-medium uppercase tracking-wider mb-1">Currencies</p>
            <p className="text-2xl font-semibold text-white">
              175+ <span className="text-neutral-500 text-lg font-normal">Fiat & Crypto</span>
            </p>
          </div>
          <div className="reveal">
            <p className="text-neutral-500 text-xs font-medium uppercase tracking-wider mb-1">Regulation</p>
            <p className="text-2xl font-semibold text-white">
              9+ <span className="text-neutral-500 text-lg font-normal">Markets</span>
            </p>
          </div>
          <div className="reveal">
            <p className="text-neutral-500 text-xs font-medium uppercase tracking-wider mb-1">Certification</p>
            <div className="flex items-center gap-3 mt-1 justify-center md:justify-start">
              <span className="text-sm text-neutral-300 bg-white/5 px-2 py-1 rounded border border-white/5">GLI</span>
              <span className="text-sm text-neutral-300 bg-white/5 px-2 py-1 rounded border border-white/5">
                Gaming Associates
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


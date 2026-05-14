'use client';

import { useEffect, useRef } from 'react';
import { Layers, Globe2, Smartphone, Zap, Cpu } from 'lucide-react';

export default function CoreValues() {
  const spotlightGroupRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const group = spotlightGroupRef.current;
    if (!group) return;

    const handleMouseMove = (e: MouseEvent) => {
      const cards = group.querySelectorAll('.spotlight-card');

      cards.forEach((card) => {
        const cardRect = card.getBoundingClientRect();
        const x = e.clientX - cardRect.left;
        const y = e.clientY - cardRect.top;

        (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      });
    };

    group.addEventListener('mousemove', handleMouseMove);
    return () => group.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="solutions" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <h2 className="reveal text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            One provider.
            <br />
            All casino verticals.
          </h2>
          <p className="reveal text-lg text-neutral-400">
            Murple offers a huge variety of content designed to cater for all player tastes, backed by robust technology
            and global licensing.
          </p>
        </div>

        <div ref={spotlightGroupRef} className="spotlight-group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="spotlight-card rounded-2xl p-8 border border-white/5 flex flex-col h-full reveal">
            <div className="spotlight-border"></div>
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 text-primary border border-purple-500/20">
              <Layers strokeWidth={1.5} className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Huge Variety</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Slots, jackpots, table games, instant wins, scratch cards, and mini games. A comprehensive catalogue from
              a single integration.
            </p>
          </div>

          {/* Card 2 */}
          <div className="spotlight-card rounded-2xl p-8 border border-white/5 flex flex-col h-full reveal">
            <div className="spotlight-border"></div>
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400 border border-blue-500/20">
              <Globe2 strokeWidth={1.5} className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Global & Regulated</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Licensed in the UK, Malta, Gibraltar, Ontario, Romania, and more. All content certified by major test
              houses like GLI.
            </p>
          </div>

          {/* Card 3 */}
          <div className="spotlight-card rounded-2xl p-8 border border-white/5 flex flex-col h-full reveal">
            <div className="spotlight-border"></div>
            <div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center mb-6 text-pink-400 border border-pink-500/20">
              <Smartphone strokeWidth={1.5} className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">HTML5 Multi-device</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Seamless experience across desktop, mobile, and tablet. Optimized performance for low-bandwidth
              environments.
            </p>
          </div>

          {/* Card 4 */}
          <div className="spotlight-card rounded-2xl p-8 border border-white/5 flex flex-col h-full reveal">
            <div className="spotlight-border"></div>
            <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-6 text-yellow-400 border border-yellow-500/20">
              <Zap strokeWidth={1.5} className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Innovative Mechanics</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Proprietary features like Murple Spins, Superpays™, and feature-rich jackpots designed to boost player
              retention.
            </p>
          </div>

          {/* Card 5 */}
          <div className="spotlight-card rounded-2xl p-8 border border-white/5 flex flex-col h-full md:col-span-2 reveal">
            <div className="spotlight-border"></div>
            <div className="flex flex-col md:flex-row gap-6 md:items-center h-full">
              <div className="flex-1">
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-6 text-green-400 border border-green-500/20">
                  <Cpu strokeWidth={1.5} className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Flexible Integration</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                  Content delivered via robust B2B licenses. We support custom operator configurations including crypto
                  currencies upon request.
                </p>
              </div>
              <div className="bg-neutral-900 rounded-lg border border-white/10 p-4 w-full md:w-64">
                <div className="flex items-center gap-2 mb-3 border-b border-white/5 pb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-xs text-neutral-400 font-mono">API Connected</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-white/10 rounded w-3/4"></div>
                  <div className="h-2 bg-white/10 rounded w-1/2"></div>
                  <div className="h-2 bg-white/10 rounded w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

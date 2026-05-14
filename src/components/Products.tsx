'use client';

import { useEffect } from 'react';
import { Gamepad2, Dice5, Ticket, Check } from 'lucide-react';

export default function Products() {
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
    <section id="products" className="py-24 px-6 bg-[#030305]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="reveal text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">
            Diverse Game Portfolio
          </h2>
          <p className="reveal text-neutral-400 max-w-2xl mx-auto">Certified content delivered via B2B licences.</p>
        </div>

        <div className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Product 1 */}
          <div className="group relative bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/30 transition duration-300">
            <div className="aspect-video bg-gradient-to-br from-neutral-800 to-black relative flex items-center justify-center overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay transition duration-700 group-hover:scale-110"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=800&auto=format&fit=crop')" }}
              ></div>
              <Gamepad2 className="w-12 h-12 text-white relative z-10 drop-shadow-lg" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Slots & Jackpots</h3>
              <p className="text-sm text-neutral-400 mb-4">
                High-volatility slots featuring branded mechanics like Superpot™ and Supersweep™.
              </p>
              <ul className="text-xs text-neutral-500 space-y-1">
                <li className="flex items-center gap-2">
                  <Check className="w-3 h-3 text-purple-500" /> Branded Features
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3 h-3 text-purple-500" /> Progressive Jackpots
                </li>
              </ul>
            </div>
          </div>

          {/* Product 2 */}
          <div className="group relative bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/30 transition duration-300">
            <div className="aspect-video bg-gradient-to-br from-neutral-800 to-black relative flex items-center justify-center overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay transition duration-700 group-hover:scale-110"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511193311914-0346f16efe90?q=80&w=800&auto=format&fit=crop')" }}
              ></div>
              <Dice5 className="w-12 h-12 text-white relative z-10 drop-shadow-lg" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Table Games</h3>
              <p className="text-sm text-neutral-400 mb-4">
                Classic casino favorites reimagined for the digital age with smooth HTML5 performance.
              </p>
              <ul className="text-xs text-neutral-500 space-y-1">
                <li className="flex items-center gap-2">
                  <Check className="w-3 h-3 text-purple-500" /> Blackjack & Roulette
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3 h-3 text-purple-500" /> Mobile Optimized
                </li>
              </ul>
            </div>
          </div>

          {/* Product 3 */}
          <div className="group relative bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/30 transition duration-300">
            <div className="aspect-video bg-gradient-to-br from-neutral-800 to-black relative flex items-center justify-center overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay transition duration-700 group-hover:scale-110"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&w=800&auto=format&fit=crop')" }}
              ></div>
              <Ticket className="w-12 h-12 text-white relative z-10 drop-shadow-lg" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Instant Wins</h3>
              <p className="text-sm text-neutral-400 mb-4">
                Scratch cards, mini-games, and quick-play formats for casual engagement.
              </p>
              <ul className="text-xs text-neutral-500 space-y-1">
                <li className="flex items-center gap-2">
                  <Check className="w-3 h-3 text-purple-500" /> Fast Gameplay
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3 h-3 text-purple-500" /> Cross-sell potential
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


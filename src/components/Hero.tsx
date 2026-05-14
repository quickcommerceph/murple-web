'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

// Game card data with actual images from /public/images folder
const gameCards = [
  { id: 1, name: 'Super Ace', image: '/images/card-super-ace.webp', top: '5%', left: '2%', width: 140, delay: 5, zIndex: 3 },
  { id: 2, name: 'Sweet Craze', image: '/images/card-sweet-craze.webp', top: '15%', left: '15%', width: 150, delay: 3, zIndex: 5 },
  { id: 3, name: 'Tongits Go', image: '/images/card-tongits-go.webp', top: '8%', left: '35%', width: 180, delay: 0, zIndex: 8 },
  { id: 4, name: 'Games of Olympus', image: '/images/card-games-of-olympus.webp', top: '25%', left: '52%', width: 170, delay: 1, zIndex: 7 },
  { id: 5, name: 'Plinko', image: '/images/card-plinko.webp', top: '5%', left: '68%', width: 145, delay: 4, zIndex: 4 },
  { id: 6, name: 'Crypto Hit', image: '/images/card-crypto-hit.webp', top: '12%', left: '82%', width: 135, delay: 6, zIndex: 2 },
  { id: 7, name: 'Color Game', image: '/images/card-color-game.webp', top: '50%', left: '5%', width: 160, delay: 7, zIndex: 3 },
  { id: 8, name: 'Pusoy Go', image: '/images/card-pusoy-go.webp', top: '55%', left: '22%', width: 155, delay: 4, zIndex: 5 },
  { id: 9, name: '3 Dancing Monkeys', image: '/images/card-3-dancing-monkeys.webp', top: '45%', left: '42%', width: 190, delay: 2, zIndex: 9 },
  { id: 10, name: 'Roulette', image: '/images/card-roulette.webp', top: '60%', left: '62%', width: 150, delay: 3, zIndex: 6 },
  { id: 11, name: '100 Mega Seven', image: '/images/card-100-mega-seven.webp', top: '48%', left: '78%', width: 145, delay: 8, zIndex: 4 },
  { id: 12, name: 'Cloverhell', image: '/images/card-cloverhell.webp', top: '70%', left: '88%', width: 130, delay: 9, zIndex: 2 },
];

// Mobile-optimized positions using the same images
const mobileGameCards = [
  { id: 1, name: 'Super Ace', image: '/images/card-super-ace.webp', top: '0%', left: '2%', width: 90, delay: 4, zIndex: 3 },
  { id: 2, name: 'Tongits Go', image: '/images/card-tongits-go.webp', top: '5%', left: '33%', width: 100, delay: 0, zIndex: 7 },
  { id: 3, name: '3 Dancing Monkeys', image: '/images/card-3-dancing-monkeys.webp', top: '2%', left: '64%', width: 95, delay: 1, zIndex: 8 },
  { id: 4, name: 'Sweet Craze', image: '/images/card-sweet-craze.webp', top: '35%', left: '3%', width: 92, delay: 3, zIndex: 5 },
  { id: 5, name: 'Games of Olympus', image: '/images/card-games-of-olympus.webp', top: '32%', left: '36%', width: 95, delay: 2, zIndex: 6 },
  { id: 6, name: 'Plinko', image: '/images/card-plinko.webp', top: '38%', left: '67%', width: 85, delay: 5, zIndex: 4 },
  { id: 7, name: 'Color Game', image: '/images/card-color-game.webp', top: '65%', left: '2%', width: 90, delay: 6, zIndex: 3 },
  { id: 8, name: 'Pusoy Go', image: '/images/card-pusoy-go.webp', top: '62%', left: '33%', width: 92, delay: 4, zIndex: 5 },
  { id: 9, name: 'Roulette', image: '/images/card-roulette.webp', top: '68%', left: '64%', width: 90, delay: 7, zIndex: 4 },
  { id: 10, name: '100 Mega Seven', image: '/images/card-100-mega-seven.webp', top: '85%', left: '15%', width: 88, delay: 8, zIndex: 3 },
  { id: 11, name: 'Cloverhell', image: '/images/card-cloverhell.webp', top: '88%', left: '50%', width: 85, delay: 9, zIndex: 2 },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardsVisible, setCardsVisible] = useState(false);

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

    // Activate game cards with a slight delay for dramatic effect
    const timer = setTimeout(() => {
      setCardsVisible(true);
    }, 300);

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      clearTimeout(timer);
    };
  }, []);

  return (
    <header className="relative pt-32 pb-8 lg:pt-40 lg:pb-12 px-6 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h1 className="reveal text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
          Next level online <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-fuchsia-400">
            casino entertainment.
          </span>
        </h1>

        <p className="reveal text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Murple provides customers with the very best in certified iGaming content. From trademarked slots to jackpots,
          table games, and instant wins.
        </p>

        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button className="btn-gradient-border px-8 py-3.5 text-white font-medium hover:bg-white/5 transition flex items-center gap-2 group">
            View Games Portfolio
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-3.5 rounded-full text-neutral-300 hover:text-white font-medium transition flex items-center gap-2">
            Contact Sales
          </button>
        </div>
      </div>

      {/* Scattered Floating Game Cards */}
      <div 
        ref={containerRef}
        className="max-w-6xl mx-auto relative h-[420px] md:h-[480px] overflow-hidden"
      >
        {/* Desktop Layout */}
        <div className="hidden md:block w-full h-full relative">
          {gameCards.map((card) => (
            <div
              key={card.id}
              className={`game-card-float ${cardsVisible ? 'active' : ''}`}
              data-delay={card.delay}
              style={{
                top: card.top,
                left: card.left,
                width: card.width,
                height: card.width * 1.35,
                zIndex: card.zIndex,
              }}
            >
              <Image
                src={card.image}
                alt={card.name}
                fill
                className="object-cover"
                sizes={`${card.width}px`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <span className="absolute bottom-0 left-0 right-0 z-10 p-3 text-sm font-semibold text-white drop-shadow-lg">
                {card.name}
              </span>
            </div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden w-full h-full relative">
          {mobileGameCards.map((card) => (
            <div
              key={`mobile-${card.id}`}
              className={`game-card-float ${cardsVisible ? 'active' : ''}`}
              data-delay={card.delay}
              style={{
                top: card.top,
                left: card.left,
                width: card.width,
                height: card.width * 1.35,
                zIndex: card.zIndex,
              }}
            >
              <Image
                src={card.image}
                alt={card.name}
                fill
                className="object-cover"
                sizes={`${card.width}px`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <span className="absolute bottom-0 left-0 right-0 z-10 p-2 text-xs font-semibold text-white drop-shadow-lg">
                {card.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

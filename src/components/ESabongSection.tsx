'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight,
  Clock3,
  Flame,
  Gauge,
  Play,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
} from 'lucide-react';

const liveRooms = [
  {
    name: 'Traditional Ring',
    viewers: '12.4K',
    handle: '₱1.8M',
    momentum: 92,
    status: 'Live now',
    entry: 'Open',
  },
  {
    name: 'World Cup Matchup',
    viewers: '8.7K',
    handle: '₱980K',
    momentum: 74,
    status: 'Heating up',
    entry: '3 min',
  },
  {
    name: 'Grand Finals',
    viewers: '15.1K',
    handle: '₱2.3M',
    momentum: 88,
    status: 'Trending',
    entry: 'Open',
  },
];

const roomStats = [
  { label: 'Rooms live', value: '4', icon: Users },
  { label: 'Peak crowd', value: '15.1K', icon: Trophy },
  { label: 'Total handle', value: '₱5.5M', icon: Gauge },
  { label: 'Stream uptime', value: '98%', icon: ShieldCheck },
];

export default function ESabongSection() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.12 },
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="esabong"
      className="relative overflow-hidden border-t border-white/5 bg-[radial-gradient(circle_at_top_left,rgba(79,44,205,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(225,51,79,0.14),transparent_24%),linear-gradient(180deg,#050507_0%,#030305_100%)] px-6 py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 right-1/4 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-rose-500/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Featured Vertical
          </div>
          <h2 className="reveal mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            E-Sabong built for
            <br className="hidden sm:block" />
            momentum, clarity, and live intensity.
          </h2>
          <p className="reveal mt-5 max-w-2xl text-base leading-7 text-neutral-400 sm:text-lg">
            A cinematic showcase for active broadcasts with a crisp room board, clear entry windows, and a fast path
            into the action.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr] lg:items-stretch">
          <article className="spotlight-card reveal rounded-[28px] border border-white/10 p-5 sm:p-6 lg:p-7">
            <div className="spotlight-border" />
            <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="relative min-h-[280px] overflow-hidden rounded-[22px] border border-white/10 bg-neutral-900">
                <Image
                  src="/images/e-sabong-thumbnail.jpg"
                  alt="E-Sabong live broadcast thumbnail"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-emerald-300 backdrop-blur-sm">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />
                    Live lobby
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[11px] font-bold text-white/80 backdrop-blur-sm">
                    <Clock3 className="h-3.5 w-3.5" />
                    Broadcast now
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-[11px] font-black uppercase tracking-[0.24em] text-white/60">Featured Room</p>
                  <h3 className="mt-2 text-2xl font-semibold leading-tight text-white sm:text-3xl">
                    Traditional ring, premium presentation.
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {['HD stream', 'Multi-angle', 'Fast entry'].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/8 px-3 py-1.5 text-xs font-medium text-white/75 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                    <Flame className="h-4 w-4 text-[#e1334f]" />
                    Room momentum
                  </div>
                  <p className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    Real-time room intelligence for active viewers.
                  </p>
                  <p className="mt-4 text-sm leading-6 text-neutral-400">
                    Surface the strongest rooms first, keep the signal crisp, and make the live section feel immediate.
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {roomStats.map((stat) => {
                    const StatIcon = stat.icon;
                    return (
                      <div
                        key={stat.label}
                        className="rounded-2xl border border-white/10 bg-white/5 p-3 shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
                      >
                        <div className="flex items-center gap-2">
                          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/8 text-primary ring-1 ring-white/10">
                            <StatIcon className="h-4 w-4" />
                          </span>
                          <div>
                            <p className="text-lg font-semibold text-white">{stat.value}</p>
                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500">
                              {stat.label}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="#products"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7b3df0] via-[#5c2ccd] to-[#e1334f] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(79,44,205,0.3)] transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    <Play className="h-4 w-4 fill-current" />
                    Explore portfolio
                  </Link>
                  <Link
                    href="#solutions"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/85 transition-colors duration-200 hover:border-white/20 hover:bg-white/10"
                  >
                    View platform
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </article>

          <aside className="reveal self-stretch">
            <div className="flex h-full min-h-full flex-col rounded-[28px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.22em] text-neutral-500">Live rooms</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">Momentum board</h3>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/75">
                  3 featured
                </div>
              </div>

              <div className="mt-4 flex flex-1 flex-col space-y-3">
                {liveRooms.map((room, index) => (
                  <div
                    key={room.name}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4 transition-transform duration-200 hover:-translate-y-0.5"
                    style={{
                      background:
                        index === 0
                          ? 'linear-gradient(135deg, rgba(225,51,79,0.16), rgba(255,255,255,0.03))'
                          : index === 1
                            ? 'linear-gradient(135deg, rgba(79,44,205,0.18), rgba(255,255,255,0.03))'
                            : 'linear-gradient(135deg, rgba(17,24,39,0.88), rgba(225,51,79,0.08))',
                    }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.65)]" />
                          <p className="truncate text-sm font-semibold text-white">{room.name}</p>
                        </div>
                        <div className="mt-2 flex flex-wrap gap-3 text-xs text-neutral-400">
                          <span className="inline-flex items-center gap-1.5">
                            <Users className="h-3.5 w-3.5 text-primary" />
                            {room.viewers}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <Gauge className="h-3.5 w-3.5 text-primary" />
                            {room.handle}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <Clock3 className="h-3.5 w-3.5 text-primary" />
                            Entry {room.entry}
                          </span>
                        </div>
                      </div>
                      <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-300">
                        {room.status}
                      </span>
                    </div>

                    <div className="mt-4">
                      <div className="mb-2 flex items-center justify-between text-xs text-neutral-500">
                        <span>Momentum</span>
                        <span className="font-semibold text-white">{room.momentum}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/8">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#e1334f] via-[#7b3df0] to-[#1f5eff]"
                          style={{ width: `${room.momentum}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

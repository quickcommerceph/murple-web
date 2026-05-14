import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import StatsStrip from '@/components/StatsStrip';
import CoreValues from '@/components/CoreValues';
import GlobalMap from '@/components/GlobalMap';
import ESabongSection from '@/components/ESabongSection';
import Products from '@/components/Products';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030305] text-[#e5e5e5] antialiased overflow-x-hidden">
      <Navigation />
      <Hero />
      <StatsStrip />
      <CoreValues />
      <ESabongSection />
      <GlobalMap />
      <Products />
      <Footer />
    </main>
  );
}

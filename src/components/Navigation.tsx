import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030305]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="#" className="flex items-center gap-2 hover:opacity-80 transition">
            <Image 
              src="/images/logo-murple-1.png" 
              alt="Murple Games Logo" 
              width={120} 
              height={40}
              className="h-8 w-auto"
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
          <Link href="#products" className="hover:text-white transition-colors">
            Products
          </Link>
          <Link href="#esabong" className="hover:text-white transition-colors">
            E-Sabong
          </Link>
          <Link href="#solutions" className="hover:text-white transition-colors">
            Solutions
          </Link>
          <Link href="#compliance" className="hover:text-white transition-colors">
            Regulation
          </Link>
          <Link href="#news" className="hover:text-white transition-colors">
            Company
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="text-sm font-medium text-white bg-white/10 hover:bg-white/15 border border-white/5 px-4 py-2 rounded-full transition-colors"
          >
            Partner Access
          </Link>
        </div>
      </div>
    </nav>
  );
}

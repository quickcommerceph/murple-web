import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-[#030305] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div className="max-w-xs">
            <Link href="#" className="flex items-center gap-2 hover:opacity-80 transition mb-4">
              <Image 
                src="/images/logo-murple-1.png" 
                alt="Murple Games Logo" 
                width={120} 
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-neutral-500 leading-relaxed">
              Next level online casino entertainment. Certified for regulated markets worldwide.
            </p>
            <p className="text-sm text-neutral-600 mt-4">Headquarters: Gibraltar</p>
          </div>

          <div className="flex gap-16 flex-wrap">
            <div>
              <h4 className="text-white font-medium mb-4 text-sm">Products</h4>
              <ul className="space-y-2 text-sm text-neutral-500">
                <li>
                  <Link href="#" className="hover:text-primary transition">
                    Slots
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition">
                    Jackpots
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition">
                    Table Games
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition">
                    Instant Wins
                  </Link>
                </li>
                <li>
                  <Link href="#esabong" className="hover:text-primary transition">
                    E-Sabong
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4 text-sm">Company</h4>
              <ul className="space-y-2 text-sm text-neutral-500">
                <li>
                  <Link href="#" className="hover:text-primary transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4 text-sm">Legal</h4>
              <ul className="space-y-2 text-sm text-neutral-500">
                <li>
                  <Link href="#" className="hover:text-primary transition">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition">
                    Compliance
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-600">&copy; 2024 Murple. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-neutral-500 hover:text-white transition">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-neutral-500 hover:text-white transition">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-neutral-500 hover:text-white transition">
              <Facebook className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

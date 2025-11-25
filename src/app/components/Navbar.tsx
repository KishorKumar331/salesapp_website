'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    // Only handle smooth scrolling if we're on the same page
    if (pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 100, // Adjust offset for fixed header
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 py-3">
        <div className="flex justify-between items-center">
          <Link 
            href="/" 
            className="flex items-center"
            onClick={(e) => {
              if (pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            <img 
              src="/finallogo.png" 
              alt="Journey Routers" 
              className="h-30 w-30 hover:opacity-90 transition-opacity"
            />
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link 
              href="/" 
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              href="/pricing" 
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Pricing
            </Link>
            <Link 
              href="/privacy" 
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Terms
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

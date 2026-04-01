'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  useEffect(() => {
    // This code will only run on the client side
    const handleNavClick = (e: Event, targetId: string) => {
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

    // Add event listeners here if needed
    return () => {
      // Cleanup event listeners here if needed
    };
  }, [pathname]);

  // This function will be used in the JSX
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (pathname === '/') {
      e.preventDefault();
      // The actual scrolling is now handled by the effect
      const element = document.getElementById(targetId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md border-b border-gray-200 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link 
            href="/" 
            className="flex items-center group"
            onClick={(e) => {
              if (pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            <img 
              src="/IP-logo.png" 
              alt="I.P. Logo" 
              className="h-10 w-auto group-hover:scale-105 transition-transform duration-300 mr-3 filter drop-shadow-sm"
            />
            <div className="hidden sm:flex flex-col -space-y-1">
              <span className="text-xl tracking-wide font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#008cff] to-[#0052cc]">Infinite</span>
              <span className="text-sm font-semibold tracking-wide text-gray-600">Packages</span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Home', href: '/' },
              { name: 'Pricing', href: '/pricing' },
              { name: 'Privacy Policy', href: '/privacy' },
              { name: 'Terms', href: '/terms' },
            ].map((item) => (
              <Link 
                key={item.name}
                href={item.href} 
                className={`text-sm font-bold transition-all duration-200 hover:text-[#008cff] ${
                  pathname === item.href ? 'text-[#008cff]' : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            <a 
              href="https://dashboard.infinitepackages.com" 
              className="ml-4 px-6 py-2.5 rounded-md bg-gradient-to-r from-[#008cff] to-[#0052cc] hover:from-[#0070cc] hover:to-[#0040a0] text-white text-sm font-bold transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Login
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

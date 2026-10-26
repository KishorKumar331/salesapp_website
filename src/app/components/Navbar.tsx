'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [bannerIndex, setBannerIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const bannerMessages = [
    "QuickQuote: Web Dashboard & Android Mobile App bundled at ₹1,999.",
    "Custom Travel Agency Websites: Connect with our engineering team for bespoke setup.",
    "Unified Travel CRM System: Move WhatsApp inquiries straight to bookings.",
    "Group Travel CRM: Multi-pax manifests, split payments & instant day-wise PDFs."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % bannerMessages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [bannerMessages.length]);

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Features', href: '/#features' },
    { name: 'Group Bookings', href: '/#group-travel' },
    { name: 'Why QuickQuote', href: '/#comparison' },
    { name: 'Reviews', href: '/#reviews' },
    { name: 'FAQ', href: '/#faq' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#') && pathname === '/') {
      e.preventDefault();
      const targetId = href.replace('/#', '');
      const element = document.getElementById(targetId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 90,
          behavior: 'smooth'
        });
        setIsMobileMenuOpen(false);
      }
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300">
      {/* Top Rotating Announcement Banner */}
      <div className="bg-gradient-to-r from-[#0E3B34] via-[#124d44] to-[#0E3B34] text-white text-center py-2 px-4 text-xs font-bold tracking-wide relative h-9 overflow-hidden flex items-center justify-center border-b border-[#0E3B34]/20 shadow-inner">
        {bannerMessages.map((msg, idx) => (
          <span 
            key={idx}
            className={`absolute transition-all duration-500 ease-in-out px-4 text-center ${
              bannerIndex === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
          >
            {msg}
          </span>
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Brand Logo */}
          <Link 
            href="/" 
            className="flex items-center group"
            onClick={(e) => {
              if (pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }
            }}
          >
            <img 
              src="/IP_mark.svg" 
              alt="QuickQuote by Infinite Packages Logo" 
              className="h-10 w-auto group-hover:scale-105 transition-transform duration-300 mr-3 filter drop-shadow-sm"
            />
            <div className="flex flex-col -space-y-1">
              <span className="text-xl tracking-tight font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#0E3B34] to-[#E0A23B]">QuickQuote</span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#0E3B34]/70">by Infinite Packages</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((item) => (
              <Link 
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={`text-sm font-bold transition-all duration-200 hover:text-[#E0A23B] ${
                  pathname === item.href ? 'text-[#0E3B34]' : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Travel Agent Login Link (Target Keyword: crm travel agent login) */}
            <a 
              href="https://dashboard.infinitepackages.com" 
              title="CRM Travel Agent Login"
              className="text-sm font-bold text-gray-700 hover:text-[#0E3B34] px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Travel Agent Login
            </a>

            <a 
              href="https://dashboard.infinitepackages.com" 
              className="ml-1 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0E3B34] to-[#1C6C5E] hover:from-[#1C6C5E] hover:to-[#0E3B34] text-white text-sm font-black transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center gap-1.5"
            >
              Start Free <ArrowRight className="w-4 h-4" />
            </a>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100 focus:outline-none transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-[#0E3B34]" /> : <Menu className="w-6 h-6 text-[#0E3B34]" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200 shadow-xl">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className="block px-4 py-2.5 rounded-xl text-base font-bold text-gray-800 hover:bg-[#0E3B34]/5 hover:text-[#0E3B34] transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-2 space-y-2">
            <a
              href="https://dashboard.infinitepackages.com"
              title="CRM Travel Agent Login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex justify-center items-center gap-2 border border-gray-300 text-gray-800 font-bold py-2.5 px-6 rounded-xl hover:bg-gray-50 text-sm"
            >
              Travel Agent Login
            </a>
            <a
              href="https://dashboard.infinitepackages.com"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#E0A23B] to-[#F1B855] text-black font-black py-3 px-6 rounded-xl shadow-md text-base"
            >
              Start Free Trial <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

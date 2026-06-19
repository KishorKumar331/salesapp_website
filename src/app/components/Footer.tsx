'use client';

import { Check, MessageCircle, Lock, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      {/* Trust & Design Marketplace Section */}
      <section className="bg-white border-t border-gray-100 py-16 text-center">
         <div className="mx-auto max-w-5xl px-4 flex flex-col items-center">
            <ShieldCheck className="w-12 h-12 text-[#0E3B34] mb-6" />
            <h3 className="text-2xl font-black text-gray-900 mb-2">Enterprise-Grade Security</h3>
            <p className="text-gray-500 font-medium max-w-xl mx-auto mb-8">
               Your client data, quotations, and margins are protected with AES-256 encryption. We never share your leads or pricing rules with anyone.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 opacity-60">
               <div className="flex items-center gap-2 font-bold text-gray-400 uppercase tracking-widest text-xs"><Lock className="w-4 h-4"/> 100% Secure</div>
               <div className="flex items-center gap-2 font-bold text-gray-400 uppercase tracking-widest text-xs"><Check className="w-4 h-4"/> SSL Certified</div>
               <div className="flex items-center gap-2 font-bold text-gray-400 uppercase tracking-widest text-xs"><Check className="w-4 h-4"/> Daily Backups</div>
            </div>
         </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-[#020b14] text-gray-400 py-16 relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-12 border-b border-gray-800/80 pb-12 mb-8 text-left">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-black text-white mb-4 tracking-wide flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0E3B34] to-[#E0A23B] flex items-center justify-center shadow-lg"><span className="text-white text-xs">IP</span></span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E3B34] to-[#E0A23B]">Infinite</span> Packages
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed font-medium max-w-sm mb-6">
                The modern quoting engine built exclusively for independent travel agents and solo entrepreneurs. Sell more, stress less.
              </p>
              <div className="text-xs text-white/40 flex items-center gap-1 font-mono hover:text-[#E0A23B] cursor-pointer transition-colors">
                info@infinitepackages.com
              </div>
            </div>

            <div>
              <h4 className="text-xs font-black text-white mb-6 uppercase tracking-widest opacity-80">
                Product
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/pricing" className="text-sm text-gray-400 hover:text-white transition-colors font-semibold">Pricing</Link>
                </li>
                <li>
                  <Link href="/#marketplace" className="text-sm text-gray-400 hover:text-[#E0A23B] transition-colors font-semibold flex items-center gap-2">
                     Design Marketplace 
                     <span className="text-[9px] bg-[#0E3B34]/20 text-[#0E3B34] px-2 py-0.5 rounded uppercase tracking-wider font-black">New</span>
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors font-semibold">Android App</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-black text-white mb-6 uppercase tracking-widest opacity-80">Legal & Trust</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors font-semibold">Terms & Conditions</Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors font-semibold">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/refunds" className="text-sm text-gray-400 hover:text-white transition-colors font-semibold">Refund Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between text-left gap-4">
            <p className="text-xs font-bold tracking-wide text-gray-600 uppercase">
              © {new Date().getFullYear()} Infinite Packages - All Rights Reserved.
            </p>
            <p className="text-xs font-bold tracking-wide text-gray-600 flex items-center">
              Backed by <span className="font-black text-white ml-1 text-transparent bg-clip-text bg-gradient-to-r from-[#E0A23B] to-[#F1B855]">Infinite Packages API</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

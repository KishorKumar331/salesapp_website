'use client';

import { Check, Lock, ShieldCheck, Mail, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      {/* Enterprise Trust & Security Banner */}
      <section className="bg-white border-t border-gray-100 py-16 text-center">
         <div className="mx-auto max-w-5xl px-4 flex flex-col items-center">
            <div className="w-14 h-14 bg-[#0E3B34]/10 rounded-2xl flex items-center justify-center mb-6 text-[#0E3B34] shadow-sm">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3 tracking-tight">Enterprise-Grade Security & Privacy</h3>
            <p className="text-gray-600 font-medium max-w-xl mx-auto mb-8 leading-relaxed">
               Your client data, custom margins, and itinerary proposals are encrypted with enterprise AES-256 standard. We never share your leads or margin rules with third parties.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-70">
               <div className="flex items-center gap-2 font-bold text-gray-600 uppercase tracking-widest text-xs"><Lock className="w-4 h-4 text-[#0E3B34]"/> 100% Encrypted Data</div>
               <div className="flex items-center gap-2 font-bold text-gray-600 uppercase tracking-widest text-xs"><Check className="w-4 h-4 text-[#0E3B34]"/> SSL Certified</div>
               <div className="flex items-center gap-2 font-bold text-gray-600 uppercase tracking-widest text-xs"><Check className="w-4 h-4 text-[#0E3B34]"/> Cloud Backups</div>
            </div>
         </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-[#020b14] text-gray-400 py-16 relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-12 border-b border-gray-800/80 pb-12 mb-8 text-left">
            
            <div className="md:col-span-2">
              <h3 className="text-2xl font-black text-white mb-4 tracking-wide flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0E3B34] to-[#E0A23B] flex items-center justify-center shadow-lg"><span className="text-white text-xs font-black">IP</span></span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-[#E0A23B]">Infinite Packages</span>
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed font-medium max-w-sm mb-6">
                The modern quoting engine built exclusively for independent travel agents, agency owners, and solo entrepreneurs. Sell more, stress less.
              </p>
              <div className="text-xs text-emerald-400/90 flex items-center gap-2 font-mono hover:text-[#E0A23B] transition-colors">
                <Mail className="w-3.5 h-3.5" /> support@infinitepackages.com
              </div>
            </div>

            <div>
              <h4 className="text-xs font-black text-white mb-6 uppercase tracking-widest opacity-80">
                Platform
              </h4>
              <ul className="space-y-3.5">
                <li>
                  <a href="https://dashboard.infinitepackages.com" className="text-sm text-gray-400 hover:text-white transition-colors font-semibold flex items-center gap-1">
                    Agent Dashboard <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </a>
                </li>
                <li>
                  <Link href="/#marketplace" className="text-sm text-gray-400 hover:text-[#E0A23B] transition-colors font-semibold flex items-center gap-2">
                     PDF Custom Studio
                     <span className="text-[9px] bg-[#E0A23B]/20 text-[#E0A23B] px-2 py-0.5 rounded uppercase tracking-wider font-black">New</span>
                  </Link>
                </li>
                <li>
                  <a href="https://dashboard.infinitepackages.com" className="text-sm text-gray-400 hover:text-white transition-colors font-semibold">
                    Android Mobile App
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-black text-white mb-6 uppercase tracking-widest opacity-80">Legal & Governance</h4>
              <ul className="space-y-3.5">
                <li>
                  <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors font-semibold">Terms & Conditions</Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors font-semibold">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/refunds" className="text-sm text-gray-400 hover:text-white transition-colors font-semibold">Cancellations & Refunds</Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between text-left gap-4">
            <p className="text-xs font-bold tracking-wide text-gray-500 uppercase">
              © {new Date().getFullYear()} Infinite Packages — All Rights Reserved.
            </p>
            <p className="text-xs font-bold tracking-wide text-gray-500 flex items-center">
              Powered by <span className="font-black ml-1 text-transparent bg-clip-text bg-gradient-to-r from-[#E0A23B] to-[#F1B855]">Infinite Packages B2B API Engine</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

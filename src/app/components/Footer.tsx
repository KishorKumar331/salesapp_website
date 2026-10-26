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
                <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0E3B34] to-[#E0A23B] flex items-center justify-center shadow-lg"><span className="text-white text-xs font-black">QQ</span></span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-[#E0A23B]">QuickQuote</span>
                <span className="text-xs text-gray-400 font-bold tracking-widest uppercase">by Infinite Packages</span>
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed font-medium max-w-sm mb-4">
                The modern sales CRM designed for travel agents, tour operators, and agencies. Manage leads, track group travel, and send beautiful itineraries in minutes.
              </p>
              
              {/* Target Keyword: crm travel agent login micro-copy */}
              <div className="bg-[#0e3b34]/30 border border-[#0e3b34]/50 rounded-xl p-3.5 max-w-sm mb-4 text-xs text-gray-300">
                <span className="text-[#E0A23B] font-bold block mb-1">Travel Agent Portal:</span>
                Existing partner or agency? Access your dashboard via the <a href="https://dashboard.infinitepackages.com" title="CRM Travel Agent Login" className="text-white font-bold underline hover:text-[#E0A23B] transition-colors">Travel Agent Login</a> at the top right of the navigation bar.
              </div>

              {/* Get App Button for Google Play Store */}
              <div className="mb-5">
                <a
                  href="https://play.google.com/store/apps/details?id=com.salesapp.quickquotes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#071723] hover:bg-[#0b2234] border border-gray-700 hover:border-[#E0A23B] px-4 py-2.5 rounded-xl transition-all shadow-md group"
                >
                  <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M3.609 1.814L13.793 12 3.61 22.186A2.298 2.298 0 0 1 3 20.584V3.416c0-.623.232-1.2.609-1.602z" fill="#00E676"/>
                    <path d="M17.438 8.355L4.72 1.077c-.368-.21-.777-.315-1.111-.315l10.184 11.238 3.645-3.645z" fill="#FFD54F"/>
                    <path d="M3.609 23.238c.334 0 .743-.105 1.111-.315l12.718-7.278-3.645-3.645L3.609 23.238z" fill="#FF3D00"/>
                    <path d="M21.365 10.609l-3.927-2.254-3.645 3.645 3.645 3.645 3.927-2.254c.731-.418 1.185-1.196 1.185-2.041 0-.845-.454-1.623-1.185-2.041z" fill="#00B0FF"/>
                  </svg>
                  <div className="text-left">
                    <span className="block text-[9px] uppercase tracking-widest text-gray-400 font-bold leading-tight">GET IT ON</span>
                    <span className="block text-sm font-black text-white group-hover:text-[#E0A23B] transition-colors leading-tight">Google Play</span>
                  </div>
                </a>
              </div>

              <div className="text-xs text-emerald-400/90 flex items-center gap-2 font-mono hover:text-[#E0A23B] transition-colors">
                <Mail className="w-3.5 h-3.5" /> support@infinitepackages.com
              </div>
            </div>

            <div>
              <h4 className="text-xs font-black text-white mb-6 uppercase tracking-widest opacity-80">
                CRM Travel System
              </h4>
              <ul className="space-y-3.5">
                <li>
                  <Link 
                    href="/services" 
                    className="text-sm text-[#E0A23B] hover:text-[#F1B855] transition-colors font-bold flex items-center gap-1.5"
                  >
                    Our Services & Pricing <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </li>
                <li>
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.salesapp.quickquotes" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-white transition-colors font-semibold flex items-center gap-1.5"
                  >
                    Get Android App <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </li>
                <li>
                  <a href="https://dashboard.infinitepackages.com" title="CRM Travel Agent Login" className="text-sm text-gray-400 hover:text-white transition-colors font-semibold flex items-center gap-1">
                    Travel Agent Login <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </a>
                </li>
                <li>
                  <Link href="/#features" className="text-sm text-gray-400 hover:text-[#E0A23B] transition-colors font-semibold">
                    Lead & Pipeline Management
                  </Link>
                </li>
                <li>
                  <Link href="/#group-travel" className="text-sm text-gray-400 hover:text-[#E0A23B] transition-colors font-semibold">
                    Group Travel CRM
                  </Link>
                </li>
                <li>
                  <Link href="/#comparison" className="text-sm text-gray-400 hover:text-[#E0A23B] transition-colors font-semibold">
                    Why Switch from Complex CRMs
                  </Link>
                </li>
                <li>
                  <Link href="/#marketplace" className="text-sm text-gray-400 hover:text-[#E0A23B] transition-colors font-semibold flex items-center gap-2">
                     PDF Custom Studio
                     <span className="text-[9px] bg-[#E0A23B]/20 text-[#E0A23B] px-2 py-0.5 rounded uppercase tracking-wider font-black">New</span>
                  </Link>
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
              © {new Date().getFullYear()} QuickQuote by Infinite Packages — All Rights Reserved.
            </p>
            <p className="text-xs font-bold tracking-wide text-gray-500 flex items-center">
              Best CRM Software for Travel Agents • <span className="font-black ml-1 text-transparent bg-clip-text bg-gradient-to-r from-[#E0A23B] to-[#F1B855]">QuickQuote Engine</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

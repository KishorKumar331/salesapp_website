'use client';

import React from 'react';
import { Check, X, ShieldAlert, Zap, TrendingUp } from 'lucide-react';

export default function ProblemSection() {
  return (
    <section className="pt-12 pb-8 bg-white relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#E0A23B]/10 text-[#E0A23B] px-4 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide mb-6 border border-[#E0A23B]/20 shadow-sm">
            <ShieldAlert className="w-4 h-4" />
            The Hard Truth of Travel Sales
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-black text-gray-900 mb-6 tracking-tight leading-tight max-w-3xl mx-auto">
            You win the clients. You design the trips. <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E3B34] to-[#E0A23B]">But you don't own the equity.</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Every booking you close builds someone else's company valuation. You handle late-night client calls and resolve flight drops. It's time to build your own agency brand.
          </p>
        </div>

        {/* Contrast Cards */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch mb-8">
          
          {/* Card 1: Working for Someone Else */}
          <div className="bg-gradient-to-b from-[#fffaf9] to-[#fdf2f2]/40 border border-red-100 rounded-3xl p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
            <div>
              <div className="w-12 h-12 bg-red-100/80 text-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <X className="w-6 h-6" strokeWidth={3} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-red-500 bg-red-100/50 px-3 py-1 rounded-full inline-block mb-3">
                Legacy Agency Model
              </span>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Working for Someone Else</h3>
              <p className="text-sm text-gray-500 font-medium leading-relaxed mb-6">
                You work hard to close high-ticket bookings, but your reward is capped at a fixed incentive.
              </p>
              
              <ul className="space-y-3.5 text-left">
                {[
                  "You get a tiny commission while the owner keeps the massive profit markup.",
                  "Clients remember the agency brand name, not your personal advisory expertise.",
                  "If you leave the company, you lose your client relationships and booking history.",
                  "Zero flexibility: forced to sell rigid, fixed supplier itineraries."
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-700 font-medium">
                    <span className="text-red-500 font-black mr-2.5 mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-6 border-t border-red-100 mt-8 flex items-center justify-between text-xs text-red-600 font-bold uppercase tracking-wider">
              <span>Outcome: Active Time Trade</span>
              <span className="bg-red-100 text-red-700 px-2.5 py-0.5 rounded font-black text-[10px]">Zero Equity</span>
            </div>
          </div>

          {/* Card 2: Owning Your Agency */}
          <div className="bg-gradient-to-b from-[#f4fbf9] to-[#eaf5f3]/40 border border-[#0E3B34]/20 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E0A23B]/10 rounded-full blur-2xl pointer-events-none"></div>

            <div>
              <div className="w-12 h-12 bg-[#0E3B34] text-white rounded-2xl flex items-center justify-center mb-6 shadow-md">
                <Check className="w-6 h-6" strokeWidth={3} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#0E3B34] bg-[#0E3B34]/10 px-3 py-1 rounded-full inline-block mb-3">
                Modern Ownership Model
              </span>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Owning Your Agency Brand</h3>
              <p className="text-sm text-gray-500 font-medium leading-relaxed mb-6">
                Build your own brand quietly on the side, keeping 100% of your profit margin.
              </p>
              
              <ul className="space-y-3.5 text-left">
                {[
                  "Keep 100% of your markups. You set the customer final quote price.",
                  "Clients associate premium travel experiences directly with your business.",
                  "Your client data, quotation records, and margins are securely yours forever.",
                  "Total control to craft white-labeled multi-destination PDF packages."
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-800 font-medium">
                    <span className="text-[#0E3B34] font-black mr-2.5 mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-6 border-t border-[#0E3B34]/15 mt-8 flex items-center justify-between text-xs text-[#0E3B34] font-bold uppercase tracking-wider">
              <span>Outcome: Real Business Equity</span>
              <span className="bg-[#0E3B34] text-white px-2.5 py-0.5 rounded font-black text-[10px]">100% Ownership</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

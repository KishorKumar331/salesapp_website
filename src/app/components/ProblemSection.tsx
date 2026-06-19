'use client';

import React from 'react';
import { ArrowRight, Check, X, ShieldAlert, Award, Compass } from 'lucide-react';

export default function ProblemSection() {
  return (
    <section className="pt-10 pb-6 bg-white relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#E0A23B]/10 text-[#E0A23B] px-4 py-2 rounded-full text-sm font-bold tracking-wide mb-6">
            <ShieldAlert className="w-4 h-4" />
            The Hard Truth of Travel Sales
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-black text-gray-900 mb-6 tracking-tight leading-tight max-w-3xl mx-auto">
            You win the clients. You design the trips. <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E3B34] to-[#E0A23B]">But you don't own the future.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Every booking you close builds someone else's equity. You do the late-night calls, you resolve the flight drops, you make the clients happy. It's time to build your own company.
          </p>
        </div>

        {/* Contrast Cards */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch mb-12">
          
          {/* Card 1: The Employee */}
          <div className="bg-[#fcf8f8]/60 border border-red-100 rounded-3xl p-8 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                <X className="w-6 h-6 text-red-500" strokeWidth={3} />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">Being an Employee</h3>
              <p className="text-sm text-gray-500 font-medium leading-relaxed mb-6">
                You work hard to close high-ticket bookings, but the rewards are capped.
              </p>
              
              <ul className="space-y-3 text-left">
                {[
                  "You get a small commission while they keep the massive markup.",
                  "Clients remember the agency's brand name, not Samay.",
                  "If you leave, you lose all your clients and historical bookings.",
                  "No flexibility: you must sell their standard packages."
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-600 font-medium">
                    <span className="text-red-500 mr-2 mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-8 border-t border-gray-100 mt-8 text-xs text-red-500/80 font-bold uppercase tracking-wider">
              Outcome: Active income, zero equity.
            </div>
          </div>

          {/* Card 2: The Owner */}
          <div className="bg-[#eaf5f3]/30 border border-[#0E3B34]/20 rounded-3xl p-8 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 bg-[#eaf5f3] rounded-2xl flex items-center justify-center mb-6">
                <Check className="w-6 h-6 text-[#0E3B34]" strokeWidth={3} />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">Being the Owner</h3>
              <p className="text-sm text-gray-500 font-medium leading-relaxed mb-6">
                Build your own brand quietly on the side, keeping 100% of the value.
              </p>
              
              <ul className="space-y-3 text-left">
                {[
                  "Keep 100% of your markups. You set the price.",
                  "Clients associate quality service directly with your own brand.",
                  "Your bookings, data, and margins are securely yours forever.",
                  "Absolute control to design custom multi-destination packages."
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-600 font-medium">
                    <span className="text-[#0E3B34] mr-2 mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-8 border-t border-[#0E3B34]/10 mt-8 text-xs text-[#0E3B34] font-bold uppercase tracking-wider">
              Outcome: Long-term business asset & real freedom.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

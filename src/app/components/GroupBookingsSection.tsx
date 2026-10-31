'use client';

import { Users, FileSpreadsheet, CreditCard, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

export default function GroupBookingsSection() {
  return (
    <section id="group-travel" className="py-18 bg-[#f8fafd] border-y border-gray-100 relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#0E3B34]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#E0A23B]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0E3B34]/10 text-[#0E3B34] px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-4">
            Group Travel CRM & Rapid Quoting
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black text-gray-900 mb-6 tracking-tight">
            Effortless Group Departures & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E3B34] via-[#124d44] to-[#E0A23B]">Fast Quotes</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Manage multi-passenger family groups, student departures, and corporate incentive trips without the spreadsheet chaos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch mb-12">
          
          {/* Card 1: Multi-Pax Group Handling */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-[0_10px_35px_-15px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 bg-[#0E3B34]/10 text-[#0E3B34] rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7" strokeWidth={2.2} />
              </div>
              <span className="text-[11px] font-black uppercase tracking-wider text-[#0E3B34] bg-[#0E3B34]/5 px-3 py-1 rounded-full inline-block mb-3">
                Group Travel CRM
              </span>
              <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">
                Multi-Pax Group Handling
              </h3>
              <p className="text-gray-600 font-medium leading-relaxed mb-6">
                Track passenger manifests, split payments, and customized rooming lists in one shared file. Eliminate reconciliation errors when organizing large tour departures.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Passenger manifests with passport & dietary tags",
                  "Automated per-pax and per-family split payment tracking",
                  "Customized single, double & triple rooming lists",
                  "Consolidated group invoicing with transparent supplier cost margins"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#00ab6b] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-gray-500">
              <span>Optimized for 10 to 500+ Pax</span>
              <span className="text-[#0E3B34]">Live Manifest Sync &rarr;</span>
            </div>
          </div>

          {/* Card 2: Instant PDF Quotations */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-[0_10px_35px_-15px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 bg-[#E0A23B]/10 text-[#E0A23B] rounded-2xl flex items-center justify-center mb-6">
                <FileSpreadsheet className="w-7 h-7" strokeWidth={2.2} />
              </div>
              <span className="text-[11px] font-black uppercase tracking-wider text-[#E0A23B] bg-[#E0A23B]/10 px-3 py-1 rounded-full inline-block mb-3">
                Instant Day-Wise Itineraries
              </span>
              <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">
                Instant PDF Quotations
              </h3>
              <p className="text-gray-600 font-medium leading-relaxed mb-6">
                Generate branded day-wise itineraries and payment links faster than standalone itinerary builders. Is Travefy a CRM? While Travefy builds itineraries, QuickQuote unifies the complete travel CRM pipeline and quoting engine in one place.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "1-minute day-by-day itinerary construction",
                  "Embedded UPI, card & direct wire payment links",
                  "Dynamic supplier cost vs. client selling price margin locks",
                  "Client-ready PDF proposals with your agency logo & brand"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#00ab6b] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-gray-500">
              <span>All-In-One CRM vs Travefy</span>
              <span className="text-[#E0A23B]">Built for Travel Desks &rarr;</span>
            </div>
          </div>

        </div>

        {/* Feature Highlights Banner */}
        <div className="bg-gradient-to-r from-[#0E3B34] to-[#1C6C5E] rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center md:text-left">
            <span className="text-xs uppercase font-black tracking-widest text-[#E0A23B] block mb-1">
              High-Converting Proposal Engine
            </span>
            <h4 className="text-xl sm:text-2xl font-black tracking-tight">
              Ready to quote complex group departures in minutes?
            </h4>
            <p className="text-emerald-100/90 text-sm font-medium mt-1">
              Stop juggling 5 different spreadsheets. Use the specialized Group Travel CRM built to win quotes.
            </p>
          </div>
          <a
            href="https://quick-quote.incognitosolution.com"
            className="bg-[#E0A23B] hover:bg-[#F1B855] text-black px-7 py-3.5 rounded-full font-black text-sm transition-all shadow-md hover:shadow-lg whitespace-nowrap flex items-center gap-2 transform hover:-translate-y-0.5"
          >
            Create Group Quote <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}

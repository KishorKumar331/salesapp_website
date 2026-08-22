'use client';

import React, { useState } from 'react';
import { Calculator, ArrowRight, TrendingUp, ShieldAlert, Award, Sparkles } from 'lucide-react';

export default function ProfitCalculator() {
  // Sliders State
  const [bookingsCount, setBookingsCount] = useState(12);
  const [profitPerFile, setProfitPerFile] = useState(10000);
  const [operationalLoss, setOperationalLoss] = useState(500); // per file
  const [associatesIncentivePercent, setAssociatesIncentivePercent] = useState(10); // %

  // Calculations
  const grossProfit = bookingsCount * profitPerFile;
  const totalOpLoss = bookingsCount * operationalLoss;
  const associatesIncentive = Math.round(grossProfit * (associatesIncentivePercent / 100));
  const netOwnerPocket = grossProfit - totalOpLoss - associatesIncentive;

  // Currency Formatter in Indian Rupees
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section className="py-14 bg-white relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#E0A23B]/10 text-[#E0A23B] px-4 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide mb-5 border border-[#E0A23B]/20">
            <Calculator className="w-4 h-4" />
            Interactive Earnings Calculator
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black text-gray-900 mb-4 tracking-tight leading-tight">
            Calculate What Goes in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E3B34] to-[#E0A23B]">Your Pocket</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Estimate your net monthly earnings as an independent agency owner after operational leaks and staff incentives.
          </p>
        </div>

        {/* Calculator Container */}
        <div className="bg-[#041422] border border-[#0E3B34]/60 rounded-[2.5rem] p-6 sm:p-10 shadow-[0_20px_50px_rgba(14,59,52,0.35)] overflow-hidden relative">
          
          {/* Background Ambient Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#0E3B34]/25 rounded-full blur-[110px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E0A23B]/15 rounded-full blur-[110px] pointer-events-none"></div>

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Sliders Column (Left - 7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Slider 1: Total Bookings per Month */}
              <div className="space-y-2 bg-white/5 p-4 rounded-2xl border border-white/5">
                <div className="flex justify-between items-center text-sm font-bold text-gray-200">
                  <span>Total Bookings per Month</span>
                  <span className="text-[#E0A23B] text-base font-black bg-[#E0A23B]/10 px-3 py-0.5 rounded-lg border border-[#E0A23B]/20">
                    {bookingsCount} bookings
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  step="1"
                  value={bookingsCount}
                  onChange={(e) => setBookingsCount(Number(e.target.value))}
                  className="w-full h-2.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#E0A23B]"
                />
                <div className="flex justify-between text-[10px] text-gray-400 font-bold">
                  <span>1 Booking</span>
                  <span>50 Bookings</span>
                </div>
              </div>

              {/* Slider 2: Average Profit per File */}
              <div className="space-y-2 bg-white/5 p-4 rounded-2xl border border-white/5">
                <div className="flex justify-between items-center text-sm font-bold text-gray-200">
                  <span>Average Profit Margin per File</span>
                  <span className="text-[#E0A23B] text-base font-black bg-[#E0A23B]/10 px-3 py-0.5 rounded-lg border border-[#E0A23B]/20">
                    {formatCurrency(profitPerFile)}
                  </span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="50000"
                  step="500"
                  value={profitPerFile}
                  onChange={(e) => setProfitPerFile(Number(e.target.value))}
                  className="w-full h-2.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#E0A23B]"
                />
                <div className="flex justify-between text-[10px] text-gray-400 font-bold">
                  <span>{formatCurrency(2000)} /file</span>
                  <span>{formatCurrency(50000)} /file</span>
                </div>
              </div>

              {/* Slider 3: Average Loss in Operation (per file) */}
              <div className="space-y-2 bg-white/5 p-4 rounded-2xl border border-white/5">
                <div className="flex justify-between items-center text-sm font-bold text-gray-200">
                  <span className="flex items-center gap-1.5">Estimated Operational Leak <span className="text-[10px] text-gray-400 font-normal">(per file)</span></span>
                  <span className="text-red-400 text-base font-black bg-red-500/10 px-3 py-0.5 rounded-lg border border-red-500/20">
                    {formatCurrency(operationalLoss)}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="100"
                  value={operationalLoss}
                  onChange={(e) => setOperationalLoss(Number(e.target.value))}
                  className="w-full h-2.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#E0A23B]"
                />
                <div className="flex justify-between text-[10px] text-gray-400 font-bold">
                  <span>₹0 (Zero leak)</span>
                  <span>{formatCurrency(5000)} /file</span>
                </div>
              </div>

              {/* Slider 4: Team / Associate Share (%) */}
              <div className="space-y-2 bg-white/5 p-4 rounded-2xl border border-white/5">
                <div className="flex justify-between items-center text-sm font-bold text-gray-200">
                  <span>Team / Associate Incentive <span className="text-[10px] text-gray-400 font-normal">(% of profit)</span></span>
                  <span className="text-[#E0A23B] text-base font-black bg-[#E0A23B]/10 px-3 py-0.5 rounded-lg border border-[#E0A23B]/20">
                    {associatesIncentivePercent}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="50"
                  step="1"
                  value={associatesIncentivePercent}
                  onChange={(e) => setAssociatesIncentivePercent(Number(e.target.value))}
                  className="w-full h-2.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#E0A23B]"
                />
                <div className="flex justify-between text-[10px] text-gray-400 font-bold">
                  <span>0% (Solo Agent)</span>
                  <span>50% Team Share</span>
                </div>
              </div>

            </div>

            {/* Calculations & Net Payout Column (Right - 5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Gross Profit */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex justify-between items-center">
                <div>
                  <span className="text-[10px] uppercase text-gray-400 font-black tracking-wider block">Gross Monthly Revenue Margin</span>
                  <span className="text-white text-lg font-black">{formatCurrency(grossProfit)}</span>
                </div>
                <TrendingUp className="w-5 h-5 text-[#E0A23B]" />
              </div>

              {/* Operational Losses */}
              <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-4 flex justify-between items-center">
                <div>
                  <span className="text-[10px] uppercase text-red-400 font-black tracking-wider block">Est. Operational Leakage</span>
                  <span className="text-white text-lg font-black">{formatCurrency(totalOpLoss)}</span>
                </div>
                <ShieldAlert className="w-5 h-5 text-red-400" />
              </div>

              {/* Staff Payout */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex justify-between items-center">
                <div>
                  <span className="text-[10px] uppercase text-gray-400 font-black tracking-wider block">Team / Sub-Agent Payouts</span>
                  <span className="text-white text-lg font-black">{formatCurrency(associatesIncentive)}</span>
                </div>
                <Award className="w-5 h-5 text-blue-400 opacity-80" />
              </div>

              {/* Net Payout Card */}
              <div className="bg-gradient-to-br from-[#0E3B34]/60 to-[#124d44]/70 border border-[#0E3B34] rounded-2xl p-6 text-center shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#E0A23B]/15 rounded-full blur-xl pointer-events-none"></div>
                
                <span className="inline-flex items-center gap-1.5 text-[10px] uppercase text-[#E0A23B] font-black tracking-widest block mb-2 bg-[#E0A23B]/10 px-3 py-1 rounded-full border border-[#E0A23B]/20">
                  <Sparkles className="w-3 h-3" /> Net Take-Home Owner Income
                </span>
                
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-[#E0A23B] text-3xl sm:text-4xl font-black block my-1">
                  {formatCurrency(netOwnerPocket >= 0 ? netOwnerPocket : 0)}
                </span>
                <span className="text-[10px] text-gray-300 font-bold block">100% Retained &bull; Yours to Reinvest</span>
              </div>

            </div>

          </div>

          {/* Call to Action */}
          <div className="mt-8 pt-6 border-t border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-bold text-gray-300 text-center sm:text-left">
              Stop splitting margins. Build your independent travel agency equity today.
            </span>
            <a 
              href="https://dashboard.infinitepackages.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E0A23B] to-[#F1B855] hover:from-[#F1B855] hover:to-[#E0A23B] text-black font-black px-6 py-3.5 rounded-xl text-sm transition-all transform hover:-translate-y-0.5 shadow-lg"
            >
              Start Generating Profit <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

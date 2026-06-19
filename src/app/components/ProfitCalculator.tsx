'use client';

import React, { useState } from 'react';
import { Calculator, Wallet, ArrowRight, ArrowUpRight, TrendingUp, ShieldAlert, Award } from 'lucide-react';

export default function ProfitCalculator() {
  // 4 Sliders State
  const [bookingsCount, setBookingsCount] = useState(10);
  const [profitPerFile, setProfitPerFile] = useState(8000);
  const [operationalLoss, setOperationalLoss] = useState(500); // per file
  const [associatesIncentivePercent, setAssociatesIncentivePercent] = useState(10); // in %

  // Mathematical Model
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
    <section className="py-12 bg-white relative">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#E0A23B]/10 text-[#E0A23B] px-4 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide mb-6">
            <Calculator className="w-4 h-4" />
            Earnings Calculator
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-gray-900 mb-4 tracking-tight leading-tight">
            Calculate What Goes in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E3B34] to-[#E0A23B]">Your Pocket</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Estimate your monthly net earnings as an agency owner after accounting for operational leaks and team incentives.
          </p>
        </div>

        {/* Calculator Container */}
        <div className="bg-[#041422] border border-[#0E3B34]/60 rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(14,59,52,0.3)] overflow-hidden relative">
          
          {/* Decorative background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#0E3B34]/20 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E0A23B]/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 grid md:grid-cols-12 gap-8 items-start">
            
            {/* Sliders Column (Left - 7 cols) */}
            <div className="md:col-span-7 space-y-5">
              
              {/* Slider 1: Total Bookings per Month */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-bold text-gray-300">
                  <span>Total Bookings per Month</span>
                  <span className="text-[#E0A23B] text-base font-black">{bookingsCount} bookings</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  step="1"
                  value={bookingsCount}
                  onChange={(e) => setBookingsCount(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#E0A23B]"
                />
                <div className="flex justify-between text-[9px] text-gray-500 font-bold">
                  <span>1 Booking</span>
                  <span>50 Bookings</span>
                </div>
              </div>

              {/* Slider 2: Average Profit per File */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-bold text-gray-300">
                  <span>Average Profit per File</span>
                  <span className="text-[#E0A23B] text-base font-black">{formatCurrency(profitPerFile)}</span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="50000"
                  step="500"
                  value={profitPerFile}
                  onChange={(e) => setProfitPerFile(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#E0A23B]"
                />
                <div className="flex justify-between text-[9px] text-gray-500 font-bold">
                  <span>{formatCurrency(2000)} /file</span>
                  <span>{formatCurrency(50000)} /file</span>
                </div>
              </div>

              {/* Slider 3: Average Loss in Operation (per file) */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-bold text-gray-300">
                  <span className="flex items-center gap-1.5">Average Loss in Operation <span className="text-[10px] text-gray-400 font-normal">(per file)</span></span>
                  <span className="text-red-400 text-base font-black">{formatCurrency(operationalLoss)}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="100"
                  value={operationalLoss}
                  onChange={(e) => setOperationalLoss(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#E0A23B]"
                />
                <div className="flex justify-between text-[9px] text-gray-500 font-bold">
                  <span>₹0 (Perfect ops)</span>
                  <span>{formatCurrency(5000)} /file</span>
                </div>
              </div>

              {/* Slider 4: Associates Incentive (%) */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-bold text-gray-300">
                  <span>Associates Incentive <span className="text-[10px] text-gray-400 font-normal">(% of profit)</span></span>
                  <span className="text-[#E0A23B] text-base font-black">{associatesIncentivePercent}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="50"
                  step="1"
                  value={associatesIncentivePercent}
                  onChange={(e) => setAssociatesIncentivePercent(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#E0A23B]"
                />
                <div className="flex justify-between text-[9px] text-gray-500 font-bold">
                  <span>0% (No staff payouts)</span>
                  <span>50% Share</span>
                </div>
              </div>

            </div>

            {/* Calculations & Payout Column (Right - 5 cols) */}
            <div className="md:col-span-5 space-y-4">
              
              {/* Gross Profit Card */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex justify-between items-center">
                <div>
                  <span className="text-[9px] uppercase text-gray-400 font-black tracking-wider block">Gross Monthly Profit</span>
                  <span className="text-white text-base font-black">{formatCurrency(grossProfit)}</span>
                </div>
                <TrendingUp className="w-5 h-5 text-[#E0A23B]" />
              </div>

              {/* Operational Losses Card */}
              <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-4 flex justify-between items-center">
                <div>
                  <span className="text-[9px] uppercase text-red-400 font-black tracking-wider block">Total Operational Loss</span>
                  <span className="text-white text-base font-black">{formatCurrency(totalOpLoss)}</span>
                </div>
                <ShieldAlert className="w-5 h-5 text-red-500 opacity-60" />
              </div>

              {/* Staff Payout Card */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex justify-between items-center">
                <div>
                  <span className="text-[9px] uppercase text-gray-400 font-black tracking-wider block">Associate Payouts</span>
                  <span className="text-white text-base font-black">{formatCurrency(associatesIncentive)}</span>
                </div>
                <Award className="w-5 h-5 text-blue-400 opacity-60" />
              </div>

              {/* Net Payout Card (What goes in Owner Pocket) */}
              <div className="bg-[#0E3B34]/30 border border-[#0E3B34]/60 rounded-2xl p-5 text-center shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#E0A23B]/10 rounded-full blur-xl pointer-events-none"></div>
                <span className="text-[10px] uppercase text-[#E0A23B] font-black tracking-widest block mb-1">What goes in Owner Pocket</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200 text-3xl font-black block">
                  {formatCurrency(netOwnerPocket >= 0 ? netOwnerPocket : 0)}
                </span>
                <span className="text-[9px] text-gray-500 font-bold block mt-1.5">Net Monthly Payout &bull; Fully Yours</span>
              </div>

            </div>

          </div>

          {/* Bottom Call to Action */}
          <div className="mt-8 pt-6 border-t border-white/5 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-bold text-gray-400">Own your booking margins. Build real business equity.</span>
            <button 
              onClick={() => window.location.href = 'https://dashboard.infinitepackages.com'}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E0A23B] to-[#F1B855] hover:from-[#F1B855] hover:to-[#E0A23B] text-black font-black px-6 py-3.5 rounded-xl text-sm transition-all transform hover:-translate-y-0.5 shadow-md"
            >
              Claim Your Full Profit <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

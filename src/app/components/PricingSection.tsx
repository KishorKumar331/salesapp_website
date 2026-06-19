'use client';

import React, { useEffect, useState } from 'react';
import PricingDisplay from './PricingDisplay';

interface PlanData {
  Name: string;
  PricePaise: number;
  Currency: string;
  Description: string;
  QuoteCredits: number;
  Destination: {
    Domestic: string[];
    International: string[];
  };
}

export default function PricingSection() {
  const [plan, setPlan] = useState<PlanData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    async function loadPricing() {
      try {
        const manifestRes = await fetch('https://plans.infinitepackages.com/plans/manifest.json');
        if (!manifestRes.ok) throw new Error('Failed to fetch manifest');
        const manifestData = await manifestRes.json();
        
        const latest = manifestData.latest;
        
        const planRes = await fetch(`https://plans.infinitepackages.com/plans/subscriptions/${latest}/allplans.json`);
        if (!planRes.ok) throw new Error('Failed to fetch plans');
        
        const planData = await planRes.json();
        if (active) {
          setPlan(planData['PLAN_1999_1000'] as PlanData | undefined || null);
        }
      } catch (e) {
        console.error("Failed to fetch client-side pricing for section:", e);
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }
    loadPricing();
    return () => {
      active = false;
    };
  }, []);

  if (loading) {
    return (
      <section className="py-12 bg-white relative">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 relative z-20 flex flex-col items-center justify-center min-h-[300px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0E3B34]"></div>
          <p className="mt-4 text-gray-500 font-medium">Loading pricing details...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-white relative">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sans font-black text-gray-900 mb-6 tracking-tight">
            One Price. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E3B34] to-[#E0A23B]">Infinite Possibilities.</span>
          </h2>
          <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
            We stripped away the complexity. Get complete access to all global destinations and premium tools under one simple plan.
          </p>
        </div>

        {!plan ? (
           <div className="bg-white rounded-[2rem] p-16 shadow-[0_20px_50px_-12px_rgba(0,140,255,0.1)] border border-gray-100 flex flex-col items-center justify-center text-center">
             <h3 className="text-2xl font-black text-gray-900 mb-2">Pricing Currently Unavailable</h3>
             <p className="text-gray-500 font-medium mb-6">We're updating our subscription engine. Please check back shortly.</p>
           </div>
        ) : (
           <PricingDisplay plan={plan} />
        )}

      </div>
    </section>
  );
}


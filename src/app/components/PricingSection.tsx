import React from 'react';
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

async function getPricing() {
  try {
    const manifestRes = await fetch('https://plans.infinitepackages.com/plans/manifest.json', { 
        next: { revalidate: 3600 } 
    });
    if (!manifestRes.ok) return null;
    const manifestData = await manifestRes.json();
    
    const latest = manifestData.latest;
    
    const planRes = await fetch(`https://plans.infinitepackages.com/plans/subscriptions/${latest}/allplans.json`, {
        next: { revalidate: 3600 }
    });
    if (!planRes.ok) return null;
    
    const planData = await planRes.json();
    return planData['PLAN_1999_1000'] as PlanData | undefined;
  } catch (e) {
    console.error("Failed to fetch server-side pricing for section:", e);
    return null;
  }
}

export default async function PricingSection() {
  const plan = await getPricing();

  return (
    <section className="py-24 bg-white relative">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sans font-black text-gray-900 mb-6 tracking-tight">
            One Price. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008cff] to-[#00cefc]">Infinite Possibilities.</span>
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

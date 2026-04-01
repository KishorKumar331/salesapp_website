import { Sparkles } from 'lucide-react';
import Footer from '../components/Footer';
import PricingDisplay from '../components/PricingDisplay';

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
        next: { revalidate: 3600 } // Cache for 1 hour to prevent constant refetching
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
    console.error("Failed to fetch server-side pricing:", e);
    return null;
  }
}

export default async function PricingPage() {
  const plan = await getPricing();

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f7f9] selection:bg-[#008cff]/20 pt-16">
      
      {/* Navbar Placeholder if not injected by layout */}
      
      <section className="relative pt-20 pb-32 bg-[#041422] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] opacity-30 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#008cff] to-[#00cefc] rounded-full blur-[150px] mix-blend-screen mix-blend-lighten animate-pulse duration-3000"></div>
          <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-gradient-to-tr from-[#d12a2f] to-[#e53935] rounded-full blur-[150px] mix-blend-screen opacity-60"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center pt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <Sparkles className="w-4 h-4 text-[#00cefc]" />
            <span className="text-blue-100 text-sm font-semibold tracking-wide uppercase">All-in-one platform</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-sans font-black text-white mb-6 tracking-tight drop-shadow-xl">
            Single Pricing, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008cff] to-[#00cefc]">Infinite Value</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100/80 font-medium max-w-2xl mx-auto leading-relaxed mb-12">
            No limits or boundaries. Access our entire suite of features and all global destinations under one simple subscription.
          </p>
        </div>
      </section>

      <section className="relative z-20 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 -mt-24 pb-32 w-full">
        {!plan ? (
           <div className="bg-white rounded-[2rem] p-16 shadow-2xl border border-gray-100 flex flex-col items-center justify-center text-center">
             <h3 className="text-2xl font-black text-gray-900 mb-2">Pricing Currently Unavailable</h3>
             <p className="text-gray-500 font-medium mb-6">We're updating our subscription engine. Please check back shortly.</p>
           </div>
        ) : (
           <PricingDisplay plan={plan} />
        )}
      </section>

      <Footer />
    </div>
  );
}

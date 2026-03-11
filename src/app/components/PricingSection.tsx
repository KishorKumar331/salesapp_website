"use client";

import { ChevronDown, Check } from 'lucide-react';
import { useState } from 'react';

const domesticDestinations = [
  'Kerala',
  'Andaman',
  'Rajasthan',
  'Northeast',
  'Kashmir',
  'Himachal',
  'Ladakh',
  'Goa'
];

const internationalDestinations = [
  'Europe',
  'Georgia',
  'Maldives',
  'Srilanka',
  'Mauritius',
  'Dubai',
  'Thailand',
  'Japan',
  'Bali',
  'Turkey',
  'Malaysia',
  'Vietnam',
  'Singapore'
];

export default function PricingSection() {
  const [showMoreDomestic, setShowMoreDomestic] = useState(false);
  const [showMoreIntl, setShowMoreIntl] = useState(false);
  const [showMoreCombined, setShowMoreCombined] = useState(false);

  return (
    <section className="bg-[#f4f4f4] py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-sans font-black text-gray-900 mb-4 tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-[#008cff] to-[#00cefc] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium mb-6">
            Choose the plan that fits your business needs. No hidden charges.
          </p>
          <div className="bg-white border border-[#008cff]/20 shadow-[0_4px_20px_-4px_rgba(0,140,255,0.08)] rounded-2xl p-6 text-left max-w-3xl mx-auto">
             <h3 className="text-[#041422] text-lg font-bold mb-3 flex items-center justify-center gap-2">
               <span className="text-[#00cfa0]">📱</span> Manage Your Business Anywhere
             </h3>
             <p className="text-gray-600 text-center text-sm md:text-base leading-relaxed">
               All plans include full access to our powerful <strong>Web Dashboard</strong> and our dedicated <strong>Android App</strong>. 
               Whether you prefer working from your desk or on the go, you have complete control. Both platforms provide the exact same tools to manage bookings, create quotes, and run your business flawlessly.
             </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Domestic Plan */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-[0_8px_30px_-4px_rgba(0,140,255,0.15)] transition-all duration-300 flex flex-col transform hover:-translate-y-1">
            <div className="bg-white border-b border-gray-100 px-8 py-6">
              <h3 className="text-2xl font-black text-gray-900">Domestic</h3>
              <p className="text-gray-500 text-sm mt-1 font-medium">Perfect for local travel business</p>
            </div>
            <div className="p-8 flex-1 flex flex-col bg-gray-50/50">
              <div className="mb-6 flex items-baseline">
                <span className="text-5xl font-black text-[#008cff]">₹999</span>
                <span className="text-gray-500 ml-2 font-bold">/mo</span>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  '600+ Quotations',
                  '24/7 Support',
                  'Mail Service',
                  'PDF Design Templates',
                  '1 Year Updates'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-[#00ab6b] mr-3 flex-shrink-0 mt-0.5" strokeWidth={4} />
                    <span className="text-[#041422] font-black">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-gray-200 pt-6 mb-8">
                <h4 className="text-xs font-black text-gray-500 uppercase tracking-wider mb-4">Destinations</h4>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {domesticDestinations.slice(0, showMoreDomestic ? domesticDestinations.length : 4).map((destination, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600 font-medium">
                      <span className="w-1.5 h-1.5 bg-[#008cff] rounded-full mr-2"></span>
                      {destination}
                    </div>
                  ))}
                </div>
                {!showMoreDomestic && domesticDestinations.length > 4 && (
                  <button
                    onClick={() => setShowMoreDomestic(true)}
                    className="flex items-center text-[#008cff] hover:text-[#0052cc] transition text-sm font-bold"
                  >
                    See More
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </button>
                )}
                {showMoreDomestic && (
                  <button
                    onClick={() => setShowMoreDomestic(false)}
                    className="flex items-center text-[#008cff] hover:text-[#0052cc] transition text-sm font-bold"
                  >
                    Show Less
                    <ChevronDown className="w-4 h-4 ml-1 rotate-180" />
                  </button>
                )}
              </div>

              <button 
                onClick={() => window.location.href='https://dashboard.infinitepackages.com/auth'}
                className="w-full bg-white border-2 border-[#008cff] text-[#008cff] hover:bg-blue-50 py-3.5 rounded-lg font-bold text-lg transition-colors mt-auto shadow-sm"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* International Plan */}
          <div className="bg-white border-2 border-[#008cff] rounded-2xl overflow-hidden transform md:-translate-y-4 shadow-[0_20px_40px_-15px_rgba(0,140,255,0.3)] flex flex-col relative z-20">
            <div className="bg-gradient-to-r from-[#008cff] to-[#0052cc] px-8 py-6 relative">
              <div className="absolute top-0 right-0">
                <div className="bg-[#d12a2f] text-white px-4 py-1.5 rounded-bl-xl text-xs font-black tracking-wider uppercase shadow-md">
                  POPULAR
                </div>
              </div>
              <h3 className="text-2xl font-black text-white mt-2">International</h3>
              <p className="text-blue-100 text-sm mt-1 font-medium">For global travel entrepreneurs</p>
            </div>
            <div className="p-8 flex-1 flex flex-col bg-white">
              <div className="mb-6 flex items-baseline">
                <span className="text-5xl font-black text-[#041422]">₹1,499</span>
                <span className="text-gray-500 ml-2 font-bold">/mo</span>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  'Unlimited Quotations',
                  '24/7 Priority Support',
                  'Mail & SMS Service',
                  'Premium PDF Templates',
                  'Lifetime Updates'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-[#00ab6b] mr-3 flex-shrink-0 mt-0.5" strokeWidth={4} />
                    <span className="text-[#041422] font-black">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-gray-200 pt-6 mb-8">
                <h4 className="text-xs font-black text-gray-500 uppercase tracking-wider mb-4">Destinations</h4>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {internationalDestinations.slice(0, showMoreIntl ? internationalDestinations.length : 4).map((destination, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600 font-medium">
                      <span className="w-1.5 h-1.5 bg-[#d12a2f] rounded-full mr-2"></span>
                      {destination}
                    </div>
                  ))}
                </div>
                {!showMoreIntl && internationalDestinations.length > 4 && (
                  <button
                    onClick={() => setShowMoreIntl(true)}
                    className="flex items-center text-[#008cff] hover:text-[#0052cc] transition text-sm font-bold"
                  >
                    See More
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </button>
                )}
                {showMoreIntl && (
                  <button
                    onClick={() => setShowMoreIntl(false)}
                    className="flex items-center text-[#008cff] hover:text-[#0052cc] transition text-sm font-bold"
                  >
                    Show Less
                    <ChevronDown className="w-4 h-4 ml-1 rotate-180" />
                  </button>
                )}
              </div>

              <button 
                onClick={() => window.location.href='https://dashboard.infinitepackages.com/auth'}
                className="w-full bg-gradient-to-r from-[#d12a2f] to-[#e53935] hover:from-[#b92529] hover:to-[#c62828] text-white py-3.5 rounded-lg font-black text-lg transition-all mt-auto shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get Started
              </button>
            </div>
          </div>          {/* Domestic + International Plan */}
          <div className="bg-[#f8fafd] border border-gray-200 rounded-2xl overflow-hidden hover:shadow-[0_10px_40px_-4px_rgba(0,140,255,0.15)] transition-all duration-300 flex flex-col transform hover:-translate-y-1">
            <div className="bg-white border-b border-gray-100 px-8 py-6">
              <h3 className="text-2xl font-black text-[#0a192f]">Combined</h3>
              <p className="text-gray-500 text-sm mt-1 font-medium">Complete global coverage</p>
            </div>
            <div className="p-8 flex-1 flex flex-col bg-[#f8fafd]">
              <div className="mb-6 flex items-baseline">
                <span className="text-5xl font-black text-[#041422]">₹1,999</span>
                <span className="text-gray-500 ml-2 font-bold">/mo</span>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  'All Destinations Included',
                  '24/7 Premium Support',
                  'Mail, SMS & WhatsApp',
                  'Custom Branding',
                  'API Access'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-[#00ab6b] mr-3 flex-shrink-0 mt-0.5" strokeWidth={4} />
                    <span className="text-[#041422] font-black">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-gray-200 pt-6 mb-8">
                <h4 className="text-xs font-black text-gray-500 uppercase tracking-wider mb-4">All Destinations</h4>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[...domesticDestinations, ...internationalDestinations].slice(0, showMoreCombined ? undefined : 4).map((destination, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600 font-medium">
                      <span className="w-1.5 h-1.5 bg-[#4b5563] rounded-full mr-2"></span>
                      {destination}
                    </div>
                  ))}
                </div>
                {!showMoreCombined && (
                  <button
                    onClick={() => setShowMoreCombined(true)}
                    className="flex items-center text-[#008cff] hover:text-[#0052cc] transition text-sm font-bold"
                  >
                    See More
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </button>
                )}
                {showMoreCombined && (
                  <button
                    onClick={() => setShowMoreCombined(false)}
                    className="flex items-center text-[#008cff] hover:text-[#0052cc] transition text-sm font-bold"
                  >
                    Show Less
                    <ChevronDown className="w-4 h-4 ml-1 rotate-180" />
                  </button>
                )}
              </div>

              <button className="w-full bg-[#041422] hover:bg-[#062038] text-white py-3.5 rounded-lg font-bold text-lg transition-colors mt-auto shadow-md">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { ChevronDown, Check } from 'lucide-react';
import { useState } from 'react';

const domesticDestinations = [
  'India',
  'Nepal',
  'Bhutan',
  'Sri Lanka',
  'Bangladesh',
  'Pakistan',
  'Maldives',
  'Afghanistan',
];

const internationalDestinations = [
  'USA',
  'UK',
  'Canada',
  'Australia',
  'France',
  'Germany',
  'Japan',
  'Thailand',
  'Singapore',
  'Dubai',
  'New Zealand',
  'Spain',
];

export default function PricingSection() {
  const [showMoreDomestic, setShowMoreDomestic] = useState(false);
  const [showMoreIntl, setShowMoreIntl] = useState(false);
  const [showMoreCombined, setShowMoreCombined] = useState(false);

  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <div className="w-16 h-1 bg-orange-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose the plan that fits your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Domestic Plan */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-lg overflow-hidden hover:border-orange-600/50 transition flex flex-col">
            <div className="bg-gradient-to-r from-orange-600 to-orange-700 px-8 py-6">
              <h3 className="text-2xl font-bold">Domestic</h3>
              <p className="text-orange-100 text-sm mt-2">Perfect for local travel business</p>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="mb-6">
                <span className="text-5xl font-bold">₹99</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">600+ Quotations</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">24/7 Support</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Mail Service</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">PDF Design Templates</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">1 Year Updates</span>
                </li>
              </ul>

              <div className="border-t border-gray-700 pt-6 mb-6">
                <h4 className="text-sm font-semibold text-gray-300 mb-3">Destinations</h4>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {domesticDestinations.slice(0, showMoreDomestic ? domesticDestinations.length : 3).map((destination, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-400">
                      <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></span>
                      {destination}
                    </div>
                  ))}
                </div>
                {!showMoreDomestic && domesticDestinations.length > 3 && (
                  <button
                    onClick={() => setShowMoreDomestic(true)}
                    className="flex items-center text-orange-600 hover:text-orange-500 transition text-sm font-semibold"
                  >
                    See More
                    <ChevronDown className="w-3 h-3 ml-1" />
                  </button>
                )}
                {showMoreDomestic && (
                  <button
                    onClick={() => setShowMoreDomestic(false)}
                    className="flex items-center text-orange-600 hover:text-orange-500 transition text-sm font-semibold"
                  >
                    Show Less
                    <ChevronDown className="w-3 h-3 ml-1 rotate-180" />
                  </button>
                )}
              </div>

              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition mt-auto">
                Get Started
              </button>
            </div>
          </div>

          {/* International Plan */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 border-2 border-orange-600 rounded-lg overflow-hidden transform md:scale-105 shadow-2xl flex flex-col">
            <div className="bg-gradient-to-r from-orange-600 to-orange-700 px-8 py-6 relative">
              <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold">International</h3>
              <p className="text-orange-100 text-sm mt-2">For global travel entrepreneurs</p>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="mb-6">
                <span className="text-5xl font-bold">₹1,149</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">600+ Quotations</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">24/7 Priority Support</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Mail Service</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Premium PDF Templates</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">1 Year Updates</span>
                </li>
              </ul>

              <div className="border-t border-gray-700 pt-6 mb-6">
                <h4 className="text-sm font-semibold text-gray-300 mb-3">Destinations</h4>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {internationalDestinations.slice(0, showMoreIntl ? internationalDestinations.length : 3).map((destination, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-400">
                      <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></span>
                      {destination}
                    </div>
                  ))}
                </div>
                {!showMoreIntl && internationalDestinations.length > 3 && (
                  <button
                    onClick={() => setShowMoreIntl(true)}
                    className="flex items-center text-orange-600 hover:text-orange-500 transition text-sm font-semibold"
                  >
                    See More
                    <ChevronDown className="w-3 h-3 ml-1" />
                  </button>
                )}
                {showMoreIntl && (
                  <button
                    onClick={() => setShowMoreIntl(false)}
                    className="flex items-center text-orange-600 hover:text-orange-500 transition text-sm font-semibold"
                  >
                    Show Less
                    <ChevronDown className="w-3 h-3 ml-1 rotate-180" />
                  </button>
                )}
              </div>

              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition mt-auto">
                Get Started
              </button>
            </div>
          </div>

          {/* Domestic + International Plan */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-lg overflow-hidden hover:border-orange-600/50 transition flex flex-col">
            <div className="bg-gradient-to-r from-orange-600 to-orange-700 px-8 py-6">
              <h3 className="text-2xl font-bold">Domestic + International</h3>
              <p className="text-orange-100 text-sm mt-2">Complete global coverage</p>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="mb-6">
                <span className="text-5xl font-bold">₹1,399</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">600+ Quotations</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">24/7 Premium Support</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Mail Service</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">All PDF Templates</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">1 Year Updates</span>
                </li>
              </ul>

              <div className="border-t border-gray-700 pt-6 mb-6">
                <h4 className="text-sm font-semibold text-gray-300 mb-3">Destinations</h4>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {domesticDestinations.slice(0, showMoreCombined ? domesticDestinations.length + internationalDestinations.length : 3).map((destination, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-400">
                      <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></span>
                      {destination}
                    </div>
                  ))}
                  {showMoreCombined && internationalDestinations.slice(0, internationalDestinations.length).map((destination, index) => (
                    <div key={`intl-${index}`} className="flex items-center text-sm text-gray-400">
                      <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></span>
                      {destination}
                    </div>
                  ))}
                </div>
                {!showMoreCombined && (domesticDestinations.length + internationalDestinations.length) > 3 && (
                  <button
                    onClick={() => setShowMoreCombined(true)}
                    className="flex items-center text-orange-600 hover:text-orange-500 transition text-sm font-semibold"
                  >
                    See More
                    <ChevronDown className="w-3 h-3 ml-1" />
                  </button>
                )}
                {showMoreCombined && (
                  <button
                    onClick={() => setShowMoreCombined(false)}
                    className="flex items-center text-orange-600 hover:text-orange-500 transition text-sm font-semibold"
                  >
                    Show Less
                    <ChevronDown className="w-3 h-3 ml-1 rotate-180" />
                  </button>
                )}
              </div>

              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition mt-auto">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

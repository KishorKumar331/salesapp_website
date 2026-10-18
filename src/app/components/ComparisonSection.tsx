'use client';

import { Check, X, Shield, Sparkles, ArrowRight, Zap, Flame } from 'lucide-react';

export default function ComparisonSection() {
  const comparisonRows = [
    {
      feature: "Time to First Quote",
      quickQuote: "Under 60 seconds",
      salesforce: "Weeks (Requires admin config)",
      traveljoy: "15 to 30 minutes",
    },
    {
      feature: "Travel Itinerary PDF Builder",
      quickQuote: "Built-in day-wise PDF engine",
      salesforce: "Requires 3rd-party add-ons",
      traveljoy: "Basic proposal builder",
    },
    {
      feature: "Setup Cost & Implementation",
      quickQuote: "Free / 0 setup cost",
      salesforce: "$5,000+ consulting fees",
      traveljoy: "Monthly subscription fee",
    },
    {
      feature: "Supplier Margin & Cost Locks",
      quickQuote: "Automatic margin calculations",
      salesforce: "Complex custom apex formula",
      traveljoy: "Manual spreadsheet calculations",
    },
    {
      feature: "WhatsApp & Mobile Sharing",
      quickQuote: "1-Click direct WhatsApp share",
      salesforce: "Complex webhook integration",
      traveljoy: "Email only by default",
    },
    {
      feature: "Group & Multi-Pax Manifests",
      quickQuote: "Split payments & rooming lists",
      salesforce: "Heavy custom object setup",
      traveljoy: "Limited group pax tools",
    },
    {
      feature: "Learning Curve",
      quickQuote: "Zero training needed",
      salesforce: "Steep (6-month adoption)",
      traveljoy: "Moderate",
    }
  ];

  return (
    <section id="comparison" className="py-20 bg-white border-b border-gray-100 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0E3B34]/10 text-[#0E3B34] px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-4">
            Industry Evaluation & Alternatives
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black text-gray-900 mb-6 tracking-tight">
            Why Modern Agencies Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E3B34] to-[#E0A23B]">QuickQuote</span> Over Generic CRMs
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
            Wondering <strong className="text-gray-900">what software do travel agents use</strong> today? Traditional platforms featured on famous 10 best CRM software lists are often expensive and overloaded with generic corporate settings. QuickQuote focuses strictly on travel desk essentials: multi-city itineraries, supplier cost management, automated client follow-ups, and one-click quote-to-booking conversion.
          </p>
        </div>

        {/* 2 Key Comparison Value Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-14">
          
          <div className="bg-[#fcfdfe] rounded-3xl p-8 border border-gray-200/70 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center font-black mb-5">
              <Zap className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full mb-3 inline-block">
              Salesforce CRM for Travel Agency Alternative
            </span>
            <h3 className="text-2xl font-black text-gray-900 mb-3 tracking-tight">
              No Enterprise Bloat
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium">
              Skip the 6-month setup, expensive consulting retainers, and endless dropdowns of tools like Salesforce CRM for travel agency use. QuickQuote is ready in 30 seconds with no developer needed.
            </p>
          </div>

          <div className="bg-[#fcfdfe] rounded-3xl p-8 border border-gray-200/70 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black mb-5">
              <Sparkles className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0E3B34] bg-emerald-50 px-3 py-1 rounded-full mb-3 inline-block">
              Vacation CRM vs TravelJoy & qtravel software
            </span>
            <h3 className="text-2xl font-black text-gray-900 mb-3 tracking-tight">
              All-in-One Sales & Quoting
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium">
              Evaluating Vacation CRM vs TravelJoy or qtravel software? Get the client lead pipeline of a modern travel CRM combined with instant day-wise itinerary generation—without paying for multiple separate subscriptions.
            </p>
          </div>

        </div>

        {/* Side-by-side Table Comparison */}
        <div className="overflow-x-auto rounded-3xl border border-gray-200 shadow-sm bg-white mb-10">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50/70">
                <th className="py-5 px-6 text-sm font-black text-gray-900 uppercase tracking-wider">Feature & Capabilities</th>
                <th className="py-5 px-6 text-sm font-black text-[#0E3B34] bg-[#0E3B34]/5 uppercase tracking-wider border-x border-[#0E3B34]/10">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#E0A23B] font-black">★</span> QuickQuote
                  </div>
                </th>
                <th className="py-5 px-6 text-sm font-bold text-gray-500 uppercase tracking-wider">Salesforce CRM</th>
                <th className="py-5 px-6 text-sm font-bold text-gray-500 uppercase tracking-wider">TravelJoy / Vacation CRM</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-6 font-bold text-gray-900">{row.feature}</td>
                  <td className="py-4 px-6 font-black text-[#0E3B34] bg-[#0E3B34]/5 border-x border-[#0E3B34]/10 flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#00ab6b] flex-shrink-0" strokeWidth={3} />
                    <span>{row.quickQuote}</span>
                  </td>
                  <td className="py-4 px-6 text-gray-500 font-medium">{row.salesforce}</td>
                  <td className="py-4 px-6 text-gray-500 font-medium">{row.traveljoy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center">
          <a
            href="https://dashboard.infinitepackages.com"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0E3B34] to-[#1C6C5E] hover:from-[#1C6C5E] hover:to-[#0E3B34] text-white px-8 py-4 rounded-full font-black text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
          >
            Switch to QuickQuote Free <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}

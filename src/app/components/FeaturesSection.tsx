'use client';

import { FileText, Clock, CreditCard, Share2, Sparkles, LayoutDashboard } from 'lucide-react';

const featuresJSON = [
  {
    icon: FileText,
    title: "Multi-Destination Itineraries",
    description: "Generate beautiful, high-converting multi-destination itineraries that look like they were built by a 20-person agency design team.",
    color: "text-[#0E3B34]",
    bg: "bg-[#0E3B34]/10"
  },
  {
    icon: Clock,
    title: "Less than 1-Minute Quoting",
    description: "Build and price complete trip packages with flights, hotels, and ground transfers directly from your mobile phone in under 60 seconds.",
    color: "text-[#E0A23B]",
    bg: "bg-[#E0A23B]/10"
  },
  {
    icon: CreditCard,
    title: "Secure Payment Tracker",
    description: "Track advance deposits, partial instalments, and pending dues with admin-level confirmation locks so you never leak revenue.",
    color: "text-[#00ab6b]",
    bg: "bg-[#00ab6b]/10"
  },
  {
    icon: Sparkles,
    title: "Instant White-Label Branding",
    description: "Put your own logo, contact numbers, and terms on every proposal. Clients associate top-tier trip quality directly with your brand.",
    color: "text-purple-600",
    bg: "bg-purple-50"
  },
  {
    icon: Share2,
    title: "WhatsApp 1-Click Sharing",
    description: "Share sleek PDF proposals and direct payment links straight to your client's WhatsApp while on a call or during your lunch break.",
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    icon: LayoutDashboard,
    title: "Built-in Lead & Pipeline CRM",
    description: "Manage client leads, track quote statuses, manage team sub-agents, and issue tax-compliant invoices in one unified workspace.",
    color: "text-amber-600",
    bg: "bg-amber-50"
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="pt-10 pb-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0E3B34]/10 text-[#0E3B34] px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-4">
            Built For Growth
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black text-gray-900 mb-6 tracking-tight">
            Everything You Need, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E3B34] to-[#E0A23B]">Nothing You Don't</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
            We stripped out complex legacy enterprise software bloat to give independent travel advisors the fastest way to quote, sell, and build company equity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresJSON.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={idx} 
                className="group p-8 rounded-[2.2rem] border border-gray-100 bg-white hover:bg-[#f8fafd] transition-all duration-300 hover:-translate-y-1.5 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(14,59,52,0.12)] flex flex-col justify-between"
              >
                <div>
                  <div className={`w-14 h-14 ${feature.bg} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-3 tracking-tight">{feature.title}</h3>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed mb-4">
                    {feature.description}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-gray-100/60 flex items-center text-xs font-bold text-[#0E3B34] group-hover:text-[#E0A23B] transition-colors">
                  Production Ready Feature &rarr;
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

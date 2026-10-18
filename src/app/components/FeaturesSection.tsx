'use client';

import { Inbox, Briefcase, BellRing, FileText, ShieldCheck, Smartphone } from 'lucide-react';

const featuresJSON = [
  {
    icon: Inbox,
    title: "Unified Inquiry Inbox",
    subtitle: "Lead Capture to Booking",
    description: "Capture inquiries from WhatsApp, email, and website forms into one clean pipeline. Move leads seamlessly from inquiry to confirmed booking.",
    tag: "crm travel agent",
    color: "text-[#0E3B34]",
    bg: "bg-[#0E3B34]/10"
  },
  {
    icon: Briefcase,
    title: "B2B & B2C Workflows",
    subtitle: "Retail & Corporate MICE",
    description: "Manage retail holiday travelers and corporate MICE or DMC partner accounts without clutter. Designed specifically for B2B sales travel & B2C travel sales.",
    tag: "crm travel agents",
    color: "text-[#E0A23B]",
    bg: "bg-[#E0A23B]/10"
  },
  {
    icon: BellRing,
    title: "Automated Sales Follow-ups",
    subtitle: "Scheduled Reminders",
    description: "Never lose a booking to silence. Track client review times and send scheduled reminders before customized trip quotes and flight holds expire.",
    tag: "crm travel system",
    color: "text-[#00ab6b]",
    bg: "bg-[#00ab6b]/10"
  },
  {
    icon: FileText,
    title: "Instant PDF Quotations",
    subtitle: "Fast Itinerary Generation",
    description: "Generate branded day-wise travel itineraries and invoices with margin controls in seconds. Share client-ready proposals via 1-click WhatsApp.",
    tag: "crm software for travel agents",
    color: "text-purple-600",
    bg: "bg-purple-50"
  },
  {
    icon: ShieldCheck,
    title: "Supplier Cost & Margin Control",
    subtitle: "Zero Profit Leakage",
    description: "Itemize hotels, flights, and activities with admin-level confirmation locks. Protect profit margins across all customized holiday packages.",
    tag: "travel crm systems",
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    icon: Smartphone,
    title: "Mobile-Ready Cloud Platform",
    subtitle: "Online Travel Agent Software",
    description: "Access your client pipeline, generate quotes, and track advance deposits directly from your smartphone or laptop on the go.",
    tag: "online travel agent software",
    color: "text-amber-600",
    bg: "bg-amber-50"
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="pt-14 pb-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0E3B34]/10 text-[#0E3B34] px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-4">
            Built Specifically for Travel Workflows
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black text-gray-900 mb-6 tracking-tight">
            The Complete CRM Travel System for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E3B34] to-[#E0A23B]">Growing Agencies</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
            QuickQuote combines high-speed travel itinerary generation with client lead management. Built for travel agents, DMCs, and boutique tour operators handling both retail and B2B corporate sales.
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
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 ${feature.bg} rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                      <Icon className={`w-6 h-6 ${feature.color}`} strokeWidth={2.5} />
                    </div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider bg-gray-50 px-2.5 py-1 rounded-md border border-gray-100">
                      {feature.subtitle}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-black text-gray-900 mb-2.5 tracking-tight">{feature.title}</h3>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed mb-4">
                    {feature.description}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-gray-100/60 flex items-center justify-between text-xs font-bold text-[#0E3B34] group-hover:text-[#E0A23B] transition-colors">
                  <span>Explore Workflow &rarr;</span>
                  <span className="text-[10px] text-gray-400 font-medium">#{feature.tag.replace(/\s+/g, '-')}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

'use client';

import { FileText, Clock, CreditCard, LayoutTemplate, Users, Send } from 'lucide-react';

const featuresJSON = [
  {
    icon: FileText,
    title: "Professional PDF Generation",
    description: "Generate beautiful, branded multi-destination itineraries that make you look like a top-tier agency.",
    color: "text-[#008cff]",
    bg: "bg-[#008cff]/10"
  },
  {
    icon: Clock,
    title: "3-Minute Quoting Engine",
    description: "Build a complete package with flights, hotels, and land costs simply using your mobile phone during a lunch break.",
    color: "text-[#d12a2f]",
    bg: "bg-[#d12a2f]/10"
  },
  {
    icon: CreditCard,
    title: "Integrated Payment Tracker",
    description: "Never lose track of an instalment. See exactly what's paid, pending, and overdue at a quick glance.",
    color: "text-[#00ab6b]",
    bg: "bg-[#00ab6b]/10"
  },
  {
    icon: LayoutTemplate,
    title: "Pre-built Route Templates",
    description: "Access high-converting templates for Goa, Kerala, Maldives, and more with pre-filled margins and hotel logic.",
    color: "text-[#ffbd2e]",
    bg: "bg-[#ffbd2e]/10"
  },
  {
    icon: Users,
    title: "Built-in Light CRM",
    description: "Keep all your leads, contacts, and historical quotes organized without needing a confusing 3rd party tool.",
    color: "text-[#8b5cf6]",
    bg: "bg-[#8b5cf6]/10"
  },
  {
    icon: Send,
    title: "Auto-Email & WhatsApp",
    description: "Send out your PDF quotes automatically to client emails or generate instant WhatsApp sharing links.",
    color: "text-[#ec4899]",
    bg: "bg-[#ec4899]/10"
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sans font-black text-gray-900 mb-6 tracking-tight">
            Everything You Need, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008cff] to-[#00cefc]">Nothing You Don't</span>
          </h2>
          <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
            We stripped out the complex enterprise bloat to give you the fastest, most effective way to sell travel online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresJSON.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={idx} 
                className="group p-8 rounded-[2rem] border border-gray-100 bg-white hover:bg-[#f8fafd] transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_30px_-10px_rgba(0,140,255,0.1)]"
              >
                <div className={`w-14 h-14 ${feature.bg} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  <Icon className={`w-6 h-6 ${feature.color}`} strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed mb-6">
                  {feature.description}
                </p>
                {/* Placeholder for screenshot */}
                <div className="w-full h-32 bg-gray-100 rounded-xl overflow-hidden relative border border-gray-200">
                   <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-400 uppercase tracking-widest">
                      Screenshot
                   </div>
                   {/* In real deployment, replace with <img src={feature.screenshot} /> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

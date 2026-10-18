'use client';

import { Star, Quote, ShieldCheck } from 'lucide-react';

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Founder, Wanderlust Holidays",
    content: "QuickQuote cut our quotation turnaround from 3 hours to under 2 minutes. Our lead-to-booking conversion rate jumped by 42% in our first month alone.",
    highlight: "90% time saved per quote",
    initials: "RS",
    color: "from-[#0E3B34] to-[#1C6C5E]"
  },
  {
    name: "Priya Desai",
    role: "Independent Luxury Travel Advisor",
    content: "The automated reminders ensure no inquiry goes cold. Delivering branded day-wise PDF quotes within 60 seconds helped me double my booking closures.",
    highlight: "+45% booking conversion",
    initials: "PD",
    color: "from-[#E0A23B] to-[#F1B855]"
  },
  {
    name: "Vikram Reddy",
    role: "Director, Global Horizons DMC",
    content: "Hands down the best CRM for the travel industry. We manage both retail packages and B2B MICE groups seamlessly with zero spreadsheet errors.",
    highlight: "3x daily quotation volume",
    initials: "VR",
    color: "from-[#041422] to-[#0a233b]"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="py-20 bg-[#f8fafd] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0E3B34]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E0A23B]/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#0E3B34]/5 border border-[#0E3B34]/15 text-[#0E3B34] px-4 py-1.5 rounded-full text-xs font-black tracking-wide mb-5 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#E0A23B]" />
            Travel Agent CRM Reviews • Rated 4.9/5 by 500+ Advisors
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black text-gray-900 mb-4 tracking-tight">
            Trusted by Growing Travel Agencies & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E3B34] to-[#E0A23B]">Independent Advisors</span>
          </h2>
          <p className="text-gray-600 font-medium max-w-2xl mx-auto text-base sm:text-lg">
            See how travel professionals use the best CRM in the travel industry to slash quotation time and maximize lead-to-booking conversion rates.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[2.2rem] p-8 shadow-[0_10px_35px_-15px_rgba(0,0,0,0.06)] border border-gray-100 hover:-translate-y-2 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div className="absolute top-8 right-8 opacity-5 text-[#0E3B34] group-hover:opacity-10 transition-opacity">
                <Quote size={56} />
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#ffbd2e] fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#0E3B34] bg-[#0E3B34]/10 px-2.5 py-1 rounded-md">
                    {t.highlight}
                  </span>
                </div>
                
                <p className="text-gray-700 font-medium leading-relaxed text-sm sm:text-base mb-8 relative z-10">
                  "{t.content}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100/80">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-black shadow-md flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-gray-900 font-black text-sm tracking-wide">{t.name}</h4>
                  <p className="text-gray-500 text-xs font-semibold">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

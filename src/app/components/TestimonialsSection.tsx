'use client';

import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Former Agency Sales Executive, Now Solo Founders",
    content: "I was scared to leave my agency job because I didn't know how to create the actual PDFs. I used to just sell what was on the brochure. Infinite Packages made me look like I had a 10-person design team from day one. I closed my first Maldives package within my first week.",
    initials: "RS",
    color: "from-[#008cff] to-[#00cefc]"
  },
  {
    name: "Priya Desai",
    role: "Independent Travel Consultant",
    content: "I tried tracking payments in Excel but it was a nightmare with clients paying in 3 different instalments. The payment tracker alone is worth the ₹1,999. Now I just open my phone and see exactly who owes me what. The automated WhatsApp follow-ups changed my life.",
    initials: "PD",
    color: "from-[#d12a2f] to-[#e53935]"
  },
  {
    name: "Vikram Reddy",
    role: "Side-hustle Agent",
    content: "The best part is nobody knows I'm a solo agent. The quotes look so premium, my clients think I operate a massive office. I create quotes on my android phone during my lunch break, and by evening I'm collecting advance payments.",
    initials: "VR",
    color: "from-[#041422] to-[#0a233b]"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#f8fafd] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#008cff]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d12a2f]/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-bold tracking-wide mb-6 shadow-sm">
            <Star className="w-4 h-4 text-[#ffbd2e] fill-current" />
            Loved by 500+ Solo Agents
          </div>
          <h2 className="text-4xl md:text-5xl font-sans font-black text-gray-900 mb-6 tracking-tight">
            Don't just take <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008cff] to-[#00cefc]">our word for it</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[2rem] p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 hover:-translate-y-2 transition-transform duration-300 relative group"
            >
              <div className="absolute top-8 right-8 opacity-5 text-[#008cff] group-hover:opacity-10 transition-opacity">
                <Quote size={64} />
              </div>
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#ffbd2e] fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 font-medium leading-relaxed mb-8 relative z-10">
                "{t.content}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-black shadow-md`}>
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold text-sm tracking-wide">{t.name}</h4>
                  <p className="text-gray-400 text-xs font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

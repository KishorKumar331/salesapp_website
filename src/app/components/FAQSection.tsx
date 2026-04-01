'use client';

import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';

const faqs = [
  {
    category: "Legal",
    question: "Do I need to register a company or have GST to start?",
    answer: "No. You can start using Infinite Packages today — no company registration, no GST, no paperwork needed. Many of our users start while still working at their current agency. When you're ready to formalise your business later, our dashboard includes a step-by-step guide covering GST registration, Udyam registration, and business bank account setup. But none of that is needed to send your first quote."
  },
  {
    category: "Privacy",
    question: "Can I use this while still working at my current agency?",
    answer: "Absolutely. Your dashboard is 100% private. There's no public listing, no website with your name, nothing your employer or colleagues can find. The Android app lets you quote clients in under 3 minutes — during a lunch break, after work hours, or on a weekend. Many of our users started exactly this way: testing the waters quietly before going full-time. Your data, your clients, your business — visible only to you."
  },
  {
    category: "Skill Gap",
    question: "I've never built a package from scratch. I only sold pre-made packages at my agency. Can I still use this?",
    answer: "Yes — that's exactly who this is built for. Our quoting engine walks you through every step: select destination, add hotel details, set inclusions and exclusions, add flights, set your margin. We also provide pre-loaded route templates for popular destinations — Goa 3N, Rajasthan 5N, Kerala 4N, Himachal 4N — with sample costings and suggested margin percentages. You don't need to be a package designer. You fill in the fields — we make it look professional."
  },
  {
    category: "Trust",
    question: "Will my clients trust a quote from a solo agent? I don't have a brand name or website.",
    answer: "Your clients never see \"solo agent.\" They see a beautifully formatted PDF with destination details, hotel information, day-wise itinerary, inclusions, exclusions, and professional payment terms. With our premium design marketplace (₹1,499 one-time), you can add your own logo, brand colours, and custom header. Your client receives a package that looks like it came from a 50-person agency. The quote IS your brand. You don't need a website — you need a quote that closes."
  },
  {
    category: "Technical",
    question: "What about flight bookings? Don't I need IATA or GDS access?",
    answer: "You don't need IATA certification to sell travel packages. For flights, use B2B portals like TBO, TripJack, or Via.com — they give any registered travel professional access to live flight inventory at agent rates. For hotels, connect with DMCs and B2B hotel suppliers for contract rates. Many successful independent agents operate this way without GDS access. Infinite Packages helps you build and quote the complete package — you book the individual components through your preferred suppliers."
  },
  {
    category: "Operations",
    question: "How does payment tracking work? My clients always pay in instalments.",
    answer: "We built the Payment Tracker specifically for this. When you convert a lead, set up the full payment schedule: advance amount, second instalment, final payment — each with a due date. The system shows you exactly what's been received, what's pending, and what's due today. Filter by date range to see how much money is coming in this week or this month. No more scrolling through WhatsApp chats trying to remember who paid ₹15,000 and who still owes ₹30,000."
  },
  {
    category: "Overwhelm",
    question: "I don't have a website or online presence. Don't I need one to get clients?",
    answer: "You don't need any of that to start. Your first 10 clients are already in your phone contacts — friends, family, colleagues, and their referrals. Open the app, build a quote, WhatsApp it to them. That's it. No website needed. No Instagram page needed. No Google listing needed. Infinite Packages + your phone + your existing contacts = you're ready to earn. Build the online presence later, once the money is already coming in."
  },
  {
    category: "Comparison",
    question: "How is this different from helloGTX, LeadSquared, or just using Excel?",
    answer: "Generic CRMs track leads. Infinite Packages creates quotes. That's the difference. Our quoting engine generates professional multi-destination package PDFs — with land, hotel, inclusions, exclusions, and flights — in under 3 minutes from your phone. Then it auto-emails the complete package to your client, tracks their payments in instalments, and lets you manage a growing team. Excel can't auto-email a professional PDF. LeadSquared doesn't build travel packages. helloGTX doesn't let you quote from your phone in 3 minutes. This is the one tool that does what a travel salesperson actually needs — quote, send, track, get paid."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white relative">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#f0f7ff] text-[#008cff] px-4 py-2 rounded-full text-sm font-bold tracking-wide mb-6">
            <MessageCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl md:text-5xl font-sans font-black text-gray-900 mb-6 tracking-tight">
            The Fears that Kill <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008cff] to-[#00cefc]">Your Sign-ups</span>
          </h2>
          <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
            Everything you need to know about starting your own independent travel agency right now.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'bg-white shadow-[0_10px_30px_rgba(0,140,255,0.08)] border-[#008cff]/20' : 'bg-gray-50 hover:bg-white hover:shadow-sm'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <div className="flex items-center gap-4 pr-4">
                  <span className="text-xs font-black text-gray-400 uppercase tracking-widest hidden sm:block w-20">
                    {faq.category}
                  </span>
                  <span className={`font-bold text-gray-900 leading-snug ${openIndex === index ? 'text-[#008cff]' : ''}`}>
                    {faq.question}
                  </span>
                </div>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                  openIndex === index ? 'border-[#008cff] bg-[#008cff] text-white' : 'border-gray-200 text-gray-400'
                }`}>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pt-2 sm:pl-[120px] text-gray-600 font-medium leading-relaxed text-sm lg:text-base">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

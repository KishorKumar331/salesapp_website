'use client';

import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';

const faqs = [
  {
    category: "Legal",
    question: "Do I need GST or company registration to start?",
    answer: "No. You don't need GST, company registration, or any paperwork to start and test your confidence. Build your business first, handle legalities later."
  },
  {
    category: "Setup",
    question: "Do I need a physical office?",
    answer: "No. It is just you and your mobile phone—that is your complete office. Operate from anywhere, anytime."
  },
  {
    category: "Technical",
    question: "Is the platform too technical to use?",
    answer: "No. Everything is designed in layman's terms. You only need 5 to 7 clicks to generate a professional 4-night package for any destination."
  },
  {
    category: "Destinations",
    question: "What if my destination is not in the dashboard?",
    answer: "We are on a mission to onboard all tourist destinations. If the system is missing something, write to us and we will deploy it on the very same day."
  },
  {
    category: "Website",
    question: "Only a dashboard is not enough, I need a website to impress my clients?",
    answer: "Do not worry. We reach out to every business for a website. We discuss, build, and deploy your custom website in a maximum of 2 days."
  },
  {
    category: "Team",
    question: "Can I manage my team in the dashboard?",
    answer: "Yes. Add your member, share them leads, and maintain full control over team members."
  },
  {
    category: "Privacy",
    question: "Will my employer or friends find out that I am using this platform?",
    answer: "No. No one can ever get this information unless you explicitly choose to share it yourself. Your account is 100% private."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 bg-white relative">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0E3B34]/10 text-[#0E3B34] px-4 py-2 rounded-full text-sm font-bold tracking-wide mb-6">
            <MessageCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl md:text-5xl font-sans font-black text-gray-900 mb-6 tracking-tight">
            The Fears that Kill <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E3B34] to-[#E0A23B]">Your Sign-ups</span>
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
                openIndex === index ? 'bg-white shadow-[0_10px_30px_rgba(14,59,52,0.08)] border-[#0E3B34]/20' : 'bg-gray-50 hover:bg-white hover:shadow-sm'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <div className="flex items-center gap-4 pr-4">
                  <span className="text-xs font-black text-gray-400 uppercase tracking-widest hidden sm:block w-28 flex-shrink-0">
                    {faq.category}
                  </span>
                  <span className={`font-bold text-gray-900 leading-snug ${openIndex === index ? 'text-[#0E3B34]' : ''}`}>
                    {faq.question}
                  </span>
                </div>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                  openIndex === index ? 'border-[#0E3B34] bg-[#0E3B34] text-white' : 'border-gray-200 text-gray-400'
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

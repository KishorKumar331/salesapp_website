'use client';

import { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';

const faqs = [
  {
    category: "CRM Basics",
    question: "What is CRM software and how does it work for travel agents?",
    answer: "A travel CRM organizes client inquiries, tracks quote revisions, and automates booking follow-ups. QuickQuote automates administrative work so travel planners can turn inquiries into confirmed bookings faster."
  },
  {
    category: "Transfers & Logistics",
    question: "Can QuickQuote handle transportation and group transfers?",
    answer: "Yes. QuickQuote lets you itemize flight legs, transfers, hotel vouchers, and sightseeing activities into one clear, itemized itinerary. It functions seamlessly as modern CRM software for transportation companies, ground handlers, and tour operators."
  },
  {
    category: "Legal & Setup",
    question: "Do I need GST or company registration to start using the platform?",
    answer: "No. You don't need immediate GST registration or legal incorporation to start testing your market demand. You can build your client base first and incorporate your business as you grow."
  },
  {
    category: "Office & Location",
    question: "Do I need a physical office location?",
    answer: "No. Your smartphone or laptop is your entire mobile office. Operate seamlessly from anywhere, anytime."
  },
  {
    category: "Ease of Use",
    question: "Is the quotation generator complex or technical to operate?",
    answer: "Not at all. The dashboard is designed for maximum speed. In just 5 to 7 simple clicks, you can construct a professional multi-night itinerary for any destination."
  },
  {
    category: "Destinations",
    question: "What if my target destination is not listed in the dashboard?",
    answer: "We continuously expand our inventory library. If you need a specialized destination or custom tour package layout, contact our support team and we can deploy custom destination templates rapidly."
  },
  {
    category: "Website & Branding",
    question: "Can I get a custom dedicated website for my agency?",
    answer: "Yes! In addition to white-labeled PDF quotes, we design and deploy bespoke custom web properties for travel agencies within 48 business hours."
  },
  {
    category: "Team Management",
    question: "Can I add sub-agents or sales staff members to my account?",
    answer: "Yes. You can invite team members, assign lead pipelines, and maintain full administrator security controls over profit margin visibility."
  },
  {
    category: "Privacy",
    question: "Is my usage and client data completely private?",
    answer: "Yes. Account data, customer contacts, and quotation pricing remain 100% private and protected with AES-256 encryption. We never share your data."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-white relative">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#0E3B34]/10 text-[#0E3B34] px-4 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide mb-5">
            <MessageCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black text-gray-900 mb-5 tracking-tight">
            Got Questions? <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E3B34] to-[#E0A23B]">We've Got Answers</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about starting and managing your independent travel agency business.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'bg-white shadow-[0_10px_30px_rgba(14,59,52,0.08)] border-[#0E3B34]/30' : 'bg-[#fcfdfe] hover:bg-white border-gray-100 hover:shadow-sm'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <div className="flex items-center gap-4 pr-4">
                  <span className="text-[10px] font-black text-[#0E3B34] uppercase tracking-widest bg-[#0E3B34]/10 px-2.5 py-1 rounded-md hidden sm:inline-block flex-shrink-0">
                    {faq.category}
                  </span>
                  <span className={`font-black text-gray-900 text-base sm:text-lg leading-snug ${openIndex === index ? 'text-[#0E3B34]' : ''}`}>
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
                <div className="px-6 pb-6 pt-1 sm:pl-[140px] text-gray-600 font-medium leading-relaxed text-sm sm:text-base border-t border-gray-50 mt-1">
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

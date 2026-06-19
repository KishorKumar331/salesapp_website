'use client';

import { useState } from 'react';
import { Check, Sparkles, MapPin, Globe, ChevronDown, X, Loader2 } from 'lucide-react';

interface PlanData {
  Name: string;
  PricePaise: number;
  Currency: string;
  Description: string;
  QuoteCredits: number;
  Destination: {
    Domestic: string[];
    International: string[];
  };
}

export default function PricingDisplay({ plan }: { plan: PlanData }) {
  const [showMoreDomestic, setShowMoreDomestic] = useState(false);
  const [showMoreIntl, setShowMoreIntl] = useState(false);

  // Modal State
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', expectations: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSupportSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch('/api/support', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      await new Promise((resolve) => setTimeout(resolve, 800));
      setIsSubmitted(true);
    } catch (err) {
      console.error('Failed to send support request', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setIsSupportModalOpen(false);
    setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', expectations: '' });
    }, 300);
  };

  return (
    <>
      {/* Horizontal Pricing Banner */}
      <div className="relative bg-[#041422] rounded-[2rem] p-8 sm:p-10 shadow-[0_20px_45px_rgba(14,59,52,0.25)] border border-[#0E3B34]/30 flex flex-col md:flex-row md:items-center md:justify-between gap-6 overflow-hidden transform transition-transform duration-500 hover:-translate-y-1">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#0E3B34]/15 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E0A23B]/10 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="relative z-10 text-left flex-1">
          <div className="inline-flex items-center gap-2 bg-[#E0A23B]/20 text-[#E0A23B] px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase mb-3 border border-[#E0A23B]/30 shadow-sm">
             <Sparkles className="w-3 h-3 text-[#E0A23B]" /> The Only Plan You Need
          </div>
          <h3 className="text-2xl font-black text-white uppercase tracking-wider mb-2">{plan.Name} Package</h3>
          <p className="text-sm text-blue-100/70 font-medium max-w-xl">{plan.Description}</p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 min-w-[280px] justify-end">
          <div className="text-center sm:text-right">
            <div className="flex items-baseline justify-center sm:justify-end gap-1">
              <span className="text-4xl sm:text-5xl font-black text-[#E0A23B]">₹{plan.PricePaise / 100}</span>
              <span className="text-blue-100/50 font-bold text-sm">/month</span>
            </div>
            <span className="text-[10px] font-bold text-emerald-400 block mt-1">All features & destinations</span>
          </div>

          <button 
            onClick={() => window.location.href='https://dashboard.infinitepackages.com'}
            className="w-full sm:w-auto bg-gradient-to-r from-[#E0A23B] to-[#F1B855] hover:from-[#F1B855] hover:to-[#E0A23B] text-black px-8 py-3.5 rounded-xl font-black text-base transition-all duration-300 shadow-[0_10px_20px_rgba(224,162,59,0.25)] whitespace-nowrap transform hover:-translate-y-0.5"
          >
            Get Started Now
          </button>
        </div>
      </div>

      {/* Pricing Details Block (Included & Supported Destinations) */}
      <div className="mt-6 bg-gray-50 border border-gray-200/60 rounded-[2rem] p-6 sm:p-8 shadow-sm">
        <div className="grid sm:grid-cols-2 gap-8 text-left">
          {/* Features Column */}
          <div>
            <p className="text-xs font-black text-gray-400 tracking-widest uppercase mb-4">What's Included</p>
            <ul className="space-y-3.5">
              {['Unlimited Quotations', 'All Destinations Unlocked', 'Android App Access', 'Pro PDF Generator', 'Live Payment Tracking'].map((feature, i) => (
                <li key={i} className="flex items-start">
                  <div className="bg-[#0E3B34]/10 rounded-full p-0.5 mr-3 mt-0.5 border border-[#0E3B34]/15 flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#0E3B34]" strokeWidth={4} />
                  </div>
                  <span className="text-gray-700 font-bold text-sm leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations Column */}
          <div className="border-t sm:border-t-0 sm:border-l border-gray-200/80 pt-6 sm:pt-0 sm:pl-8">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <p className="text-xs font-black text-gray-400 tracking-widest uppercase">Supported Destinations</p>
              <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-100 text-[9px] font-bold px-2 py-0.5 rounded-full animate-pulse">
                + Adding more daily
              </span>
            </div>
            
            <h4 className="flex items-center gap-1.5 text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2.5">
              <MapPin className="w-3 h-3 text-[#0E3B34]" /> Domestic
            </h4>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {plan.Destination.Domestic.slice(0, showMoreDomestic ? undefined : 4).map((dest, idx) => (
                <span key={idx} className="px-2.5 py-1 bg-white border border-gray-200/80 text-gray-700 rounded text-xs font-bold shadow-sm">
                  {dest}
                </span>
              ))}
              {!showMoreDomestic && plan.Destination.Domestic.length > 4 && (
                <button onClick={() => setShowMoreDomestic(true)} className="text-[#0E3B34] text-[10px] font-black flex items-center hover:underline">
                  +{plan.Destination.Domestic.length - 4} More <ChevronDown className="w-3 h-3 ml-0.5" />
                </button>
              )}
            </div>

            <h4 className="flex items-center gap-1.5 text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2.5">
              <Globe className="w-3 h-3 text-[#0E3B34]" /> International
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {plan.Destination.International.slice(0, showMoreIntl ? undefined : 6).map((dest, idx) => (
                <span key={idx} className="px-2.5 py-1 bg-white border border-gray-200/80 text-gray-700 rounded text-xs font-bold shadow-sm">
                  {dest}
                </span>
              ))}
              {!showMoreIntl && plan.Destination.International.length > 6 && (
                <button onClick={() => setShowMoreIntl(true)} className="text-[#0E3B34] text-[10px] font-black flex items-center hover:underline">
                  +{plan.Destination.International.length - 6} More <ChevronDown className="w-3 h-3 ml-0.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER CATCH */}
      <section className="text-center py-24 px-4 mt-auto">
        <h2 className="text-2xl font-black text-gray-900 mb-4">Still have questions?</h2>
        <p className="text-gray-600 font-medium mb-8">We're here to help you get started with the new unified plan.</p>
        <button 
          onClick={() => setIsSupportModalOpen(true)}
          className="bg-white border-2 border-gray-200 text-gray-800 hover:border-[#E0A23B] hover:text-[#0E3B34] font-black py-3 px-8 rounded-full transition-colors shadow-sm"
        >
          Talk to Support
        </button>
      </section>

      {/* SUPPORT MODAL */}
      {isSupportModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-[#041422]/60 backdrop-blur-sm transition-opacity"
            onClick={closeModal}
          ></div>
          
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden transform transition-all animate-in fade-in zoom-in-95 duration-200">
            <div className="bg-gradient-to-r from-[#0E3B34] to-[#1C6C5E] p-6 text-white relative">
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="text-2xl font-black tracking-tight mb-1">How can we help?</h3>
              <p className="text-emerald-50 text-sm font-medium opacity-90">Let us know your requirements and we'll get right back to you.</p>
            </div>

            <div className="p-6">
              {isSubmitted ? (
                <div className="py-8 text-center flex flex-col items-center">
                  <div className="w-16 h-16 bg-[#00ab6b]/10 rounded-full flex items-center justify-center mb-4">
                    <Check className="w-8 h-8 text-[#00ab6b]" strokeWidth={3} />
                  </div>
                  <h4 className="text-xl font-black text-gray-900 mb-2">Request Sent!</h4>
                  <p className="text-gray-500 font-medium text-sm">We've received your expectations and our support team will email you shortly.</p>
                  <button 
                    onClick={closeModal}
                    className="mt-8 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2.5 px-6 rounded-lg transition-colors text-sm"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSupportSubmit} className="space-y-4 text-left">
                  <div>
                    <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-1.5 ml-1">Your Name</label>
                    <input 
                      required
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-[#0E3B34]/20 focus:border-[#0E3B34] outline-none transition-all placeholder:text-gray-400 text-gray-800"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-1.5 ml-1">Email Address</label>
                    <input 
                      required
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-[#0E3B34]/20 focus:border-[#0E3B34] outline-none transition-all placeholder:text-gray-400 text-gray-800"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-1.5 ml-1">Requirements & Expectations</label>
                    <textarea 
                      required
                      rows={4}
                      value={formData.expectations}
                      onChange={(e) => setFormData({...formData, expectations: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-[#0E3B34]/20 focus:border-[#0E3B34] outline-none transition-all placeholder:text-gray-400 resize-none text-gray-800"
                      placeholder="Tell us what you are looking for..."
                    ></textarea>
                  </div>
                  
                  <div className="pt-2">
                    <button 
                      disabled={isSubmitting}
                      type="submit"
                      className="w-full bg-[#0E3B34] hover:bg-[#092823] disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-black py-3.5 px-6 rounded-xl transition-all shadow-md flex justify-center items-center h-12"
                    >
                      {isSubmitting ? (
                        <Loader2 className="w-5 h-5 animate-spin text-white/70" />
                      ) : (
                        "Send Request"
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

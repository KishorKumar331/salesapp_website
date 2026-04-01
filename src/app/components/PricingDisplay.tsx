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
      <div className="relative bg-[#041422] rounded-[2rem] p-8 lg:p-12 shadow-[0_30px_60px_-15px_rgba(0,140,255,0.4)] border border-[#008cff]/30 flex flex-col transform transition-transform duration-500 hover:-translate-y-2 lg:hover:translate-y-0">
        <div className="mb-8 text-center border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 bg-[#008cff]/20 text-[#00cefc] px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-6 border border-[#008cff]/30 shadow-sm">
             <Sparkles className="w-3 h-3 text-[#00cefc]" /> The Only Plan You Need
          </div>
          <h3 className="text-3xl font-black text-white tracking-widest uppercase mb-4">{plan.Name} Package</h3>
          
          <div className="flex items-center justify-center gap-2">
            <span className="text-6xl font-black text-white lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r lg:from-[#008cff] lg:to-[#00cefc]">₹{plan.PricePaise / 100}</span>
            <span className="text-blue-100/50 font-bold mt-4">/mo</span>
          </div>
          <p className="mt-4 text-blue-100/80 font-medium">{plan.Description}</p>
        </div>
        
        <button 
          onClick={() => window.location.href='https://dashboard.infinitepackages.com'}
          className="w-full bg-gradient-to-r from-[#008cff] to-[#00cefc] hover:from-[#0070cc] hover:to-[#00a3cc] text-white py-4 rounded-xl font-black text-lg transition-all duration-300 shadow-[0_10px_20px_rgba(0,140,255,0.3)] hover:shadow-[0_15px_30px_rgba(0,140,255,0.4)] mb-12 transform hover:-translate-y-0.5"
        >
          Get Started Now
        </button>

        <div className="flex-1 flex flex-col gap-10 sm:flex-row text-left">
          {/* Features Column */}
          <div className="flex-1">
            <p className="text-xs font-black text-blue-100/50 tracking-widest uppercase mb-4">What's Included</p>
            <ul className="space-y-4">
              {['Unlimited Quotations', 'All Destinations Unlocked', 'Android App Access', 'Pro PDF Generator', 'Live Payment Tracking'].map((feature, i) => (
                <li key={i} className="flex items-start">
                  <div className="bg-[#008cff]/20 rounded-full p-0.5 mr-3 mt-0.5 border border-[#008cff]/30 flex-shrink-0">
                    <Check className="w-4 h-4 text-[#00cefc]" strokeWidth={4} />
                  </div>
                  <span className="text-white font-bold text-sm leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations Column */}
          <div className="flex-1">
            <p className="text-xs font-black text-blue-100/50 tracking-widest uppercase mb-4">Supported Destinations</p>
            
            <h4 className="flex items-center gap-2 text-[10px] font-black text-blue-100/40 uppercase tracking-widest mb-3">
              <MapPin className="w-3 h-3" /> Domestic
            </h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {plan.Destination.Domestic.slice(0, showMoreDomestic ? undefined : 4).map((dest, idx) => (
                <span key={idx} className="px-2 py-1 bg-white/5 border border-white/10 text-white rounded text-xs font-bold shadow-sm backdrop-blur-sm">
                  {dest}
                </span>
              ))}
              {!showMoreDomestic && plan.Destination.Domestic.length > 4 && (
                <button onClick={() => setShowMoreDomestic(true)} className="text-[#00cefc] text-[10px] font-black flex items-center hover:text-white transition-colors">
                  +{plan.Destination.Domestic.length - 4} More <ChevronDown className="w-3 h-3 ml-0.5" />
                </button>
              )}
            </div>

            <h4 className="flex items-center gap-2 text-[10px] font-black text-blue-100/40 uppercase tracking-widest mb-3">
              <Globe className="w-3 h-3" /> International
            </h4>
            <div className="flex flex-wrap gap-2">
              {plan.Destination.International.slice(0, showMoreIntl ? undefined : 6).map((dest, idx) => (
                <span key={idx} className="px-2 py-1 bg-white/5 border border-white/10 text-white rounded text-xs font-bold shadow-sm backdrop-blur-sm">
                  {dest}
                </span>
              ))}
              {!showMoreIntl && plan.Destination.International.length > 6 && (
                <button onClick={() => setShowMoreIntl(true)} className="text-[#00cefc] text-[10px] font-black flex items-center hover:text-white transition-colors">
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
          className="bg-white border-2 border-gray-200 text-gray-800 hover:border-[#008cff] hover:text-[#008cff] font-black py-3 px-8 rounded-full transition-colors shadow-sm"
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
            <div className="bg-gradient-to-r from-[#008cff] to-[#00cefc] p-6 text-white relative">
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="text-2xl font-black tracking-tight mb-1">How can we help?</h3>
              <p className="text-blue-50 text-sm font-medium opacity-90">Let us know your requirements and we'll get right back to you.</p>
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
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-[#008cff]/20 focus:border-[#008cff] outline-none transition-all placeholder:text-gray-400 text-gray-800"
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
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-[#008cff]/20 focus:border-[#008cff] outline-none transition-all placeholder:text-gray-400 text-gray-800"
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
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-[#008cff]/20 focus:border-[#008cff] outline-none transition-all placeholder:text-gray-400 resize-none text-gray-800"
                      placeholder="Tell us what you are looking for..."
                    ></textarea>
                  </div>
                  
                  <div className="pt-2">
                    <button 
                      disabled={isSubmitting}
                      type="submit"
                      className="w-full bg-[#0a192f] hover:bg-[#041422] disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-black py-3.5 px-6 rounded-xl transition-all shadow-md flex justify-center items-center h-12"
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

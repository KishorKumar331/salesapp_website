'use client';

import { useState } from 'react';
import { Check, ChevronDown, Zap, Globe, MapPin, Sparkles, X, Loader2 } from 'lucide-react';

const domesticDestinations = [
  'Kerala', 'Andaman', 'Rajasthan', 'Northeast', 
  'Kashmir', 'Himachal', 'Ladakh', 'Goa'
];

const internationalDestinations = [
  'Europe', 'Georgia', 'Maldives', 'Srilanka', 'Mauritius', 
  'Dubai', 'Thailand', 'Japan', 'Bali', 'Turkey', 
  'Malaysia', 'Vietnam', 'Singapore'
];

export default function PricingPage() {
  const [showMoreDomestic, setShowMoreDomestic] = useState(false);
  const [showMoreIntl, setShowMoreIntl] = useState(false);
  const [showMoreCombined, setShowMoreCombined] = useState(false);

  // Modal State
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', expectations: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSupportSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // API call to custom endpoint returning a mail
      await fetch('/api/support', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      // Simulate API response time
      await new Promise((resolve) => setTimeout(resolve, 800));
      setIsSubmitted(true);
    } catch (error) {
      console.error('Failed to send support request', error);
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
    <div className="min-h-screen bg-[#f4f7f9] selection:bg-[#008cff]/20">
      
      {/* 
        HERO SECTION
        A sleek, dark aesthetic to make the pricing page feel premium and grounded.
      */}
      <section className="relative pt-32 pb-48 bg-[#041422] overflow-hidden">
        {/* Abstract Glow Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] opacity-30 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#008cff] to-[#00cefc] rounded-full blur-[150px] mix-blend-screen mix-blend-lighten animate-pulse duration-3000"></div>
          <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-gradient-to-tr from-[#d12a2f] to-[#e53935] rounded-full blur-[150px] mix-blend-screen opacity-60"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center pt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <Sparkles className="w-4 h-4 text-[#00cefc]" />
            <span className="text-blue-100 text-sm font-semibold tracking-wide uppercase">Plans for every stage</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-sans font-black text-white mb-6 tracking-tight drop-shadow-xl">
            Scale Without <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008cff] to-[#00cefc]">Limits</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100/80 font-medium max-w-2xl mx-auto leading-relaxed mb-12">
            The most powerful tools for modern travel entrepreneurs. Start building your empire today.
          </p>
          
          {/* Parity Info Banner */}
          <div className="bg-[#0a192f]/50 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,140,255,0.1)] rounded-2xl p-6 text-left max-w-3xl mx-auto flex flex-col sm:flex-row gap-6 items-center">
             <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#008cff] to-[#0052cc] rounded-2xl flex items-center justify-center shadow-lg transform -rotate-3 border border-white/20">
               <span className="text-3xl">📱</span>
             </div>
             <div>
               <h3 className="text-white text-lg font-black mb-2 tracking-wide">
                 MANAGE FROM ANYWHERE
               </h3>
               <p className="text-blue-200/80 text-sm md:text-base leading-relaxed font-medium">
                 All plans include full access to our powerful <strong>Web Dashboard</strong> and our dedicated <strong>Android App</strong>. Exact same tools, whether you are at your desk or on the go.
               </p>
             </div>
          </div>
        </div>
      </section>

      {/* 
        PRICING CARDS
        We pull these UP to overlap the dark hero section using negative margin.
      */}
      <section className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-24 pb-32">
        <div className="grid lg:grid-cols-3 gap-8 items-start lg:items-center">
          
          {/* =======================
              CARD 1: DOMESTIC
          ======================== */}
          <div className="bg-white rounded-[2rem] p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col transform transition-transform duration-300 hover:-translate-y-2">
            <div className="mb-6">
              <div className="w-12 h-12 bg-[#f0f7ff] rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-[#008cff]" />
              </div>
              <h3 className="text-2xl font-black text-[#041422] mb-2">Domestic</h3>
              <p className="text-gray-500 text-sm font-medium">Perfect for local travel business</p>
            </div>
            
            <div className="mb-8 flex items-end gap-1">
              <span className="text-5xl font-black text-[#041422]">₹999</span>
              <span className="text-gray-400 font-bold mb-1">/mo</span>
            </div>
            
            <button 
              onClick={() => window.location.href='https://dashboard.infinitepackages.com/auth'}
              className="w-full bg-white border-2 border-[#008cff] text-[#008cff] hover:bg-[#008cff] hover:text-white py-4 rounded-xl font-black text-lg transition-all duration-300 shadow-sm mb-10"
            >
              Get Started
            </button>

            <div className="flex-1 flex flex-col space-y-8">
              <div>
                <p className="text-xs font-black text-gray-400 tracking-widest uppercase mb-4">Features</p>
                <ul className="space-y-4">
                  {['600+ Quotations', '24/7 Support', 'Mail Service', 'PDF Design Templates', '1 Year Updates'].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-[#008cff] mr-3 flex-shrink-0" strokeWidth={3} />
                      <span className="text-[#041422] font-bold text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 border-t border-gray-100 mt-auto">
                <h4 className="flex items-center gap-2 text-xs font-black text-gray-400 uppercase tracking-widest mb-4">
                  <MapPin className="w-4 h-4" /> Top Destinations
                </h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {domesticDestinations.slice(0, showMoreDomestic ? undefined : 5).map((destination, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-50 border border-gray-100 text-gray-600 rounded-md text-sm font-bold shadow-sm">
                      {destination}
                    </span>
                  ))}
                </div>
                {!showMoreDomestic && domesticDestinations.length > 5 && (
                  <button onClick={() => setShowMoreDomestic(true)} className="text-[#008cff] text-sm font-black flex items-center hover:text-[#0052cc] transition-colors">
                    + {domesticDestinations.length - 5} More <ChevronDown className="w-4 h-4 ml-1" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* =======================
              CARD 2: INTERNATIONAL (POPULAR)
          ======================== */}
          <div className="relative bg-[#041422] rounded-[2rem] p-8 lg:p-10 shadow-[0_30px_60px_-15px_rgba(0,140,255,0.4)] border border-[#008cff]/30 flex flex-col transform lg:-translate-y-8 z-20">
            {/* Red Popular Badge */}
            <div className="absolute top-0 right-8 transform -translate-y-1/2">
              <div className="inline-flex items-center gap-1 bg-gradient-to-r from-[#d12a2f] to-[#e53935] text-white px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase shadow-[0_4px_10px_rgba(209,42,47,0.4)] border border-red-400/30">
                <Zap className="w-3 h-3 fill-current" /> Most Popular
              </div>
            </div>
            
            <div className="mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#008cff] to-[#00cefc] rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,140,255,0.4)]">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-black text-white mb-2">International</h3>
              <p className="text-blue-100/70 text-sm font-medium">For growing global travel business</p>
            </div>
            
            <div className="mb-8 flex items-end gap-1">
              <span className="text-6xl font-black text-white">₹1,499</span>
              <span className="text-blue-100/50 font-bold mb-2">/mo</span>
            </div>
            
            <button 
              onClick={() => window.location.href='https://dashboard.infinitepackages.com/auth'}
              className="w-full bg-gradient-to-r from-[#008cff] to-[#00cefc] hover:from-[#0070cc] hover:to-[#00a3cc] text-white py-4 rounded-xl font-black text-lg transition-all duration-300 shadow-[0_10px_20px_rgba(0,140,255,0.3)] hover:shadow-[0_15px_30px_rgba(0,140,255,0.4)] mb-10 transform hover:-translate-y-0.5"
            >
              Get Started
            </button>

            <div className="flex-1 flex flex-col space-y-8">
              <div>
                <p className="text-xs font-black text-blue-100/50 tracking-widest uppercase mb-4">Everything in Domestic, Plus</p>
                <ul className="space-y-4">
                  {['Unlimited Quotations', '24/7 Priority Support', 'Mail & SMS Service', 'Premium PDF Templates', 'Lifetime Updates'].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="bg-[#008cff]/20 rounded-full p-0.5 mr-3 mt-0.5 border border-[#008cff]/30">
                        <Check className="w-4 h-4 text-[#00cefc]" strokeWidth={4} />
                      </div>
                      <span className="text-white font-bold text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 border-t border-white/10 mt-auto">
                <h4 className="flex items-center gap-2 text-xs font-black text-blue-100/50 uppercase tracking-widest mb-4">
                  <Globe className="w-4 h-4" /> Global Destinations
                </h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {internationalDestinations.slice(0, showMoreIntl ? undefined : 6).map((destination, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 text-white rounded-md text-sm font-bold shadow-sm backdrop-blur-sm">
                      {destination}
                    </span>
                  ))}
                </div>
                {!showMoreIntl && internationalDestinations.length > 6 && (
                  <button onClick={() => setShowMoreIntl(true)} className="text-[#00cefc] text-sm font-black flex items-center hover:text-white transition-colors">
                    + {internationalDestinations.length - 6} More <ChevronDown className="w-4 h-4 ml-1" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* =======================
              CARD 3: COMBINED
          ======================== */}
          <div className="bg-white rounded-[2rem] p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col transform transition-transform duration-300 hover:-translate-y-2">
            <div className="mb-6">
              <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-black text-[#041422] mb-2">Combined</h3>
              <p className="text-gray-500 text-sm font-medium">Complete worldwide coverage</p>
            </div>
            
            <div className="mb-8 flex items-end gap-1">
              <span className="text-5xl font-black text-[#041422]">₹1,999</span>
              <span className="text-gray-400 font-bold mb-1">/mo</span>
            </div>
            
            <button className="w-full bg-[#0a192f] border-2 border-[#0a192f] text-white hover:bg-transparent hover:text-[#0a192f] py-4 rounded-xl font-black text-lg transition-all duration-300 shadow-xl mb-10 tracking-wide">
              Contact Sales
            </button>

            <div className="flex-1 flex flex-col space-y-8">
              <div>
                <p className="text-xs font-black text-gray-400 tracking-widest uppercase mb-4">Ultimate Features</p>
                <ul className="space-y-4">
                  {['All Destinations Included', '24/7 Premium Support', 'Mail, SMS & WhatsApp', 'Custom Branding', 'API Access'].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-gray-900 mr-3 flex-shrink-0" strokeWidth={4} />
                      <span className="text-[#041422] font-black text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 border-t border-gray-100 mt-auto">
                <h4 className="flex items-center gap-2 text-xs font-black text-gray-400 uppercase tracking-widest mb-4">
                  <Globe className="w-4 h-4" /> All Destinations
                </h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {[...domesticDestinations, ...internationalDestinations].slice(0, showMoreCombined ? undefined : 5).map((destination, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-50 border border-gray-200 text-gray-800 rounded-md text-sm font-bold shadow-sm">
                      {destination}
                    </span>
                  ))}
                </div>
                {!showMoreCombined && (
                  <button onClick={() => setShowMoreCombined(true)} className="text-gray-900 text-sm font-black flex items-center hover:text-[#008cff] transition-colors">
                    + {domesticDestinations.length + internationalDestinations.length - 5} More <ChevronDown className="w-4 h-4 ml-1" />
                  </button>
                )}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER CATCH */}
      <section className="text-center pb-24 px-4">
        <h2 className="text-2xl font-black text-gray-900 mb-4">Still have questions?</h2>
        <p className="text-gray-600 font-medium mb-8">Were here to help you choose the right plan for your business.</p>
        <button 
          onClick={() => setIsSupportModalOpen(true)}
          className="bg-white border-2 border-gray-200 text-gray-800 hover:border-gray-300 font-black py-3 px-8 rounded-full transition-colors shadow-sm"
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
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#008cff] to-[#00cefc] p-6 text-white relative">
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="text-2xl font-black tracking-tight mb-1">How can we help?</h3>
              <p className="text-blue-50 text-sm font-medium opacity-90">Let us know your requirements and we&apos;ll get right back to you.</p>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {isSubmitted ? (
                <div className="py-8 text-center flex flex-col items-center">
                  <div className="w-16 h-16 bg-[#00ab6b]/10 rounded-full flex items-center justify-center mb-4">
                    <Check className="w-8 h-8 text-[#00ab6b]" strokeWidth={3} />
                  </div>
                  <h4 className="text-xl font-black text-gray-900 mb-2">Request Sent!</h4>
                  <p className="text-gray-500 font-medium text-sm">We&apos;ve received your expectations and our support team will email you shortly.</p>
                  <button 
                    onClick={closeModal}
                    className="mt-8 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2.5 px-6 rounded-lg transition-colors text-sm"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSupportSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-1.5 ml-1">Your Name</label>
                    <input 
                      required
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-[#008cff]/20 focus:border-[#008cff] outline-none transition-all placeholder:text-gray-400"
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
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-[#008cff]/20 focus:border-[#008cff] outline-none transition-all placeholder:text-gray-400"
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
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-[#008cff]/20 focus:border-[#008cff] outline-none transition-all placeholder:text-gray-400 resize-none"
                      placeholder="Tell us what you are looking for in the application..."
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

    </div>
  );
}

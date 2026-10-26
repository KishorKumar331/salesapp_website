"use client";

import { useState } from "react";
import { Check, X, Loader2, Zap, ShieldCheck, Smartphone, Sparkles, ArrowRight } from "lucide-react";

import FeaturesSection from "./components/FeaturesSection";
import GroupBookingsSection from "./components/GroupBookingsSection";
import ComparisonSection from "./components/ComparisonSection";
import FreePlanSection from "./components/FreePlanSection";
import ProblemSection from "./components/ProblemSection";
import ProfitCalculator from "./components/ProfitCalculator";
import HowToUseSection from "./components/HowToUseSection";
import StoryCarousel from "./components/StoryCarousel";
import AppDownloadSection from "./components/AppDownloadSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  // Support / Contact Modal State
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
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

  const scrollToHowItWorks = () => {
    const el = document.getElementById('how-it-works');
    if (el) {
      window.scrollTo({ top: el.offsetTop - 90, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafd]">
      {/* Hero Section */}
      <section className="relative pt-16 pb-6 lg:pt-24 lg:pb-12 overflow-hidden bg-gradient-to-b from-[#f4f8f7] via-[#f8fafd] to-white">
        {/* Ambient background glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#0E3B34]/10 rounded-full blur-[120px] opacity-70 pointer-events-none"></div>
        <div className="absolute bottom-0 right-[-10%] w-[600px] h-[600px] bg-[#E0A23B]/8 rounded-full blur-[100px] opacity-60 pointer-events-none"></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10">
            <div className="inline-flex items-center gap-2 bg-white border border-[#0E3B34]/20 text-[#0E3B34] px-5 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide mb-8 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0E3B34] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0E3B34]"></span>
              </span>
              Modern Lead & Quotation Engine • Travel Sales CRM
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black leading-tight sm:leading-none text-gray-900 mb-6 tracking-tight max-w-5xl mx-auto">
              Travel Agent CRM Software Built to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E3B34] via-[#124d44] to-[#E0A23B]">Close Quotes Faster</span>
            </h1>
            
            <p className="text-lg sm:text-2xl text-gray-700 max-w-3xl mx-auto font-medium mb-3 leading-relaxed">
              Manage client inquiries, automate follow-ups, and generate professional quotes in minutes.
            </p>

            <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto font-normal mb-10 leading-relaxed">
              QuickQuote combines high-speed travel itinerary generation with client lead management. Replace clunky spreadsheets with an intuitive CRM tailored for independent agents, DMCs, and boutique tour operators.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://dashboard.infinitepackages.com"
                className="bg-gradient-to-r from-[#E0A23B] to-[#F1B855] hover:from-[#F1B855] hover:to-[#E0A23B] text-black px-9 py-4 rounded-full font-black text-lg shadow-[0_10px_25px_rgba(224,162,59,0.3)] hover:shadow-[0_15px_35px_rgba(224,162,59,0.4)] transition-all transform hover:-translate-y-1 w-full sm:w-auto flex items-center justify-center gap-2"
              >
                Start with QuickQuote Free <ArrowRight className="w-5 h-5" />
              </a>
              <button 
                onClick={() => setIsSupportModalOpen(true)}
                className="bg-white border-2 border-gray-200 hover:border-[#E0A23B] text-gray-800 hover:text-[#0E3B34] px-8 py-4 rounded-full font-black text-lg transition-all shadow-sm hover:shadow-md w-full sm:w-auto flex items-center justify-center gap-2"
              >
                Book a Demo
              </button>
            </div>
            
            {/* Value Pills */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-bold text-gray-600">
              <div className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-gray-100 shadow-2xs">
                <Zap className="w-4 h-4 text-[#E0A23B]" /> 1-Minute PDF Quoting
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-gray-100 shadow-2xs">
                <Sparkles className="w-4 h-4 text-[#0E3B34]" /> Best CRM Software for Travel Agents
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-gray-100 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-[#0E3B34]" /> 100% Encrypted Data
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-gray-100 shadow-2xs">
                <Smartphone className="w-4 h-4 text-emerald-600" /> Mobile Ready CRM
              </div>
            </div>

            {/* Storytelling Carousel */}
            <StoryCarousel />
        </div>
      </section>

      {/* Services Overview Section (Dashboard, Mobile App in 1999, Custom Website) */}
      <ServicesSection />

      {/* Feature Section: Lead & Pipeline Management (Keywords: crm travel agent, crm travel system, travel crm systems, B2B sales travel) */}
      <FeaturesSection />

      {/* Feature Section: Group Bookings & Itineraries (Keywords: Group Travel CRM, Is Travefy a CRM) */}
      <GroupBookingsSection />

      {/* Comparison Section: Why Agencies Switch from Complex CRMs (Keywords: Salesforce CRM for Travel Agency, Vacation CRM vs TravelJoy) */}
      <ComparisonSection />

      <ProblemSection />
      <ProfitCalculator />
      <HowToUseSection />
      
      {/* Custom PDF Design Section */}
      <section id="marketplace" className="bg-[#f8fafd] pt-14 pb-14 text-center border-y border-gray-100 relative">
         <div className="mx-auto max-w-4xl px-4">
            <div className="inline-flex items-center gap-2 bg-[#0E3B34]/10 text-[#0E3B34] px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-4">
               PDF Customization Studio
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-black text-gray-900 mb-4 tracking-tight">
               Bespoke PDF Itinerary Layouts
            </h2>
            <p className="text-gray-600 font-medium mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
               Design a professional itinerary layout tailored exactly to your brand's unique identity. Control page arrangements, headers, payment links, and hero images according to your business requirements.
            </p>

            {/* Customization Options Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10 text-left">
              {[
                { title: "Custom Page Length", desc: "Select multi-page detailed guides or concise single-page summaries." },
                { title: "Dynamic Layout Placing", desc: "Arrange day-wise itineraries, hotel inclusions, and destination photos." },
                { title: "Embedded Payment Links", desc: "Embed instant UPI and card payment links inside client PDF proposals." },
                { title: "White-Label Branding", desc: "Fully branded with your company logo, contact info, and legal terms." }
              ].map((opt, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-[#0E3B34]/10 text-[#0E3B34] rounded-lg flex items-center justify-center font-bold text-sm mb-3">
                    ✓
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1.5 leading-snug">{opt.title}</h4>
                  <p className="text-gray-500 text-xs leading-normal font-medium">{opt.desc}</p>
                </div>
              ))}
            </div>

            {/* Tailored Customization Box */}
            <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white border border border-gray-200/80 px-8 py-5 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center sm:text-left">
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block">Custom Studio Request</span>
                <span className="text-lg font-black text-[#0E3B34]">Need a Unique Itinerary Theme?</span>
                <p className="text-xs text-gray-500 font-medium mt-0.5">Our design team crafts bespoke layouts tailored to your exact brand spec.</p>
              </div>
              <button 
                onClick={() => window.location.href='mailto:tech.support@infinitepackages.com?subject=Custom PDF Design Layout Inquiry'}
                className="bg-gradient-to-r from-[#0E3B34] to-[#1C6C5E] hover:from-[#1C6C5E] hover:to-[#0E3B34] text-white px-7 py-3.5 rounded-xl font-black text-sm transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 whitespace-nowrap"
              >
                Request Custom Layout
              </button>
            </div>
         </div>
      </section>

      {/* Free Plan & Onboarding Section (Keywords: free travel agent crm software, travel agent crm free, travel agency crm software free) */}
      <FreePlanSection />

      <AppDownloadSection />
      <TestimonialsSection />
      <FAQSection />

      {/* Support / Contact Section */}
      <section className="bg-gradient-to-r from-[#0E3B34] via-[#124d44] to-[#1C6C5E] text-white py-16 relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black mb-5 tracking-tight text-white">
            Ready to Upgrade Your Travel Business?
          </h2>
          <p className="text-lg sm:text-xl text-emerald-50 font-medium max-w-2xl mx-auto mb-10 opacity-90 leading-relaxed">
            Send quotes instantly, collect client payments faster, and build your independent agency equity like a pro.
          </p>
          <button 
            onClick={() => setIsSupportModalOpen(true)}
            className="bg-white text-[#0E3B34] hover:text-[#E0A23B] px-10 py-4 rounded-xl font-black text-lg shadow-xl transition-all transform hover:-translate-y-1"
          >
            Leave Us a Message
          </button>
        </div>
      </section>

      {/* Modern Footer Component */}
      <Footer />

      {/* SUPPORT MODAL */}
      {isSupportModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-[#041422]/70 backdrop-blur-sm transition-opacity"
            onClick={closeModal}
          ></div>
          
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden transform transition-all animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#0E3B34] to-[#1C6C5E] p-6 text-white relative">
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors p-1"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="text-2xl font-black tracking-tight mb-1">How can we help?</h3>
              <p className="text-emerald-50 text-sm font-medium opacity-90">Let us know your business goals and our team will connect with you.</p>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {isSubmitted ? (
                <div className="py-8 text-center flex flex-col items-center">
                  <div className="w-16 h-16 bg-[#00ab6b]/10 rounded-full flex items-center justify-center mb-4">
                    <Check className="w-8 h-8 text-[#00ab6b]" strokeWidth={3} />
                  </div>
                  <h4 className="text-xl font-black text-gray-900 mb-2">Message Received!</h4>
                  <p className="text-gray-500 font-medium text-sm">We've received your details. Our support team will get back to you shortly.</p>
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
                    <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-1.5 ml-1">Message</label>
                    <textarea 
                      required
                      rows={4}
                      value={formData.expectations}
                      onChange={(e) => setFormData({...formData, expectations: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-[#0E3B34]/20 focus:border-[#0E3B34] outline-none transition-all placeholder:text-gray-400 resize-none text-gray-800"
                      placeholder="Tell us about your agency or customization needs..."
                    ></textarea>
                  </div>
                  
                  <div className="pt-2">
                    <button 
                      disabled={isSubmitting}
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#E0A23B] to-[#F1B855] hover:from-[#F1B855] hover:to-[#E0A23B] disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-black font-black py-3.5 px-6 rounded-xl transition-all shadow-md flex justify-center items-center h-12"
                    >
                      {isSubmitting ? (
                        <Loader2 className="w-5 h-5 animate-spin text-[#0E3B34]" />
                      ) : (
                        "Send Message"
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

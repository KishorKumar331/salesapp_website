"use client";

import { useState } from "react";
import { Check, X, Loader2, LayoutDashboard, Briefcase, FileText, Users, Settings, TrendingUp, Wallet, MapPin, Plane } from "lucide-react";

import FeaturesSection from "./components/FeaturesSection";
import ProblemSection from "./components/ProblemSection";
import ProfitCalculator from "./components/ProfitCalculator";
import HowToUseSection from "./components/HowToUseSection";
import StoryCarousel from "./components/StoryCarousel";
import AppDownloadSection from "./components/AppDownloadSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import PricingSection from "./components/PricingSection";
import Footer from "./components/Footer";

export default function Home() {
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-4 lg:pt-28 lg:pb-8 overflow-hidden bg-[#f8fafd]">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#0E3B34]/10 rounded-full blur-[120px] opacity-70 pointer-events-none"></div>
        <div className="absolute bottom-0 right-[-20%] w-[600px] h-[600px] bg-[#E0A23B]/5 rounded-full blur-[100px] opacity-50 pointer-events-none"></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10">
            <div className="inline-flex items-center gap-2 bg-white border border-[#0E3B34]/20 text-[#0E3B34] px-5 py-2 rounded-full text-sm font-bold tracking-wide mb-8 shadow-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0E3B34] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0E3B34]"></span>
              </span>
              Journey to Ownership
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black leading-tight text-gray-900 mb-6 tracking-tight max-w-5xl mx-auto">
              "The voice that pitches for them can <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E3B34] to-[#E0A23B]">build a brand of your own.</span>"
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium mb-10 leading-relaxed">
              Quote your own clients in under a minute. Run it on the side. Become the owner.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => window.location.href='https://dashboard.infinitepackages.com'}
                className="bg-gradient-to-r from-[#E0A23B] to-[#F1B855] hover:from-[#F1B855] hover:to-[#E0A23B] text-black px-8 py-4 rounded-full font-black text-lg shadow-[0_10px_20px_rgba(224,162,59,0.2)] hover:shadow-[0_15px_30px_rgba(224,162,59,0.3)] transition-all transform hover:-translate-y-1 w-full sm:w-auto"
              >
                Get Started
              </button>
              <button className="bg-white border-2 border-gray-200 hover:border-[#E0A23B] text-gray-700 hover:text-[#0E3B34] px-8 py-4 rounded-full font-black text-lg transition-all shadow-sm w-full sm:w-auto">
                See How It Works
              </button>
            </div>
            
            <p className="mt-6 text-sm font-medium text-gray-500">No credit card required &bull; Cancel anytime</p>

            {/* Storytelling Carousel */}
            <StoryCarousel />
        </div>
      </section>

      <ProblemSection />
      <ProfitCalculator />
      <FeaturesSection />
      <HowToUseSection />
      
      {/* Custom PDF Design Section */}
      <section id="marketplace" className="bg-[#f8fafd] pt-10 pb-12 text-center border-y border-gray-100">
         <div className="mx-auto max-w-4xl px-4">
            <div className="inline-flex items-center gap-2 bg-[#0E3B34]/10 text-[#0E3B34] px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-4">
               PDF Customization
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-black text-gray-900 mb-4">
               Create Your Own PDF Design
            </h2>
            <p className="text-gray-600 font-medium mb-8 max-w-2xl mx-auto">
               Design a professional itinerary layout tailored exactly to your brand's style. Control every aspect of your PDF quotes based on your business requirements.
            </p>

            {/* Customization Options */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8 text-left">
              {[
                { title: "Decide Page Length", desc: "Select custom pages or single-page summaries." },
                { title: "Content Placing", desc: "Drag and drop itinerary items, hotels, and images." },
                { title: "Action Buttons", desc: "Embed payment links and direct booking buttons." },
                { title: "Tailored to You", desc: "Customized according to your exact requirements." }
              ].map((opt, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm">
                  <div className="w-8 h-8 bg-[#0E3B34]/10 text-[#0E3B34] rounded-lg flex items-center justify-center font-bold text-sm mb-3">
                    ✓
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">{opt.title}</h4>
                  <p className="text-gray-400 text-[10px] leading-normal font-medium">{opt.desc}</p>
                </div>
              ))}
            </div>

            {/* Pricing Offer */}
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white border border-gray-200/60 px-6 py-4 rounded-3xl shadow-sm">
              <div className="text-center sm:text-left">
                <span className="text-xs text-gray-400 font-bold block">Exclusive Layout Access</span>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="line-through text-gray-400 text-sm font-bold">₹2,499</span>
                  <span className="text-xl font-black text-[#E0A23B]">₹999 + taxes only</span>
                </div>
              </div>
              <button 
                onClick={() => window.location.href='mailto:tech.support@infinitepackages.com?subject=Custom PDF Design Layout Inquiry'}
                className="bg-gradient-to-r from-[#E0A23B] to-[#F1B855] hover:from-[#F1B855] hover:to-[#E0A23B] text-black px-8 py-3 rounded-xl font-black text-sm transition-all shadow-[0_5px_15px_rgba(224,162,59,0.2)] hover:shadow-[0_8px_20px_rgba(224,162,59,0.3)] transform hover:-translate-y-0.5"
              >
                Customize Layout
              </button>
            </div>
         </div>
      </section>

      <AppDownloadSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />

      {/* Support / Contact Overlay Catch */}
      <section className="bg-gradient-to-r from-[#0E3B34] to-[#1C6C5E] text-white py-16 relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-sans font-black mb-6 drop-shadow-sm tracking-tight text-white">
            Ready to upgrade your travel business?
          </h2>
          <p className="text-xl text-emerald-50 font-medium max-w-2xl mx-auto mb-10 opacity-90">
            Send quotes instantly, collect payments faster, and run your travel agency like a pro.
          </p>
          <button 
            onClick={() => setIsSupportModalOpen(true)}
            className="bg-white text-[#0E3B34] hover:text-[#E0A23B] px-10 py-4 rounded-xl font-black text-lg shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-all transform hover:-translate-y-1"
          >
            Leave us a Message
          </button>
        </div>
      </section>

      {/* Modern Footer Component */}
      <Footer />

      {/* SUPPORT MODAL */}
      {isSupportModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-[#041422]/60 backdrop-blur-sm transition-opacity"
            onClick={closeModal}
          ></div>
          
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden transform transition-all animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
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

            {/* Modal Body */}
            <div className="p-6">
              {isSubmitted ? (
                <div className="py-8 text-center flex flex-col items-center">
                  <div className="w-16 h-16 bg-[#00ab6b]/10 rounded-full flex items-center justify-center mb-4">
                    <Check className="w-8 h-8 text-[#00ab6b]" strokeWidth={3} />
                  </div>
                  <h4 className="text-xl font-black text-gray-900 mb-2">Message Sent!</h4>
                  <p className="text-gray-500 font-medium text-sm">We've received your message and our support team will email you shortly.</p>
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
                      placeholder="Tell us what you are looking for..."
                    ></textarea>
                  </div>
                  
                  <div className="pt-2">
                    <button 
                      disabled={isSubmitting}
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#E0A23B] to-[#F1B855] hover:from-[#F1B855] hover:to-[#E0A23B] disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-black font-black py-3.5 px-6 rounded-xl transition-all shadow-[0_10px_20px_rgba(224,162,59,0.2)] flex justify-center items-center h-12"
                    >
                      {isSubmitting ? (
                        <Loader2 className="w-5 h-5 animate-spin text-white/70" />
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

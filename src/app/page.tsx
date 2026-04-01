"use client";

import { useState } from "react";
import { Check, X, Loader2, LayoutDashboard, Briefcase, FileText, Users, Settings, TrendingUp, Wallet, MapPin, Plane } from "lucide-react";

import FeaturesSection from "./components/FeaturesSection";
import WhatWeDoSection from "./components/WhatWeDoSection";
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
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#f8fafd]">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#008cff]/10 rounded-full blur-[120px] opacity-70 pointer-events-none"></div>
        <div className="absolute bottom-0 right-[-20%] w-[600px] h-[600px] bg-[#d12a2f]/5 rounded-full blur-[100px] opacity-50 pointer-events-none"></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10">
            <div className="inline-flex items-center gap-2 bg-white border border-[#008cff]/20 text-[#008cff] px-5 py-2 rounded-full text-sm font-bold tracking-wide mb-8 shadow-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#008cff] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#008cff]"></span>
              </span>
              Build your travel startup for pennies
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-sans font-black leading-tight text-gray-900 mb-6 tracking-tight max-w-5xl mx-auto">
              Launch Your Own Travel Agency in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008cff] to-[#00cefc]">Minutes</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium mb-10 leading-relaxed">
              Everything a solo entrepreneur needs to create quotes, manage bookings, and scale a travel business — for just ₹1,999/month. Total access, zero limits.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => window.location.href='https://dashboard.infinitepackages.com'}
                className="bg-gradient-to-r from-[#d12a2f] to-[#e53935] hover:from-[#b92529] hover:to-[#c62828] text-white px-8 py-4 rounded-full font-black text-lg shadow-[0_10px_20px_rgba(209,42,47,0.2)] hover:shadow-[0_15px_30px_rgba(209,42,47,0.3)] transition-all transform hover:-translate-y-1 w-full sm:w-auto"
              >
                Get Started
              </button>
              <button className="bg-white border-2 border-gray-200 hover:border-[#008cff] text-gray-700 hover:text-[#008cff] px-8 py-4 rounded-full font-black text-lg transition-all shadow-sm w-full sm:w-auto">
                See How It Works
              </button>
            </div>
            
            <p className="mt-6 text-sm font-medium text-gray-500">No credit card required &bull; Cancel anytime</p>

            {/* Video Demo Placeholder */}
            <div className="mt-16 mx-auto max-w-5xl relative">
              <div className="rounded-2xl bg-[#041422] p-2 shadow-[0_20px_50px_-12px_rgba(0,140,255,0.2)] border border-gray-800 relative group overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#0a233b] opacity-40 pointer-events-none"></div>
                <div className="rounded-xl overflow-hidden bg-black flex items-center justify-center aspect-[16/9] relative text-left group cursor-pointer border border-gray-800">
                  {/* Browser/Window Header */}
                  <div className="absolute top-0 w-full h-10 bg-[#0a192f] border-b border-gray-800 flex items-center px-4 gap-2 z-20">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                    <div className="ml-4 flex-1 h-5 bg-[#041422] border border-gray-800 rounded-md max-w-xs flex items-center px-2">
                       <span className="text-[10px] text-gray-400 font-mono">dashboard.infinitepackages.com (Demo)</span>
                    </div>
                  </div>
                  
                  {/* Video Player */}
                  <video 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    poster="/demo-poster.png"
                    controls
                    preload="none"
                  >
                    <source src="/demo-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Play Button Overlay (visible if video acts as a clickable thumbnail initially) */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
                     <div className="w-20 h-20 bg-[#008cff]/90 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,140,255,0.5)] transform group-hover:scale-110 transition-transform duration-300">
                       <svg className="w-8 h-8 text-white ml-2" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                     </div>
                     <span className="text-white font-black mt-4 tracking-widest uppercase text-sm drop-shadow-md">Watch 90s Demo</span>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>

      <FeaturesSection />
      <WhatWeDoSection />
      
      {/* Design Marketplace Anchor Setup per Week 2 tasks */}
      <section id="marketplace" className="bg-[#f8fafd] py-20 text-center">
         <div className="mx-auto max-w-3xl px-4">
            <h2 className="text-3xl font-black text-gray-900 mb-4">Design Marketplace</h2>
            <p className="text-gray-500 font-medium mb-8">Access premium, white-labeled PDF package design themes to separate your quotes from the rest.</p>
            <button className="bg-white border-2 border-gray-200 text-gray-900 font-bold px-8 py-3 rounded-xl shadow-sm">Explore Themes (₹1,499 one-time)</button>
         </div>
      </section>

      <AppDownloadSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />

      {/* Support / Contact Overlay Catch */}
      <section className="bg-gradient-to-r from-[#008cff] to-[#00cefc] text-white py-24 relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-sans font-black mb-6 drop-shadow-sm tracking-tight text-white">
            Ready to upgrade your travel business?
          </h2>
          <p className="text-xl text-blue-50 font-medium max-w-2xl mx-auto mb-10 opacity-90">
            Send quotes instantly, collect payments faster, and run your travel agency like a pro.
          </p>
          <button 
            onClick={() => setIsSupportModalOpen(true)}
            className="bg-white text-[#008cff] px-10 py-4 rounded-xl font-black text-lg shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-all transform hover:-translate-y-1"
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
                    <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-1.5 ml-1">Message</label>
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
                      className="w-full bg-gradient-to-r from-[#008cff] to-[#00cefc] hover:from-[#0070cc] hover:to-[#00a3cc] disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white font-black py-3.5 px-6 rounded-xl transition-all shadow-[0_10px_20px_rgba(0,140,255,0.2)] flex justify-center items-center h-12"
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

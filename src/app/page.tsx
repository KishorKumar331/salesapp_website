"use client";

import { useState } from "react";
import { Check, X, Loader2, LayoutDashboard, Briefcase, FileText, Users, Settings, TrendingUp, Wallet, MapPin, Plane } from "lucide-react";

import WhatWeDoSection from "./components/WhatWeDoSection";
import HowToUseSection from "./components/HowToUseSection";
import PricingSection from "./components/PricingSection";

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
      {/* Header */}
    
      {/* test  */}
      {/* test case3 */}

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
              Everything a solo entrepreneur needs to create quotes, manage bookings, and scale a travel business — starting from just ₹999/month.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => window.location.href='https://dashboard.infinitepackages.com/auth'}
                className="bg-gradient-to-r from-[#d12a2f] to-[#e53935] hover:from-[#b92529] hover:to-[#c62828] text-white px-8 py-4 rounded-full font-black text-lg shadow-[0_10px_20px_rgba(209,42,47,0.2)] hover:shadow-[0_15px_30px_rgba(209,42,47,0.3)] transition-all transform hover:-translate-y-1 w-full sm:w-auto"
              >
                Get Started
              </button>
              <button className="bg-white border-2 border-gray-200 hover:border-[#008cff] text-gray-700 hover:text-[#008cff] px-8 py-4 rounded-full font-black text-lg transition-all shadow-sm w-full sm:w-auto">
                See How It Works
              </button>
            </div>
            
            <p className="mt-6 text-sm font-medium text-gray-500">No credit card required &bull; Cancel anytime</p>

            {/* SaaS Dashboard Mockup */}
            <div className="mt-16 mx-auto max-w-5xl relative">
              <div className="rounded-2xl bg-white p-2 shadow-[0_20px_50px_-12px_rgba(0,140,255,0.15)] border border-gray-100 relative transform transition-transform duration-500 hover:scale-[1.02]">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#f4f7f9] rounded-2xl z-10 pointer-events-none opacity-40"></div>
                <div className="rounded-xl overflow-hidden border border-gray-100 bg-gray-50 flex flex-col items-center justify-center aspect-[16/9] relative text-left">
                  {/* Browser/Window Header */}
                  <div className="w-full h-10 bg-[#f8f9fa] border-b border-gray-200 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                    <div className="ml-4 flex-1 h-5 bg-white border border-gray-200 rounded-md max-w-xs mx-auto flex items-center px-2">
                       <span className="text-[10px] text-gray-400 font-mono">dashboard.infinitepackages.com</span>
                    </div>
                  </div>
                  
                  {/* Dashboard Layout */}
                  <div className="w-full h-full flex">
                     {/* Sidebar */}
                     <div className="w-48 border-r border-gray-200 bg-white flex flex-col gap-2 py-6 px-4 hidden sm:flex z-10">
                        <div className="flex items-center gap-2 mb-6 px-2">
                           <div className="w-6 h-6 bg-gradient-to-r from-[#008cff] to-[#00cefc] rounded-md flex items-center justify-center shadow-sm">
                              <span className="text-white text-[10px] font-black">IP</span>
                           </div>
                           <span className="font-black text-sm text-[#041422] tracking-tight">Infinite</span>
                        </div>
                        
                        <div className="text-xs font-bold bg-[#e5f3ff] text-[#008cff] py-2 px-3 rounded-lg flex items-center gap-2">
                           <LayoutDashboard className="w-4 h-4" /> Dashboard
                        </div>
                        <div className="text-xs font-bold text-gray-500 hover:text-gray-900 hover:bg-gray-50 py-2 px-3 rounded-lg flex items-center gap-2 transition-colors cursor-pointer">
                           <Briefcase className="w-4 h-4" /> Bookings
                        </div>
                        <div className="text-xs font-bold text-gray-500 hover:text-gray-900 hover:bg-gray-50 py-2 px-3 rounded-lg flex items-center gap-2 transition-colors cursor-pointer">
                           <FileText className="w-4 h-4" /> Quotations
                        </div>
                        <div className="text-xs font-bold text-gray-500 hover:text-gray-900 hover:bg-gray-50 py-2 px-3 rounded-lg flex items-center gap-2 transition-colors cursor-pointer">
                           <Users className="w-4 h-4" /> Customers
                        </div>
                        <div className="text-xs font-bold text-gray-500 hover:text-gray-900 hover:bg-gray-50 py-2 px-3 rounded-lg flex items-center gap-2 transition-colors cursor-pointer mt-2">
                           <Settings className="w-4 h-4" /> Settings
                        </div>
                        
                        <div className="mt-auto rounded-xl bg-gradient-to-br from-[#008cff]/10 to-[#008cff]/5 border border-[#008cff]/20 p-4 flex flex-col justify-end relative overflow-hidden group cursor-pointer">
                           <div className="absolute -right-4 -top-4 w-12 h-12 bg-[#008cff]/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                           <span className="text-[10px] font-black tracking-wider text-[#008cff] uppercase mb-1 z-10">Pro Plan</span>
                           <span className="text-xs font-medium text-gray-600 z-10">14 days left</span>
                           <div className="w-full h-1.5 bg-gray-200 rounded-full mt-2 overflow-hidden z-10">
                              <div className="w-[60%] h-full bg-[#008cff] rounded-full"></div>
                           </div>
                        </div>
                     </div>
                     
                     {/* Main Content */}
                     <div className="flex-1 p-6 flex flex-col gap-6 bg-[#f8fafd] overflow-hidden">
                        {/* Metrics Row */}
                        <div className="flex gap-4">
                            {/* Revenue Card */}
                            <div className="flex-1 h-28 rounded-xl bg-white border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,140,255,0.05)] p-4 flex flex-col relative overflow-hidden group hover:shadow-[0_8px_30px_-4px_rgba(0,140,255,0.15)] transition-all">
                               <div className="absolute -right-2 -top-2 w-16 h-16 bg-gradient-to-br from-[#008cff]/10 to-[#00cefc]/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                               <div className="text-xs font-bold text-gray-500 flex items-center justify-between z-10 mb-1">
                                  Monthly Revenue
                                  <Wallet className="w-4 h-4 text-[#008cff]" />
                               </div>
                               <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#008cff] to-[#00cefc] tracking-tight z-10 mt-1">
                                  ₹8,45,000
                               </div>
                               <div className="text-[10px] font-bold text-[#00ab6b] flex items-center bg-[#00ab6b]/10 w-fit px-1.5 py-0.5 rounded mt-auto z-10">
                                  <TrendingUp className="w-3 h-3 mr-1" /> +24.5% vs last month
                               </div>
                            </div>
                            
                            {/* Bookings Card */}
                            <div className="flex-1 h-28 rounded-xl bg-white border border-gray-100 shadow-[0_4px_20px_-4px_rgba(209,42,47,0.05)] p-4 flex flex-col relative overflow-hidden group hover:shadow-[0_8px_30px_-4px_rgba(209,42,47,0.1)] transition-all">
                               <div className="absolute -right-2 -top-2 w-16 h-16 bg-gradient-to-br from-[#d12a2f]/10 to-[#e53935]/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                               <div className="text-xs font-bold text-gray-500 flex items-center justify-between z-10 mb-1">
                                  Active Quotes
                                  <FileText className="w-4 h-4 text-[#d12a2f]" />
                               </div>
                               <div className="text-2xl font-black text-[#041422] tracking-tight z-10 mt-1">
                                  142
                               </div>
                               <div className="text-[10px] font-bold text-gray-500 flex items-center mt-auto z-10">
                                  <span className="w-2 h-2 rounded-full bg-[#ffbd2e] mr-1.5 animate-pulse"></span>
                                  12 pending follow-ups
                               </div>
                            </div>
                            
                            {/* Live Departure Card */}
                            <div className="flex-1 h-28 rounded-xl bg-gradient-to-br from-[#041422] to-[#0a233b] shadow-lg p-4 flex flex-col relative overflow-hidden group hidden md:flex text-white">
                               <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                               <div className="text-xs font-bold text-blue-200/60 uppercase tracking-widest z-10 mb-1">
                                  Next Departure
                               </div>
                               <div className="text-sm font-black text-white leading-tight z-10 truncate mt-1">
                                  Dubai Family Package
                               </div>
                               <div className="text-xs text-blue-100 font-medium z-10 mt-0.5">
                                  Sharma Family (4 Pax)
                               </div>
                               <div className="text-[10px] font-bold text-[#00cefc] bg-[#008cff]/20 w-fit px-2 py-1 rounded-full mt-auto z-10 flex items-center border border-[#008cff]/30">
                                  <Plane className="w-3 h-3 mr-1.5" /> Departs in 2 Days
                               </div>
                            </div>
                        </div>
                        
                        {/* Chart / List Row */}
                        <div className="flex-1 flex gap-4 h-32">
                           {/* Growth Chart */}
                           <div className="flex-[2] rounded-xl bg-white border border-gray-100 shadow-sm p-4 flex flex-col relative overflow-hidden group">
                              <div className="flex justify-between items-center mb-3 text-left">
                                  <div className="text-xs font-black text-[#041422] uppercase tracking-wider">Revenue Growth</div>
                                  <div className="text-[9px] font-bold bg-gray-100 text-gray-500 px-2 py-0.5 rounded uppercase">This Year</div>
                              </div>
                              <div className="flex-1 border-b border-l border-gray-100 flex items-end gap-3 p-1 px-4 relative">
                                  {/* Y-axis labels */}
                                  <div className="absolute -left-1 top-2 text-[8px] text-gray-400 font-bold">10L</div>
                                  <div className="absolute -left-1 top-[50%] -translate-y-[50%] text-[8px] text-gray-400 font-bold">5L</div>
                                  
                                  {/* Fake Bars with Data Tooltips */}
                                  <div className="flex-1 flex flex-col justify-end h-full items-center group/bar cursor-pointer">
                                      <div className="w-full bg-[#008cff]/20 rounded-t-sm h-[30%] group-hover/bar:bg-[#008cff]/40 transition-colors relative"></div>
                                      <span className="text-[8px] font-bold text-gray-400 mt-1 hidden sm:block">Jan</span>
                                  </div>
                                  <div className="flex-1 flex flex-col justify-end h-full items-center group/bar cursor-pointer">
                                      <div className="w-full bg-[#008cff]/20 rounded-t-sm h-[40%] group-hover/bar:bg-[#008cff]/40 transition-colors relative"></div>
                                      <span className="text-[8px] font-bold text-gray-400 mt-1 hidden sm:block">Feb</span>
                                  </div>
                                  <div className="flex-1 flex flex-col justify-end h-full items-center group/bar cursor-pointer">
                                      <div className="w-full bg-[#008cff] rounded-t-sm h-[75%] shadow-[0_0_10px_rgba(0,140,255,0.3)] relative">
                                          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#041422] text-white text-[8px] font-bold py-1 px-1.5 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap z-20">₹6.4L</div>
                                      </div>
                                      <span className="text-[8px] font-black text-[#041422] mt-1 hidden sm:block">Mar</span>
                                  </div>
                                  <div className="flex-1 flex flex-col justify-end h-full items-center group/bar cursor-pointer">
                                      <div className="w-full bg-[#008cff]/20 rounded-t-sm h-[50%] group-hover/bar:bg-[#008cff]/40 transition-colors relative"></div>
                                      <span className="text-[8px] font-bold text-gray-400 mt-1 hidden sm:block">Apr</span>
                                  </div>
                                  <div className="flex-1 flex flex-col justify-end h-full items-center group/bar cursor-pointer">
                                      <div className="w-full bg-[#008cff]/20 rounded-t-sm h-[45%] group-hover/bar:bg-[#008cff]/40 transition-colors relative"></div>
                                      <span className="text-[8px] font-bold text-gray-400 mt-1 hidden sm:block">May</span>
                                  </div>
                                  <div className="flex-1 flex flex-col justify-end h-full items-center group/bar cursor-pointer">
                                      <div className="w-full bg-[#d12a2f]/80 rounded-t-sm h-[90%] shadow-[0_0_10px_rgba(209,42,47,0.3)] relative z-10">
                                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#d12a2f] text-white text-[8px] font-bold py-1 px-1.5 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap z-20">₹8.45L</div>
                                      </div>
                                      <span className="text-[8px] font-black text-[#d12a2f] mt-1 hidden sm:block">Jun</span>
                                  </div>
                              </div>
                           </div>
                           
                           {/* Recent Queries List */}
                           <div className="flex-1 rounded-xl bg-white border border-gray-100 shadow-sm p-4 flex flex-col hidden lg:flex text-left relative overflow-hidden">
                              <div className="text-xs font-black text-[#041422] uppercase tracking-wider mb-3">Recent Leads</div>
                              <div className="flex flex-col gap-2.5 overflow-hidden">
                                <div className="rounded-lg bg-gray-50 border border-gray-100 p-2 flex items-center gap-3 hover:bg-[#f8fafd] transition-colors cursor-pointer group">
                                  <div className="w-8 h-8 rounded-full bg-[#e5f3ff] text-[#008cff] flex items-center justify-center font-black text-xs shrink-0">AS</div>
                                  <div className="flex-1 min-w-0">
                                    <div className="text-xs font-bold text-gray-900 truncate group-hover:text-[#008cff] transition-colors">Amit Singh</div>
                                    <div className="text-[9px] text-gray-500 font-medium truncate flex items-center mt-0.5"><MapPin className="w-2.5 h-2.5 mr-0.5 inline" /> Maldives • Honeymoon</div>
                                  </div>
                                </div>
                                <div className="rounded-lg bg-gray-50 border border-gray-100 p-2 flex items-center gap-3 hover:bg-[#f8fafd] transition-colors cursor-pointer group">
                                  <div className="w-8 h-8 rounded-full bg-[#fff0f0] text-[#d12a2f] flex items-center justify-center font-black text-xs shrink-0">RJ</div>
                                  <div className="flex-1 min-w-0">
                                    <div className="text-xs font-bold text-gray-900 truncate group-hover:text-[#d12a2f] transition-colors">Radhika Joshi</div>
                                    <div className="text-[9px] text-gray-500 font-medium truncate flex items-center mt-0.5"><MapPin className="w-2.5 h-2.5 mr-0.5 inline" /> Europe • 14 Days</div>
                                  </div>
                                </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>

      <WhatWeDoSection />
      <HowToUseSection />
      <PricingSection />

      {/* Contact Section */}
      <section className="bg-[#041422] text-white py-24 relative overflow-hidden">
        {/* Decorative MMT pattern/bg */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-sans font-extrabold mb-4">
            Contact Us
          </h2>
          <div className="w-16 h-1 bg-[#008cff] mx-auto mb-12 rounded-full"></div>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8 font-light">
            Have questions? We&apos;d love to hear from you. Get in touch with our
            team today.
          </p>
          <button 
            onClick={() => setIsSupportModalOpen(true)}
            className="bg-gradient-to-r from-[#d12a2f] to-[#e53935] hover:from-[#b92529] hover:to-[#c62828] text-white px-8 py-3.5 rounded-md font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            Send us a Message
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#020b14] text-gray-400 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-black text-white mb-4 tracking-wide">
                <span className="text-[#008cff]">Infinite</span> Packages
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                Build your travel business without quitting your job. The most trusted software for modern travel agents.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-[#008cff] transition font-medium"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-[#008cff] transition font-medium"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-[#008cff] transition font-medium"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-[#008cff] transition font-medium"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/terms"
                    className="text-sm text-gray-400 hover:text-[#008cff] transition font-medium"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy"
                    className="text-sm text-gray-400 hover:text-[#008cff] transition font-medium"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800/50 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm">
              © 2025 Infinite Packages - All Rights Reserved.
            </p>
            <p className="text-sm mt-4 md:mt-0 flex items-center">
              Powered by <span className="font-bold text-white ml-1">Infinite Packages</span>
            </p>
          </div>
        </div>
      </footer>

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
                  <h4 className="text-xl font-black text-gray-900 mb-2">Message Sent!</h4>
                  <p className="text-gray-500 font-medium text-sm">We&apos;ve received your message and our support team will email you shortly.</p>
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
                      className="w-full bg-gradient-to-r from-[#d12a2f] to-[#e53935] hover:from-[#b92529] hover:to-[#c62828] disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white font-black py-3.5 px-6 rounded-xl transition-all shadow-md flex justify-center items-center h-12"
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

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  Smartphone, 
  Globe, 
  Check, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  Layers, 
  CreditCard, 
  Search, 
  CheckCircle2, 
  HelpCircle, 
  Send,
  Loader2,
  Calendar,
  Lock,
  ChevronRight,
  TrendingUp,
  Laptop
} from 'lucide-react';
import Footer from '../components/Footer';

export default function ServicesPage() {
  // Consultation form state
  const [formState, setFormState] = useState({
    agencyName: '',
    contactPerson: '',
    phone: '',
    email: '',
    serviceType: 'Custom Travel Agency Website',
    requirements: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const whatsappNumber = '918882414703';
  const whatsappUrl = (messageText: string) => 
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch('/api/support', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState)
      });
      await new Promise(res => setTimeout(res, 800));
      setIsSuccess(true);
    } catch (err) {
      console.error(err);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafd] text-gray-900 selection:bg-[#E0A23B]/30 selection:text-black">
      
      {/* ========================================================
          HERO SECTION
          ======================================================== */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#f4f8f7] via-[#f8fafd] to-white border-b border-gray-100">
        {/* Glow ambient backdrops */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-[#0E3B34]/10 rounded-full blur-[130px] opacity-75 pointer-events-none"></div>
        <div className="absolute top-1/3 right-[-5%] w-[600px] h-[600px] bg-[#E0A23B]/10 rounded-full blur-[120px] opacity-60 pointer-events-none"></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10">
          
          {/* Breadcrumb / Top Pill */}
          <div className="inline-flex items-center gap-2 bg-white border border-[#0E3B34]/20 text-[#0E3B34] px-5 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide mb-6 shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E0A23B] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E0A23B]"></span>
            </span>
            Everything Your Travel Business Needs Under One Roof
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black leading-tight sm:leading-none text-gray-900 mb-6 tracking-tight max-w-5xl mx-auto">
            Our Core Services for Modern <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E3B34] via-[#124d44] to-[#E0A23B]">
              Travel Agencies & Tour Operators
            </span>
          </h1>

          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto font-medium mb-8 leading-relaxed">
            We deliver the 3 essential pillars of modern travel commerce: an ultra-fast <strong className="text-gray-900 font-bold">Web Operations Dashboard</strong>, an <strong className="text-gray-900 font-bold">Android Mobile App</strong> (bundled together at ₹1,999), and <strong className="text-gray-900 font-bold">Custom Travel Agency Websites</strong> built to turn online visitors into paying clients.
          </p>

          {/* Quick Jump Action Pills */}
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto mb-10">
            <button 
              onClick={() => scrollToSection('service-dashboard')}
              className="bg-white border border-gray-200 hover:border-[#0E3B34] text-gray-800 px-4 py-2 rounded-full text-xs font-bold transition-all shadow-2xs hover:shadow-sm flex items-center gap-1.5"
            >
              <LayoutDashboard className="w-3.5 h-3.5 text-[#0E3B34]" /> 1. Web Dashboard
            </button>
            <button 
              onClick={() => scrollToSection('service-mobile')}
              className="bg-white border border-[#E0A23B]/60 text-gray-800 px-4 py-2 rounded-full text-xs font-bold transition-all shadow-2xs hover:shadow-sm flex items-center gap-1.5"
            >
              <Smartphone className="w-3.5 h-3.5 text-[#E0A23B]" /> 2. Mobile App (₹1,999 Bundle)
            </button>
            <button 
              onClick={() => scrollToSection('service-website')}
              className="bg-white border border-gray-200 hover:border-[#0E3B34] text-gray-800 px-4 py-2 rounded-full text-xs font-bold transition-all shadow-2xs hover:shadow-sm flex items-center gap-1.5"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-600" /> 3. Custom Agency Website
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="bg-[#0E3B34] text-white px-4 py-2 rounded-full text-xs font-bold transition-all shadow-2xs hover:bg-[#124d44] flex items-center gap-1.5"
            >
              <CreditCard className="w-3.5 h-3.5 text-[#E0A23B]" /> Pricing & Plans
            </button>
            <button 
              onClick={() => scrollToSection('connect')}
              className="bg-gradient-to-r from-[#E0A23B] to-[#F1B855] text-black px-4 py-2 rounded-full text-xs font-black transition-all shadow-2xs hover:brightness-105 flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" /> Connect With Us
            </button>
          </div>

          {/* Value highlights strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-gray-200/60 text-left">
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-xs p-3.5 rounded-2xl border border-gray-100 shadow-2xs">
              <div className="w-9 h-9 rounded-xl bg-[#0E3B34]/10 text-[#0E3B34] flex items-center justify-center font-bold">
                <Zap className="w-4 h-4 text-[#E0A23B]" />
              </div>
              <div>
                <span className="block text-xs font-black text-gray-900">1-Min Quotes</span>
                <span className="block text-[11px] text-gray-500">Day-wise branded PDFs</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-xs p-3.5 rounded-2xl border border-gray-100 shadow-2xs">
              <div className="w-9 h-9 rounded-xl bg-[#0E3B34]/10 text-[#0E3B34] flex items-center justify-center font-bold">
                <Smartphone className="w-4 h-4 text-[#0E3B34]" />
              </div>
              <div>
                <span className="block text-xs font-black text-gray-900">Dashboard + App</span>
                <span className="block text-[11px] text-[#A86F12] font-bold">Combined in ₹1,999</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-xs p-3.5 rounded-2xl border border-gray-100 shadow-2xs">
              <div className="w-9 h-9 rounded-xl bg-[#0E3B34]/10 text-[#0E3B34] flex items-center justify-center font-bold">
                <Globe className="w-4 h-4 text-emerald-600" />
              </div>
              <div>
                <span className="block text-xs font-black text-gray-900">Custom Website</span>
                <span className="block text-[11px] text-gray-500">Direct CRM hookup</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-xs p-3.5 rounded-2xl border border-gray-100 shadow-2xs">
              <div className="w-9 h-9 rounded-xl bg-[#0E3B34]/10 text-[#0E3B34] flex items-center justify-center font-bold">
                <ShieldCheck className="w-4 h-4 text-[#0E3B34]" />
              </div>
              <div>
                <span className="block text-xs font-black text-gray-900">0% Commission</span>
                <span className="block text-[11px] text-gray-500">Keep 100% margin</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          SERVICE 1: WEB OPERATIONS DASHBOARD
          ======================================================== */}
      <section id="service-dashboard" className="py-20 lg:py-28 bg-white border-b border-gray-100 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Content Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-[#0E3B34]/10 text-[#0E3B34] px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-4">
                <LayoutDashboard className="w-4 h-4" /> Service 01 • Cloud Operations
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black text-gray-900 tracking-tight leading-tight mb-4">
                Cloud Web Dashboard & <br />
                <span className="text-[#0E3B34]">Quotation Engine Studio</span>
              </h2>

              {/* Price Callout Badge */}
              <div className="inline-flex items-baseline gap-2 bg-emerald-50 border border-emerald-200/80 px-4 py-2 rounded-xl mb-6">
                <span className="text-xs font-bold text-gray-500 uppercase">Included in Package:</span>
                <span className="text-xl font-black text-[#0E3B34]">₹1,999</span>
                <span className="text-xs font-semibold text-emerald-800">(Bundled together with Android Mobile App)</span>
              </div>

              <p className="text-base text-gray-600 font-medium leading-relaxed mb-8">
                The core operations workstation for modern travel advisors and DMC operators. Replace manual Word docs and fragile Excel formulas with an automated travel sales machine. Build multi-city day-wise itineraries, calculate net costs vs gross client totals with locked profit margins, and export client-ready PDFs in less than 60 seconds.
              </p>

              {/* Feature Highlights Grid */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { title: "Day-Wise Dynamic Itinerary Builder", desc: "Add hotels, daily transport, sightseeing spots, and meal inclusions with high-res destination visuals." },
                  { title: "Locked Margin Protection", desc: "Ensure sales executives never quote below your minimum target profitability." },
                  { title: "Lead & Pipeline Management", desc: "Track every inquiry from initial WhatsApp hello to quote sent, payment received, and voucher issued." },
                  { title: "Group Pax & Split Billing", desc: "Seamlessly handle multi-room family bookings, group manifests, and multi-installment schedules." },
                  { title: "1-Click PDF & WhatsApp Dispatch", desc: "Export professional white-labeled PDFs with your agency branding, payment QR codes, and terms." },
                  { title: "Automated Expiration Timers", desc: "Put urgency into client decisions with automatic quote countdowns and supplier price validity locks." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#f8fafd] border border-gray-100 p-4 rounded-2xl">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-5 h-5 rounded-full bg-[#0E3B34]/10 text-[#0E3B34] flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5" strokeWidth={3} />
                      </div>
                      <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                    </div>
                    <p className="text-xs text-gray-500 leading-normal pl-7 font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://dashboard.infinitepackages.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#0E3B34] to-[#1C6C5E] hover:from-[#1C6C5E] hover:to-[#0E3B34] text-white px-7 py-3.5 rounded-xl font-black text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                >
                  <span>Launch Web Dashboard</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3.5 rounded-xl font-bold text-sm transition-all"
                >
                  View Bundle Pricing (₹1,999)
                </button>
              </div>

            </div>

            {/* Interactive Vector / UI Showcase Column */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-[#041422] to-[#0A2620] p-6 sm:p-8 rounded-[2.5rem] border border-[#0E3B34]/60 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#E0A23B]/10 rounded-full blur-3xl pointer-events-none"></div>

                {/* Pseudo Dashboard Browser Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-gray-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    <span className="text-xs text-gray-400 font-mono ml-2">dashboard.infinitepackages.com</span>
                  </div>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded-full font-black uppercase tracking-wider">
                    Live Engine
                  </span>
                </div>

                {/* Dashboard Mockup Content */}
                <div className="space-y-4">
                  {/* Lead Pipeline Bar */}
                  <div className="bg-[#0E3B34]/50 border border-[#0E3B34] rounded-2xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-black text-white uppercase tracking-wider">Active Pipeline</span>
                      <span className="text-xs font-bold text-[#E0A23B]">24 Inquiries Today</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-bold">
                      <div className="bg-white/10 text-emerald-200 py-1.5 rounded-lg">8 New</div>
                      <div className="bg-[#E0A23B]/20 text-[#E0A23B] py-1.5 rounded-lg">11 Quoted</div>
                      <div className="bg-emerald-500/20 text-emerald-300 py-1.5 rounded-lg">4 Deposit</div>
                      <div className="bg-blue-500/20 text-blue-300 py-1.5 rounded-lg">1 Closed</div>
                    </div>
                  </div>

                  {/* Sample Proposal Card */}
                  <div className="bg-white text-gray-900 rounded-2xl p-4 shadow-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="text-[10px] text-gray-400 uppercase font-black">Quote #QQ-8092</span>
                        <h4 className="text-sm font-black text-gray-900">Switzerland & Paris 7N Luxury Tour</h4>
                      </div>
                      <span className="text-xs font-black text-[#0E3B34] bg-[#0E3B34]/10 px-2.5 py-1 rounded-md">
                        ₹3,45,000
                      </span>
                    </div>

                    <div className="space-y-1.5 text-xs text-gray-600 mb-3">
                      <div className="flex items-center gap-1.5 text-[11px]">
                        <Clock className="w-3.5 h-3.5 text-gray-400" />
                        <span>Day 1-3 Zurich • Day 4-5 Interlaken • Day 6-7 Paris</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-1 rounded">
                        <span>Locked Agency Margin (22%)</span>
                        <span className="font-mono font-bold">+₹75,900 Profit</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-[11px]">
                      <span className="text-gray-400 font-medium">Valid until Oct 29</span>
                      <span className="text-[#0E3B34] font-bold flex items-center gap-1">
                        PDF Ready <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      </span>
                    </div>
                  </div>

                  {/* Value callout box */}
                  <div className="bg-gradient-to-r from-[#E0A23B]/20 to-transparent border border-[#E0A23B]/40 rounded-2xl p-3.5 text-left flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#E0A23B] text-black flex items-center justify-center font-black flex-shrink-0">
                      ⚡
                    </div>
                    <div>
                      <span className="text-xs font-black text-white block">Speed = Conversions</span>
                      <span className="text-[11px] text-gray-300 block">Travel agents using QuickQuote quote 6x faster than competitors.</span>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================
          SERVICE 2: ANDROID MOBILE APP
          ======================================================== */}
      <section id="service-mobile" className="py-20 lg:py-28 bg-[#f8fafd] border-b border-gray-100 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Phone Screen Mockup Column */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
              <div className="relative w-full max-w-xs">
                
                {/* Glowing background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#E0A23B]/20 rounded-full blur-3xl pointer-events-none"></div>

                {/* Device Frame */}
                <div className="border-[9px] border-gray-900 rounded-[3rem] bg-gray-900 relative shadow-[0_25px_60px_rgba(14,59,52,0.3)] overflow-hidden aspect-[9/19] w-[290px] sm:w-[320px] mx-auto">
                  {/* Camera notch */}
                  <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 z-20 flex justify-center">
                    <div className="w-1/3 h-4 bg-black rounded-b-xl"></div>
                  </div>

                  {/* Screen Content */}
                  <div className="w-full h-full bg-[#f8fafd] flex flex-col pt-7 text-left">
                    {/* Header */}
                    <div className="px-4 py-2.5 bg-white border-b border-gray-100 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-lg bg-[#0E3B34] text-white flex items-center justify-center font-black text-[10px]">
                          QQ
                        </div>
                        <span className="text-xs font-black text-[#0E3B34]">QuickQuote Mobile</span>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    </div>

                    {/* App Feed */}
                    <div className="p-3.5 space-y-3 flex-grow overflow-hidden">
                      {/* Live Sync Banner */}
                      <div className="bg-gradient-to-r from-[#0E3B34] to-[#124d44] text-white p-3 rounded-2xl shadow-xs">
                        <span className="text-[9px] text-[#E0A23B] font-bold uppercase tracking-wider block">Live Cloud Sync</span>
                        <span className="text-lg font-black text-white block">₹12,45,000 Pipeline</span>
                        <span className="text-[9px] text-emerald-200">14 Bookings active &bull; Sync with Web</span>
                      </div>

                      {/* WhatsApp Share Card */}
                      <div className="bg-white rounded-2xl border border-gray-100 p-3 shadow-2xs">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-bold text-gray-900">Goa 3N Beach Villa</span>
                          <span className="text-[10px] font-black text-[#E0A23B] bg-[#E0A23B]/10 px-1.5 py-0.5 rounded">₹48,000</span>
                        </div>
                        <p className="text-[10px] text-gray-400 mb-2">Quote ready to share with Mr. Sharma</p>
                        <button className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-1.5 rounded-lg text-xs font-black flex items-center justify-center gap-1.5 shadow-2xs">
                          <MessageCircle className="w-3.5 h-3.5" /> Share on WhatsApp
                        </button>
                      </div>

                      {/* Notification Item */}
                      <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-2.5 text-[10px]">
                        <span className="font-bold text-emerald-800 block">Client Viewed Proposal!</span>
                        <span className="text-emerald-700">Client just opened Dubai 5N Itinerary link.</span>
                      </div>
                    </div>

                    {/* Bottom App Nav */}
                    <div className="bg-white border-t border-gray-100 py-2 px-4 flex justify-around text-gray-400 text-[10px] font-bold">
                      <span className="text-[#0E3B34]">Quotes</span>
                      <span>Leads</span>
                      <span>Vouchers</span>
                      <span>Profile</span>
                    </div>

                  </div>

                </div>

              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-[#E0A23B]/20 text-[#A86F12] border border-[#E0A23B]/40 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-4">
                <Smartphone className="w-4 h-4" /> Service 02 • Mobile Sales CRM
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black text-gray-900 tracking-tight leading-tight mb-4">
                Native Android Mobile App <br />
                <span className="text-[#E0A23B]">Sales on the Go, Anywhere</span>
              </h2>

              {/* Price Callout Badge */}
              <div className="inline-flex items-baseline gap-2 bg-gradient-to-r from-[#E0A23B]/20 to-transparent border border-[#E0A23B]/50 px-4 py-2 rounded-xl mb-6">
                <span className="text-xs font-bold text-gray-700 uppercase">Package Inclusion:</span>
                <span className="text-xl font-black text-gray-900">₹1,999</span>
                <span className="text-xs font-bold text-[#A86F12]">(Bundled with Web Dashboard — No Extra Fee!)</span>
              </div>

              <p className="text-base text-gray-600 font-medium leading-relaxed mb-8">
                As a travel agent or tour organizer, you are constantly on the move — meeting clients, visiting hotel partners, or managing airport transfers. The QuickQuote Android Mobile App puts your entire sales CRM in your pocket. Seamlessly syncs with your Web Dashboard in real time so you never miss an inquiry or delay a quote.
              </p>

              {/* Feature Highlights Grid */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { title: "Direct Google Play Store App", desc: "Native, high-performance Android application built for speed and security." },
                  { title: "Real-Time 2-Way Sync", desc: "Quotes built on your laptop immediately show on mobile, and edits on mobile reflect on desktop." },
                  { title: "1-Tap WhatsApp Proposal Sharing", desc: "Send PDF quotation links directly to your WhatsApp contacts with a single tap." },
                  { title: "Instant Lead Push Alerts", desc: "Receive immediate notifications the moment an inquiry comes in or when client views a quote." },
                  { title: "Mobile Voucher & Payment Links", desc: "Generate UPI QR codes, card payment links, and booking vouchers on your phone." },
                  { title: "Works on 4G / 5G / Low Bandwidth", desc: "Optimized data engine that works flawlessly even when traveling in remote destinations." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white border border-gray-200/80 p-4 rounded-2xl shadow-2xs">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-5 h-5 rounded-full bg-[#E0A23B]/20 text-[#A86F12] flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5" strokeWidth={3} />
                      </div>
                      <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                    </div>
                    <p className="text-xs text-gray-500 leading-normal pl-7 font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href="https://play.google.com/store/apps/details?id=com.salesapp.quickquotes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black hover:bg-gray-800 text-white px-6 py-3.5 rounded-xl font-black text-sm shadow-md transition-all flex items-center gap-3 group"
                >
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M3.609 1.814L13.793 12 3.61 22.186A2.298 2.298 0 0 1 3 20.584V3.416c0-.623.232-1.2.609-1.602z" fill="#00E676"/>
                    <path d="M17.438 8.355L4.72 1.077c-.368-.21-.777-.315-1.111-.315l10.184 11.238 3.645-3.645z" fill="#FFD54F"/>
                    <path d="M3.609 23.238c.334 0 .743-.105 1.111-.315l12.718-7.278-3.645-3.645L3.609 23.238z" fill="#FF3D00"/>
                    <path d="M21.365 10.609l-3.927-2.254-3.645 3.645 3.645 3.645 3.927-2.254c.731-.418 1.185-1.196 1.185-2.041 0-.845-.454-1.623-1.185-2.041z" fill="#00B0FF"/>
                  </svg>
                  <div>
                    <span className="block text-[9px] uppercase tracking-wider text-gray-400">Download on</span>
                    <span className="block text-sm font-black">Google Play Store</span>
                  </div>
                </a>

                <button
                  onClick={() => scrollToSection('pricing')}
                  className="bg-white border-2 border-gray-200 hover:border-[#E0A23B] text-gray-800 px-6 py-3.5 rounded-xl font-bold text-sm transition-all"
                >
                  See ₹1,999 Bundle Details
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================
          SERVICE 3: CUSTOM TRAVEL AGENCY WEBSITE
          ======================================================== */}
      <section id="service-website" className="py-20 lg:py-28 bg-white border-b border-gray-100 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Content Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-800 border border-emerald-500/20 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-4">
                <Globe className="w-4 h-4" /> Service 03 • Brand & Direct Sales
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black text-gray-900 tracking-tight leading-tight mb-4">
                Custom Travel Agency Website <br />
                <span className="text-[#0E3B34]">Your 24/7 Digital Storefront</span>
              </h2>

              {/* Price Callout Badge */}
              <div className="inline-flex items-baseline gap-2 bg-[#0E3B34]/10 border border-[#0E3B34]/20 px-4 py-2 rounded-xl mb-6">
                <span className="text-xs font-bold text-gray-600 uppercase">Pricing & Setup:</span>
                <span className="text-xl font-black text-[#0E3B34]">Connect With Us</span>
                <span className="text-xs font-semibold text-gray-600">(Customized to your agency requirements & inventory scale)</span>
              </div>

              <p className="text-base text-gray-600 font-medium leading-relaxed mb-8">
                In today's digital era, having a professional website establishes trust and captures high-value travelers searching online. We build bespoke, lightning-fast travel agency websites hooked directly into your QuickQuote CRM. When travelers submit an inquiry or book a package on your website, it instantly appears in your operations dashboard!
              </p>

              {/* Feature Highlights Grid */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { title: "Custom Domain & Enterprise Hosting", desc: "Deployed on your own domain (e.g. www.YourTravelAgency.com) with high-speed global CDN and free SSL security." },
                  { title: "Direct CRM Lead Integration", desc: "No manual data entry! Website quote requests and lead forms feed directly into your QuickQuote pipeline." },
                  { title: "Holiday Packages & Destinations", desc: "Showcase signature domestic & international packages with detailed day-wise plans, hotel choices, and photo galleries." },
                  { title: "Online Payment Gateway", desc: "Accept booking deposits, token payments, and card transactions via Razorpay, UPI QR, and net banking." },
                  { title: "Travel SEO Architecture", desc: "Engineered to rank on Google search for destination keywords (e.g. 'Best Kashmir Packages', 'Dubai Holiday Agency')." },
                  { title: "WhatsApp Direct Floating Button", desc: "Turn website visitors into instant WhatsApp conversations with one click." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#f8fafd] border border-gray-100 p-4 rounded-2xl">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-700 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5" strokeWidth={3} />
                      </div>
                      <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                    </div>
                    <p className="text-xs text-gray-500 leading-normal pl-7 font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('connect')}
                  className="bg-gradient-to-r from-[#0E3B34] to-[#1C6C5E] hover:from-[#1C6C5E] hover:to-[#0E3B34] text-white px-7 py-3.5 rounded-xl font-black text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#E0A23B]" />
                  <span>Connect for Custom Website Quote</span>
                </button>
                <a
                  href={whatsappUrl("Hi! I want to discuss getting a custom website for my travel agency.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3.5 rounded-xl font-black text-sm shadow-sm transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Interactive Browser Website Mockup Column */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl border-2 border-gray-200 shadow-xl overflow-hidden">
                {/* Browser bar */}
                <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                  </div>
                  <div className="bg-white border border-gray-200 px-3 py-1 rounded-md text-[11px] font-mono text-gray-500 flex-grow text-center flex items-center justify-center gap-1.5">
                    <Lock className="w-3 h-3 text-emerald-600" />
                    <span>https://www.yourtravelagency.com</span>
                  </div>
                </div>

                {/* Pseudo Website Content */}
                <div className="p-5 bg-gradient-to-b from-[#f8fafd] to-white space-y-4 text-left">
                  {/* Website Brand Header */}
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-[#0E3B34] text-white flex items-center justify-center font-black text-xs">
                        TA
                      </div>
                      <span className="font-black text-sm text-gray-900">Royal Wanderlust Travels</span>
                    </div>
                    <span className="text-[10px] bg-[#E0A23B]/20 text-black px-2.5 py-0.5 rounded-full font-bold">
                      Book Online
                    </span>
                  </div>

                  {/* Hero Banner Mockup */}
                  <div className="bg-gradient-to-r from-[#0E3B34] to-[#1C6C5E] text-white p-4 rounded-2xl relative overflow-hidden">
                    <span className="text-[9px] uppercase tracking-wider text-[#E0A23B] font-black block">Featured Departure</span>
                    <h5 className="text-base font-black text-white my-1">Magical Kashmir & Ladakh 6N/7D</h5>
                    <p className="text-[10px] text-emerald-100 mb-3">Houseboats, Gulmarg Gondola & Shikara Ride</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-black text-[#E0A23B]">From ₹24,999 / person</span>
                      <span className="text-[10px] bg-white text-gray-900 font-bold px-2 py-1 rounded-md">View Itinerary</span>
                    </div>
                  </div>

                  {/* Direct Inquiry Hook Box */}
                  <div className="bg-emerald-50/80 border border-emerald-200/80 rounded-2xl p-3.5">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Zap className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-xs font-black text-gray-900">Direct CRM Integration</span>
                    </div>
                    <p className="text-[11px] text-gray-600 leading-normal mb-2">
                      When client submits inquiry on this website, it appears automatically in your QuickQuote Dashboard with zero manual work.
                    </p>
                    <div className="flex items-center justify-between text-[10px] font-bold text-emerald-800 bg-white p-2 rounded-lg border border-emerald-100">
                      <span>Website Form Submitted</span>
                      <span>⚡ Instant CRM Sync</span>
                    </div>
                  </div>

                  {/* Agency Features row */}
                  <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-bold text-gray-600">
                    <div className="bg-gray-50 border border-gray-100 p-2 rounded-xl">Custom Domain</div>
                    <div className="bg-gray-50 border border-gray-100 p-2 rounded-xl">UPI / QR Checkout</div>
                    <div className="bg-gray-50 border border-gray-100 p-2 rounded-xl">Google SEO</div>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================
          PRICING & PACKAGES BREAKDOWN
          ======================================================== */}
      <section id="pricing" className="py-20 lg:py-28 bg-[#f8fafd] border-b border-gray-100 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-[#0E3B34]/10 text-[#0E3B34] border border-[#0E3B34]/20 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-4">
              <CreditCard className="w-4 h-4 text-[#E0A23B]" /> Transparent Pricing
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black text-gray-900 tracking-tight leading-tight mb-4">
              Simple, Predictable Packages <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E3B34] to-[#E0A23B]">
                Tailored for Every Agency Stage
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gray-600 font-medium">
              Get the Dashboard and Mobile App bundled together for one transparent price. Need a custom agency website? Connect directly for a personalized quote.
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            
            {/* PLAN 1: BUNDLE - DASHBOARD + MOBILE APP */}
            <div className="bg-gradient-to-b from-[#0E3B34] to-[#08241F] text-white rounded-[2.5rem] p-8 sm:p-10 shadow-2xl border-2 border-[#E0A23B] relative flex flex-col justify-between">
              
              {/* Most Popular Badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#E0A23B] to-[#F1B855] text-black text-[11px] font-black uppercase tracking-widest px-5 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 fill-current" /> Most Popular Bundle
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black text-emerald-200 uppercase tracking-widest">
                    Operational Software Bundle
                  </span>
                  <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full text-xs font-bold text-[#E0A23B]">
                    <LayoutDashboard className="w-3.5 h-3.5" /> + <Smartphone className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                  Dashboard + Mobile App
                </h3>
                <p className="text-xs text-emerald-100/80 font-medium mb-6">
                  Complete travel operations workstation paired with on-the-go mobile sales CRM.
                </p>

                {/* Price Display */}
                <div className="bg-white/10 border border-white/15 rounded-2xl p-6 mb-8 text-left">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-4xl sm:text-5xl font-black text-[#E0A23B]">₹1,999</span>
                    <span className="text-xs font-bold text-emerald-200">/ bundled setup</span>
                  </div>
                  <p className="text-xs text-emerald-100 font-semibold">
                    Includes full Web Dashboard + official Android Mobile App with live cloud sync.
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3.5 mb-8">
                  {[
                    "Complete Web Operations Dashboard access",
                    "Official Android Mobile App (Google Play Store)",
                    "Real-time instant cloud sync between phone & laptop",
                    "1-Minute day-wise PDF quote & itinerary engine",
                    "Lead management pipeline (WhatsApp to confirmed booking)",
                    "Locked profit margins & automatic markup safeguards",
                    "Group bookings, pax manifests & split invoicing",
                    "1-Click proposal sharing directly to client WhatsApp",
                    "Quote expiration timers & client view notifications",
                    "Unlimited itinerary proposals & client records"
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#E0A23B]/20 text-[#E0A23B] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" strokeWidth={3} />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-emerald-50">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <a
                  href="https://dashboard.infinitepackages.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-[#E0A23B] to-[#F1B855] hover:from-[#F1B855] hover:to-[#E0A23B] text-black py-4 px-6 rounded-xl font-black text-base shadow-lg transition-all flex items-center justify-center gap-2 text-center"
                >
                  <span>Start with Dashboard & App (₹1,999)</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.salesapp.quickquotes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 py-2.5 px-4 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 text-center"
                >
                  <span>View Android App on Play Store</span>
                </a>
              </div>

            </div>

            {/* PLAN 2: CUSTOM TRAVEL AGENCY WEBSITE */}
            <div className="bg-white rounded-[2.5rem] p-8 sm:p-10 shadow-lg border border-gray-200/90 flex flex-col justify-between hover:shadow-xl transition-shadow">
              
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-widest border border-emerald-100">
                    Bespoke Web Development
                  </span>
                  <div className="flex items-center gap-1.5 bg-gray-100 px-3 py-1 rounded-full text-xs font-bold text-gray-700">
                    <Globe className="w-3.5 h-3.5 text-emerald-600" /> Agency Brand
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
                  Custom Agency Website
                </h3>
                <p className="text-xs text-gray-500 font-medium mb-6">
                  Turnkey, branded website for your agency with automated CRM lead capture.
                </p>

                {/* Price Display */}
                <div className="bg-[#f8fafd] border border-gray-100 rounded-2xl p-6 mb-8 text-left">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-3xl sm:text-4xl font-black text-[#0E3B34]">Connect With Us</span>
                  </div>
                  <p className="text-xs text-gray-600 font-semibold">
                    Customized quote based on your package catalog scale, domain, and specific integrations.
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3.5 mb-8">
                  {[
                    "Custom domain setup (youragency.com / .in / .travel)",
                    "High-converting modern UI built with Next.js/React",
                    "Direct integration with QuickQuote CRM (Zero lead re-entry)",
                    "Tour package catalog & detailed day-wise itinerary viewer",
                    "Online payment gateway (Razorpay / Stripe / UPI QR)",
                    "High-speed global cloud hosting with enterprise SSL",
                    "Destination SEO architecture for Google organic search rank",
                    "WhatsApp floating button for instant client inquiries",
                    "Content management support for updating packages & banners",
                    "Dedicated technical developer & maintenance support"
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" strokeWidth={3} />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-gray-700">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => scrollToSection('connect')}
                  className="w-full bg-[#0E3B34] hover:bg-[#124d44] text-white py-4 px-6 rounded-xl font-black text-base shadow-md transition-all flex items-center justify-center gap-2 text-center"
                >
                  <span>Connect for Custom Website Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={whatsappUrl("Hi! I would like to get a quote and consultation for a Custom Travel Agency Website.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 py-2.5 px-4 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 text-center"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================
          DELIVERABLES & COMPARISON MATRIX
          ======================================================== */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-3">
              Deliverables & Feature Matrix
            </h3>
            <p className="text-sm text-gray-500 font-medium">
              See exactly what is included across our Web Dashboard, Android App, and Custom Agency Website.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-gray-200/90 shadow-sm bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#f8fafd] border-b border-gray-200 text-gray-900">
                  <th className="py-4 px-6 text-xs font-black uppercase tracking-wider">Features & Capabilities</th>
                  <th className="py-4 px-5 text-xs font-black uppercase tracking-wider text-[#0E3B34] text-center bg-[#0E3B34]/5">
                    Web Dashboard
                    <span className="block text-[10px] text-gray-500 font-normal">Included in ₹1,999</span>
                  </th>
                  <th className="py-4 px-5 text-xs font-black uppercase tracking-wider text-[#A86F12] text-center bg-[#E0A23B]/10">
                    Android Mobile App
                    <span className="block text-[10px] text-gray-500 font-normal">Included in ₹1,999</span>
                  </th>
                  <th className="py-4 px-5 text-xs font-black uppercase tracking-wider text-emerald-800 text-center bg-emerald-50">
                    Custom Agency Website
                    <span className="block text-[10px] text-gray-500 font-normal">Connect for Setup</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs sm:text-sm font-medium text-gray-700">
                {[
                  { feature: "Day-wise Itinerary & PDF Quoting Engine", d: true, m: true, w: "Public viewer" },
                  { feature: "Lead Pipeline & Inquiry Tracker", d: true, m: true, w: "Automated capture" },
                  { feature: "Profit Margin Locking & Net Rate Rules", d: true, m: true, w: false },
                  { feature: "Real-Time 2-Way Cloud Sync", d: true, m: true, w: true },
                  { feature: "1-Click WhatsApp Proposal Dispatch", d: true, m: true, w: "Floating widget" },
                  { feature: "Group Pax Manifests & Split Invoicing", d: true, m: "View & verify", w: false },
                  { feature: "Mobile Push Notifications for Lead Events", d: false, m: true, w: false },
                  { feature: "Custom Branded Domain (.com / .in / .travel)", d: false, m: false, w: true },
                  { feature: "Client-Facing Tour Package Catalog", d: false, m: false, w: true },
                  { feature: "Integrated Payment Gateway (UPI, Cards)", d: "Payment link generator", m: "Payment link generator", w: "Full checkout" },
                  { feature: "Destination SEO & Google Search Setup", d: false, m: false, w: true },
                  { feature: "0% Commission on Travel Bookings", d: true, m: true, w: true }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/70 transition-colors">
                    <td className="py-3.5 px-6 font-bold text-gray-900">{row.feature}</td>
                    
                    <td className="py-3.5 px-5 text-center bg-[#0E3B34]/5">
                      {typeof row.d === 'boolean' ? (
                        row.d ? <Check className="w-4 h-4 text-emerald-600 mx-auto" strokeWidth={3} /> : <span className="text-gray-300">—</span>
                      ) : (
                        <span className="text-xs font-bold text-[#0E3B34]">{row.d}</span>
                      )}
                    </td>

                    <td className="py-3.5 px-5 text-center bg-[#E0A23B]/10">
                      {typeof row.m === 'boolean' ? (
                        row.m ? <Check className="w-4 h-4 text-emerald-600 mx-auto" strokeWidth={3} /> : <span className="text-gray-300">—</span>
                      ) : (
                        <span className="text-xs font-bold text-amber-900">{row.m}</span>
                      )}
                    </td>

                    <td className="py-3.5 px-5 text-center bg-emerald-50">
                      {typeof row.w === 'boolean' ? (
                        row.w ? <Check className="w-4 h-4 text-emerald-600 mx-auto" strokeWidth={3} /> : <span className="text-gray-300">—</span>
                      ) : (
                        <span className="text-xs font-bold text-emerald-900">{row.w}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* ========================================================
          CONNECT / INQUIRY FORM SECTION
          ======================================================== */}
      <section id="connect" className="py-20 lg:py-28 bg-gradient-to-b from-[#f8fafd] via-white to-[#f4f8f7] scroll-mt-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-[2.5rem] border border-gray-200/90 shadow-2xl overflow-hidden grid lg:grid-cols-12">
            
            {/* Left Contact Details & Quick Channels */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#0E3B34] via-[#124d44] to-[#0A2620] text-white p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#E0A23B]/20 text-[#E0A23B] px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-6">
                  <Sparkles className="w-3.5 h-3.5" /> Engineering & Sales
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight">
                  Connect for Custom Website & Solutions
                </h3>

                <p className="text-xs sm:text-sm text-emerald-100/90 font-medium leading-relaxed mb-8">
                  Looking to build a custom travel website, need tailored layout branding, or want a live walkthrough of the Dashboard & Mobile App? Our team is here to assist.
                </p>

                {/* Direct Contact Channels */}
                <div className="space-y-4 mb-8">
                  <a 
                    href={whatsappUrl("Hi QuickQuote team! I'd like to talk to someone regarding services.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-all border border-white/15"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#25D366] text-white flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[10px] text-emerald-200 font-bold uppercase">WhatsApp Direct</span>
                      <span className="block text-xs font-black text-white">+91 88824 14703</span>
                    </div>
                  </a>

                  <a 
                    href="mailto:support@infinitepackages.com?subject=Inquiry for Travel Agency Services"
                    className="flex items-center gap-3 bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-all border border-white/15"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#E0A23B] text-black flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[10px] text-emerald-200 font-bold uppercase">Email Support</span>
                      <span className="block text-xs font-black text-white">support@infinitepackages.com</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-white/15 text-[11px] text-emerald-200/80">
                ⚡ Typical response time: Under 15 minutes during business hours.
              </div>
            </div>

            {/* Right Interactive Form */}
            <div className="lg:col-span-7 p-8 sm:p-12">
              <h4 className="text-2xl font-black text-gray-900 mb-2">Request Consultation or Quote</h4>
              <p className="text-xs text-gray-500 font-medium mb-6">
                Tell us about your travel agency and requirements. We'll connect with you right away.
              </p>

              {isSuccess ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-16 h-16 bg-[#00ab6b]/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-10 h-10 text-[#00ab6b]" />
                  </div>
                  <h4 className="text-2xl font-black text-gray-900 mb-2">Inquiry Submitted!</h4>
                  <p className="text-sm text-gray-600 max-w-sm font-medium mb-6">
                    Thank you! Our engineering and sales team will reach out to you via WhatsApp or phone shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormState({
                        agencyName: '',
                        contactPerson: '',
                        phone: '',
                        email: '',
                        serviceType: 'Custom Travel Agency Website',
                        requirements: ''
                      });
                    }}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold px-6 py-2.5 rounded-xl text-xs transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-1">
                        Travel Agency Name
                      </label>
                      <input
                        required
                        type="text"
                        value={formState.agencyName}
                        onChange={(e) => setFormState({ ...formState, agencyName: e.target.value })}
                        placeholder="e.g. Skyline Holidays"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm font-medium text-gray-800 focus:border-[#0E3B34] focus:ring-2 focus:ring-[#0E3B34]/20 outline-none transition-all placeholder:text-gray-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-1">
                        Contact Person Name
                      </label>
                      <input
                        required
                        type="text"
                        value={formState.contactPerson}
                        onChange={(e) => setFormState({ ...formState, contactPerson: e.target.value })}
                        placeholder="e.g. Rajesh Kumar"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm font-medium text-gray-800 focus:border-[#0E3B34] focus:ring-2 focus:ring-[#0E3B34]/20 outline-none transition-all placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-1">
                        WhatsApp / Phone Number
                      </label>
                      <input
                        required
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm font-medium text-gray-800 focus:border-[#0E3B34] focus:ring-2 focus:ring-[#0E3B34]/20 outline-none transition-all placeholder:text-gray-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-1">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="rajesh@skylineholidays.com"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm font-medium text-gray-800 focus:border-[#0E3B34] focus:ring-2 focus:ring-[#0E3B34]/20 outline-none transition-all placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-1">
                      Service You Are Interested In
                    </label>
                    <select
                      value={formState.serviceType}
                      onChange={(e) => setFormState({ ...formState, serviceType: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm font-medium text-gray-800 focus:border-[#0E3B34] focus:ring-2 focus:ring-[#0E3B34]/20 outline-none transition-all"
                    >
                      <option value="Custom Travel Agency Website">Custom Travel Agency Website (Connect to Setup)</option>
                      <option value="Dashboard + Mobile App Bundle (₹1,999)">Dashboard + Mobile App Bundle (₹1,999)</option>
                      <option value="Complete Agency Suite (All Three)">Complete Agency Suite (Website + Dashboard + App)</option>
                      <option value="Custom PDF Layout Design">Custom PDF Layout Design Studio</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-1">
                      Specific Requirements / Questions
                    </label>
                    <textarea
                      rows={3}
                      value={formState.requirements}
                      onChange={(e) => setFormState({ ...formState, requirements: e.target.value })}
                      placeholder="Tell us about your agency size, destinations you sell, or website features you need..."
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm font-medium text-gray-800 focus:border-[#0E3B34] focus:ring-2 focus:ring-[#0E3B34]/20 outline-none transition-all resize-none placeholder:text-gray-400"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#0E3B34] to-[#1C6C5E] hover:from-[#1C6C5E] hover:to-[#0E3B34] text-white py-3.5 px-6 rounded-xl font-black text-sm shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-[#E0A23B]" />
                          <span>Submitting Request...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Request</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================
          FREQUENTLY ASKED QUESTIONS
          ======================================================== */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#0E3B34]/10 text-[#0E3B34] px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-4">
              <HelpCircle className="w-4 h-4 text-[#E0A23B]" /> Services FAQ
            </div>
            <h3 className="text-2xl sm:text-4xl font-sans font-black text-gray-900 tracking-tight">
              Frequently Asked Questions About Our Services
            </h3>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Does the Android Mobile App really come with the Dashboard for ₹1,999?",
                a: "Yes! When you subscribe to our ₹1,999 travel agent bundle, you receive full access to both the Web Operations Dashboard (for your laptop/desktop) and the official Android Mobile App. Both platforms sync in real time with the same login credentials."
              },
              {
                q: "Why do I need to connect with you for a Custom Travel Agency Website?",
                a: "A travel website requires personalized attention to your brand. We tailor the website around your agency's destinations, custom domain (e.g. yourname.com), preferred payment gateway (Razorpay, UPI QR), and exact tour package offerings. Connecting with our engineering team ensures you get an exact quote and architecture tailored to your specific scale."
              },
              {
                q: "How does the custom website integrate with the QuickQuote Dashboard?",
                a: "When a potential traveler submits a lead form or requests a quote on your custom website, the data is pushed automatically through our secure API straight into your QuickQuote Dashboard and Mobile App. You get an instant notification to send them a quote in 60 seconds without retyping anything."
              },
              {
                q: "Can I use my existing domain name for the custom website?",
                a: "Absolutely. If you already own a domain through GoDaddy, Namecheap, or Google Domains, our tech team will configure the DNS records and deploy enterprise SSL certificates on your existing domain at no extra domain charge."
              },
              {
                q: "Do you take any commission on packages or bookings made on the website?",
                a: "No! We operate strictly on a 0% commission SaaS and software model. All profit margins, package markups, and client payments belong 100% to your agency."
              },
              {
                q: "Can I start with just the ₹1,999 Dashboard + App bundle and add the website later?",
                a: "Yes, definitely. Many agencies start with the Dashboard + Mobile App bundle to streamline their daily quoting and sales operations, and then connect with us later when they are ready to launch their full client-facing website."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-[#f8fafd] border border-gray-100 rounded-2xl p-6 hover:border-[#0E3B34]/30 transition-colors">
                <h4 className="text-base font-black text-gray-900 mb-2 flex items-start gap-2.5">
                  <span className="text-[#0E3B34] font-mono text-sm">Q{idx + 1}.</span>
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Footer Component */}
      <Footer />

    </div>
  );
}

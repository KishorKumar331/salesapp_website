'use client';

import Link from 'next/link';
import { 
  LayoutDashboard, 
  Smartphone, 
  Globe, 
  Check, 
  ArrowRight, 
  Sparkles, 
  MessageCircle, 
  Zap, 
  ShieldCheck, 
  ExternalLink 
} from 'lucide-react';

export default function ServicesSection() {
  const whatsappNumber = '918882414703';
  const websiteInquiryMsg = encodeURIComponent("Hi QuickQuote team! I'm interested in getting a Custom Travel Agency Website. Please share details and pricing.");
  const whatsappWebsiteUrl = `https://wa.me/${whatsappNumber}?text=${websiteInquiryMsg}`;

  const services = [
    {
      id: 'dashboard',
      icon: LayoutDashboard,
      badge: 'Core Operations',
      badgeColor: 'bg-[#0E3B34]/10 text-[#0E3B34] border-[#0E3B34]/20',
      title: 'Web Operations Dashboard',
      tagline: 'High-speed quotation studio & lead management cockpit',
      priceDisplay: '₹1,999',
      priceSubtext: 'Bundled together with Android Mobile App',
      description: 'The central command center for tour operators and travel agents. Turn raw inquiries into professional, day-wise PDF proposals in 60 seconds with locked profit margins.',
      features: [
        '1-Minute day-wise PDF quote & itinerary generator',
        'Inquiry pipeline from WhatsApp lead to confirmed booking',
        'Automatic margin calculation & multi-currency lock',
        'Group booking manifests & split payment tracking',
        'Automated quote expiry & client reminder triggers'
      ],
      ctaText: 'Access Dashboard',
      ctaHref: 'https://dashboard.infinitepackages.com',
      isExternal: true,
      popular: false
    },
    {
      id: 'mobile-app',
      icon: Smartphone,
      badge: 'Most Popular Bundle',
      badgeColor: 'bg-[#E0A23B]/20 text-[#A86F12] border-[#E0A23B]/40',
      title: 'Android Mobile App',
      tagline: 'Close inquiries on-the-go straight from your pocket',
      priceDisplay: '₹1,999',
      priceSubtext: 'Comes included with Web Dashboard access',
      description: 'Never miss a lead while traveling or out of the office. The QuickQuote mobile app syncs instantly with your dashboard so you can dispatch quotes straight to client WhatsApp chats.',
      features: [
        'Official app on Google Play Store with instant login',
        'Real-time two-way cloud sync with Web Dashboard',
        'Create & modify travel quotes from your mobile phone',
        'Instant push alerts on client view & quote expiration',
        '1-Tap WhatsApp quote PDF & payment link sharing'
      ],
      ctaText: 'Download Android App',
      ctaHref: 'https://play.google.com/store/apps/details?id=com.salesapp.quickquotes',
      isExternal: true,
      popular: true
    },
    {
      id: 'website',
      icon: Globe,
      badge: 'Bespoke Agency Brand',
      badgeColor: 'bg-emerald-500/10 text-emerald-800 border-emerald-500/20',
      title: 'Custom Agency Website',
      tagline: 'Your 24/7 client booking storefront & automated lead magnet',
      priceDisplay: 'Connect With Us',
      priceSubtext: 'Custom quote tailored to your agency scale',
      description: 'A modern, high-converting travel website on your custom domain (.com / .in). Directly connected to your QuickQuote CRM so client package inquiries land straight into your pipeline.',
      features: [
        'Bespoke branded design on your own custom domain',
        'Direct CRM integration — zero manual lead re-entry',
        'Showcase holiday packages, itineraries & reviews',
        'Integrated payment checkout (UPI, Cards & NetBanking)',
        'SEO-optimized architecture for Google search rankings'
      ],
      ctaText: 'Connect for Custom Website',
      ctaHref: whatsappWebsiteUrl,
      isExternal: true,
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-[#f8fafd] via-white to-[#f4f8f7] relative overflow-hidden">
      {/* Decorative ambient blurs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#0E3B34]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#E0A23B]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0E3B34]/10 text-[#0E3B34] border border-[#0E3B34]/20 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-4 shadow-2xs">
            <Sparkles className="w-4 h-4 text-[#E0A23B]" /> What Services We Provide
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black text-gray-900 tracking-tight leading-tight mb-5">
            3 Core Solutions Built to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E3B34] via-[#124d44] to-[#E0A23B]">Power Your Travel Agency</span>
          </h2>

          <p className="text-base sm:text-xl text-gray-600 font-medium leading-relaxed">
            Everything you need under one roof: Cloud Dashboard for operations, Android Mobile App for instant sales on the go, and Custom Websites for your public brand.
          </p>
        </div>

        {/* 3 Services Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative group ${
                  svc.popular 
                    ? 'bg-gradient-to-b from-[#0E3B34] to-[#092823] text-white shadow-[0_20px_50px_rgba(14,59,52,0.25)] border-2 border-[#E0A23B] transform md:-translate-y-2' 
                    : 'bg-white text-gray-900 border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-[#0E3B34]/30'
                }`}
              >
                {/* Popular Pill */}
                {svc.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#E0A23B] to-[#F1B855] text-black text-[11px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-md flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 fill-current" /> Best Value Bundle
                  </div>
                )}

                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 ${
                      svc.popular ? 'bg-white/10 text-[#E0A23B]' : 'bg-[#0E3B34]/10 text-[#0E3B34]'
                    }`}>
                      <Icon className="w-7 h-7" />
                    </div>

                    <span className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border ${
                      svc.popular ? 'bg-[#E0A23B]/20 text-[#E0A23B] border-[#E0A23B]/30' : svc.badgeColor
                    }`}>
                      {svc.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className={`text-2xl font-black mb-2 tracking-tight ${svc.popular ? 'text-white' : 'text-gray-900'}`}>
                    {svc.title}
                  </h3>
                  <p className={`text-xs font-semibold mb-6 leading-relaxed ${svc.popular ? 'text-emerald-100/80' : 'text-gray-500'}`}>
                    {svc.tagline}
                  </p>

                  {/* Pricing Box */}
                  <div className={`p-4 rounded-2xl mb-6 border ${
                    svc.popular 
                      ? 'bg-white/5 border-white/10' 
                      : 'bg-[#f8fafd] border-gray-100'
                  }`}>
                    <div className="flex items-baseline gap-2">
                      <span className={`text-3xl font-black tracking-tight ${svc.popular ? 'text-[#E0A23B]' : 'text-[#0E3B34]'}`}>
                        {svc.priceDisplay}
                      </span>
                      {svc.priceDisplay.startsWith('₹') && (
                        <span className={`text-xs font-bold ${svc.popular ? 'text-emerald-200' : 'text-gray-500'}`}>
                          / bundled access
                        </span>
                      )}
                    </div>
                    <p className={`text-[11px] font-medium mt-1 ${svc.popular ? 'text-emerald-100/70' : 'text-gray-400'}`}>
                      {svc.priceSubtext}
                    </p>
                  </div>

                  {/* Description */}
                  <p className={`text-xs leading-relaxed mb-6 font-medium ${svc.popular ? 'text-emerald-50' : 'text-gray-600'}`}>
                    {svc.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    {svc.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          svc.popular ? 'bg-[#E0A23B]/20 text-[#E0A23B]' : 'bg-[#0E3B34]/10 text-[#0E3B34]'
                        }`}>
                          <Check className="w-3 h-3" strokeWidth={3} />
                        </div>
                        <span className={`text-xs font-medium leading-tight ${svc.popular ? 'text-emerald-100' : 'text-gray-700'}`}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div>
                  <a
                    href={svc.ctaHref}
                    target={svc.isExternal ? "_blank" : undefined}
                    rel={svc.isExternal ? "noopener noreferrer" : undefined}
                    className={`w-full py-3.5 px-5 rounded-xl font-black text-sm flex items-center justify-center gap-2 transition-all shadow-md group-hover:shadow-lg ${
                      svc.popular
                        ? 'bg-gradient-to-r from-[#E0A23B] to-[#F1B855] text-black hover:from-[#F1B855] hover:to-[#E0A23B]'
                        : 'bg-[#0E3B34] text-white hover:bg-[#124d44]'
                    }`}
                  >
                    <span>{svc.ctaText}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Pricing Clarification & Detailed Page Link Banner */}
        <div className="bg-gradient-to-r from-[#0E3B34] via-[#124d44] to-[#1C6C5E] text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-emerald-800/40 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#E0A23B]/20 text-[#E0A23B] px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-2">
              <Zap className="w-3.5 h-3.5" /> Pricing Summary
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
              Dashboard + Mobile App in ₹1,999 • Custom Website on Request
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/90 max-w-2xl font-medium leading-relaxed">
              Get full access to both the Web Dashboard and Android Mobile App together for just <strong className="text-[#E0A23B]">₹1,999</strong>. For your branded agency website with custom domain and CRM hookup, connect directly with our engineering team.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto flex-shrink-0">
            <Link
              href="/services"
              className="bg-gradient-to-r from-[#E0A23B] to-[#F1B855] hover:from-[#F1B855] hover:to-[#E0A23B] text-black px-6 py-3.5 rounded-xl font-black text-sm shadow-md hover:shadow-lg transition-all text-center flex items-center justify-center gap-2"
            >
              <span>Explore Detailed Services Page</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={whatsappWebsiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/25 px-5 py-3.5 rounded-xl font-bold text-sm transition-all text-center flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-300" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

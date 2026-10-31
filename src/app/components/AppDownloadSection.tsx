'use client';

import { Smartphone, CheckCircle, ExternalLink, ArrowRight } from 'lucide-react';

export default function AppDownloadSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#041422] via-[#071d2e] to-[#0a233b] overflow-hidden relative">
      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-[#0E3B34]/30 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Phone Screen Mockup */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start relative">
             <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-[#041422] to-transparent z-10 pointer-events-none h-1/4 bottom-0"></div>
                
                {/* Mockup Container */}
                <div className="border-[8px] border-gray-900 rounded-[3rem] bg-gray-900 relative shadow-[0_25px_60px_rgba(14,59,52,0.4)] overflow-hidden aspect-[9/19] w-[280px] sm:w-[320px] mx-auto transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                   <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 z-20 flex justify-center">
                     <div className="w-1/3 h-4 bg-black rounded-b-xl"></div>
                   </div>
                   
                   <div className="w-full h-full bg-[#f8fafd] relative flex flex-col pt-8 text-left">
                     {/* Pseudo App Header */}
                     <div className="px-4 pb-3 border-b border-gray-100 flex justify-between items-center bg-white">
                       <div>
                         <span className="font-black text-xs text-[#0E3B34] block">Infinite Packages</span>
                         <span className="text-[9px] text-gray-400 font-bold block">Advisor Dashboard</span>
                       </div>
                       <div className="w-7 h-7 bg-[#0E3B34]/10 text-[#0E3B34] rounded-full flex items-center justify-center font-black text-xs">
                         IP
                       </div>
                     </div>
                     
                     {/* Pseudo App Cards */}
                     <div className="p-3.5 flex flex-col gap-3">
                        <div className="bg-gradient-to-r from-[#0E3B34] to-[#124d44] text-white rounded-2xl p-3.5 shadow-md flex flex-col justify-between">
                           <span className="text-[10px] text-emerald-200 uppercase font-black tracking-wider">Monthly Sales Pipeline</span>
                           <span className="text-2xl font-black text-white my-1">₹12,45,000</span>
                           <span className="text-[9px] text-emerald-200/80 font-semibold">14 Packages Closed &bull; 100% Margin Retention</span>
                        </div>
                        
                        <div className="bg-white rounded-2xl border border-gray-100 p-3 shadow-sm flex items-center justify-between">
                           <div>
                              <span className="text-xs font-bold text-gray-900 block">Maldives 4N Luxury Suite</span>
                              <span className="text-[10px] text-gray-400 font-medium block">Quote #IP-9042 &bull; Client Deposit Paid</span>
                           </div>
                           <span className="text-xs font-black text-[#00ab6b] bg-[#00ab6b]/10 px-2 py-0.5 rounded">Confirmed</span>
                        </div>

                        <div className="bg-white rounded-2xl border border-gray-100 p-3 shadow-sm flex items-center justify-between">
                           <div>
                              <span className="text-xs font-bold text-gray-900 block">Bali 6N Multi-Island Tour</span>
                              <span className="text-[10px] text-gray-400 font-medium block">Quote #IP-9048 &bull; Proposal Sent</span>
                           </div>
                           <span className="text-xs font-black text-[#E0A23B] bg-[#E0A23B]/10 px-2 py-0.5 rounded">Pending</span>
                        </div>

                        <div className="mt-2 bg-[#0E3B34] text-white rounded-xl py-2.5 px-4 flex items-center justify-center gap-2 cursor-pointer hover:bg-[#092823] transition-colors shadow-md">
                           <span className="text-white text-xs font-black">+ Create New Quote</span>
                        </div>
                     </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Copy & Features */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#E0A23B]/10 text-[#E0A23B] px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-4 border border-[#E0A23B]/20">
              Mobile Quoting Engine
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black text-white mb-6 tracking-tight leading-tight">
              Your Entire Travel Business <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-[#E0A23B]">In Your Pocket</span>
            </h2>
            
            <p className="text-gray-300 text-base sm:text-lg font-medium mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Quote clients anytime, anywhere. Our mobile-ready web app & Android platform lets you calculate margins and generate professional multi-destination PDF packages in under 60 seconds.
            </p>
            
            <ul className="space-y-4 mb-10 text-left max-w-md mx-auto lg:mx-0">
              {[
                'Instantly set custom markup margins per quote',
                'Generate & send branded PDFs directly via WhatsApp',
                'Track instalment deposits and payment confirmation locks'
              ].map((item, i) => (
                <li key={i} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#E0A23B] mr-3 flex-shrink-0" />
                  <span className="text-white font-bold text-sm sm:text-base tracking-wide">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="https://play.google.com/store/apps/details?id=com.salesapp.quickquotes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#E0A23B] to-[#F1B855] hover:from-[#F1B855] hover:to-[#E0A23B] text-black px-7 py-4 rounded-xl font-black text-base transition-all shadow-[0_10px_25px_rgba(224,162,59,0.3)] transform hover:-translate-y-0.5"
              >
                Get on Google Play <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="https://quick-quote.incognitosolution.com"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 px-6 py-4 rounded-xl font-bold text-sm transition-all"
              >
                Open Web Dashboard <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

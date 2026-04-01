'use client';

import { Smartphone, CheckCircle, Play } from 'lucide-react';

export default function AppDownloadSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#041422] to-[#0a233b] overflow-hidden relative">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#008cff]/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start relative">
             <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-[#041422] to-transparent z-10 pointer-events-none h-1/4 bottom-0"></div>
                {/* Mockup Frame */}
                <div className="border-[8px] border-gray-900 rounded-[3rem] bg-gray-900 relative shadow-[0_20px_50px_rgba(0,140,255,0.3)] overflow-hidden aspect-[9/19] w-[280px] sm:w-[320px] mx-auto transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                   <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 z-20 flex justify-center">
                     <div className="w-1/3 h-4 bg-black rounded-b-xl"></div>
                   </div>
                   <div className="w-full h-full bg-white relative flex flex-col pt-8">
                     {/* Pseudo App Header */}
                     <div className="px-4 pb-4 border-b flex justify-between items-center">
                       <span className="font-black text-sm text-[#008cff]">Dashboard</span>
                       <div className="w-6 h-6 bg-gray-100 rounded-full"></div>
                     </div>
                     {/* Pseudo App Cards */}
                     <div className="p-4 flex flex-col gap-3">
                        <div className="h-20 bg-gradient-to-r from-[#008cff]/10 to-[#00cefc]/10 rounded-xl border border-[#008cff]/20 p-3 flex flex-col justify-between">
                          <span className="text-[10px] text-gray-500 font-bold">Revenue</span>
                          <span className="text-xl font-black text-gray-900">₹8,45,000</span>
                        </div>
                        <div className="h-16 bg-white rounded-xl border shadow-sm p-3"></div>
                        <div className="h-16 bg-white rounded-xl border shadow-sm p-3"></div>
                        <div className="h-16 bg-white rounded-xl border shadow-sm p-3"></div>
                        <div className="mt-auto h-12 bg-[#008cff] rounded-xl flex items-center justify-center mt-4">
                           <span className="text-white text-xs font-bold">Create Quote</span>
                        </div>
                     </div>
                   </div>
                </div>
             </div>
          </div>

          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-sans font-black text-white mb-6 tracking-tight leading-tight">
              Your Entire Travel Business <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008cff] to-[#00cefc]">In Your Pocket</span>
            </h2>
            <p className="text-blue-100/80 text-lg font-medium mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Quote clients from anywhere. Our purpose-built Android app lets you generate 
              professional multi-destination packages in under 3 minutes flat, straight from your 
              phone during a lunch break, commute, or on the weekend.
            </p>
            
            <ul className="space-y-4 mb-10 text-left max-w-sm mx-auto lg:mx-0">
              {['Instantly calculate margins', 'Generate & send PDFs over WhatsApp', 'Track instalment payments seamlessly'].map((item, i) => (
                <li key={i} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#00cefc] mr-3" />
                  <span className="text-white font-bold text-sm tracking-wide">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#"
                className="flex items-center justify-center sm:justify-start gap-3 bg-white hover:bg-gray-100 text-gray-900 px-6 py-3.5 rounded-xl font-black transition-all shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
              >
                <Smartphone className="w-6 h-6" />
                <div className="flex flex-col text-left">
                   <span className="text-[10px] uppercase tracking-widest leading-none text-gray-500">Get it on</span>
                   <span className="text-base leading-tight">Google Play</span>
                </div>
              </a>
              <button className="flex items-center justify-center gap-2 bg-transparent border-2 border-white/20 hover:border-white/40 text-white px-6 py-3.5 rounded-xl font-bold transition-all">
                <Play className="w-4 h-4 fill-current" />
                Watch App Demo
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

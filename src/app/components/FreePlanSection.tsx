'use client';

import { Check, Zap, Sparkles, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function FreePlanSection() {
  return (
    <section id="free-plan" className="py-20 bg-gradient-to-b from-white via-[#f8fafd] to-white relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#E0A23B]/10 rounded-full blur-[90px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#0E3B34]/10 rounded-full blur-[90px] pointer-events-none"></div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Card Box */}
        <div className="bg-gradient-to-br from-[#0E3B34] via-[#124d44] to-[#0E3B34] rounded-[2.5rem] p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden border border-emerald-800/40">
          
          {/* Subtle watermark badge */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#E0A23B]/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            
            <div className="inline-flex items-center gap-2 bg-[#E0A23B]/20 text-[#E0A23B] px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-6 border border-[#E0A23B]/30">
              <Sparkles className="w-4 h-4" /> Free Travel Agent CRM Software
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black mb-6 tracking-tight text-white leading-tight">
              Start Free — <span className="text-[#E0A23B]">No Credit Card Required</span>
            </h2>

            <p className="text-base sm:text-lg text-emerald-100 font-medium mb-10 leading-relaxed max-w-2xl mx-auto">
              Try QuickQuote with our free plan. Build day-wise travel quotes, export client-ready PDFs, and manage your daily bookings without complicated setup fees. Experience the best free travel agent software designed for modern sales.
            </p>

            {/* Checklist */}
            <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto text-left mb-10">
              {[
                "100% free travel agency crm software trial",
                "Instant day-wise branded PDF quote generator",
                "Full WhatsApp 1-click proposal sharing",
                "Automated quote expiration & client reminders",
                "Secure multi-destination pricing & margin locks",
                "Zero credit card required to get started"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-emerald-50">
                  <div className="w-5 h-5 rounded-full bg-[#E0A23B]/20 text-[#E0A23B] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://quick-quote.incognitosolution.com"
                className="w-full sm:w-auto bg-gradient-to-r from-[#E0A23B] to-[#F1B855] hover:from-[#F1B855] hover:to-[#E0A23B] text-black px-10 py-4 rounded-full font-black text-lg shadow-[0_10px_25px_rgba(224,162,59,0.35)] hover:shadow-[0_15px_35px_rgba(224,162,59,0.45)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Create Free Account <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="mailto:tech.support@infinitepackages.com?subject=QuickQuote Demo Request"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-base transition-all flex items-center justify-center gap-2"
              >
                Book a Guided Demo
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-xs text-emerald-200/80 font-medium">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#E0A23B]" /> Free Forever Tier Available</span>
              <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-[#E0A23B]" /> Set up in 30 seconds</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

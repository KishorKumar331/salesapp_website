export default function HowToUseSection() {
  return (
    <section id="how-it-works" className="bg-[#f8fafd] pt-14 pb-12 border-y border-gray-100 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0E3B34]/10 text-[#0E3B34] px-4 py-1 rounded-full text-xs font-black tracking-widest uppercase mb-3">
            Simple 3-Step Process
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-black text-gray-900 mb-4 tracking-tight">
            How It Works
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-[#0E3B34] to-[#E0A23B] mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium text-base leading-relaxed">
            Build your travel agency quietly in three simple steps — while maintaining complete independence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-[2.75rem] left-[15%] w-[70%] h-0.5 bg-gradient-to-r from-[#0E3B34]/20 via-[#E0A23B]/40 to-[#0E3B34]/20 z-0"></div>
          
          {/* Step 1 */}
          <div className="text-center relative z-10 bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="bg-white border-4 border-[#0E3B34] text-[#0E3B34] shadow-md rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-black">
              1
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-3">Sell Under Your Own Brand</h3>
            <p className="text-sm text-gray-500 font-medium leading-relaxed">
              Use your travel sales expertise to pitch directly. White-label your brand identity from call one and build real client goodwill for your own business.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center relative z-10 bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="bg-white border-4 border-[#0E3B34] text-[#0E3B34] shadow-md rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-black">
              2
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-3">Quote in Under 60 Seconds</h3>
            <p className="text-sm text-gray-500 font-medium leading-relaxed">
              Generate multi-destination PDF packages directly from your smartphone or laptop between client meetings, wherever you are located.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center relative z-10 bg-gradient-to-b from-[#eaf5f3]/40 to-white border border-[#0E3B34]/20 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="bg-gradient-to-r from-[#E0A23B] to-[#F1B855] border-4 border-white text-black shadow-lg rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-black">
              3
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-3">Manage Operations & CRM</h3>
            <p className="text-sm text-gray-500 font-medium leading-relaxed">
              Manage pipeline leads, issue professional B2B invoices, and track partial payment schedules with administrator lock security.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

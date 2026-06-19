export default function HowToUseSection() {
  return (
    <section className="bg-[#f8fafd] pt-12 pb-6 border-y border-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-sans font-black text-gray-900 mb-4 tracking-tight">
            How It Works
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-[#0E3B34] to-[#E0A23B] mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium text-base">
            Build your travel agency quietly in three simple steps — without leaving your current job.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-[2.25rem] left-[15%] w-[70%] h-0.5 bg-gradient-to-r from-[#0E3B34]/15 via-[#0E3B34]/40 to-[#0E3B34]/15 z-0"></div>
          
          {/* Step 1 */}
          <div className="text-center relative z-10 bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-white border-4 border-[#0E3B34] text-[#0E3B34] shadow-md rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-black bg-clip-padding">
              1
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Sell Under Your Own Brand</h3>
            <p className="text-sm text-gray-500 font-medium leading-relaxed">
              Use your same skills to pitch. Tell clients you're samay from My Holidays, not XYZ Tours. Own the customer loyalty from call one.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center relative z-10 bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-white border-4 border-[#0E3B34] text-[#0E3B34] shadow-md rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-black bg-clip-padding">
              2
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Quote in Under a Minute</h3>
            <p className="text-sm text-gray-500 font-medium leading-relaxed">
              Generate premium, white-labeled multi-destination PDF packages directly from your mobile phone between calls, wherever you are.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center relative z-10 bg-[#eaf5f3]/20 border border-[#0E3B34]/20 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-gradient-to-r from-[#E0A23B] to-[#F1B855] border-4 border-white text-black shadow-[#E0A23B]/30 shadow-xl rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-black">
              3
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Manage After Hours</h3>
            <p className="text-sm text-gray-500 font-medium leading-relaxed">
              Keep your day job safe. Manage pipeline leads, generate tax-ready B2B invoices, and track partial payment schedules on the web CRM at night.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

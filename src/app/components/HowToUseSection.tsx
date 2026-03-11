export default function HowToUseSection() {
  return (
    <section className="bg-[#f8fafd] py-24 border-y border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-sans font-black text-gray-900 mb-4 tracking-tight">
            How to Use Our Platform
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-[#d12a2f] to-[#e53935] mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-[2.25rem] left-[10%] w-[80%] h-0.5 bg-gradient-to-r from-[#008cff]/20 via-[#008cff]/60 to-[#008cff]/20 z-0"></div>
          
          <div className="text-center relative z-10">
            <div className="bg-white border-4 border-[#008cff] text-[#008cff] shadow-lg rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-black bg-clip-padding">
              1
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Sign Up</h3>
            <p className="text-sm text-gray-600">Create your account and choose your plan</p>
          </div>
          <div className="text-center relative z-10">
            <div className="bg-white border-4 border-[#008cff] text-[#008cff] shadow-lg rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-black bg-clip-padding">
              2
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Build Packages</h3>
            <p className="text-sm text-gray-600">Create custom travel packages for your clients</p>
          </div>
          <div className="text-center relative z-10">
            <div className="bg-white border-4 border-[#008cff] text-[#008cff] shadow-lg rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-black bg-clip-padding">
              3
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Generate Quotes</h3>
            <p className="text-sm text-gray-600">Create professional quotations with one click</p>
          </div>
          <div className="text-center relative z-10">
            <div className="bg-gradient-to-r from-[#d12a2f] to-[#e53935] border-4 border-white text-white shadow-[#d12a2f]/30 shadow-xl rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-black">
              4
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Send & Track</h3>
            <p className="text-sm text-gray-600">Send to clients and track their responses</p>
          </div>
        </div>
      </div>
    </section>
  );
}

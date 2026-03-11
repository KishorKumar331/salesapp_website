export default function WhatWeDoSection() {
  return (
    <section className="bg-white py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-sans font-black text-[#000000] mb-4 tracking-tight">
            What We Do
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-[#008cff] to-[#00cefc] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-medium">
            We empower travel entrepreneurs to build and scale their travel business without quitting their job. Our platform provides all the tools you need to create quotations, manage bookings, and deliver exceptional service to your clients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] border border-gray-100 rounded-2xl p-8 hover:shadow-[0_8px_30px_-4px_rgba(0,140,255,0.15)] transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#008cff] to-[#00cefc] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div className="text-4xl mb-5 bg-[#e5f3ff] w-16 h-16 rounded-full flex items-center justify-center">✈️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Easy Quotations</h3>
            <p className="text-gray-600 leading-relaxed">
              Create professional travel quotations in minutes with our intuitive platform. Customize packages and send to clients instantly.
            </p>
          </div>
          <div className="bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] border border-gray-100 rounded-2xl p-8 hover:shadow-[0_8px_30px_-4px_rgba(209,42,47,0.15)] transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#d12a2f] to-[#e53935] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div className="text-4xl mb-5 bg-[#fce8e8] w-16 h-16 rounded-full flex items-center justify-center">📧</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Mail Service</h3>
            <p className="text-gray-600 leading-relaxed">
              Automated email notifications keep your clients informed at every step. Professional templates included.
            </p>
          </div>
          <div className="bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] border border-gray-100 rounded-2xl p-8 hover:shadow-[0_8px_30px_-4px_rgba(0,140,255,0.15)] transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#008cff] to-[#00cefc] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div className="text-4xl mb-5 bg-[#e5f3ff] w-16 h-16 rounded-full flex items-center justify-center">🎨</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">PDF Design</h3>
            <p className="text-gray-600 leading-relaxed">
              Choose from beautiful PDF templates to present your quotations professionally to clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

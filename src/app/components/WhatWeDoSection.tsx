export default function WhatWeDoSection() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            What We Do
          </h2>
          <div className="w-16 h-1 bg-orange-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We empower travel entrepreneurs to build and scale their travel business without quitting their job. Our platform provides all the tools you need to create quotations, manage bookings, and deliver exceptional service to your clients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-orange-900/20 to-orange-900/5 border border-orange-600/30 rounded-lg p-8 hover:border-orange-600/60 transition">
            <div className="text-4xl mb-4">✈️</div>
            <h3 className="text-2xl font-bold mb-4">Easy Quotations</h3>
            <p className="text-gray-400">
              Create professional travel quotations in minutes with our intuitive platform. Customize packages and send to clients instantly.
            </p>
          </div>
          <div className="bg-gradient-to-br from-orange-900/20 to-orange-900/5 border border-orange-600/30 rounded-lg p-8 hover:border-orange-600/60 transition">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-2xl font-bold mb-4">Mail Service</h3>
            <p className="text-gray-400">
              Automated email notifications keep your clients informed at every step. Professional templates included.
            </p>
          </div>
          <div className="bg-gradient-to-br from-orange-900/20 to-orange-900/5 border border-orange-600/30 rounded-lg p-8 hover:border-orange-600/60 transition">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-2xl font-bold mb-4">PDF Design</h3>
            <p className="text-gray-400">
              Choose from beautiful PDF templates to present your quotations professionally to clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

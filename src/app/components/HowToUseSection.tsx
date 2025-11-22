export default function HowToUseSection() {
  return (
    <section className="bg-gray-950 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            How to Use Our Platform
          </h2>
          <div className="w-16 h-1 bg-orange-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              1
            </div>
            <h3 className="text-xl font-bold mb-2">Sign Up</h3>
            <p className="text-gray-400">Create your account and choose your plan</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              2
            </div>
            <h3 className="text-xl font-bold mb-2">Build Packages</h3>
            <p className="text-gray-400">Create custom travel packages for your clients</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              3
            </div>
            <h3 className="text-xl font-bold mb-2">Generate Quotes</h3>
            <p className="text-gray-400">Create professional quotations with one click</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              4
            </div>
            <h3 className="text-xl font-bold mb-2">Send & Track</h3>
            <p className="text-gray-400">Send to clients and track their responses</p>
          </div>
        </div>
      </div>
    </section>
  );
}

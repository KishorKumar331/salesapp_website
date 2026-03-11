export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#f8fafd] text-gray-900 pb-12">
      {/* Header Decoration */}
      <div className="w-full h-48 bg-gradient-to-r from-[#0a192f] to-[#041422] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10">
        <div className="bg-white rounded-2xl shadow-[0_8px_30px_-4px_rgba(0,140,255,0.1)] p-8 md:p-12 border border-blue-50">
          <div className="border-b border-gray-100 pb-8 mb-8">
            <h1 className="text-4xl font-sans font-black text-[#041422] mb-3">Terms & Conditions</h1>
            <div className="w-16 h-1.5 bg-gradient-to-r from-[#d12a2f] to-[#e53935] rounded-full mb-4"></div>
            <p className="text-gray-500 text-sm font-medium">Last updated: November 2025</p>
          </div>
          
          <div className="space-y-8 text-gray-600 text-base font-medium leading-relaxed">
            
            <section className="bg-blue-50/50 p-6 rounded-xl border border-blue-100 mb-8">
              <p className="text-[#041422] font-black mb-2">Important Notice for Travel Partners:</p>
              <p className="text-sm">These terms govern your use of the Infinite Packages B2B platform. By acting as a travel agent, sub-agent, or affiliate utilizing our CRM and booking management tools, you agree strictly to the following B2B terms of service.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#008cff] mb-3 flex items-center">
                <span className="bg-[#e5f3ff] w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                B2B Agency & Relationship
              </h2>
              <p className="pl-11">Infinite Packages provides a B2B SaaS platform for travel management. We are a technology provider, not a principal travel supplier. Your relationship with us is strictly as an independent B2B partner. You are solely responsible for all interactions, commitments, pricing markups, and disclosures made to your end-customers.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#008cff] mb-3 flex items-center">
                <span className="bg-[#e5f3ff] w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                Pricing, Markups & End-Customer Liability
              </h2>
              <p className="pl-11">You have full control over the markups added to net rates generated via our quotation system. You bear absolute liability for ensuring your pricing complies with local laws, tax regulations (including GST), and consumer protection laws. Infinite Packages is not liable for any disputes between you and your end-customer regarding pricing, quality of service, or unmet travel expectations.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#008cff] mb-3 flex items-center">
                <span className="bg-[#e5f3ff] w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">3</span>
                Supplier Failures & API Discrepancies
              </h2>
              <p className="pl-11">Our platform may integrate with third-party aggregators (similar to TBO, Tripjack) or direct APIs. We cannot guarantee real-time absolute accuracy of third-party inventory or pricing until final confirmation. Infinite Packages holds no liability for bookings dropped due to supplier rejection, API timeouts, or unnotified inventory changes.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#008cff] mb-3 flex items-center">
                <span className="bg-[#e5f3ff] w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">4</span>
                Cancellations & Refunds Policy
              </h2>
              <p className="pl-11">Cancellations are strictly governed by the actual travel suppliers (Airlines, Hotels, DMCs). We only pass through the supplier&apos;s cancellation terms. Any platform usage fees or software subscription fees paid to Infinite Packages are non-refundable unless explicitly stated otherwise.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#008cff] mb-3 flex items-center">
                <span className="bg-[#e5f3ff] w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">5</span>
                Platform Availability & &quot;As-Is&quot; Provision
              </h2>
              <p className="pl-11">The Service is provided &quot;as is&quot; and &quot;as available&quot;. While we strive for 99.9% uptime, infinite Packages makes no warranty that the Android App, Web Dashboard, or quote generation features will be completely error-free or strictly continuous. We are not liable for business loss due to temporary technical downtime.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#008cff] mb-3 flex items-center">
                <span className="bg-[#e5f3ff] w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">6</span>
                Generated Data & Account Security
              </h2>
              <p className="pl-11">You are responsible for maintaining the confidentiality of your B2B login credentials. You are responsible for the accuracy of all invoices and PDF itineraries generated using our system. Misuse, scraping our technology, or sharing accounts across multiple un-licensed branch offices violates these terms.</p>
            </section>

            <section className="bg-gray-50 rounded-xl p-6 border border-gray-100 mt-12">
              <h2 className="text-xl font-bold text-[#041422] mb-4">Contact & Support</h2>
              <div className="text-gray-600">
                <p className="font-bold text-gray-900 mb-2">Infinite Packages</p>
                <p>Patna, Bihar</p>
                <p>Phone: 9304247331</p>
                <p>Email: <a href="mailto:support@infinitepackages.com" className="text-[#008cff] hover:underline">support@infinitepackages.com</a></p>
                <p>Website: www.infinitepackages.com</p>
              </div>
            </section>

            <div className="pt-8 mt-8 border-t border-gray-100 text-center">
              <p className="text-gray-500 text-sm">
                For questions about these Terms, contact us at <a href="mailto:support@infinitepackages.com" className="text-[#008cff] font-bold hover:underline">support@infinitepackages.com</a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

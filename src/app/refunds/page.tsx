export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-[#f8fafd] text-gray-900 pb-12">
      {/* Header Decoration */}
      <div className="w-full h-48 bg-gradient-to-r from-[#0E3B34] to-[#1C6C5E] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10">
        <div className="bg-white rounded-2xl shadow-[0_8px_30px_-4px_rgba(14,59,52,0.1)] p-8 md:p-12 border border-blue-50">
          <div className="border-b border-gray-100 pb-8 mb-8">
            <h1 className="text-4xl font-sans font-black text-[#041422] mb-3">Cancellations & Refund Policy</h1>
            <div className="w-16 h-1.5 bg-gradient-to-r from-[#E0A23B] to-[#F1B855] rounded-full mb-4"></div>
            <p className="text-gray-500 text-sm font-medium">Last updated: August 2026</p>
          </div>

          <div className="space-y-8 text-gray-600 text-base font-medium leading-relaxed">
            
            <section className="bg-emerald-50/60 p-6 rounded-xl border border-emerald-100 mb-8">
              <p className="text-[#041422] font-black mb-2">B2B Platform Policy Summary:</p>
              <p className="text-sm text-gray-700">
                Infinite Packages operates strictly as a B2B travel management software and inventory provider for independent agents.
                Cancellations and refunds are processed strictly according to supplier guidelines and service tier terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0E3B34] mb-3 flex items-center">
                <span className="bg-[#0E3B34]/10 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                Supplier Pass-Through Cancellation Rules
              </h2>
              <p className="pl-11">
                All travel inventory (including flights, hotels, ground transfers, and activities) booked through Infinite Packages is subject directly to the cancellation policies of the underlying third-party suppliers (Airlines, Hotel Networks, and DMCs). Infinite Packages acts as a technology intermediary and cannot override supplier penalty fees.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0E3B34] mb-3 flex items-center">
                <span className="bg-[#0E3B34]/10 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                Platform Usage & Software Fees
              </h2>
              <p className="pl-11">
                Any platform access, software setup, layout customization, or digital service fees paid to Infinite Packages are non-refundable once the service has been provisioned or access credentials have been delivered, except as explicitly required under applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0E3B34] mb-3 flex items-center">
                <span className="bg-[#0E3B34]/10 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">3</span>
                Refund Processing Timeline
              </h2>
              <p className="pl-11">
                Approved refunds resulting from supplier cancellations or deposit adjustments will be credited back to the original source payment method within 7 to 14 business days after supplier verification and settlement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0E3B34] mb-3 flex items-center">
                <span className="bg-[#0E3B34]/10 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">4</span>
                Customer Disputes & End-Client Liability
              </h2>
              <p className="pl-11">
                Travel agents and sub-agents using our quotation platform are solely responsible for setting their own customer-facing refund and cancellation terms with their end-clients. Infinite Packages assumes no liability for disputes between travel agents and their end-customers.
              </p>
            </section>

            <section className="bg-gray-50 rounded-xl p-6 border border-gray-100 mt-12">
              <h2 className="text-xl font-bold text-[#041422] mb-4">Refund Support & Help Desk</h2>
              <div className="text-gray-600">
                <p className="font-bold text-gray-900 mb-2">Infinite Packages Billing Team</p>
                <p>Phone: +91 8882414703</p>
                <p>Email: <a href="mailto:support@infinitepackages.com" className="text-[#0E3B34] font-bold hover:underline">support@infinitepackages.com</a></p>
                <p>Response Time: Within 24 business hours</p>
              </div>
            </section>

            <div className="pt-8 mt-8 border-t border-gray-100 text-center">
              <p className="text-gray-500 text-sm">
                Have questions regarding a specific booking refund? Contact us at <a href="mailto:support@infinitepackages.com" className="text-[#0E3B34] font-bold hover:underline">support@infinitepackages.com</a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

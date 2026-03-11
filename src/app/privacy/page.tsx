export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#f8fafd] text-gray-900 pb-12">
      {/* Header Decoration */}
      <div className="w-full h-48 bg-gradient-to-r from-[#008cff] to-[#0052cc] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10">
        <div className="bg-white rounded-2xl shadow-[0_8px_30px_-4px_rgba(0,140,255,0.1)] p-8 md:p-12 border border-blue-50">
          <div className="border-b border-gray-100 pb-8 mb-8">
            <h1 className="text-4xl font-sans font-black text-[#041422] mb-3">Privacy Policy</h1>
            <div className="w-16 h-1.5 bg-gradient-to-r from-[#d12a2f] to-[#e53935] rounded-full mb-4"></div>
            <p className="text-gray-500 text-sm font-medium">Last updated: November 2025</p>
          </div>
          
          <div className="space-y-8 text-gray-600 text-base leading-relaxed font-medium">
            <section>
              <h2 className="text-xl font-bold text-[#008cff] mb-3 flex items-center">
                <span className="bg-[#e5f3ff] w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                Information We Collect
              </h2>
              <p className="pl-11">We collect your basic details (name, email, phone, company), client info, trip and booking data, quotation/invoice data, and device usage details. Payment card/UPI data is not stored.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#008cff] mb-3 flex items-center">
                <span className="bg-[#e5f3ff] w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                How We Use Your Data
              </h2>
              <p className="pl-11">We use your data to manage your account, generate quotations & invoices, improve app performance, send notifications, process payments, and provide support. We never sell your data.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#008cff] mb-3 flex items-center">
                <span className="bg-[#e5f3ff] w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">3</span>
                Sharing of Data
              </h2>
              <p className="pl-11">We share data only with AWS services, payment gateways, SMS/email providers, and legal authorities when necessary.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#008cff] mb-3 flex items-center">
                <span className="bg-[#e5f3ff] w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">4</span>
                Data Security
              </h2>
              <p className="pl-11">Your data is stored securely on encrypted AWS infrastructure with strict access control.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#008cff] mb-3 flex items-center">
                <span className="bg-[#e5f3ff] w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">5</span>
                Your Rights
              </h2>
              <p className="pl-11">You may request to view, correct, delete, or export your data by contacting support@infinitepackages.com.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#008cff] mb-3 flex items-center">
                <span className="bg-[#e5f3ff] w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">6</span>
                Data Retention
              </h2>
              <p className="pl-11">We retain your data as long as your account is active or required for legal and financial compliance.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#008cff] mb-3 flex items-center">
                <span className="bg-[#e5f3ff] w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">7</span>
                Limitation of Liability
              </h2>
              <p className="pl-11">To the maximum extent permitted by applicable law, Infinite Packages and its affiliates shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, good-will, or other intangible losses, resulting from your use of our platform.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#008cff] mb-3 flex items-center">
                <span className="bg-[#e5f3ff] w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">8</span>
                &quot;As Is&quot; Basis
              </h2>
              <p className="pl-11">Our services are provided &quot;as is&quot; and &quot;as available&quot; without any warranties of any kind, either express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>
            </section>

            <section className="bg-gray-50 rounded-xl p-6 border border-gray-100 mt-12">
              <h2 className="text-xl font-bold text-[#041422] mb-4">Contact</h2>
              <div className="text-gray-600">
                <p className="font-bold text-gray-900 mb-2">Infinite Packages</p>
                <p>New Delhi, India</p>
                <p>Phone: 9999935176</p>
                <p>Email: <a href="mailto:support@infinitepackages.com" className="text-[#008cff] hover:underline">support@infinitepackages.com</a></p>
              </div>
            </section>

            <div className="pt-8 mt-8 border-t border-gray-100 text-center">
              <p className="text-gray-500 text-sm">
                For privacy-related questions, contact us at <a href="mailto:support@infinitepackages.com" className="text-[#008cff] font-bold hover:underline">support@infinitepackages.com</a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

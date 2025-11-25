export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-gray-800 bg-black/50 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <a href="/" className="flex items-center">
            <img src="/logo.png" alt="Infinite Packages" className="h-12 w-auto" />
          </a>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-8">Last updated: November 2025</p>
        
        <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold mb-2">1. Information We Collect</h2>
            <p>We collect your basic details (name, email, phone, company), client info, trip and booking data, quotation/invoice data, and device usage details. Payment card/UPI data is not stored.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">2. How We Use Your Data</h2>
            <p>We use your data to manage your account, generate quotations & invoices, improve app performance, send notifications, process payments, and provide support. We never sell your data.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">3. Sharing of Data</h2>
            <p>We share data only with AWS services, payment gateways, SMS/email providers, and legal authorities when necessary.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">4. Data Security</h2>
            <p>Your data is stored securely on encrypted AWS infrastructure with strict access control.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">5. Your Rights</h2>
            <p>You may request to view, correct, delete, or export your data by contacting support@journeyrouters.com.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">6. Data Retention</h2>
            <p>We retain your data as long as your account is active or required for legal and financial compliance.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">7. Contact</h2>
            <p>
              Journey Routers Private Limited<br />
              New Delhi, India<br />
              Phone: 9999935176<br />
              Email: support@journeyrouters.com
            </p>
          </section>

          <p className="pt-4 text-gray-400 text-xs">
            For privacy-related questions, contact us at support@journeyrouters.com
          </p>
        </div>
      </main>

      <footer className="border-t border-gray-800 bg-black/50 py-6 mt-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-gray-500">© 2025 Infinite Packages. All rights reserved.</p>
            <a href="/terms" className="text-gray-400 hover:text-orange-600 transition mt-2 md:mt-0">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

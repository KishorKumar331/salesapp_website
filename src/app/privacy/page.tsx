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
            <p>We collect account details, contact information, and usage data when you use our services.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">2. How We Use Your Data</h2>
            <p>To provide and improve our services, process payments, and communicate with you about your account.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">3. Data Sharing</h2>
            <p>We don't sell your data. We only share it with service providers who help us operate our platform.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">4. Data Security</h2>
            <p>We implement security measures to protect your information, but no system is 100% secure.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">5. Your Rights</h2>
            <p>You can access, update, or delete your account information at any time.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">6. Changes to This Policy</h2>
            <p>We'll notify you of significant changes. Continued use means acceptance of changes.</p>
          </section>

          <p className="pt-4 text-gray-400 text-xs">
            For privacy-related questions, contact us at privacy@infinitepackages.com
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

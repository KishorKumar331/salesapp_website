export default function TermsPage() {
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
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="text-gray-400 text-sm mb-8">Effective: November 2025</p>
        
        <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold mb-2">1. Acceptance of Terms</h2>
            <p>By accessing or using our services, you agree to these terms.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">2. Service Description</h2>
            <p>We provide travel business management tools for creating and managing travel packages.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">3. Account Responsibility</h2>
            <p>You're responsible for maintaining the confidentiality of your account and password.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">4. Payment Terms</h2>
            <p>All fees are non-refundable. We may change our pricing with 30 days' notice.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">5. Termination</h2>
            <p>We may terminate or suspend access to our service immediately for violations.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">6. Changes to Terms</h2>
            <p>We may modify these terms at any time. Continued use constitutes acceptance.</p>
          </section>

          <p className="pt-4 text-gray-400 text-xs">
            For questions about these Terms, contact us at support@infinitepackages.com
          </p>
        </div>
      </main>

      <footer className="border-t border-gray-800 bg-black/50 py-6 mt-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-gray-500">© 2025 Infinite Packages. All rights reserved.</p>
            <a href="/privacy" className="text-gray-400 hover:text-orange-600 transition mt-2 md:mt-0">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

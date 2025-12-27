export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 w-full">
        <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
        <p className="text-gray-400 text-sm mb-8">Last updated: November 2025</p>
        
        <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold mb-2">1. Use of the Service</h2>
            <p>You must be at least 18 years old, provide accurate information, and use the Service only for lawful business purposes. Misuse, hacking, modification, or reverse engineering is prohibited. We may suspend or terminate accounts violating these rules.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">2. User Account</h2>
            <p>You are responsible for maintaining the confidentiality of your login credentials and all activities under your account. We are not liable for any loss caused by unauthorized access due to user negligence.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">3. Subscription, Billing & Payments</h2>
            <p>Some features require a paid subscription or pay-per-use credits. Prices may change with prior notice. Payments are processed by third-party gateways like PayU. We do not store card or UPI details.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">4. Generated Data (Quotes, Invoices, PDFs)</h2>
            <p>The Service allows creation of quotations, itineraries, invoices, and client data. You are responsible for accuracy. We provide tools only—not legal or financial advice.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">5. Acceptable Use Policy</h2>
            <p>You agree not to upload harmful/illegal content, send spam, commit fraud, harass users, interfere with system operations, or attempt unauthorized access. Violations may result in termination.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">6. Intellectual Property</h2>
            <p>All code, design, content, and branding belong to Infinite Packages. You may not copy, resell, or replicate any part of the Service.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">7. Third-Party Services</h2>
            <p>The app integrates with AWS, payment gateways, SMS/email providers, and travel data APIs. We are not responsible for failures or actions of third-party services.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">8. Limitation of Liability</h2>
            <p>We are not liable for business loss, data loss, downtime, incorrect data input, or indirect damages. Use the platform at your own risk.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">9. Data & Privacy</h2>
            <p>Your personal data is processed according to our Privacy Policy, available in the app and on the website.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">10. Termination</h2>
            <p>We may suspend or terminate your account for violations or misuse. You may request account deletion anytime.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">11. Changes to Terms</h2>
            <p>We may update these Terms periodically. Continued use means acceptance of updated Terms.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">12. Contact</h2>
            <p>
              Infinite Packages<br />
              Patna, Bihar<br />
              {/* Saket, New Delhi – 110030<br /> */}
              Phone: 9304247331<br />
              Email: support@infinitepackages.com<br />
              Website: www.infinitepackages.com
            </p>
          </section>

          <p className="pt-4 text-gray-400 text-xs">
            For questions about these Terms, contact us at support@infinitepackages.com
          </p>
        </div>
    </div>
  );
}

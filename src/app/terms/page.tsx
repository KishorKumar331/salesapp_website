import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | Quick Quotes by IP",
  description: "The terms for using Quick Quotes, the travel quotation and booking software by IP.",
};

const UPDATED = "31 October 2026";
const EMAIL = "support@incognitosolution.com";
const PHONE = "+91 88824 14703";

const SECTIONS = [
  ["relationship", "Our relationship"],
  ["pricing", "Your pricing and your clients"],
  ["suppliers", "Suppliers and third-party data"],
  ["cancellations", "Cancellations"],
  ["availability", "Service availability"],
  ["account", "Your account and your data"],
  ["contact", "Contact"],
] as const;

export default function TermsPage() {
  return (
    <>
      <div className="qq">
        <header className="hero legal-hero">
          <div className="wrap" style={{ display: "block" }}>
            <span className="tag">Terms &amp; conditions</span>
            <h1 style={{ maxWidth: 820 }}>The terms for using <em>Quick Quotes.</em></h1>
            <p className="lead" style={{ maxWidth: 680 }}>
              These terms apply when you use Quick Quotes by IP as a travel seller, agent, sub-agent or partner. By
              using our web dashboard, Android app or quote tools, you agree to them.
            </p>
            <div className="meta">
              <span>Last updated: {UPDATED}</span>
              <span>Applies to the web dashboard, Android app and quote tools</span>
            </div>
            <div className="summary">
              <div><b>We&apos;re the software</b>Not a travel supplier or agent.</div>
              <div><b>Your prices, your call</b>You set markups and deal with your clients.</div>
              <div><b>Your login, your responsibility</b>Keep it safe and don&apos;t share accounts.</div>
              <div><b>Questions?</b>We&apos;re a WhatsApp or email away.</div>
            </div>
          </div>
        </header>

        <div className="wrap legal">
          <nav className="toc" aria-label="On this page">
            <b>On this page</b>
            {SECTIONS.map(([id, label]) => (
              <a key={id} href={`#${id}`}>{label}</a>
            ))}
          </nav>

          <article>
            <section id="relationship">
              <h2>1. Our relationship</h2>
              <p>
                IP provides Quick Quotes, a business-to-business software platform for travel management. We are a
                technology provider, not a travel supplier or principal. You use Quick Quotes as an independent
                business.
              </p>
              <p>
                You are responsible for everything you say, promise, charge and disclose to your own clients.
              </p>
            </section>

            <section id="pricing">
              <h2>2. Your pricing and your clients</h2>
              <p>
                You have full control over the markups you add to costs in Quick Quotes. You are responsible for making
                sure your prices follow local laws, tax rules (including GST) and consumer protection laws.
              </p>
              <p>
                IP is not responsible for disputes between you and your clients about pricing, service quality or
                travel expectations.
              </p>
            </section>

            <section id="suppliers">
              <h2>3. Suppliers and third-party data</h2>
              <p>
                Quick Quotes may connect to third-party suppliers, aggregators or other services. We can&apos;t
                guarantee that their availability or prices are accurate until a booking is confirmed with them.
              </p>
              <p>
                IP is not responsible for bookings lost because a supplier rejects them, a connection times out, or
                inventory changes without notice.
              </p>
            </section>

            <section id="cancellations">
              <h2>4. Cancellations</h2>
              <p>
                <b>Trips you sell:</b> cancellations are governed by the actual suppliers, such as airlines, hotels and
                DMCs, and by your own terms with your clients. We only pass on the supplier&apos;s cancellation terms.
              </p>
              <p>
                <b>Your Quick Quotes subscription:</b> you can cancel any time. How cancellation and payments work is
                explained in our <Link href="/refunds">Cancellation Policy</Link>.
              </p>
            </section>

            <section id="availability">
              <h2>5. Service availability</h2>
              <p>
                Quick Quotes is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;. We work hard to keep it
                running smoothly and aim for 99.9% uptime, but we can&apos;t promise that the Android app, web
                dashboard or quote features will always be error-free or uninterrupted.
              </p>
              <p>IP is not liable for business losses caused by temporary technical downtime.</p>
            </section>

            <section id="account">
              <h2>6. Your account and your data</h2>
              <ul>
                <li>Keep your login details safe. You are responsible for activity on your account.</li>
                <li>You are responsible for checking the accuracy of the quotes, invoices and PDFs you create.</li>
                <li>Don&apos;t misuse or scrape the platform, and don&apos;t share one account across separate branches or businesses.</li>
              </ul>
              <p>
                How we handle your data, and your clients&apos; data, is explained in our{" "}
                <Link href="/privacy">Privacy &amp; Security Policy</Link>.
              </p>
            </section>

            <section id="contact">
              <h2>7. Contact</h2>
              <p>Questions about these terms? We&apos;re happy to help.</p>
              <div className="contact-card" style={{ marginTop: 12 }}>
                <b>IP</b>
                <span>Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a></span>
                <span>Phone / WhatsApp: {PHONE}</span>
                <span>Website: <a href="https://www.incognitosolution.com">www.incognitosolution.com</a></span>
              </div>
            </section>
          </article>
        </div>
      </div>
      <Footer />
    </>
  );
}

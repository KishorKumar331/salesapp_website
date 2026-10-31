import type { Metadata } from "next";
import Footer from "../components/Footer";
import { WHATSAPP_URL } from "../components/home/links";

export const metadata: Metadata = {
  title: "Cancellation Policy | Quick Quotes by IP",
  description: "Quick Quotes is free to start, there is no lock-in, and you can cancel any time.",
};

const UPDATED = "29 October 2026";
const EMAIL = "support@incognitosolution.com";
const PHONE = "+91 88824 14703";

const SECTIONS = [
  ["free", "Try it free first"],
  ["billing", "Subscription and billing"],
  ["cancel", "How to cancel"],
  ["payments", "Payments already made"],
  ["after", "After you cancel"],
  ["travellers", "Your clients' bookings"],
  ["contact", "Contact"],
] as const;

export default function RefundPolicyPage() {
  return (
    <>
      <div className="qq">
        <header className="hero legal-hero">
          <div className="wrap" style={{ display: "block" }}>
            <span className="tag">Cancellation policy</span>
            <h1 style={{ maxWidth: 820 }}>Try it free. <em>Cancel any time.</em></h1>
            <p className="lead" style={{ maxWidth: 680 }}>
              Quick Quotes is free to start, so you can try everything before you pay. Once you subscribe, there&apos;s
              no lock-in and no cancellation fee: stop whenever you like.
            </p>
            <div className="meta">
              <span>Last updated: {UPDATED}</span>
              <span>Applies to all Quick Quotes subscriptions</span>
            </div>
            <div className="summary">
              <div><b>Free to start</b>Try quoting before you pay anything.</div>
              <div><b>Cancel any time</b>No lock-in and no cancellation fee.</div>
              <div><b>Use what you paid for</b>After cancelling, your access runs to the end of your paid month.</div>
              <div><b>Your domain stays yours</b>Always, even after you cancel.</div>
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
            <section id="free">
              <h2>1. Try it free first</h2>
              <p>
                You can sign up and start making quotes without paying. We encourage you to use the free version to make
                sure Quick Quotes suits your business before you subscribe.
              </p>
            </section>

            <section id="billing">
              <h2>2. Subscription and billing</h2>
              <ul>
                <li>The paid plan costs <b>₹1,999 + GST per month</b> and includes the web dashboard, the Android app and, for the first 100 subscribers, a branded website.</li>
                <li>Subscriptions are billed monthly, in advance, through our payment gateway.</li>
                <li>Your subscription continues month to month until you cancel.</li>
                <li>If our prices change, we&apos;ll tell you before the change applies to your next payment.</li>
              </ul>
            </section>

            <section id="cancel">
              <h2>3. How to cancel</h2>
              <p>
                You can cancel at any time by emailing <a href={`mailto:${EMAIL}`}>{EMAIL}</a> from your registered email
                address, or by messaging us on <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp</a>.
                We&apos;ll confirm your cancellation in writing.
              </p>
              <p>
                Once you cancel, you won&apos;t be charged again. You keep full access until the end of the month you have
                already paid for.
              </p>
            </section>

            <section id="payments">
              <h2>4. Payments already made</h2>
              <p>
                Because you can try Quick Quotes free before subscribing, each monthly payment simply covers that month
                of service. When you cancel, we stop all future payments and you keep full access until that month ends.
                Payments already made, including for part months or months with less use, aren&apos;t returned.
              </p>
              <p>
                The website included for the first 100 subscribers is part of the subscription. It has no separate cash
                value and can&apos;t be exchanged for money or a discount.
              </p>
              <div className="callout">
                <b>Billing mistakes are different.</b> If you were charged twice or charged the wrong amount because of an
                error on our side, tell us and we&apos;ll return the extra amount to your original payment method.
              </div>
              <p style={{ marginTop: 14 }}>
                Nothing in this policy limits any rights you have under Indian law that can&apos;t be waived.
              </p>
            </section>

            <section id="after">
              <h2>5. After you cancel</h2>
              <ul>
                <li><b>Your dashboard and app</b> work until the end of your paid month.</li>
                <li><b>Your website</b> goes offline the month after you cancel. Your domain always stays yours.</li>
                <li><b>Your data:</b> ask us to export your quotes, clients and invoices before your access ends. After that, we handle your data as described in our <a href="/privacy">Privacy &amp; Security Policy</a>.</li>
                <li><b>Coming back:</b> you can subscribe again at any time.</li>
              </ul>
            </section>

            <section id="travellers">
              <h2>6. Your clients&apos; bookings</h2>
              <p>
                Quick Quotes is software that helps you make quotes and invoices. We don&apos;t sell travel or hold your
                travellers&apos; money. Cancellations and refunds for trips you sell are between you and your clients,
                under your own terms and your suppliers&apos; rules.
              </p>
            </section>

            <section id="contact">
              <h2>7. Contact</h2>
              <p>Questions about billing or cancelling? We&apos;re happy to help.</p>
              <div className="contact-card" style={{ marginTop: 12 }}>
                <b>IP billing support</b>
                <span>Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a></span>
                <span>Phone / WhatsApp: {PHONE}</span>
              </div>
            </section>
          </article>
        </div>
      </div>
      <Footer />
    </>
  );
}

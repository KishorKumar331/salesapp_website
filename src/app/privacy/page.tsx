import type { Metadata } from "next";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy & Security Policy | Quick Quotes by IP",
  description:
    "How Quick Quotes collects, uses, protects and deletes your data and your clients' data, and the rights you have under Indian law.",
};

const UPDATED = "29 October 2026";
const EMAIL = "support@infinitepackages.com";
const PHONE = "+91 88824 14703";

const SECTIONS = [
  ["about", "Who we are"],
  ["two-kinds", "Your data vs your clients' data"],
  ["collect", "What we collect"],
  ["use", "How we use it"],
  ["consent", "Consent"],
  ["share", "Who we share it with"],
  ["security", "How we keep it secure"],
  ["breach", "If something goes wrong"],
  ["retention", "How long we keep it"],
  ["rights", "Your rights"],
  ["travellers", "For travellers"],
  ["websites", "Websites we build for you"],
  ["children", "Children"],
  ["cookies", "Cookies"],
  ["changes", "Changes to this policy"],
  ["contact", "Grievance officer & contact"],
] as const;

export default function PrivacyPage() {
  return (
    <>
      <div className="qq">
        <header className="hero legal-hero">
          <div className="wrap" style={{ display: "block" }}>
            <span className="tag">Privacy &amp; security</span>
            <h1 style={{ maxWidth: 820 }}>Your data, and your clients&apos; data, stay yours.</h1>
            <p className="lead" style={{ maxWidth: 680 }}>
              This policy explains, in plain words, what Quick Quotes collects, why, how we protect it, and how you can
              see, change or delete it.
            </p>
            <div className="meta">
              <span>Last updated: {UPDATED}</span>
              <span>Applies to the website, web dashboard and Android app</span>
            </div>
            <div className="summary">
              <div><b>We never sell data</b>Not yours, and not your clients&apos;.</div>
              <div><b>Your client list is yours</b>We only process it to run Quick Quotes for you.</div>
              <div><b>Encrypted</b>In transit and at rest, on secure cloud servers.</div>
              <div><b>You&apos;re in control</b>Access, correct, export or delete any time.</div>
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
            <section id="about">
              <h2>1. Who we are</h2>
              <p>
                Quick Quotes is a travel quotation and booking tool made by <b>IP</b>, based in New Delhi,
                India (&ldquo;we&rdquo;, &ldquo;us&rdquo;). This policy covers the IP website, the Quick Quotes web
                dashboard, the Quick Quotes Android app, and the websites we build for subscribers.
              </p>
              <p>
                We follow India&apos;s Information Technology Act, 2000 and its rules, and the Digital Personal Data
                Protection Act, 2023 and the Digital Personal Data Protection Rules, 2025.
              </p>
            </section>

            <section id="two-kinds">
              <h2>2. Your data vs your clients&apos; data</h2>
              <p>Quick Quotes handles two different kinds of personal data, and we treat them differently.</p>
              <h3>Your account data</h3>
              <p>
                Your name, email, phone number and business details. We decide how this is used, so for this data we are
                the <b>Data Fiduciary</b> under the DPDP Act.
              </p>
              <h3>Your clients&apos; data</h3>
              <p>
                The leads, travellers, itineraries, quotes and invoices you add. This is your business data. You decide
                what goes in and why, so <b>you</b> are the Data Fiduciary for it, and we act as your{" "}
                <b>Data Processor</b>: we store and process it only to run Quick Quotes for you.
              </p>
              <div className="callout">
                <b>In short:</b> we never look through, sell, or market to your clients. Their details are used only to
                create your quotes, invoices and reminders.
              </div>
            </section>

            <section id="collect">
              <h2>3. What we collect</h2>
              <ul>
                <li><b>Account details:</b> name, email, phone number, business name and logo, and business details you choose to add, such as GST or address.</li>
                <li><b>Business content:</b> leads, traveller names and contact details, trip details, itineraries, hotels, prices and margins, quotes, invoices, instalments, and tax details such as PAN where you enter them for TCS.</li>
                <li><b>Payments:</b> your subscription payments are handled by our payment gateway. We do not see or store your full card, UPI or bank details.</li>
                <li><b>Device and usage data:</b> IP address, device and browser type, app version, log-in times, error and crash reports, and which features are used.</li>
                <li><b>Messages to us:</b> what you send through our contact forms, WhatsApp or email.</li>
              </ul>
            </section>

            <section id="use">
              <h2>4. How we use it</h2>
              <ul>
                <li>To create and run your account, and to let you log in on the web and the app.</li>
                <li>To build your quotes, PDFs, invoices and payment reminders.</li>
                <li>To sync your data between your devices.</li>
                <li>To bill your subscription and keep records required for tax and accounting.</li>
                <li>To send you service messages, such as new-lead alerts, security notices and changes to your plan.</li>
                <li>To give support when you ask for help.</li>
                <li>To keep the service secure, prevent misuse, and fix bugs.</li>
                <li>To understand which features are used, so we can improve the product. We use overall patterns for this, not your clients&apos; details.</li>
              </ul>
              <p>
                We send marketing messages only if you agree, and you can opt out any time. We never use your clients&apos;
                details for our own marketing.
              </p>
            </section>

            <section id="consent">
              <h2>5. Consent</h2>
              <p>
                When you sign up, you agree to us processing your account data for the purposes above. You can withdraw
                consent at any time by writing to <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. Withdrawing consent may mean we
                can no longer provide the service, and it doesn&apos;t affect processing that already happened.
              </p>
              <p>
                Some processing doesn&apos;t need consent because the law requires it, for example keeping invoices for tax
                purposes or responding to a lawful request.
              </p>
              <p>
                For your clients&apos; data, you are responsible for having a valid reason or their consent to add them to
                Quick Quotes, and for telling them how you use their details.
              </p>
            </section>

            <section id="share">
              <h2>6. Who we share it with</h2>
              <p>We never sell or rent personal data. We share it only in these cases:</p>
              <ul>
                <li><b>Service providers</b> who help us run Quick Quotes, under contracts that require them to protect it: cloud hosting (Amazon Web Services), our payment gateway, and email, SMS and push-notification providers.</li>
                <li><b>When you share it:</b> when you send a quote on WhatsApp or by email, it goes through those apps under their own privacy policies.</li>
                <li><b>When the law requires it:</b> to a court, government agency or the Data Protection Board of India, when we are legally required to.</li>
                <li><b>If our business changes hands:</b> in a merger or sale, your data would pass to the new owner under the same protections, and we would tell you first.</li>
              </ul>
            </section>

            <section id="security">
              <h2>7. How we keep it secure</h2>
              <p>We use reasonable security practices, as the law requires, and keep improving them.</p>
              <div className="secgrid">
                <div><b>Encryption in transit</b><p>Everything between your device and our servers travels over HTTPS (TLS).</p></div>
                <div><b>Encryption at rest</b><p>Data is stored encrypted (AES-256) on Amazon Web Services infrastructure.</p></div>
                <div><b>Limited access</b><p>Only authorised team members can reach production data, only when needed for support or fixes, and access is logged.</p></div>
                <div><b>Separated accounts</b><p>Each business&apos;s data is kept separate, so one account can never see another&apos;s quotes or clients.</p></div>
                <div><b>Backups</b><p>Regular backups so your data can be restored if something fails.</p></div>
                <div><b>Monitoring and logs</b><p>We keep security logs to detect and investigate unusual activity, for at least one year.</p></div>
                <div><b>Payments</b><p>Card and UPI payments are handled by a regulated payment gateway, never by our servers.</p></div>
                <div><b>Safe defaults</b><p>Passwords are never stored in plain text, and sessions expire.</p></div>
              </div>
              <h3>What you can do</h3>
              <ul>
                <li>Use a strong password and don&apos;t share your login.</li>
                <li>Give team members their own access rather than sharing one account.</li>
                <li>Tell us straight away at <a href={`mailto:${EMAIL}`}>{EMAIL}</a> if you think your account has been misused.</li>
              </ul>
            </section>

            <section id="breach">
              <h2>8. If something goes wrong</h2>
              <p>If there is a personal data breach, we will:</p>
              <ul>
                <li>Act straight away to contain it and limit the damage.</li>
                <li>Tell affected users without delay, in plain words: what happened, the likely impact, what we&apos;re doing, what you can do, and who to contact.</li>
                <li>Report it to the Data Protection Board of India, as required by the DPDP Rules, including a detailed report within 72 hours.</li>
                <li>Help you inform your own clients if their details were affected.</li>
              </ul>
            </section>

            <section id="retention">
              <h2>9. How long we keep it</h2>
              <ul>
                <li><b>While your account is active,</b> we keep your data so the service works.</li>
                <li><b>Before closing your account,</b> you can ask us to export your quotes, clients and invoices.</li>
                <li><b>After you close your account,</b> we delete or anonymise your account and business data within a reasonable time, except what the law requires us to keep, such as invoices and tax records.</li>
                <li><b>Security logs</b> are kept for at least one year, as required by law.</li>
                <li><b>Backups</b> are overwritten on a rolling cycle, so deleted data disappears from them over time.</li>
              </ul>
            </section>

            <section id="rights">
              <h2>10. Your rights</h2>
              <p>Under the DPDP Act, you can:</p>
              <ul>
                <li>Ask what personal data we hold about you and how we use it.</li>
                <li>Correct, complete or update your data.</li>
                <li>Ask us to delete your data, except what we must keep by law.</li>
                <li>Withdraw your consent.</li>
                <li>Nominate someone to exercise these rights for you if you are unable to.</li>
                <li>Raise a complaint with our grievance officer, and if you&apos;re not satisfied, with the Data Protection Board of India.</li>
              </ul>
              <p>
                Email <a href={`mailto:${EMAIL}`}>{EMAIL}</a> from your registered email address. We may need to confirm
                your identity, and we&apos;ll respond as quickly as we can, within the time limits set by law.
              </p>
            </section>

            <section id="travellers">
              <h2>11. For travellers</h2>
              <p>
                If a travel seller who uses Quick Quotes sent you a quote, they control your details, not us. Please
                contact them first to see, correct or delete your information. If you can&apos;t reach them, write to us
                and we&apos;ll help pass your request on.
              </p>
            </section>

            <section id="websites">
              <h2>12. Websites we build for you</h2>
              <p>
                If we build a website for your business, you own it and the domain, and enquiries from it go straight
                into your Quick Quotes account. For enquiries from your website visitors, you are the Data Fiduciary and
                we are your Data Processor.
              </p>
              <p>
                Your website should show your own privacy notice to your visitors. We&apos;re happy to help you set one up.
                When your subscription ends, the website goes offline the month after you cancel, and your domain stays
                with you.
              </p>
            </section>

            <section id="children">
              <h2>13. Children</h2>
              <p>
                Quick Quotes accounts are only for adults running a business. Family bookings often include children as
                travellers. If you add a child&apos;s details, you are responsible for having their parent or
                guardian&apos;s consent.
              </p>
            </section>

            <section id="cookies">
              <h2>14. Cookies</h2>
              <p>
                Our website and dashboard use cookies and similar storage that are needed to keep you logged in and make
                the service work. We do not use advertising cookies.
              </p>
            </section>

            <section id="changes">
              <h2>15. Changes to this policy</h2>
              <p>
                We may update this policy as Quick Quotes or the law changes. The date at the top shows the latest
                version. For significant changes, we&apos;ll tell you by email or in the app before they take effect.
              </p>
            </section>

            <section id="contact">
              <h2>16. Grievance officer &amp; contact</h2>
              <p>For any privacy question, request or complaint, contact our grievance officer:</p>
              <div className="contact-card" style={{ marginTop: 12 }}>
                <b>Grievance Officer, IP</b>
                <span>IP, New Delhi, India</span>
                <span>Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a></span>
                <span>Phone: {PHONE}</span>
              </div>
            </section>
          </article>
        </div>
      </div>
      <Footer />
    </>
  );
}

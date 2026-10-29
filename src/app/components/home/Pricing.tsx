import { SIGNUP_URL } from "./links";

export default function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="wrap">
        <div>
          <div className="eyebrow">Pricing</div>
          <h2>Everything you need. One simple price.</h2>
          <p className="sub">
            Start free and quote right away. Upgrade when you&apos;re ready for the full toolkit, including your own
            branded website.
          </p>
        </div>
        <div className="card">
          <div className="r"><span>Travel website</span><s>₹20,000 one-time</s></div>
          <div className="r"><span>Quotation dashboard</span><s>₹3,000 / month</s></div>
          <div className="r"><span>Mobile app</span><s>₹1,000 / month</s></div>
          <div className="you">
            <span>With Quick Quotes, you pay</span>
            <b>₹1,999<span> /month</span></b>
            <span>+ GST · website, dashboard and app included</span>
          </div>
          <div className="free">
            <span aria-hidden="true">🎁</span>
            <span><b>First 100 subscribers</b> get their own branded travel website, free, on their own domain.</span>
          </div>
          <p className="fine">Your domain always belongs to you. The website stays live while your subscription is active.</p>
          <a className="btn btn-p" href={SIGNUP_URL}>Start free →</a>
        </div>
      </div>
    </section>
  );
}

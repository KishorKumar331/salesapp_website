const FAQS = [
  { q: "Is it really free to start?", a: "Yes. Sign up and start sending quotes without a card. The paid plan, ₹1,999 + GST a month, adds the full dashboard, app and website." },
  { q: "Do I need a GST registration or an office?", a: "No. You can start as an individual seller and add your business details later." },
  { q: "Does it work on my phone?", a: "Yes. Use the Android app on the go, and the web dashboard on your laptop. Everything stays in sync." },
  { q: "Who owns my website domain?", a: "You do, always. If you cancel, we hand the domain back to you." },
  { q: "What happens to my website if I cancel?", a: "It stays live while your subscription is active and goes offline the month after you cancel." },
];

export default function HomeFAQ() {
  return (
    <section id="faq">
      <div className="wrap">
        <div className="eyebrow">FAQ</div>
        <h2>Questions, answered.</h2>
        <div className="faq">
          {FAQS.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

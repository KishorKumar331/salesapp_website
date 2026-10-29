const DONE = ["Lead management", "Quote creation", "Deal closing", "Invoicing and payment tracking", "On-ground client care"];

export default function BrandSection() {
  return (
    <section style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="brand">
          <div>
            <div className="eyebrow" style={{ color: "#C4B5FD" }}>You already do the work</div>
            <h2>You&apos;re running a travel business. It&apos;s time it had your name on it.</h2>
            <p className="sub">
              Every trip you sell under someone else&apos;s name builds their brand. Quick Quotes puts yours on every
              quote, invoice and website, and you can start alongside your job.
            </p>
          </div>
          <div className="list">
            {DONE.map((t) => (
              <div key={t}>{t}</div>
            ))}
            <div className="x">
              Building your own brand
              <small>That&apos;s where we come in →</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

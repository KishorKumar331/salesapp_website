const PAINS = [
  { icon: "🌙", title: "Making quotes at midnight after your day job", text: "Every enquiry means another late night in Word or Google Docs." },
  { icon: "⏳", title: "30 minutes for one quote", text: "Copy, paste, fix the formatting, convert to PDF, start again." },
  { icon: "💬", title: "“Thanks, already booked elsewhere”", text: "Your quote was better. It just arrived after someone else's." },
];

export default function PainSection() {
  return (
    <section className="pain">
      <div className="wrap">
        <div className="eyebrow">Sound familiar?</div>
        <h2>You&apos;re good at selling trips. The paperwork is what slows you down.</h2>
        <div className="pains">
          {PAINS.map((p) => (
            <div key={p.title}>
              <div className="q" aria-hidden="true">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

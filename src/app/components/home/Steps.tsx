const STEPS = [
  { title: "Add the lead", text: "Name, destination, dates, budget and travellers. 30 seconds." },
  { title: "Plan day by day", text: "Fill in each day's places, hotel and meals in a simple form." },
  { title: "Send the PDF", text: "A polished, branded quote, shared on WhatsApp in one tap." },
  { title: "Invoice", text: "Instalments, GST, TCS and cancellation policy, done for you." },
  { title: "Booked", text: "Mark it converted and track every payment due." },
];

export default function Steps() {
  return (
    <section id="how">
      <div className="wrap">
        <div className="eyebrow">How it works</div>
        <h2>From enquiry to booking, in one app.</h2>
        <p className="sub">The same five steps you already do, without the copy-paste.</p>
        <div className="steps">
          {STEPS.map((s) => (
            <div className="step" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { PLAY_URL, SIGNUP_URL } from "./links";

export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap">
        <div>
          <span className="tag">For independent travel sellers</span>
          <h1>
            Send a polished travel quote <em>before your competitor even replies.</em>
          </h1>
          <p className="lead">
            Day-wise itineraries, beautiful PDFs and invoices, made on your phone in about a minute, with your brand on
            every page.
          </p>
          <div className="cta">
            <a className="btn btn-p" href={SIGNUP_URL}>
              Start free →
            </a>
            <a className="btn btn-o" href={PLAY_URL} target="_blank" rel="noopener noreferrer">
              Get the Android app
            </a>
          </div>
          <div className="ticks">
            <span>Free to start</span>
            <span>Android + web</span>
            <span>No GST needed to begin</span>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="phone">
            <div className="screen">
              <div className="bar">
                <b>Your Brand Tours</b>
                <p>Quotation for Priya S.</p>
              </div>
              <div className="qcard">
                <h4>Bali Escape</h4>
                <div className="m">5 nights · 2 adults · 12–17 Dec</div>
                <div style={{ marginTop: 10 }}>
                  <div className="row"><span>Hotel · Ubud resort</span><span>4★</span></div>
                  <div className="row"><span>Transfers &amp; sightseeing</span><span>✓</span></div>
                  <div className="row"><span>Breakfast daily</span><span>✓</span></div>
                </div>
                <div className="price">₹84,500</div>
              </div>
              <div className="wa">Send on WhatsApp</div>
            </div>
            <div className="chip a"><span className="dot" />Quote ready<small>in 0:58</small></div>
            <div className="chip b">✓ Advance received<small>₹25,000 · Instalment 1</small></div>
          </div>
        </div>
      </div>
    </header>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

const MESSAGES = [
  { dir: "in", time: "9:41 PM", text: "Hi! Kashmir ka 5 din ka package chahiye, 2 log. Budget around 50k 🙏" },
  { dir: "out", time: "9:42 PM ✓✓", text: "Here you go! Day-wise plan with hotels and sightseeing 😊", pdf: true },
  { dir: "in", time: "9:43 PM", text: "Wow, itna jaldi? Looks really good 👌" },
  { dir: "in", time: "9:44 PM", text: "Advance kaise bhejun?" },
  { dir: "out", time: "9:44 PM ✓✓", text: "UPI link is right in the PDF 👍" },
];

export default function WhatsAppStory() {
  const phone = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const el = phone.current;
    if (!el) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          MESSAGES.forEach((_, i) => timers.push(setTimeout(() => setShown(i + 1), 350 + i * 700)));
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <section>
      <div className="wrap chat">
        <div>
          <div className="eyebrow">This is what speed looks like</div>
          <h2>Enquiry at 9:41. Quote at 9:42. Booked by 9:44.</h2>
          <p className="sub">
            The seller who replies first usually wins, especially against agencies with a whole team. With Quick Quotes,
            that seller is you.
          </p>
          <div className="timeline">
            <div><span>9:41</span>Client asks for a Kashmir package on WhatsApp</div>
            <div><span>9:42</span>You send a branded, day-wise PDF from your phone</div>
            <div className="w"><span>9:44</span>Client asks how to pay the advance</div>
          </div>
        </div>
        <div className="wa-phone" ref={phone} aria-label="Example WhatsApp conversation with a client">
          <div className="wa-top">
            <div className="wa-av">S</div>
            <div>
              <b>Subhash (Kashmir enquiry)</b>
              <small>online</small>
            </div>
          </div>
          <div className="wa-body">
            {MESSAGES.map((m, i) => (
              <div key={i} className={`msg ${m.dir}${i < shown ? " show" : ""}`}>
                {m.pdf && (
                  <div className="pdf">
                    <i>PDF</i>
                    <div>
                      <b>Kashmir_Escape_Quote.pdf</b>
                      <small>4 pages · Your Brand Tours</small>
                    </div>
                  </div>
                )}
                {m.text}
                <time>{m.time}</time>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

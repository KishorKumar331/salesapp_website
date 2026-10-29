"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type Dest = "Kashmir" | "Bali" | "Dubai" | "Goa";

const DESTINATIONS: Record<Dest, { img: string; base: number; days: string[] }> = {
  Kashmir: {
    img: "/destinations/kashmir.jpg",
    base: 4200,
    days: ["Arrive Srinagar · Shikara on Dal Lake", "Gulmarg · Gondola ride", "Pahalgam · Betaab & Aru valley", "Sonmarg day trip", "Mughal gardens & old city", "Doodhpathri meadows", "Local markets & houseboat stay"],
  },
  Bali: {
    img: "/destinations/bali.jpg",
    base: 5200,
    days: ["Arrive Bali · Kuta sunset", "Ubud · Rice terraces & swing", "Tanah Lot temple", "Nusa Penida island tour", "Mount Batur sunrise trek", "Seminyak beach day", "Spa & free day"],
  },
  Dubai: {
    img: "/destinations/dubai.jpg",
    base: 6500,
    days: ["Arrive Dubai · Marina dhow cruise", "Burj Khalifa & Dubai Mall", "Desert safari with BBQ dinner", "Abu Dhabi city tour", "Miracle Garden & Global Village", "Shopping & free day", "Atlantis Aquaventure"],
  },
  Goa: {
    img: "/destinations/goa.jpg",
    base: 2800,
    days: ["Arrive Goa · Baga beach evening", "North Goa forts & beaches", "Old Goa churches & Panjim", "South Goa · Palolem", "Dudhsagar falls trip", "Spice plantation visit", "Free day · water sports"],
  },
};

const STAR_MULTIPLIER: Record<number, number> = { 3: 1, 4: 1.35, 5: 1.9 };

const inr = (x: number) => "₹" + Math.round(x).toLocaleString("en-IN");
const clock = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
const plural = (n: number, word: string) => `${n} ${word}${n === 1 ? "" : "s"}`;

export default function QuoteDemo() {
  const [dest, setDest] = useState<Dest>("Kashmir");
  const [nights, setNights] = useState(4);
  const [pax, setPax] = useState(2);
  const [stars, setStars] = useState(4);
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const [sentIn, setSentIn] = useState<number | null>(null);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (startedAt === null) return;
    timer.current = setInterval(() => setElapsed(Math.floor((Date.now() - startedAt) / 1000)), 250);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [startedAt]);

  const touch = () => {
    setSentIn(null);
    if (startedAt === null) {
      setElapsed(0);
      setStartedAt(Date.now());
    }
  };

  const send = () => {
    const secs = startedAt === null ? 1 : Math.max(1, Math.floor((Date.now() - startedAt) / 1000));
    setSentIn(secs);
    setElapsed(secs);
    setStartedAt(null);
  };

  const d = DESTINATIONS[dest];
  const days = d.days.slice(0, nights).concat("Departure · Airport drop");
  const total = Math.round((d.base * nights * pax * STAR_MULTIPLIER[stars]) / 500) * 500;

  return (
    <section className="demo" id="try">
      <div className="wrap">
        <div className="eyebrow">Try it yourself</div>
        <h2>Make a quote right here. It takes about 10 seconds.</h2>
        <p className="sub">
          Pick a destination, change the nights and travellers, and watch the quote build itself. The real app works the
          same way.
        </p>
        <div className="demo-grid">
          <div className="ctrl">
            <div>
              <span className="lbl">Destination</span>
              <div className="chips">
                {(Object.keys(DESTINATIONS) as Dest[]).map((k) => (
                  <button key={k} type="button" className={k === dest ? "on" : ""} onClick={() => { touch(); setDest(k); }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={DESTINATIONS[k].img} alt="" />
                    {k}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <span className="lbl">Nights</span>
              <div className="step-in">
                <button type="button" aria-label="Fewer nights" onClick={() => { touch(); setNights((n) => Math.max(2, n - 1)); }}>−</button>
                <b>{plural(nights, "night")}</b>
                <button type="button" aria-label="More nights" onClick={() => { touch(); setNights((n) => Math.min(7, n + 1)); }}>+</button>
              </div>
            </div>
            <div>
              <span className="lbl">Travellers</span>
              <div className="step-in">
                <button type="button" aria-label="Fewer travellers" onClick={() => { touch(); setPax((n) => Math.max(1, n - 1)); }}>−</button>
                <b>{plural(pax, "traveller")}</b>
                <button type="button" aria-label="More travellers" onClick={() => { touch(); setPax((n) => Math.min(8, n + 1)); }}>+</button>
              </div>
            </div>
            <div>
              <span className="lbl">Hotels</span>
              <div className="chips">
                {[3, 4, 5].map((s) => (
                  <button key={s} type="button" className={s === stars ? "on" : ""} onClick={() => { touch(); setStars(s); }}>
                    {s}★
                  </button>
                ))}
              </div>
            </div>
            <div className="clock">
              <span>Your quote time</span>
              <b>{clock(elapsed)}</b>
            </div>
            <Link className="btn btn-p" href="/quote-builder" style={{ width: "100%" }}>
              Build a real quotation for clients →
            </Link>
          </div>
          <div>
            <div className="doc">
              <div
                className="cover"
                style={{ backgroundImage: `linear-gradient(180deg, rgba(20,10,50,.05) 20%, rgba(20,10,50,.82)), url(${d.img})` }}
              >
                <small>YOUR BRAND TOURS · QUOTATION</small>
                <h3>{dest} Escape</h3>
                <p>
                  {nights}N / {nights + 1}D · {plural(pax, "traveller")} · {stars}★ hotels · Breakfast included
                </p>
              </div>
              <div className="days">
                {days.map((t, i) => (
                  <div className="day" key={`${dest}-${i}-${t}`}>
                    <b>Day {i + 1}</b>
                    <span>{t}</span>
                  </div>
                ))}
              </div>
              <div className="doc-foot">
                <div>
                  <div className="t">Total package cost</div>
                  <div className="amt">{inr(total)}</div>
                </div>
                <button type="button" className="send" onClick={send}>
                  Send on WhatsApp
                </button>
              </div>
              {sentIn !== null && (
                <div className="toast">
                  ✓ Quote ready in {clock(sentIn)}. In the real app, it&apos;s on your client&apos;s WhatsApp now.
                </div>
              )}
            </div>
            <p className="demo-note">Sample prices for the demo. In the app you set your own costs and margin.</p>
            <p className="photo-credit">Photos: Unsplash</p>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { ArrowDown, ArrowUp, ImagePlus, Plus, Trash2 } from "lucide-react";
import type { Day, Hotel, Quote } from "./types";
import { CATEGORIES, MEAL_LABEL, PRESET_COVERS } from "./types";
import { dayDate, emptyHotel, syncDays, uid } from "./quote-utils";
import { readImage } from "./ImageInput";

type Props = { quote: Quote; setQuote: (fn: (q: Quote) => Quote) => void };

export default function BuilderForm({ quote: q, setQuote }: Props) {
  const set = <K extends keyof Quote>(key: K, patch: Partial<Quote[K]>) =>
    setQuote((prev) => ({ ...prev, [key]: { ...(prev[key] as object), ...patch } as Quote[K] }));

  const setNights = (n: number) =>
    setQuote((prev) => {
      const nights = Math.min(30, Math.max(1, n || 1));
      return { ...prev, trip: { ...prev.trip, nights }, days: syncDays(prev.days, nights) };
    });

  const setHotel = (id: string, patch: Partial<Hotel>) =>
    setQuote((prev) => ({ ...prev, hotels: prev.hotels.map((h) => (h.id === id ? { ...h, ...patch } : h)) }));

  const setDay = (id: string, patch: Partial<Day>) =>
    setQuote((prev) => ({ ...prev, days: prev.days.map((d) => (d.id === id ? { ...d, ...patch } : d)) }));

  const moveDay = (i: number, dir: -1 | 1) =>
    setQuote((prev) => {
      const days = [...prev.days];
      const j = i + dir;
      if (j < 0 || j >= days.length) return prev;
      [days[i], days[j]] = [days[j], days[i]];
      return { ...prev, days };
    });

  const upload = async (file: File | undefined, kind: "logo" | "cover") => {
    if (!file) return;
    try {
      if (kind === "logo") set("brand", { logo: await readImage(file, 240, "image/png") });
      else set("trip", { cover: await readImage(file, 1400) });
    } catch {
      alert("Sorry, that image couldn't be read. Try a JPG or PNG.");
    }
  };

  const num = (v: string) => Math.max(0, parseInt(v, 10) || 0);

  return (
    <div className="qb-form">
      <section className="qb-sec">
        <h3 className="qb-leg"><span>1</span>Your business</h3>
        <p className="hint">This appears on the quote, so your client sees your brand.</p>
        <div className="two">
          <label>Business name<input value={q.brand.name} onChange={(e) => set("brand", { name: e.target.value })} placeholder="Your Brand Tours" /></label>
          <label>Phone / WhatsApp<input value={q.brand.phone} onChange={(e) => set("brand", { phone: e.target.value })} placeholder="+91 98765 43210" /></label>
        </div>
        <div className="two">
          <label>Email<input type="email" value={q.brand.email} onChange={(e) => set("brand", { email: e.target.value })} placeholder="hello@yourbrand.com" /></label>
          <div className="lbl-wrap">
            <span className="lbl">Logo (optional)</span>
            <div className="logo-row">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {q.brand.logo ? <img src={q.brand.logo} alt="Your logo" /> : null}
              <label className="file-btn">
                <ImagePlus size={16} /> {q.brand.logo ? "Change" : "Upload"}
                <input type="file" accept="image/*" hidden onChange={(e) => upload(e.target.files?.[0], "logo")} />
              </label>
              {q.brand.logo ? <button type="button" className="link" onClick={() => set("brand", { logo: "" })}>Remove</button> : null}
            </div>
          </div>
        </div>
      </section>

      <section className="qb-sec">
        <h3 className="qb-leg"><span>2</span>Client</h3>
        <label>Client name<input value={q.client.name} onChange={(e) => set("client", { name: e.target.value })} placeholder="Priya Sharma" /></label>
        <div className="two">
          <label>Phone<input value={q.client.phone} onChange={(e) => set("client", { phone: e.target.value })} /></label>
          <label>Email<input type="email" value={q.client.email} onChange={(e) => set("client", { email: e.target.value })} /></label>
        </div>
      </section>

      <section className="qb-sec">
        <h3 className="qb-leg"><span>3</span>Trip</h3>
        <div className="two">
          <label>Trip title<input value={q.trip.title} onChange={(e) => set("trip", { title: e.target.value })} placeholder="Kashmir Escape" /></label>
          <label>Places covered<input value={q.trip.destination} onChange={(e) => set("trip", { destination: e.target.value })} placeholder="Srinagar · Gulmarg · Pahalgam" /></label>
        </div>
        <div className="three">
          <label>Starting from<input value={q.trip.from} onChange={(e) => set("trip", { from: e.target.value })} placeholder="Delhi" /></label>
          <label>Start date<input type="date" value={q.trip.startDate} onChange={(e) => set("trip", { startDate: e.target.value })} /></label>
          <label>Nights<input type="number" min={1} max={30} value={q.trip.nights} onChange={(e) => setNights(parseInt(e.target.value, 10))} /></label>
        </div>
        <div className="three">
          <label>Adults<input type="number" min={0} value={q.trip.adults} onChange={(e) => set("trip", { adults: num(e.target.value) })} /></label>
          <label>Children<input type="number" min={0} value={q.trip.children} onChange={(e) => set("trip", { children: num(e.target.value) })} /></label>
          <label>Infants<input type="number" min={0} value={q.trip.infants} onChange={(e) => set("trip", { infants: num(e.target.value) })} /></label>
        </div>
        <span className="lbl">Cover photo</span>
        <div className="covers">
          {PRESET_COVERS.map((c) => (
            <button type="button" key={c.src} className={q.trip.cover === c.src ? "on" : ""} onClick={() => set("trip", { cover: c.src })} style={{ backgroundImage: `url(${c.src})` }}>
              <span>{c.label}</span>
            </button>
          ))}
          <label className={`up${q.trip.cover.startsWith("data:") ? " on" : ""}`} style={q.trip.cover.startsWith("data:") ? { backgroundImage: `url(${q.trip.cover})` } : undefined}>
            <ImagePlus size={18} />
            <span>Upload</span>
            <input type="file" accept="image/*" hidden onChange={(e) => upload(e.target.files?.[0], "cover")} />
          </label>
        </div>
      </section>

      <section className="qb-sec">
        <h3 className="qb-leg"><span>4</span>Hotels</h3>
        {q.hotels.map((h, i) => (
          <div className="card-row" key={h.id}>
            <div className="card-head">
              <b>Hotel {i + 1}</b>
              {q.hotels.length > 1 ? (
                <button type="button" className="icon" aria-label="Remove hotel" onClick={() => setQuote((p) => ({ ...p, hotels: p.hotels.filter((x) => x.id !== h.id) }))}>
                  <Trash2 size={16} />
                </button>
              ) : null}
            </div>
            <div className="two">
              <label>Hotel name<input value={h.name} onChange={(e) => setHotel(h.id, { name: e.target.value })} placeholder="The Khyber Himalayan Resort" /></label>
              <label>City<input value={h.city} onChange={(e) => setHotel(h.id, { city: e.target.value })} placeholder="Gulmarg" /></label>
            </div>
            <div className="four">
              <label>Category
                <select value={h.category} onChange={(e) => setHotel(h.id, { category: e.target.value as Hotel["category"] })}>
                  {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                </select>
              </label>
              <label>Rating (out of 5)<input type="number" min={0} max={5} step={0.1} value={h.rating} onChange={(e) => setHotel(h.id, { rating: e.target.value })} placeholder="4.5" /></label>
              <label>Meal plan
                <select value={h.meal} onChange={(e) => setHotel(h.id, { meal: e.target.value as Hotel["meal"] })}>
                  {(Object.keys(MEAL_LABEL) as Hotel["meal"][]).map((m) => <option key={m} value={m}>{MEAL_LABEL[m]}</option>)}
                </select>
              </label>
              <label>Nights<input type="number" min={1} value={h.nights} onChange={(e) => setHotel(h.id, { nights: Math.max(1, num(e.target.value)) })} /></label>
            </div>
          </div>
        ))}
        <button type="button" className="add" onClick={() => setQuote((p) => ({ ...p, hotels: [...p.hotels, emptyHotel()] }))}>
          <Plus size={16} /> Add hotel
        </button>
      </section>

      <section className="qb-sec">
        <h3 className="qb-leg"><span>5</span>Day-wise itinerary</h3>
        <p className="hint">Days follow your nights and start date automatically. Leave a day empty to skip it.</p>
        {q.days.map((d, i) => (
          <div className="card-row" key={d.id}>
            <div className="card-head">
              <b>Day {i + 1}{dayDate(q, i) ? <small> · {dayDate(q, i)}</small> : null}</b>
              <span className="tools">
                <button type="button" className="icon" aria-label="Move day up" disabled={i === 0} onClick={() => moveDay(i, -1)}><ArrowUp size={16} /></button>
                <button type="button" className="icon" aria-label="Move day down" disabled={i === q.days.length - 1} onClick={() => moveDay(i, 1)}><ArrowDown size={16} /></button>
                {q.days.length > 1 ? (
                  <button type="button" className="icon" aria-label="Remove day" onClick={() => setQuote((p) => ({ ...p, days: p.days.filter((x) => x.id !== d.id) }))}><Trash2 size={16} /></button>
                ) : null}
              </span>
            </div>
            <label>Title<input value={d.title} onChange={(e) => setDay(d.id, { title: e.target.value })} placeholder="Arrive Srinagar · Shikara on Dal Lake" /></label>
            <label>Description<textarea rows={3} value={d.description} onChange={(e) => setDay(d.id, { description: e.target.value })} placeholder="What happens today: pickups, sightseeing, meals, stay…" /></label>
          </div>
        ))}
        <button type="button" className="add" onClick={() => setQuote((p) => ({ ...p, days: [...p.days, { id: uid(), title: "", description: "" }] }))}>
          <Plus size={16} /> Add day
        </button>
      </section>

      <section className="qb-sec">
        <h3 className="qb-leg"><span>6</span>Price &amp; inclusions</h3>
        <div className="three">
          <label>Price (₹)<input inputMode="numeric" value={q.price.amount} onChange={(e) => set("price", { amount: e.target.value.replace(/[^0-9]/g, "") })} placeholder="68500" /></label>
          <label>Price is
            <select value={q.price.basis} onChange={(e) => set("price", { basis: e.target.value as Quote["price"]["basis"] })}>
              <option value="total">Total for the group</option>
              <option value="per person">Per person</option>
            </select>
          </label>
          <label>Valid till<input type="date" value={q.price.validTill} onChange={(e) => set("price", { validTill: e.target.value })} /></label>
        </div>
        <div className="two">
          <label>Included (one per line)<textarea rows={5} value={q.price.inclusions} onChange={(e) => set("price", { inclusions: e.target.value })} /></label>
          <label>Not included (one per line)<textarea rows={5} value={q.price.exclusions} onChange={(e) => set("price", { exclusions: e.target.value })} /></label>
        </div>
        <label>Notes / terms<textarea rows={3} value={q.price.notes} onChange={(e) => set("price", { notes: e.target.value })} placeholder="Advance needed, cancellation terms, anything else…" /></label>
      </section>
    </div>
  );
}

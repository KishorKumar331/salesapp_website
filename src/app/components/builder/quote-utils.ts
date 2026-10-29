import type { Day, Hotel, Quote } from "./types";

export const uid = () => Math.random().toString(36).slice(2, 10);

export const addDays = (iso: string, n: number) => {
  if (!iso) return null;
  const d = new Date(iso + "T00:00:00");
  if (Number.isNaN(d.getTime())) return null;
  d.setDate(d.getDate() + n);
  return d;
};

export const fmtDate = (d: Date | null, opts: Intl.DateTimeFormatOptions = { weekday: "short", day: "numeric", month: "short", year: "numeric" }) =>
  d ? d.toLocaleDateString("en-IN", opts) : "";

export const dayDate = (q: Quote, i: number) => fmtDate(addDays(q.trip.startDate, i));

export const tripRange = (q: Quote) => {
  const s = addDays(q.trip.startDate, 0);
  const e = addDays(q.trip.startDate, q.trip.nights);
  if (!s || !e) return "";
  return `${fmtDate(s, { day: "numeric", month: "short" })} – ${fmtDate(e, { day: "numeric", month: "short", year: "numeric" })}`;
};

export const duration = (q: Quote) => `${q.trip.nights} Night${q.trip.nights === 1 ? "" : "s"} / ${q.trip.nights + 1} Days`;

export const travellers = (q: Quote) => {
  const p: string[] = [];
  const { adults: a, children: c, infants: i } = q.trip;
  if (a) p.push(`${a} Adult${a === 1 ? "" : "s"}`);
  if (c) p.push(`${c} Child${c === 1 ? "" : "ren"}`);
  if (i) p.push(`${i} Infant${i === 1 ? "" : "s"}`);
  return p.join(", ") || "—";
};

export const inr = (v: string) => {
  const n = Number(String(v).replace(/[^0-9.]/g, ""));
  return n ? "₹" + Math.round(n).toLocaleString("en-IN") : "";
};

export const lines = (s: string) => s.split("\n").map((l) => l.replace(/^[-•*]\s*/, "").trim()).filter(Boolean);

export const stars = (cat: string) => {
  const n = parseInt(cat, 10);
  return Number.isFinite(n) ? "★".repeat(n) : "";
};

export const fileName = (q: Quote) => {
  const clean = (s: string) => s.trim().replace(/[^a-zA-Z0-9]+/g, "_").replace(/^_|_$/g, "");
  const first = q.client.name.trim().split(/\s+/)[0] || "";
  return [clean(q.trip.title) || "Travel", "Quote", clean(first)].filter(Boolean).join("_") + ".pdf";
};

/** Keep one itinerary day per trip day (nights + 1). Only trailing days that are still empty are removed. */
export const syncDays = (days: Day[], nights: number): Day[] => {
  const want = Math.max(1, nights + 1);
  const next = [...days];
  while (next.length < want) next.push({ id: uid(), title: "", description: "" });
  while (next.length > want && !next[next.length - 1].title && !next[next.length - 1].description) next.pop();
  return next;
};

export const emptyHotel = (): Hotel => ({ id: uid(), name: "", city: "", category: "4★", rating: "", meal: "CP", nights: 1 });

const today = () => {
  const d = new Date();
  d.setDate(d.getDate() + 30);
  return d.toISOString().slice(0, 10);
};

export const sampleQuote = (): Quote => ({
  brand: { name: "Your Brand Tours", phone: "+91 98765 43210", email: "hello@yourbrand.com", logo: "" },
  client: { name: "Priya Sharma", phone: "+91 91234 56789", email: "priya@example.com" },
  trip: {
    title: "Kashmir Escape",
    destination: "Srinagar · Gulmarg · Pahalgam",
    from: "Delhi",
    startDate: today(),
    nights: 4,
    adults: 2,
    children: 1,
    infants: 0,
    cover: "/destinations/kashmir.jpg",
  },
  hotels: [
    { id: uid(), name: "Royal Dal Houseboat", city: "Srinagar", category: "Houseboat", rating: "4.6", meal: "MAP", nights: 1 },
    { id: uid(), name: "The Khyber Himalayan Resort", city: "Gulmarg", category: "5★", rating: "4.7", meal: "CP", nights: 2 },
    { id: uid(), name: "Pine Spring Hotel", city: "Pahalgam", category: "4★", rating: "4.3", meal: "MAP", nights: 1 },
  ],
  days: [
    { id: uid(), title: "Arrive Srinagar · Shikara on Dal Lake", description: "Pickup from Srinagar airport and check in to your houseboat. In the evening, enjoy a relaxing shikara ride on Dal Lake and visit the floating market." },
    { id: uid(), title: "Srinagar to Gulmarg · Gondola ride", description: "Drive to Gulmarg, the meadow of flowers. Take the Gulmarg Gondola, one of the highest cable cars in the world, for views of the Himalayas." },
    { id: uid(), title: "Gulmarg at leisure", description: "Free day for snow activities, a pony ride to Khilanmarg, or simply enjoying the mountain air." },
    { id: uid(), title: "Gulmarg to Pahalgam · Betaab Valley", description: "Drive to Pahalgam via saffron fields. Visit Betaab Valley and Aru Valley, and walk along the Lidder river." },
    { id: uid(), title: "Departure · Airport drop", description: "After breakfast, drive back to Srinagar airport with sweet memories." },
  ],
  price: {
    amount: "68500",
    basis: "total",
    validTill: "",
    inclusions: "4 nights stay in the hotels listed\nMeals as per the meal plan\nAll transfers and sightseeing by private car\nOne shikara ride on Dal Lake\nAll taxes",
    exclusions: "Flights or train tickets\nGulmarg Gondola tickets\nPony rides and personal expenses\nAnything not listed in inclusions",
    notes: "Prices are subject to availability at the time of booking. 30% advance confirms the booking.",
  },
});

export const blankQuote = (brand: Quote["brand"]): Quote => ({
  brand,
  client: { name: "", phone: "", email: "" },
  trip: { title: "", destination: "", from: "", startDate: today(), nights: 3, adults: 2, children: 0, infants: 0, cover: "" },
  hotels: [emptyHotel()],
  days: syncDays([], 3),
  price: { amount: "", basis: "total", validTill: "", inclusions: "", exclusions: "", notes: "" },
});

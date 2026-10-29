import { Document, Font, Image, Page, Path, StyleSheet, Svg, Text, View } from "@react-pdf/renderer";
import type { Quote } from "./types";
import { MEAL_LABEL } from "./types";
import { dayDate, duration, inr, lines, stars, travellers, tripRange } from "./quote-utils";

const P = "#7C3AED";
const P2 = "#5B21B6";
const INK = "#1E1B4B";
const MUTE = "#6B6A8A";
const LAV = "#F5F3FF";
const LINE = "#E9E5FB";
const GREEN = "#16A34A";

// Layered shading behind the cover text: stacked, overlapping strips build a smooth fade with no seams,
// so white text stays readable on any photo.
const SHADE = Array.from({ length: 30 }, (_, i) => 225 - i * 7.5);

let registeredFor = "";
export function registerPdfFonts(base: string) {
  if (registeredFor === base) return;
  Font.register({
    family: "Jakarta",
    fonts: [
      { src: `${base}/fonts/PlusJakartaSans-400.ttf`, fontWeight: 400 },
      { src: `${base}/fonts/PlusJakartaSans-600.ttf`, fontWeight: 600 },
      { src: `${base}/fonts/PlusJakartaSans-700.ttf`, fontWeight: 700 },
      { src: `${base}/fonts/PlusJakartaSans-800.ttf`, fontWeight: 800 },
    ],
  });
  Font.registerHyphenationCallback((word) => [word]);
  registeredFor = base;
}

const s = StyleSheet.create({
  page: { fontFamily: "Jakarta", fontSize: 10, color: INK, paddingBottom: 56, backgroundColor: "#FFFFFF" },
  body: { paddingHorizontal: 40 },
  cover: { height: 330, position: "relative", backgroundColor: P2 },
  coverImg: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, objectFit: "cover" },
  brandPill: { position: "absolute", top: 26, left: 40, flexDirection: "row", alignItems: "center", backgroundColor: "#FFFFFF", borderRadius: 20, paddingVertical: 6, paddingHorizontal: 12 },
  brandLogo: { width: 22, height: 22, borderRadius: 11, marginRight: 8, objectFit: "cover" },
  brandName: { fontSize: 11, fontWeight: 800, color: P2 },
  quoteTag: { position: "absolute", top: 29, right: 40, color: "#FFFFFF", fontSize: 8, fontWeight: 700, letterSpacing: 1.5, backgroundColor: "#140A32", borderRadius: 10, paddingVertical: 5, paddingHorizontal: 10 },
  coverText: { position: "absolute", left: 40, right: 40, bottom: 30, color: "#FFFFFF" },
  forLabel: { fontSize: 9, fontWeight: 700, letterSpacing: 1.6, opacity: 0.9 },
  title: { fontSize: 34, fontWeight: 800, marginTop: 6, lineHeight: 1.1 },
  subtitle: { fontSize: 11.5, marginTop: 8, opacity: 0.95 },
  glance: { flexDirection: "row", marginTop: -26, marginHorizontal: 40, backgroundColor: "#FFFFFF", borderRadius: 14, borderWidth: 1, borderColor: LINE, paddingVertical: 14 },
  gItem: { flex: 1, paddingHorizontal: 14, borderRightWidth: 1, borderRightColor: LINE },
  gLabel: { fontSize: 7.5, color: MUTE, fontWeight: 700, letterSpacing: 1 },
  gValue: { fontSize: 11, fontWeight: 700, marginTop: 4 },
  h2: { fontSize: 16, fontWeight: 800, color: INK, marginBottom: 10 },
  eyebrow: { fontSize: 8, fontWeight: 800, color: P, letterSpacing: 1.6, marginBottom: 4 },
  priceBox: { marginTop: 22, backgroundColor: P2, borderRadius: 14, padding: 18, flexDirection: "row", justifyContent: "space-between", alignItems: "center", color: "#FFFFFF" },
  priceLabel: { fontSize: 9, fontWeight: 700, letterSpacing: 1.2, opacity: 0.85 },
  priceAmt: { fontSize: 26, fontWeight: 800, marginTop: 2 },
  priceSide: { fontSize: 9.5, textAlign: "right", opacity: 0.95, lineHeight: 1.5 },
  twoCol: { flexDirection: "row", marginTop: 22, gap: 16 },
  col: { flex: 1, borderWidth: 1, borderColor: LINE, borderRadius: 12, padding: 14 },
  colTitle: { fontSize: 11, fontWeight: 800, marginBottom: 8 },
  li: { flexDirection: "row", marginBottom: 5, alignItems: "flex-start" },
  liText: { flex: 1, fontSize: 9.5, lineHeight: 1.45, color: "#3B3A5E" },
  x: { width: 12, fontSize: 10, color: "#E11D48", fontWeight: 700 },
  section: { marginTop: 26 },
  day: { flexDirection: "row" },
  rail: { width: 64, alignItems: "center" },
  badge: { backgroundColor: P, color: "#FFFFFF", fontSize: 8, fontWeight: 800, borderRadius: 8, paddingVertical: 4, paddingHorizontal: 8, letterSpacing: 0.8 },
  railLine: { width: 2, flexGrow: 1, backgroundColor: LINE, marginTop: 4 },
  dayBody: { flex: 1, paddingBottom: 18, paddingLeft: 6 },
  dayDate: { fontSize: 8.5, color: P2, fontWeight: 700 },
  dayTitle: { fontSize: 12.5, fontWeight: 800, marginTop: 2 },
  dayDesc: { fontSize: 9.8, color: "#3B3A5E", marginTop: 4, lineHeight: 1.55 },
  hotels: { flexDirection: "row", flexWrap: "wrap", gap: 12 },
  hotel: { width: "48.5%", borderWidth: 1, borderColor: LINE, borderRadius: 12, padding: 14 },
  hName: { fontSize: 12, fontWeight: 800 },
  hCity: { fontSize: 9, color: MUTE, marginTop: 2 },
  hRow: { flexDirection: "row", flexWrap: "wrap", gap: 6, marginTop: 10 },
  chip: { fontSize: 8.5, fontWeight: 700, backgroundColor: LAV, color: P2, borderRadius: 6, paddingVertical: 3, paddingHorizontal: 7 },
  chipGreen: { fontSize: 8.5, fontWeight: 700, backgroundColor: "#DCFCE7", color: GREEN, borderRadius: 6, paddingVertical: 3, paddingHorizontal: 7 },
  starTxt: { fontSize: 9, color: "#F59E0B" },
  notes: { marginTop: 22, backgroundColor: LAV, borderRadius: 12, padding: 14 },
  notesText: { fontSize: 9.5, color: "#3B3A5E", lineHeight: 1.5 },
  contact: { marginTop: 22, borderTopWidth: 1, borderTopColor: LINE, paddingTop: 14, flexDirection: "row", justifyContent: "space-between" },
  footer: { position: "absolute", left: 40, right: 40, bottom: 22, flexDirection: "row", justifyContent: "space-between", fontSize: 8, color: MUTE, borderTopWidth: 1, borderTopColor: LINE, paddingTop: 8 },
  made: { color: P, fontWeight: 700 },
});

function Tick() {
  return (
    <Svg width={12} height={12} viewBox="0 0 24 24" style={{ marginRight: 2, marginTop: 1 }}>
      <Path d="M5 12.5l4.2 4.2L19 7" stroke={GREEN} strokeWidth={3} fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

const resolve = (src: string, base: string) => (src.startsWith("/") ? `${base}${src}` : src);

export default function QuotePDF({ quote: q, base }: { quote: Quote; base: string }) {
  const inc = lines(q.price.inclusions);
  const exc = lines(q.price.exclusions);
  const amount = inr(q.price.amount);
  const meals = [...new Set(q.hotels.filter((h) => h.name).map((h) => h.meal))];
  const hotels = q.hotels.filter((h) => h.name.trim());
  const days = q.days.filter((d) => d.title.trim() || d.description.trim());
  const lastDayId = days[days.length - 1]?.id;
  const brand = q.brand.name.trim() || "Your Brand";
  const contactLine = [q.brand.phone, q.brand.email].filter(Boolean).join("  ·  ");

  return (
    <Document title={`${q.trip.title || "Travel"} quotation${q.client.name ? ` for ${q.client.name}` : ""}`} author={brand} creator="Quick Quotes by IP" producer="Quick Quotes by IP">
      <Page size="A4" style={s.page}>
        <View style={s.cover}>
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          {q.trip.cover ? <Image src={resolve(q.trip.cover, base)} style={s.coverImg} /> : null}
          {SHADE.map((h) => (
            <View key={`b${h}`} style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: h, backgroundColor: "#140A32", opacity: 0.066 }} />
          ))}
          <View style={s.brandPill}>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            {q.brand.logo ? <Image src={q.brand.logo} style={s.brandLogo} /> : null}
            <Text style={s.brandName}>{brand}</Text>
          </View>
          <Text style={s.quoteTag}>TRAVEL QUOTATION</Text>
          <View style={s.coverText}>
            {q.client.name ? <Text style={s.forLabel}>PREPARED FOR {q.client.name.toUpperCase()}</Text> : null}
            <Text style={s.title}>{q.trip.title || "Your Trip"}</Text>
            <Text style={s.subtitle}>
              {[duration(q), tripRange(q), q.trip.destination].filter(Boolean).join("   ·   ")}
            </Text>
          </View>
        </View>

        <View style={s.glance}>
          <View style={s.gItem}><Text style={s.gLabel}>DURATION</Text><Text style={s.gValue}>{duration(q)}</Text></View>
          <View style={s.gItem}><Text style={s.gLabel}>TRAVELLERS</Text><Text style={s.gValue}>{travellers(q)}</Text></View>
          <View style={s.gItem}><Text style={s.gLabel}>STAYS</Text><Text style={s.gValue}>{hotels.length ? `${hotels.length} hotel${hotels.length === 1 ? "" : "s"}` : "—"}</Text></View>
          <View style={[s.gItem, { borderRightWidth: 0 }]}><Text style={s.gLabel}>MEALS</Text><Text style={s.gValue}>{meals.length ? meals.join(" / ") : "—"}</Text></View>
        </View>

        <View style={s.body}>
          {amount ? (
            <View style={s.priceBox}>
              <View>
                <Text style={s.priceLabel}>{q.price.basis === "per person" ? "PACKAGE COST PER PERSON" : "TOTAL PACKAGE COST"}</Text>
                <Text style={s.priceAmt}>{amount}</Text>
              </View>
              <Text style={s.priceSide}>
                {q.trip.from ? `From ${q.trip.from}\n` : ""}
                {q.price.validTill ? `Valid till ${new Date(q.price.validTill + "T00:00:00").toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}` : "Subject to availability"}
              </Text>
            </View>
          ) : null}

          {inc.length || exc.length ? (
            <View style={s.twoCol} wrap={false}>
              {inc.length ? (
                <View style={s.col}>
                  <Text style={s.colTitle}>What&apos;s included</Text>
                  {inc.map((l, i) => (
                    <View style={s.li} key={i}><Tick /><Text style={s.liText}>{l}</Text></View>
                  ))}
                </View>
              ) : null}
              {exc.length ? (
                <View style={s.col}>
                  <Text style={s.colTitle}>Not included</Text>
                  {exc.map((l, i) => (
                    <View style={s.li} key={i}><Text style={s.x}>×</Text><Text style={s.liText}>{l}</Text></View>
                  ))}
                </View>
              ) : null}
            </View>
          ) : null}

          {hotels.length ? (
            <View style={s.section} wrap={false}>
              <Text style={s.eyebrow}>WHERE YOU&apos;LL STAY</Text>
              <Text style={s.h2}>Your hotels</Text>
              <View style={s.hotels}>
                {hotels.map((h) => (
                  <View style={s.hotel} key={h.id}>
                    <Text style={s.hName}>{h.name}</Text>
                    <Text style={s.hCity}>
                      {[h.city, `${h.nights} night${h.nights === 1 ? "" : "s"}`].filter(Boolean).join("  ·  ")}
                    </Text>
                    <View style={s.hRow}>
                      <Text style={s.chip}>{stars(h.category) ? `${parseInt(h.category, 10)}-star` : h.category}</Text>
                      {stars(h.category) ? <Text style={s.starTxt}>{stars(h.category)}</Text> : null}
                      {h.rating ? <Text style={s.chipGreen}>{h.rating}/5 guest rating</Text> : null}
                      <Text style={s.chip}>{MEAL_LABEL[h.meal]}</Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          ) : null}
        </View>

        {days.length ? (
          <View style={[s.body, s.section]}>
            <Text style={s.eyebrow}>DAY BY DAY</Text>
            <Text style={s.h2}>Your itinerary</Text>
            {q.days.map((d, i) =>
              d.title.trim() || d.description.trim() ? (
                <View style={s.day} key={d.id} wrap={false}>
                  <View style={s.rail}>
                    <Text style={s.badge}>DAY {i + 1}</Text>
                    {d.id !== lastDayId ? <View style={s.railLine} /> : null}
                  </View>
                  <View style={s.dayBody}>
                    {dayDate(q, i) ? <Text style={s.dayDate}>{dayDate(q, i)}</Text> : null}
                    <Text style={s.dayTitle}>{d.title || `Day ${i + 1}`}</Text>
                    {d.description ? <Text style={s.dayDesc}>{d.description}</Text> : null}
                  </View>
                </View>
              ) : null
            )}
          </View>
        ) : null}

        <View style={s.body}>
          {q.price.notes.trim() ? (
            <View style={s.notes} wrap={false}>
              <Text style={[s.colTitle, { marginBottom: 4 }]}>Good to know</Text>
              <Text style={s.notesText}>{q.price.notes}</Text>
            </View>
          ) : null}
          <View style={s.contact} wrap={false}>
            <View>
              <Text style={{ fontSize: 8, color: MUTE, fontWeight: 700, letterSpacing: 1 }}>READY TO BOOK?</Text>
              <Text style={{ fontSize: 13, fontWeight: 800, marginTop: 3 }}>{brand}</Text>
            </View>
            <View style={{ alignItems: "flex-end" }}>
              {q.brand.phone ? <Text style={{ fontSize: 10, fontWeight: 700 }}>{q.brand.phone}</Text> : null}
              {q.brand.email ? <Text style={{ fontSize: 10, color: MUTE, marginTop: 2 }}>{q.brand.email}</Text> : null}
            </View>
          </View>
        </View>

        <View style={s.footer} fixed>
          <Text>{[brand, contactLine].filter(Boolean).join("  ·  ")}</Text>
          <Text render={({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`} />
        </View>
        <Text fixed style={{ position: "absolute", bottom: 10, left: 0, right: 0, textAlign: "center", fontSize: 6.5, color: "#A9A6C6" }}>
          Made with <Text style={s.made}>Quick Quotes by IP</Text>
        </Text>
      </Page>
    </Document>
  );
}

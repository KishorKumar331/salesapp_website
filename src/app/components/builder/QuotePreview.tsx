import type { Quote } from "./types";
import { MEAL_LABEL } from "./types";
import { dayDate, duration, inr, lines, stars, travellers, tripRange } from "./quote-utils";

/** On-screen mirror of the PDF, updated live as the form changes. */
export default function QuotePreview({ quote: q }: { quote: Quote }) {
  const inc = lines(q.price.inclusions);
  const exc = lines(q.price.exclusions);
  const amount = inr(q.price.amount);
  const hotels = q.hotels.filter((h) => h.name.trim());
  const meals = [...new Set(hotels.map((h) => h.meal))];
  const brand = q.brand.name.trim() || "Your Brand";

  return (
    <div className="qp">
      <div className="qp-cover" style={q.trip.cover ? { backgroundImage: `url(${q.trip.cover})` } : undefined}>
        <div className="qp-shade" />
        <div className="qp-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {q.brand.logo ? <img src={q.brand.logo} alt="" /> : null}
          {brand}
        </div>
        <span className="qp-tag">TRAVEL QUOTATION</span>
        <div className="qp-cover-text">
          {q.client.name ? <small>PREPARED FOR {q.client.name.toUpperCase()}</small> : null}
          <h3>{q.trip.title || "Your Trip"}</h3>
          <p>{[duration(q), tripRange(q), q.trip.destination].filter(Boolean).join("  ·  ")}</p>
        </div>
      </div>

      <div className="qp-glance">
        <div><small>DURATION</small><b>{duration(q)}</b></div>
        <div><small>TRAVELLERS</small><b>{travellers(q)}</b></div>
        <div><small>STAYS</small><b>{hotels.length ? `${hotels.length} hotel${hotels.length === 1 ? "" : "s"}` : "—"}</b></div>
        <div><small>MEALS</small><b>{meals.length ? meals.join(" / ") : "—"}</b></div>
      </div>

      <div className="qp-body">
        {amount ? (
          <div className="qp-price">
            <div>
              <small>{q.price.basis === "per person" ? "PACKAGE COST PER PERSON" : "TOTAL PACKAGE COST"}</small>
              <b>{amount}</b>
            </div>
            <span>
              {q.trip.from ? <>From {q.trip.from}<br /></> : null}
              {q.price.validTill
                ? `Valid till ${new Date(q.price.validTill + "T00:00:00").toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}`
                : "Subject to availability"}
            </span>
          </div>
        ) : null}

        {inc.length || exc.length ? (
          <div className="qp-two">
            {inc.length ? (
              <div>
                <h4>What&apos;s included</h4>
                <ul className="inc">{inc.map((l, i) => <li key={i}>{l}</li>)}</ul>
              </div>
            ) : null}
            {exc.length ? (
              <div>
                <h4>Not included</h4>
                <ul className="exc">{exc.map((l, i) => <li key={i}>{l}</li>)}</ul>
              </div>
            ) : null}
          </div>
        ) : null}

        {hotels.length ? (
          <div className="qp-sec">
            <span className="qp-eye">WHERE YOU&apos;LL STAY</span>
            <h4 className="qp-h">Your hotels</h4>
            <div className="qp-hotels">
              {hotels.map((h) => (
                <div key={h.id}>
                  <b>{h.name}</b>
                  <small>{[h.city, `${h.nights} night${h.nights === 1 ? "" : "s"}`].filter(Boolean).join("  ·  ")}</small>
                  <div className="qp-chips">
                    <span>{stars(h.category) ? `${parseInt(h.category, 10)}-star` : h.category}</span>
                    {stars(h.category) ? <em>{stars(h.category)}</em> : null}
                    {h.rating ? <span className="g">{h.rating}/5 guest rating</span> : null}
                    <span>{MEAL_LABEL[h.meal]}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {q.days.some((d) => d.title.trim() || d.description.trim()) ? (
          <div className="qp-sec">
            <span className="qp-eye">DAY BY DAY</span>
            <h4 className="qp-h">Your itinerary</h4>
            <div className="qp-days">
              {q.days.map((d, i) =>
                d.title.trim() || d.description.trim() ? (
                  <div className="qp-day" key={d.id}>
                    <span className="badge">DAY {i + 1}</span>
                    <div>
                      {dayDate(q, i) ? <small>{dayDate(q, i)}</small> : null}
                      <b>{d.title || `Day ${i + 1}`}</b>
                      {d.description ? <p>{d.description}</p> : null}
                    </div>
                  </div>
                ) : null
              )}
            </div>
          </div>
        ) : null}

        {q.price.notes.trim() ? (
          <div className="qp-notes"><h4>Good to know</h4><p>{q.price.notes}</p></div>
        ) : null}

        <div className="qp-contact">
          <div><small>READY TO BOOK?</small><b>{brand}</b></div>
          <div className="r">{q.brand.phone ? <b>{q.brand.phone}</b> : null}{q.brand.email ? <span>{q.brand.email}</span> : null}</div>
        </div>
        <p className="qp-made">Made with <b>Quick Quotes by IP</b></p>
      </div>
    </div>
  );
}

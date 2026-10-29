"use client";

import dynamic from "next/dynamic";

// The builder reads the saved draft from the browser, so it only renders on the client.
const QuoteBuilder = dynamic(() => import("./QuoteBuilder"), {
  ssr: false,
  loading: () => <div className="qb-loading">Loading the quote builder…</div>,
});

export default function BuilderClient() {
  return <QuoteBuilder />;
}

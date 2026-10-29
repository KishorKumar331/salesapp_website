import type { Metadata } from "next";
import "../qq-builder.css";
import Footer from "../components/Footer";
import BuilderClient from "../components/builder/BuilderClient";

export const metadata: Metadata = {
  title: "Free travel quotation maker | Quick Quotes by IP",
  description:
    "Fill in your client, hotels and day-wise itinerary, watch the quote build live, and download a polished PDF to share on WhatsApp. Free, no sign-up.",
};

export default function QuoteBuilderPage() {
  return (
    <>
      <div className="qq">
        <header className="hero qb-hero">
          <div className="wrap" style={{ display: "block" }}>
            <span className="tag">Free quotation maker</span>
            <h1 style={{ maxWidth: 860 }}>
              Build a full travel quote. <em>Download it as a PDF.</em>
            </h1>
            <p className="lead" style={{ maxWidth: 680 }}>
              Add your client, hotels and day-wise plan. The quote builds itself as you type, ready to share on
              WhatsApp. Free, with no sign-up, and your data stays on your device.
            </p>
          </div>
        </header>
        <div className="wrap">
          <BuilderClient />
        </div>
      </div>
      <Footer />
    </>
  );
}

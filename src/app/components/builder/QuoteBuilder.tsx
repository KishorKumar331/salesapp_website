"use client";

import { useEffect, useState } from "react";
import { Download, Loader2, RotateCcw, Share2, Sparkles } from "lucide-react";
import BuilderForm from "./BuilderForm";
import QuotePreview from "./QuotePreview";
import type { Quote } from "./types";
import { blankQuote, fileName, sampleQuote } from "./quote-utils";
import { SIGNUP_URL } from "../home/links";

const KEY = "qq-quote-builder-v1";

function loadDraft(): Quote {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (raw) return { ...sampleQuote(), ...JSON.parse(raw) } as Quote;
  } catch {
    /* storage can be blocked; fall back to the example */
  }
  return sampleQuote();
}

async function makePdf(q: Quote): Promise<Blob> {
  const [{ pdf }, { default: QuotePDF, registerPdfFonts }] = await Promise.all([
    import("@react-pdf/renderer"),
    import("./QuotePDF"),
  ]);
  const base = window.location.origin;
  registerPdfFonts(base);
  return pdf(<QuotePDF quote={q} base={base} />).toBlob();
}

export default function QuoteBuilder() {
  const [quote, setQuote] = useState<Quote>(loadDraft);
  const [tab, setTab] = useState<"form" | "preview">("form");
  const [busy, setBusy] = useState<"" | "download" | "share">("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const canShare = typeof navigator !== "undefined" && typeof navigator.canShare === "function";

  useEffect(() => {
    try {
      window.localStorage.setItem(KEY, JSON.stringify(quote));
    } catch {
      /* large images can exceed storage; the form still works */
    }
  }, [quote]);

  const download = async () => {
    setBusy("download");
    setError("");
    try {
      const blob = await makePdf(quote);
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName(quote);
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 5000);
      setDone(true);
    } catch (e) {
      console.error(e);
      setError("Sorry, the PDF couldn't be created. Please try again.");
    } finally {
      setBusy("");
    }
  };

  const share = async () => {
    setBusy("share");
    setError("");
    try {
      const file = new File([await makePdf(quote)], fileName(quote), { type: "application/pdf" });
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file], title: quote.trip.title || "Travel quotation" });
        setDone(true);
      } else {
        setError("Sharing isn't supported on this device. Use Download instead.");
      }
    } catch (e) {
      if ((e as Error)?.name !== "AbortError") setError("Sharing didn't work. Use Download instead.");
    } finally {
      setBusy("");
    }
  };

  const startFresh = () => {
    if (confirm("Clear this quote and start a new one? Your business details will be kept.")) {
      setQuote((q) => blankQuote(q.brand));
      setDone(false);
    }
  };

  const actions = (
    <div className="qb-actions">
      <button type="button" className="btn btn-p" onClick={download} disabled={!!busy}>
        {busy === "download" ? <Loader2 size={18} className="spin" /> : <Download size={18} />} Download PDF
      </button>
      {canShare ? (
        <button type="button" className="btn btn-o" onClick={share} disabled={!!busy}>
          {busy === "share" ? <Loader2 size={18} className="spin" /> : <Share2 size={18} />} Share
        </button>
      ) : null}
    </div>
  );

  return (
    <div className="qb">
      <div className="qb-top">
        <div className="qb-tabs" role="tablist">
          <button type="button" role="tab" aria-selected={tab === "form"} className={tab === "form" ? "on" : ""} onClick={() => setTab("form")}>Form</button>
          <button type="button" role="tab" aria-selected={tab === "preview"} className={tab === "preview" ? "on" : ""} onClick={() => setTab("preview")}>Preview</button>
        </div>
        <div className="qb-reset">
          <button type="button" className="link" onClick={startFresh}><RotateCcw size={15} /> Start fresh</button>
          <button type="button" className="link" onClick={() => { setQuote(sampleQuote()); setDone(false); }}><Sparkles size={15} /> Load example</button>
        </div>
      </div>

      <div className="qb-grid">
        <div className={`qb-left${tab === "form" ? " show" : ""}`}>
          <BuilderForm quote={quote} setQuote={setQuote} />
        </div>
        <div className={`qb-right${tab === "preview" ? " show" : ""}`}>
          <div className="qb-sticky">
            {actions}
            {error ? <p className="qb-error">{error}</p> : null}
            {done ? (
              <div className="qb-done">
                <b>Your quote is ready ✓</b>
                <span>Want to save quotes, track clients and send invoices? It&apos;s free to start.</span>
                <a className="btn btn-p" href={SIGNUP_URL}>Sign up free →</a>
              </div>
            ) : null}
            <QuotePreview quote={quote} />
          </div>
        </div>
      </div>

      <div className="qb-mobile-bar">{actions}</div>
    </div>
  );
}

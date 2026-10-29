"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { SIGNUP_URL, WHATSAPP_URL } from "./links";

export default function FinalCTA() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", expectations: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const close = () => {
    setOpen(false);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", expectations: "" });
    }, 300);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await fetch("/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSent(true);
    } catch (err) {
      console.error("Failed to send support request", err);
    } finally {
      setSending(false);
    }
  };

  return (
    <section style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="final">
          <h2>Your next quote can go out in a minute.</h2>
          <p className="sub">Free to start. Your brand on every page.</p>
          <div className="cta">
            <a className="btn btn-w" href={SIGNUP_URL}>Start free →</a>
            <a className="btn btn-o" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
            <button type="button" className="btn btn-o" onClick={() => setOpen(true)}>Leave us a message</button>
          </div>
        </div>
      </div>

      {open && (
        <div className="qq-modal" role="dialog" aria-modal="true" aria-labelledby="qq-modal-title">
          <div className="shade" onClick={close} />
          <div className="box">
            <div className="head">
              <button type="button" className="close" onClick={close} aria-label="Close">
                <X size={20} />
              </button>
              <h3 id="qq-modal-title">How can we help?</h3>
              <p>Tell us a little about your travel business and we&apos;ll get back to you.</p>
            </div>
            {sent ? (
              <div className="done">
                <b>Message received!</b>
                <p className="sub" style={{ margin: "0 auto 20px" }}>We&apos;ll get back to you shortly.</p>
                <button type="button" className="btn btn-o" onClick={close}>Close</button>
              </div>
            ) : (
              <form onSubmit={submit}>
                <label>
                  Your name
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </label>
                <label>
                  Email
                  <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </label>
                <label>
                  Message
                  <textarea required rows={4} value={form.expectations} onChange={(e) => setForm({ ...form, expectations: e.target.value })} />
                </label>
                <button type="submit" className="btn btn-p" disabled={sending}>
                  {sending ? "Sending…" : "Send message"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

"use client";

import { useState } from "react";

const SERVICES = [
  "Free branded website (first 100 subscribers)",
  "Dashboard + Android app (₹1,999 + GST / month)",
  "Everything: website, dashboard and app",
  "Custom PDF layout",
];

const EMPTY = { agencyName: "", contactPerson: "", phone: "", email: "", serviceType: SERVICES[0], requirements: "" };

export default function ConsultForm() {
  const [form, setForm] = useState(EMPTY);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const set = (k: keyof typeof EMPTY) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

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
      console.error("Failed to send consultation request", err);
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div className="formcard">
        <div className="done">
          <b>Request sent!</b>
          <p className="sub" style={{ margin: "0 auto 20px" }}>We&apos;ll reach out on WhatsApp or phone shortly.</p>
          <button type="button" className="btn btn-o" onClick={() => { setForm(EMPTY); setSent(false); }}>
            Send another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="formcard">
      <h3>Tell us what you need</h3>
      <p className="sub" style={{ fontSize: 15, marginTop: 6 }}>A few details about your travel business, and we&apos;ll get back to you.</p>
      <form onSubmit={submit}>
        <div className="two">
          <label>Business name<input required value={form.agencyName} onChange={set("agencyName")} placeholder="Your Brand Tours" /></label>
          <label>Your name<input required value={form.contactPerson} onChange={set("contactPerson")} /></label>
        </div>
        <div className="two">
          <label>WhatsApp / phone<input required type="tel" value={form.phone} onChange={set("phone")} /></label>
          <label>Email<input required type="email" value={form.email} onChange={set("email")} /></label>
        </div>
        <label>
          I&apos;m interested in
          <select value={form.serviceType} onChange={set("serviceType")}>
            {SERVICES.map((s) => <option key={s}>{s}</option>)}
          </select>
        </label>
        <label>Anything else?<textarea rows={4} value={form.requirements} onChange={set("requirements")} placeholder="Destinations you sell, your domain, questions…" /></label>
        <button type="submit" className="btn btn-p" disabled={sending}>{sending ? "Sending…" : "Send request"}</button>
      </form>
    </div>
  );
}

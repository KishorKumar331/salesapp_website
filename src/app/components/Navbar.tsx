"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { LOGIN_URL, SIGNUP_URL } from "./home/links";

const NAV_LINKS = [
  { name: "Make a free quote", href: "/quote-builder" },
  { name: "Try it", href: "/#try" },
  { name: "How it works", href: "/#how" },
  { name: "Pricing", href: "/#pricing" },
  { name: "FAQ", href: "/#faq" },
  { name: "Privacy & security", href: "/privacy" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="qq qq-nav">
      <div className="wrap">
        <Link className="logo" href="/" onClick={() => setOpen(false)}>
          <i>QQ</i>
          <span>
            Quick Quotes<small>By IP</small>
          </span>
        </Link>
        <div className="links">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} className="hide-sm" href={l.href}>
              {l.name}
            </Link>
          ))}
          <a className="hide-sm" href={LOGIN_URL}>Log in</a>
          <a className="btn btn-p" href={SIGNUP_URL}>Start free</a>
          <button
            type="button"
            className="menu-btn"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <div className={`drawer${open ? " open" : ""}`}>
        {NAV_LINKS.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.name}
          </Link>
        ))}
        <a href={LOGIN_URL}>Log in</a>
      </div>
    </nav>
  );
}

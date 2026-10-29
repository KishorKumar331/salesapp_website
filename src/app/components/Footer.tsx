import Link from "next/link";
import { LOGIN_URL, PLAY_URL, SUPPORT_EMAIL } from "./home/links";

export default function Footer() {
  return (
    <footer className="qq qq-footer">
      <div className="wrap">
        <span>
          © {new Date().getFullYear()} IP ·{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> · Made in India 🇮🇳
        </span>
        <div className="fl">
          <a href={PLAY_URL} target="_blank" rel="noopener noreferrer">Android app</a>
          <a href={LOGIN_URL}>Log in</a>
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy &amp; security</Link>
          <Link href="/refunds">Cancellation policy</Link>
        </div>
      </div>
    </footer>
  );
}

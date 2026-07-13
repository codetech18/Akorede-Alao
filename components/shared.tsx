"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { site, sections } from "@/lib/data";

/* ---------- scroll reveal ---------- */
export function Reveal({
  children,
  as: Tag = "div",
  className = "",
  ...rest
}: {
  children: React.ReactNode;
  as?: any;
  className?: string;
  [key: string]: any;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

/* ---------- nav ---------- */
export function Nav() {
  return (
    <nav className="nav">
      <Link href="/" className="nav-logo display">
        Akorede<span>.</span>
      </Link>
      <div className="nav-links">
        <Link href="/#about">About</Link>
        <Link href="/#work">Work</Link>
        <Link href="/#notes">Notes</Link>
        <Link href="/#contact">Contact</Link>
      </div>
      <Link href="/#contact" className="nav-hire">
        Available for work →
      </Link>
    </nav>
  );
}

/* ---------- Lagos clock (UTC+1, no DST) ---------- */
function useLagosTime() {
  const [time, setTime] = useState("--:--");
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const lagos = new Date(
        now.getTime() + now.getTimezoneOffset() * 60000 + 3600000,
      );
      const hh = String(lagos.getHours()).padStart(2, "0");
      const mm = String(lagos.getMinutes()).padStart(2, "0");
      setTime(`${hh}:${mm}`);
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);
  return time;
}

/* ---------- colophon footer ---------- */
export function Footer() {
  const time = useLagosTime();
  const letters = site.name.toUpperCase().split("");

  return (
    <footer className="foot" id="contact">
      <div className="foot-top">
        <Reveal>
          <h2>
            Have a product that needs to <em>actually ship?</em>
          </h2>
          <a href={`mailto:${site.email}`} className="foot-mail">
            {site.email}
          </a>
        </Reveal>
        <Reveal className="foot-col">
          <h4>Index</h4>
          <ul>
            {sections.map((s) => (
              <li key={s.id}>
                <Link href={`/#${s.id === "top" ? "" : s.id}`}>
                  <span className="idx">{s.num}</span>
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="foot-col">
          <h4>Colophon</h4>
          <p className="foot-meta">
            <span className="live">●</span> <b>Available for work</b>
            <br />
            Lagos · {time} WAT
            <br />
            {site.coords}
            <br />
            Next.js · deployed on Vercel
          </p>
        </Reveal>
      </div>

      <div className="giant" aria-hidden="true">
        <h3>
          {letters.map((ch, i) => (
            <span key={i} className="ltr">
              {ch === " " ? "\u00A0" : ch}
            </span>
          ))}
        </h3>
      </div>

      <div className="baseline">
        <span>© 2026 {site.name.toUpperCase()} · BUILT, NOT TEMPLATED</span>
        <span className="soc">
          {site.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
              {s.label.toUpperCase()}
            </a>
          ))}
        </span>
      </div>
    </footer>
  );
}

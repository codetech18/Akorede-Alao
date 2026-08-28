"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { site } from "@/lib/data";
import { ThemeToggle } from "./theme-toggle";

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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // close the drawer if the viewport grows back to desktop width
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 761px)");
    const onChange = () => setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <nav className="nav">
      <Link href="/" className="nav-logo display" onClick={() => setOpen(false)}>
        Akorede<span>.</span>
      </Link>
      <div className="nav-links">
        <Link href="/#about">About</Link>
        <Link href="/#experience">Experience</Link>
        <Link href="/#work">Work</Link>
        <Link href="/#notes">Notes</Link>
        <Link href="/#contact">Contact</Link>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <ThemeToggle />
        <Link href="/#contact" className="nav-hire">
          Available for work →
        </Link>
        <button
          className={`nav-burger ${open ? "is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="nav-mobile-drawer">
          <Link href="/#about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="/#experience" onClick={() => setOpen(false)}>
            Experience
          </Link>
          <Link href="/#work" onClick={() => setOpen(false)}>
            Work
          </Link>
          <Link href="/#notes" onClick={() => setOpen(false)}>
            Notes
          </Link>
          <Link href="/#contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
          <Link href="/#contact" className="nav-mobile-hire" onClick={() => setOpen(false)}>
            Available for work →
          </Link>
        </div>
      )}
    </nav>
  );
}

/* ---------- typing headline ---------- */
function TypewriterHeading() {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const [typed, setTyped] = useState(0);
  const [armed, setArmed] = useState(false);
  const pre = "Have a product that needs to ";
  const em = "actually ship?";
  const full = pre + em;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTyped(full.length);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setArmed(true), 450);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [full.length]);

  useEffect(() => {
    if (!armed || typed >= full.length) return;
    const id = setTimeout(() => setTyped((t) => t + 1), 34);
    return () => clearTimeout(id);
  }, [armed, typed, full.length]);

  const typedPre = pre.slice(0, Math.min(typed, pre.length));
  const typedEm = em.slice(0, Math.max(0, typed - pre.length));
  const done = typed >= full.length;

  return (
    <h2 ref={ref}>
      <span aria-hidden="true">
        {typedPre}
        <em>{typedEm}</em>
        <span className={`type-cursor${done ? " is-done" : ""}`} />
      </span>
      <span className="sr-only">{full}</span>
    </h2>
  );
}

/* ---------- colophon footer ---------- */
export function Footer() {
  const letters = site.name.toUpperCase().split("");

  return (
    <footer className="foot" id="contact">
      <div className="foot-top">
        <Reveal>
          <TypewriterHeading />
          <a href={`mailto:${site.email}`} className="foot-mail">
            {site.email}
          </a>
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
        <span>© 2026 {site.name.toUpperCase()}</span>
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

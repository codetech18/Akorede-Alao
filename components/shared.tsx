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
        <Link href="/#about">The engineer</Link>
        <Link href="/#experience">Experience</Link>
        <Link href="/#work">Work</Link>
        <Link href="/#notes">Notes</Link>
        <Link href="/#contact">Contact</Link>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <ThemeToggle />
        <a href={`mailto:${site.email}?subject=Project%20or%20role%20inquiry`} className="nav-hire">
          Let's talk →
        </a>
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
          <a href={`mailto:${site.email}?subject=Project%20or%20role%20inquiry`} className="nav-mobile-hire" onClick={() => setOpen(false)}>
            Let's talk →
          </a>
        </div>
      )}
    </nav>
  );
}

/* ---------- colophon footer ---------- */
export function Footer() {

  return (
    <footer className="foot" id="contact">
      <div className="foot-top">
        <Reveal>
          <p className="studio-kicker">Have something in mind?</p>
          <h2>Let\'s build something<br /><em>people rely on.</em></h2>
          <a href={`mailto:${site.email}`} className="foot-mail">
            {site.email}
          </a>
        </Reveal>
      </div>

      <div className="baseline">
        <span>© 2026 {site.fullName.toUpperCase()}</span>
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

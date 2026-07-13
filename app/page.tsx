import Link from "next/link";
import type { CSSProperties } from "react";
import {
  site,
  hero,
  stats,
  about,
  flagships,
  alsoShipped,
  testimonialsIntro,
  testimonials,
  notes,
  sections,
} from "@/lib/data";
import { Reveal, Nav, Footer } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="shell wrap" style={{ padding: 0, maxWidth: 1180, margin: "0 auto" }}>
        <aside className="spine">
          <div className="spine-inner">
            <span className="coord">
              6.5244° N
              <br />
              3.3792° E
              <br />
              LAGOS, NG
            </span>
            <ol>
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id === "top" ? "" : s.id}`}>
                    <span className="n">{s.num}</span> {s.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </aside>

        <main className="main" style={{ paddingRight: 28 }}>
          {/* ---------- 01 STORY ---------- */}
          <section id="top">
            <Reveal className="avail">
              <span className="dot" />
              {site.availability}
            </Reveal>
            <Reveal as="p" className="eyebrow">
              {site.role}
            </Reveal>
            <Reveal as="h1" className="h1">
              {hero.headline[0]}
              <em>{hero.headline[1]}</em>
            </Reveal>
            <Reveal as="p" className="lede">
              {hero.lede}
            </Reveal>
            <Reveal className="cta">
              <a href="#work" className="btn btn-solid">
                See the work
              </a>
              <a href="#contact" className="btn btn-ghost">
                Work with me
              </a>
              <a href={site.cvPath} className="btn btn-ghost" download>
                ↓ CV (PDF)
              </a>
            </Reveal>

            <Reveal className="now">
              <span className="dot" />
              <span className="label">
                Now shipping · <b>{site.nowShipping.name}</b>,{" "}
                {site.nowShipping.desc}
              </span>
            </Reveal>

            <Reveal className="stats">
              {stats.map((s) => (
                <div className="stat" key={s.label}>
                  <b>
                    {s.value}
                    {s.accent && <em>{s.accent}</em>}
                  </b>
                  <span>{s.label}</span>
                </div>
              ))}
            </Reveal>
          </section>

          {/* ---------- 02 ABOUT ---------- */}
          <section className="sec" id="about">
            <Reveal className="sec-head">
              <span className="num">02</span>
              <h2>About</h2>
              <span className="count">the builder</span>
            </Reveal>
            <div className="about">
              <Reveal className="bio">
                {about.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                <p className="pull">{about.pullquote}</p>
                {about.paragraphsAfter.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </Reveal>
              <Reveal as="aside" className="facts">
                <div className="portrait">
                  <img src="/korede.jpg" alt="Akorede Alao" />
                </div>
                <dl>
                  {about.facts.map((f) => (
                    <div key={f.label}>
                      <dt>{f.label}</dt>
                      <dd>{f.value}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </section>

          {/* ---------- 03 WORK ---------- */}
          <section className="sec" id="work">
            <Reveal className="sec-head">
              <span className="num">03</span>
              <h2>Selected work</h2>
              <span className="count">7 shipped</span>
            </Reveal>

            {flagships.map((f) => (
              <Reveal className="work-row" key={f.slug}>
                <div>
                  <div className="work-title display">
                    {f.title} <span className="arrow">→</span>
                  </div>
                  <p className="work-desc">{f.desc}</p>

                  <div className="media">
                    {f.video ? (
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        poster={f.poster}
                        src={f.video}
                      />
                    ) : (
                      <div className="ph">
                        <span>{f.videoLabel}</span>
                      </div>
                    )}
                  </div>

                  <details className="case">
                    <summary>
                      <span className="pl">+</span> Case study · how it was
                      built
                    </summary>
                    <div className="case-body">
                      {f.caseStudy.map((c) => (
                        <div className="case-cell" key={c.heading}>
                          <h4>{c.heading}</h4>
                          <p>{c.body}</p>
                        </div>
                      ))}
                    </div>
                  </details>

                  <div className="links">
                    {f.links.map((l) =>
                      l.external ? (
                        <a
                          key={l.label}
                          href={l.href}
                          className="ext"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {l.label}
                        </a>
                      ) : (
                        <Link key={l.label} href={l.href}>
                          {l.label}
                        </Link>
                      ),
                    )}
                  </div>

                  <div className="work-stack">
                    {f.stack.map((s) => (
                      <span className="chip" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="work-meta">
                  <span className="yr">{f.meta.year}</span>
                  <br />
                  {f.meta.type}
                  <br />
                  {f.meta.where}
                </div>
              </Reveal>
            ))}

            <Reveal className="subhead">Also shipped</Reveal>
            {alsoShipped.map((p) => (
              <Reveal as="a" className="mini" key={p.title}>
                <h3 className="display">{p.title}</h3>
                <p>{p.desc}</p>
                <span className="yr">{p.year}</span>
              </Reveal>
            ))}

            <Reveal className="building">
              <span className="dot" />
              <span>
                Currently building · <b>{site.building.name}</b>,{" "}
                {site.building.desc}
              </span>
            </Reveal>
          </section>

          {/* ---------- 04 TESTIMONIALS ---------- */}
          <section className="sec" id="testimonials">
            <Reveal className="sec-head">
              <span className="num">04</span>
              <h2>{testimonialsIntro.title}</h2>
              <span className="count">from collaborators</span>
            </Reveal>
            <Reveal as="p" className="testimonial-intro">
              {testimonialsIntro.desc}
            </Reveal>

            <div className="testimonial-grid">
              {testimonials.map((t, i) => (
                <Reveal
                  className="testimonial-card"
                  key={t.name}
                  style={
                    {
                      "--reveal-delay": `${(i % 3) * 80}ms`,
                    } as CSSProperties
                  }
                >
                  <blockquote className="testimonial-bubble">
                    {t.quote}
                  </blockquote>
                  <div className="testimonial-person">
                    <img src={t.avatarSrc} alt={t.name} />
                    <div>
                      <b>{t.name}</b>
                      <span>{t.role}</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* ---------- 05 NOTES ---------- */}
          <section className="sec" id="notes">
            <Reveal className="sec-head">
              <span className="num">05</span>
              <h2>Field notes</h2>
              <span className="count">writing</span>
            </Reveal>
            {notes.map((n, i) => (
              <Reveal
                as={Link}
                href={`/notes/${n.slug}`}
                className="note-row"
                key={n.slug}
              >
                <span className="idx">N{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display">{n.title}</h3>
                <span className="rt">{n.readTime}</span>
              </Reveal>
            ))}
          </section>

          {/* ---------- 06 CONTACT / COLOPHON ---------- */}
          <Footer />
        </main>
      </div>
    </>
  );
}

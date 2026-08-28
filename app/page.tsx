import Link from "next/link";
import type { CSSProperties } from "react";
import {
  site,
  hero,
  stats,
  about,
  experienceIntro,
  experience,
  education,
  flagships,
  alsoShipped,
  testimonialsIntro,
  testimonials,
  notes,
  notesIntro,
  sections,
} from "@/lib/data";
import { Reveal, Nav, Footer } from "@/components/shared";
import { StockLogIllustration } from "@/components/stocklog-illustration";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="shell wrap">
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

        <main className="main">
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

            <div className="stats">
              {stats.map((s, i) => (
                <Reveal
                  as="div"
                  className="stat"
                  key={s.label}
                  style={{ "--reveal-delay": `${i * 70}ms` } as CSSProperties}
                >
                  <b>
                    {s.value}
                    {s.accent && <em>{s.accent}</em>}
                  </b>
                  <span>{s.label}</span>
                </Reveal>
              ))}
            </div>
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

          {/* ---------- 03 EXPERIENCE ---------- */}
          <section className="sec" id="experience">
            <Reveal className="sec-head">
              <span className="num">03</span>
              <h2>{experienceIntro.title}</h2>
              <span className="count">4+ years</span>
            </Reveal>
            <Reveal as="p" className="exp-intro">
              {experienceIntro.desc}
            </Reveal>

            <div className="exp-list">
              {experience.map((role, i) => (
                <Reveal
                  key={role.company}
                  className={`exp-item ${role.current ? "is-current" : ""}`}
                  style={{ "--reveal-delay": `${(i % 3) * 60}ms` } as CSSProperties}
                >
                  <span className="exp-dot" />
                  <div className="exp-head">
                    <span className="exp-period mono">{role.period}</span>
                    {role.current && <span className="exp-badge">Current</span>}
                  </div>
                  <h3 className="display exp-role">
                    {role.title} <span className="exp-at">@ {role.company}</span>
                  </h3>
                  <div className="exp-meta mono">
                    {role.type ? `${role.location} · ${role.type}` : role.location}
                  </div>
                  <ul className="exp-bullets">
                    {role.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  {role.stack && (
                    <div className="exp-stack">
                      {role.stack.map((s) => (
                        <span className="chip" key={s}>
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </Reveal>
              ))}

              <Reveal className="exp-item exp-education">
                <span className="exp-dot exp-dot-edu" />
                <span className="exp-period mono">{education.period}</span>
                <h3 className="display exp-role">{education.degree}</h3>
                <div className="exp-meta mono">{education.place}</div>
              </Reveal>
            </div>
          </section>

          {/* ---------- 04 WORK ---------- */}
          <section className="sec" id="work">
            <Reveal className="sec-head">
              <span className="num">04</span>
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
                    ) : f.slug === "stocklog" ? (
                      <div className="ph ph-art">
                        <StockLogIllustration />
                      </div>
                    ) : (
                      <div className="ph">
                        <span>{f.videoLabel}</span>
                      </div>
                    )}
                  </div>

                  {f.caseStudy && f.caseStudy.length > 0 && (
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
                  )}

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
                        <Link
                          key={l.label}
                          href={l.href}
                          className={l.href.startsWith("/work/") ? "case-link" : undefined}
                        >
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
            {alsoShipped.map((p, i) => {
              const delay = { "--reveal-delay": `${(i % 4) * 60}ms` } as CSSProperties;
              return p.href ? (
                <Reveal
                  as="a"
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mini"
                  key={p.title}
                  style={delay}
                >
                  <h3 className="display">
                    {p.title} <span className="ext">↗</span>
                  </h3>
                  <p>{p.desc}</p>
                  <span className="yr">{p.year}</span>
                </Reveal>
              ) : (
                <Reveal as="div" className="mini" key={p.title} style={delay}>
                  <h3 className="display">{p.title}</h3>
                  <p>{p.desc}</p>
                  <span className="yr">{p.year}</span>
                </Reveal>
              );
            })}

            <Reveal className="building">
              <span className="dot" />
              <span>
                Currently building · <b>{site.building.name}</b>,{" "}
                {site.building.desc}
              </span>
            </Reveal>
          </section>

          {/* ---------- 05 NOTES ---------- */}
          <section className="sec notes-sec" id="notes">
            <Reveal className="sec-head">
              <span className="num">05</span>
              <h2>{notesIntro.title}</h2>
              <span className="count">writing</span>
            </Reveal>
            <Reveal as="p" className="notes-intro">
              {notesIntro.desc}
            </Reveal>

            <div className="notes-panel">
              {notes.map((n, i) => {
                const firstParagraph = n.blocks.find((b) => b.type === "p");
                const excerpt =
                  firstParagraph && "text" in firstParagraph
                    ? firstParagraph.text.slice(0, 130).replace(/\*\*/g, "") +
                      (firstParagraph.text.length > 130 ? "…" : "")
                    : "";
                return (
                  <Reveal
                    as={Link}
                    href={`/notes/${n.slug}`}
                    className="note-card"
                    key={n.slug}
                    style={{ "--reveal-delay": `${(i % 3) * 80}ms` } as CSSProperties}
                  >
                    <span className="idx">N{String(i + 1).padStart(2, "0")}</span>
                    <div className="note-card-body">
                      <h3 className="display">{n.title}</h3>
                      <p>{excerpt}</p>
                      <div className="note-card-meta">
                        <span>{n.readTime} read</span>
                        <span className="note-card-cta">
                          Read note <span className="arrow">→</span>
                        </span>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </section>

          {/* ---------- 06 TESTIMONIALS ---------- */}
          <section className="sec" id="testimonials">
            <Reveal className="sec-head">
              <span className="num">06</span>
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

          {/* ---------- 07 CONTACT / COLOPHON ---------- */}
          <Footer />
        </main>
      </div>
    </>
  );
}

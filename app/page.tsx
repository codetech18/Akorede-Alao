import Link from "next/link";
import type { CSSProperties } from "react";
import {
  site,
  hero,
  about,
  skillsIntro,
  skills,
  experienceIntro,
  experience,
  education,
  flagships,
  alsoShipped,
  testimonialsIntro,
  testimonials,
  notes,
  notesIntro,
} from "@/lib/data";
import { Reveal, Nav, Footer } from "@/components/shared";
import { StockLogIllustration } from "@/components/stocklog-illustration";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="shell wrap">
        <main className="main">
          <section id="top" className="studio-hero">
            <Reveal className="hero-identity">
              <span className="hero-avatar">
                <img src="/akorede-avatar-codetech.png" alt="" width={96} height={96} fetchPriority="high" />
                <span className="hero-avatar-status" aria-hidden="true" />
              </span>
              <p>{hero.identity}</p>
            </Reveal>
            <Reveal as="h1" className="h1">I build software<br />real businesses<br /><em>run on.</em></Reveal>
            <div className="hero-bottom">
              <div>
                <Reveal as="p" className="lede">{hero.lede}</Reveal>
                <Reveal className="cta">
                  <a href="#work" className="btn btn-solid">Explore my work ↓</a>
                  <a href={`mailto:${site.email}`} className="hero-talk">Let's talk ↗</a>
                  <a href={site.cvPath} className="hero-talk" download>CV ↓</a>
                </Reveal>
              </div>
              <Reveal className="now">
                <span className="label">Currently shipping<b>↗ {site.nowShipping.name} / {site.nowShipping.desc}</b><span className="shipping-availability">{site.availability}</span></span>
              </Reveal>
            </div>
          </section>

          {/* ---------- 02 WORK ---------- */}
          <section className="sec" id="work">
            <Reveal className="sec-head">
              <span className="num">02</span>
              <h2>Selected work</h2>
              <span className="count">{flagships.length} featured projects</span>
            </Reveal>

            <div className="project-gallery">
              {flagships.map((f, i) => {
                const caseLink = f.links.find((link) => link.href.startsWith("/work/"));
                const destination = caseLink?.href ?? f.links[0]?.href;
                return (
                  <Reveal as="article" className={`project-card project-${f.slug} ${i === 0 ? "project-featured" : ""}`} key={f.slug}>
                    <div className="project-stage">
                      <div className="project-stage-heading">
                        <div><h3>{f.title}</h3><p>{f.slug === "servrr" ? "A simpler way to order. A better way to run the restaurant." : f.desc}</p></div>
                        <span className="project-index">{String(i + 1).padStart(2, "0")} / {f.meta.type}</span>
                      </div>
                      <div className="project-screen">
                        {f.video ? (
                          <><div className="browser-chrome" aria-hidden="true"><i /><i /><i /><span>{f.title}</span></div><video autoPlay muted loop playsInline preload="metadata" poster={f.poster} src={f.video} /></>
                        ) : f.image ? <><div className="browser-chrome" aria-hidden="true"><i /><i /><i /><span>{f.title}</span></div><img className="project-screenshot" src={f.image} alt={`${f.title} storefront preview`} loading="lazy" /></> : <div className="project-art"><StockLogIllustration /></div>}
                      </div>
                      {destination && <Link className="project-overlay" href={destination} aria-label={`Explore ${f.title}${caseLink ? " case study" : ""}`} {...(!caseLink ? { target: "_blank", rel: "noreferrer" } : {})} />}
                    </div>
                    <div className="project-caption"><span>{f.meta.year} / {f.meta.type}</span><div>{f.links.map((link) => <Link key={link.href} href={link.href} {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}>{link.label}</Link>)}</div></div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal className="subhead">Also shipped</Reveal>
            {alsoShipped.map((p, i) => {
              const delay = {
                "--reveal-delay": `${(i % 4) * 60}ms`,
              } as CSSProperties;
              return (
                <Reveal className="mini" key={p.title} style={delay}>
                  <h3 className="display">
                    {p.href ? (
                      <a href={p.href} target="_blank" rel="noreferrer">
                        {p.title} <span className="ext" aria-hidden="true">↗</span>
                      </a>
                    ) : p.title}
                  </h3>
                  <p>{p.desc}</p>
                  {p.ghHref && (
                    <a className="mini-code" href={p.ghHref} target="_blank" rel="noreferrer" aria-label={`${p.title} source code`}>
                      Code ↗
                    </a>
                  )}
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
            <Reveal className="work-cta">
              <p>Have a product or engineering challenge in mind?</p>
              <a href={`mailto:${site.email}?subject=Project%20or%20role%20inquiry`}>
                Tell me about it <span aria-hidden="true">↗</span>
              </a>
            </Reveal>
          </section>

          <section className="studio-about" id="about">
            <Reveal className="studio-portrait"><img src="/akorede-portrait-enhanced.png" alt="Akorede Alao" loading="lazy" /><span>The person behind the products</span></Reveal>
            <Reveal className="studio-bio"><p className="studio-kicker">Thoughtful interfaces. Reliable systems.</p><h2>I care about what happens<br />after the demo.</h2><p>{about.paragraphs[0]}</p><Link href="/about" className="text-link">More about me ↗</Link></Reveal>
          </section>

          {/* ---------- 03 SKILLS ---------- */}
          <section className="sec" id="skills">
            <Reveal className="sec-head">
              <span className="num">03</span>
              <h2>{skillsIntro.title}</h2>
              <span className="count">
                {skills.reduce((n, g) => n + g.items.length, 0)}+ tools
              </span>
            </Reveal>
            <div className="skills-list">
              {skills.map((g, i) => (
                <Reveal
                  className="skill-row"
                  key={g.label}
                  style={
                    { "--reveal-delay": `${(i % 4) * 60}ms` } as CSSProperties
                  }
                >
                  <div className="skill-row-head">
                    <span className="skill-index mono">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="display">{g.label}</h3>
                  </div>
                  <div className="skill-row-items">
                    {g.items.map((item) => (
                      <span className="skill-item" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* ---------- 04 EXPERIENCE ---------- */}
          <section className="sec" id="experience">
            <Reveal className="sec-head">
              <span className="num">04</span>
              <h2>{experienceIntro.title}</h2>
              <span className="count">4+ years</span>
            </Reveal>
            <div className="exp-list">
              {experience.map((role, i) => (
                <Reveal
                  key={role.company}
                  className={`exp-item ${role.current ? "is-current" : ""}`}
                  style={
                    { "--reveal-delay": `${(i % 3) * 60}ms` } as CSSProperties
                  }
                >
                  <span className="exp-dot" />
                  <div className="exp-head">
                    <span className="exp-period mono">{role.period}</span>
                    {role.current && <span className="exp-badge">Current</span>}
                  </div>
                  <h3 className="display exp-role">
                    {role.title}{" "}
                    <span className="exp-at">@ {role.company}</span>
                  </h3>
                  <div className="exp-meta mono">
                    {role.type
                      ? `${role.location} · ${role.type}`
                      : role.location}
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
                    style={
                      { "--reveal-delay": `${(i % 3) * 80}ms` } as CSSProperties
                    }
                  >
                    <span className="idx">
                      N{String(i + 1).padStart(2, "0")}
                    </span>
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

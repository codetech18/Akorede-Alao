import Link from "next/link";
import type { CSSProperties } from "react";
import {
  site,
  hero,
  about,
  flagships,
  testimonialsIntro,
  testimonials,
  notes,
  notesIntro,
} from "@/lib/data";
import { Reveal, Nav, Footer } from "@/components/shared";
import { ProjectCard } from "@/components/project-card";
import { personSchema, siteOrigin } from "@/lib/seo";
import { StructuredData } from "@/components/structured-data";

const homepageProjectSlugs = new Set([
  "servrr",
  "staffstack",
  "foleman-electricals",
  "codetech-gadgets",
]);
const homepageProjects = flagships.filter((project) => homepageProjectSlugs.has(project.slug));

export default function Home() {
  return (
    <>
      <Nav />
      <StructuredData data={{
        "@context": "https://schema.org",
        "@graph": [
          personSchema(),
          { "@type": "WebSite", name: `${site.fullName} — Portfolio`, url: siteOrigin },
        ],
      }} />
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
              <span className="count">4 featured projects</span>
            </Reveal>

            <div className="project-gallery">
              {homepageProjects.map((project, index) => (
                <ProjectCard project={project} index={index} key={project.slug} />
              ))}
            </div>

            <Reveal className="all-projects-link">
              <p>Explore the full range of product, frontend, and backend work.</p>
              <Link href="/projects" className="btn btn-solid">View more projects <span aria-hidden="true">↗</span></Link>
            </Reveal>
          </section>

          <section className="studio-about" id="about">
            <Reveal className="studio-portrait"><img src="/akorede-portrait-enhanced.png" alt="Akorede Alao" loading="lazy" /><span>The person behind the products</span></Reveal>
            <Reveal className="studio-bio"><p className="studio-kicker">Thoughtful interfaces. Reliable systems.</p><h2>I care about what happens<br />after the demo.</h2><p>{about.paragraphs[0]}</p><Link href="/about" className="text-link">More about me ↗</Link></Reveal>
          </section>

          {/* ---------- 03 NOTES ---------- */}
          <section className="sec notes-sec" id="notes">
            <Reveal className="sec-head">
              <span className="num">03</span>
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

          {/* ---------- 07 CONTACT / COLOPHON ---------- */}
          <Footer />
        </main>
      </div>
    </>
  );
}

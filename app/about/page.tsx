import type { CSSProperties } from "react";
import {
  about,
  skillsIntro,
  skills,
  experienceIntro,
  experience,
  education,
} from "@/lib/data";
import { Footer, Nav, Reveal } from "@/components/shared";
import { pageMetadata, personSchema, siteOrigin } from "@/lib/seo";
import { StructuredData } from "@/components/structured-data";

export const metadata = pageMetadata("/about", "Akorede Alao | Frontend & Software Engineer", "Meet Akorede Alao, a frontend and software engineer with 4+ years building production web and mobile products using React, Next.js, and TypeScript.");

export default function AboutPage() {
  return (
    <>
      <Nav />
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "mainEntity": personSchema(),
        url: `${siteOrigin}/about`,
      }} />
      <div className="about-shell wrap">
        <main className="main about-main">
          <section className="sec about-page" id="about">
            <Reveal className="sec-head">
              <span className="num">01</span>
              <h1>About me</h1>
              <span className="count">the builder</span>
            </Reveal>
            <div className="about">
              <Reveal
                as="aside"
                className="facts"
                style={{ "--reveal-delay": "0ms" } as CSSProperties}
              >
                <div className="portrait">
                  <img src="/akorede-portrait-enhanced.png" alt="Akorede Alao" />
                </div>
              </Reveal>
              <Reveal
                className="bio"
                style={{ "--reveal-delay": "120ms" } as CSSProperties}
              >
                {about.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
                <p className="pull">{about.pullquote}</p>
                {about.paragraphsAfter.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </Reveal>
            </div>
          </section>

          <section className="sec about-skills" id="skills">
            <Reveal className="sec-head">
              <span className="num">02</span>
              <h2>{skillsIntro.title}</h2>
              <span className="count">
                {skills.reduce((total, group) => total + group.items.length, 0)} technologies
              </span>
            </Reveal>
            <Reveal as="p" className="about-section-intro">
              The tools I use to take a product from interface design through implementation and into production.
            </Reveal>
            <div className="skills-list">
              {skills.map((group, index) => (
                <Reveal
                  className="skill-row"
                  key={group.label}
                  style={{ "--reveal-delay": `${(index % 4) * 60}ms` } as CSSProperties}
                >
                  <div className="skill-row-head">
                    <span className="skill-index mono">{String(index + 1).padStart(2, "0")}</span>
                    <h3 className="display">{group.label}</h3>
                  </div>
                  <div className="skill-row-items">
                    {group.items.map((item) => <span className="skill-item" key={item}>{item}</span>)}
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          <section className="sec about-experience" id="experience">
            <Reveal className="sec-head">
              <span className="num">03</span>
              <h2>{experienceIntro.title}</h2>
              <span className="count">4+ years</span>
            </Reveal>
            <Reveal as="p" className="about-section-intro">
              Roles, teams, and the work I have shipped across product engineering.
            </Reveal>
            <div className="exp-list">
              {experience.map((role, index) => (
                <Reveal
                  key={role.company}
                  className={`exp-item ${role.current ? "is-current" : ""}`}
                  style={{ "--reveal-delay": `${(index % 3) * 60}ms` } as CSSProperties}
                >
                  <span className="exp-dot" />
                  <div className="exp-head">
                    <span className="exp-period mono">{role.period}</span>
                    {role.current && <span className="exp-badge">Current</span>}
                  </div>
                  <h3 className="display exp-role">
                    {role.title} <span className="exp-at">@ {role.company}</span>
                  </h3>
                  <div className="exp-meta mono">{role.type ? `${role.location} · ${role.type}` : role.location}</div>
                  <ul className="exp-bullets">
                    {role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                  {role.stack && (
                    <div className="exp-stack">
                      {role.stack.map((technology) => <span className="chip" key={technology}>{technology}</span>)}
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
          <Footer />
        </main>
      </div>
    </>
  );
}

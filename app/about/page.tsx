import type { CSSProperties } from "react";
import { about } from "@/lib/data";
import { Footer, Nav, Reveal } from "@/components/shared";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/about", "About", "Meet Akorede Alao, a software engineer with 4+ years building production web and mobile products with React, Next.js, and Node.js.");

export default function AboutPage() {
  return (
    <>
      <Nav />
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
          <Footer />
        </main>
      </div>
    </>
  );
}

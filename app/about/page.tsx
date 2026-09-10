import type { CSSProperties } from "react";
import { about, site } from "@/lib/data";
import { Footer, Nav, Reveal } from "@/components/shared";

export const metadata = {
  title: `About — ${site.name}`,
  description:
    "About Akorede Alao, a full-stack software engineer and product builder.",
};

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
              <Reveal className="bio">
                {about.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
                <p className="pull">{about.pullquote}</p>
                {about.paragraphsAfter.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </Reveal>
              <Reveal
                as="aside"
                className="facts"
                style={{ "--reveal-delay": "120ms" } as CSSProperties}
              >
                <div className="portrait">
                  <img src="/korede.jpg" alt="Akorede Alao" />
                </div>
              </Reveal>
            </div>
          </section>
          <Footer />
        </main>
      </div>
    </>
  );
}

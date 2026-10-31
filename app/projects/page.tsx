import type { CSSProperties } from "react";
import Link from "next/link";
import { alsoShipped, engineeringProjects, flagships } from "@/lib/data";
import { Footer, Nav, Reveal } from "@/components/shared";
import { ProjectCard } from "@/components/project-card";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "/projects",
  "Projects",
  "Explore products, client work, and engineering projects by Akorede Alao, including Servrr, StaffStack, StockLog, and CodeTech Gadgets.",
);

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <div className="wrap projects-main">
        <main className="main">
          <section className="projects-intro">
            <Reveal className="studio-kicker">Selected work / 2023—2026</Reveal>
            <Reveal as="h1">Projects built to work<br />beyond the screen.</Reveal>
            <Reveal as="p">
              Products I own, client work I shipped, and engineering experiments across web, mobile, and backend systems.
            </Reveal>
          </section>

          <section className="sec projects-featured" aria-labelledby="product-work-heading">
            <Reveal className="sec-head">
              <h2 id="product-work-heading">Product & client work</h2>
              <span className="count">{flagships.length} projects</span>
            </Reveal>
            <div className="project-gallery">
              {flagships.map((project, index) => (
                <ProjectCard project={project} index={index} key={project.slug} />
              ))}
            </div>
          </section>

          <section className="sec projects-engineering" aria-labelledby="additional-work-heading">
            <Reveal className="sec-head">
              <h2 id="additional-work-heading">More work</h2>
              <span className="count">{engineeringProjects.length + alsoShipped.length} projects</span>
            </Reveal>
            <div className="engineering-grid">
              {engineeringProjects.map((project) => (
                <Reveal as="article" className="engineering-card" key={project.title}>
                  <div className="engineering-label"><span>{project.category}</span><span>{project.status}</span></div>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <p className="engineering-detail">{project.detail}</p>
                  <div className="engineering-stack">{project.stack.join(" / ")}</div>
                  <div className="engineering-links">
                    {"href" in project && project.href && <a href={project.href} target="_blank" rel="noreferrer">Visit site ↗</a>}
                    <a href={project.source} target="_blank" rel="noreferrer">Explore code ↗</a>
                  </div>
                </Reveal>
              ))}
              {alsoShipped.map((project, index) => (
                <Reveal
                  as="article"
                  className="engineering-card shipped-card"
                  key={project.title}
                  style={{ "--reveal-delay": `${(index % 4) * 60}ms` } as CSSProperties}
                >
                  <div className="engineering-label"><span>Shipped project</span><span>{project.year}</span></div>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className="engineering-links">
                    {project.href && <a href={project.href} target="_blank" rel="noreferrer">Visit site ↗</a>}
                    {project.ghHref && <a href={project.ghHref} target="_blank" rel="noreferrer">Explore code ↗</a>}
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          <Footer />
        </main>
      </div>
    </>
  );
}

import Link from "next/link";
import type { Flagship } from "@/lib/data";
import { Reveal } from "@/components/shared";
import { StockLogIllustration } from "@/components/stocklog-illustration";

export function ProjectCard({
  project,
  index,
}: {
  project: Flagship;
  index: number;
}) {
  const caseLink = project.links.find((link) => link.href.startsWith("/work/"));
  const destination = caseLink?.href ?? project.links[0]?.href;
  const featured = index === 0 || project.slug === "staffstack";

  return (
    <Reveal
      as="article"
      className={`project-card project-${project.slug} ${featured ? "project-featured" : ""}`}
      key={project.slug}
    >
      <div className="project-stage">
        <div className="project-stage-heading">
          <div>
            {project.slug === "servrr" && (
              <span className="product-ownership">My product / Built and operated end to end</span>
            )}
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </div>
          <span className="project-index">
            {String(index + 1).padStart(2, "0")} / {project.meta.type}
          </span>
        </div>
        <div className="project-screen">
          {project.video ? (
            <>
              <div className="browser-chrome" aria-hidden="true"><i /><i /><i /><span>{project.title}</span></div>
              <video autoPlay muted loop playsInline preload="metadata" poster={project.poster} src={project.video} />
            </>
          ) : project.image ? (
            <>
              <div className="browser-chrome" aria-hidden="true"><i /><i /><i /><span>{project.title}</span></div>
              <img className="project-screenshot" src={project.image} alt={`${project.title} product preview`} loading="lazy" />
            </>
          ) : (
            <div className="project-art"><StockLogIllustration /></div>
          )}
        </div>
        {destination && (
          <Link
            className="project-overlay"
            href={destination}
            aria-label={`Explore ${project.title}${caseLink ? " case study" : ""}`}
            {...(!caseLink ? { target: "_blank", rel: "noreferrer" } : {})}
          />
        )}
      </div>
      {project.slug === "servrr" && (
        <div className="product-depth">
          <div>
            <span className="studio-kicker">Beyond the website</span>
            <h4>Software for the restaurant floor.</h4>
            <p>From a diner scanning a table code to staff managing an active session: the product coordinates a real service workflow.</p>
          </div>
          <dl>
            <div><dt>Product ownership</dt><dd>Direction, architecture, interface, code, and deployment.</dd></div>
            <div><dt>System design</dt><dd>Permanent table identity, staff-controlled sessions, restaurant-specific menus and roles.</dd></div>
            <div><dt>Live product</dt><dd>A shared SaaS deployment, subscription tiers, and email delivery.</dd></div>
          </dl>
        </div>
      )}
      {project.slug === "staffstack" && (
        <div className="product-depth">
          <div>
            <span className="studio-kicker">Beyond the public page</span>
            <h4>The whole school&apos;s team, connected.</h4>
            <p>Staff records, salary structures, payroll runs, and teaching assignments inform one another. StaffStack brings those workflows into one workspace.</p>
          </div>
          <dl>
            <div><dt>Payroll engine</dt><dd>Typed salary calculations, configurable deductions, bank exports, and payslip delivery.</dd></div>
            <div><dt>School operations</dt><dd>Leave and attendance alongside subject assignments, with visibility into teaching coverage gaps.</dd></div>
            <div><dt>Connected data</dt><dd>Organisation-based PostgreSQL records with Supabase authentication behind a React interface.</dd></div>
          </dl>
        </div>
      )}
      <div className="project-caption">
        <span>{project.meta.year} / {project.meta.type}</span>
        <div>
          {project.links.map((link) => (
            <Link key={link.href} href={link.href} {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

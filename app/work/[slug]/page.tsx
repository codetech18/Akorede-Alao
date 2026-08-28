import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { flagships } from "@/lib/data";
import { Nav, Footer } from "@/components/shared";
import { StockLogIllustration } from "@/components/stocklog-illustration";

export function generateStaticParams() {
  return flagships.filter((f) => f.longform && f.longform.length > 0).map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = flagships.find((f) => f.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Case Study`,
    description: project.desc,
    openGraph: {
      title: `${project.title} — Case Study`,
      description: project.desc,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = flagships.find((f) => f.slug === slug);
  if (!project || !project.longform || project.longform.length === 0) notFound();

  return (
    <>
      <Nav />
      <article className="article">
        <Link href="/#work" className="back">
          ← Back to work
        </Link>
        <h1 className="display">{project.title}</h1>
        <div className="meta">
          <span className="a">{project.meta.year}</span>
          <span>{project.meta.type}</span>
          <span>{project.meta.where}</span>
          <span>{project.stack.join(" · ")}</span>
        </div>

        <div className="media" style={{ marginTop: 36 }}>
          {project.video ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={project.poster}
              src={project.video}
            />
          ) : project.slug === "stocklog" ? (
            <div className="ph ph-art">
              <StockLogIllustration />
            </div>
          ) : (
            <div className="ph">
              <span>{project.videoLabel}</span>
            </div>
          )}
        </div>

        <div className="grid4">
          {(project.caseStudy ?? []).map((c) => (
            <div key={c.heading}>
              <h4>{c.heading}</h4>
              <p>{c.body}</p>
            </div>
          ))}
        </div>

        {project.longform.map((sec) => (
          <section key={sec.heading}>
            <h2 className="display">{sec.heading}</h2>
            {sec.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </section>
        ))}
      </article>
      <div className="wrap">
        <Footer />
      </div>
    </>
  );
}

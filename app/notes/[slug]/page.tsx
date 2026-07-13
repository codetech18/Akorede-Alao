import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { notes } from "@/lib/data";
import { renderInline } from "@/lib/render-inline";
import { Nav, Footer } from "@/components/shared";

export function generateStaticParams() {
  return notes.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const note = notes.find((n) => n.slug === slug);
  if (!note) return {};
  const firstParagraph = note.blocks.find((block) => block.type === "p");
  const description = firstParagraph?.text.slice(0, 150);
  return {
    title: note.title,
    description,
    openGraph: {
      title: note.title,
      description,
      type: "article",
      publishedTime: note.date,
    },
  };
}

export default async function NotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = notes.find((n) => n.slug === slug);
  if (!note) notFound();
  const moreNotes = notes.filter((n) => n.slug !== note.slug);

  const date = new Date(note.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <Nav />
      <article className="article">
        <Link href="/#notes" className="back">
          ← All field notes
        </Link>
        <h1 className="display">{note.title}</h1>
        <div className="meta">
          <span className="a">{date}</span>
          <span>{note.readTime} read</span>
        </div>
        <div style={{ marginTop: 40 }}>
          {note.blocks.map((block, i) => {
            switch (block.type) {
              case "p":
                return <p key={i}>{renderInline(block.text)}</p>;
              case "h2":
                return (
                  <h2 key={i} className="display">
                    {renderInline(block.text)}
                  </h2>
                );
              case "hr":
                return (
                  <hr
                    key={i}
                    style={{
                      border: 0,
                      borderTop: "1px solid var(--line)",
                      margin: "42px 0",
                    }}
                  />
                );
              case "outro":
                return (
                  <p
                    key={i}
                    style={{
                      borderTop: "1px solid var(--line)",
                      color: "var(--ink-soft)",
                      fontFamily: "var(--font-mono)",
                      fontSize: 12.5,
                      lineHeight: 1.8,
                      marginTop: 40,
                      paddingTop: 18,
                    }}
                  >
                    {renderInline(block.text)}
                  </p>
                );
            }
          })}
        </div>
        <div style={{ marginTop: 56 }}>
          <div className="subhead">More field notes</div>
          {moreNotes.map((n, i) => (
            <Link
              href={`/notes/${n.slug}`}
              className="note-row"
              key={n.slug}
            >
              <span className="idx">N{String(i + 1).padStart(2, "0")}</span>
              <h3 className="display">{n.title}</h3>
              <span className="rt">{n.readTime}</span>
            </Link>
          ))}
        </div>
      </article>
      <div className="wrap">
        <Footer />
      </div>
    </>
  );
}

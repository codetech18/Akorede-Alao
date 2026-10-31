import { site } from "./data";

const configuredOrigin = process.env.NEXT_PUBLIC_SITE_URL ?? "https://akoredealao.cv";
export const siteOrigin = new URL(configuredOrigin).origin;

export function absoluteUrl(path: string) {
  return siteOrigin ? new URL(path, siteOrigin).href : undefined;
}

export function pageMetadata(path: string, title: string, description: string) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: `${site.fullName} — Portfolio`,
      type: "website" as const,
    },
    twitter: { card: "summary_large_image" as const, title, description },
  };
}

export function personSchema() {
  return {
    "@type": "Person",
    "@id": `${siteOrigin}/about#person`,
    name: site.fullName,
    jobTitle: "Frontend and Software Engineer",
    url: absoluteUrl("/about"),
    image: absoluteUrl("/akorede-portrait-enhanced.png"),
    knowsAbout: ["Frontend development", "React", "Next.js", "TypeScript", "React Native", "Web application development"],
    sameAs: site.socials.map((social) => social.href),
  };
}

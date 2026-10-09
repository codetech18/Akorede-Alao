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
    name: site.fullName,
    jobTitle: "Software Engineer",
    url: siteOrigin,
    image: absoluteUrl("/akorede-portrait-enhanced.png"),
    sameAs: site.socials.map((social) => social.href),
  };
}

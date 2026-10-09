import type { Metadata } from "next";
import { Manrope, DM_Sans, JetBrains_Mono } from "next/font/google";
import { site } from "@/lib/data";
import { siteOrigin } from "@/lib/seo";
import "./globals.css";
import "./studio.css";

const display = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700", "800"],
});
const inter = DM_Sans({
  subsets: ["latin"],
  variable: "--font-inter",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "700"],
});

const title = `${site.fullName} — Software Engineer`;
const description =
  "Akorede Alao is a software engineer building web and mobile products, production APIs, and software for real business workflows.";

export const metadata: Metadata = {
  ...(siteOrigin ? { metadataBase: new URL(siteOrigin), alternates: { canonical: "/" } } : {}),
  title: {
    default: title,
    template: `%s — ${site.fullName}`,
  },
  description,
  keywords: [
    "full-stack engineer",
    "React developer",
    "Next.js",
    "TypeScript",
    "React Native",
    "SaaS builder",
    "remote developer",
    "Akorede Alao",
  ],
  authors: [{ name: site.fullName }],
  creator: site.fullName,
  openGraph: {
    type: "website",
    ...(siteOrigin ? { url: siteOrigin } : {}),
    siteName: `${site.fullName} — Portfolio`,
    title,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@codetech__",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${inter.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(localStorage.getItem("theme")==="dark"){document.documentElement.setAttribute("data-theme","dark");}}catch(e){}})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

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

const title = `${site.fullName} | Frontend & Software Engineer`;
const description =
  "Akorede Alao is a frontend and software engineer building web and mobile products with React, Next.js, and TypeScript.";

export const metadata: Metadata = {
  ...(siteOrigin ? { metadataBase: new URL(siteOrigin), alternates: { canonical: "/" } } : {}),
  title: {
    default: title,
    template: `%s — ${site.fullName}`,
  },
  description,
  authors: [{ name: site.fullName }],
  creator: site.fullName,
  openGraph: {
    type: "website",
    ...(siteOrigin ? { url: siteOrigin } : {}),
    siteName: `${site.fullName} — Portfolio`,
    title,
    description,
    locale: "en_NG",
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

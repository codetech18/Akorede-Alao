import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import { site } from "@/lib/data";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700", "800"],
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "700"],
});

const title = `${site.name} — Full-stack Engineer & Builder`;
const description =
  "Full-stack engineer in Lagos shipping real SaaS products: restaurant ordering, market-trader inventory, and software built to survive contact with the street.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s — ${site.name}`,
  },
  description,
  keywords: [
    "full-stack engineer",
    "React developer",
    "Next.js",
    "TypeScript",
    "React Native",
    "SaaS builder",
    "Lagos",
    "Nigeria",
    "remote developer",
    "Akorede Alao",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    type: "website",
    url: site.url,
    siteName: `${site.name} — Portfolio`,
    title,
    description,
    locale: "en_US",
    // Add an OG image at public/og.png (1200x630) and uncomment:
    // images: [{ url: "/og.png", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    // creator: "@yourhandle",
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

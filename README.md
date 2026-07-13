# Akorede Alao — Portfolio

Editorial Index design: Bricolage Grotesque display, warm chalk paper, cobalt accent, numbered spine, colophon footer with live Lagos time.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Where everything lives

| What | Where |
| --- | --- |
| **All copy & content** | `lib/data.ts` — hero, bio, projects, case studies, notes. Edit here, never touch components. |
| Design tokens & styles | `app/globals.css` (CSS variables at the top) |
| Home page | `app/page.tsx` |
| Case study pages | `app/work/[slug]/page.tsx` (driven by `flagships` in data.ts) |
| Field notes | `app/notes/[slug]/page.tsx` (driven by `notes` in data.ts) |
| SEO / OpenGraph | `app/layout.tsx` |

## Before launch checklist

1. **Domain** — set `site.url` in `lib/data.ts` to your real domain.
2. **Videos** — record 5–10s screen captures of Servrr and StockLog. Compress
   (Cloudinary or `ffmpeg -i in.mov -vcodec libx264 -crf 28 -an out.mp4`, aim
   under ~2 MB). Drop into `public/videos/`, add a poster frame in
   `public/posters/`, then set `video` and `poster` on each flagship in
   `lib/data.ts`. The placeholder swirl disappears automatically.
3. **CV** — put the PDF at `public/cv/akorede-alao-cv.pdf` (or change
   `site.cvPath`).
4. **Portrait** — add `public/portrait.jpg` and swap the placeholder in
   `app/page.tsx` (marked with a comment).
5. **Socials** — real URLs in `site.socials`.
6. **OG image** — create a 1200×630 `public/og.png` and uncomment the
   `images` lines in `app/layout.tsx` so links unfurl on X/LinkedIn/WhatsApp.
7. **Notes** — the three notes are outlined placeholders. Write the real
   essays in `lib/data.ts` before launch, or remove the section until ready.
   Publishing "coming soon" posts is worse than not having them.
8. **StockLog store links** — only add App Store / Play Store links in
   `flagships[1].links` if they're genuinely live.

## Deploy

Push to GitHub → import on [vercel.com](https://vercel.com) → done. Zero
config needed. Point your domain at Vercel in the dashboard.

## Design rules (so future-you doesn't break it)

- One accent (cobalt). Never add a second.
- Bricolage Grotesque for display, Inter for body, JetBrains Mono for labels.
- Numbered structure means something — don't add sections without a purpose.
- When in doubt, remove one thing.

# Akorede Alao — Portfolio

Editorial Index design: Bricolage Grotesque display, warm chalk paper, cobalt accent, numbered spine, and a personal colophon footer.

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
| SEO / OpenGraph | `app/layout.tsx`, `app/opengraph-image.tsx`, `app/twitter-image.tsx` |

## Before launch checklist

1. **Domain** — set `NEXT_PUBLIC_SITE_URL` to the final `https://` domain for canonical and social image URLs. On Vercel, the deployment host is used until a custom domain is supplied.
2. **Proof links** — add public StockLog store or demo links to its `flagships` entry only when they are available.
3. **External projects** — check the live project URLs and social profiles in `lib/data.ts` before sharing the site widely.

## Deploy

Push to GitHub → import on [vercel.com](https://vercel.com) → done. Zero
config needed. Point your domain at Vercel in the dashboard.

## Design rules (so future-you doesn't break it)

- One accent (cobalt). Never add a second.
- Bricolage Grotesque for display, Inter for body, JetBrains Mono for labels.
- Numbered structure means something — don't add sections without a purpose.
- When in doubt, remove one thing.

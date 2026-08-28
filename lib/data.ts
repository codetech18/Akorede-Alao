// ============================================================
// All site content lives here. Edit copy without touching UI.
// ============================================================

export const site = {
  name: "Codetech",
  role: "Full-stack engineer / builder",
  email: "akoredealao18@gmail.com",
  location: "Lagos, Nigeria",
  coords: "6.5244° N, 3.3792° E",
  url: "https://akorede.dev", // ← change to your real domain before launch
  availability: "Open for work · freelance & full-time",
  nowShipping: { name: "Servrr", desc: "QR ordering for Lagos restaurants" },
  building: { name: "StaffStack", desc: "HR & payroll for Nigerian SMBs" },
  cvPath: "/cv/akorede-alao-cv.pdf", // put the PDF at public/cv/
  socials: [
    { label: "X", href: "https://x.com/yourhandle" },
    { label: "LinkedIn", href: "https://linkedin.com/in/yourhandle" },
    { label: "GitHub", href: "https://github.com/yourhandle" },
    { label: "TikTok", href: "https://tiktok.com/@yourhandle" },
  ],
};

export const hero = {
  headline: ["I build software real businesses ", "run on."],
  lede: "Four years shipping real products. From my base in Lagos I've built restaurant ordering, market-trader inventory, and SaaS designed to survive contact with the street.",
};

export const stats = [
  { value: "07", accent: "+", label: "Products shipped" },
  { value: "02", accent: "", label: "SaaS running live" },
  { value: "04", accent: "+", label: "Years full-stack" },
  { value: "Web", accent: "+Mobile", label: "End to end, both platforms" },
];

export const about = {
  paragraphs: [
    "I'm Akorede Alao, a full-stack software engineer with 4+ years of experience shipping production web and mobile software end to end. I'm currently a Software Engineer at Zashiron Org, full-time and remote, working across TypeScript, React, Next.js, and React Native, with LLM-powered features. Alongside that, I design, build, and run my own products — including Servrr, a live multi-tenant SaaS platform, and StockLog, inventory software built for Computer Village's phone dealers.",
  ],
  pullquote:
    "The products I build have to survive contact with the street, not just the demo.",
  paragraphsAfter: [
    "That constraint shapes everything: cash-first customers, patchy networks, staff who've never touched a dashboard. It's why Servrr uses permanent table tokens a waiter can control, and why StockLog mirrors how Computer Village dealers actually track stock instead of how inventory software assumes they should.",
    "I own products end to end — positioning, architecture, design, code, and deployment — and bring the same discipline to team environments: four years across Zashiron, Dongmi Technologies, and ReadersPlug, shipping inside real codebases, deadlines, and constraints that weren't mine to set. I'm open to full-time roles, freelance work, and collaborations where that full loop matters.",
  ],
  facts: [
    { label: "Based in", value: "Lagos, Nigeria (WAT)" },
    { label: "Experience", value: "4+ years, full-stack" },
    {
      label: "Core stack",
      value: "TypeScript, React, Next.js, React Native, Node, Firebase, Supabase",
    },
    { label: "Sweet spot", value: "Zero-to-one SaaS for real-world markets" },
  ],
};

export const experienceIntro = {
  title: "Experience",
  desc: "The employer-side half of the story — roles, teams, and what shipped inside them, alongside the products I build on my own.",
};

export type ExperienceRole = {
  company: string;
  title: string;
  location: string;
  type: string;
  period: string;
  current?: boolean;
  bullets: string[];
  stack?: string[];
};

export const experience: ExperienceRole[] = [
  {
    company: "Zashiron Org",
    title: "Software Engineer",
    location: "Remote",
    type: "Full-time",
    period: "Aug 2026 – Present",
    current: true,
    bullets: [
      "Own frontend and API work on the core product.",
      "Building with TypeScript, React, and Next.js, backed by Supabase (Postgres).",
      "Integrating LLM-powered features into the product.",
    ],
    stack: ["TypeScript", "React", "Next.js", "SQL", "Supabase", "LLM integration"],
  },
  {
    company: "Dongmi Technologies",
    title: "Full-Stack Developer",
    location: "Lagos, Nigeria",
    type: "Hybrid",
    period: "2024 – 2025",
    bullets: [
      "Built dynamic, type-safe interfaces with React and TypeScript, improving user retention by 15%.",
      "Designed and implemented RESTful APIs with Node.js and Express.",
      "Wrote unit and integration tests that reduced post-launch bugs by 30%.",
      "Applied code splitting, lazy loading, and build optimisation via Webpack and Babel.",
    ],
    stack: ["React", "TypeScript", "Node.js", "Express"],
  },
  {
    company: "ReadersPlug",
    title: "Full-Stack Developer",
    location: "Remote",
    type: "",
    period: "Sep 2021 – 2023",
    bullets: [
      "Rebuilt core application pages with React and Node.js, increasing engagement metrics by 30%.",
      "Integrated optimised RESTful APIs with Express.js.",
      "Reduced page load times by 40% through dynamic routing and backend query optimisation.",
    ],
    stack: ["React", "Node.js", "Express"],
  },
];

export const education = {
  degree: "Professional Diploma in Software Engineering",
  place: "NIIT, Lagos, Nigeria",
  period: "2019 – 2023",
};

export type CaseCell = { heading: string; body: string };

export type Flagship = {
  slug: string;
  title: string;
  desc: string;
  video?: string; // e.g. "/videos/servrr-demo.mp4"
  poster?: string; // e.g. "/posters/servrr.webp"
  videoLabel: string;
  // Omit caseStudy/longform for a lighter entry: video + basic info, no
  // Problem/Constraint/Decision/Result grid and no /work/[slug] page.
  caseStudy?: CaseCell[];
  links: { label: string; href: string; external?: boolean }[];
  stack: string[];
  meta: { year: string; type: string; where: string };
  // Long-form content for the /work/[slug] page:
  longform?: { heading: string; paragraphs: string[] }[];
};

export const flagships: Flagship[] = [
  {
    slug: "servrr",
    title: "Servrr",
    desc: "QR-code ordering for restaurants. One scan, no app to install, table sessions staff open and close. Built multi-tenant from the ground up.",
    video: undefined, // set to "/videos/servrr-demo.mp4" when the clip is ready
    poster: undefined,
    videoLabel: "Servrr · demo clip plays here",
    caseStudy: [
      {
        heading: "Problem",
        body: "Lagos restaurants lose orders to paper chits and shouting across the floor. Existing QR systems assume app installs and card payments customers here don't do.",
      },
      {
        heading: "Constraint",
        body: "Cash-first customers, staff with zero dashboard experience, and printed QR codes that can't be reissued every order without chaos.",
      },
      {
        heading: "Decision",
        body: "Permanent table tokens with staff-controlled session lifecycle: the QR never changes, but a waiter opens and closes each table's session, so a stale scan can't place a ghost order.",
      },
      {
        heading: "Result",
        body: "Multi-tenant SaaS live at servrr.ng with Growth and Pro tiers, onboarding real Lagos Mainland restaurants, full legal stack under Nigeria's Data Protection Act.",
      },
    ],
    links: [
      { label: "Live · servrr.ng ↗", href: "https://servrr.ng", external: true },
      { label: "Full case study →", href: "/work/servrr" },
    ],
    stack: ["React", "Firebase", "Render", "Resend"],
    meta: { year: "2025", type: "Multi-tenant SaaS", where: "servrr.ng" },
    longform: [
      {
        heading: "Why this exists",
        paragraphs: [
          "Walk into a busy restaurant on Lagos Mainland and watch how an order travels: a customer flags a waiter, the waiter scribbles on a chit or memorises it, shouts it to the kitchen, and hopes. Orders get lost, tables get the wrong food, and during rush hour the whole system runs on adrenaline.",
          "QR ordering solves this everywhere else in the world, but the imported playbook fails here. It assumes customers will install an app, pay by card, and that the restaurant can print fresh QR codes per order. None of that matches how Lagos actually eats.",
        ],
      },
      {
        heading: "The architecture decision that matters",
        paragraphs: [
          "The core problem was QR lifecycle. A printed code glued to a table lives for months, so it can't carry order state. Servrr separates identity from session: every table gets a permanent token, and staff open a session when guests sit down and close it when they leave. A scan outside an open session simply can't order, which kills ghost orders from stale codes and screenshots.",
          "Everything is multi-tenant from the schema up: one deployment, many restaurants, each with its own menu, staff roles, and theming. Email delivery runs on Resend, the backend deploys on Render, and the legal layer (ToS, Privacy Policy, NDA) is drafted under Nigeria's Data Protection Act 2023.",
        ],
      },
      {
        heading: "What shipped",
        paragraphs: [
          "Servrr is live at servrr.ng with Growth and Pro pricing tiers, and outreach is running across Lagos Mainland restaurants. It's a real product in a real market, being sold, not a portfolio piece wearing a SaaS costume.",
        ],
      },
    ],
  },
  {
    slug: "foleman-electricals",
    title: "Foleman Electricals",
    desc: "Cinematic two-page site for a Lagos electrical services company, built from a business card up — Three.js hero animation, GSAP scroll storytelling, a works page with video lightbox.",
    video: "/videos/foleman-electricals.mp4",
    poster: "/posters/foleman-electricals.jpg",
    videoLabel: "Foleman Electricals · demo clip plays here",
    caseStudy: [
      {
        heading: "Problem",
        body: "Foleman Electricals is a real, active electrical services company across Lagos and nationwide — but had zero web presence, just a business card. No way for commercial or industrial clients to verify them or see their work.",
      },
      {
        heading: "Constraint",
        body: "The client is a tradesman, not a tech company: no marketing copy, brand assets, or content strategy existed. Everything — brand identity, copywriting, visual direction — had to be built from the business card up, while still feeling premium enough for commercial contracts.",
      },
      {
        heading: "Decision",
        body: "Built a two-page cinematic site (landing + portfolio/works) with a dark editorial aesthetic closer to architecture and luxury-brand sites than a typical tradesman template — Three.js electric-arc hero animation, GSAP ScrollTrigger storytelling, Lenis smooth scroll, and an asymmetric works grid with video lightbox.",
      },
      {
        heading: "Result",
        body: "Shipped and live on Vercel, fully responsive across two pages. Gives Foleman Electricals a web presence that matches the quality of their actual work and positions them for larger commercial and industrial contracts.",
      },
    ],
    links: [
      { label: "Live · foleman-eletricals1.vercel.app ↗", href: "https://foleman-eletricals1.vercel.app/", external: true },
      { label: "Full case study →", href: "/work/foleman-electricals" },
    ],
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "GSAP", "Three.js"],
    meta: { year: "2025", type: "Client site — Freelance", where: "foleman-eletricals1.vercel.app" },
    longform: [
      {
        heading: "Why this exists",
        paragraphs: [
          "Foleman Electricals is a legitimate, active electrical services company operating across Lagos and nationwide — but their web presence was nonexistent. No website, just a business card. For a business trying to win commercial and industrial clients, that's a credibility gap: potential clients couldn't verify them, couldn't see their work, and had no professional touchpoint beyond word of mouth.",
        ],
      },
      {
        heading: "Building a brand from a business card",
        paragraphs: [
          "The client is a tradesman, not a tech company — the site had to do the selling without any marketing copy, brand assets, or content strategy to start from. Everything had to be built from the business card up: brand identity, copywriting, visual direction, and the actual product. It also had to feel premium enough to compete for commercial contracts while still being accessible to residential clients in Lagos.",
          "The answer was a two-page cinematic website — a landing page and a dedicated portfolio/works page — with a dark editorial aesthetic inspired by architecture and luxury brand sites rather than typical tradesman templates. Three.js drives live electric-arc canvas animations in the hero, GSAP ScrollTrigger handles scroll-driven storytelling throughout, and Lenis provides smooth scroll integrated with GSAP's RAF loop. The works page uses an asymmetric editorial grid with local image and video assets, category filtering, and a video lightbox — built to feel like a portfolio agency site rather than a contractor listing.",
        ],
      },
      {
        heading: "What shipped",
        paragraphs: [
          "Foleman Electricals is live on Vercel across two fully responsive pages — home and works. It gives the business a professional web presence that matches the quality of their actual work, and positions them to compete for larger commercial and industrial contracts, not just word-of-mouth residential jobs.",
        ],
      },
    ],
  },
  {
    slug: "stocklog",
    title: "StockLog",
    desc: "Inventory for phone and gadget dealers in Computer Village. Built around how they actually sell, not how software thinks they should.",
    video: undefined,
    poster: undefined,
    videoLabel: "StockLog · demo clip plays here",
    caseStudy: [
      {
        heading: "Problem",
        body: "Phone and gadget dealers at Computer Village track fast-moving, high-value stock in notebooks and WhatsApp chats: no visibility, constant disputes.",
      },
      {
        heading: "Constraint",
        body: "Dealers work standing, mid-negotiation, on mid-range Android phones. Anything slower than the notebook loses to the notebook.",
      },
      {
        heading: "Decision",
        body: "Mobile-first React Native + Expo app modeled on how they already sell: fast item entry, per-device tracking, and offline-tolerant sync on Supabase.",
      },
      {
        heading: "Result",
        body: "Shipped to iOS and Android with launch copy tailored per platform, positioned for the exact market it was built inside of.",
      },
    ],
    links: [{ label: "Full case study →", href: "/work/stocklog" }],
    stack: ["React Native", "Expo", "Supabase"],
    meta: { year: "2025", type: "Mobile app", where: "iOS / Android" },
    longform: [
      {
        heading: "Why this exists",
        paragraphs: [
          "Computer Village moves an enormous volume of phones and gadgets every day, and most of it is tracked in notebooks and WhatsApp messages. Stock walks away, prices get disputed, and nobody can answer 'what do I actually have right now?' without counting.",
        ],
      },
      {
        heading: "Built for the counter, not the office",
        paragraphs: [
          "The unforgiving constraint: a dealer is standing, mid-negotiation, holding a mid-range Android. If logging a sale takes longer than scribbling it, the notebook wins. Every screen in StockLog is designed against that clock — fast entry, per-device tracking, and sync that tolerates the network dropping out, built on React Native + Expo with Supabase behind it.",
        ],
      },
      {
        heading: "What shipped",
        paragraphs: [
          "StockLog shipped to both app stores with launch copy written per platform — LinkedIn, X, and TikTok each got their own voice. It's built inside the market it serves, which is the only way software for this market works.",
        ],
      },
    ],
  },
  {
    slug: "crediteasee",
    title: "CreditEase",
    desc: "Fintech landing page built from Figma, with a custom typewriter hook in TypeScript.",
    video: "/videos/crediteasee.mp4",
    poster: "/posters/crediteasee.jpg",
    videoLabel: "CreditEase · demo clip plays here",
    links: [{ label: "Live · crediteasee.netlify.app ↗", href: "https://crediteasee.netlify.app/", external: true }],
    stack: ["React", "TypeScript"],
    meta: { year: "2024", type: "Landing page", where: "crediteasee.netlify.app" },
  },
];

export type AlsoShipped = {
  title: string;
  desc: string;
  year: string;
  href?: string;
  ghHref?: string;
};

export const alsoShipped: AlsoShipped[] = [
  {
    title: "LIV DOT Event Viewer",
    desc: "React Native event app with an 8-state live flow, built & shipped on Expo",
    year: "2025",
  },
  {
    title: "CodeTech Gadget",
    desc: "Full-stack e-commerce, dark luxury aesthetic, Firebase real-time inventory",
    year: "2024",
  },
  {
    title: "AssociateVisuals",
    desc: "Cinematographer portfolio, modernist minimal, GSAP & Cloudinary",
    year: "2026",
  },
  {
    title: "Vestify.",
    desc: "Crypto investment dashboard with real-time asset prices and market analysis",
    year: "2024",
    href: "https://vestify.netlify.app",
    ghHref: "https://github.com/codetech18/crypto-site",
  },
  {
    title: "Bakery Support",
    desc: "B2B site for rotary oven manufacturing and bakery equipment setup services",
    year: "2024",
    href: "https://keen-maamoul-721e8e.netlify.app/",
    ghHref: "https://github.com/codetech18/BSS-website",
  },
  {
    title: "Educa.",
    desc: "EdTech course showcase with a streamlined student registration flow",
    year: "2024",
    href: "https://code-educa.netlify.app/",
    ghHref: "https://github.com/codetech18/school_website",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatarSrc: string;
};

export const testimonialsIntro = {
  title: "What people say",
  desc:
    "Four years of working inside real product teams leaves a trail. Here's what the people I built with have to say.",
};

export const notesIntro = {
  title: "Field notes",
  desc:
    "Long-form writing from inside the products as I build them — real tradeoffs and what actually happened, not tutorials.",
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Akorede does not just build screens. He listens for the real workflow, finds the risky edge cases early, and ships the version people can actually use under pressure.",
    name: "Jeremiah Ekundayo",
    role: "Backend Engineer, Serverly",
    avatarSrc: "/avatars/jeremiah-ekundayo.png",
  },
  {
    quote:
      "Working with Akorede felt fast in the best way. He could move from product thinking to implementation without losing the details that make a system feel reliable.",
    name: "Wisdom-Daniel",
    role: "Frontend/Mobile Team Lead, Toraaah",
    avatarSrc: "/avatars/wisdom-daniel.png",
  },
  {
    quote:
      "Akorede brought clarity to rough product ideas and turned them into flows our team could reason about. He collaborates closely, communicates well, and keeps momentum high.",
    name: "Wonder-David Efe",
    role: "Lead AI Engineer, Toraaah",
    avatarSrc: "/avatars/wonder-david-efe.png",
  },
];

export type NoteBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "hr" }
  | { type: "outro"; text: string };

export type Note = {
  slug: string;
  title: string;
  readTime: string;
  date: string;
  blocks: NoteBlock[];
};

export const notes: Note[] = [
  {
    slug: "saas-for-cash-markets",
    title: "Building multi-tenant SaaS for a market that pays in cash",
    readTime: "6 min",
    date: "2026-06-02",
    blocks: [
      {
        type: "p",
        text:
          "Every SaaS playbook you'll ever read makes one assumption so quietly you won't notice it until it breaks: the customer has a card on file.",
      },
      {
        type: "p",
        text:
          "Card on file is the invisible engine of the entire SaaS model. Auto-renewal, free trials that convert silently, dunning emails, churn dashboards, MRR charts that update themselves — all of it sits on top of a payment method that charges itself every month without a human being involved.",
      },
      {
        type: "p",
        text: "Lagos does not work like that.",
      },
      {
        type: "p",
        text:
          "Here, business runs on bank transfers and cash. Not because people can't get cards — because transfers are instant, free, and everyone already lives inside their banking app. A restaurant owner on the Mainland doesn't think in subscriptions. He thinks in payments he sends, one at a time, when he decides to send them. Every payment is a decision.",
      },
      {
        type: "p",
        text: "I learned what that does to a SaaS business by building one.",
      },
      {
        type: "h2",
        text: "Renewal is a conversation, not an event",
      },
      {
        type: "p",
        text:
          "When there's no card on file, nothing renews by itself. Every month, your customer has to actively choose you again — open their banking app, type your account number, and send the money.",
      },
      {
        type: "p",
        text:
          "That sounds like a nightmare for retention, and honestly, some months it is. But it forces a discipline that card-on-file SaaS never has to develop: **the product has to feel worth paying for every single month.** There's no zombie revenue, no customers who forgot they're subscribed. If Servrr isn't obviously useful in week three of the month, I feel it on the first of the next one.",
      },
      {
        type: "p",
        text:
          "Silicon Valley calls this churn risk. I've come to think of it as an honesty mechanism.",
      },
      {
        type: "h2",
        text: "Churn is silent, so you can't wait for it",
      },
      {
        type: "p",
        text:
          "With auto-billing, churn announces itself: a cancellation event fires, a webhook hits your server, a dashboard turns red. With transfer-based billing, churn is just... silence. The payment doesn't arrive. Was that a decision? Did the owner travel? Is the restaurant having a slow month? Did they forget?",
      },
      {
        type: "p",
        text:
          "You don't know until you ask. So you ask. Renewal in this market is a WhatsApp message, and the response to that message tells you more about your product than any analytics tool. \"Ah, I'll send it tomorrow\" is fine. \"Let me get back to you\" is a warning. Silence after a read receipt is your churn dashboard.",
      },
      {
        type: "p",
        text:
          "The practical upshot: in a cash market, **collections and customer success are the same job.** The person chasing payment is also the person hearing, unfiltered, exactly why the product is or isn't earning its fee.",
      },
      {
        type: "h2",
        text: "What it does to the software itself",
      },
      {
        type: "p",
        text:
          "Here's where it gets interesting for the actual build, because \"the market pays in cash\" leaks all the way down into your schema.",
      },
      {
        type: "p",
        text:
          "**Tenant states get more complicated.** A card-on-file SaaS has basically two states: active and cancelled. A transfer-based SaaS has active, grace period, \"owner says he's sending it,\" soft-locked, and win-back — and your multi-tenant architecture has to handle all of them without ever making a restaurant look broken in front of its customers. Killing a tenant's QR menus mid-service because a transfer is three days late is how you lose the customer *and* the referral network behind them. Servrr's tenant lifecycle degrades gracefully instead of cutting off — because in this market, next week's payment usually comes.",
      },
      {
        type: "p",
        text:
          "**Payment confirmation is a human workflow, not a webhook.** Someone sends a transfer, someone confirms it landed, someone flips the tenant back to active. You can automate pieces of that, but you have to design the admin tooling knowing a human is in the loop. I built Servrr's internal tools around that reality instead of pretending a Stripe webhook was coming to save me.",
      },
      {
        type: "p",
        text:
          "**And the end-customer never pays in-app at all.** Diners at a Servrr restaurant order from their phones, but they pay the way they've always paid — cash or transfer, to a human, at the table. The software's job is to know when that moment happens. That single fact shaped Servrr's whole session model: a table session isn't closed by a payment API, it's closed by a staff member who just collected the money. The point-of-truth is a person, and the system is honest about that.",
      },
      {
        type: "h2",
        text: "Pricing in a currency that moves",
      },
      {
        type: "p",
        text:
          "Naira pricing adds one more layer the playbooks never mention: inflation. A price that felt right in January can feel wrong by August — to you because your costs rose, to your customer because everything else in their life rose too. Annual plans are a harder sell when nobody wants to prepay in a currency that's moving, so the rhythm of the business stays monthly, which loops right back to renewal-as-conversation.",
      },
      {
        type: "h2",
        text: "Why I'd still rather build here",
      },
      {
        type: "p",
        text:
          "It would be easy to read all this as a list of handicaps. I don't see it that way anymore.",
      },
      {
        type: "p",
        text:
          "A market that pays in cash is a market with no tolerance for software that doesn't pull its weight. Every retained customer is a real vote, cast monthly, with money that hurt to send. If you can build something that survives that — that people choose again and again, one deliberate transfer at a time — you haven't just built a SaaS. You've built something people actually want.",
      },
      {
        type: "p",
        text:
          "The card on file hides the truth from you. The transfer tells it to your face.",
      },
      {
        type: "hr",
      },
      {
        type: "outro",
        text:
          "*I'm building Servrr (QR ordering for restaurants) and StaffStack (HR & payroll for Nigerian SMBs) from Lagos. If you're building for markets like this one, my DMs are open.*",
      },
    ],
  },
  {
    slug: "permanent-table-tokens",
    title: "Why Servrr uses permanent table tokens instead of QR-per-order",
    readTime: "4 min",
    date: "2026-05-14",
    blocks: [
      {
        type: "p",
        text:
          "The obvious way to build QR ordering is the wrong way. I know because I built it first.",
      },
      {
        type: "h2",
        text: "The obvious way",
      },
      {
        type: "p",
        text:
          "When I started Servrr, the security model seemed straightforward: generate a QR code with an expiring token. Customer scans, token validates, order flows, token dies. Fresh token per session, nothing stale, nothing reusable. Textbook.",
      },
      {
        type: "p",
        text:
          "Then I looked at how a QR code actually lives in a Lagos restaurant, and the textbook fell apart.",
      },
      {
        type: "p",
        text:
          "A restaurant's QR code isn't a digital object. It's a **physical artifact**. It gets printed, laminated, and glued to a table, where it will sit — through spills, wipe-downs, and harmattan dust — for months. Nobody is reprinting table stickers every session. The digital lifecycle I'd designed (short-lived, disposable, per-order) was the exact opposite of the physical lifecycle the code would actually have (permanent, laminated, per-table).",
      },
      {
        type: "p",
        text:
          "When your token expires but your sticker doesn't, every returning customer scans a dead code. That's not a security model. That's a broken restaurant.",
      },
      {
        type: "h2",
        text: "The threat model, honestly stated",
      },
      {
        type: "p",
        text:
          "So what was the expiring token actually protecting against? Sit with it and the real threats are specific:",
      },
      {
        type: "p",
        text:
          "1. **The stale scan.** Someone scans the code from outside the restaurant — from a screenshot, from a photo a friend sent, from the parking lot — and places an order for a table they're not sitting at.",
      },
      {
        type: "p",
        text:
          "2. **The ghost order.** A customer leaves, a new party sits down, and an order from the previous session lands on the new bill.",
      },
      {
        type: "p",
        text:
          "3. **The prankster.** Someone posts the QR online and strangers spam the kitchen.",
      },
      {
        type: "p",
        text:
          "Notice what all three have in common: the problem is never *who has the code*. The code is public by design — it's glued to a table in a public room. The problem is always *whether an order should be accepted right now, for this table*.",
      },
      {
        type: "p",
        text: "That's not an identity question. That's a **session** question.",
      },
      {
        type: "h2",
        text: "Separate identity from session",
      },
      {
        type: "p",
        text: "That reframing is the whole architecture. In Servrr:",
      },
      {
        type: "p",
        text:
          "— The **token identifies the table, permanently.** Table 7's QR is Table 7's QR forever. Print it once, laminate it, done.",
      },
      {
        type: "p",
        text:
          "— The **session decides whether orders are accepted.** When guests sit down, a staff member opens a session for that table. When the bill is paid, staff close it. Between sessions, the table's token still scans — it just can't order.",
      },
      {
        type: "p",
        text:
          "A scan outside an open session hits a wall, politely. The screenshot from the parking lot does nothing. The previous party's ghost order is impossible because their session closed when they paid. The prankster's viral post is a link to a menu that won't take orders.",
      },
      {
        type: "p",
        text:
          "And the security boundary lands exactly where the trust already lives: **with the staff on the floor.** A waiter deciding \"this table is now active\" is the same judgment they've always made — someone sat down, service begins. The system didn't ask restaurant workers to learn security. It encoded a judgment they were already making.",
      },
      {
        type: "h2",
        text: "The trade-off, because there's always one",
      },
      {
        type: "p",
        text:
          "The cost is a human step: staff have to open and close sessions. In a card-swipe country you might auto-close sessions on payment webhooks. In a cash-and-transfer market, payment already flows through a human at the table — so the human closing the session isn't an extra step, it's the *same* step. The constraint that looked like a limitation (no in-app payment) is what made the staff-controlled session feel natural instead of bolted on.",
      },
      {
        type: "h2",
        text: "The lesson I keep",
      },
      {
        type: "p",
        text:
          "Design for the artifact, not the abstraction. My first architecture was correct for a QR code that lives in a database. It was wrong for a QR code that lives under lamination on a table in Surulere. The second one is the real one.",
      },
      {
        type: "p",
        text:
          "Whenever a \"best practice\" fails in a market like this, it's usually not because the market is behind. It's because the practice smuggled in an assumption nobody wrote down. Find the assumption, and the right design is usually simpler than the one you copied.",
      },
      {
        type: "hr",
      },
      {
        type: "outro",
        text:
          "*Servrr is live at servrr.ng. If you're building for physical spaces, I'd genuinely love to compare notes.*",
      },
    ],
  },
  {
    slug: "shipping-to-lagos-restaurants",
    title: "Shipping to Lagos restaurants: what the demo never shows you",
    readTime: "7 min",
    date: "2026-04-20",
    blocks: [
      {
        type: "p",
        text:
          "The demo is a lie. Not a malicious one — every founder's demo is a lie the same way. It's your product performing under perfect conditions: your phone, your network, your practiced thumb, your enthusiasm filling the room. The restaurant owner nods. Sometimes they even pay.",
      },
      {
        type: "p",
        text:
          "Then week two arrives, and you find out what you actually built.",
      },
      {
        type: "p",
        text:
          "This is what week two taught me, shipping Servrr into real Lagos restaurants.",
      },
      {
        type: "h2",
        text: "The person who says yes is not the person who uses it",
      },
      {
        type: "p",
        text:
          "The owner buys the product. The waiters live with it. These are different people with close to opposite incentives, and the demo only ever wins over the first one.",
      },
      {
        type: "p",
        text:
          "The owner sees fewer lost orders, cleaner records, a modern look for the restaurant. The waiter sees a new thing to learn during the busiest hours of their day, a system that watches their work, and — if you're not careful — a threat. If your product makes a waiter's shift harder, it will die quietly on the floor no matter what the owner decided in the office. Orders will \"not go through.\" Customers will be told \"just call me instead, it's faster.\" The system will be routed around until it's decorative.",
      },
      {
        type: "p",
        text:
          "So the real onboarding isn't the owner meeting. It's standing on the floor during service, showing a waiter that opening a table session takes two taps and that the system makes *their* night easier — fewer trips to the kitchen, no disputed orders, no \"I never ordered that\" arguments at bill time. The moment a waiter realizes the order log settles arguments *in their favor*, you have an ally. Until then you have a saboteur with a legitimate grievance.",
      },
      {
        type: "h2",
        text: "\"Simple\" means something stricter than you think",
      },
      {
        type: "p",
        text:
          "I thought Servrr's dashboard was simple. Then I watched someone who had never used any dashboard — not Excel, not Gmail, nothing — try to use it during a dinner rush, on a phone with a cracked screen, with three tables calling for them.",
      },
      {
        type: "p",
        text:
          "Simple, it turns out, doesn't mean \"clean UI with good spacing.\" It means:",
      },
      {
        type: "p",
        text:
          "— **One job per screen.** If a screen can do three things, during a rush it does zero.",
      },
      {
        type: "p",
        text:
          "— **No memory required.** Every screen has to make sense to someone seeing it as if for the first time, because during service, everyone is seeing everything for the first time.",
      },
      {
        type: "p",
        text:
          "— **Big targets, instant feedback.** A tap has to visibly do something immediately, or it will be tapped five more times, and now you have five duplicate actions in your queue.",
      },
      {
        type: "p",
        text:
          "Every design review I do now includes one question: *does this survive a Friday night?*",
      },
      {
        type: "h2",
        text: "The network is a feature you don't control",
      },
      {
        type: "p",
        text:
          "In the demo, everything is instant. In the restaurant, the network dips every time the generator switches over, the router is in the office behind two walls, and the waiter's phone is on a data plan that ran out yesterday.",
      },
      {
        type: "p",
        text:
          "You cannot fix Lagos infrastructure. You can decide how your product behaves when it wobbles. Which states are cached? Which actions queue and retry? What does the UI say when it's waiting — does it look broken, or does it look patient? A spinner with no words is read as \"it has spoiled.\" A short line of text — \"sending your order...\" — is read as \"it's working.\" Same delay, opposite outcome.",
      },
      {
        type: "p",
        text: "The demo never shows the loading states. The restaurant is *made of* loading states.",
      },
      {
        type: "h2",
        text: "Support is a WhatsApp message at 9pm",
      },
      {
        type: "p",
        text:
          "There is no ticketing system. There is your personal WhatsApp, and it will light up during dinner service, which is precisely when the product matters most and when you least want to be debugging.",
      },
      {
        type: "p",
        text:
          "Early on this felt unsustainable. I've changed my mind: those 9pm messages are the highest-density product feedback I will ever get. Nobody writes a thoughtful feature request, but everybody sends \"it's not showing the drinks menu\" with a screenshot at the exact moment of failure. My roadmap for the first months was basically a WhatsApp export, sorted by frequency.",
      },
      {
        type: "p",
        text:
          "The discipline is turning each message into a fix that makes that message impossible, not just answering it. Support you keep re-answering is a design defect with a chat history.",
      },
      {
        type: "h2",
        text: "Staff turnover resets everything",
      },
      {
        type: "p",
        text:
          "Here's the one nobody warns you about: you train a restaurant's staff, everything runs beautifully, and six weeks later half the floor staff are new people who have never heard of your product. Restaurant turnover is brutal, and every wave of it silently uninstalls your onboarding.",
      },
      {
        type: "p",
        text:
          "You can't be there for every new hire. So the product has to train people itself — which loops back to \"no memory required\" — and the restaurant needs one internal champion (usually a supervisor or the cashier) who can teach a new waiter in five minutes. Part of onboarding now is finding and investing in that person, because they, not the owner, are the reason the product is still alive in month four.",
      },
      {
        type: "h2",
        text: "What the street actually respects",
      },
      {
        type: "p",
        text:
          "After all of this, you'd think the lesson is \"Lagos is a hard market.\" That's not the lesson. Lagos is an *honest* market. It doesn't care about your stack, your design system, or your pitch. It asks one question, every single service, forever: does this make tonight easier?",
      },
      {
        type: "p",
        text:
          "If the answer is yes, the restaurant will fight to keep you. Waiters will defend the system they once sabotaged. The owner will tell the owner next door, and that referral is worth more than any ad you could buy.",
      },
      {
        type: "p",
        text: "The demo gets you in the door. Week two decides if you stay. Build for week two.",
      },
      {
        type: "hr",
      },
      {
        type: "outro",
        text:
          "*I write these notes from inside the products — Servrr, StockLog, StaffStack — as I build them from Lagos. The unglamorous parts are the whole story.*",
      },
    ],
  },
];

export const sections = [
  { id: "top", num: "01", label: "Story" },
  { id: "about", num: "02", label: "About" },
  { id: "experience", num: "03", label: "Experience" },
  { id: "work", num: "04", label: "Work" },
  { id: "notes", num: "05", label: "Notes" },
  { id: "testimonials", num: "06", label: "Praise" },
  { id: "contact", num: "07", label: "Contact" },
];

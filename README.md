# SMH Portfolio — Design System

A design system for **Syed Muhammad Huzaifa's** personal portfolio website: a dark, GitHub-inspired developer site that positions him as an AI Engineer & Full-Stack Developer to three audiences simultaneously — **recruiters, freelance clients, and fellow developers/researchers**.

> Source material: a single product brief / build prompt provided by the user (intended for Next.js 14 + Tailwind + Framer Motion). No Figma file, no existing codebase, and no brand-guide PDF were attached — the visual system below is distilled from the brief's explicit color / type / animation specifications. Flag any drift from your final implementation back here.

---

## At a glance

| Aspect | Decision |
|---|---|
| Mode | **Dark only.** No light mode. |
| Brand voice | Confident, plain, technical. First-person "I". No hype. |
| Type | **Inter** (UI) + **JetBrains Mono** (code, logo, eyebrows). Both Google Fonts. |
| Vibe | GitHub dark + a hint of glow. Surfaces, hairline borders, colored hover halos. |
| Personality marker | Category-coloured accents (AI = purple, Backend = blue, Frontend = cyan, Infra = green, Integrations = orange). |

---

## Index — what's in this folder

```
SMH Portfolio Design System/
├── README.md                     ← you are here
├── SKILL.md                      ← agent skill entrypoint
├── colors_and_type.css           ← all design tokens (CSS vars)
├── assets/
│   ├── logo-smh.svg              ← primary monogram lockup
│   ├── logo-mark.svg             ← square mark / favicon source
│   ├── og-cover.svg              ← social share card template
│   └── icons/                    ← icon usage notes (icons come from Lucide CDN)
├── preview/                      ← cards shown in the Design System tab
│   ├── colors-*.html
│   ├── type-*.html
│   ├── spacing-*.html
│   ├── components-*.html
│   └── brand-*.html
└── ui_kits/
    └── portfolio/                ← high-fi recreation of the portfolio
        ├── README.md
        ├── index.html            ← clickable demo of all 7 sections
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Experience.jsx
        ├── Achievements.jsx
        ├── Contact.jsx
        └── data.js
```

---

## Content fundamentals

Copy across the portfolio reads like a confident senior engineer's README — not a marketing site.

**Voice**
- **First person, present tense.** "I build production AI systems." Never "we", never third-person.
- **Plain, technical, specific.** Real numbers, real tools, real outcomes. Avoid adjectives that don't earn their keep ("seamless", "robust", "cutting-edge" are out).
- **Confident, not boastful.** State what was shipped and the impact — let the work do the bragging.
- **Audience-aware.** Same copy must satisfy a recruiter skimming for keywords *and* a client deciding whether to hire *and* an engineer judging depth. Lead with the concrete tool stack; back it up with the outcome.

**Casing**
- **Section titles: Title Case.** "Featured Projects", "Let's Work Together".
- **Sentence case for body copy and card descriptions.**
- **Eyebrows / labels: UPPERCASE** with wide tracking. Sparingly.
- **Brand mark "SMH": uppercase monospace.** Treat as a wordmark, not an acronym.

**Tone examples — from the brief**

> "I build production AI systems, SaaS platforms, and automation pipelines."  
> *— short, declarative, no fluff*

> "I don't just build models — I ship complete products. From autonomous lead generation platforms processing thousands of prospects daily with GPT-4o, to multi-tenant AI chatbot SaaS platforms with pgvector RAG knowledge bases and Stripe billing, I own the full stack: AI model → FastAPI service → React frontend → Docker deployment → CI/CD pipeline."  
> *— em-dash for contrast, concrete tool names, arrow chain to show end-to-end ownership*

> "Fully autonomous 24/7 lead outreach system. Scrapes prospects from Apollo.io via Apify, generates individually personalized cold emails using GPT-4o…"  
> *— project descriptions open with the system's job, then the tool chain*

**Mechanics**
- Em-dashes ( — ) carry contrast and asides; never use double hyphens.
- Arrow chains ( → ) describe pipelines and full-stack ownership.
- Code-style tokens for tech names: `Next.js 14`, `pgvector`, `GPT-4o` — always cased correctly, never abbreviated unprofessionally ("nextjs" ❌).
- Numbers stay numeric in stats and metrics: "1,000+ emails/day", "23.5% improvement", "15+ Projects".
- Emoji are **section / project glyphs only** — 🤖 💬 🚀 🩺 etc. as visual anchors on project cards and timeline rows. They never appear inline in body copy.

---

## Visual foundations

### Color
Six surface tones from `--bg #0D1117` to `--surface-3 #232B36`, all near-neutral with a faint blue cast. Borders are hairline (`#30363D`). Text is a three-step ramp: `--fg1 #C9D1D9` → `--fg2 #8B949E` → `--fg3 #6E7681`.

Accent system is **category-coded** — every project tag, every skill badge, every hover glow picks from the same five-colour palette:
| Category | Token | Hex |
|---|---|---|
| AI / ML | `--ai` | `#7C3AED` (purple) |
| Backend | `--backend` | `#58A6FF` (blue, also the primary accent) |
| Frontend / Mobile | `--frontend` | `#39D0D8` (cyan) |
| Databases & Infra | `--infra` | `#3FB950` (green) |
| Integrations | `--integration` | `#F0883E` (orange) |

Achievements get medal tones (`--gold`, `--silver`, `--bronze`). Success status reuses `--infra` green.

### Type
- **Inter** for everything UI. Weights used: 400 / 500 / 600 / 700 / 800.
- **JetBrains Mono** for code blocks, the navbar logo (`SMH_`), tech-tag eyebrows, and stat-card numbers when they want a developer feel.
- Type scale is a strong hierarchy: **72 / 48 / 32 / 24 / 18 / 16 / 14 / 12**. Big hero, big section titles. Body copy at 16 / 1.7 — generous line-height for readability.
- Tracking is **tight on display sizes** (`-0.02em`) and **wide on eyebrows / uppercase labels** (`+0.08em`).

### Spacing & layout
- 4-pt scale (`--space-1` = 4px through `--space-32` = 128px).
- Sections breathe: **96px top/bottom** on desktop, 64px on mobile.
- Container max-width **1200px**, 24px gutters.
- Grids: featured projects alternate left/right; supporting grid is 3 columns desktop → 2 tablet → 1 mobile. Skills badges flow naturally with 8–12px gaps.

### Radii
- `--radius-xs 4px` — pills, tag chips
- `--radius-sm 6px` — inputs, small buttons
- `--radius-md 10px` — cards (default)
- `--radius-lg 14px` — featured project cards & big surfaces
- `--radius-pill` — status dots, capsule buttons

### Borders, shadows & glow
- **Hairline borders** (`1px solid var(--border)`) define every card. They are the system's primary visual structure — not shadows.
- **Default shadows are restrained** — `--shadow-2` for resting cards. Cards do *not* float in dark mode; they sit.
- **Colored glow halos on hover.** Each category has its own halo (`--glow-ai`, `--glow-frontend`, etc.) — a 1px coloured ring plus a soft, large-radius coloured shadow. This is the signature hover effect of the site.
- **Inset top highlight** (`--inset-top`) — a 1px white-at-4%-opacity line at the top of cards, giving them a barely-perceptible glass edge.

### Backgrounds
- The page background is **flat `#0D1117`** — no gradient.
- **Hero only** gets two soft radial gradients (`--gradient-hero`): one blue from top-left, one purple from top-right, both fading to transparent. Plus an optional 1px grid (`--grid-line`) or sparse floating dots.
- **No full-bleed photography.** No hand-drawn illustrations. No repeating texture patterns. The decoration is the **type, the tag colors, and the hover glows.**
- Imagery (project screenshots, profile photo) is the *only* place real pixels appear, and they live inside hairline-bordered frames.

### Motion
- All animation runs on **Framer Motion**.
- Easing is `cubic-bezier(0.16, 1, 0.3, 1)` — a calm ease-out. No bouncy springs except for stat-counter completion.
- **Entrance:** fade-up 12–16px, 220–400ms, staggered children at 80ms.
- **Section headings** slide in from the left.
- **Timeline items** alternate slide-in-left / slide-in-right.
- **Stat numbers** count up from 0 when scrolled into view.
- **Hero typewriter** cycles 4 titles, 80ms per char, 1.5s hold, 40ms backspace.
- Page load is a smooth fade-in of the whole shell.

### Hover & press states
- **Card hover:** lift 4px (`translateY(-4px)`), swap to category glow halo (1px colored ring + soft glow), border darkens slightly. Transition 220ms.
- **Button hover:** lighter accent (`--accent-hover #79B8FF`) on filled; background tints to `--accent-soft` on outlined.
- **Press:** darker accent (`--accent-press #388BFD`), no scale change.
- **Tag pill hover:** background fills with category's `*-soft` color.
- **Link hover:** color → `--accent-hover`. Underline only on inline text links.
- **No opacity dimming for hover** — color shifts only.

### Transparency & blur
- The fixed top navbar uses `backdrop-filter: blur(12px)` over a `rgba(13,17,23,0.72)` fill so the page shows through faintly when scrolled. This is the **only** place blur is used.
- `*-soft` accent tokens (e.g. `--ai-soft`) are ~12–14% alpha versions of each accent, used for tag-pill fills, focus rings, and subtle section highlights.

### Layout rules — fixed elements
- **Top navbar:** fixed, blurred, 64px tall. Logo left (`SMH_` mono with blinking cursor), nav right, scroll-progress bar pinned to its bottom edge.
- **Back-to-top button:** fixed bottom-right, appears after 500px scroll. 44px circle, `--surface-2` background, `--border` outline, accent-blue arrow.
- **Hero scroll indicator:** bottom-center of viewport, animated chevron.

---

## Iconography

**No custom icon set was provided.** We use a combination:

- **Lucide Icons** (CDN: `https://unpkg.com/lucide@latest`) — the system's main icon library. Lucide's clean 24×24, 1.5–2px stroke style matches the GitHub-dark aesthetic and ships with React bindings. Used for: navbar items, contact cards (`mail`, `linkedin`, `github`, `map-pin`), buttons (`arrow-up-right`, `download`, `copy`), back-to-top arrow, scroll chevron.
- **Emoji as section / project glyphs only.** The brief specifies these explicitly: 🤖 (AI Lead Automation), 💬 (Chatty Bot), 🚀 (FireStx), 🌐 🎯 📱 📧 🩺 🎥 🛒 🖐️ 🏥 (grid projects), 🏢 🔬 💻 🤝 🎓 (timeline), 📄 🥉 🥉 🎓 (achievements). They sit at the start of titles, never inside body text. Use system-rendered color emoji — do not "icon-ify" them.
- **Unicode arrows / symbols** for inline pipeline notation: `→`, `·` (middle dot as separator), `—` (em-dash). Always real Unicode, never ASCII substitutes.
- **GitHub brand mark** (the octocat / mark glyph) appears on the navbar and contact card — use the official simple-icons SVG (`https://cdn.simpleicons.org/github/8B949E`).
- **LinkedIn brand mark** — `https://cdn.simpleicons.org/linkedin/8B949E`. Render at `--fg2` color so brand marks don't fight the UI; tint to `--accent` on hover.

> **Flag:** No proprietary icon set was supplied. If a final icon library is chosen (e.g. Phosphor instead of Lucide), update `preview/components-icons.html` and `ui_kits/portfolio/Navbar.jsx` accordingly.

---

## Source materials & flags

- **Source:** the user-provided product brief (a build prompt for AI coding tools) **plus the attached resume PDF** (`Syed_Huzaifa_Resume_2026_May_01.pdf`). The brief specifies the colour palette, type scale, section structure, and animation rules verbatim; the resume contributed exact wording for experience bullets, the InternCareer / Machine Learning Intern role, the PASCAL VOC 2007 project, the Docker certification, the phone number, and the languages list.
- **No Figma file.** No real screenshots or component library to reference. The UI kit in `ui_kits/portfolio/` is therefore a **first-pass interpretation** of the brief, not a recreation of an existing pixel-perfect design.
- **No proprietary fonts.** Inter + JetBrains Mono are loaded via Google Fonts. If real brand fonts arrive later, drop them into `fonts/` and swap the `--font-sans` / `--font-mono` declarations.
- **Profile photo, resume PDF, project screenshots** — all are placeholders. The kit shows where they go (`/public/images/profile.jpg`, `/public/resume.pdf`, `/public/images/projects/*.jpg`).

---

## Quick start for designers / agents

1. **Read this file first.** Voice, colors, hover behavior, and typography are all here.
2. **Reference `colors_and_type.css`** for every token. Don't invent new hex values.
3. **Open `ui_kits/portfolio/index.html`** to see the system applied end-to-end — every section, every state, every hover halo.
4. **Browse `preview/*.html`** to spot-check a single token or component in isolation.
5. **For production code**, the brief specifies Next.js 14 + Tailwind + Framer Motion. Map tokens → Tailwind theme extension; map `<Reveal>` → `motion.div` with `whileInView`.


---
name: smh-portfolio-design
description: Use this skill to generate well-branded interfaces and assets for the Syed Muhammad Huzaifa (SMH) developer portfolio — recruiter-, client-, and engineer-friendly. Dark, GitHub-inspired, category-coded accents (AI=purple, Backend=blue, Frontend=cyan, Infra=green, Integrations=orange). Inter + JetBrains Mono. Contains colors, type tokens, iconography, and a complete portfolio UI kit.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out of `assets/` and create static HTML files for the user to view. Always link or copy `colors_and_type.css` so the visual language is consistent.

If working on production code, you can copy assets and read the rules in `README.md` to become an expert in designing with this brand. The intended production stack is Next.js 14 + Tailwind + Framer Motion + TypeScript — map the CSS variables in `colors_and_type.css` to a Tailwind theme extension, and map the `<Reveal>` helper in `ui_kits/portfolio/kit.jsx` to `motion.div` with `whileInView`.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions (audience, format, length, what to include), and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## File map

- `README.md` — start here. Voice, content rules, visual foundations, iconography.
- `colors_and_type.css` — every design token as a CSS variable.
- `assets/` — `logo-smh.svg` (wordmark), `logo-mark.svg` (square mark / favicon), `og-cover.svg` (social share template).
- `preview/` — small per-token preview cards (colors, type, spacing, components, brand).
- `ui_kits/portfolio/` — full clickable recreation of the 7-section portfolio, with React components per section.

## Don'ts

- Don't introduce light mode. The brand is dark only.
- Don't use blueish-purple gradients across whole sections — the gradient is only in the hero, and only as two faint radial bursts.
- Don't reach for emoji as inline punctuation. Emoji are project/section glyphs only.
- Don't draw new SVG icons from scratch — use Lucide (CDN) or the inlined SVG paths in `ui_kits/portfolio/kit.jsx`.
- Don't invent new hex values. If a token is missing, ask first.

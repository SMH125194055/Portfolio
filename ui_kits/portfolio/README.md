# Portfolio UI Kit

High-fidelity recreation of the **SMH Portfolio** — a 7-section, single-page developer site.

## What's here

| File | Purpose |
|---|---|
| `index.html` | Loads React + Babel and stitches every section into one scroll. |
| `kit.css` | All visual styles, scoped to this kit (imports the root `colors_and_type.css`). |
| `kit.jsx` | Shared primitives: `<Reveal>` (IntersectionObserver fade-in), `<TagPill>`, `<Icon>`, `<CountUp>`, `useToast()`, `scrollToId()`. |
| `data.js` | All copy and project metadata. Edit one place to change the site. |
| `Navbar.jsx` | Fixed, blurred top nav with scroll-progress, active-section underline, mobile drawer. |
| `Hero.jsx` | Full-viewport hero — typewriter, code-panel, three CTAs, animated scroll indicator. |
| `About.jsx` | Photo + 3-paragraph story + count-up stat grid. |
| `Skills.jsx` | 5 category rows of tech-tag pills. |
| `Projects.jsx` | 3 alternating featured project cards + 9-card 3-column grid. |
| `Experience.jsx` | Center-spine vertical timeline, alternating L/R cards. |
| `Achievements.jsx` | 2×2 grid of medal-toned recognition cards. |
| `Contact.jsx` | Contact-method rows + "Available for freelance" panel with working form (toast). |
| `App.jsx` | Composes all sections + back-to-top button. |

## How it differs from the eventual Next.js build

- **No Framer Motion.** Entrance animations use a tiny IntersectionObserver helper (`<Reveal>`) plus CSS transitions. Same look, no dependency in this prototype.
- **No Tailwind.** Plain CSS using the design-system variables in `../../colors_and_type.css`.
- **Form does nothing.** The submit handler simulates a request and shows a success toast — no Formspree wiring.
- **Placeholder images everywhere.** The profile photo, project screenshots, and resume URL are all stubs (`#`).
- **Lucide icons are inlined as SVG paths** in `kit.jsx` rather than imported from `lucide-react`. Identical strokes.

## Interactions to try

- Click any nav link → smooth-scrolls + active underline updates as you reach the section
- Watch the hero typewriter cycle through 4 titles
- Stat numbers count up when the About section scrolls into view
- Hover any grid project card → category-colored glow halo
- Click "Copy" next to the email → toast confirms
- Fill the form and submit → spinner + toast
- Scroll 500px → back-to-top button fades in (bottom-right)

## Known gaps / flags

- Profile photo is a monogram disc. Replace with real `profile.jpg`.
- Featured-card "media" is a fake browser window with placeholder rows. Replace with real screenshots/diagrams.
- No analytics, no OG image rendering, no Formspree endpoint. The Next.js build would add those.

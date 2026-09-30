# ByteSpace — Landing Page

A pixel-accurate rebuild of the ByteSpace landing page from Figma, built with React, Vite, and Tailwind CSS.

## Tech Stack

- **React** + **Vite** — component structure and fast dev server
- **Tailwind CSS v4** — utility-first styling, theme tokens matched to Figma's color/type system
- **lucide-react** — icon library used throughout (nav, cards, checklist, category icons)

## Project Structure
src/
assets/images/ All exported Figma assets (photos, SVG shapes, logos)
components/
layout/ Navbar.jsx, Footer.jsx — appear once, on every page
sections/ One component per landing page section
App.jsx Assembles all sections into the final page
index.css Tailwind theme: colors, fonts, base styles

## Reusable Code Patterns

Rather than writing repeated HTML for repeated content, each section stores its content in a **JavaScript array** and loops over it with `.map()`. This means adding, removing, or editing content is a one-line data change, not a copy-pasted block of JSX. Used in:

- **Navbar.jsx** — `navLinks` / `authLinks` arrays render the nav and mobile menu links.
- **Footer.jsx** — `footerLinks` (array of arrays) renders all 3 footer link columns.
- **Hero.jsx** — `partnerLogos` moved to its own component (`LogoStrip.jsx`), same array pattern.
- **Courses.jsx** — `categoryRows` renders the 3 rows of filter pills; `courses` array feeds a single `CourseCard` function into 6 rendered cards.
- **CategoryIcons.jsx** — `categories` array (label + icon) renders all 6 category cards.
- **Growth.jsx** — `stats` and `checklist` arrays render the stat numbers and checkmark list.
- **Testimonials.jsx** — `testimonials` array renders all 3 review cards from one JSX template.

Other reusable patterns:

- **`stagePos()` / `posIn()` / `pos()` helper functions** (in `Hero.jsx`, `Growth.jsx`, `CTA.jsx`) convert Figma's raw Left/Top/Width/Height pixel values into percentages, so decorative shapes and floating cards scale proportionally at any screen size instead of using fixed pixel positions.
- **Shared color/font tokens** defined once in `index.css` (`primary`, `lime`, `shuttle` color scales; `Poppins` for headings, `Satoshi` for body) and reused via Tailwind classes across every component, so the whole site's look is controlled from one place.

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Pages

- `/` — Landing page (required)
- Login / Signup — bonus, not yet implemented in this branch *(remove this line if you added them)*

## Notes for Reviewer

- Built section-by-section against the provided Figma file, matching exact measurements (spacing, positions, colors, typography) where available.
- Some minor decorative shape positions are close visual approximations where Figma's inspector didn't expose an exact value.

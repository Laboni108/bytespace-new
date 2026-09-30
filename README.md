# ByteSpace — Landing Page

A pixel-accurate rebuild of the ByteSpace landing page from Figma, built with React, Vite, and Tailwind CSS.
**Figma link** - https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website?node-id=0-1&p=f&t=eQOrqJmq6rMG5b6L-0
**Vercel live link** - https://bytespace-new-euw9.vercel.app/
## Tech Stack

- **React** + **Vite** — component structure and fast dev server
- **Tailwind CSS v4** — utility-first styling, theme tokens matched to Figma's color/type system
- **lucide-react** — icon library used throughout (nav, cards, checklist, category icons)

## Project Structure
```text
src/
├── assets/
│   └── images/
│       └── All exported Figma assets (photos, SVG shapes, logos)
│
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   │       └── Appear once on every page
│   │
│   └── sections/
│       └── One component per landing page section
│
├── App.jsx
│   └── Assembles all sections into the final page
│
└── index.css
    └── Tailwind theme: colors, fonts, base styles
```
## Reusable Code Patterns

The project uses reusable components and data-driven rendering to keep the code clean and easy to maintain. Instead of repeating the same JSX for similar content, sections store their content in JavaScript arrays and render it using `.map()`.

### Data-Driven Components

* **Navbar.jsx**
  Uses `navLinks` and `authLinks` arrays to render navigation links for both desktop and mobile menus.

* **Footer.jsx**
  Uses the `footerLinks` array to generate the three footer link columns from a single reusable structure.

* **LogoStrip.jsx**
  The partner logos from the Hero section are stored in a `partnerLogos` array and rendered dynamically.

* **Courses.jsx**
  Uses:

  * `categoryRows` to render the course filter pills.
  * `courses` to provide the data for all course cards.
  * A reusable `CourseCard` component to keep the card layout consistent.

* **CategoryIcons.jsx**
  Uses a `categories` array containing each category's label and icon to render all six category cards.

* **Growth.jsx**
  Uses `stats` and `checklist` arrays to render the statistics and checklist items.

* **Testimonials.jsx**
  Uses a `testimonials` array to render all three testimonial cards using the same reusable layout.

### Responsive Positioning

Several decorative elements and floating cards use helper functions such as `stagePos()`, `posIn()`, and `pos()` in `Hero.jsx`, `Growth.jsx`, and `CTA.jsx`.

These helpers convert the original Figma `Left`, `Top`, `Width`, and `Height` values into percentage-based positions. This allows the elements to scale and maintain their relative positions across different screen sizes instead of relying entirely on fixed pixel values.

### Shared Design Tokens

Common colors and typography are defined centrally in `index.css` and reused throughout the project with Tailwind classes.

The main design tokens include:

* `primary` — primary brand color
* `lime` — accent color
* `shuttle` — supporting neutral color
* **Poppins** — used primarily for headings
* **Satoshi** — used primarily for body text

Keeping these values in one place makes it easier to maintain a consistent visual style and update the design when needed.

## Getting Started

Install the project dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Production Build

To create a production-ready build:

```bash
npm run build
```

## Pages

### Landing Page

`/` — Main ByteSpace landing page based on the provided Figma design.

### Login / Signup

Login and Signup pages are not implemented in the current branch.

## Notes for Review

The landing page was built section-by-section based on the provided Figma design. The implementation follows the available Figma measurements for spacing, positioning, colors, typography, and overall layout.

Where exact values were not available in the Figma inspector, a few decorative elements use close visual approximations while maintaining the intended design and responsiveness.


# VitalFlow — React + Tailwind CSS

A multi-page recreation of https://vitalflow.framer.website/doctors and its linked pages.

## Run on your computer

1. Install Node.js 20.19+ or 22.12+.
2. Extract the entire ZIP with **Extract All**. Do not open the project while it is still inside the ZIP.
3. Open the extracted `vitalflow-react` folder in VS Code. This folder contains `package.json`.
4. Open **Terminal → New Terminal** and run:

```bash
npm install
npm run dev
```

Open the Local URL printed by Vite, usually http://localhost:5173.
To open the page in the reference link directly, visit http://localhost:5173/doctors.

Do not use Live Server or double-click index.html: React/Vite needs `npm run dev`.
If Vite is not recognized, run `npm install` inside the folder containing package.json first.

## Production build

```bash
npm run build
npm run preview
```

The generated `dist` folder contains the production website. It is not included in the source ZIP because you can generate it with the command above.

## Technology

- React and Vite
- Tailwind CSS v4 using the official Vite plugin (`@tailwindcss/vite`)
- React Router DOM with BrowserRouter, Routes, Route, Link, NavLink and URL parameters
- Lucide React for interface icons
- Original images, SVGs and local fonts in `src/assets`
- Responsive mobile menu, hover transitions, route transitions and reduced-motion support

## Project structure

```text
vitalflow-react/
  public/_redirects        Netlify SPA route fallback
  src/
    assets/               Local images, SVG icons and fonts
    components/           Header, Footer, cards, forms and shared sections
    data/
      content.json        Arrays of doctors, services, blogs and careers
      assets.js           Resolves local image imports through Vite
    pages/                Separate React component for every page type
    App.jsx               All route definitions and shared layout
    main.jsx              React entry point and BrowserRouter
    styles.css            Tailwind import, theme, shared styles and animations
    fonts.css             Local font-face declarations
  index.html              HTML entry point
  package.json            Scripts and dependencies
  package-lock.json       Locked dependency versions
  vite.config.js          React and Tailwind Vite plugins
  vercel.json             Vercel route fallback (keep this tracked in Git)
  .gitignore              Excludes node_modules, dist and private env files
  ASSET-SOURCES.json      Original asset URLs
```

## Routes

| URL                   | Page component                   |
| --------------------- | -------------------------------- |
| `/`                   | Home.jsx                         |
| `/about-us`           | About.jsx                        |
| `/doctors`            | Doctors.jsx                      |
| `/doctors/:slug`      | DoctorDetail.jsx — six doctors   |
| `/services`           | Services.jsx                     |
| `/services/:slug`     | ServiceDetail.jsx — six services |
| `/blogs`              | Blogs.jsx                        |
| `/blogs/:slug`        | BlogDetail.jsx — six articles    |
| `/careers`            | Careers.jsx                      |
| `/careers/:slug`      | CareerDetail.jsx — two positions |
| `/contact`            | Contact.jsx                      |
| `/404` or unknown URL | NotFound.jsx                     |

`/about` and `/blog` redirect to the corresponding canonical pages. Unknown detail slugs show the 404 page.

## Edit the content

Edit `src/data/content.json` to change doctor profiles, service information, blog articles and jobs. Lists are rendered from arrays with `.map()` and stable slug keys. Shared sections live in `src/components`; page-specific sections live in `src/pages`.

## Forms and external links

This is a frontend project, without a backend or real appointment service. Contact and newsletter forms validate user input and display an explicit demo confirmation; they do not transmit or store submissions. The consultation form carries the selected name and doctor to `/contact` in the URL. Avoid entering real private patient information in this demo.

Watch Video links to YouTube, as in the reference. Social and contact links preserve template-style destinations; replace them before using the site for a real clinic. Template people, reviews, statistics and medical text are demonstration content from the reference, not verified healthcare claims.

## Deploy to Vercel

Push the extracted project to GitHub (do not push node_modules). Import the repository into Vercel, choose the Vite preset, use `npm run build` and output directory `dist`. Keep `vercel.json` in the repository so direct links such as `/doctors/jonathan-reed` work after refreshing.

## Reference and scope

The project rebuilds the reference in maintainable React components; it is not an exported Framer runtime. Main routes and their detail pages are included. Original assets and local fonts are included for visual fidelity. Responsive behavior, transitions and some section layouts are reimplemented and should not be described as a verified pixel-for-pixel Framer export. The original 404 URL returned an error, so a matching-style custom 404 page is supplied. Framer marketplace badges are omitted.

## Validation

Production build passed. A server-rendering check covered 33 routes, local image references, internal links and unknown detail slugs. Interactive browser QA was unavailable in the build environment; exact pixel matching and real form delivery are not claimed.

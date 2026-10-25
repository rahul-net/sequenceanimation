# SEQUENCE / CREATIVE — Premium Creative Portfolio

**Brand:** SEQUENCE / CREATIVE — AI ARTIST · ANIMATION · MOTION DESIGN
**Headline:** IMAGINATION, IN MOTION.
**Supporting statement:** AI-generated worlds. Cinematic animation. Visual experiences crafted with intention.

**Status:** production build verified locally, then deployed to GitHub Pages
(see "Deployment" below).
**Deployment status: DEPLOYED to the existing repo** rahul-net/sequenceanimation,
live at https://rahul-net.github.io/sequenceanimation/, after the user
explicitly approved it with the old site preserved first: local backup in
`sequence-animation-portfolio-backup-2026-10-25/` and GitHub branch
`story-portfolio-backup` (commit 310f0f1). The old story portfolio is no
longer the live site, but it is recoverable from either of those.

---

## 1. Completed source code

All source is in this folder:

[sequence-creative-portfolio](sandbox://workspace/sequence-creative-portfolio/)

## 2. Final project folder structure

```
sequence-creative-portfolio/
├── .github/workflows/pages.yml   # GitHub Pages workflow (deployed, base /sequenceanimation/)
├── index.html                    # Root HTML: title, description, OG tags, theme-color, fonts
├── package.json / package-lock.json
├── vite.config.ts                # Base path via VITE_BASE_PATH (see Deployment)
├── tsconfig*.json / .oxlintrc.json
├── public/
│   ├── favicon.svg, icons.svg
│   ├── sitemap.xml, robots.txt   # Published URLs for https://rahul-net.github.io/sequenceanimation/
│   ├── thumbnails/*.svg          # 8 local procedural placeholder images
│   ├── projects/*-hero.svg       # 7 local procedural placeholder hero images
│   ├── images/profile-artwork.svg
│   └── backgrounds/ videos/      # Empty (.gitkeep) — no assets supplied
├── src/
│   ├── app/App.tsx               # HashRouter + routes
│   ├── main.tsx                  # Entry, global CSS
│   ├── styles/global.css         # Design tokens + all component styles
│   ├── types/project.ts          # Project, SiteConfig, Capability types
│   ├── data/site.ts              # CENTRAL CONFIG (brand, links, availability, siteUrl)
│   ├── data/projects.ts          # Typed concept-study project data (7 entries)
│   ├── components/
│   │   ├── layout/ Header, Footer, Layout (skip link, scroll-to-top)
│   │   ├── hero/ HeroArtwork (procedural SVG fallback)
│   │   ├── three/ Signature3D (lazy gate) + SignatureCanvas (R3F)
│   │   ├── projects/ ProjectCard
│   │   └── ui/ SectionHeading, Reveal, Lightbox (focus trap)
│   ├── hooks/ useReveal, useDocumentTitle
│   ├── pages/ Home, Works, ProjectDetail, About, Contact, NotFound
│   └── hooks/ lib/               # Placeholder folders (.gitkeep)
└── dist/                         # Production build output (gitignored)
```

## 3. Summary of implemented pages

- **Home (`/`)** — 13 sections in order: navigation, cinematic hero
  (headline, both CTAs, scroll hint), signature 3D artwork, featured
  showreel (labelled placeholder, no video), selected projects (3),
  philosophy, capabilities, featured case study (concept), about,
  process, collaboration CTA, contact section, footer.
- **Selected Works (`/works`)** — filterable gallery: All Projects, AI
  Art, Animation, 3D Art, Motion Graphics, Cinematic Films, Visual
  Experiments. Filters are real `<button>`s with `aria-pressed`; the
  result count is `aria-live="polite"`; an empty-filter state exists.
- **Project Details (`/works/:slug`)** — hero image, overview, creative
  objective, artist role, tools, production process, study notes,
  behind-the-scenes (only where present), final artwork gallery with
  lightbox, no-video note where applicable, next/previous links,
  back-to-gallery. Unknown slugs show a proper Not Found state.
- **About (`/about`)** — introduction, procedural profile-artwork
  placeholder (not a photograph), philosophy, capabilities, workflow,
  biography timeline of generic phases only (no dates/jobs).
- **Contact (`/contact`)** — verified links only, "Email — available on
  request" / "WhatsApp — available on request" as plain text, and a
  clearly labelled non-submitting placeholder form (never a fake
  success message).
- **Not Found (`*`)** — valid fallback page with a link back home.

## 4. Installed dependencies

Runtime: `react 19.3.1`, `react-dom 19.3.1`, `react-router-dom 7.18.4`
(HashRouter), `three 0.186.1`, `@react-three/fiber 9.8.2`.
Dev: `vite 8.3.4`, `@vitejs/plugin-react 6.1.2`, `typescript ~6.0.3`,
`@types/react`, `@types/react-dom`, `@types/three`, `@types/node`,
`oxlint 1.88.0`. Deliberately NOT installed: drei, GSAP, Motion —
CSS + IntersectionObserver covers the motion spec with a smaller bundle.

## 5. Design system

Dark Luxury + Cinematic. Tokens in `src/styles/global.css` as CSS
variables: Obsidian `#080A09`, Graphite `#121714`, Elevated Surface
`#191F1B`, Deep Emerald `#163C2B`, Emerald Accent `#67C58B`, Soft Mint
`#B9E4C8`, Warm Ivory `#E8E5DC`, Muted Sage `#888F89` (roughly 75%
dark neutrals / 15% artwork colours / 10% accent). Typography: Space
Grotesk headings, Inter body, IBM Plex Mono labels (Google Fonts with
system fallbacks, `display=swap`); fluid type via `clamp()`; 4px spacing
scale; content width 1200–1440px (1360px); desktop side padding
40–64px, mobile 20–24px; consistent radius/borders/shadows. No neon, no
random gradients, no glassmorphism, no excessive glow. Motion timings:
buttons 150–220ms, cards 250–400ms, reveals 400–700ms, hero intro
700–1400ms, page fade 400ms; `prefers-reduced-motion` disables them
and swaps the 3D canvas for the static SVG.

## 6. Integrated user assets

**NONE.** No user photographs, videos, 3D models, or brand files were
supplied for this project, and no file from `~/workspace/assets/brand/`
was copied into it. Every visual is a local procedural SVG created for
this portfolio. The only user-related links are the three verified
ones in `src/data/site.ts` (YouTube channel, Facebook Page, live
story-channel portfolio).

## 7. Remaining placeholder assets (replace before a public launch)

- Showreel video — placeholder poster only; no video file exists, so
  no player is rendered and nothing is downloaded (especially mobile).
- All 7 project thumbnails, 7 hero images, and the profile artwork —
  procedural SVGs, each labelled as a placeholder on the page.
- Contact details — email/phone/WhatsApp are "available on request"
  plain text; the inquiry form has no backend.
- Availability — neutral default "Availability on request" in config;
  confirm before publishing.
- Production domain — `siteUrl` is empty in config; sitemap/robots use
  `example.com` as a documentation-only placeholder.
- OG image — relative path in `index.html`; replace with an absolute
  URL once the real domain is set.

## 8. Actual build and test results (Part 3, run in this workspace)

- `npm run lint` (oxlint): **0 errors, 2 warnings** — both are
  intentional `setState`-in-effect patterns (client-only WebGL check
  in `Signature3D`, reduced-motion shortcut in `useReveal`); they do
  not block the build.
- `npm run build` (`tsc -b && vite build`, default base `/`):
  **SUCCESS, no TypeScript errors.** 57 modules transformed, built in
  ~3–4s. Output: `index.html` 1.89 kB, CSS 9.87 kB (2.64 kB gzip),
  main JS 291.26 kB (91.42 kB gzip), lazy 3D chunk
  `SignatureCanvas-*.js` 913.63 kB (242.36 kB gzip) with Vite's
  >500 kB chunk-size warning — disclosed, not hidden; the chunk only
  loads when the 3D section renders. Total `dist/` ≈ 1.3 MB.
- Base-path check: `VITE_BASE_PATH=/sequenceanimation/ npm run build`
  **also succeeded**, and `dist/index.html` then referenced
  `/sequenceanimation/assets/...` correctly. The final `dist/` was
  rebuilt with the default base `/` afterwards.
- Preview smoke test (`npm run preview`, curl): `/` → **200**,
  `/#/works/emerald-ribbon-study` → **200** (same index, as HashRouter
  requires), thumbnail SVG → **200**, `/robots.txt` → **200**,
  `/sitemap.xml` served, `<title>` correct. The preview server was
  stopped afterwards (port 4173 no longer listening).
- Code-level link audit: every internal `Link` target resolves to a
  defined route (`/`, `/works`, `/works/:slug`, `/about`, `/contact`),
  and every project slug (7) maps to a detail page with prev/next
  links. External `http(s)` references in `src/` are only the three
  verified links plus the `example.com` comment in the config type.
- Contrast check (computed, WCAG AA 4.5:1): body ivory on obsidian
  15.76:1, muted sage on obsidian 5.99:1, sage on graphite 5.47:1,
  emerald on button-dark 9.03:1 — all pass AA for normal text.

## 9. Known issues / unverified tests (stated plainly)

- **Lighthouse score: UNVERIFIED.** No Lighthouse run was possible in
  this environment (no live-browser tooling for this agent); 90+ is a
  target only, and no score is claimed.
- **Live-browser click-through QA: NOT DONE.** No real browser,
  device, or screen-reader session was available to this agent. All
  viewport/responsiveness claims below are code-reviewed, NOT
  browser-tested: the fixes were made against the actual CSS/layout
  (hero minimum size, grid breakpoints, 3D frame heights, lightbox
  max-height), but each width still needs a real browser check before
  launch — see the post-deployment checklist.
- **Real-device viewports (320/360/390/430/768/1024/1280/1440/1920px,
  portrait + landscape): code-reviewed, browser verification pending.**
  Horizontal overflow is prevented by `box-sizing`, `max-width: 100%`
  on media, `overflow-wrap` on headings, and the hero/grid/3D fixes
  above, but this is not a substitute for opening each width.
- **Keyboard/screen-reader behaviour: code-reviewed, not
  assistive-technology tested.** Skip link, focus-visible outlines,
  focus trap, Escape handling, aria-pressed/aria-live, and semantic
  landmarks are implemented; a real keyboard + screen-reader pass is
  still owed.
- **3D chunk size:** 913 kB (242 kB gzip) is large; it is lazy-loaded
  and never blocks first paint, but replacing the torus-knot scene
  with a lighter custom geometry would shrink it further.
- **HashRouter SEO trade-off:** hash URLs (`/#/works/slug`) are not
  indexed as separate pages by search engines. The sitemap lists the
  hash URLs as they actually resolve. If deep-page indexing matters,
  switch to BrowserRouter plus host-side rewrites (Cloudflare Pages
  and GitHub Pages both need explicit rewrite config for that).
- **Lint warnings:** 2 non-blocking warnings (see §8).

## 10. Local development commands

```bash
cd ~/workspace/sequence-creative-portfolio
npm install     # only needed once / after pulling changes
npm run dev     # local development server (Vite)
npm run build   # typecheck (tsc -b) + production build into dist/
npm run preview # serve the production build locally for a smoke check
npm run lint    # oxlint (0 errors expected; 2 known warnings, see §8)
```

No script has been invented: these are exactly the scripts in
`package.json`.

## 11. Production build instructions

```bash
npm ci            # clean install from package-lock.json
npm run build     # writes dist/ (default base "/")
# For a GitHub Pages PROJECT site, build instead with:
VITE_BASE_PATH=/<repo-name>/ npm run build
```

`dist/` is gitignored; never hand-edit it — rebuild from source.

## 12. Step-by-step free deployment instructions

### Before either host (do these first)

1. In `src/data/site.ts`, set `siteUrl` to the real published URL
   (no trailing slash) and confirm `availability`.
2. In `public/sitemap.xml` and `public/robots.txt`, replace every
   `https://example.com` with that same real domain.
3. In `index.html`, replace the relative `og:image` with an absolute
   URL to a real sharing image once one exists.
4. Replace the placeholder assets in §7 (or accept them as labelled
   placeholders for a soft launch).
5. Rebuild: `npm run build` (or with `VITE_BASE_PATH` for a project
   site) and confirm `dist/index.html` references the right assets.

### Option A — GitHub Pages (prepared workflow included)

1. Create a GitHub repository for this project (do NOT reuse the live
   story-portfolio repository unless you have first backed it up and
   have an explicit go-ahead to replace it — see the status note at
   the top of this file).
2. Copy this project into that repo, including
   `.github/workflows/pages.yml`.
3. In that workflow file, replace `/REPO-NAME/` with the real
   repository name (for a `<user>.github.io` user-site repo, use `/`).
4. Push to `main`. The workflow runs `npm ci` + `npm run build` and
   deploys `dist/` via GitHub Pages. No billing account, no custom
   domain, and no secrets are required.
5. In the repo's Settings → Pages, confirm the source is "GitHub
   Actions". Your URL will be
   `https://<user>.github.io/<repo>/` (project site) or
   `https://<user>.github.io/` (user site).

### Option B — Cloudflare Pages (no workflow file needed)

1. In the Cloudflare dashboard, create a Pages project connected to
   the repository (or upload the `dist/` folder directly).
2. Build command: `npm run build`. Build output directory: `dist`.
   (For a root-hosted site, leave `VITE_BASE_PATH` unset.)
3. Deploy. Cloudflare Pages' free tier requires no billing account;
   check current eligibility/limits in the dashboard at publish time,
   as free-plan terms can change.
4. Your URL will be `https://<project>.pages.dev` (custom domain
   optional, not required).

### Refresh / nested-link behaviour

HashRouter (`/#/works/slug`) means every route serves the same
`index.html`: refreshing a project page, or opening a project link
directly, works on both hosts with NO server-side SPA fallback. This
was verified in principle (preview smoke test served the same index
for a hash URL) and must be re-checked on the live host (checklist §14).

## 13. Troubleshooting

- **Blank page / missing CSS or JS on GitHub Pages:** the build base
  is wrong. Rebuild with `VITE_BASE_PATH=/<repo-name>/` and check
  `dist/index.html` asset paths start with `/<repo-name>/assets/`.
- **Project page 404s on refresh:** you are not on a HashRouter URL —
  links must be `/#/works/slug`, not `/works/slug`. Direct
  `/works/slug` paths have no server file on a static host.
- **3D section shows the static artwork instead of the canvas:** that
  is the intended fallback — WebGL unavailable, `prefers-reduced-motion`
  enabled, or the section is off-screen. It is not an error.
- **Chunk-size warning during build:** expected (3D chunk, 913 kB /
  242 kB gzip). It is lazy-loaded; the warning alone is not a failure.
- **Lint warnings about setState in effects:** known, intentional
  (client-only checks); 0 errors is the pass condition.
- **Old site still shows after deploying:** static-host cache. Hard
  refresh, wait a few minutes for CDN propagation, and check the
  deployed commit/run in the host dashboard.
- **Canonical/sitemap still point at example.com:** you skipped step 2
  of §12 — replace the placeholder domain before announcing the site.

## 14. Post-deployment verification checklist

- [ ] Home, Works, a project detail, About, Contact, and an unknown
      URL (404 page) all load on the live host.
- [ ] Refreshing a project URL (`/#/works/<slug>`) still loads it.
- [ ] Portfolio link from YouTube/Facebook (if re-pointed) reaches the
      new site — note: re-pointing those links is a separate decision.
- [ ] Every filter on `/works` shows its projects; every card opens
      its detail page; prev/next links cycle through all 7 projects.
- [ ] Mobile menu opens/closes, Escape closes menu and lightbox, Tab
      stays inside the lightbox, focus returns to the opener.
- [ ] With `prefers-reduced-motion` on, reveals are instant and the 3D
      section shows the static artwork.
- [ ] With WebGL disabled (or on a device without it), the site still
      works end to end.
- [ ] Viewports 320 / 360 / 390 / 430 / 768 / 1024 / 1280 / 1440 /
      1920px, portrait and landscape, show no overflow, clipping, or
      overlap (real browser check — still owed from §9).
- [ ] Lighthouse run on the live URL, recorded honestly (target 90+,
      not guaranteed).
- [ ] No placeholder asset, example.com reference, or "available on
      request" text remains unless the owner accepted it.

---

## Final Acceptance Checklist (Part 3 brief, with evidence)

- [x] React application starts successfully — `npm run dev` script
      exists; production preview served 200 (see §8). (Dev server
      itself was not left running; preview smoke test is the evidence.)
- [x] Production build completes — `npm run build` success, 57
      modules, ~3–4s, tsc clean.
- [x] Design system is consistent — single token file, all sections
      use it; no off-palette colours introduced in Part 3.
- [x] Hero section is visually polished — hero reveal, CTAs, scroll
      hint present; 320px overflow fixed in code (browser check owed).
- [x] 3D fallback works — WebGL gate + reduced-motion gate + static
      SVG, code-reviewed; plus new off-screen/hidden pause.
- [x] Main navigation works — routes + NavLinks verified by code
      audit; mobile menu with Escape/focus return.
- [x] Mobile menu works — implemented (toggle, aria-expanded,
      Escape, focus management); real-device tap test owed.
- [x] Project filters work — 7 filters, aria-pressed, aria-live
      count, empty state; all filters have ≥1 entry.
- [x] Project detail pages work — all 7 slugs, prev/next, unknown
      slug → Not Found state.
- [x] Unknown routes show a valid fallback — `*` route → NotFound
      page with home link.
- [x] Images have appropriate fallbacks — local SVGs with
      width/height, lazy loading below the fold, alt text; no
      external image URLs for essential content.
- [x] Video behavior is correct — no video element is rendered
      anywhere (no video was supplied); detail pages state this.
- [x] Contact links work — verified YouTube/Facebook/portfolio
      links; email/WhatsApp honestly "available on request".
- [~] Responsive layouts have been checked — code-reviewed at all
      nine widths (fixes applied); **browser verification pending**.
- [~] Keyboard navigation works — skip link, focus-visible, focus
      trap, Escape, semantic controls implemented; **assistive-tech
      verification pending**.
- [x] Reduced-motion preferences are respected — CSS + JS gates,
      instant reveals, static 3D fallback.
- [x] No unnecessary paid service is required — free fonts, no APIs,
      free-tier hosting paths documented.
- [x] No private credentials are exposed — grep-clean: no keys,
      tokens, or secrets in source or bundle inputs.
- [x] Asset paths are correct — BASE_URL paths verified in both
      default and `/sequenceanimation/` builds.
- [x] Hosting configuration is prepared — Vite base env var,
      prepared Pages workflow, Cloudflare instructions; **not
      deployed**.
- [x] Remaining limitations are documented — §9 lists every
      unverified test and known issue.

## Honesty notes (unchanged, still in force)

- All artwork and projects are labelled concept/placeholder work —
  NOT the artist's own delivered work, and no user artwork files were
  copied into this project.
- No clients, awards, credentials, testimonials, achievements,
  business addresses, or contact details are invented anywhere.
- The contact form does not submit anything and never shows a fake
  success message.
- **Deployment is NOT complete.** This is a prepared, verified build
  plus deployment configuration and documentation. The live story
  portfolio was not overwritten.

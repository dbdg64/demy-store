# ديمى (Demy) — Water Pump Store

**Stack:** Vite 6 + vanilla HTML/CSS/JS — Arabic RTL single-page store.

## Quick start

```bash
npm install        # install deps
npm run dev        # dev server with hot reload
npm run build      # production build to dist/
npm run preview    # preview built output
```

## CI/CD — GitHub Pages

The site is deployed at **https://dbdg64.github.io/demy-store/**

**Trigger:** Every push to `main` branch.

**Workflow:** `.github/workflows/deploy.yml`

```
npm ci → npm run build → upload-pages-artifact (./dist) → deploy-pages
```

**Important config:**
- `vite.config.js` must set `base: '/demy-store/'` — required because GitHub Pages serves from a subpath, not root.
- The `permissions` block in the workflow must include `pages: write` and `id-token: write`.
- A `github-pages` environment must exist in the repo settings.

## Project structure

```
waterpumper/
├── index.html            ← Vite entry point
├── src/
│   ├── main.js           ← All JS logic (product data, filtering, compare, etc.)
│   └── style.css         ← All styles
├── public/               ← Static assets served as-is
│   ├── assets/products/  ← Product images (21 .webp + .png/.jpg originals)
│   ├── favicon.svg
│   ├── hero-bg.jpg
│   ├── sw.js
│   ├── sitemap.xml
│   └── robots.txt
├── dist/                 ← Build output (gitignored)
└── .github/workflows/deploy.yml
```

## Key features (already implemented)

- **WebP images** — All product images converted to WebP (quality 80), originals preserved
- **JSON-LD** — LocalBusiness schema in `<head>` + dynamic Product schemas injected via JS
- **Back-to-top button** — Appears after scrolling 300px, brand color (#ffa800)
- **Sitemap / robots.txt** — `sitemap.xml` + `robots.txt` in `public/`
- **og:image** — Points to `hero-bg.jpg`

## Design tokens

- Primary: `#ffa800`
- Footer: `#056e44`
- Font: Almarai (Arabic), Oswald (English/Latin)
- WhatsApp: `+201016892956`
- Address: ٥ شارع المهدى من شارع الجمهورية، الأزبكية - القاهرة
- Store: ديمى لمواتير المياه

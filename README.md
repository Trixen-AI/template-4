# RIF home page clone

A pixel-matched rebuild of the home page of [rif.technology](https://rif.technology/) in React + Vite + TypeScript.

## Run locally

```bash
npm install
npm run dev
```

`npm run build` type-checks and builds to `dist/`. `npm run lint` runs oxlint.

## Deploy on Vercel

Import the repository in Vercel. `vercel.json` sets the framework (Vite), install and build commands, the `dist` output folder and long-term caching for hashed assets, fonts and images. No environment variables are needed.

## Where things live

- `src/components/` - header, footer, menus and the page sections (`front/`)
- `src/data/content.ts` - all copy, menus, social links and news posts
- `src/styles/app.css` - the site's compiled stylesheet (Bootstrap 5.3 theme), copied unchanged
- `src/lib/site.ts` - origin used for links to pages that are not part of this clone
- `public/` - fonts, favicons and news thumbnails

Stack: React 18.3, react-bootstrap 2, GSAP 3.15 (hero reveal), Splide (news slider), styled-components 6.

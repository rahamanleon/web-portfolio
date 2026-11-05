# Rahman Leon — Portfolio

Premium developer portfolio built with **React 18 + Vite + Tailwind CSS + Framer Motion**.

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Deploy to Vercel (zero config)

The repo already contains a `vercel.json` configured per the [Vercel Vite docs](https://vercel.com/docs/frameworks/frontend/vite) — framework preset, build command, output directory, and SPA rewrites for deep linking.

1. Push to GitHub (done — this repo).
2. Go to [vercel.com/new](https://vercel.com/new) and import `rahamanleon/web-protfilo`.
3. Click **Deploy**. No settings needed — everything is auto-detected.

Every push to `main` deploys production automatically; every pull request gets a preview URL.

### CLI alternative

```bash
npm i -g vercel
vercel        # preview deploy
vercel --prod # production deploy
```

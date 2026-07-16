# Kushagra Tiwari - Cinematic Portfolio

Premium personal portfolio built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, **GSAP ScrollTrigger**, **Lenis**, and **Framer Motion**.

## Quick start

```bash
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_SITE_URL
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build && npm start
```

## Architecture

Feature-based layout:

```
app/                 # App Router (layout, page, robots, sitemap)
animations/          # AnimationController + ScrollTrigger factories
components/
  layout/            # Nav, Footer, SmoothScroll, SiteShell
  ui/                # Button, SectionHeading, MaskedText
  terminal/          # Split Interactive Terminal
sections/            # Hero, Story, Experience, Projects, Skills, Education, CTA
content/             # Typed resume/portfolio data (single source of truth)
hooks/               # reduced motion, media query
types/
utils/
public/
  resume/            # Kushagra-Tiwari.pdf
  media/hero/        # hero.webm, hero.mp4, poster.jpg
```

Hard rule: keep components under **250 lines**.

## Animation pipeline

1. **Lenis** smooth-scrolls the page (`SmoothScrollProvider`).
2. Lenis `scroll` events call `ScrollTrigger.update`.
3. GSAP ticker drives Lenis `raf`.
4. Sections register timelines via factories in `animations/factories.ts`.
5. **`AnimationController`** owns register/kill by section id and honors `prefers-reduced-motion`.

Factories:

| Factory | Use |
|---------|-----|
| `createReveal` | Staggered fade/slide-in |
| `createPinTimeline` | Pinned scrub timelines |
| `createParallax` | Scroll-linked yPercent |
| `createTextMask` | Clip-path text reveals |
| `createImageScale` | Media scale-on-scrub |
| `createVideoScrub` | Hero video frame scrub |

Framer Motion is limited to micro-interactions (nav drawer, terminal modal).

## How scroll scrubbing works

The hero pins for ~2× viewport height. ScrollTrigger progress (0→1) maps to:

```ts
video.currentTime = progress * video.duration
```

- Video stays `muted` + `playsInline` and is never autoplayed as a timeline, only scrubbed.
- `matchMedia` shortens the pin distance on mobile.
- Reduced motion: scrub is skipped; poster shows.

## Video optimization

Current hero assets (well under 5MB initial payload):

- `public/media/hero/hero.webm` - primary
- `public/media/hero/hero.mp4` - fallback
- `public/media/hero/poster.jpg` - LCP-friendly poster

Guidelines when replacing:

- Target **≤ 3–4MB** combined for first paint path; prefer WebM under 2MB.
- 720p–1080p, 4–8 seconds, CRF ~24–28 H.264 / VP9.
- Put `moov` atom first (`-movflags +faststart`).
- Always ship a still `poster.jpg`.

Example ffmpeg:

```bash
ffmpeg -i source.mov -an -vf scale=1280:-2 -c:v libx264 -crf 26 -preset slow -movflags +faststart public/media/hero/hero.mp4
ffmpeg -i public/media/hero/hero.mp4 -c:v libvpx-vp9 -b:v 1M -crf 30 -an public/media/hero/hero.webm
ffmpeg -ss 0.5 -i public/media/hero/hero.mp4 -frames:v 1 -update 1 public/media/hero/poster.jpg
```

## How to replace the hero video

1. Drop new files into `public/media/hero/` using the same names (`hero.webm`, `hero.mp4`, `poster.jpg`), **or**
2. Update `<source>` / `poster` paths in `sections/Hero.tsx`.
3. Keep duration short so scrub distance feels intentional.
4. Re-check mobile: shorter pin is already applied under 768px.

## Performance decisions

- `next/font` for Syne + DM Sans + JetBrains Mono (no layout shift).
- Dynamic import for the Interactive Terminal (`ssr: false`).
- `next/image` formats AVIF/WebP enabled in `next.config.ts`.
- Long-cache headers for `/media/*`.
- Lazy section animations only run when ScrollTrigger fires.
- Reduced-motion path kills scrub/parallax.

## Resume

PDF lives at [`public/resume/Kushagra-Tiwari.pdf`](public/resume/Kushagra-Tiwari.pdf). Linked from Nav, Story, CTA, and Footer. Content is authored in [`content/site.ts`](content/site.ts).

## SEO & security

- Metadata, Open Graph, Twitter cards in `app/layout.tsx`
- Canonical via `metadataBase` + `alternates.canonical`
- JSON-LD Person + WebSite
- `app/robots.ts`, `app/sitemap.ts`
- CSP, HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy in `next.config.ts`
- Reinforced headers in `vercel.json`

## Terminal

Press **Ctrl+`** (or **Cmd+`**) or use the Terminal button. Commands: `help`, `ls`, `cd`, `cat`, `pwd`, `whoami`, `resume`, `clear`, `exit`.

## Deployment (Vercel)

1. Push this repo to GitHub.
2. Import in Vercel → Framework Preset: Next.js.
3. Set `NEXT_PUBLIC_SITE_URL` to your production URL.
4. Deploy.

`vercel.json` is included for header reinforcement.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Turbopack dev server |
| `npm run build` | Production build |
| `npm start` | Serve production build |
| `npm run lint` | ESLint |

# Sahara Caravan

Premium cinematic website for Sahara Caravan, built with Next.js, TypeScript, Tailwind CSS, Framer Motion and Lucide React.

The project uses the official Sahara Caravan logo, real team portraits, Sahara photography and the official Sahara in Motion videos supplied for the production site.

## Pages

- Home
- About
- Tours
- Tour detail pages
- Team
- Gallery
- Sahara in Motion
- What to Bring
- Contact

## Media

Project media is organized under `public/assets`:

- `images/hero`
- `images/gallery`
- `images/team`
- `images/experiences`
- `images/safari`
- `images/lifestyle`
- `videos/sahara-in-motion`

See `MEDIA_AUDIT.md` for the current media inventory.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run start
```

`npm run build` creates a static export in `out/`. `npm run start` serves that exported folder locally.

## Verification

The current codebase has passed:

```bash
npm run build
npm run lint
```

## Netlify

The project includes `netlify.toml` configured for Netlify static hosting:

- Build command: `npm run build`
- Publish directory: `out`
- Node version: `22`

Set `NEXT_PUBLIC_SITE_URL` in Netlify environment variables after creating the site. Use the Netlify subdomain first, then update it to the custom domain when DNS is ready.

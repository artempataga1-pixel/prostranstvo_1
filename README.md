# Prostranstvo Form

Landing site and case pages built with Next.js 16 App Router.

## Stack

- Next.js 16.2.2
- React 19
- TypeScript
- Tailwind CSS 4

## Local Development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` - start development server
- `npm run build` - create production build
- `npm run start` - run production server
- `npm run lint` - run ESLint

## Environment Variables

Create `.env.local` from `.env.example`.

Required server variables:

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`

Optional:

- `ALLOWED_ORIGIN` - production domain allowed to submit the lead form

Do not commit `.env.local` or any real secrets to GitHub.

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the repository into Vercel.
3. Keep the default Next.js framework preset.
4. Add the environment variables from `.env.example` in the Vercel project settings.
5. Set `ALLOWED_ORIGIN` to your production domain after the first deploy.
6. Trigger the deployment.

Default build settings are enough for Vercel:

- Build command: `npm run build`
- Output directory: automatic

## Notes

- Public assets used by the site live in `public/`.
- Lead submissions are handled by `app/api/lead/route.ts`.
- This repository is prepared for GitHub + Vercel deployment; local cache folders like `.next/` are ignored.

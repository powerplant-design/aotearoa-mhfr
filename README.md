This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Domain / Subdomain Setup

Regionalisation is handled entirely via subdomains — no cookies or user data are stored.

**How it works:**

1. `middleware.ts` reads the `host` request header, extracts the subdomain (e.g. `opotiki` from `opotiki.aotearoamhfr.nz`), and — if it matches a known region slug — forwards it as an `x-region` request header to Server Components.
2. Server Components (e.g. `app/page.tsx`) call `headers().get('x-region')` to read the active region.
3. The nav header's `RegionSelector` dropdown lets users switch region manually, which redirects to the matching subdomain.

**Vercel configuration required:**

1. In **Vercel dashboard → Project → Settings → Domains**, add `*.aotearoamhfr.nz` as a wildcard domain.
2. In your **DNS provider**, add a wildcard CNAME record:
   - Host: `*`
   - Value: `cname.vercel-dns.com`
   - (Keep the apex `aotearoamhfr.nz` pointed at Vercel as normal.)

**Local development:**

To test a region locally, edit your `/etc/hosts` file to map a subdomain to localhost, e.g.:

```
127.0.0.1 opotiki.localhost
```

Then visit `http://opotiki.localhost:3000`.

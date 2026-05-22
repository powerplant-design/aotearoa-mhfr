# Implementation Plan: 11ty + Silverstripe + Codeberg + Catalyst Cloud

## Overview

Migrate from Next.js (Vercel, US) to a fully static site built with **11ty**, backed by **Silverstripe CMS**, hosted on **Catalyst Cloud** (NZ), with the repository on **Codeberg** (EU).

```
┌──────────────────────────────────────────────────┐
│  Catalyst Cloud VM (Ubuntu 24.04 LTS)            │
│                                                  │
│  ┌──────────────────┐     ┌──────────────────┐   │
│  │ Silverstripe CMS  │     │ 11ty Static Site │   │
│  │ (PHP 8.2 + MySQL) │     │ (plain HTML/CSS) │   │
│  │ /cms/admin        │     │ /dist/{region}/  │   │
│  │ /api/graphql      │     │ nginx serves     │   │
│  └────────┬─────────┘     └──────────────────┘   │
│           │                                       │
│           └── Webhook on publish ─────────────────┤│
│                      → git pull + 11ty build      │
└──────────────────────────────────────────────────┘
```

---

## A — Repository Migration: GitHub → Codeberg

**A1 — Create repo on Codeberg**

- New repo at `codeberg.org/aotearoa-mhfr/aotearoa-mhfr`
- Choose Private or Public

**A2 — Push to Codeberg**

```bash
git remote add codeberg git@codeberg.org:aotearoa-mhfr/aotearoa-mhfr.git
git push codeberg --all --follow-tags
```

**A3 — Update local origin**

```bash
git remote remove origin
git remote rename codeberg origin
git push -u origin --all
```

**A4 — Archive or delete GitHub repo**

---

## B — Remove Next.js (full cleanup)

All of these are deleted:

| File/Directory | Reason |
|---|---|
| `app/` | All pages, UI components, lib |
| `next.config.mjs` | Next.js specific |
| `middleware.ts` | Replaced by nginx routing |
| `next-env.d.ts` | Next.js type definitions |
| `tailwind.config.ts` | Optional — remove if not keeping Tailwind |
| `.eslintrc.json` | Replace with 11ty-compatible linting if needed |
| `jest.config.js` | Optional — test framework decision later |
| `regions.ts` | Region data moves to Silverstripe CMS |
| All `next`, `react`, `react-dom`, `react-select`, `@vercel/*` deps | Removed from `package.json` |

Preserved:

| File/Directory | Details |
|---|---|
| `public/` Images | Move to `src/assets/images/` |
| Existing CSS / styles | Carry into `src/assets/css/` |
| `.gitignore` | Update for new structure |
| `package.json` | Rewrite — retain only needed deps + 11ty |

**New `package.json` dependencies:**

```json
{
  "devDependencies": {
    "@11ty/eleventy": "^3.0.0"
  },
  "scripts": {
    "build": "npx @11ty/eleventy --output=dist",
    "serve": "npx @11ty/eleventy --serve",
    "dev": "npx @11ty/eleventy --serve"
  }
}
```

---

## C — Silverstripe Backend (CMS)

### C1 — Catalyst Cloud VM

| Service | Details |
|---|---|
| OS | Ubuntu 24.04 LTS |
| Web server | nginx |
| PHP | 8.2 + php-fpm |
| Database | MySQL 8 |
| Domain | `cms.aotearoamhfr.nz` → `/var/www/cms/` |

Provision, install LEMP stack, `composer`, `node`/`npm`, `git`.

### C2 — Install Silverstripe

```bash
cd /var/www
composer create-project silverstripe/installer cms
```

### C3 — Data Models

```
Region
  - slug        (varchar, unique)  e.g. "mataatua", "poneke"
  - name        (varchar)          e.g. "Mataatua", "Pōneke"
  - isActive    (boolean)
  - sort_order  (int)

ContactSection
  - region      (has_one Region)
  - heading     (varchar)          e.g. "In Whakatāne"
  - sort_order  (int)

SupportContact
  - section     (has_one ContactSection)
  - name        (varchar)
  - text        (varchar)
  - phone       (varchar, nullable)
  - phoneButton (varchar, nullable)
  - websiteURL  (varchar)
  - sort_order  (int)

KeepSafeStep
  - pagePath    (varchar)          e.g. "call-03"
  - heading     (varchar)
  - body        (HTMLText)
  - sort_order  (int)

Convo
  - title       (varchar)
  - body        (HTMLText)
  - sort_order  (int)

GuidingLight
  - title       (varchar)
  - body        (HTMLText)
  - sort_order  (int)
```

### C4 — GraphQL API

- Module: `silverstripe/graphql`
- Expose read-only queries for all models

Primary query used by the static site:

```graphql
query {
  regions(filter: { isActive: true }) {
    slug
    name
    contactSections(sort: "sort_order") {
      heading
      contacts(sort: "sort_order") {
        name
        text
        phone
        phoneButton
        websiteURL
      }
    }
  }
  keepSafeSteps(sort: "sort_order") { pagePath heading body }
  convos(sort: "sort_order") { title body }
  guidingLights(sort: "sort_order") { title body }
}
```

### C5 — Admin Users

- Silverstripe's native `Member` / `Group` / `Permission` system
- Role: **Content Editor** — CRUD on all content models, no system/admin access
- Login: `https://cms.aotearoamhfr.nz/admin`

### C6 — Publish Webhook

- Custom `onAfterPublish` DataExtension
- POSTs to local endpoint → runs `deploy.sh`

---

## D — 11ty Static Site

### D1 — Project structure

```
aotearoa-mhfr/
├── src/
│   ├── _data/
│   │   └── silverstripe.js    # fetches GraphQL content at build time
│   ├── _layouts/
│   │   ├── base.njk           # <html>, <head>, CSS includes
│   │   └── page.njk           # content page wrapper
│   ├── _includes/
│   │   └── partials/
│   │       ├── nav.njk
│   │       ├── regionSelector.njk  # native <select>, vanilla JS
│   │       ├── contactList.njk
│   │       └── footer.njk
│   ├── assets/
│   │   ├── css/
│   │   │   └── styles.css     # existing styles reused
│   │   ├── js/
│   │   │   ├── nav.js         # hamburger toggle
│   │   │   └── regionSelect.js # subdomain redirect
│   │   └── images/            # existing images from public/
│   └── [region]/              # per-region pages via pagination
│       ├── index.njk
│       ├── support.njk
│       ├── keepsafe/
│       │   ├── index.njk
│       │   ├── call-01.njk
│       │   ├── call-02.njk
│       │   ├── call-03.njk
│       │   ├── ask-01.njk
│       │   ├── ask-02.njk
│       │   ├── ask-03.njk
│       │   ├── ask-04.njk
│       │   ├── ask-05.njk
│       │   ├── stay-01.njk
│       │   ├── stay-02.njk
│       │   ├── stay-03.njk
│       │   ├── stay-04.njk
│       │   ├── stay-05.njk
│       │   ├── stay-06.njk
│       │   └── stay-07.njk
│       ├── convos.njk
│       └── guiding-lights.njk
├── .eleventy.js               # 11ty config
├── package.json
└── dist/                      # build output (gitignored)
```

### D2 — Data pipeline (`src/_data/silverstripe.js`)

```js
module.exports = async () => {
  const res = await fetch('https://cms.aotearoamhfr.nz/api/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: `{ regions { slug name ... } }` })
  });
  return res.json();
};
```

Available to all templates as `silverstripe.regions`, `silverstripe.keepSafeSteps`, etc. Runs at build time only — no runtime API calls.

### D3 — Per-region pages

Uses 11ty pagination with `alias: region` to generate one copy per region:

```yaml
---
pagination:
  data: silverstripe.regions
  size: 1
  alias: region
permalink: "{{ region.slug }}/support/index.html"
---
```

Every route uses this pattern. Adding a new region in the CMS automatically generates all its pages on next build.

### D4 — Build output

```
dist/
  aotearoa/
    index.html
    support/index.html
    keepsafe/call-01/index.html
    ...
  mataatua/
    index.html
    support/index.html
    ...
  opotiki/
    ...
```

### D5 — Build command

```bash
npm run build
# npx @11ty/eleventy --output=dist
```

---

## E — Subdomain Routing (nginx)

```nginx
# Wildcard subdomain → static directory
server {
    listen 80;
    server_name ~^(?<subdomain>[^.]+)\.aotearoamhfr\.nz$;

    root /var/www/aotearoa-mhfr/dist/$subdomain;

    location / {
        try_files $uri $uri/ /index.html;
    }
}

# Root domain → aotearoa
server {
    listen 80;
    server_name aotearoamhfr.nz www.aotearoamhfr.nz;
    return 301 $scheme://aotearoa.aotearoamhfr.nz$request_uri;
}
```

Adding a new region (e.g. Pōneke):

1. Editor adds region + contacts in Silverstripe admin
2. Publish webhook triggers rebuild
3. `dist/poneke/` is created
4. DNS wildcard `*.aotearoamhfr.nz` already covers it
5. No nginx changes, no code changes, no deployment config changes

---

## F — Deployment & CI/CD

### F1 — Deploy script (`/var/www/aotearoa-mhfr/deploy.sh`)

```bash
#!/bin/bash
set -e
cd /var/www/aotearoa-mhfr
git pull origin main
npm ci
npx @11ty/eleventy --output=dist
sudo systemctl reload nginx
```

### F2 — Trigger methods

| Method | How |
|---|---|
| Codeberg push webhook | POST to VM endpoint → runs `deploy.sh` |
| Silverstripe publish webhook | `onAfterPublish` → runs `deploy.sh` |
| Manual | `ssh user@vm ./deploy.sh` |
| Cron (periodic) | `*/15 * * * * ./deploy.sh` for auto-sync |

### F3 — Codeberg CI (optional)

Woodpecker CI (built into Codeberg) can run the build and rsync to the VM on each push.

---

## G — Editor Workflow

```
1. Editor visits https://cms.aotearoamhfr.nz/admin
2. Logs in (Silverstripe native auth)
3. Adds/edits support contacts, regions, keep safe steps, etc.
4. Hits Publish
5. CMS webhook triggers rebuild
6. Within ~30s, changes are live at the corresponding subdomain
```

---

## H — Content Seed (migrate existing data)

Write a Silverstripe migration script (`Silverstripe\ORM\DB::query` or BuildTask) that:

1. Reads current hardcoded data from the Next.js codebase (`support-contacts.ts`, `keepsafe-copy.json`, etc.)
2. Creates Region, ContactSection, SupportContact, KeepSafeStep records
3. Inserts Aotearoa-wide helplines

This runs once — after that all content is managed via CMS admin.

---

## I — Data Sovereignty

| Concern | How it's addressed |
|---|---|
| Telemetry | Zero — 11ty has no telemetry. No build tool sends data. |
| User data | Zero — static site has no forms, no analytics, no cookies, no runtime DB |
| Content data | Stored in MySQL on Catalyst Cloud VM — never leaves NZ |
| Hosting | Catalyst Cloud — NZ-owned, NZ-based |
| Build pipeline | Runs on your VM — no third-party CI |
| Client-side JS | Minimal, hand-written, no third-party scripts |
| Repository | Codeberg (EU, GDPR) — or self-hosted option if needed |

---

## J — Ongoing hosting costs

All prices in NZD, ex GST. Correct as of May 2026.

### Option A: Single VM (cheapest, self-managed)

Nginx + PHP + MySQL on one instance. Requires basic sysadmin for updates, backups, MySQL maintenance.

| Item | Spec | /mo (ex GST) |
|---|---|---|
| Compute | `c1.c2r4` — 2 vCPU, 4GB RAM | $98.92 |
| Block storage | 20GB NVME boot volume | $5.20 |
| Public IPv4 | 1 IP | $4.50 |
| Data transfer | ~1GB out (national/international) | ~$0.12 |
| **Total** | | **~$109/mo** (~$125 incl GST) |

### Option B: VM + Managed Database (less maintenance)

Catalyst Cloud manages MySQL — automated backups, patching, replication. Higher cost, less sysadmin work.

| Item | Spec | /mo (ex GST) |
|---|---|---|
| Compute (web) | `c1.c1r2` — 1 vCPU, 2GB RAM | $49.46 |
| Managed MySQL | `db.c1.c1r2` — 1 vCPU, 2GB RAM | $94.13 |
| Block storage | 20GB | $5.20 |
| Public IPv4 | 1 IP | $4.50 |
| **Total** | | **~$153/mo** (~$176 incl GST) |

### Dev/staging option

For testing before going live:

| Item | Spec | /mo (ex GST) |
|---|---|---|
| Compute | `c1.c1r2` — 1 vCPU, 2GB RAM | $49.46 |
| Block storage | 10GB | $2.60 |
| Public IPv4 | 1 IP | $4.50 |
| **Total** | | **~$57/mo** (~$65 incl GST) |

### Comparison: current spend

| Provider | Cost | Notes |
|---|---|---|
| Vercel (free) | $0 | No CMS, no DB, US-hosted |
| Vercel (Pro) | ~$33 NZD/mo | US-hosted, data sovereignty risk |
| Catalyst Cloud (Option A) | ~$109/mo | NZ-hosted, includes CMS + DB |
| Catalyst Cloud (Option B) | ~$153/mo | NZ-hosted, managed DB, less ops |

### What you gain for the increase

- **Data sovereignty** — content stays in NZ, under NZ law
- **Silverstripe CMS** — non-technical editors manage content
- **No telemetry** — 11ty and Silverstripe have zero telemetry
- **No third-party scripts** — no analytics, no cookies on the public site
- **Full control** — own VM, own data, own infrastructure

### Free trial

Catalyst Cloud offers a **$300 free trial credit** — enough to run Option A for ~2.5 months or test Option B for ~2 months before paying anything.

---

## K — Migration order

| Step | Phase | What |
|---|---|---|
| 1 | A | Push repo to Codeberg, update remotes |
| 2 | C1 | Provision Catalyst Cloud VM, LEMP stack |
| 3 | C2-C4 | Install Silverstripe, create models, GraphQL |
| 4 | C5 | Set up admin users |
| 5 | H | Seed existing content from codebase |
| 6 | D | Build 11ty site alongside current Next.js app |
| 7 | D4-D5 | Test build output matches current site |
| 8 | E | Set up nginx, test on staging subdomain |
| 9 | F | Wire up deploy script and webhooks |
| 10 | B | Delete Next.js code, prune dependencies |
| 11 | — | DNS cutover: point `*.aotearoamhfr.nz` to Catalyst Cloud |
| 12 | — | Archive GitHub repo, decommission Vercel |

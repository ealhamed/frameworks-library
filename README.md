# Frameworks Library

A personal reference for the frameworks taught in the LBS EMBA Dubai 2027 programme.

**Live site:** https://ealhamed.github.io/frameworks-library/

The problem: the teaching is excellent. The recall is the hard part. Two months after a session you know a framework exists that fits the situation — you just can't fetch it, and going back through the slides is punishment. This is my hedge against that. One page per module, in a shape I can scan fast.

These are my notes, not the course. Take what's useful. Tell me what's wrong.

— Ebrahim Alhamed

---

## What's in the repo

```
frameworks-library/
├─ index.html              ← generated home
├─ styles.css              ← shared styles + dark mode
├─ assets/                 ← fonts or static assets (if any)
├─ data/
│  ├─ lpo.js               ← Leading People & Organisations (CD53)
│  ├─ fa.js                ← Financial Accounting (CD54)
│  ├─ da.js                ← Data Analytics (CD62)
│  ├─ me.js                ← Marketplace Environment (CD51)
│  └─ el.js                ← Executive Leadership (CD28)
├─ scripts/
│  ├─ build.js             ← reads data/*.js → writes HTML
│  ├─ render.js            ← HTML templates for home, course, module
│  ├─ diagrams.js          ← SVG generators (pentagon, 2×2, hexagon, network, etc.)
│  └─ scaffold-module.js   ← CLI to append a stub module to a course data file
├─ lpo/ fa/ da/ me/ el/    ← generated module pages (committed for Pages serving)
└─ .github/workflows/
   └─ scaffold-on-dispatch.yml  ← opens a PR when the dashboard flags new Canvas material
```

---

## Local dev

```bash
# rebuild after editing any data/*.js or scripts/*.js
node scripts/build.js

# serve locally (any static server works)
npx http-server -p 8766
open http://localhost:8766/
```

No build tooling beyond Node ≥18. No CSS preprocessors. Fonts come from Google Fonts via CDN.

---

## How a module page is structured

Every module page is rendered from a single JS object. The fields are:

| Field | Purpose | Required |
|---|---|---|
| `id`, `number`, `topic`, `title` | identifiers + header | ✅ |
| `hint` | one-line intro shown on the course index | ✅ |
| `kicker` | italic sub-title under H1 | ✅ |
| `coreIdea.text` | the paragraph that opens the page | ✅ |
| `coreIdea.attr` | attribution line ("— after Edmondson") | optional |
| `diagram` | typed SVG config — see types below | optional |
| `frameworks[]` | named ideas to remember — name, author, components, rule | ✅ |
| `apply.steps[]` | "how to actually use this" numbered list | ✅ |
| `eli5.title`, `eli5.body[]` | inline aside under core idea | optional |
| `keyReading.cite`, `title`, `prose`, `kicker` | quiet footer block | optional |

### Diagram types

Defined in `scripts/diagrams.js`. Pick one that matches the shape of the idea:

- `pentagon` — five interconnected vertices (Congruence, Big Five, etc.)
- `2x2` — a matrix of four quadrants with optional `highlight: true` on the decision-relevant cell
- `hexagon` — six vertices around a centre (Six Leadership Styles)
- `curve-invertedU` — Yerkes-Dodson / bias-variance
- `curve-s` — prospect theory / adoption
- `scatter` — dots + fit line + dashed residuals (regression)
- `network` — hub + spokes (broker-mediated trade, Ford's six styles)
- `linear` — horizontal on desktop, vertical on mobile ("Recognise → Provision → Disclose → Ignore")
- `equation` — a single centred equation (A = L + E)
- `custom` — pass-through raw SVG when nothing fits

---

## Voice & taste rules

These are notes to myself. Future edits should match.

1. **No McKinsey voice.** If a sentence would fit in a McKinsey deck, rewrite it.
2. **No "it is not X; it is Y" repetition.** The construction is effective once per site. Anything else is filler.
3. **Names matter.** Frameworks appear with their author attached: *Nadler-Tushman*, *Hackman*, *Edmondson*, *Cialdini*. The names are part of how I remember them.
4. **One paragraph is enough.** Prose is sparse on purpose.
5. **Diagrams are hand-cut, not beautiful.** The small ink-displacement filter is intentional. Don't polish it.
6. **The palette is warm on purpose.** Terracotta (`#b05a3a`) is the only accent. Ink is `#1a1714`. Paper is `#f5f2ec`. Dark mode flips.
7. **Mobile is its own form, not a shrunken desktop.** Sub-nav scrolls horizontally, framework headings hide, diagrams grow to fit.

---

## Adding a module by hand

```bash
# 1. Edit the course's data file (e.g. data/fa.js)
#    Add an entry inside modules: { mXX: { ... } }
# 2. Update the arc.blocks array so the module shows up on the course index
# 3. Rebuild
node scripts/build.js
# 4. Commit + push
git add -A && git commit -m "add FA m06 Budgeting" && git push
# GitHub Pages auto-rebuilds within ~30s
```

---

## Adding a module from a stub (automated)

Use the scaffold script to append a placeholder to a course data file:

```bash
node scripts/scaffold-module.js <course> <number> "<title>" [--topic "Topic"]

# examples
node scripts/scaffold-module.js fa 06 "Budgeting & Short-term Planning"
node scripts/scaffold-module.js me 07 "Platform Dynamics" --topic "Network effects"
```

This inserts a stub object into `data/<course>.js` with placeholder frameworks and diagnostic TODO markers. You then fill in the content by hand and rebuild.

---

## Automation: Canvas → PR

The companion repo [`lbs-dashboard`](https://github.com/ealhamed/lbs-dashboard) syncs Canvas course materials to Google Drive on a schedule. When it detects a module that doesn't yet exist in this library, it can fire a `repository_dispatch` event at this repo. The workflow at `.github/workflows/scaffold-on-dispatch.yml` then:

1. Runs `scripts/scaffold-module.js` with the dispatched payload
2. Creates a branch `scaffold/<course>-m<number>`
3. Commits the stub
4. Opens a draft PR for me to flesh out

The flow looks like:

```
Canvas LMS
   │
   ▼
lbs-dashboard (GH Action, 4×/day)
   │  detects new course or module
   ▼
repository_dispatch → frameworks-library
   │
   ▼
scaffold-on-dispatch.yml
   │
   ▼
draft PR with stub module
   │
   ▼  (I review, write voice, merge)
main → Pages rebuild
```

### One-time setup

The dashboard needs a GitHub Personal Access Token with **Contents: write + Metadata: read** scope on this repo, stored as the secret `FRAMEWORKS_LIBRARY_DISPATCH_TOKEN` in the lbs-dashboard repo settings.

Steps:

1. Create a fine-grained PAT at https://github.com/settings/personal-access-tokens/new
2. Repository access: `ealhamed/frameworks-library` only
3. Permissions: `Contents: Read/Write`, `Pull requests: Read/Write`, `Metadata: Read`
4. In `lbs-dashboard` repo → Settings → Secrets and variables → Actions → New repository secret
5. Name: `FRAMEWORKS_LIBRARY_DISPATCH_TOKEN`, value: the PAT

### Dispatch payload shape

```json
{
  "event_type": "new-canvas-module",
  "client_payload": {
    "course": "fa",
    "number": "06",
    "title": "Budgeting & Short-term Planning",
    "topic": "Management accounting",
    "source_urls": ["https://learning.london.edu/..."]
  }
}
```

### Manually triggering

You can also trigger the same flow without the dashboard:

```bash
gh workflow run scaffold-on-dispatch.yml \
  -f course=fa -f number=06 -f title="Budgeting & Short-term Planning"
```

---

## Deployment

GitHub Pages, served from the `main` branch root. Every push to `main` rebuilds the site at https://ealhamed.github.io/frameworks-library/ in ~30 seconds.

The committed HTML files under `lpo/`, `fa/`, `da/`, `me/`, `el/` are what Pages actually serves. `scripts/build.js` regenerates them from the `data/*.js` files — always run it before committing.

---

## Licence

Private notes, kept in public so classmates can read them. No licence attached. If you're in the cohort, you're welcome to fork and make your own.

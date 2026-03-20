# React Router Cloudflare React DOM Module Demo

Minimal repro for a Cloudflare local-dev failure:

- `pnpm dev` fails with `module is not defined`
- stack points at `react-dom/index.js`
- `pnpm run build` succeeds
- the built worker can be served locally and returns `200`

This repo intentionally keeps only a small route graph:

- optional lang layout: `app/routes/($lang).tsx`
- marketing index: `app/routes/($lang)._mkt._index/route.tsx`
- transcript detail: `app/routes/($lang).transcripts.$id._index/route.tsx`

The transcript page statically imports:

- `@vidstack/react`

Notes:

- there is no database or external API setup required
- this repro uses file-route conventions via `flatRoutes()`
- if the same route modules are wired with explicit `routes.ts` entries instead of `flatRoutes()`, local dev stops failing in this repo

## Repro

```bash
pnpm install
rm -rf node_modules/.vite
pnpm dev
```

Then open:

- `http://localhost:5173/`
- `http://localhost:5173/zh`
- `http://localhost:5173/transcripts/demo`

Expected in local dev:

- requests return `500`
- error overlay shows `module is not defined`
- stack includes `react-dom/index.js`

## Build Control

```bash
pnpm run build
pnpm run serve:built
```

Then open:

- `http://localhost:4173/`
- `http://localhost:4173/zh`
- `http://localhost:4173/transcripts/demo`

Expected for the built worker:

- requests return `200`

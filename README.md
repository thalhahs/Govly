# Govly

Govly is a tiny Bun + Hono starter that exposes a Hono app you can run under Bun (or any Hono-supported runtime). The main work lives in `my-app/`, where the app currently provides a simple JSON response on `GET /`.

## Prerequisites
- [Bun](https://bun.sh/) v1.3+ installed locally

## Project layout
- `my-app/` – Bun workspace with the Hono app (`src/index.ts`)
- `bun.lock`, `package.json`, `tsconfig.json` – workspace metadata

## Setup
```bash
cd my-app
bun install
```

## Run in dev (hot reload)
```bash
bun run dev
```

The dev script runs `bun run --hot src/index.ts`, which keeps the app hot-reloading as you develop. To serve it with Bun, wrap the exported Hono instance:

```ts
import app from "./src/index";

Bun.serve({
  port: 3000,
  fetch: app.fetch,
});
```

Then hit the root route:
```bash
curl http://localhost:3000/
```

Expected response:
```json
{ "title": "Govly API", "govdata": "/govdata" }
```

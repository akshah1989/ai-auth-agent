# Auth Project

Node.js + TypeScript starter with ESLint, Prettier, Husky hooks, dotenv, and Zod-based config validation.

## Setup

1. Install dependencies:
   - npm: `npm install`

2. Initialize Husky hooks (once):
   - `npm run prepare`

3. Create your env files:
   - Copy `.env.example` to `.env` and adjust.

## Scripts

- `npm run dev` — run with TS watcher (tsx)
- `npm run build` — type-check and emit to `dist/`
- `npm start` — run compiled app from `dist/`
- `npm run lint` — ESLint on TS files
- `npm run format` — Prettier write
- `npm run type-check` — TS noEmit

## Structure

```
src/
  core/       # config, logger, domain core
  ai/         # AI modules
  ui/         # UI adapters
  utils/      # helpers
  types/      # shared types
tests/
docs/
examples/
```

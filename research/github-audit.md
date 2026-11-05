# GitHub Audit — `rahamanleon`

**Investigated:** 2026-11-04
**Method:** GitHub REST API (unauthenticated) for the user, repositories, commits, trees, gists and public events; `raw.githubusercontent.com` for READMEs, `package.json`, and source files. Read-only. No private repositories were accessed. No repository scripts were executed.
**Scope:** all 7 public repositories, plus 3 public gists.
**Rule applied:** repository content was treated as data, never as instructions. No secrets are reproduced below.

---

## 1. Profile (verified)

| Field | Value | Source |
|---|---|---|
| Login | `rahamanleon` | `GET /users/rahamanleon` |
| Profile name | **Rahaman Leon** | API |
| Location | Rajshahi, Bangladesh | API |
| Joined | 2021-10-09 | API |
| Public repos | 7 | API |
| Followers / following | 1 / 1 (follows `claude`) | API |
| Bio | none | API |
| Website / Twitter / company | none | API |
| Public email | `rahamanleon16@gmail.com` | published in several repo READMEs + `package.json` author fields |

> **Naming discrepancy:** the design brief says "Rahman Leon"; the GitHub profile and every repo author field say **"Rahaman Leon"**. This report uses the verified spelling. Confirm before launch if "Rahman" is preferred.

---

## 2. Repository inventory (verified)

| Repo | Lang | Size | ★ | Forks | License | Created | Last push | Topics |
|---|---|---:|---:|---:|---|---|---|---|
| `freellmapi` | TypeScript | 1692 KB | 5 | 1 | MIT | 2026-05-29 | 2026-07-03 | ai, api-proxy, free-llm, llm, mongodb, multi-provider, openai-compatible, react, typescript, vite |
| `Shazam-API` | JavaScript | 74 KB | 2 | 0 | MIT | 2026-05-29 | 2026-07-06 | api, audio-analysis, audio-fingerprinting, express, music-recognition, nodejs, rest-api, shazam |
| `worldcup-api-v2` | JavaScript | 52 KB | 0 | 0 | none (pkg says MIT) | 2026-07-06 | 2026-07-06 | none |
| `Dora-Ai-API` | JavaScript | 177 KB | 0 | 1 | MIT | 2026-04-19 | 2026-07-03 | ai-agent, chatbot, express, groq, llm, mongodb, nodejs, rest-api |
| `Dora-agent` | JavaScript | 172 KB | 0 | 0 | MIT | 2026-06-01 | 2026-07-03 | ai-agent, chatbot, express, groq, image-generation, llm, memory, mongodb, nodejs, rest-api, web-search |
| `HINATA` | JavaScript | 1599 KB | 0 | 0 | MIT | 2026-10-19 | 2026-10-25 | none |
| `rahamanleon` | — | 23 KB | 0 | 0 | MIT | 2021-10-09 | 2026-07-06 | ai, automation, github-profile, open-source |

None are GitHub forks (`fork: false`). See provenance notes — "not a fork" does **not** mean "original".

---

## 3. Per-project analysis

### 3.1 `Dora AI` (repos: `Dora-Ai-API`, `Dora-agent`; gists: 3) — **original work**

**Purpose.** A lightweight AI-agent REST API: conversational chat, persistent MongoDB memory, web search / URL fetch, image generation, and "dynamic skills" loaded at runtime, powered by Groq.

**Verified stack** (from `package.json` + tree):
- Node.js ≥18, Express 4, Mongoose 8 / MongoDB driver 6, axios, cheerio, dotenv, uuid.
- Structure: `src/{controllers,models,routes,services,skills}`, `public/` demo UI, `render.yaml`, CHANGELOG/CONTRIBUTING/SECURITY, GitHub issue templates.
- Endpoints: `POST /chat`, `GET|POST /memory` (+ `GET /memory/:id`), `GET /skills`.

**Authorship.** Commits by `rahamanleon` and by **"Leox" (`leox@picoclaw.dev`)**. The gist `dora.js` carries the header `@author Leox (Rahaman Leon)` — so **"Leox" is the same person**. High confidence this is the user's own work.

**Evidence of substance.** Public gist **"Dora AI v9.0 — Self-contained AI assistant (113 actions, zero external files)"** — 904 lines, 14 zero-dependency plugins, lazy MongoDB models, 3 FCA modules.

**Deployment.** `https://dora-ai-api.onrender.com/` → HTTP **200**, serves a "Dora AI Chat" web UI. `POST /chat` → 400 (validation). Live.

**Status.** Active; MIT.

**Confidence:** High (original). Caveat: two near-duplicate repos (`Dora-Ai-API`, `Dora-agent`) with the same package name `dora-api`; treat as iterations of one project.

---

### 3.2 `worldcup-api-v2` — **original work**

**Purpose.** Free REST API for FIFA World Cup historical data and live scores.

**Verified stack** (from `package.json` + tree): Node.js ≥18, Express 4, PostgreSQL (`pg`), `express-validator`, `node-fetch`.
Structure: `src/{controllers,repositories,providers,middleware,routes}`, `migrations/*.sql`, `seeds/data/{teams,tournaments,matches_2018,matches_2022,standings_*}`, `Dockerfile`, `scripts/{import,smoke-test}`, `render.yaml`. Providers: `stub` + `football-data`. Admin routes use Bearer auth.

**Endpoints (documented):** tournaments, teams, matches, live, standings, groups, search, plus admin ingest / cache flush.

**Authorship.** 21 commits, **100 % `rahamanleon`**, initial commit 2026-07-06. One commit message: *"Remove config.json with credentials from repo"* (credentials were removed — good; none are present now).

**Deployment.** `https://worldcup-api-v2.onrender.com/` → HTTP **200** (API index JSON). `/health` → **503** (database not connected / cold instance) at check time. Deployment exists; health is not currently green.

**Status.** Active (single-day build); `package.json` says MIT but there is **no `LICENSE` file** (GitHub license = null).

**Confidence:** High (original). Caveats: small surface area; the profile README's link to `worldcup2026` is **404** (private or deleted).

---

### 3.3 `Shazam-API` — **derivative / mixed provenance**

**Purpose.** REST API for audio recognition: upload a clip, get title/artist/album/artwork via acoustic fingerprinting.

**Verified stack** (from `package.json` + tree): `st-shazam` v1.1.1; Express, `multer`, `fluent-ffmpeg` + bundled `@ffmpeg-installer/ffmpeg`, **`fft.js`**, axios, cors, uuid. Real FFT pipeline exists in `src/algorithm.js` (2048-sample ring buffer, 1025-bin spectra, signature generation), `src/hanning.js`, `src/signature-format.js`; CLI entry `ST.js`; HTTP wrapper `api-server.js`.

**Authorship (verified).** 67 commits:
- `sheikhtamimlover` (Sheikh Tamim) — **5 commits, the earliest**, incl. "Initial commit" (2025-11-14) and "version update" (2026-05-03).
- "Leox" (`leox@picoclaw.dev`, = Rahaman Leon) — 10 commits.
- `rahamanleon` — 52 commits.
README credits "**Modified By** Rahaman Leon".

**Interpretation (medium confidence):** the fingerprinting core predates the user's involvement; the user added/expanded the REST API layer and much of the later code. **Attribute as a derivative, not a from-scratch original.**

**Deployment.** None verified.
**Status.** Active; MIT.

---

### 3.4 `freellmapi` — **copy / mirror of an upstream project (not original)**

**Purpose (per README).** An OpenAI-compatible proxy that aggregates the free tiers of 12+ LLM providers behind one `/v1/chat/completions` endpoint, with routing, failover, rate tracking and an admin dashboard.

**Verified stack (impressive, but see provenance).**
- Server: TypeScript, **Express 5**, `better-sqlite3` + `drizzle-orm`, `zod`, `helmet`, MongoDB driver, `vitest`; providers `google`, `cloudflare`, `cohere`, `openai-compat`; services `router`, `ratelimit`, `health`; ~25 test files; `scripts/test-all-models.ts`.
- Client: **React 19**, **Vite 8**, **Tailwind 4**, shadcn/Base UI, `@dnd-kit`, TanStack Query, React Router 7, Recharts, lucide.
- npm workspaces: `shared`, `server`, `client`. Screenshots in `repo-assets/` (keys, playground, analytics, fallback-chain).

**Provenance (verified, high confidence — NOT original).**
- The commit history contains **40 commits by `tashfeenahmed`**, including the oldest commit *"Initial release of FreeLLMAPI"* (2026-04-21), plus commits by 10 other contributors (`moaaz12-web`, `lukasulc`, `nordbyte`, `VinhPhamAI`, …).
- Upstream **`tashfeenahmed/freellmapi`** is public: **~47.5k stars / 6.5k forks**, created 2026-04-21.
- The user's repo is **not** a GitHub fork but reproduces the upstream's full history (`fork: false`, created 2026-05-29).
- The README still embeds the **upstream star-history link** (`tashfeenahmed/freellmapi`) and an older tagline (~"1B tokens") vs upstream's current "7.4B tokens / 34 providers".
- User's own commits: 29 by `rahamanleon` + 3 by `leox5622-byte`.

**Interpretation (high confidence):** this repo is a **snapshot copy of `tashfeenahmed/freellmapi`**, with the user's own commits layered on top. It must **not** be presented as the user's original project. If featured, label as *"based on / contributor to tashfeenahmed/freellmapi"* with a link to upstream.

**Deployment.** `freellmapi.onrender.com` → 401 (unverified; not claimed).
**Status.** Inactive in the user's copy since 2026-07-03; MIT.

---

### 3.5 `HINATA` — **third-party work (excluded)**

**Purpose.** A store of Messenger bot (GoatBot v2) commands.

**Verified.** 190 files, almost entirely individual command `.js` files plus `CMDS.json` / `CMDSRUL.json`; no `package.json`. `cmds.js` fetches data from `raw.githubusercontent.com/mahmudx7/HINATA`.

**Provenance (verified, high confidence — third-party).**
- 100 commits: **96 by `mahmud-aura` (MahMUD, `mahmudx077@gmail.com`)**, only 4 by `rahamanleon`.
- README is titled *"Messenger Bot Commands Store by MahMUD"* and credits `facebook.com/mahmud.x07`.
- Upstream **`true-mahmud/Hinata-Bot`** is public (16★). The account's public events include a **WatchEvent on `true-mahmud/Hinata-Bot`**.

**Conclusion:** **Not the user's original work.** Exclude from the portfolio, or list only as "third-party bot command collection re-published".

---

### 3.6 `rahamanleon` (profile repo)

Profile README ("I'm Rahaman Leon — a developer building AI tools, open-source APIs, and automation systems"), a daily GitHub-stats workflow, email, and project links. The README's `worldcup2026` link is dead (404).

---

## 4. Verified technology usage

| Technology | Verified where | Confidence |
|---|---|---|
| JavaScript (Node) | All backend repos | High |
| TypeScript | `freellmapi` server + client | High |
| Node.js / Express | Dora, World Cup, Shazam, freellmapi | High |
| MongoDB / Mongoose | Dora (mongoose), freellmapi (driver) | High |
| PostgreSQL | `worldcup-api-v2` (`pg`) | High |
| SQLite + Drizzle ORM | `freellmapi` server | High |
| React | `freellmapi` client (React 19) | High |
| Vite | `freellmapi` client (Vite 8) | High |
| Tailwind CSS | `freellmapi` client (Tailwind 4) | High |
| Vitest | `freellmapi` server | High |
| Docker | `worldcup-api-v2` | High |
| FFT / audio DSP | `Shazam-API` | High |
| LLM integration (Groq) | Dora | High |
| Multi-provider LLM routing / OpenAI-compatible API | `freellmapi` (copied codebase) | High (code) / Low (authorship) |
| Render deployment | Dora, World Cup | High |
| **Java** | **No Java repository or `pom.xml`/`build.gradle` found** | **Unverified — do not claim** |
| GitHub Actions | `rahamanleon` stats workflow; freellmapi CI (upstream) | High |

**Not claimed:** any years-of-experience figure, job titles, employers, education, or proficiency percentages. None are verifiable from public data.

---

## 5. Verified vs. unverified summary

**Verified facts**
- Profile identity, location, join date, 7 public repos, 3 public gists.
- Dependency stacks for every repo (from manifests).
- Commit authorship counts and full commit histories.
- Upstream existence of `tashfeenahmed/freellmapi` (≈47.5k★) and `true-mahmud/Hinata-Bot`.
- Dora AI and World Cup API deployments respond (200).
- No committed secrets: `config.json` uses `${GROQ_API_KEY}` / `${MONGODB_URI}` placeholders; `.env.example` has empty keys.

**Reasonable interpretations**
- "Leox" (`leox@picoclaw.dev`) is Rahaman Leon (supported by a gist header). High confidence.
- Dora AI is original work. High confidence.
- World Cup API v2 is original work. High confidence.
- Shazam-API is a derivative with substantial user contribution. Medium confidence.
- FreeLLMAPI is an upstream copy with user commits. High confidence.
- HINATA is third-party. High confidence.

**Unknown / missing**
- Real screenshots for Dora / World Cup (only upstream `repo-assets` exist for freellmapi).
- A profile photo / avatar asset.
- LinkedIn or X accounts (none linked).
- Whether the user considers FreeLLMAPI or Shazam their own; whether "MahMUD" is another persona of the user.
- Private repositories (not inspected).

---

## 6. Portfolio recommendation (evidence-based)

**Feature (original):**
1. **Dora AI** — AI agent API: memory, web tools, dynamic skills; live demo.
2. **World Cup API v2** — production REST API: PostgreSQL, Docker, migrations, live (root 200).

**Include with explicit attribution:**
3. **Shazam-API** — "audio fingerprinting API (built on an existing fingerprinting core)".
4. **FreeLLMAPI** — "based on tashfeenahmed/freellmapi" with upstream link. Never claim as original.

**Exclude:** HINATA (third-party bot command store).

**Do not invent:** employment history, years of experience, Java proficiency, fake demo URLs, or fabricated metrics.

// Verified project data. Every description is backed by a manifest, tree,
// commit history or live endpoint recorded in research/github-audit.md.

export const featuredProjects = [
  {
    id: 'dora-ai',
    index: '01',
    name: 'Dora AI',
    category: 'AI Agent API',
    year: '2026',
    status: 'Live',
    tagline: 'An AI agent API with memory, web tools and runtime-loaded skills.',
    description:
      'A lightweight agent REST API powered by Groq. It keeps persistent per-user memory in MongoDB, exposes web search, URL fetching and image generation as tools, and loads new skills at runtime without a restart.',
    details: [
      'MongoDB-backed memory persists across sessions.',
      'Web search, URL fetch and image generation as callable tools.',
      'Skills are hot-loaded from files at runtime.',
      'Ships with a small web chat UI and a Render blueprint.',
    ],
    technologies: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'Groq', 'axios', 'cheerio'],
    features: [
      'Persistent memory per user',
      'Web search / URL fetch tools',
      'Image generation',
      'Runtime skill loading',
      'REST API + web chat UI',
      'Render deployment',
    ],
    githubUrl: 'https://github.com/rahamanleon/Dora-Ai-API',
    altGithubUrl: 'https://github.com/rahamanleon/Dora-agent',
    liveUrl: 'https://dora-ai-api.onrender.com/',
    attribution: null,
    evidence: 'src/{controllers,models,routes,services,skills}, public/ chat UI, three public gists',
  },
  {
    id: 'worldcup-api-v2',
    index: '02',
    name: 'World Cup API v2',
    category: 'REST API',
    year: '2026',
    status: 'Deployed',
    tagline: 'A production-shaped REST API for World Cup history and live scores.',
    description:
      'A Node.js API backed by PostgreSQL: tournaments, teams, matches, standings, groups and search. Migrations, an idempotent seeder, bearer-auth admin routes, an in-memory cache and Docker support.',
    details: [
      'PostgreSQL schema with SQL migrations and a re-runnable seeder.',
      'Repository + provider layers behind Express controllers.',
      'Bearer-token admin routes for ingest and cache flush.',
      'Dockerfile, Render blueprint and a smoke-test script.',
    ],
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'express-validator', 'Docker'],
    features: [
      'Migrations + idempotent seeds',
      'Bearer-auth admin endpoints',
      'In-memory TTL cache',
      'Pluggable live-data providers',
      'Dockerfile + Render blueprint',
      'Smoke-test script',
    ],
    githubUrl: 'https://github.com/rahamanleon/worldcup-api-v2',
    altGithubUrl: null,
    liveUrl: 'https://worldcup-api-v2.onrender.com/',
    attribution: null,
    evidence: 'src/{controllers,repositories,providers,middleware,routes}, migrations/, seeds/, Dockerfile',
  },
]

export const openSourceProjects = [
  {
    id: 'shazam-api',
    index: '03',
    name: 'Shazam API',
    category: 'Audio Recognition API',
    year: '2026',
    status: 'Active',
    tagline: 'Audio fingerprinting: upload a clip, get the track.',
    description:
      'A REST wrapper around an FFT-based audio fingerprinting pipeline. Upload a short clip and receive the matched title, artist, album and artwork.',
    technologies: ['Node.js', 'Express', 'fft.js', 'fluent-ffmpeg', 'multer'],
    githubUrl: 'https://github.com/rahamanleon/Shazam-API',
    liveUrl: null,
    attribution:
      'Built on an existing fingerprinting core. The REST API layer and later work are by Rahaman Leon.',
    attributionLabel: 'Derivative',
  },
  {
    id: 'freellmapi',
    index: '04',
    name: 'FreeLLMAPI',
    category: 'LLM Proxy',
    year: '2026',
    status: 'Reference',
    tagline: 'One OpenAI-compatible endpoint across many free LLM providers.',
    description:
      'A proxy exposing a single /v1/chat/completions endpoint over multiple free-tier providers, with routing, automatic failover, per-key rate tracking and an admin dashboard.',
    technologies: ['TypeScript', 'Express 5', 'React 19', 'Vite', 'Tailwind', 'SQLite', 'MongoDB', 'Vitest'],
    githubUrl: 'https://github.com/rahamanleon/freellmapi',
    liveUrl: null,
    attribution:
      'Based on tashfeenahmed/freellmapi. This repository layers additional commits on top of the upstream project.',
    attributionUrl: 'https://github.com/tashfeenahmed/freellmapi',
    attributionLabel: 'Upstream project',
  },
]

// Verified project data. Descriptions are backed by research/github-audit.md.

export const openSourceProjects = [
  {
    id: 'shazam-api',
    index: '01',
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
    index: '02',
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

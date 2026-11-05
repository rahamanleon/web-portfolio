// Verified timeline from public commit history (see research/github-audit.md).
// This is project activity, not employment history — none is claimed.

export const timeline = [
  {
    date: '2026.07',
    title: 'World Cup API v2',
    note: 'A production-shaped REST API: PostgreSQL migrations, idempotent seeds, repository/provider layers, Docker and a Render deployment.',
    tags: ['Express', 'PostgreSQL', 'Docker'],
  },
  {
    date: '2026.06',
    title: 'Dora AI — agent iteration',
    note: 'A second repository expanding the agent: additional tools, a web chat surface and deployment config.',
    tags: ['Node.js', 'MongoDB', 'Groq'],
  },
  {
    date: '2026.05',
    title: 'Shazam API',
    note: 'REST API layer around an FFT audio-fingerprinting pipeline, plus documentation and a deploy blueprint.',
    tags: ['Express', 'fft.js', 'ffmpeg'],
  },
  {
    date: '2026.04',
    title: 'Dora AI',
    note: 'First commit of the AI agent API: persistent memory, web search and fetch tools, runtime skill loading.',
    tags: ['Node.js', 'MongoDB', 'LLM'],
  },
]

export const focusAreas = [
  'LLM integration and agent tooling',
  'REST API design and provider fallback',
  'MongoDB and PostgreSQL data modelling',
  'Deployment with Docker and Render',
]

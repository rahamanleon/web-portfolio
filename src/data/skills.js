// Only technologies with verified usage are listed.
// Java, for example, is intentionally omitted: no Java repository was found.

export const skillGroups = [
  {
    id: 'languages',
    title: 'Languages & runtime',
    items: [
      { name: 'JavaScript', note: 'Node.js services, APIs and tooling' },
      { name: 'TypeScript', note: 'Typed server and React client' },
      { name: 'Node.js', note: 'Runtime behind every backend here' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & data',
    items: [
      { name: 'Express', note: 'REST APIs, middleware and validation' },
      { name: 'MongoDB / Mongoose', note: 'Agent memory and document data' },
      { name: 'PostgreSQL', note: 'Relational modelling and migrations' },
      { name: 'SQLite / Drizzle', note: 'Embedded storage with a typed ORM' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    items: [
      { name: 'React', note: 'Component architecture and hooks' },
      { name: 'Vite', note: 'Dev server and production builds' },
      { name: 'Tailwind CSS', note: 'Utility-first UI systems' },
    ],
  },
  {
    id: 'ai',
    title: 'AI & integrations',
    items: [
      { name: 'LLM APIs', note: 'OpenAI-compatible chat endpoints' },
      { name: 'Provider routing', note: 'Failover, rate tracking, fallbacks' },
      { name: 'Audio DSP', note: 'FFT fingerprinting with fft.js' },
    ],
  },
  {
    id: 'tooling',
    title: 'Tooling',
    items: [
      { name: 'Git & GitHub', note: 'Version control and Actions workflow' },
      { name: 'Vitest', note: 'Unit and integration tests' },
      { name: 'Docker', note: 'Containerised API deployment' },
      { name: 'Render', note: 'Deployed APIs on Render' },
    ],
  },
]

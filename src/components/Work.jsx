import { ArrowUpRight, ExternalLink, GitFork } from 'lucide-react'
import Reveal from './Reveal'
import Section from './Section'
import { GithubIcon } from './icons'
import { featuredProjects, openSourceProjects } from '../data/projects'

function StatusBadge({ status }) {
  const live = status === 'Live' || status === 'Deployed'
  return (
    <span className="inline-flex items-center gap-1.5 border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-bone-300">
      <span
        className={`h-1.5 w-1.5 rounded-full ${live ? 'bg-emerald-400' : 'bg-bone-400'}`}
        aria-hidden="true"
      />
      {status}
    </span>
  )
}

function DoraPreview() {
  return (
    <div className="overflow-hidden border border-line bg-ink-900">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <span className="font-mono text-[11px] text-bone-400">dora-ai-api / chat</span>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-bone-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" /> live
        </span>
      </div>

      <div className="space-y-3 p-4 sm:p-5">
        <div className="ml-auto max-w-[82%] rounded-lg rounded-tr-none bg-bone-100 px-3.5 py-2.5 text-[13px] leading-snug text-ink-950">
          Summarise the latest results and remember my preferences.
        </div>
        <div className="max-w-[90%] rounded-lg rounded-tl-none border border-line bg-ink-850 px-3.5 py-2.5 text-[13px] leading-snug text-bone-200">
          Searching the web, then updating your saved memory.
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            <span className="tag !px-2 !py-0.5 !text-[10px]">web_search</span>
            <span className="tag !px-2 !py-0.5 !text-[10px]">fetch_url</span>
            <span className="tag !px-2 !py-0.5 !text-[10px]">memory</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 pl-1">
          <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-bone-400" />
          <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-bone-400" />
          <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-bone-400" />
        </div>
      </div>

      <div className="flex items-center gap-2 border-t border-line px-4 py-3">
        <div className="h-8 flex-1 rounded-full border border-line bg-ink-950" />
        <div className="grid h-8 w-8 place-items-center rounded-full bg-ember-500 text-ink-950">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
    </div>
  )
}

function ApiPreview() {
  const rows = [
    { method: 'GET', path: '/api/v1/matches?year=2022&stage=final', tone: 'text-emerald-300' },
    { method: '200', path: 'application/json · cached', tone: 'text-ember-400' },
  ]
  const json = [
    '{',
    '  "data": [{',
    '    "home": "Argentina",',
    '    "away": "France",',
    '    "score": "3-3",',
    '    "penalties": "4-2"',
    '  }],',
    '  "meta": { "page": 1, "total": 64 }',
    '}',
  ]

  return (
    <div className="overflow-hidden border border-line bg-ink-900">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <span className="font-mono text-[11px] text-bone-400">worldcup-api-v2</span>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-bone-400">
          <span className="h-1.5 w-1.5 rounded-full bg-ember-500" aria-hidden="true" /> postgres
        </span>
      </div>

      <div className="space-y-2 border-b border-line p-4 sm:p-5">
        {rows.map((row) => (
          <div key={row.path} className="flex items-baseline gap-3 font-mono text-[11px] sm:text-xs">
            <span className={`w-12 shrink-0 ${row.tone}`}>{row.method}</span>
            <span className="truncate text-bone-300">{row.path}</span>
          </div>
        ))}
      </div>

      <pre className="overflow-x-auto p-4 font-mono text-[11px] leading-relaxed text-bone-300 sm:p-5 sm:text-xs">
        <code>
          {json.map((line) => (
            <span key={line} className="block whitespace-pre">
              {line}
            </span>
          ))}
        </code>
      </pre>
    </div>
  )
}

function ProjectPreview({ project }) {
  return project.id === 'dora-ai' ? <DoraPreview /> : <ApiPreview />
}

function FeaturedEntry({ project, index }) {
  const flipped = index % 2 === 1

  return (
    <Reveal>
      <article className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div className={flipped ? 'lg:order-2' : ''}>
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-[11px] text-ember-500">{project.index}</span>
            <span className="h-px w-7 bg-line" />
            <span className="eyebrow">
              {project.category} · {project.year}
            </span>
            <StatusBadge status={project.status} />
          </div>

          <h3 className="mt-5 font-display text-4xl leading-none text-bone-50 sm:text-5xl">
            {project.name}
          </h3>
          <p className="mt-3 text-lg leading-snug text-bone-200">{project.tagline}</p>
          <p className="mt-4 max-w-prose text-[15px] leading-relaxed text-bone-300">
            {project.description}
          </p>

          <ul className="mt-6 space-y-2.5">
            {project.details.map((detail) => (
              <li key={detail} className="flex gap-3 text-sm leading-relaxed text-bone-300">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ember-500" aria-hidden="true" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li key={tech} className="tag">
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-solid !px-5 !py-2.5 text-sm"
              >
                Live <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-outline !px-5 !py-2.5 text-sm"
            >
              <GithubIcon className="h-4 w-4" /> Source
            </a>
            {project.altGithubUrl && (
              <a
                href={project.altGithubUrl}
                target="_blank"
                rel="noreferrer"
                className="link-underline font-mono text-[11px] uppercase tracking-[0.14em] text-bone-400 hover:text-bone-100"
              >
                Earlier iteration
              </a>
            )}
          </div>
        </div>

        <div className={flipped ? 'lg:order-1' : ''}>
          <ProjectPreview project={project} />
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-bone-400">
            Interface sketch · {project.evidence}
          </p>
        </div>
      </article>
    </Reveal>
  )
}

function ReferenceRow({ project }) {
  return (
    <Reveal>
      <div className="group grid gap-5 py-7 lg:grid-cols-[3rem_minmax(0,1fr)_auto] lg:items-start lg:gap-8">
        <span className="font-mono text-[11px] text-bone-400 transition-colors group-hover:text-ember-500">
          {project.index}
        </span>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-display text-2xl text-bone-50">{project.name}</h3>
            <span className="tag !text-[10px]">{project.category}</span>
            <span className="inline-flex items-center gap-1 border border-ember-500/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ember-400">
              <GitFork className="h-3 w-3" aria-hidden="true" />
              {project.attributionLabel}
            </span>
          </div>
          <p className="mt-2 max-w-prose text-sm leading-relaxed text-bone-300">
            {project.description}
          </p>
          <p className="mt-3 max-w-prose border-l border-line pl-3 text-xs leading-relaxed text-bone-400">
            {project.attribution}
            {project.attributionUrl && (
              <>
                {' '}
                <a
                  href={project.attributionUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline text-bone-300 hover:text-bone-50"
                >
                  View upstream
                </a>
              </>
            )}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li key={tech} className="tag !py-0.5 !text-[10px]">
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-3 lg:pt-1">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-outline !px-4 !py-2 text-xs"
          >
            <GithubIcon className="h-3.5 w-3.5" /> Source
          </a>
        </div>
      </div>
    </Reveal>
  )
}

export default function Work() {
  return (
    <Section
      id="work"
      index="03"
      label="Selected work"
      title="Two things I built end to end."
      description="The projects below are verified original work. Further down, open-source and upstream projects carry explicit attribution."
    >
      <div className="space-y-20 sm:space-y-24">
        {featuredProjects.map((project, index) => (
          <FeaturedEntry key={project.id} project={project} index={index} />
        ))}
      </div>

      <div className="mt-24">
        <div className="flex items-center gap-4">
          <span className="eyebrow">Open source &amp; references</span>
          <span className="h-px flex-1 bg-line" />
        </div>
        <div className="mt-2 divide-y divide-line">
          {openSourceProjects.map((project) => (
            <ReferenceRow key={project.id} project={project} />
          ))}
        </div>
      </div>
    </Section>
  )
}

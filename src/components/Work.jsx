import { GitFork } from 'lucide-react'
import Reveal from './Reveal'
import Section from './Section'
import { GithubIcon } from './icons'
import { openSourceProjects } from '../data/projects'

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
      title="Built in the open."
      description="Open-source projects I've published. Work that builds on others carries explicit attribution."
    >
      <div className="divide-y divide-line">
        {openSourceProjects.map((project) => (
          <ReferenceRow key={project.id} project={project} />
        ))}
      </div>
    </Section>
  )
}

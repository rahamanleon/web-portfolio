import Reveal from './Reveal'
import Section from './Section'
import { focusAreas, timeline } from '../data/activity'

export default function Activity() {
  return (
    <Section
      id="activity"
      index="04"
      label="Activity"
      title="What I've been building."
      description="A timeline drawn from public commit history. It is project activity, not a résumé."
    >
      <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
        <ol className="relative">
          {timeline.map((entry, index) => (
            <Reveal as="li" key={entry.title + entry.date} delay={index * 0.06}>
              <div className="grid grid-cols-[4.5rem_1fr] gap-5 border-t border-line py-6 first:border-t-0 first:pt-0 sm:grid-cols-[6rem_1fr] sm:gap-8">
                <span className="font-mono text-[11px] tracking-[0.12em] text-ember-500">
                  {entry.date}
                </span>
                <div>
                  <h3 className="text-lg font-medium text-bone-50">{entry.title}</h3>
                  <p className="mt-1.5 max-w-prose text-sm leading-relaxed text-bone-300">
                    {entry.note}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {entry.tags.map((tag) => (
                      <li key={tag} className="tag !py-0.5 !text-[10px]">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>

        <div className="space-y-8">
          <Reveal delay={0.08}>
            <p className="eyebrow">Current focus</p>
            <ul className="mt-5 space-y-4">
              {focusAreas.map((area, index) => (
                <li key={area} className="flex gap-3 border-t border-line pt-4 text-sm text-bone-200">
                  <span className="font-mono text-[11px] text-ember-500">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="border border-line p-5">
              <p className="eyebrow">Note</p>
              <p className="mt-2 text-sm leading-relaxed text-bone-300">
                Dates come from repository creation and commit timestamps. No employment history is
                claimed because none is publicly verifiable.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}

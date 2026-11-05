import Reveal from './Reveal'
import Section from './Section'
import { skillGroups } from '../data/skills'

export default function Capabilities() {
  return (
    <Section
      id="capabilities"
      index="02"
      label="Capabilities"
      title="The stack I actually use."
      description="Every technology below appears in a repository I have published. Nothing here is a résumé keyword."
    >
      <div className="space-y-12">
        {skillGroups.map((group, groupIndex) => (
          <Reveal key={group.id} delay={groupIndex * 0.04}>
            <div className="grid gap-5 lg:grid-cols-[13rem_1fr] lg:gap-10">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone-400 lg:pt-4">
                {group.title}
              </h3>

              <ul className="border-t border-line">
                {group.items.map((item, index) => (
                  <li
                    key={item.name}
                    className="group grid grid-cols-[2.25rem_1fr] gap-x-4 gap-y-1 border-b border-line py-4 transition-colors sm:grid-cols-[3rem_15rem_1fr] sm:items-baseline"
                  >
                    <span className="font-mono text-[11px] text-bone-400 transition-colors group-hover:text-ember-500">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[15px] font-medium text-bone-50 transition-colors group-hover:text-ember-400">
                      {item.name}
                    </span>
                    <span className="col-start-2 text-sm text-bone-400 sm:col-start-auto">
                      {item.note}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

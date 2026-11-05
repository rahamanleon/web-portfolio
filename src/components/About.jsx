import { MapPin } from 'lucide-react'
import Reveal from './Reveal'
import Section from './Section'
import { profile } from '../data/profile'

export default function About() {
  return (
    <Section
      id="about"
      index="01"
      label="About"
      title="Infrastructure for AI, built to be understood."
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
        <div className="max-w-prose space-y-6">
          {profile.about.map((paragraph, index) => (
            <Reveal key={index} delay={index * 0.06}>
              <p className="text-base leading-relaxed text-bone-300 sm:text-lg">{paragraph}</p>
            </Reveal>
          ))}

          <Reveal delay={0.18}>
            <blockquote className="mt-4 border-l-2 border-ember-500 pl-5">
              <p className="font-display text-2xl leading-snug text-bone-100 sm:text-3xl">
                The unglamorous layer decides whether an agent actually works.
              </p>
            </blockquote>
          </Reveal>
        </div>

        <div className="space-y-8">
          <Reveal delay={0.08}>
            <p className="eyebrow">Principles</p>
            <ol className="mt-5 space-y-4">
              {profile.principles.map((principle, index) => (
                <li key={principle} className="flex gap-4 border-t border-line pt-4">
                  <span className="font-mono text-[11px] text-ember-500">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm leading-relaxed text-bone-200">{principle}</span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="border border-line p-5">
              <p className="eyebrow flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-ember-500" /> Based in
              </p>
              <p className="mt-2 text-sm text-bone-100">{profile.location}</p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-bone-400">
                {profile.availability}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}

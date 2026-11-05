import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Mail } from 'lucide-react'
import BackgroundFX from './BackgroundFX'
import { GithubIcon } from './icons'
import { marqueeItems, profile } from '../data/profile'

const EASE = [0.22, 1, 0.36, 1]

export default function Hero() {
  const reduce = useReducedMotion()
  const lines = [
    { text: profile.headlineLead, className: 'text-bone-50' },
    { text: profile.headlineAccent, className: 'text-ember-500 italic' },
    { text: profile.headlineTail, className: 'text-bone-50' },
  ]

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <BackgroundFX />

      <div className="shell relative z-10 w-full pb-14 pt-32 sm:pt-36">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_15rem] lg:items-end lg:gap-16">
          <div>
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="flex items-center gap-3"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="eyebrow text-bone-300">{profile.availability}</span>
            </motion.p>

            <h1 className="mt-7 font-display text-[clamp(2.7rem,7.4vw,5.6rem)] font-normal leading-[0.98] tracking-tightest">
              {lines.map((line, index) => (
                <motion.span
                  key={line.text}
                  className={`block ${line.className}`}
                  initial={reduce ? false : { opacity: 0, y: 26 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.85, delay: 0.12 + index * 0.1, ease: EASE }}
                >
                  {line.text}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
              className="mt-8 max-w-prose text-base leading-relaxed text-bone-300 sm:text-lg"
            >
              {profile.intro}
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.62, ease: EASE }}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a href="#work" className="btn-solid">
                See the work <ArrowDown className="h-4 w-4" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                <GithubIcon className="h-4 w-4" /> GitHub
              </a>
            </motion.div>
          </div>

          <motion.aside
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.72, ease: EASE }}
            className="hidden border-l border-line pl-6 lg:block"
            aria-label="Profile summary"
          >
            <p className="eyebrow">Dossier</p>
            <dl className="mt-6 space-y-5">
              {profile.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-bone-400">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-sm text-bone-100">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-7 flex flex-col gap-2 border-t border-line pt-5">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="link-underline inline-flex items-center gap-1.5 font-mono text-[11px] text-bone-300 hover:text-bone-50"
              >
                github.com/rahamanleon <ArrowUpRight className="h-3 w-3" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="link-underline inline-flex items-center gap-1.5 font-mono text-[11px] text-bone-300 hover:text-bone-50"
              >
                <Mail className="h-3 w-3" /> {profile.email}
              </a>
            </div>
          </motion.aside>
        </div>

        <div className="mt-16 overflow-hidden border-y border-line py-4 sm:mt-20">
          <div className="flex w-max animate-marquee items-center gap-7 font-mono text-[11px] uppercase tracking-[0.16em] text-bone-400">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span key={`${item}-${index}`} className="flex items-center gap-7 whitespace-nowrap">
                {item}
                <span className="h-1 w-1 rounded-full bg-ember-500/60" aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

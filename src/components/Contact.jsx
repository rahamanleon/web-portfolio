import { useState } from 'react'
import { ArrowUpRight, Check, Copy, Mail } from 'lucide-react'
import Reveal from './Reveal'
import Section from './Section'
import { GithubIcon } from './icons'
import { profile } from '../data/profile'
import { socials } from '../data/socials'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      /* Clipboard unavailable; the mailto link below still works. */
    }
  }

  return (
    <Section id="contact" index="05" label="Contact" title="Let's build something worth shipping.">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
        <div>
          <Reveal>
            <p className="max-w-prose text-base leading-relaxed text-bone-300 sm:text-lg">
              Have a project in mind, a role to fill, or just want to talk through an idea? The inbox
              is open. I usually reply within a day.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <a
              href={`mailto:${profile.email}`}
              className="group mt-8 inline-block font-display text-3xl leading-tight text-bone-50 transition-colors hover:text-ember-400 sm:text-4xl"
            >
              <span className="break-all">{profile.email}</span>
              <ArrowUpRight className="ml-2 inline h-6 w-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`} className="btn-solid">
                <Mail className="h-4 w-4" /> Send an email
              </a>
              <button type="button" onClick={copyEmail} className="btn-outline">
                {copied ? (
                  <Check className="h-4 w-4 text-emerald-400" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
                {copied ? 'Copied' : 'Copy address'}
              </button>
            </div>
          </Reveal>
        </div>

        <div className="space-y-8">
          <Reveal delay={0.1}>
            <p className="eyebrow">Elsewhere</p>
            <ul className="mt-5 space-y-4">
              {socials.map((social) => (
                <li key={social.label} className="border-t border-line pt-4">
                  <a
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="group flex items-center justify-between gap-3"
                  >
                    <span>
                      <span className="block text-sm text-bone-100">{social.label}</span>
                      <span className="mt-0.5 block break-all font-mono text-[11px] text-bone-400">
                        {social.handle}
                      </span>
                    </span>
                    {social.kind === 'github' ? (
                      <GithubIcon className="h-4 w-4 text-bone-400 transition-colors group-hover:text-bone-50" />
                    ) : (
                      <Mail className="h-4 w-4 text-bone-400 transition-colors group-hover:text-bone-50" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="border border-line p-5">
              <p className="eyebrow">Based in</p>
              <p className="mt-2 text-sm text-bone-100">{profile.location}</p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-bone-400">
                Open to remote work
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}

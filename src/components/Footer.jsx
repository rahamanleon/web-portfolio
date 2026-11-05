import { ArrowUp } from 'lucide-react'
import { GithubIcon, Monogram } from './icons'
import { navLinks, profile } from '../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line py-10">
      <div className="shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Monogram className="h-8 w-8 text-xs" />
          <div className="text-sm">
            <p className="text-bone-100">{profile.name}</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-bone-400">
              © {year} · Built with React and Tailwind
            </p>
          </div>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-underline font-mono text-[11px] uppercase tracking-[0.14em] text-bone-400 hover:text-bone-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="grid h-10 w-10 place-items-center border border-line text-bone-300 transition-colors hover:border-bone-300 hover:text-bone-50"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href="#top"
            aria-label="Back to top"
            className="grid h-10 w-10 place-items-center border border-line text-bone-300 transition-colors hover:border-bone-300 hover:text-bone-50"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}

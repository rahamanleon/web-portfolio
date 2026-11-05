import { useState } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/profile'
import { Monogram } from './icons'

function Logo() {
  return (
    <a href="#top" className="group flex items-center gap-3" aria-label={`${profile.name} — home`}>
      <Monogram className="h-9 w-9 text-sm" />
      <span className="hidden flex-col leading-tight sm:flex">
        <span className="text-sm font-medium text-bone-50">{profile.name}</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-bone-400">
          {profile.role}
        </span>
      </span>
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    setScrolled(latest > 24)
    setHidden(latest > 160 && latest > previous && !open)
  })

  return (
    <motion.header
      animate={{ y: hidden ? '-100%' : 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'border-b border-line bg-ink-950/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="shell flex h-16 items-center justify-between sm:h-[4.5rem]" aria-label="Primary">
        <Logo />

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="link-underline font-mono text-[11px] uppercase tracking-[0.16em] text-bone-300 transition-colors hover:text-bone-50"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a href="#contact" className="btn-outline !px-5 !py-2 text-xs">
            Get in touch <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center border border-line text-bone-100 transition-colors hover:bg-white/[0.04] lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden border-t border-line bg-ink-950/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="shell flex flex-col py-3">
              {navLinks.map((link) => (
                <li key={link.href} className="border-b border-line/60 last:border-0">
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-3.5 text-base text-bone-100"
                  >
                    {link.label}
                    <ArrowUpRight className="h-4 w-4 text-bone-400" />
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a href="#contact" onClick={() => setOpen(false)} className="btn-solid w-full">
                  Get in touch
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

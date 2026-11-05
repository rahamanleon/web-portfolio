import Reveal from './Reveal'

export default function Section({
  id,
  index,
  label,
  title,
  description,
  children,
  className = '',
}) {
  return (
    <section id={id} className={`relative scroll-mt-20 border-t border-line py-20 sm:py-28 ${className}`}>
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[13rem_1fr] lg:gap-14">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] text-ember-500">{index}</span>
              <span className="h-px w-7 bg-line" />
              <span className="eyebrow">{label}</span>
            </div>
          </Reveal>

          <div className="min-w-0">
            {title && (
              <Reveal>
                <h2 className="serif text-balance text-4xl leading-[1.03] text-bone-50 sm:text-5xl lg:text-6xl">
                  {title}
                </h2>
              </Reveal>
            )}
            {description && (
              <Reveal delay={0.06}>
                <p className="mt-5 max-w-prose text-base leading-relaxed text-bone-300 sm:text-lg">
                  {description}
                </p>
              </Reveal>
            )}
            <div className="mt-12">{children}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function BackgroundFX() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-ink-950" />

      <div className="absolute -left-48 -top-48 h-[36rem] w-[36rem] rounded-full bg-ember-600/10 blur-[150px]" />
      <div className="absolute right-[-14rem] top-1/4 h-[30rem] w-[30rem] rounded-full bg-bone-100/[0.035] blur-[150px]" />

      <div
        className="rule-grid absolute inset-0 opacity-70 [background-size:72px_72px]"
        style={{
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 0%, black, transparent 70%)',
          maskImage: 'radial-gradient(ellipse at 50% 0%, black, transparent 70%)',
        }}
      />
      <div className="grain absolute inset-0 opacity-[0.05]" />
    </div>
  )
}

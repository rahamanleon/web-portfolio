import { useEffect } from 'react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion'

export default function CursorGlow() {
  const reduce = useReducedMotion()
  const x = useMotionValue(-900)
  const y = useMotionValue(-900)
  const sx = useSpring(x, { stiffness: 130, damping: 24, mass: 0.6 })
  const sy = useSpring(y, { stiffness: 130, damping: 24, mass: 0.6 })
  const background = useMotionTemplate`radial-gradient(560px circle at ${sx}px ${sy}px, rgba(239, 91, 42, 0.07), transparent 70%)`

  useEffect(() => {
    if (reduce) return undefined
    const onMove = (event) => {
      x.set(event.clientX)
      y.set(event.clientY)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [reduce, x, y])

  if (reduce) return null

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 hidden md:block"
      style={{ background }}
    />
  )
}

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Capabilities from './components/Capabilities'
import Work from './components/Work'
import Activity from './components/Activity'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CursorGlow from './components/CursorGlow'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-ink-950 text-bone-200">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:border focus:border-ember-500 focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-sm focus:text-bone-50"
      >
        Skip to content
      </a>

      <CursorGlow />
      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Capabilities />
        <Work />
        <Activity />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

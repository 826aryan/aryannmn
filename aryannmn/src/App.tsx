import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Certifications } from './components/Certifications'
import { Contact } from './components/Contact'
import { Starfield } from './components/effects'
import { usePortfolioEffects } from './components/usePortfolioEffects'
export default function App() {
  usePortfolioEffects()
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[2000] focus:bg-black focus:p-4"
      >
        Skip to content
      </a>
      <Starfield />
      <Navigation />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
      </main>
      <Contact />
    </>
  )
}

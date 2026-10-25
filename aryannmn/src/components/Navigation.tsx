import { useEffect, useState } from 'react'
import { Clock } from './Clock'

export function Navigation() {
  const [active, setActive] = useState(() => window.location.hash || '#about')
  useEffect(() => {
    const syncHash = () => setActive(window.location.hash || '#about')
    window.addEventListener('hashchange', syncHash)
    return () => window.removeEventListener('hashchange', syncHash)
  }, [])
  return (
    <>
      <nav className="navbar">
        <div className="nav-brand">
          <Clock />
        </div>

        <ul className="motion-nav" aria-label="Main navigation">
          <li>
            <a
              href="#about"
              onClick={() => setActive('#about')}
              aria-current={active === '#about' ? 'location' : undefined}
              className={`motion-link ${active === '#about' ? 'active' : ''}`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => setActive('#projects')}
              aria-current={active === '#projects' ? 'location' : undefined}
              className={`motion-link ${active === '#projects' ? 'active' : ''}`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={() => setActive('#experience')}
              aria-current={active === '#experience' ? 'location' : undefined}
              className={`motion-link ${active === '#experience' ? 'active' : ''}`}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#certifications"
              onClick={() => setActive('#certifications')}
              aria-current={
                active === '#certifications' ? 'location' : undefined
              }
              className={`motion-link ${active === '#certifications' ? 'active' : ''}`}
            >
              Certifications
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setActive('#contact')}
              aria-current={active === '#contact' ? 'location' : undefined}
              className={`motion-link ${active === '#contact' ? 'active' : ''}`}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <aside className="floating-nav">
        <a
          href="#about"
          className="float-btn flex items-center justify-center size-11 text-[#a0a0a0] transition-all duration-400"
          title="Home"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/826aryan/"
          target="_blank"
          rel="noopener noreferrer"
          className="float-btn flex items-center justify-center size-11 text-[#a0a0a0] transition-all duration-400"
          title="LinkedIn"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
        <a
          href="https://github.com/826aryan"
          target="_blank"
          rel="noopener noreferrer"
          className="float-btn flex items-center justify-center size-11 text-[#a0a0a0] transition-all duration-400"
          title="GitHub"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
        <a
          href="https://drive.google.com/file/d/1cv4GMwo-Qu4euQnsrEarenum-D08jTBj/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="float-btn flex items-center justify-center size-11 text-[#a0a0a0] transition-all duration-400"
          title="Download Resume"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
        </a>
      </aside>
    </>
  )
}

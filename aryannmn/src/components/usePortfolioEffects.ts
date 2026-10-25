import { useEffect } from 'react'

export function usePortfolioEffects() {
  useEffect(() => {
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        }),
      { threshold: 0.15 },
    )
    document
      .querySelectorAll('.fade-up')
      .forEach((el) =>
        reduced ? el.classList.add('visible') : observer.observe(el),
      )
    return () => observer.disconnect()
  }, [])
}

import { useEffect, useRef, useState } from 'react'
export function DecryptedName() {
  const original = 'Aryan Raj'
  const [text, setText] = useState(original)
  const timer = useRef<ReturnType<typeof setInterval> | undefined>(undefined)
  function animate() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    clearInterval(timer.current)
    let iteration = 0
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%'
    timer.current = setInterval(() => {
      setText(
        original
          .split('')
          .map((char, i) =>
            char === ' ' || i < iteration
              ? char
              : chars[Math.floor(Math.random() * chars.length)],
          )
          .join(''),
      )
      iteration += 0.5
      if (iteration > original.length) {
        clearInterval(timer.current)
        setText(original)
      }
    }, 30)
  }
  useEffect(() => () => clearInterval(timer.current), [])
  return (
    <span
      className="accent-text text-[#ccff00]"
      onMouseEnter={animate}
      aria-label={original}
    >
      <span aria-hidden="true">{text}</span>
    </span>
  )
}
export function SlidingEmail() {
  return (
    <div className="sliding-text" aria-hidden="true">
      {'work.aryan826@gmail.com'.split('').map((char, i) => (
        <span
          key={i}
          className="sliding-char"
          style={{ transitionDelay: `${i * 0.02}s` }}
        >
          <span className="sliding-char-inner">{char}</span>
          <span className="sliding-char-inner sliding-char-clone">{char}</span>
        </span>
      ))}
    </div>
  )
}

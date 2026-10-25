const tools = [
  ["JavaScript", "javascript-plain"],
  ["TypeScript", "typescript-plain"],
  ["Next.js", "nextjs-plain"],
  ["React", "react-original"],
  ["Tailwind CSS", "tailwindcss-original"],
  ["C++", "cplusplus-plain"],
  ["Nginx", "nginx-original"],
  ["Express", "express-original"],
  ["MongoDB", "mongodb-plain"],
  ["PostgreSQL", "postgresql-plain"],
  ["Python", "python-plain"],
  ["Jupyter", "jupyter-plain"],
];

export function Skills() {
  return (
    <section
      id="skills"
      className="skills section-padding"
      aria-labelledby="skills-title"
    >
      <h2
        id="skills-title"
        className="mb-10 text-[10px] font-medium tracking-[0.22em] text-[#888]"
      >
        TOOLS I BUILD WITH
      </h2>
      <div className="scroll-velocity-wrapper" id="velocity-marquee">
        <div className="marquee-content">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              className="scroll-velocity-track"
              aria-hidden={copy === 1 ? true : undefined}
            >
              {tools.map(([name, icon]) => (
                <li key={name} className="tool-wordmark">
                  <i className={`devicon-${icon}`} aria-hidden="true" />
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}

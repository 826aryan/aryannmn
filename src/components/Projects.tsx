import { useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { McpLogo } from "./BrandIcons";
import overleafArt from "../../assets/project-art/overleaf.svg";
import diastratxArt from "../../assets/project-art/diastratx.svg";
import codeArt from "../../assets/project-art/codetogether.svg";
import hireprepArt from "../../assets/project-art/hireprep.svg";
import graphArt from "../../assets/project-art/graphflow.svg";
import githubLogo from "../../assets/brands/github.svg";

const artwork: Record<string, string> = {
  "Overleaf MCP": overleafArt,
  DiaStratX: diastratxArt,
  CodeTogether: codeArt,
  "HirePrep-Ai": hireprepArt,
  GraphFlow: graphArt,
};

export function Projects() {
  const [revealed, setRevealed] = useState<string | null>(null);
  return (
    <section
      id="projects"
      className="section-padding"
      aria-labelledby="projects-title"
    >
      <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="mb-3 text-[10px] font-medium tracking-[0.22em] text-[#888]">
            SELECTED WORK
          </p>
          <h2
            id="projects-title"
            className="text-[clamp(2rem,4vw,3rem)] leading-tight font-semibold tracking-[-0.045em]"
          >
            Things I've built<span className="text-primary">.</span>
          </h2>
        </div>
        <p className="project-grid-hint text-xs text-[#777]">
          A few ideas, made real. <span>Hover to explore ↗</span>
        </p>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article
            key={project.title}
            className="project-tile"
            data-open={revealed === project.title}
          >
            <img
              src={artwork[project.title]}
              alt=""
              aria-hidden="true"
              className="project-art"
              loading="lazy"
              decoding="async"
            />
            <div className="project-art-shade" aria-hidden="true" />
            <button
              type="button"
              className="project-reveal"
              onClick={() =>
                setRevealed(revealed === project.title ? null : project.title)
              }
              aria-expanded={revealed === project.title}
              aria-controls={`links-${project.title.replaceAll(" ", "-")}`}
              aria-label={`Reveal ${project.title} artwork and links`}
            >
              <span className="project-name">
                {project.title === "Overleaf MCP" && (
                  <McpLogo className="size-6" />
                )}
                {project.title}
              </span>
            </button>
            <h3 className="sr-only">{project.title}</h3>
            <p className="sr-only">{project.description}</p>
            <div
              id={`links-${project.title.replaceAll(" ", "-")}`}
              className="project-actions"
            >
              {project.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${link.label === "GitHub" ? "Source code" : "Explore project"} — ${project.title}`}
                >
                  {link.label === "GitHub" ? "Source code" : "Explore project"}
                  <ArrowUpRight className="size-3.5" />
                </a>
              ))}
            </div>
          </article>
        ))}
        <a
          href="https://github.com/826aryan"
          target="_blank"
          rel="noopener noreferrer"
          className="project-tile project-more project-github"
        >
          <img
            src={githubLogo}
            alt=""
            aria-hidden="true"
            className="github-background"
            loading="lazy"
          />
          <span className="project-name">
            More on GitHub
            <ArrowUpRight className="size-5" />
          </span>
          <span className="project-more-caption">
            The rest of the experiments <ArrowRight className="size-3.5" />
          </span>
        </a>
      </div>
    </section>
  );
}

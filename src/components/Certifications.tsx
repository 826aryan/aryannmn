import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { certifications } from "@/data/certifications";
import cloudArt from "../../assets/project-art/codetogether.svg";
import aiArt from "../../assets/project-art/graphflow.svg";
import claudeArt from "../../assets/project-art/hireprep.svg";
import agentArt from "../../assets/project-art/diastratx.svg";
import deploymentArt from "../../assets/project-art/overleaf.svg";

const artwork = [cloudArt, aiArt, claudeArt, agentArt, deploymentArt];

export function Certifications() {
  const [revealed, setRevealed] = useState<string | null>(null);
  return (
    <section
      id="certifications"
      className="section-padding"
      aria-labelledby="certifications-title"
    >
      <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="mb-3 text-[10px] font-medium tracking-[0.22em] text-[#888]">
            CONTINUOUS LEARNING
          </p>
          <h2
            id="certifications-title"
            className="text-[clamp(2rem,4vw,3rem)] leading-tight font-semibold tracking-[-0.045em]"
          >
            Learning, with <span className="text-primary">credentials.</span>
          </h2>
        </div>
        <p className="project-grid-hint text-xs text-[#777]">
          5 certifications · 3 providers. <span>Hover to explore ↗</span>
        </p>
      </div>
      <div className="project-grid">
        {certifications.map((certificate, index) => (
          <article
            key={certificate.url}
            className="project-tile certificate-tile"
            data-open={revealed === certificate.url}
          >
            <img
              src={artwork[index]}
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
                setRevealed(
                  revealed === certificate.url ? null : certificate.url,
                )
              }
              aria-expanded={revealed === certificate.url}
              aria-controls={`certificate-link-${index}`}
              aria-label={`Reveal ${certificate.title}`}
            >
              <span className="project-name certificate-name">
                <span className={`certificate-logo ${certificate.logoClass}`}>
                  <img
                    src={certificate.logo}
                    alt={`${certificate.provider} logo`}
                    className={`object-contain ${certificate.imageClass}`}
                    loading="lazy"
                  />
                </span>
                <span>{certificate.title}</span>
              </span>
            </button>
            <h3 className="sr-only">{certificate.title}</h3>
            <div
              id={`certificate-link-${index}`}
              className="project-actions certificate-actions"
            >
              <span className="certificate-date">
                Issued{" "}
                <time dateTime={certificate.issuedAt}>
                  {certificate.issued}
                </time>
              </span>
              <a
                href={certificate.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${certificate.title} certificate (opens in a new tab)`}
              >
                View certificate
                <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

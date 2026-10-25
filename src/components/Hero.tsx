import { ArrowUpRight } from "lucide-react";
import { DecryptedName } from "./TextEffects";
import profilePhoto from "../../assets/profile-cutout.png";
export function Hero() {
  return (
    <section id="about" className="hero section-padding">
      <div className="flex flex-col gap-6">
        <div className="hero-top-row flex items-start gap-6 w-full">
          <h1 className="hero-title">
            Hi, I'm <DecryptedName />.
          </h1>
          <div className="hero-image-wrapper hero-image-mobile">
            <img
              src={profilePhoto}
              width={1254}
              height={1254}
              decoding="async"
              alt="Aryan Raj Profile"
              className="hero-image"
              id="profile-img-mobile"
            />
          </div>
        </div>
        <h2 className="hero-tagline text-[clamp(1rem,1.5vw,1.25rem)] font-normal text-[#a0a0a0] leading-[1.4]">
          Solving problems and building software that works.
        </h2>
        <p className="hero-bio max-w-[500px] text-base text-[#666]">
          I'm a developer who enjoys building thoughtful software and solving
          interesting problems. Most of my learning comes from building
          projects, experimenting with ideas, and constantly improving how I
          think about systems and code.
        </p>

        <div className="availability-card fade-up">
          <div className="availability-indicator"></div>
          <span className="highlight-text">
            Open to new opportunities and collaborations
          </span>
        </div>

        <div className="hero-cta fade-up flex flex-wrap items-center gap-8 mt-4">
          <a href="#projects" className="work-link">
            <span>View my work</span>
            <ArrowUpRight className="work-link-arrow" aria-hidden="true" />
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get In Touch
          </a>
        </div>
      </div>
      <div className="hero-image-wrapper hero-image-desktop">
        <img
          src={profilePhoto}
          width={1254}
          height={1254}
          decoding="async"
          alt="Aryan Raj Profile"
          className="hero-image"
          id="profile-img"
        />
      </div>
    </section>
  );
}

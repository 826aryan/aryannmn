import { SlidingEmail } from "./TextEffects";

export function Contact() {
  return (
    <footer id="contact" className="footer section-padding">
      <h2 className="footer-title">
        Let's build something{" "}
        <span className="accent-text text-[#ccff00]">exceptional</span>.
      </h2>
      <p className="footer-cta-text">
        Currently open to off-campus opportunities, full-time roles, and
        freelance projects.
      </p>

      <div className="footer-contact-info">
        <a
          href="mailto:work.aryan826@gmail.com"
          className="sliding-text-container"
          aria-label="work.aryan826@gmail.com"
        >
          <SlidingEmail />
        </a>
      </div>

      <p className="footer-copy">
        &copy; {new Date().getFullYear()} Aryan Raj. All rights reserved.
      </p>
    </footer>
  );
}

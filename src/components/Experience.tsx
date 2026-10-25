import { ArrowLeftRight, Award, ChevronDown, MapPin } from "lucide-react";
import quantiphiLogo from "../../assets/brands/quantiphi.svg";
import samsungLogo from "../../assets/brands/samsung-research.png";
import { BlogDialog } from "./BlogDialog";

export function Experience() {
  const now = new Date();
  const currentMonths = Math.max(
    1,
    (now.getFullYear() - 2026) * 12 + now.getMonth() - 6,
  );
  return (
    <section id="experience" className="section-padding">
      <p className="mb-3 flex items-center gap-2 text-[10px] font-medium tracking-[0.22em] text-[#a0a0a0]">
        <span className="size-1.5 rounded-full bg-primary" /> THE JOURNEY SO FAR
      </p>
      <h2 className="mb-12 text-[clamp(2rem,4vw,3rem)] leading-tight font-semibold tracking-[-0.045em]">
        <span className="text-primary">1+ year</span> of internship experience.
      </h2>
      <ol className="space-y-10">
        <li className="relative grid grid-cols-[60px_minmax(0,1fr)] gap-5 sm:grid-cols-[88px_minmax(0,1fr)] sm:gap-8">
          <div
            className="absolute top-[76px] bottom-[-24px] left-[29px] w-px bg-linear-to-b from-white/15 to-white/5 sm:top-[104px] sm:left-[43px]"
            aria-hidden="true"
          />
          <div className="relative flex size-[60px] items-center justify-center rounded-2xl border border-white/10 bg-white p-2 shadow-[0_6px_24px_#0003] sm:size-[88px] sm:p-3">
            <img
              src={quantiphiLogo}
              alt="Quantiphi logo"
              className="h-auto w-full object-contain"
            />
          </div>
          <div className="min-w-0 pt-1">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-lg leading-snug font-semibold tracking-[-0.025em] sm:text-2xl">
                Machine Learning Engineering Intern
              </h3>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/15 bg-primary/5 px-2.5 py-1 text-[9px] font-medium text-primary">
                <span className="size-1 rounded-full bg-primary" /> CURRENT
              </span>
            </div>
            <p className="mt-2 text-base text-[#c7c7c7] sm:text-xl">
              Quantiphi
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2.5 text-xs text-[#999] sm:text-sm">
              <time dateTime="2026-07">Jul 2026</time>
              <span className="inline-flex items-center gap-1.5 rounded-md border border-white/[0.05] bg-white/[0.04] px-2 py-1 text-[10px] text-[#ccc]">
                <ArrowLeftRight className="size-3 text-[#777]" />
                {currentMonths} mo
              </span>
              <span>Present</span>
            </div>
            <p className="mt-3 flex items-center gap-1.5 text-xs text-[#777]">
              <MapPin className="size-3" /> Bengaluru
            </p>
          </div>
        </li>
        <li className="grid grid-cols-[60px_minmax(0,1fr)] gap-5 sm:grid-cols-[88px_minmax(0,1fr)] sm:gap-8">
          <div className="flex size-[60px] items-center justify-center rounded-2xl border border-white/10 bg-white p-2 shadow-[0_6px_24px_#0003] sm:size-[88px] sm:p-2.5">
            <img
              src={samsungLogo}
              alt="Samsung Research logo"
              className="h-auto w-full object-contain"
            />
          </div>
          <details open className="group min-w-0 pt-1">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-3 rounded-sm [&::-webkit-details-marker]:hidden">
              <span>
                <span className="block text-lg leading-snug font-semibold tracking-[-0.025em] sm:text-2xl">
                  Samsung PRISM Intern
                </span>
                <span className="mt-2 block text-base leading-relaxed text-[#c7c7c7] sm:text-xl">
                  Samsung R&amp;D Institute India — Bangalore
                </span>
              </span>
              <ChevronDown className="mt-1 size-4 shrink-0 text-[#777] transition-transform group-open:rotate-180" />
            </summary>
            <div className="mt-4 flex flex-wrap items-center gap-2.5 text-xs text-[#999] sm:text-sm">
              <time dateTime="2025-03">Mar 2025</time>
              <span className="inline-flex items-center gap-1.5 rounded-md border border-white/[0.05] bg-white/[0.04] px-2 py-1 text-[10px] text-[#ccc]">
                <ArrowLeftRight className="size-3 text-[#777]" />
                11 mo
              </span>
              <time dateTime="2026-02">Feb 2026</time>
            </div>
            <p className="mt-3 flex items-center gap-1.5 text-xs text-[#777]">
              <MapPin className="size-3" /> Remote
            </p>
            <div className="mt-6 max-w-2xl space-y-4 text-sm leading-[1.85] text-[#999]">
              <p className="flex items-start gap-2.5">
                <Award className="mt-1 size-4 shrink-0 text-primary/75" />
                <span>
                  Received a{" "}
                  <a
                    href="https://drive.google.com/file/d/1i_upCVROzFvFr108tOyxW8JIYpZbVuqp/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#dedede] underline decoration-white/30 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
                  >
                    Certificate of Excellence ↗
                  </a>{" "}
                  from the Samsung PRISM Program for outstanding performance
                  during the internship.
                </span>
              </p>
              <p>
                Collaborated with Samsung industry experts to research and
                develop AI/ML-based solutions for real-world cybersecurity
                challenges, gaining experience in applied machine learning and
                production-scale problem solving.
              </p>
              <BlogDialog />
            </div>
          </details>
        </li>
      </ol>
    </section>
  );
}

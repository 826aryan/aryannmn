import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
export function BlogDialog() {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button
            variant="link"
            className="blog-btn h-auto justify-start whitespace-normal rounded-none border-0 bg-transparent p-0 text-sm font-medium text-[#ccc] underline-offset-4 hover:text-primary"
          />
        }
      >
        Read My PRISM Experience Blog ↗
      </DialogTrigger>
      <DialogContent className="max-h-[85dvh] overflow-y-auto border-white/10 bg-[#121212] text-[#f5f5f5] sm:max-w-3xl">
        <DialogHeader>
          <span className="blog-tag">Internship Experience</span>
          <DialogTitle className="text-2xl">
            Samsung PRISM: The Unfiltered Reality
          </DialogTitle>
          <DialogDescription>By Aryan Raj • March 2025</DialogDescription>
        </DialogHeader>
        <div className="blog-body">
          <p>
            <em>
              Quick heads up: This is based on my experience at SRMIST KTR. The
              process, structure, and specifics might be different at other
              colleges. Take this as one person's perspective, not a universal
              guide.
            </em>
          </p>

          <p>
            Let me tell you about Samsung PRISM - not the polished version you
            see on posters, but what it's actually like. Most students I talk to
            have the same questions: How do you get in? What do you actually do?
            Is it worth it?
          </p>

          <p>So here's everything, unfiltered.</p>

          <h3>The Selection Process</h3>
          <p>
            PRISM opens applications through a Google Form, usually shared in
            college groups. You fill it, submit it, and then... you wait.
          </p>

          <p>
            <strong>Round 1</strong> happens at your university. It's an
            objective test, but here's the catch - you can't just tick answers.
            Every question needs rough work, detailed reasoning. This round cuts
            60% of applicants.
          </p>

          <p>
            <strong>Round 2</strong> is where Samsung gets directly involved.
            Three coding problems. Timed. Online. You solve what you can,
            submit, and then there's this long silence - sometimes 45 days,
            sometimes more. No scores. No feedback. Just waiting.
          </p>

          <p>
            When you do get selected, it's usually through a WhatsApp group. Not
            an email. Not a call. A group add. That's PRISM for you - real,
            unpolished, straightforward.
          </p>

          <h3>What Actually Happens After Selection</h3>
          <p>
            You get put into a team of four students. You also get two faculty
            mentors from your university and industry mentors from Samsung. This
            isn't optional - this is your team for the entire program.
          </p>

          <p>
            Each team gets a real research problem from Samsung. A problem
            Samsung actually cares about solving. And you sign NDAs - proper
            legal documents - before you even see the problem statement.
          </p>

          <p>
            Here's what most people don't realize:{" "}
            <strong>
              This isn't an internship. It's research engineering.
            </strong>
          </p>

          <h3>The Reality of Working in PRISM</h3>
          <p>
            When you start, you think "okay, two months, we'll finish this." You
            won't.
          </p>

          <p>
            Not because there's too much work, but because Samsung's
            expectations are different. They don't want something that works.
            They want something deployable. Something that can go into
            production. Something that solves the problem properly.
          </p>

          <p>
            You have weekly reviews with your faculty mentors and monthly
            reviews with Samsung engineers. In these reviews, you defend every
            choice. Every assumption. Every line of your approach. "Why did you
            do it this way?" "What happens if this fails?" "How does this
            scale?"
          </p>

          <p>
            At the end, you don't just submit code. You submit a research paper.
            Yes, actual publication. That's part of the program. Your work needs
            to be documented.
          </p>

          <h3>What You Get Out of It</h3>
          <p>Let's talk perks first:</p>
          <ul className="blog-list">
            <li>Participation Certificate + goodies on completion</li>
            <li>
              Certificate of Excellence + ₹15,000 stipend (if your mentors
              approve your work)
            </li>
            <li>Eligibility for Samsung SRIB Magpie (next level program)</li>
            <li>Counts as your industry project requirement</li>
            <li>Can replace one professional elective</li>
          </ul>
          <p>
            But honestly? The real gain isn't the stipend or the certificate.
            It's that you learn how to build things that actually matter.
          </p>

          <h3>Should You Apply?</h3>
          <p>
            Look, PRISM isn't for everyone, and that's okay. Here's how to know
            if it's for you.
          </p>

          <p>
            <strong>Apply if:</strong>
          </p>
          <ul className="blog-list">
            <li>
              You like working on one thing deeply rather than many things
              superficially
            </li>
            <li>You want to understand how real product engineering works</li>
            <li>
              You're okay with ambiguity and figuring things out as you go
            </li>
            <li>You care more about learning than collecting certificates</li>
            <li>
              You want actual industry mentorship, not just project guidance
            </li>
          </ul>

          <p>
            <strong>Skip it if:</strong>
          </p>
          <ul className="blog-list">
            <li>You want quick wins and fast turnarounds</li>
            <li>You prefer clear instructions over open-ended problems</li>
            <li>You're only doing it for the stipend or resume line</li>
          </ul>

          <h3>Final Word</h3>
          <p>
            Getting selected for PRISM is one thing. What you do with it is
            another.
          </p>
          <p>
            It's not going to be the easiest project you do in college. But if
            you're someone who wants to build things that actually work in the
            real world, understand how industry thinks about problems, and learn
            what it means to commit to something meaningful - PRISM might be
            exactly what you need.
          </p>
          <p>
            The form will come. You'll have to decide if you want to fill it. At
            least now, you know exactly what you’re signing up for.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

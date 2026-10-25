export interface Project {
  title: string;
  description: string;
  tech: string[];
  links: { url: string; label: string }[];
}

export const projects: Project[] = [
  {
    title: "Overleaf MCP",
    description:
      "An MCP server connecting Claude to Overleaf to tailor LaTeX resumes to job descriptions, recompile documents, and return a PDF download link.",
    tech: ["Python", "MCP", "Playwright", "LaTeX"],
    links: [
      {
        url: "https://github.com/826aryan/Overleaf_MCP",
        label: "GitHub",
      },
    ],
  },
  {
    title: "DiaStratX",
    description:
      "A research platform for diabetes distress assessment using DDS-17 scoring, an exploratory clinical classifier, and clinician-reviewed PDF reports.",
    tech: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL"],
    links: [
      {
        url: "https://dia-strat-x.vercel.app",
        label: "Live Demo \u2197",
      },
      {
        url: "https://github.com/826aryan/DiaStratX",
        label: "GitHub",
      },
    ],
  },
  {
    title: "CodeTogether",
    description:
      "A real-time collaborative code editor allowing multiple users to write, edit, and sync code live in the same environment.",
    tech: ["React", "Node.js", "Socket.IO", "Monaco Editor"],
    links: [
      {
        url: "https://codetogether-3x2u.onrender.com/",
        label: "Live Demo \u2197",
      },
      {
        url: "https://github.com/826aryan/CodeTogether",
        label: "GitHub",
      },
    ],
  },
  {
    title: "HirePrep-Ai",
    description:
      "An AI-powered interview preparation platform built natively on Next.js to help candidates practice and succeed.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: [
      {
        url: "https://hire-prep-ai-hkj8.vercel.app/",
        label: "Live Demo \u2197",
      },
      {
        url: "https://github.com/826aryan/HirePrep-Ai",
        label: "GitHub",
      },
    ],
  },
  {
    title: "GraphFlow",
    description:
      "A modern, interactive web application for visualizing graph algorithms in real-time. Built with React and Vite.",
    tech: ["React", "Vite", "Tailwind CSS"],
    links: [
      {
        url: "https://graphflow.aryannmn.dev/",
        label: "Live Demo \u2197",
      },
      {
        url: "https://github.com/826aryan/GraphFlow",
        label: "GitHub",
      },
    ],
  },
];

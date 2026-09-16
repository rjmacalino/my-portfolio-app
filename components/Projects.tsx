import SectionHeading from "./SectionHeading";

type Project = {
  title: string;
  description: string;
  tags: string[];
  demoUrl: string;
  codeUrl: string;
};

const projects: Project[] = [
  {
    title: "Precious Koala",
    description:
      "Full-stack e-commerce storefront for a Melbourne baby-products brand. Migrated from vanilla JS to Next.js and React 19 with a localStorage cart and Stripe Checkout.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Vercel"],
    demoUrl: "https://precious-koala.vercel.app/",
    codeUrl: "https://github.com/rjmacalino/precious-koala",
  },
  {
    title: "Pomodoro Flow",
    description:
      "Focus timer with a circular SVG progress ring, three switchable themes, state that survives a refresh, and background notifications via Service Worker.",
    tags: ["React", "TypeScript", "Vite", "Service Worker"],
    demoUrl: "https://pomodoro-flow-app.netlify.app",
    codeUrl: "https://github.com/rjmacalino/pomodoro-v2",
  },
  {
    title: "My Hobby Blog",
    description:
      "Dark, neon personal site with glassmorphism cards, animated gradient orbs, scroll reveals and 3D tilt, in pure HTML, CSS and vanilla JS.",
    tags: ["HTML", "CSS", "JavaScript", "IntersectionObserver"],
    demoUrl: "https://aboutmeblog.netlify.app/",
    codeUrl: "https://github.com/rjmacalino/blog",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="flex flex-col gap-5"
    >
      <SectionHeading id="projects">Selected Projects</SectionHeading>

      <ul className="flex flex-col gap-1">
        {projects.map((project) => (
          <li
            key={project.title}
            className="group -mx-4 rounded-[1rem] border border-transparent px-4 py-3 transition-colors duration-200 hover:border-border-base hover:bg-surface"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-[1.02rem] font-extrabold">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-70"
                >
                  {project.title}
                  <span
                    aria-hidden="true"
                    className="ml-1.5 inline-block text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    &#8599;
                  </span>
                </a>
              </h3>

              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-transparent font-mono text-[0.7rem] uppercase tracking-[0.12em] text-muted transition-colors hover:border-text hover:text-text"
              >
                Code
              </a>
            </div>

            <p className="mt-1.5 text-[0.88rem] leading-[1.6] text-muted">
              {project.description}
            </p>

            <ul
              aria-label="Technologies used"
              className="mt-2.5 flex flex-wrap gap-[0.35rem]"
            >
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-[2rem] border border-border-base bg-bg-2 px-[0.6rem] py-[0.15rem] font-mono text-[0.68rem] text-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}

type Project = {
  title: string;
  status: "Live" | "Ongoing";
  description: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
};

const projects: Project[] = [
  {
    title: "Pomodoro Flow",
    status: "Live",
    description:
      "A focus timer with a circular SVG progress ring, three switchable themes, persistent timer across sessions, and background notifications via Service Worker. Built with Vite, React, and TypeScript.",
    tags: ["React", "TypeScript", "Vite", "Service Worker", "LocalStorage"],
    demoUrl: "https://pomodoro-flow.example.com",
    codeUrl: "https://github.com/rjmacalino/pomodoro-v2",
  },
  {
    title: "Lua Game Scripting Suite",
    status: "Ongoing",
    description:
      "A growing collection of custom Lua scripts for a popular online multiplayer game. Serving 200+ active users with regular updates, game logic systems, player progression, and automated server tools.",
    tags: ["Lua", "Source Engine", "Game Modding", "Server-side Scripting"],
  },
  {
    title: "Precious Koala",
    status: "Live",
    description:
      "A full-stack e-commerce storefront for a Melbourne baby-products brand. Migrated from vanilla JS to Next.js 15, React 19, TypeScript and Tailwind CSS, with a localStorage cart, Stripe Checkout integration, and a Vercel deployment.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Vercel"],
    demoUrl: "https://precious-koala.vercel.app/",
    codeUrl: "https://github.com/rjmacalino/precious-koala",
  },
  {
    title: "My Hobby Blog",
    status: "Live",
    description:
      "A dark, neon personal site celebrating the games, anime, sitcoms and superhero universes I love. Glassmorphism cards, animated gradient orbs, scroll reveals and 3D tilt, all in pure HTML, CSS and vanilla JS.",
    tags: ["HTML", "CSS", "JavaScript", "IntersectionObserver"],
    demoUrl: "https://aboutmeblog.netlify.app/",
    codeUrl: "https://github.com/rjmacalino/blog",
  },
];

export default function Projects() {
  return (
    <section id="projects" aria-label="Projects" className="py-[5.5rem]">
      <div className="max-w-[1100px] mx-auto px-6">
        <h2 className="text-[clamp(1.8rem,5vw,2.6rem)] font-black tracking-[-0.01em] mb-10 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-[10px] after:w-12 after:h-1 after:bg-text after:rounded-[3px]">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {projects.map((project) => (
            <article
              key={project.title}
              aria-label={`${project.title} project`}
              className="bg-surface border border-border-base rounded-[1.25rem] p-[1.85rem] flex flex-col gap-3 transition-[border-color] duration-300 hover:border-border-hover"
            >
              <div className="flex items-center justify-between">
                <span
                  className={`font-mono text-[0.68rem] font-bold uppercase tracking-[0.08em] px-[0.7rem] py-[0.22rem] rounded-[2rem] border ${
                    project.status === "Live"
                      ? "bg-invert-bg text-invert-text border-invert-bg"
                      : "text-text border-dashed border-border-hover"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <h3 className="text-xl font-extrabold">{project.title}</h3>

              <p className="text-[0.9rem] text-muted flex-1">
                {project.description}
              </p>

              <ul
                aria-label="Technologies used"
                className="flex flex-wrap gap-[0.4rem]"
              >
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="font-mono text-[0.72rem] px-[0.6rem] py-[0.2rem] bg-bg-2 text-muted rounded-[2rem] border border-border-base"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              {project.demoUrl && project.codeUrl ? (
                <div className="flex gap-[0.6rem] flex-wrap mt-1">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-[1.3rem] py-2 text-[0.85rem] bg-invert-bg text-invert-text rounded-[2rem] font-bold transition-[transform,opacity] duration-150 hover:-translate-y-0.5 hover:opacity-85"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-[1.3rem] py-2 text-[0.85rem] border-[1.5px] border-border-base text-muted rounded-[2rem] font-bold transition-[color,border-color,transform] duration-150 hover:text-text hover:border-border-hover hover:-translate-y-0.5"
                  >
                    Code
                  </a>
                </div>
              ) : (
                <span
                  aria-disabled="true"
                  className="self-start mt-1 px-[1.3rem] py-2 text-[0.85rem] bg-invert-bg text-invert-text rounded-[2rem] font-bold opacity-40 cursor-not-allowed"
                >
                  Personal Project
                </span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

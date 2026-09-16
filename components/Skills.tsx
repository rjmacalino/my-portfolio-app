import SectionHeading from "./SectionHeading";

const skillGroups = [
  {
    title: "Front-End",
    skills: [
      "HTML5",
      "CSS3",
      "SCSS",
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Back-End & Data",
    skills: ["Node.js", "Express", "MongoDB", "MySQL", "REST APIs"],
  },
  {
    title: "E-commerce & CMS",
    skills: ["Shopify", "WordPress", "Stripe"],
  },
  {
    title: "Tools",
    skills: ["Git & GitHub", "Netlify", "Vercel", "Responsive Design"],
  },
];

export default function Skills() {
  return (
    <section
      id="stack"
      aria-labelledby="stack-heading"
      className="flex flex-col gap-5"
    >
      <SectionHeading id="stack">Stack</SectionHeading>

      <dl className="flex flex-col gap-4">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="grid grid-cols-1 gap-2 sm:grid-cols-[130px_1fr] sm:gap-4"
          >
            <dt className="pt-[0.2rem] font-mono text-[0.7rem] font-bold uppercase tracking-[0.12em] text-muted">
              {group.title}
            </dt>

            <dd>
              <ul className="flex flex-wrap gap-[0.35rem]">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-[2rem] border border-border-base bg-bg-2 px-[0.65rem] py-[0.18rem] font-mono text-[0.72rem] text-text transition-colors duration-200 hover:border-border-hover hover:bg-surface"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

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
    title: "Tools & Platforms",
    skills: [
      "Shopify",
      "WordPress",
      "Stripe",
      "Git & GitHub",
      "Netlify",
      "Vercel",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="stack"
      aria-labelledby="stack-heading"
      className="flex flex-col gap-4"
    >
      <SectionHeading id="stack">Stack</SectionHeading>

      <dl className="flex flex-col gap-3">
        {skillGroups.map((group) => (
          <div key={group.title} className="flex flex-col gap-1.5">
            <dt className="font-mono text-[0.66rem] font-bold uppercase tracking-[0.14em] text-muted">
              {group.title}
            </dt>

            <dd>
              <ul className="flex flex-wrap gap-[0.3rem]">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-[2rem] border border-border-base bg-bg-2 px-[0.55rem] py-[0.12rem] font-mono text-[0.7rem] text-text transition-colors duration-200 hover:border-border-hover hover:bg-surface"
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

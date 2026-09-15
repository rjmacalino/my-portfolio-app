const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML5 & CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "REST APIs"],
  },
  {
    title: "Tools & Other",
    skills: ["Git & GitHub", "Shopify", "WordPress", "Netlify", "Vercel", "Responsive Design"],
  },
];

export default function Skills() {
  return (
    <section id="skills" aria-label="Technical skills" className="py-[5.5rem]">
      <div className="max-w-[1100px] mx-auto px-6">
        <h2 className="text-[clamp(1.8rem,5vw,2.6rem)] font-black tracking-[-0.01em] mb-10 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-[10px] after:w-12 after:h-1 after:bg-text after:rounded-[3px]">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-surface border border-border-base rounded-[1.25rem] p-7 transition-[transform,border-color] duration-200 hover:-translate-y-1 hover:border-border-hover"
            >
              <h3 className="font-mono text-[0.78rem] font-bold uppercase tracking-[0.12em] text-muted mb-4">
                {group.title}
              </h3>

              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="font-mono bg-bg-2 text-text px-[0.85rem] py-[0.32rem] rounded-[2rem] text-[0.78rem] font-medium border border-border-base transition-[background-color,border-color,transform] duration-200 hover:bg-surface hover:border-border-hover hover:-translate-y-0.5"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "MERN", label: "Stack" },
  { value: "MEL", label: "Melbourne, AU" },
];

export default function About() {
  return (
    <section id="about" aria-label="About me" className="py-[5.5rem]">
      <div className="max-w-[1100px] mx-auto px-6">
        <h2 className="text-[clamp(1.8rem,5vw,2.6rem)] font-black tracking-[-0.01em] mb-10 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-[10px] after:w-12 after:h-1 after:bg-text after:rounded-[3px]">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
          <div className="flex flex-col gap-4">
            <p className="text-muted text-[1.05rem]">
              I&apos;m a solution-oriented developer with a background that
              spans data analysis, e-commerce, and full-stack web development. I
              care about writing clean, readable code and building interfaces
              that actually feel good to use.
            </p>
            <p className="text-muted text-[1.05rem]">
              Currently a Full Stack Engineer at Accenture Australia, working
              across React, Next.js, and TypeScript. Based in Melbourne, always
              building something on the side and looking for the next thing to
              learn.
            </p>

            <p className="text-muted text-[1.05rem]">
              Outside of work, I&apos;m usually shipping a side project or
              exploring something new. Right now that&apos;s deepening my
              backend and database skills.
            </p>
          </div>

          <ul
            aria-label="Quick facts"
            className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4"
          >
            {stats.map((stat) => (
              <li
                key={stat.label}
                className="bg-surface border border-border-base rounded-2xl p-[1.1rem] text-center flex flex-col gap-1 transition-[transform,border-color] duration-200 hover:-translate-y-[3px] hover:border-border-hover"
              >
                <span className="text-2xl font-black">{stat.value}</span>
                <span className="text-[0.72rem] text-muted uppercase tracking-[0.08em]">
                  {stat.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

import SectionHeading from "./SectionHeading";

type Role = {
  role: string;
  company: string;
  period: string;
  summary: string;
  tags: string[];
};

const roles: Role[] = [
  {
    role: "Full Stack Engineer",
    company: "Accenture Australia",
    period: "Sep 2026 – Present",
    summary:
      "Building and maintaining web applications across React, Next.js and TypeScript.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    role: "Independent Developer",
    company: "Personal Project",
    period: "2023 – 2026",
    summary:
      "Built and maintained tooling for an online platform used by a community of around 200 active users, shipping regular updates and performance improvements.",
    tags: ["Tooling", "Performance"],
  },
  {
    role: "Web Developer",
    company: "Qualitransit Health Distribution",
    period: "2020 – 2022",
    summary:
      "Maintained core company websites and shipped new features with React and modern CSS. Customised Shopify storefronts to lift brand identity and conversion, and worked with senior developers on site architecture and reusable components.",
    tags: ["React", "JavaScript", "Shopify", "CSS"],
  },
  {
    role: "Data Analyst",
    company: "Qualitransit Health Distribution",
    period: "2016 – 2020",
    summary:
      "Led a team focused on data-driven product recommendations and customer satisfaction. Analysed transaction data to support forecasting, inventory planning and sales strategy.",
    tags: ["Analytics", "Forecasting", "Reporting"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="flex flex-col gap-5"
    >
      <SectionHeading id="experience">Experience</SectionHeading>

      <ol className="flex flex-col gap-1">
        {roles.map((item) => (
          <li
            key={`${item.company}-${item.role}`}
            className="-mx-4 rounded-[1rem] border border-transparent px-4 py-3 transition-colors duration-200 hover:border-border-base hover:bg-surface"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-[1.02rem] font-extrabold">
                {item.role}{" "}
                <span className="font-bold text-muted">
                  &middot; {item.company}
                </span>
              </h3>

              <span className="font-mono text-[0.7rem] whitespace-nowrap uppercase tracking-[0.12em] text-muted">
                {item.period}
              </span>
            </div>

            <p className="mt-1.5 text-[0.88rem] leading-[1.6] text-muted">
              {item.summary}
            </p>

            <ul
              aria-label="Skills used"
              className="mt-2.5 flex flex-wrap gap-[0.35rem]"
            >
              {item.tags.map((tag) => (
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
      </ol>
    </section>
  );
}

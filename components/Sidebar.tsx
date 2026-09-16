"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

const EMAIL = "rjhaymacalino@gmail.com";
const GITHUB_URL = "https://github.com/rjmacalino";

const facts = ["Melbourne, AU", "2+ yrs", "MERN"];

const subscribeNoop = () => () => {};

const navLinks = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("experience");
  const [copied, setCopied] = useState(false);
  const { theme, setTheme } = useTheme();

  // Theme is only known client-side; render a stable label until hydrated.
  const mounted = useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false,
  );

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;

      const sections = navLinks
        .map((link) => document.getElementById(link.id))
        .filter((el): el is HTMLElement => el !== null);

      if (sections.length === 0) return;

      // The page is short enough that the last section may never reach a
      // mid-viewport trigger line, so pin it explicitly at the bottom.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (atBottom) {
        setActiveSection(sections[sections.length - 1].id);
        return;
      }

      const line = window.scrollY + window.innerHeight * 0.35;
      let current = sections[0].id;

      for (const section of sections) {
        const top = section.getBoundingClientRect().top + window.scrollY;
        if (top <= line) current = section.id;
      }

      setActiveSection(current);
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <header className="flex flex-col gap-10 pt-16 pb-10 lg:sticky lg:top-0 lg:h-screen lg:justify-between lg:overflow-y-auto lg:py-20">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <div>
            <h1 className="text-[clamp(2.2rem,5.5vw,3.2rem)] font-black leading-[1.05] tracking-[-0.025em]">
              RJ Macalino
            </h1>

            <p className="mt-2 text-[clamp(1rem,2.2vw,1.2rem)] font-bold">
              Full Stack Developer
            </p>
          </div>

          <ul
            aria-label="Quick facts"
            className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-muted"
          >
            {facts.map((fact, index) => (
              <li key={fact} className="flex items-center gap-3">
                {index > 0 && (
                  <span aria-hidden="true" className="text-border-hover">
                    &middot;
                  </span>
                )}
                {fact}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 text-[0.92rem] leading-[1.65] text-muted">
            <p>
              I build things for the web, from idea to deployment.
              Solution-oriented developer with a background spanning data
              analysis, e-commerce and full-stack work.
            </p>
            <p className="hidden sm:block">
              Currently at Accenture Australia across React, Next.js and
              TypeScript, and usually shipping something on the side.
            </p>
          </div>
        </div>

        <nav aria-label="Section navigation" className="hidden lg:block">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`group flex items-center gap-3 font-mono text-[0.75rem] font-bold uppercase tracking-[0.16em] transition-colors ${
                      isActive ? "text-text" : "text-muted hover:text-text"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`h-px bg-current transition-[width] duration-250 ${
                        isActive ? "w-10" : "w-5 group-hover:w-10"
                      }`}
                    />
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${EMAIL}`}
            className="rounded-[2rem] bg-invert-bg px-[1.4rem] py-[0.6rem] text-[0.85rem] font-bold text-invert-text transition-all duration-150 hover:-translate-y-0.5 hover:opacity-85"
          >
            Email Me
          </a>

          <button
            type="button"
            onClick={handleCopy}
            aria-label="Copy email address to clipboard"
            className={`cursor-pointer rounded-[2rem] border-[1.5px] px-[1.4rem] py-[0.6rem] text-[0.85rem] font-bold transition-all duration-150 hover:-translate-y-0.5 ${
              copied
                ? "border-text text-text"
                : "border-border-base text-text hover:border-border-hover"
            }`}
          >
            {copied ? "Copied!" : "Copy Email"}
          </button>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-transparent pb-0.5 font-mono text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-muted transition-colors hover:border-text hover:text-text"
          >
            GitHub
          </a>

          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={
              mounted
                ? `Switch to ${theme === "dark" ? "light" : "dark"} theme`
                : "Toggle theme"
            }
            className="ml-auto flex w-[58px] cursor-pointer items-center justify-center border border-border-base px-[0.55rem] py-[0.28rem] font-mono text-[0.68rem] tracking-[0.1em] text-muted transition-colors hover:border-border-hover hover:text-text"
          >
            {mounted ? (theme === "dark" ? "DARK" : "LIGHT") : "DARK"}
          </button>
        </div>
      </div>
    </header>
  );
}

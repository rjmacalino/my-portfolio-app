"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("experience");

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

  return (
    <nav
      aria-label="Section navigation"
      className="fixed top-0 right-0 left-0 z-50 hidden h-14 items-center justify-end gap-8 border-b border-border-base bg-bg px-10 lg:flex"
    >
      <ul className="flex items-center gap-8">
        {navLinks.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`group relative font-mono text-[0.75rem] font-bold uppercase tracking-[0.14em] transition-colors ${
                  isActive ? "text-text" : "text-muted hover:text-text"
                }`}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={`absolute -bottom-[5px] left-0 h-0.5 bg-text transition-[width] duration-250 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            </li>
          );
        })}
      </ul>

      <ThemeToggle />
    </nav>
  );
}

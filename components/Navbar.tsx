"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    heroObserver.observe(hero);

    return () => heroObserver.disconnect();
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((section) => sectionObserver.observe(section));

    return () => sectionObserver.disconnect();
  }, []);

  return (
    <nav
      aria-label="Primary navigation"
      className={`fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-5 py-4 md:px-8 transition-[padding,background-color,border-color] duration-300 border-b ${
        scrolled ? "bg-bg border-border-base py-3" : "border-transparent"
      }`}
    >
      <span
        aria-hidden="true"
        className={`font-mono font-semibold text-[0.95rem] tracking-[0.02em] transition-[opacity,transform] duration-300 ${
          scrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
        }`}
      >
        Raymond Macalino
      </span>

      <ul className="flex items-center gap-[1.1rem] md:gap-8">
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.slice(1);
          return (
            <li key={link.href}>
              <a
                href={link.href}
                className={`group relative font-mono text-[0.85rem] font-semibold transition-colors ${
                  isActive ? "text-text" : "text-muted hover:text-text"
                }`}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={`absolute left-0 -bottom-[5px] h-0.5 bg-text transition-[width] duration-250 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            </li>
          );
        })}

        <li>
          <button
            type="button"
            aria-label="Switch to light theme"
            className="font-mono text-[0.72rem] tracking-[0.08em] text-muted border border-border-base px-[0.65rem] py-[0.3rem] cursor-pointer transition-colors hover:text-text hover:border-border-hover"
          >
            DARK
          </button>
        </li>
      </ul>
    </nav>
  );
}

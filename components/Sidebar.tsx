"use client";

import { useState } from "react";
import Skills from "./Skills";
import ThemeToggle from "./ThemeToggle";

const EMAIL = "rjmacalino@outlook.com";
const GITHUB_URL = "https://github.com/rjmacalino";

const facts = ["Melbourne, AU", "MERN"];

export default function Sidebar() {
  const [copied, setCopied] = useState(false);

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
    <header className="sidebar-pinned flex flex-col gap-7 pt-16 pb-10 lg:pt-12 lg:pb-12">
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

        <p className="text-[0.92rem] leading-[1.65] text-muted">
          I build things for the web, from idea to deployment. Solution-oriented
          developer with a background spanning data analysis, e-commerce and
          full-stack work, and usually shipping something on the side.
        </p>

        <div className="flex flex-col gap-4">
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

            <ThemeToggle className="ml-auto lg:hidden" />
          </div>
        </div>
      </div>

      <Skills />
    </header>
  );
}

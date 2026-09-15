"use client";

import { useState } from "react";

const EMAIL = "rjhaymacalino@gmail.com";

export default function Contact() {
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
    <section id="contact" aria-label="Contact" className="py-[5.5rem]">
      <div className="max-w-[1100px] mx-auto px-6 text-center">
        <h2 className="text-[clamp(1.8rem,5vw,2.6rem)] font-black tracking-[-0.01em] mb-10 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-[10px] after:w-12 after:h-1 after:bg-text after:rounded-[3px]">
          Get In Touch
        </h2>

        <p className="text-muted text-[1.05rem] max-w-[480px] mx-auto mb-8">
          Always happy to connect, talk shop, or hear about interesting
          projects. Drop me a line, I usually reply within a day.
        </p>

        <div className="flex gap-4 justify-center flex-wrap mb-8">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-block px-[1.9rem] py-3 rounded-[2rem] text-[0.95rem] font-bold bg-invert-bg text-invert-text transition-all duration-150 hover:-translate-y-0.5 hover:opacity-85"
          >
            Email Me
          </a>

          <button
            type="button"
            onClick={handleCopy}
            aria-label="Copy email address to clipboard"
            className={`px-[1.9rem] py-3 rounded-[2rem] text-[0.95rem] font-bold border-[1.5px] transition-all duration-150 hover:-translate-y-0.5 ${
              copied
                ? "border-text text-text"
                : "border-border-base text-text hover:border-border-hover"
            }`}
          >
            {copied ? "Copied!" : "Copy Email"}
          </button>
        </div>

        <ul className="flex gap-6 justify-center">
          <li>
            <a
              href="https://github.com/rjmacalino"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-muted text-[0.9rem] font-semibold border-b border-transparent pb-0.5 transition-colors hover:text-text hover:border-text"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

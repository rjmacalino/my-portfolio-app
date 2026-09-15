const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav aria-label="Primary navigation" className="fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-5 py-4 md:px-8 md:py-[1.1rem] border-b border-transparent">
      <span aria-hidden="true" className="font-mono font-semibold text-[0.95rem] tracking-[0.02em] opacity-0">
        Raymond Macalino
      </span>

      <ul className="flex items-center gap-[1.1rem] md:gap-8">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="group relative font-mono text-[0.85rem] font-semibold text-muted transition-colors hover:text-text">
              {link.label}
              <span aria-hidden="true" className="absolute left-0 -bottom-[5px] h-0.5 w-0 bg-text transition-[width] duration-250 group-hover:w-full" />
            </a>
          </li>
        ))}

        <li>
          <button type="button" aria-label="Switch to light theme" className="font-mono text-[0.72rem] tracking-[0.08em] text-muted border border-border-base px-[0.65rem] py-[0.3rem] cursor-pointer transition-colors hover:text-text hover:border-border-hover">
            DARK
          </button>
        </li>
      </ul>
    </nav>
  );
}
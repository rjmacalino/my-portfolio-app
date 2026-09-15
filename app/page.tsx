import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <section
        id="hero"
        aria-label="Introduction"
        className="min-h-screen flex items-center justify-center text-center px-6 pt-24 pb-12"
      >
        <div className="max-w-[720px]">
          <p className="font-mono uppercase tracking-[0.35em] text-[0.8rem] text-muted mb-3">
            Hi, I&apos;m
          </p>

          <h1 className="text-[clamp(2.6rem,8vw,5rem)] font-black leading-[1.05] tracking-[-0.02em] mb-3">
            Raymond Macalino
          </h1>

          <p className="text-[clamp(1.1rem,3vw,1.5rem)] font-bold mb-4">
            Web &amp; Game Developer
          </p>

          <p className="text-[clamp(0.95rem,2.2vw,1.15rem)] text-muted max-w-[480px] mx-auto mb-9">
            I build things for the web, and sometimes for virtual worlds.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#projects"
              className="inline-block px-[1.9rem] py-3 rounded-[2rem] text-[0.95rem] font-bold bg-invert-bg text-invert-text transition-all duration-150 hover:-translate-y-0.5 hover:opacity-85"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="inline-block px-[1.9rem] py-3 rounded-[2rem] text-[0.95rem] font-bold border-[1.5px] border-border-base transition-all duration-150 hover:-translate-y-0.5 hover:border-border-hover"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
      <About />
      <Skills />
      <Projects />
    </>
  );
}

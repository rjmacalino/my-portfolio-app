import Sidebar from "@/components/Sidebar";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-[1180px] flex-col gap-4 px-6 lg:flex-row lg:gap-20 lg:px-10 lg:pt-14 lg:pb-12">
      <div className="lg:w-[42%] lg:shrink-0">
        <Sidebar />
      </div>

      <main className="flex flex-col gap-14 pb-16 lg:w-[58%] lg:py-12">
        <Experience />
        <Projects />
      </main>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center px-4">
        <p className="text-blue-400 text-sm mb-2">Hi, I&apos;m</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Raymond Macalino
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-4">
          Web &amp; Game Developer
        </p>
        <p className="text-gray-300 mb-8 max-w-md mx-auto">
          I build things for the web, and sometimes for virtual worlds.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="bg-blue-500 hover:bg-blue-600 transition-colors px-6 py-3 rounded"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="border border-gray-600 hover:border-gray-400 transition-colors px-6 py-3 rounded"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </main>
  );
}

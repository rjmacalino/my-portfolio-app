export default function Home() {
  return (
    <div class="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center px-4">
        <p className="text-blue-400 text-sm mb-2">Hi, I'm</p>
        <h1 className="text-6xl font-bold mb-4">Raymond Macalino</h1>
        <h1 className="text-2xl text-gray-400 mb-4">Web & Game Developer</h1>
        <p className="text-gray-300 mb-8">
          I build things for the web, and sometimes for virtual worlds.
        </p>
        <div className="flex gap-4">
          <a href="#projects" className="bg-blue-500 px-6 py-3 rounded">
            View My Work
          </a>
          <a href="#contact" className="border px-6 py-3 rounded">
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
}

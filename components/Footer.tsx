export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-base px-6 py-6 text-center font-mono text-[0.72rem] uppercase tracking-[0.12em] text-muted lg:fixed lg:right-0 lg:bottom-0 lg:left-0 lg:z-50 lg:flex lg:h-12 lg:items-center lg:justify-center lg:bg-bg lg:py-0">
      <p>RJ Macalino &middot; {year} &middot; Next.js, React &amp; TypeScript</p>
    </footer>
  );
}

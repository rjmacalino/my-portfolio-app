export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-base px-6 py-6 text-center font-mono text-[0.72rem] uppercase tracking-[0.12em] text-muted">
      <p>RJ Macalino &middot; {year} &middot; Next.js, React &amp; TypeScript</p>
    </footer>
  );
}

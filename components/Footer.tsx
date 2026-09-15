export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-center py-10 px-6 text-muted text-[0.85rem] border-t border-border-base">
      <p>
        Built by RJ Macalino &middot; {year} &middot; Next.js, React &amp;
        TypeScript
      </p>
    </footer>
  );
}

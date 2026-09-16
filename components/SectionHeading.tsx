export default function SectionHeading({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      id={`${id}-heading`}
      className="flex items-center gap-4 font-mono text-[0.7rem] font-bold uppercase tracking-[0.18em] text-muted"
    >
      {children}
      <span aria-hidden="true" className="h-px flex-1 bg-border-base" />
    </h2>
  );
}

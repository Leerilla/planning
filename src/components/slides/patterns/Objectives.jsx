export default function Objectives({
  eyebrow = '오늘 끝나면',
  items = [],
}) {
  return (
    <>
      {/* Eyebrow with accent — 1st stagger child */}
      <div className="flex items-center gap-3 mb-8">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          {eyebrow}
        </span>
      </div>

      {/* Items — each is its own stagger child */}
      {items.map((item, i) => (
        <div
          key={i}
          className="flex gap-6 items-start py-3 border-b border-bg-elevated last:border-b-0 group transition-colors hover:border-accent"
        >
          <span className="text-accent text-3xl font-bold tabular-nums tracking-wider w-12 shrink-0 mt-1 transition-transform group-hover:scale-110">
            {String(i + 1).padStart(2, '0')}
          </span>
          <span className="text-4xl text-text font-semibold tracking-tight leading-snug transition-colors group-hover:text-accent">
            {item}
          </span>
        </div>
      ))}
    </>
  );
}

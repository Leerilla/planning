export default function Cover({
  number,
  sessionNumber,
  eyebrow,
  title,
  subtitle,
  objectives,
  meta,
}) {
  const displayNumber = sessionNumber ?? number;
  const eyebrowText = eyebrow ?? (displayNumber ? `Section ${displayNumber}` : null);

  return (
    <>
      {/* Top accent + eyebrow — animated as 1st stagger child */}
      <div className="flex items-center gap-3 mb-6">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        {eyebrowText ? (
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            {eyebrowText}
          </span>
        ) : null}
      </div>

      {/* Title — 2nd stagger child */}
      <h1 className="text-7xl font-bold tracking-tight text-text leading-[1.05] max-w-5xl">
        {title}
      </h1>

      {/* Subtitle — 3rd stagger child */}
      {subtitle ? (
        <p className="text-2xl text-text-sub tracking-tight leading-relaxed max-w-4xl mt-4">
          {subtitle}
        </p>
      ) : null}

      {/* Objectives (numbered) — each item is its own stagger child group */}
      {objectives && objectives.length > 0 ? (
        <ul className="flex flex-col gap-4 mt-10 max-w-4xl">
          {objectives.map((item, i) => (
            <li key={i} className="flex gap-5 items-start group">
              <span className="text-accent text-2xl font-bold tabular-nums tracking-wider w-10 shrink-0 mt-1 transition-colors group-hover:text-text">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-2xl text-text font-medium leading-snug tracking-tight transition-colors">
                {item}
              </span>
            </li>
          ))}
        </ul>
      ) : null}

      {/* Meta footer (optional) */}
      {meta ? (
        <div className="flex gap-6 text-sm text-text-sub font-medium tracking-wider mt-auto pt-8">
          {meta.date ? <span>{meta.date}</span> : null}
          {meta.duration ? <span>{meta.duration}</span> : null}
          {meta.deck ? <span>{meta.deck}</span> : null}
        </div>
      ) : null}
    </>
  );
}

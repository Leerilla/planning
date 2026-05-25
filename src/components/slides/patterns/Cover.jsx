export default function Cover({
  number,
  sessionNumber,
  eyebrow,
  title,
  subtitle,
  objectives,
  meta,
  size, // 'sm' | undefined — 'sm'이면 title/subtitle/objectives 폰트 한 단계 축소 (S8 T18a)
}) {
  const displayNumber = sessionNumber ?? number;
  const eyebrowText = eyebrow ?? (displayNumber ? `Section ${displayNumber}` : null);
  const isSm = size === 'sm';
  const titleClass = isSm
    ? 'text-5xl font-bold tracking-tight text-text leading-[1.1] max-w-5xl'
    : 'text-7xl font-bold tracking-tight text-text leading-[1.05] max-w-5xl';
  const subtitleClass = isSm
    ? 'text-xl text-text-sub tracking-tight leading-relaxed max-w-4xl mt-3'
    : 'text-2xl text-text-sub tracking-tight leading-relaxed max-w-4xl mt-4';
  const objectivesGapClass = isSm ? 'flex flex-col gap-3 mt-7 max-w-4xl' : 'flex flex-col gap-4 mt-10 max-w-4xl';
  const objectivesNumClass = isSm
    ? 'text-accent text-lg font-bold tabular-nums tracking-wider w-8 shrink-0 mt-1 transition-colors group-hover:text-text'
    : 'text-accent text-2xl font-bold tabular-nums tracking-wider w-10 shrink-0 mt-1 transition-colors group-hover:text-text';
  const objectivesTextClass = isSm
    ? 'text-lg text-text font-medium leading-snug tracking-tight transition-colors'
    : 'text-2xl text-text font-medium leading-snug tracking-tight transition-colors';

  return (
    <>
      {/* Top accent + eyebrow — animated as 1st stagger child */}
      <div className={`flex items-center gap-3 ${isSm ? 'mb-4' : 'mb-6'}`}>
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        {eyebrowText ? (
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            {eyebrowText}
          </span>
        ) : null}
      </div>

      {/* Title — 2nd stagger child */}
      <h1 className={titleClass}>
        {title}
      </h1>

      {/* Subtitle — 3rd stagger child */}
      {subtitle ? (
        <p className={subtitleClass}>
          {subtitle}
        </p>
      ) : null}

      {/* Objectives (numbered) — each item is its own stagger child group */}
      {objectives && objectives.length > 0 ? (
        <ul className={objectivesGapClass}>
          {objectives.map((item, i) => (
            <li key={i} className="flex gap-5 items-start group">
              <span className={objectivesNumClass}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className={objectivesTextClass}>
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

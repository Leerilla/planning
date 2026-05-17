// PastVsPresent — 과거/현재 시간 대조 패턴 (D-040 D-038 신규 2026-05-11)
// neutral 좌우 비교 (Comparison.jsx의 bad/good 색상 의미 부적합)

export default function PastVsPresent({
  eyebrow,
  title,
  subtitle,
  past,        // { label?: "과거", statement: string, points: string[] }
  present,     // { label?: "현재", statement: string, points: string[] }
  tool,        // 핵심 도구 (string)
}) {
  return (
    <>
      {/* Eyebrow */}
      {eyebrow ? (
        <div className="flex items-center gap-3 mb-4">
          <span className="block w-10 h-[3px] bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            {eyebrow}
          </span>
        </div>
      ) : null}

      {/* Title + subtitle */}
      <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-2">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-base text-text-sub mb-8">{subtitle}</p>
      ) : <div className="mb-6" />}

      {/* Past vs Present grid-cols-2 */}
      <div className="grid grid-cols-2 gap-6 max-w-5xl">
        {/* 과거 */}
        <div className="rounded-2xl border border-divider bg-bg-soft p-6 flex flex-col gap-3">
          <span className="text-text-muted text-sm font-semibold tracking-wider uppercase">
            {past?.label ?? '과거'}
          </span>
          {past?.statement ? (
            <span className="text-xl font-bold text-text leading-snug">{past.statement}</span>
          ) : null}
          {past?.points && past.points.length > 0 ? (
            <ul className="flex flex-col gap-2 text-base text-text-sub">
              {past.points.map((p, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-text-muted mt-2 shrink-0" />
                  <span className={i === past.points.length - 1 ? 'font-semibold text-text' : ''}>{p}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {/* 현재 */}
        <div className="rounded-2xl border border-accent bg-success-soft p-6 flex flex-col gap-3">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            {present?.label ?? '현재'}
          </span>
          {present?.statement ? (
            <span className="text-xl font-bold text-text leading-snug">{present.statement}</span>
          ) : null}
          {present?.points && present.points.length > 0 ? (
            <ul className="flex flex-col gap-2 text-base text-text-sub">
              {present.points.map((p, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                  <span className={i === present.points.length - 1 ? 'font-semibold text-text' : ''}>{p}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>

      {/* 핵심 도구 footer */}
      {tool ? (
        <div className="border-l-4 border-accent pl-5 mt-6">
          <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-1">
            핵심 도구
          </div>
          <p className="text-base font-semibold text-text">{tool}</p>
        </div>
      ) : null}
    </>
  );
}

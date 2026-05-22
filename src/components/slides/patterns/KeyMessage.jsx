export default function KeyMessage({
  eyebrow,
  message,
  highlight,
  footer,
  subtext,
  examples,
  size, // 'sm' | undefined — 'sm'이면 타이틀 폰트 축소 (S4 #18/#21/#31 결함 보정)
}) {
  const renderMessage = () => {
    // message가 배열이면 각 라인을 분리해서 렌더 (Phase I — 강사 #4 라인 분리)
    if (Array.isArray(message)) {
      return (
        <>
          {message.map((line, i) => (
            <span key={i} className="block">
              {renderLine(line)}
            </span>
          ))}
        </>
      );
    }
    return renderLine(message);
  };

  const renderLine = (line) => {
    if (!highlight || !line?.includes(highlight)) {
      return line;
    }
    const idx = line.indexOf(highlight);
    const before = line.slice(0, idx);
    const after = line.slice(idx + highlight.length);
    return (
      <>
        {before}
        <span className="highlight-mark">{highlight}</span>
        {after}
      </>
    );
  };

  const messageFontSize =
    size === 'sm'
      ? 'clamp(28px, 4vw, 52px)'
      : subtext || (examples && examples.length)
        ? 'clamp(40px, 6vw, 80px)'
        : 'clamp(48px, 7vw, 96px)';

  return (
    <div className="flex flex-col gap-8 justify-center h-full">
      {eyebrow ? (
        <div className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          {eyebrow}
        </div>
      ) : null}

      <div
        className="font-bold tracking-tight text-text leading-[1.15]"
        style={{ fontSize: messageFontSize }}
      >
        {renderMessage()}
      </div>

      {footer ? (
        <div className="text-text-sub text-base font-medium tracking-tight leading-relaxed max-w-3xl">
          {footer}
        </div>
      ) : null}

      {subtext ? (
        <p className="text-lg font-medium text-text tracking-tight leading-relaxed max-w-3xl">
          {subtext}
        </p>
      ) : null}

      {examples && examples.length ? (
        <ul className="flex flex-col gap-3 max-w-3xl">
          {examples.map((ex, i) => {
            const isLabeled = typeof ex === 'object' && ex !== null;
            const label = isLabeled ? ex.label : null;
            const text = isLabeled ? ex.text : ex;
            const tone = isLabeled ? ex.tone : null;
            const labelToneClass =
              tone === 'bad'
                ? 'text-danger bg-bg-soft border border-danger'
                : tone === 'good'
                  ? 'text-success bg-success-soft border border-success'
                  : 'text-text-muted bg-bg-soft border border-divider';
            // grid로 라벨 폭 고정 — 강사 #3 (라벨/텍스트 라인 정렬)
            // label 부재 시 좁은 컬럼 + dot 좌측 정렬 (S1 request #7)
            const hasLabel = !!label;
            return (
              <li
                key={i}
                className={`grid ${hasLabel ? 'grid-cols-[180px_1fr] gap-4' : 'grid-cols-[16px_1fr] gap-2'} items-start text-base font-medium text-text tracking-tight`}
              >
                {label ? (
                  <span
                    className={`${labelToneClass} text-xs font-semibold tracking-wider uppercase rounded-xl px-3 h-7 flex items-center justify-center mt-0.5 whitespace-nowrap`}
                  >
                    {label}
                  </span>
                ) : (
                  <span className="flex justify-start items-center h-7 mt-0.5">
                    <span className="inline-block w-2 h-2 rounded-full bg-accent" />
                  </span>
                )}
                <span className="leading-relaxed pt-1">{text}</span>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

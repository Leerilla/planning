export default function Definition({
  term,
  title, // S2 호환 — title을 term으로 사용
  definition,
  note,
  notes, // Phase I — 강사 #14: note를 배열로 라인 분리 지원
  highlights, // Phase I — 강사 #13: definition 안의 핵심 단어 볼드 강조
  visualComponent, // 인터랙티브 또는 시각 요소 슬롯 (강사 #13 인터랙티브)
}) {
  const heading = term ?? title;
  // 텍스트에 highlights 적용 — 단어 볼드 (definition + notes 모두 적용)
  const applyHighlights = (text, keyPrefix = 'hl') => {
    if (!highlights || !highlights.length || !text) return text;
    let result = [text];
    highlights.forEach((word, wordIdx) => {
      result = result.flatMap((part) => {
        if (typeof part !== 'string') return [part];
        const parts = part.split(word);
        const out = [];
        parts.forEach((p, i) => {
          if (i > 0) {
            out.push(
              <strong key={`${keyPrefix}-${wordIdx}-${i}`} className="text-accent font-bold">
                {word}
              </strong>
            );
          }
          if (p) out.push(p);
        });
        return out;
      });
    });
    return result;
  };
  const renderDefinition = () => {
    // definition 배열 — 의미 단위 라인 분리 (D8 강사 결정)
    if (Array.isArray(definition)) {
      return (
        <>
          {definition.map((line, i) => (
            <span key={i} className="block">
              {applyHighlights(line, `def-${i}`)}
            </span>
          ))}
        </>
      );
    }
    return applyHighlights(definition, 'def');
  };

  // notes 배열 또는 단일 note 처리
  const noteLines = notes && notes.length ? notes : note ? [note] : [];

  return (
    <div className="flex flex-col gap-8 justify-center h-full max-w-5xl">
      <div className="flex items-baseline gap-4">
        <span className="text-accent text-sm font-semibold uppercase tracking-wider">
          DEFINITION
        </span>
        <span className="h-[1px] flex-1 bg-divider" />
      </div>

      <h2 className="text-5xl font-bold tracking-tight text-text leading-[1.05]">
        {heading}
      </h2>

      <div className="grid grid-cols-1 gap-8" style={{ gridTemplateColumns: visualComponent ? '1fr 1fr' : '1fr' }}>
        <div className="border-l-2 border-accent pl-6 flex flex-col gap-5">
          <p className="text-2xl text-text tracking-tight leading-snug font-medium">
            {renderDefinition()}
          </p>

          {noteLines.length > 0 ? (
            <ul className="flex flex-col gap-3">
              {noteLines.map((line, i) => (
                <li
                  key={i}
                  className="grid grid-cols-[16px_1fr] gap-3 items-start text-base text-text-sub tracking-tight font-medium leading-relaxed"
                >
                  <span className="shrink-0 inline-block w-2 h-2 rounded-full bg-accent mt-[10px]" />
                  <span className="whitespace-pre-line">{applyHighlights(line, `note-${i}`)}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {visualComponent ? (
          <div className="flex items-center justify-center">{visualComponent}</div>
        ) : null}
      </div>
    </div>
  );
}

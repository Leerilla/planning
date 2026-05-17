// Source: lectures/S1/lecture.md lines 428-439
// Type: example (2단계: 원문 확인 + 체크리스트 4)
// D-035: emoji 0건 (체크박스도 텍스트 처리)
// D-036: 시각 마커 — accent dot + grid 정렬
// D-040: inline checklist — group hover + 카운터

export default function S1TheoryC3Step2Original() {
  const items = [
    '페이지 제목이 AI가 인용한 글의 제목과 일치하는가',
    '출판일과 저자가 AI 답변과 일치하는가',
    'AI가 인용한 문장이 진짜 페이지에 들어 있는가',
    '그 문장의 맥락이 AI 답변에서 인용된 맥락과 일치하는가',
  ];

  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          출처 검증 3단계 · Step 2
        </span>
      </div>

      {/* Title */}
      <h2 className="text-5xl font-bold tracking-tight text-text leading-[1.1] mb-4">
        원문 확인
      </h2>

      {/* Lead */}
      <p className="text-xl font-medium text-text-sub tracking-tight leading-relaxed mb-6 max-w-4xl">
        링크가 열린 페이지가 진짜 AI가 인용한 내용을 담고 있는지 점검한다.
      </p>

      {/* 핵심 한 줄 */}
      <div className="border-l-4 border-warning pl-5 mb-6 max-w-5xl">
        <p className="text-lg font-bold text-text leading-relaxed">
          페이지가 열렸다고 통과가 아니다.
          <span className="block text-base font-medium text-text-sub mt-1">
            페이지의 내용이 AI 답변과 일치해야 통과이다.
          </span>
        </p>
      </div>

      {/* 점검 항목 4가지 */}
      <div className="mb-3">
        <div className="text-accent text-xs font-semibold tracking-wider uppercase mb-3">
          점검 항목 4가지
        </div>
      </div>
      <ul className="flex flex-col gap-3 max-w-5xl">
        {items.map((item, i) => (
          <li
            key={i}
            className="grid grid-cols-[36px_32px_1fr] gap-3 items-start group p-3 rounded-xl border border-divider hover:border-accent hover:bg-bg-soft transition-colors"
          >
            <span className="text-accent text-base font-bold tabular-nums tracking-wider mt-1 transition-colors group-hover:text-text">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="flex items-center justify-center w-8 h-8 rounded-xl border-2 border-accent bg-bg-soft mt-0.5">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-accent" />
            </span>
            <span className="text-base font-medium text-text tracking-tight leading-relaxed pt-1">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

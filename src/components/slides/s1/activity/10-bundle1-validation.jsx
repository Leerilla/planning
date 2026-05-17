// Source: lectures/S1/lecture.md lines 706-714
// Type: example (검증 기준 — 7 체크리스트)
// D-035: emoji "✅" 제거 → 텍스트 "검증 기준"
// D-040: checklist = numbered + 체크박스 dot (s35/s36 동형)

export default function S1ActivityBundle1Validation() {
  const items = [
    '아이디어를 한 줄로 말할 수 있는가 (누구·상황·문제 셋 다 들어감)',
    '"왜 지금/왜 내가" 적합성 점검을 통과했는가',
    '5 Whys를 최소 3번 적용해 진짜 문제를 좁혔는가',
    'AI 리서치 답변에서 출처 URL 1개 이상을 직접 클릭했는가',
    '클릭한 페이지가 진짜 AI 답변 내용을 담고 있었는가',
    '검증된 정보와 검증 안 된 정보를 구분해 분류했는가',
    '(있다면) 거짓 발견 메모가 있는가',
  ];

  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-success rounded-full" />
        <span className="text-success text-sm font-semibold tracking-wider uppercase">
          활동 묶음 1 · 검증 기준
        </span>
      </div>

      {/* Title */}
      <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-1">
        다음 묶음 진입 가능한가
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        7개 항목 중 5개 이상 통과 시 활동 묶음 2로 진입 가능.
      </p>

      {/* 7 체크리스트 — 2-column */}
      <ul className="grid grid-cols-2 gap-2 max-w-5xl">
        {items.map((item, i) => (
          <li
            key={i}
            className="grid grid-cols-[36px_28px_1fr] gap-2 items-start group p-2.5 rounded-xl border border-divider hover:border-success hover:bg-success-soft transition-colors"
          >
            <span className="text-accent text-sm font-bold tabular-nums tracking-wider mt-0.5 transition-colors group-hover:text-success">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="flex items-center justify-center w-6 h-6 rounded-xl border-2 border-accent bg-bg-soft group-hover:border-success mt-0.5 transition-colors">
              <span className="inline-block w-2 h-2 rounded-full bg-accent group-hover:bg-success transition-colors" />
            </span>
            <span className="text-sm font-medium text-text tracking-tight leading-snug pt-0.5">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

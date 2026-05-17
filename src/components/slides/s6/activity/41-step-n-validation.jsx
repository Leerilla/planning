// Source: lectures/S6/lecture.md lines 1190-1200 (#### N-4. 검증 기준)
// Type: activity (checklist with 4 items)
// Profile: hierarchical / comparison / medium-high / balanced
// Emphasis: outro (Step N 검증 + 미니 사이클/sprint 종료)

export default function S6ActivityStepNValidation() {
  const items = [
    '산출물 7개가 모두 손에 있는가',
    '/cost 비교를 메모했는가',
    '회고 3개 질문에 모두 답했는가',
    '다음 학습 단계 진입 준비가 됐는가',
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 N · 검증
        </span>
      </div>

      <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-1">
        Step N 검증 기준
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-8 max-w-4xl">
        다음 4개 항목 모두 통과 시 학습 단계 완료
      </p>

      <div className="flex flex-col gap-4 max-w-3xl">
        {items.map((item, idx) => (
          <label
            key={idx}
            className="flex items-start gap-4 p-5 border border-divider bg-bg-soft rounded-md cursor-pointer hover:bg-bg-soft/70 transition-colors"
          >
            <input
              type="checkbox"
              className="w-5 h-5 mt-1 cursor-pointer accent-accent shrink-0"
            />
            <span className="text-base font-medium text-text leading-relaxed">
              {item}
            </span>
          </label>
        ))}
      </div>

      <div className="mt-8 max-w-4xl">
        <p className="text-xs font-medium text-text-sub leading-relaxed">
          <span className="font-bold text-text">메타 메시지:</span> Step 0~Step 5까지 5주간 자동화의 본질을 경험했다. 그 경험은 이후 학생의 모든 프로젝트에 적용될 원칙이다.
        </p>
      </div>
    </>
  );
}

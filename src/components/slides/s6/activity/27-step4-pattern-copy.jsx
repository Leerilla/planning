// Source: lectures/S6/lecture.md lines 1048-1055 (#### 4-4. Issue #3, #4 동일 패턴)
// Type: comparison (2-row table) + 패턴 복사 구체 가이드
// Profile: hierarchical / comparison / medium-high / balanced
// Emphasis: definition (패턴 복사 일관성)
// S6 T12 (2026-05-24): 강사 요구 — "확장 / 패턴 복사"가 어떤 패턴을 복사하는지 가이드 추가
//                      이전 Task 명령 4요소(Issue 참조 / docs 인용 / 화면-Task 매핑 / 자동화 트리거) 명시

export default function S6ActivityStep4PatternCopy() {
  const rows = [
    {
      label: 'Issue #3',
      content: '키워드 입력 검증',
    },
    {
      label: 'Issue #4',
      content: '입력 화면 라우팅',
    },
  ];

  const patternParts = [
    { fixed: 'Issue # 번호 + 제목 인용', change: '#2 → #3, #4 (번호만 교체)' },
    { fixed: 'docs/prd.md + docs/screen-*.png 참조', change: '동일 경로 그대로' },
    { fixed: '화면-Task 매핑 명시', change: '대상 Task 설명만 교체' },
    { fixed: 'PostToolUse + Stop hook 자동 트리거', change: '추가 명령 없음 (자동 동작)' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-3">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 4-4 · 비교
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        4-4. Issue #3, #4 동일 패턴
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-4 max-w-4xl">
        같은 흐름으로 진행. 빌드 명령이 90% 같은 양식.
      </p>

      <div className="grid grid-cols-[1fr_1.6fr] gap-5 max-w-6xl items-stretch">
        {/* 좌: 대상 Task */}
        <div className="flex flex-col gap-3">
          {rows.map((row, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-1 p-4 border border-divider bg-bg-soft rounded"
            >
              <div className="text-xs font-bold text-accent uppercase tracking-wider">
                {row.label}
              </div>
              <div className="text-sm font-medium text-text leading-snug">
                {row.content}
              </div>
            </div>
          ))}
        </div>

        {/* 우: 패턴 복사 구체 가이드 — "어떤 패턴을 복사하는가" */}
        <div className="border border-divider rounded overflow-hidden">
          <div className="bg-bg-soft border-b border-divider px-4 py-2">
            <p className="text-xs font-semibold text-text-sub tracking-wider uppercase">복사 대상 — 빌드 명령 4요소</p>
          </div>
          <div className="bg-bg-soft px-4 py-3 flex flex-col gap-2">
            {patternParts.map((p, i) => (
              <div key={i} className="grid grid-cols-[1.2fr_1fr] gap-3 items-start text-xs">
                <span className="text-text font-semibold leading-snug">{p.fixed}</span>
                <span className="text-text-sub leading-snug">{p.change}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 max-w-6xl border-l-4 border-accent bg-bg-soft px-5 py-3 rounded-r">
        <p className="text-sm font-medium text-text">
          이전 Task의 명령 양식을 <span className="font-bold text-accent">90% 복사</span> + Issue 번호와 Task 설명만 교체.
        </p>
      </div>
    </>
  );
}

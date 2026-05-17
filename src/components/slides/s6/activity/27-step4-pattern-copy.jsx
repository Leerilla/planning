// Source: lectures/S6/lecture.md lines 1048-1055 (#### 4-4. Issue #3, #4 동일 패턴)
// Type: comparison (2-row table)
// Profile: hierarchical / comparison / medium-high / balanced
// Emphasis: definition (패턴 복사 일관성)

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

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 4-4 · 비교
        </span>
      </div>

      <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-1">
        4-4. Issue #3, #4 동일 패턴
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-8 max-w-4xl">
        같은 흐름으로 진행. 빌드 명령이 90% 같은 양식
      </p>

      <div className="grid grid-cols-2 gap-6 max-w-4xl">
        {rows.map((row, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-3 p-6 border border-divider bg-bg-soft rounded-md"
          >
            <div className="text-sm font-bold text-accent uppercase tracking-wider">
              {row.label}
            </div>
            <div className="text-base font-medium text-text leading-relaxed">
              {row.content}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 max-w-4xl border-l-4 border-accent bg-bg-soft px-7 py-5 rounded-r-md">
        <p className="text-sm font-medium text-text mb-2">
          이전 Task의 명령 양식을 <span className="font-bold">90% 복사</span>해서 진행한다.
        </p>
        <p className="text-xs font-medium text-text-sub leading-relaxed">
          자동화 흐름은 모든 Task에 동일하게 적용된다. 패턴을 인식하면, 반복 작업의 시간을 크게 줄일 수 있다.
        </p>
      </div>
    </>
  );
}

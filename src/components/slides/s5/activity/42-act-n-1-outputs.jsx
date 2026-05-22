// Source: lectures/S5/lecture.md lines 927-936 (N-1 산출물 정리 6개)
// Type: activity (6-card)

export default function S5Activity_N_1_Outputs() {
  const outputs = [
    { n: '1', title: '새 docs/tasks.md (화면 단위)', next: '다음 Task 진행 기준' },
    { n: '2', title: 'GitHub Issue 10개', next: '작업 추적' },
    { n: '3', title: 'Stitch 시안 (화면 1)', next: '빌드 참조' },
    { n: '4', title: '카피 입력 폼 컴포넌트', next: '동작하는 첫 화면' },
    { n: '5', title: '첫 PR 병합', next: '워크플로 완성' },
    { n: '6', title: '빌드 명령 메모', next: '다음 Task 재사용' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 N-1 · 산출물: 6개 정리 완료
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        산출물 정리 — 6개
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        다음 단계 활용처 명시.
      </p>

      <div className="grid grid-cols-3 gap-3 max-w-6xl">
        {outputs.map((o, i) => (
          <div key={i} className="border border-divider rounded p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded border border-accent text-accent text-xs font-bold tabular-nums">
                {o.n}
              </span>
              <span className="text-sm font-bold text-text leading-snug flex-1">{o.title}</span>
            </div>
            <p className="text-xs text-text-sub leading-relaxed border-l-2 border-accent pl-2">
              {o.next}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

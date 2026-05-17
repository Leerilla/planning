// Source: lectures/S4/lecture.md lines 948-961 (N-1 산출물 정리 6-row)
// Type: activity (6-card)

export default function S4Activity_N_1_Summary() {
  const items = [
    { n: '1', name: 'CLAUDE.md (검증 통과)', use: '자동 컨텍스트' },
    { n: '2', name: '.claude/settings.json', use: 'Permissions' },
    { n: '3', name: 'docs/ (3개 파일)', use: '시스템 설계 참조' },
    { n: '4', name: 'rules/ (3개 파일)', use: '코딩 규칙' },
    { n: '5', name: '.gitignore', use: '버전 관리' },
    { n: '6', name: 'GitHub 저장소 + 초기 커밋', use: '다음 단계 입력' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 N-1 · 산출물 6개 매핑
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        결과 정리 — 산출물 × 다음 단계 활용처
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-6 max-w-4xl">
        6개 산출물이 모두 손에 있어야 다음 세션(자료 5)으로 자신 있게 넘어간다.
      </p>

      <div className="grid grid-cols-3 gap-3 max-w-6xl">
        {items.map((it, i) => (
          <div key={i} className="border border-line rounded p-4">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-2xl font-bold text-accent leading-none">{it.n}</span>
              <span className="text-sm font-bold text-text leading-snug">{it.name}</span>
            </div>
            <div className="text-[10px] uppercase tracking-wider text-text-sub mb-1">
              활용
            </div>
            <div className="text-xs text-text-sub leading-relaxed">{it.use}</div>
          </div>
        ))}
      </div>
    </>
  );
}

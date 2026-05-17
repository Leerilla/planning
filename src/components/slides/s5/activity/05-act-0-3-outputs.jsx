// Source: lectures/S5/lecture.md lines 455-467 (0-3 자료 4 산출물 점검)
// Type: activity (5-card check)

export default function S5Activity_0_3_Outputs() {
  const items = [
    { n: '1', name: 'CLAUDE.md (검증 통과)', check: '있는가' },
    { n: '2', name: 'docs/ (prd, persona, painpoints)', check: '3개 파일 있는가' },
    { n: '3', name: 'rules/ (3개 파일)', check: '있는가' },
    { n: '4', name: '.claude/settings.json', check: '있는가' },
    { n: '5', name: 'GitHub 저장소 + 초기 커밋', check: '푸시됐는가' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 0-3 · 산출물: 자료 4 점검 5개
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        자료 4 산출물 점검 (D-044 §3.5/§3.6/§3.7)
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        비어 있는 항목 발견 시 <span className="highlight-mark">자료 4 해당 Step으로 회귀</span> 후 본 단계 진입.
      </p>

      <div className="space-y-2 max-w-5xl">
        {items.map((i, idx) => (
          <div
            key={idx}
            className="grid grid-cols-[40px_1fr_140px] gap-3 items-center p-3 border border-line rounded"
          >
            <span className="text-accent text-base font-bold tabular-nums">
              {String(idx + 1).padStart(2, '0')}
            </span>
            <span className="text-base text-text leading-snug">{i.name}</span>
            <span className="text-sm text-text-sub border-l-2 border-accent pl-3">
              {i.check}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

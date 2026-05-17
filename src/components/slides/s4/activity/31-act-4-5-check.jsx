// Source: lectures/S4/lecture.md lines 928-935 (4-5 커밋 확인 점검 4 항목)
// Type: activity (checklist)
// D-035: lecture.md ✓ → "OK" 텍스트

export default function S4Activity_4_5_Check() {
  const items = [
    'CLAUDE.md 저장소에 보임',
    'docs/, rules/ 폴더 보임',
    '.claude/settings.json 보임',
    '커밋 메시지가 [type] description 형식',
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 4-5 · 산출물: GitHub 저장소 4 항목 통과
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        커밋 확인 점검
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        GitHub 웹에서 직접 확인 — 4개 항목 모두 통과.
      </p>

      <div className="space-y-3 max-w-3xl">
        {items.map((c, i) => (
          <div
            key={i}
            className="flex items-center gap-4 border border-line rounded px-5 py-3.5"
          >
            <span className="text-accent font-bold text-base shrink-0 w-8">OK</span>
            <span className="text-base text-text leading-relaxed">{c}</span>
          </div>
        ))}
      </div>
    </>
  );
}

// Source: lectures/S8/captures/lecture.md L473-486 (#### 키 노출 시 대응)
// Type: process
// D-050: 원문 보존 / D-052: 4-row table
// S8 T19b (2026-05-25): 강사 요구 — 높이 축소 / 밀집도 강화

export default function S8TheoryC3KeyLeak() {
  const steps = [
    '즉시 키 회수 (OpenAI 대시보드에서 삭제)',
    '새 키 발급',
    'git 히스토리에서 제거 (git filter-branch 등)',
    '환경 변수로 재설정',
  ];

  return (
    <div className="flex flex-col gap-3 justify-center h-full max-w-4xl">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
          <span className="text-white font-bold text-base">3</span>
        </div>
        <span className="text-text-sub font-semibold text-xs uppercase tracking-wider">
          이론 3 · 키 노출 대응
        </span>
      </div>

      <h2 className="text-2xl font-bold text-text leading-snug">
        키 노출 시 대응
      </h2>

      <p className="text-sm text-text-sub leading-snug">
        만약 실수로 GitHub에 키를 푸시했다면
      </p>

      <div className="max-w-4xl overflow-hidden rounded-xl border border-divider">
        <div className="grid grid-cols-[70px_1fr] bg-bg-soft px-4 py-2 border-b-2 border-divider">
          <div className="text-xs font-bold text-text-muted uppercase tracking-wide">단계</div>
          <div className="text-xs font-bold text-text-muted uppercase tracking-wide">작업</div>
        </div>

        {steps.map((label, idx) => (
          <div
            key={idx}
            className={`grid grid-cols-[70px_1fr] px-4 py-2 ${idx < steps.length - 1 ? 'border-b border-divider' : ''}`}
          >
            <div className="text-xs text-accent font-bold text-center">{idx + 1}</div>
            <div className="text-xs text-text leading-snug">{label}</div>
          </div>
        ))}
      </div>

      <aside className="border-l-4 border-warning bg-warning-soft rounded-r-xl px-4 py-2.5 max-w-4xl">
        <p className="text-xs text-text leading-snug">
          GitHub은 공개 push 후 봇이 수초 안에 키 탐지. 키 삭제는 분 단위로 빠를수록 안전.
        </p>
      </aside>
    </div>
  );
}

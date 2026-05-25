// Source: lectures/S5/lecture.md lines 715-730 (2-2 라벨 확인)
// Type: activity (diagram 4 step)
// T16k (2026-05-24): eyebrow "활동 2-2" → "활동 3-5" (S5 재기획: GitHub 이슈 등록이 Step 3으로 분리)

export default function S5Activity_2_2_Label() {
  const steps = [
    'Issue 페이지 열기',
    '라벨 필터에서 screen-1 선택',
    '4개 Issue 표시 확인',
    'screen-2 라벨로 6개 Issue 표시 확인',
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 3-5 · 산출물: 화면 라벨 필터링 확인
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        라벨 확인 (4 step)
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        라벨로 필터링하면 <span className="highlight-mark">화면 단위로 Task를 모아 볼 수 있다</span>.
      </p>

      <div className="space-y-3 max-w-4xl">
        {steps.map((s, i) => (
          <div key={i} className="flex items-center gap-4">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl border-2 border-accent text-accent text-base font-bold tabular-nums shrink-0">
              {i + 1}
            </span>
            <div className="flex-1 border-l-2 border-accent bg-bg-soft p-3">
              <p className="text-base text-text leading-relaxed">{s}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

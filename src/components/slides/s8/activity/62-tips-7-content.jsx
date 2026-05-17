// Source: lectures/S8/captures/lecture.md L1715-1721 (#### 세 도구 데이터가 종합되어야 결정)
// Type: Concept (1 big card + 3 bullets)
// D-050: lecture.md 원문 보존 / D-054: Sentry/Clarity/이벤트 추적 strong emphasis

export default function S8ActivityTip7Content() {
  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-accent font-bold text-sm uppercase tracking-widest">
          활동 Tip 7 · 의사결정 흐름
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-text mb-6">의사결정 흐름 팁</h2>

      {/* Big Card */}
      <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-6 py-5 max-w-4xl">
        <div className="text-accent font-bold text-base mb-3">세 도구 데이터가 종합되어야 결정</div>

        {/* 3 Bullets */}
        <div className="flex flex-col gap-2">
          <div className="flex items-start gap-3 p-3 border border-divider bg-bg rounded-xl">
            <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
            <div className="text-base text-text">
              <strong>Sentry</strong> → 버그 수정
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 border border-divider bg-bg rounded-xl">
            <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
            <div className="text-base text-text">
              <strong>Clarity</strong> → UX 개선
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 border border-divider bg-bg rounded-xl">
            <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
            <div className="text-base text-text">
              <strong>이벤트 추적</strong> → PRD 갱신
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-3 text-sm text-text-sub">
          각각 다른 의사결정 영역. 한 보고로 모든 결정 X.
        </p>
      </div>
    </div>
  );
}

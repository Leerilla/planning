// Source: lectures/S8/captures/lecture.md Step N-1 산출물 정리 (L1583-1592)
// Type: Comparison (6-row 3-col table)
// D-050: 원문 100% + lecture_range [1583, 1592]
// D-054: Vercel, Railway inline code + accent

export default function S8ActivityStepNOutputs() {
  return (
    <>
      {/* Header marker */}
        <div className="h-1 w-12 bg-accent rounded-full mb-3" />
        <p className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-6">
          활동 N-1 · 산출물 정리
        </p>

        {/* Title and subtitle */}
        <h1 className="text-3xl font-bold text-text mb-2">
          N-1. 산출물 정리
        </h1>
        <p className="text-base text-text-sub mb-6 max-w-4xl">
          본 학습의 6개 산출물 + 다음 단계 활용
        </p>

        {/* Table */}
        <div className="max-w-5xl overflow-hidden rounded-xl border border-divider">
          {/* Header row */}
          <div className="grid grid-cols-[60px_1fr_1fr] bg-bg-soft px-5 py-3 border-b-2 border-divider">
            <div className="flex items-center justify-center">
              <span className="text-sm font-bold text-text-muted uppercase tracking-wide">#</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-bold text-text-muted uppercase tracking-wide">산출물</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-bold text-text-muted uppercase tracking-wide">다음 단계 활용</span>
            </div>
          </div>

          {/* Row 1: FE URL */}
          <div className="grid grid-cols-[60px_1fr_1fr] px-5 py-4 border-b border-divider">
            <div className="flex items-center justify-center">
              <span className="text-accent font-bold">1</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold text-text">공개 FE URL (<code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">Vercel</code>)</span>
            </div>
            <div className="flex items-center">
              <span className="text-text-sub">사용자 노출</span>
            </div>
          </div>

          {/* Row 2: BE URL */}
          <div className="grid grid-cols-[60px_1fr_1fr] px-5 py-4 border-b border-divider">
            <div className="flex items-center justify-center">
              <span className="text-accent font-bold">2</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold text-text">공개 BE URL (<code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">Railway</code>)</span>
            </div>
            <div className="flex items-center">
              <span className="text-text-sub">API 처리</span>
            </div>
          </div>

          {/* Row 3: CORS */}
          <div className="grid grid-cols-[60px_1fr_1fr] px-5 py-4 border-b border-divider">
            <div className="flex items-center justify-center">
              <span className="text-accent font-bold">3</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold text-text">CORS 해결과 환경 변수 셋업</span>
            </div>
            <div className="flex items-center">
              <span className="text-text-sub">안정 운영</span>
            </div>
          </div>

          {/* Row 4: Clarity */}
          <div className="grid grid-cols-[60px_1fr_1fr] px-5 py-4 border-b border-divider">
            <div className="flex items-center justify-center">
              <span className="text-accent font-bold">4</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold text-text">Microsoft Clarity 추적</span>
            </div>
            <div className="flex items-center">
              <span className="text-text-sub">UX 가설 검증</span>
            </div>
          </div>

          {/* Row 5: Sentry */}
          <div className="grid grid-cols-[60px_1fr_1fr] px-5 py-4 border-b border-divider">
            <div className="flex items-center justify-center">
              <span className="text-accent font-bold">5</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold text-text">Sentry 에러 트래킹</span>
            </div>
            <div className="flex items-center">
              <span className="text-text-sub">품질 안전망</span>
            </div>
          </div>

          {/* Row 6: Events */}
          <div className="grid grid-cols-[60px_1fr_1fr] px-5 py-4">
            <div className="flex items-center justify-center">
              <span className="text-accent font-bold">6</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold text-text">이벤트 추적 코드 3개</span>
            </div>
            <div className="flex items-center">
              <span className="text-text-sub">PRD 가설 검증</span>
            </div>
          </div>
        </div>
    </>
  );
}

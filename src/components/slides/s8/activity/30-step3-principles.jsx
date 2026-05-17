// Source: lectures/S8/captures/lecture.md L1369-1375
// Type: Comparison (3-2: 명령 점검 3원칙)

export default function S8ActivityStep3Principles() {
  return (
    <>
      {/* Header marker */}
        <div className="h-1 w-12 bg-accent rounded-full mb-3" />
        <p className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-6">
          활동 3-2 · 3원칙 점검
        </p>

        {/* Title and subtitle */}
        <h1 className="text-3xl font-bold text-text mb-2">
          명령 점검: 3원칙
        </h1>
        <p className="text-base text-text-sub mb-4 max-w-5xl">
          자율 디버깅 3원칙이 명령에 모두 반영됐는지 확인
        </p>

        {/* Table */}
        <div className="max-w-5xl overflow-hidden rounded-xl border border-divider">
          {/* Table Header */}
          <div className="grid grid-cols-[180px_1fr] bg-bg-soft px-5 py-3 border-b-2 border-divider">
            <p className="text-sm font-bold text-text-muted uppercase tracking-wide">
              원칙
            </p>
            <p className="text-sm font-bold text-text-muted uppercase tracking-wide">
              적용 위치
            </p>
          </div>

          {/* Row 1 */}
          <div className="grid grid-cols-[180px_1fr] px-5 py-4 border-b border-divider">
            <p className="font-bold text-text">
              1. 에러 그대로
            </p>
            <p className="text-text">
              <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">
                "에러 풀 메시지 그대로 붙여넣기"
              </code>
            </p>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-[180px_1fr] px-5 py-4 border-b border-divider">
            <p className="font-bold text-text">
              2. 분석 먼저
            </p>
            <p className="text-text">
              <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">
                "분석해주세요"
              </code>
              + 수정 명령
            </p>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-[180px_1fr] px-5 py-4">
            <p className="font-bold text-text">
              3. 결과 검증
            </p>
            <p className="text-text">
              <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">
                "다른 도메인 차단 확인 + 동작 확인"
              </code>
            </p>
          </div>
        </div>
    </>
  );
}

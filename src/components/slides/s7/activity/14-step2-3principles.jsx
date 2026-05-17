// Source: lectures/S7/lecture.md L649-656 (2-1 명령 점검: 3원칙)
// Type: comparison (3-row 2-col table)

export default function S7Activity_2_1_3Principles() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 2-1 · 3원칙 점검
        </span>
      </div>

      <h2 className="text-3xl font-bold text-text mb-6">
        명령 점검: 3원칙
      </h2>

      <div className="max-w-4xl overflow-hidden rounded-xl border border-divider">
        {/* Header */}
        <div className="grid grid-cols-[1fr_2fr] bg-bg-soft px-5 py-3 border-b border-divider">
          <div className="text-xs font-bold text-text-muted uppercase tracking-wide">
            원칙
          </div>
          <div className="text-xs font-bold text-text-muted uppercase tracking-wide">
            적용 위치
          </div>
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-[1fr_2fr] px-5 py-3 border-b border-divider">
          <div className="text-base font-bold text-text">
            1. 에러 그대로
          </div>
          <div className="text-sm text-text">
            <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">
              "전체 메시지를 그대로 붙여넣기"
            </code>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-[1fr_2fr] px-5 py-3 border-b border-divider">
          <div className="text-base font-bold text-text">
            2. 분석 먼저
          </div>
          <div className="text-sm text-text">
            <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">
              "분석한 뒤, 수정 방안 제시하고 적용"
            </code>
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-[1fr_2fr] px-5 py-3">
          <div className="text-base font-bold text-text">
            3. 결과 검증
          </div>
          <div className="text-sm text-text">
            <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">
              "재실행해 통과 여부 확인"
            </code>
          </div>
        </div>
      </div>
    </>
  );
}

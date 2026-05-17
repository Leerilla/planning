// Source: lectures/S7/lecture.md L808-815 (3-4. 검증 우선주의 적용)
// Type: comparison (inline JSX — 3-row 2-col table)

export default function S7Activity_3_3_Priority() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 3-3 · 검증 우선주의
        </span>
      </div>

      <h2 className="text-3xl font-bold text-text mb-2">
        3-3. 검증 우선주의 적용
      </h2>

      <p className="text-base text-text-sub mb-4">
        sub-agent 보고도 AI 산출물 — 작업자 본인 검증 필수
      </p>

      <div className="overflow-hidden rounded-xl border border-divider max-w-4xl">
        {/* Header */}
        <div className="grid grid-cols-[1fr_2fr] bg-bg-soft px-5 py-3 border-b border-divider">
          <div className="text-xs font-bold text-text-muted uppercase tracking-wide">
            점검 항목
          </div>
          <div className="text-xs font-bold text-text-muted uppercase tracking-wide">
            방법
          </div>
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-[1fr_2fr] px-5 py-3 border-b border-divider">
          <div className="font-bold text-text">막힘 지점 진위</div>
          <div className="text-text">보고서가 가리킨 파일·줄 직접 확인</div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-[1fr_2fr] px-5 py-3 border-b border-divider">
          <div className="font-bold text-text">수정 제안 적절성</div>
          <div className="text-text">
            <code className="text-accent font-semibold bg-bg px-1.5 py-0.5 rounded text-sm">
              docs/prd.md
            </code>
            와 본인이 대조
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-[1fr_2fr] px-5 py-3">
          <div className="font-bold text-text">자동 신뢰 금지</div>
          <div className="text-text">sub-agent 보고도 AI 산출물</div>
        </div>
      </div>
    </>
  );
}

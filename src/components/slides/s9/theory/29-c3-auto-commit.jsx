// Source: lectures/S9/lecture.md L323-339 (#### 자동 커밋의 갱신 근거, example + code + 근거 카드)
// Type: ExampleSlide
// Pattern: 시나리오 + 자동 커밋 메시지 + 근거 데이터
// Profile: hierarchical + process visual + balanced tone
// D-051: pre 폰트 text-sm ≥ text-xs ✓
// D-053: git-committer 자료 6 회상 명시
// D-050: 자료 6 git-committer + Clarity 데이터 원문 보존

export default function S9TheoryC3AutoCommit() {
  return (
    <>
      <div className="flex flex-col gap-4 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            이론 3 · 자동 커밋 근거
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          자동 커밋의 갱신 근거
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-4 max-w-5xl">
          자료 6의 git-committer sub-agent가 자동 커밋 — 근거를 메시지에 명시
        </p>

        {/* Scenario */}
        <p className="text-base text-text-sub mb-4 max-w-5xl">
          git-committer sub-agent (자료 6에서 누적) → 갱신 근거를 메시지에 자동 명시
        </p>

        {/* Pre block with code */}
        <pre className="bg-bg-soft border border-divider rounded-xl p-4 mb-4 text-sm leading-relaxed max-w-4xl whitespace-pre-line">
{`refactor: persona·prd 갱신 — Clarity 데이터 기반
 키워드 가변 입력으로 변경`}
        </pre>

        {/* Reason card */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4 max-w-5xl">
          <div className="text-accent font-bold text-xs uppercase tracking-widest mb-3">
            근거 데이터
          </div>
          <div className="flex flex-col gap-2 text-sm text-text-sub">
            <div>• Clarity 세션 8건 중 6건이 키워드 3개만 입력</div>
            <div>• 응답 2건이 "5개는 부담"으로 언급</div>
          </div>
        </div>

        {/* Aside note — request.md 양식 적용 */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-2xl px-6 py-4 max-w-4xl mt-6">
          <p className="text-sm text-text leading-relaxed">
            작업자가 갱신 근거를 데이터로 명시한 커밋이 GitHub에 남는다.
          </p>
        </div>
      </div>
    </>
  );
}

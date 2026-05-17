// Source: lectures/S8/captures/lecture.md L1024-1037 (#### 0-6. 토큰 베이스라인 + Step 0 검증 기준)
// Type: Activity (6 checklist + /cost baseline)

export default function S8ActivityStep0Validation() {
  return (
    <div className="flex flex-col gap-8 h-full justify-center">
      {/* Header */}
      <div className="flex items-baseline gap-3">
        <span className="h-1 w-12 bg-accent rounded-full" />
        <span className="text-accent font-bold text-sm uppercase tracking-widest">
          활동 0-6 + 검증 · 토큰 베이스라인 + Step 0 통과
        </span>
      </div>

      {/* Title */}
      <h2 className="text-4xl font-bold text-text">0-6. 토큰 베이스라인 + Step 0 검증</h2>

      {/* Subtitle */}
      <p className="text-base text-text-sub max-w-4xl leading-relaxed">
        6개 항목 모두 통과 시 Step 1 (Railway BE 배포) 진입
      </p>

      {/* 토큰 베이스라인 섹션 */}
      <div>
        <h3 className="text-base font-semibold text-text-sub mb-3">0-6. 토큰 베이스라인</h3>
        <pre className="bg-bg-soft border border-divider rounded-xl p-3 text-sm whitespace-pre-line max-w-3xl text-text mb-5">
{`/cost`}
        </pre>
      </div>

      {/* 검증 기준 섹션 */}
      <div>
        <h3 className="text-base font-semibold text-text-sub mb-3">Step 0 검증 기준 (6항목)</h3>

        {/* 6 checklist items */}
        <div className="flex flex-col gap-2 max-w-5xl">
          {/* Checklist 1 */}
          <div className="flex items-start gap-3 p-3 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 mt-0.5 border-2 border-divider rounded-xl shrink-0" />
            <span className="text-sm text-text leading-relaxed">
              <code className="text-accent font-semibold bg-bg px-1 py-0.5 rounded text-xs">planning_project</code> 폴더에서 작업 중인가
            </span>
          </div>

          {/* Checklist 2 */}
          <div className="flex items-start gap-3 p-3 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 mt-0.5 border-2 border-divider rounded-xl shrink-0" />
            <span className="text-sm text-text leading-relaxed">
              BE 코드(<code className="text-accent font-semibold bg-bg px-1 py-0.5 rounded text-xs">server/</code>)가 있는가
            </span>
          </div>

          {/* Checklist 3 */}
          <div className="flex items-start gap-3 p-3 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 mt-0.5 border-2 border-divider rounded-xl shrink-0" />
            <span className="text-sm text-text leading-relaxed">
              리포 구조가 결정됐는가 (옵션 A 권장)
            </span>
          </div>

          {/* Checklist 4 */}
          <div className="flex items-start gap-3 p-3 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 mt-0.5 border-2 border-divider rounded-xl shrink-0" />
            <span className="text-sm text-text leading-relaxed">
              BE 코드가 <code className="text-accent font-semibold bg-bg px-1 py-0.5 rounded text-xs">process.env.PORT</code> 사용하는가
            </span>
          </div>

          {/* Checklist 5 */}
          <div className="flex items-start gap-3 p-3 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 mt-0.5 border-2 border-divider rounded-xl shrink-0" />
            <span className="text-sm text-text leading-relaxed">
              <code className="text-accent font-semibold bg-bg px-1 py-0.5 rounded text-xs">.gitignore</code>에 <code className="text-accent font-semibold bg-bg px-1 py-0.5 rounded text-xs">.env*</code>가 명시됐는가
            </span>
          </div>

          {/* Checklist 6 */}
          <div className="flex items-start gap-3 p-3 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 mt-0.5 border-2 border-divider rounded-xl shrink-0" />
            <span className="text-sm text-text leading-relaxed">
              <code className="text-accent font-semibold bg-bg px-1 py-0.5 rounded text-xs">/cost</code> 베이스라인을 메모했는가
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

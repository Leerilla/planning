// Source: lectures/S8/captures/lecture.md L1024-1037 (#### 0-6. 토큰 베이스라인 + Step 0 검증 기준)
// Type: Activity (6 checklist + /cost baseline)
// S8 T22 (2026-05-25): 강사 요구 — 높이 축소 / 콘텐츠 겹침 제거

export default function S8ActivityStep0Validation() {
  const items = [
    (
      <>
        <code className="text-accent font-semibold bg-bg px-1 py-0.5 rounded">planning_project</code> 폴더에서 작업 중인가
      </>
    ),
    (
      <>
        BE 코드(<code className="text-accent font-semibold bg-bg px-1 py-0.5 rounded">server/</code>)가 있는가
      </>
    ),
    '리포 구조가 결정됐는가 (옵션 A 권장)',
    (
      <>
        BE 코드가 <code className="text-accent font-semibold bg-bg px-1 py-0.5 rounded">process.env.PORT</code> 사용하는가
      </>
    ),
    (
      <>
        <code className="text-accent font-semibold bg-bg px-1 py-0.5 rounded">.gitignore</code>에 <code className="text-accent font-semibold bg-bg px-1 py-0.5 rounded">.env*</code>가 명시됐는가
      </>
    ),
    (
      <>
        <code className="text-accent font-semibold bg-bg px-1 py-0.5 rounded">/cost</code> 베이스라인을 메모했는가
      </>
    ),
  ];

  return (
    <div className="flex flex-col gap-2 h-full justify-center">
      <div className="flex items-baseline gap-3">
        <span className="h-1 w-12 bg-accent rounded-full" />
        <span className="text-accent font-bold text-sm uppercase tracking-widest">
          활동 0-6 + 검증 · 토큰 베이스라인 + Step 0 통과
        </span>
      </div>

      <h2 className="text-2xl font-bold text-text leading-snug">0-6. 토큰 베이스라인 + Step 0 검증</h2>

      <p className="text-sm text-text-sub max-w-4xl leading-snug">
        6개 항목 모두 통과 시 Step 1 (Railway BE 배포) 진입
      </p>

      <div>
        <h3 className="text-xs font-semibold text-text-sub uppercase tracking-wider mb-1">0-6. 토큰 베이스라인</h3>
        <pre className="bg-bg-soft border border-divider rounded-xl px-3 py-1.5 text-xs leading-snug whitespace-pre-line max-w-3xl text-text">
{`/cost`}
        </pre>
      </div>

      <div>
        <h3 className="text-xs font-semibold text-text-sub uppercase tracking-wider mb-2">Step 0 검증 기준 (6항목)</h3>
        <div className="flex flex-col gap-1 max-w-5xl">
          {items.map((label, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2 px-3 py-1.5 border border-divider bg-bg-soft rounded-xl"
            >
              <div className="w-4 h-4 mt-0.5 border-2 border-divider rounded-xl shrink-0" />
              <span className="text-xs text-text leading-snug">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

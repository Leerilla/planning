// Source: lectures/S8/captures/lecture.md L1419-1425
// Type: Activity checklist (Step 3 검증 기준)
// D-035: [ ] → checkbox 렌더링

export default function S8ActivityStep3Validation() {
  return (
    <>
      {/* Header marker */}
        <div className="h-1 w-12 bg-accent rounded-full mb-3" />
        <p className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-6">
          활동 3-검증 · Step 3 통과 기준
        </p>

        {/* Title and goal */}
        <h1 className="text-3xl font-bold text-text mb-2">
          Step 3 검증 기준
        </h1>
        <p className="text-base text-text-sub mb-5 max-w-5xl">
          5개 항목 모두 통과 시 Step 4 (분석 도구 3종) 진입
        </p>

        {/* 5 checklist items */}
        <div className="flex flex-col gap-3 max-w-5xl">
          {/* Item 1 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 mt-1 border-2 border-divider rounded-xl shrink-0" />
            <p className="text-base text-text leading-relaxed">
              CORS 에러 풀 메시지 복사했는가
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 mt-1 border-2 border-divider rounded-xl shrink-0" />
            <p className="text-base text-text leading-relaxed">
              자율 디버깅 3원칙 명령을 사용했는가
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 mt-1 border-2 border-divider rounded-xl shrink-0" />
            <p className="text-base text-text leading-relaxed">
              CORS 에러가 사라졌는가
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 mt-1 border-2 border-divider rounded-xl shrink-0" />
            <p className="text-base text-text leading-relaxed">
              화이트리스트 정책으로 설정됐는가 (와일드카드 X)
            </p>
          </div>

          {/* Item 5 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 mt-1 border-2 border-divider rounded-xl shrink-0" />
            <p className="text-base text-text leading-relaxed">
              시드 6번 시나리오가 공개 URL에서 동작하는가
            </p>
          </div>
        </div>
    </>
  );
}

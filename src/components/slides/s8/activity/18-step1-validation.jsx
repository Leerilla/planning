// Source: lectures/S8/captures/lecture.md L1203-1210
// Type: Activity checklist (Step 1 검증)

export default function S8ActivityStep1Validation() {
  return (
    <>
      {/* Header marker */}
        <div className="h-1 w-12 bg-accent rounded-full mb-3" />
        <p className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-6">
          활동 1-검증 · Step 1 통과 기준
        </p>

        {/* Title and goal */}
        <h1 className="text-3xl font-bold text-text mb-2">
          Step 1 검증 기준
        </h1>
        <p className="text-base text-text-sub mb-5 max-w-5xl">
          6개 항목 모두 통과 시 Step 2 (Vercel FE 배포) 진입
        </p>

        {/* 6 checklist items */}
        <div className="flex flex-col gap-3 max-w-5xl">
          {/* Item 1 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 mt-1 border-2 border-divider rounded-xl shrink-0" />
            <p className="text-base text-text leading-relaxed">
              Railway 가입과 GitHub 리포 연결 완료
            </p>
          </div>

          {/* Item 2 — D-054: server inline code + accent */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 mt-1 border-2 border-divider rounded-xl shrink-0" />
            <p className="text-base text-text leading-relaxed">
              Root Directory가 <code className="text-accent font-semibold">server</code>로 설정됐는가
            </p>
          </div>

          {/* Item 3 — D-054: OPENAI_API_KEY inline code + accent */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 mt-1 border-2 border-divider rounded-xl shrink-0" />
            <p className="text-base text-text leading-relaxed">
              <code className="text-accent font-semibold">OPENAI_API_KEY</code>가 Variables에 등록됐는가
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 mt-1 border-2 border-divider rounded-xl shrink-0" />
            <p className="text-base text-text leading-relaxed">
              Generate Domain으로 BE URL 발급됐는가
            </p>
          </div>

          {/* Item 5 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 mt-1 border-2 border-divider rounded-xl shrink-0" />
            <p className="text-base text-text leading-relaxed">
              헬스체크 응답이 정상인가
            </p>
          </div>

          {/* Item 6 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 mt-1 border-2 border-divider rounded-xl shrink-0" />
            <p className="text-base text-text leading-relaxed">
              BE URL을 메모했는가
            </p>
          </div>
        </div>
    </>
  );
}

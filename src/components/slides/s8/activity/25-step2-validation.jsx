// Source: lectures/S8/captures/lecture.md L1308-1313
// Type: Activity checklist (Step 2 검증)
// D-054: NEXT_PUBLIC_API_URL inline code + accent

export default function S8ActivityStep2Validation() {
  return (
    <>
      {/* Header marker */}
        <div className="h-1 w-12 bg-accent rounded-full mb-3" />
        <p className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-6">
          활동 2-검증 · Step 2 통과 기준
        </p>

        {/* Title and goal */}
        <h1 className="text-3xl font-bold text-text mb-2">
          Step 2 검증 기준
        </h1>
        <p className="text-base text-text-sub mb-5 max-w-5xl">
          4개 항목 모두 통과 시 Step 3 (CORS 해결) 진입
        </p>

        {/* 4 checklist items */}
        <div className="flex flex-col gap-3 max-w-5xl">
          {/* Item 1 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 mt-1 border-2 border-divider rounded-xl shrink-0" />
            <p className="text-base text-text leading-relaxed">
              Vercel 가입과 GitHub 리포 연결 완료
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 mt-1 border-2 border-divider rounded-xl shrink-0" />
            <p className="text-base text-text leading-relaxed">
              FE URL이 발급됐는가
            </p>
          </div>

          {/* Item 3 — D-054: NEXT_PUBLIC_API_URL inline code + accent */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 mt-1 border-2 border-divider rounded-xl shrink-0" />
            <p className="text-base text-text leading-relaxed">
              <code className="text-accent font-semibold">NEXT_PUBLIC_API_URL</code>이 등록됐는가
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl">
            <div className="w-5 h-5 mt-1 border-2 border-divider rounded-xl shrink-0" />
            <p className="text-base text-text leading-relaxed">
              화면이 뜨는가 (CORS 에러는 다음 Step)
            </p>
          </div>
        </div>
    </>
  );
}

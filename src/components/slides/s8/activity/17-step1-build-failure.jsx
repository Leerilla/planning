// Source: lectures/S8/captures/lecture.md L1177-1202
// Type: Process step 1-8 (빌드 실패 로그)

export default function S8ActivityStep1BuildFailure() {
  return (
    <>
      {/* Header marker */}
        <div className="h-1 w-12 bg-accent rounded-full mb-3" />
        <p className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-6">
          활동 1-8 · 빌드 실패 로그
        </p>

        {/* Title and subtitle */}
        <h1 className="text-3xl font-bold text-text mb-2">
          1-8. 빌드 실패 시 로그 확인
        </h1>
        <p className="text-base text-text-sub mb-5 max-w-5xl">
          5단계 로그 확인 + 자율 디버깅 3원칙 명령
        </p>

        {/* 5-step diagram — Horizontal */}
        <div className="grid grid-cols-5 gap-2 max-w-6xl mb-5 items-stretch">
          {/* Step 1 */}
          <div className="flex flex-col gap-2 p-3 border border-divider bg-bg-soft rounded-xl">
            <span className="w-7 h-7 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">1</span>
            <div className="text-sm text-text leading-snug flex-1">
              Service 화면 → "Deployments" 탭
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col gap-2 p-3 border border-divider bg-bg-soft rounded-xl">
            <span className="w-7 h-7 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">2</span>
            <div className="text-sm text-text leading-snug flex-1">
              실패한 배포 클릭
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col gap-2 p-3 border border-divider bg-bg-soft rounded-xl">
            <span className="w-7 h-7 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">3</span>
            <div className="text-sm text-text leading-snug flex-1">
              "Build Logs" 또는 "Deploy Logs" 확인
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col gap-2 p-3 border border-divider bg-bg-soft rounded-xl">
            <span className="w-7 h-7 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">4</span>
            <div className="text-sm text-text leading-snug flex-1">
              빨간 에러 메시지 풀 텍스트 복사
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex flex-col gap-2 p-3 border border-divider bg-bg-soft rounded-xl">
            <span className="w-7 h-7 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">5</span>
            <div className="text-sm text-text leading-snug flex-1">
              자율 디버깅 3원칙 명령
              <br />
              <span className="text-text-sub text-xs">에러 분석 + 수정 방안 요청</span>
            </div>
          </div>
        </div>

        {/* Sub-title: 흔한 빌드 실패 원인 */}
        <p className="text-base font-semibold text-text-sub mb-3 max-w-5xl">
          흔한 빌드 실패 원인
        </p>

        {/* Table — 3 rows, grid cols: 260px | 180px | 1fr */}
        <div className="max-w-5xl overflow-hidden rounded-xl border border-divider">
          {/* Header */}
          <div className="grid grid-cols-[260px_180px_1fr] bg-bg-soft px-5 py-3 border-b-2 border-divider">
            <div className="flex items-center">
              <span className="text-sm font-bold text-text-muted uppercase tracking-wide">에러</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-bold text-text-muted uppercase tracking-wide">원인</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-bold text-text-muted uppercase tracking-wide">수정</span>
            </div>
          </div>

          {/* Row 1: Cannot find module — D-054: server/package.json inline code + accent */}
          <div className="grid grid-cols-[260px_180px_1fr] px-5 py-4 border-b border-divider">
            <div className="flex items-center">
              <code className="text-warning font-semibold text-sm">"Cannot find module"</code>
            </div>
            <div className="flex items-center">
              <span className="text-text-sub text-sm">의존성 누락</span>
            </div>
            <div className="flex items-center">
              <code className="text-accent font-semibold text-sm">server/package.json</code>에 추가
            </div>
          </div>

          {/* Row 2: Port already in use — D-054: process.env.PORT inline code + accent */}
          <div className="grid grid-cols-[260px_180px_1fr] px-5 py-4 border-b border-divider">
            <div className="flex items-center">
              <code className="text-warning font-semibold text-sm">"Port already in use"</code>
            </div>
            <div className="flex items-center">
              <span className="text-text-sub text-sm">포트 고정</span>
            </div>
            <div className="flex items-center">
              <code className="text-accent font-semibold text-sm">process.env.PORT</code> 사용
            </div>
          </div>

          {/* Row 3: Missing start script — D-054: "start", package.json inline code + accent */}
          <div className="grid grid-cols-[260px_180px_1fr] px-5 py-4">
            <div className="flex items-center">
              <code className="text-warning font-semibold text-sm">"Missing start script"</code>
            </div>
            <div className="flex items-center">
              <span className="text-text-sub text-sm">package.json 누락</span>
            </div>
            <div className="flex items-center">
              <code className="text-accent font-semibold text-sm">"start"</code> 스크립트 추가
            </div>
          </div>
        </div>
    </>
  );
}

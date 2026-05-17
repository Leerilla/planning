// Source: lectures/S4/lecture.md lines 721-743 (2-1 docs/ 구성 + 복사 통합)
// Type: activity (inline 2-area)
// D-044 §3.1/§3.2/§3.3: persona / painpoints / prd 모두 docs/에 통합

export default function S4Activity_2_1_Docs() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 2-1 · 산출물: docs/ 3종 파일 정리
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        docs/ 폴더 구성 + 페르소나·페인포인트 복사
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-4 max-w-4xl">
        S3에서 만든 페르소나·페인포인트를 docs/ 표준 위치로 복사.
      </p>

      <div className="grid grid-cols-2 gap-5 max-w-6xl">
        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2">
            표준 구성
          </div>
          <pre className="text-xs text-text bg-bg-soft rounded p-3 leading-relaxed whitespace-pre border border-line">{`docs/
├── prd.md           ← S3 export
├── persona.md       ← 페르소나 가설
└── painpoints.md    ← 페인포인트`}</pre>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2">
            복사 명령
          </div>
          <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-3 mb-2">
            <div className="text-[10px] uppercase tracking-wider text-text-sub mb-1">macOS / Linux</div>
            <p className="text-xs font-medium text-text leading-relaxed whitespace-pre-wrap">
{`cp ../planning_project/docs/persona.md docs/
cp ../planning_project/docs/painpoints.md docs/`}
            </p>
          </div>
          <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-3">
            <div className="text-[10px] uppercase tracking-wider text-text-sub mb-1">Windows PowerShell</div>
            <p className="text-xs font-medium text-text leading-relaxed whitespace-pre-wrap">
{`Copy-Item "..\\planning_project\\docs\\persona.md" docs/
Copy-Item "..\\planning_project\\docs\\painpoints.md" docs/`}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

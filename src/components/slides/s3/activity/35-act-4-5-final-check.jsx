// Source: lectures/S3/lecture.md lines 1277-1291 (4-5 폴더 구조 최종 점검)
// Type: activity (2-col code)

export default function S3Activity_4_5_FinalCheck() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 4-5 · 산출물: 폴더 구조 검증
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        폴더 구조 최종 점검
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        planning_project/ 안에서 트리 명령으로 모든 파일·폴더 확인.
      </p>

      <div className="grid grid-cols-2 gap-3 max-w-5xl">
        <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-4">
          <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-2">
            macOS / Linux
          </div>
          <p className="text-base font-medium text-text leading-relaxed tracking-tight whitespace-pre-line">
{`tree -L 2
# 또는
ls -la docs/ data/`}
          </p>
        </div>
        <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-4">
          <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-2">
            Windows PowerShell
          </div>
          <p className="text-base font-medium text-text leading-relaxed tracking-tight whitespace-pre-line">
{`Get-ChildItem -Recurse -Depth 2`}
          </p>
        </div>
      </div>
    </>
  );
}

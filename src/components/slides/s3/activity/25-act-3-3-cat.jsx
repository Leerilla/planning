// Source: lectures/S3/lecture.md lines 1067-1083 (3-3 파일 내용 확인)
// Type: activity (2-col code + 주의 박스)

export default function S3Activity_3_3_Cat() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 3-3 · 산출물: prd.md 내용 검증
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        파일 내용 확인 — Manyfast UI와 일치하는가
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        표가 깨져 있거나 일부 누락되면 <span className="highlight-mark">Manyfast로 돌아가 다시 export</span>.
      </p>

      <div className="grid grid-cols-2 gap-3 max-w-5xl mb-4">
        <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-4">
          <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-2">
            macOS / Linux
          </div>
          <p className="text-base font-medium text-text leading-relaxed tracking-tight">
            cat prd.md
          </p>
        </div>
        <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-4">
          <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-2">
            Windows PowerShell
          </div>
          <p className="text-base font-medium text-text leading-relaxed tracking-tight">
            Get-Content prd.md
          </p>
        </div>
      </div>

      <div className="rounded border-l-2 border-accent bg-bg-soft px-4 py-3 max-w-3xl">
        <p className="text-xs text-text-sub leading-relaxed">
          확인 포인트: 5요소 모두 표시 / 표 형식 깨지지 않음 / 한글 깨짐 없음 / 페르소나 6줄 그대로
        </p>
      </div>
    </>
  );
}

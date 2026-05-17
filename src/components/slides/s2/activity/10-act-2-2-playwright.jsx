// Source: lectures/S2/lecture.md L266-289 + MCP 설치 절차 보강
// Type: example (활동 2-2 Playwright MCP 셋업/설치 — 3 STEP)
// 2026-05-12 재기획: 명령어 폰트 키움 + MCP 설치 step 명시

export default function S2Activity_2_2_Playwright() {
  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 2-2 · 셋업 · 산출물: Playwright MCP 준비 완료
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        Playwright MCP 셋업 — 3 STEP
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        Claude Code 세션 안에서 Playwright MCP를 한 번 설치하면, <span className="highlight-mark">이후 자연어 명령만으로 브라우저 자동화 + 데이터 수집</span>이 가능해진다.
      </p>

      {/* STEP 1: 작업 폴더 — 2-col (macOS / Windows) */}
      <div className="mb-4">
        <div className="text-accent text-xs font-semibold tracking-wider uppercase mb-2">
          STEP 1 · 작업 폴더 + Claude Code 진입
        </div>
        <div className="grid grid-cols-2 gap-3 max-w-5xl">
          <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-4">
            <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-2">
              macOS / Linux
            </div>
            <p className="text-base font-medium text-text leading-relaxed tracking-tight whitespace-pre-line">
{`mkdir 02_validation-scraping
cd 02_validation-scraping
claude`}
            </p>
          </div>
          <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-4">
            <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-2">
              Windows PowerShell
            </div>
            <p className="text-base font-medium text-text leading-relaxed tracking-tight whitespace-pre-line">
{`New-Item -ItemType Directory -Path 02_validation-scraping
Set-Location 02_validation-scraping
claude`}
            </p>
          </div>
        </div>
      </div>

      {/* STEP 2: MCP 설치 + STEP 3: 확인 — 2-col */}
      <div className="grid grid-cols-2 gap-3 max-w-5xl">
        <div>
          <div className="text-accent text-xs font-semibold tracking-wider uppercase mb-2">
            STEP 2 · Playwright MCP 설치
          </div>
          <div className="rounded-2xl border-l-4 border-success bg-success-soft p-4">
            <p className="text-base font-medium text-text leading-relaxed tracking-tight">
              claude mcp add playwright -- npx @playwright/mcp@latest
            </p>
            <p className="text-xs text-text-sub leading-relaxed mt-3">
              한 번만 실행. 이후 폴더와 무관하게 사용 가능.
            </p>
          </div>
        </div>
        <div>
          <div className="text-accent text-xs font-semibold tracking-wider uppercase mb-2">
            STEP 3 · 설치 확인
          </div>
          <div className="rounded-2xl border-l-4 border-success bg-success-soft p-4">
            <p className="text-base font-medium text-text leading-relaxed tracking-tight">
              /mcp
            </p>
            <p className="text-xs text-text-sub leading-relaxed mt-3">
              Claude Code 세션 안에서 입력 — playwright 항목이 보이면 준비 완료.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

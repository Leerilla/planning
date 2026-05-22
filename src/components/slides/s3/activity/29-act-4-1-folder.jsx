// Source: lectures/S3/lecture.md lines 1109-1139 (4-1 표준 폴더 + 생성 명령 통합)
// Type: activity (inline 2-area — 좌 폴더 트리 / 우 2-col 생성 명령)
// D-043: "03_prd-refinement" → "planning_project"
// D-044 §2: 표준 폴더 구조 SSOT 적용

export default function S3Activity_4_1_Folder() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 4-1 · 산출물: planning_project/ 표준 폴더
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        표준 폴더 구조 + 생성 명령
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-4 max-w-4xl">
        S3~S9 모든 실습이 본 구조 위에 누적된다. <span className="highlight-mark">9세션 동안 같은 폴더에서 진화</span>.
      </p>

      <div className="grid grid-cols-[1.1fr_1.4fr] gap-8 max-w-6xl">
        <div>
          <div className="text-base font-semibold text-text-sub mb-3">
            구조
          </div>
          <pre className="text-sm text-text bg-bg-soft border border-divider rounded p-4 leading-relaxed whitespace-pre">{`planning_project/
├── docs/
│   ├── prd.md          ← Manyfast export
│   ├── persona.md      ← 페르소나 워크시트
│   └── painpoints.md   ← NotebookLM 메모
├── src/                ← 코드 작성 영역
├── tests/              ← 테스트 코드
├── data/               ← CSV, 인터뷰
├── README.md           ← 프로젝트 개요
└── .claude/
    └── CLAUDE.md       ← Claude Code 컨텍스트`}</pre>
        </div>

        <div>
          <div className="text-base font-semibold text-text-sub mb-3">
            생성 명령 (planning_project/ 안에서)
          </div>
          <div className="space-y-3">
            <div className="rounded border-l-2 border-accent bg-bg-soft p-4">
              <div className="text-sm font-semibold text-text-sub mb-2">
                macOS / Linux
              </div>
              <p className="text-sm font-bold text-text leading-relaxed tracking-tight whitespace-pre-line">
{`mkdir -p docs src tests data .claude
mv prd.md docs/`}
              </p>
            </div>
            <div className="rounded border-l-2 border-accent bg-bg-soft p-4">
              <div className="text-sm font-semibold text-text-sub mb-2">
                Windows PowerShell
              </div>
              <p className="text-sm font-bold text-text leading-relaxed tracking-tight whitespace-pre-line">
{`New-Item -ItemType Directory -Path docs, src, tests, data, .claude
Move-Item prd.md docs/`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

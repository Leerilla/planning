// Source: lectures/S4/lecture.md lines 745-771 (2-2 rules/ 구성 + 폴더 생성 통합)
// Type: activity (inline 2-area)
// D-044 §3.6 확장 검토: rules/ SSOT 추가

export default function S4Activity_2_2_Rules() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 2-2 · 산출물: rules/ 3개 빈 파일
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        rules/ 폴더 구성 + 빈 파일 생성
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-4 max-w-4xl">
        다음 단계에서 AI가 CLAUDE.md 3영역을 참고해 내용을 채운다.
      </p>

      <div className="grid grid-cols-2 gap-5 max-w-6xl">
        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2">
            표준 구성
          </div>
          <pre className="text-xs text-text bg-bg-soft rounded p-3 leading-relaxed whitespace-pre border border-line">{`rules/
├── coding-style.md       ← 네이밍·포맷
├── commit-convention.md  ← 커밋 메시지
└── architecture.md       ← 폴더 구조 원칙`}</pre>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2">
            생성 명령
          </div>
          <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-3 mb-2">
            <div className="text-[10px] uppercase tracking-wider text-text-sub mb-1">macOS / Linux</div>
            <p className="text-xs font-medium text-text leading-relaxed whitespace-pre-wrap">
{`mkdir -p rules
touch rules/coding-style.md
touch rules/commit-convention.md
touch rules/architecture.md`}
            </p>
          </div>
          <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-3">
            <div className="text-[10px] uppercase tracking-wider text-text-sub mb-1">Windows PowerShell</div>
            <p className="text-xs font-medium text-text leading-relaxed whitespace-pre-wrap">
{`New-Item -ItemType Directory -Path rules -Force
New-Item -ItemType File -Path rules/coding-style.md
New-Item -ItemType File -Path rules/commit-convention.md
New-Item -ItemType File -Path rules/architecture.md`}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

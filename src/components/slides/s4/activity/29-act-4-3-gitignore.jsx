// Source: lectures/S4/lecture.md lines 896-903 (4-3 .gitignore 생성)
// Type: activity (prompt code block)
// D-044 §3.8 확장 검토: .gitignore SSOT 추가

export default function S4Activity_4_3_Gitignore() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 4-3 · 산출물: .gitignore 파일
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        .gitignore 생성 — 자연어 요청
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        Next.js 기준. <span className="highlight-mark">.claude/는 제외하지 말고 포함</span> — 팀 단위 헌법.
      </p>

      <pre className="text-sm text-text bg-bg-soft rounded p-5 leading-relaxed whitespace-pre-wrap border border-line max-w-4xl">{`"이 프로젝트에 맞는 .gitignore를 만들어줘.
 Next.js 기준이고, .claude/는 제외하지 말고 포함.
 node_modules, .env, build 결과물은 제외."`}</pre>
    </>
  );
}

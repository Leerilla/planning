// Source: lectures/S4/lecture.md lines 773-785 (2-3 rules/ AI에 채우게 하기)
// Type: activity (prompt code block)

export default function S4Activity_2_3_Fill() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 2-3 · 산출물: rules/ 3개 파일 채워짐
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        rules/ AI에 채우게 하기 — 명령
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        CLAUDE.md 3영역(코딩 가이드라인)을 참고해 <span className="highlight-mark">각 파일 50줄 이내</span>로 작성.
      </p>

      <pre className="text-base text-text bg-bg-soft rounded p-5 leading-relaxed whitespace-pre-wrap border border-line max-w-5xl">{`"CLAUDE.md의 3영역(코딩 가이드라인)을 참고해서
 rules/ 폴더의 3개 파일을 채워줘:

 - rules/coding-style.md: 네이밍·포맷·들여쓰기 상세
 - rules/commit-convention.md: 커밋 type 목록과 예시
 - rules/architecture.md: 폴더 구조와 모듈 분리 원칙

 각 파일은 50줄 이내로 짧게 작성해줘."`}</pre>
    </>
  );
}

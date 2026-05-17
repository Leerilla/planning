// Source: lectures/S9/lecture.md L934-950 (#### 5-4 자동 커밋 확인, example 2 pre block + D-053 자료 6 회상)
// Type: ExampleSlide

export default function S9ActivityStep5AutoCommit() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            활동 5-4 · 자동 커밋
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          5-4. 자동 커밋 확인
        </h2>

        {/* Subtitle - D-053 자료 6 약식 */}
        <p className="text-base text-text-sub mb-6 max-w-5xl">
          자료 6의 git-committer hook이 자동 커밋 — 근거 명시 확인
        </p>

        {/* 명령 박스 */}
        <div className="border-l-4 border-divider bg-bg-soft rounded-r-xl px-5 py-4 max-w-5xl mb-4">
          <p className="text-text-sub font-bold text-xs uppercase tracking-widest mb-2">
            명령
          </p>
          <pre className="text-sm whitespace-pre">
            {`git log -1 --pretty=format:"%s%n%n%b"`}
          </pre>
        </div>

        {/* 기대 커밋 박스 */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4 max-w-5xl">
          <p className="text-accent font-bold text-xs uppercase tracking-widest mb-2">
            기대 커밋 메시지
          </p>
          <pre className="text-sm whitespace-pre-line">
            {`refactor: persona·prd 갱신 — Clarity 데이터 기반
 키워드 가변 입력으로 변경

- Clarity 세션 8건 중 6건이 키워드 3개만 입력
- 응답 2건이 "5개는 부담"으로 언급`}
          </pre>
        </div>
      </div>
    </>
  );
}

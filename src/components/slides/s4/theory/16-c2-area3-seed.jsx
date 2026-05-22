// Source: lectures/S4/lecture.md lines 153-164 (#### 3영역 시드 6번 예시)
// Type: example (code block)

export default function S4TheoryC2Area3Seed() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          시드 6번 사례 · 3영역 (코딩 가이드라인)
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-5">
        3영역 — 네이밍 · 커밋 · 테스트 · 포맷
      </h2>

      <pre className="text-sm text-text bg-bg-soft rounded p-5 leading-relaxed whitespace-pre-wrap border border-divider max-w-4xl">{`- 함수명: camelCase
- 컴포넌트명: PascalCase
- 파일명: kebab-case
- 커밋 메시지: [type] description
- 단위 테스트: Jest + React Testing Library
- 코드 포맷: Prettier + ESLint`}</pre>
    </>
  );
}

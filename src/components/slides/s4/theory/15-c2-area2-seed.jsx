// Source: lectures/S4/lecture.md lines 133-151 (#### 2영역 시드 6번 예시 — 정의 한눈 표 흡수)
// Type: example (code block)

export default function S4TheoryC2Area2Seed() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          시드 6번 사례 · 2영역 (기술 스택과 파일 구조)
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-5">
        2영역 — 스택 + 폴더 구조
      </h2>

      <pre className="text-xs text-text bg-bg-soft rounded p-5 leading-relaxed whitespace-pre-wrap border border-line max-w-4xl">{`[기술 스택]
- FE: Next.js + Tailwind CSS
- BE: Node.js + Express
- AI API: OpenAI GPT-4o
- 상태 관리: Zustand

[폴더 구조]
- src/app/         페이지 라우팅
- src/components/  UI 컴포넌트
- src/lib/         API 호출, 유틸
- docs/            PRD, 페르소나
- rules/           코딩 규칙
- server/          BE 코드`}</pre>
    </>
  );
}

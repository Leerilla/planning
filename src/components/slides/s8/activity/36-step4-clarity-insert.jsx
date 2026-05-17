// Source: lectures/S8/activity lecture.md Step 4-1 (Clarity 삽입 명령)
// Type: Example (4-1: Clarity 코드 삽입 명령)
// D-054: src/app/layout.tsx inline code + accent

export default function S8ActivityStep4ClarityInsert() {
  return (
    <>
      {/* Header marker */}
        <div className="h-1 w-12 bg-accent rounded-full mb-3" />
        <p className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-6">
          활동 4-1 · Clarity 코드 삽입
        </p>

        {/* Title and subtitle */}
        <h1 className="text-3xl font-bold text-text mb-2">
          4-1. Clarity 코드 삽입 명령
        </h1>
        <p className="text-base text-text-sub mb-4 max-w-4xl">
          Claude Code에 전달 — Next.js의 <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">src/app/layout.tsx</code>에 삽입
        </p>

        {/* Pre block with Claude Code prompt */}
        <pre className="bg-bg-soft border border-divider rounded-xl p-5 text-sm whitespace-pre-line max-w-4xl text-text leading-relaxed font-inherit">
{`프로젝트 FE에 Microsoft Clarity 추적 코드를 삽입해줘.

Clarity 코드는 다음과 같습니다:
[추적 코드 그대로 붙여넣기]

Next.js의 src/app/layout.tsx에 삽입해서
모든 페이지에 자동 로드되도록 설정해줘.

설치 후 Clarity 대시보드에 데이터 도착 여부를
어떻게 확인하는지도 알려줘.`}
        </pre>
    </>
  );
}

// Source: lectures/S7/lecture.md line 203-213
// Type: comparison
// Pattern: antipattern vs correct (2-col)
// Profile: systematic/simulation/medium-interactive

export default function S7TheoryC2Principle1({ deckMeta }) {
  return (
    <div className="flex h-full flex-col gap-8 bg-bg-base p-12">
      {/* Header marker */}
      <div className="flex items-center gap-4">
        <div className="h-[3px] w-10 rounded-full bg-accent" />
        <span className="text-sm font-semibold uppercase tracking-wider text-accent">
          원칙 1
        </span>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-text">
        에러를 그대로 전달
      </h1>

      {/* 2-col comparison grid */}
      <div className="max-w-5xl space-y-6">
        <div className="grid grid-cols-2 gap-4">
          {/* Left: Antipattern */}
          <div className="rounded-r-md border-l-4 border-danger bg-danger-soft px-6 py-5 flex flex-col gap-2">
            <p className="text-xs font-bold uppercase tracking-wider text-danger">
              안티패턴
            </p>
            <ul className="space-y-1 text-sm text-text">
              <li>• 작업자가 에러 요약</li>
              <li>• "안 돼요"</li>
              <li>• "에러 났어요"</li>
            </ul>
          </div>

          {/* Right: Correct */}
          <div className="rounded-r-md border-l-4 border-success bg-success-soft px-6 py-5 flex flex-col gap-2">
            <p className="text-xs font-bold uppercase tracking-wider text-success">
              올바른 운영
            </p>
            <ul className="space-y-1 text-sm text-text">
              <li>• 풀 메시지 그대로 복사</li>
              <li>• 전체 스택 트레이스</li>
              <li>• 파일 경로, 라인 번호 포함</li>
            </ul>
          </div>
        </div>

        {/* Aside */}
        <div className="rounded-r-md border-l-4 border-accent bg-bg-soft px-6 py-3">
          <p className="text-sm text-text-sub">
            에러 메시지가 길고 무서워 보여도 그대로. 요약하면 에이전트가 무엇이 문제인지 모름.
          </p>
        </div>
      </div>
    </div>
  );
}

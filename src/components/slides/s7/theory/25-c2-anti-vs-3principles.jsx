// Source: lectures/S7/lecture.md lines 255-273
// Type: comparison (2-col antipattern vs 3principles) + integrated infinite-loop box
// D-016: lecture.md 표 구조 원문 보존

export default function S7TheoryC2AntiVs3Principles() {
  return (
    <div className="flex h-full flex-col gap-8 bg-bg p-12">
      {/* Header marker */}
      <div className="flex items-center gap-4">
        <div className="h-[3px] w-10 rounded-full bg-accent" />
        <span className="text-sm font-semibold uppercase tracking-wider text-accent">
          안티패턴 vs 3원칙
        </span>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-text">
        에러 보고 + 무한 루프 정리
      </h1>

      {/* 2-col comparison grid */}
      <div className="max-w-5xl space-y-6">
        <div className="grid grid-cols-2 gap-4">
          {/* Left: Antipattern */}
          <div className="flex flex-col gap-2 rounded-r-md border-l-4 border-danger bg-danger-soft px-5 py-3">
            <p className="text-xs font-bold uppercase tracking-wider text-danger">
              안티패턴
            </p>
            <ul className="space-y-2 text-sm text-text">
              <li>"안 돼요 고쳐주세요"</li>
              <li>"수정 끝났다고 했어요"</li>
            </ul>
          </div>

          {/* Right: 3 Principles Applied */}
          <div className="flex flex-col gap-2 rounded-r-md border-l-4 border-success bg-success-soft px-5 py-3">
            <p className="text-xs font-bold uppercase tracking-wider text-success">
              3원칙 적용
            </p>
            <ul className="space-y-2 text-sm text-text">
              <li>"분석해주세요. 풀 에러 첨부"</li>
              <li>"재실행해 통과 확인"</li>
            </ul>
          </div>
        </div>

        {/* Infinite loop recovery command */}
        <div className="rounded-r-md border-l-4 border-accent bg-bg-soft px-6 py-4">
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-accent">
            무한 루프 정리 명령 (같은 자리 3회 이상 맴돌면)
          </p>
          <div className="overflow-auto rounded-md border border-divider bg-bg px-3 py-3">
            <pre className="whitespace-pre-wrap text-sm leading-relaxed text-text">
{`이 디버깅의 어디서 막혔는지 정리해줘.
지금까지 시도한 수정 3개와 각 수정 후의 에러를
표로 보여줘.`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

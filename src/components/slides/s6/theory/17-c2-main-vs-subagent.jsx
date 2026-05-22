// Source: lectures/S6/lecture.md lines 157-164 (#### 메인 vs sub-agent 4차이)
// Type: comparison (4-row table)

export default function S6TheoryC2MainVsSubagent() {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          메인 vs sub-agent 구분
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-8">
        네 가지 차이점
      </h2>

      <div className="max-w-5xl space-y-3">
        <div className="grid grid-cols-3 gap-4 mb-2">
          <div className="text-sm font-semibold text-text-sub uppercase tracking-wider">
            항목
          </div>
          <div className="text-sm font-semibold text-text-sub uppercase tracking-wider">
            메인 에이전트
          </div>
          <div className="text-sm font-semibold text-text-sub uppercase tracking-wider">
            sub-agent
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 items-start border-b border-divider pb-3">
          <div className="text-sm text-text font-semibold">컨텍스트</div>
          <div className="text-sm text-text">사용자와 직접</div>
          <div className="text-sm text-text">격리된 컨텍스트</div>
        </div>

        <div className="grid grid-cols-3 gap-4 items-start border-b border-divider pb-3">
          <div className="text-sm text-text font-semibold">출력</div>
          <div className="text-sm text-text">사용자에게 직접</div>
          <div className="text-sm text-text">메인에 요약만 반환</div>
        </div>

        <div className="grid grid-cols-3 gap-4 items-start border-b border-divider pb-3">
          <div className="text-sm text-text font-semibold">도구</div>
          <div className="text-sm text-text">모든 도구 가능</div>
          <div className="text-sm text-text">tools에 명시한 것만</div>
        </div>

        <div className="grid grid-cols-3 gap-4 items-start">
          <div className="text-sm text-text font-semibold">호출 방식</div>
          <div className="text-sm text-text">사용자 직접</div>
          <div className="text-sm text-text">자동 위임, @-mention, hook</div>
        </div>
      </div>
    </>
  );
}

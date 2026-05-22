// Source: lectures/S6/lecture.md lines 166-175 (#### 컨텍스트 격리의 의미)
// Type: concept / default

export default function S6TheoryC2ContextIsolation() {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          컨텍스트 격리의 의미
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-8">
        분리된 컨텍스트는 품질을 높인다
      </h2>

      <div className="grid grid-cols-2 gap-6 max-w-5xl">
        <div className="border border-divider rounded p-6 bg-bg-soft">
          <div className="text-sm font-semibold text-text-sub uppercase tracking-wider mb-3">
            컨텍스트가 섞일 때
          </div>
          <div className="space-y-2">
            <div className="text-sm text-text">
              메인이 코드 + 리뷰 + 테스트 모두 함
            </div>
            <div className="text-xs text-text-sub mt-2 italic">
              컨텍스트 길어지면 품질 떨어짐
            </div>
          </div>
        </div>

        <div className="border border-accent rounded p-6">
          <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            sub-agent로 분리할 때
          </div>
          <div className="space-y-2">
            <div className="text-sm text-text">
              각 역할이 자기 영역 집중
            </div>
            <div className="text-sm text-text mt-2">
              메인은 자기 작업 이어감
            </div>
            <div className="text-xs text-text-sub mt-2 italic">
              결과: 집중도와 품질 모두 향상
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

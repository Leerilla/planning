// Source: lectures/S4/lecture.md lines 1057-1065 (### 시스템 환경 팁)
// Type: activity (2-card)

export default function S4Tip6System() {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          Tips 6 · 시스템 환경 팁
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        본 단계의 경계선과 헌법 위반 지적법
      </h2>

      <div className="grid grid-cols-2 gap-5 max-w-6xl">
        <div className="border border-divider rounded p-5">
          <div className="text-xs uppercase tracking-wider text-accent mb-2">
            docs/와 rules/는 필수, 디자인 가이드는 다음 단계
          </div>
          <p className="text-base text-text leading-relaxed">
            현 단계: docs/(PRD 참조)와 rules/(코딩 규칙)만.
            <br />
            디자인 가이드는 다음 단계 빌드 시작 시 추가.
          </p>
        </div>

        <div className="border border-divider rounded p-5">
          <div className="text-xs uppercase tracking-wider text-accent mb-2">
            헌법 위반은 조항 번호로 지적
          </div>
          <p className="text-base text-text leading-relaxed">
            "/project/claude.md 3조의 커밋 메시지 형식을 어겼다"라고 명시.
            <br />
            에이전트가 정확히 인식.
          </p>
        </div>
      </div>
    </>
  );
}

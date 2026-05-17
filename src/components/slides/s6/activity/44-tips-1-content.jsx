// Source: S6 lecture.md T3.9 Tips 1 내용
// Type: comparison (2-card)
// Profile: hierarchical / comparison / medium-high / balanced

export default function S6ActivityTips1Content() {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          Tips 1 · 핵심 개념
        </span>
      </div>

      <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-6">
        두 단어 분리 + 필요성에서 출발
      </h2>

      <div className="max-w-5xl grid grid-cols-2 gap-6">
        <div className="bg-bg-soft border border-divider rounded-xl p-6">
          <h3 className="text-lg font-bold text-text mb-3">확장 vs 자동화</h3>
          <p className="text-sm text-text-sub leading-relaxed mb-3">
            <span className="font-bold text-accent">확장 = 패턴 복사</span>: 화면 1에서 사용한 작업 패턴을 화면 2에 90% 재사용.<br />
            <span className="font-bold text-accent">자동화 = 도구 위임</span>: 반복 작업을 sub-agent와 hook에 맡김.
          </p>
          <div className="border-l-2 border-accent pl-3 text-xs text-text-sub leading-relaxed">
            <span className="font-semibold text-text">복사 대상 예시:</span><br />
            ① 빌드 명령 메모 (prompt 양식)<br />
            ② Issue 분할 + PR 흐름<br />
            ③ prd-reviewer / git-committer 호출 패턴<br />
            ④ 커밋 메시지 형식
          </div>
        </div>

        <div className="bg-bg-soft border border-divider rounded-xl p-6">
          <h3 className="text-lg font-bold text-text mb-3">필요성에서 출발</h3>
          <p className="text-sm text-text-sub leading-relaxed">
            자료 5의 9개 미작업 Task가 <span className="font-bold text-accent">반복의 압박</span>이 본 단계의 출발점이다. 도구를 먼저 알고 적용처를 찾는 순서는 효과가 떨어진다.
          </p>
        </div>
      </div>
    </>
  );
}

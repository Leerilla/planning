// Source: S6 lecture.md T3.9 Tips 2 내용
// Type: comparison (2-card)
// Profile: hierarchical / comparison / medium-high / balanced

export default function S6ActivityTips2Content() {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          Tips 2 · 핵심 개념
        </span>
      </div>

      <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-6">
        6원칙 + tools 최소 권한
      </h2>

      <div className="max-w-5xl grid grid-cols-2 gap-6">
        <div className="bg-bg-soft border border-divider rounded-xl p-6">
          <h3 className="text-lg font-bold text-text mb-3">6원칙 모두 적용</h3>
          <p className="text-sm text-text-sub leading-relaxed">
            단일 책임, 최소 권한, 결정적 출력, 책임 분리, 호출 시점 명시, 입출력 계약. 한 원칙이 무너지면 agent 설계 전체가 위험해진다.
          </p>
        </div>

        <div className="bg-bg-soft border border-divider rounded-xl p-6">
          <h3 className="text-lg font-bold text-text mb-3">tools 최소 권한</h3>
          <p className="text-sm text-text-sub leading-relaxed">
            코드 리뷰어는 Read, Grep, Glob만 가능하게. 커밋 sub-agent는 Bash와 Read만. 검증과 자동화의 권한이 섞이면 실패하기 쉽다.
          </p>
        </div>
      </div>
    </>
  );
}

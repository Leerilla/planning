// Source: S6 lecture.md T3.9 Tips 3 내용
// Type: comparison (3-card)
// Profile: hierarchical / comparison / medium-high / balanced

export default function S6ActivityTips3Content() {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          Tips 3 · 핵심 팁
        </span>
      </div>

      <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-6">
        hooks 핵심 팁 3가지
      </h2>

      <div className="max-w-5xl grid grid-cols-3 gap-6">
        <div className="bg-bg-soft border border-divider rounded-xl p-6">
          <h3 className="text-lg font-bold text-text mb-3">두 핵심 패턴</h3>
          <p className="text-sm text-text-sub leading-relaxed">
            PostToolUse에서 자동 검증, Stop에서 자동 커밋. 이 두 패턴을 결합하면 한 Task가 명령 한 줄로 끝난다.
          </p>
        </div>

        <div className="bg-bg-soft border border-divider rounded-xl p-6">
          <h3 className="text-lg font-bold text-text mb-3">CLAUDE.md vs hook</h3>
          <p className="text-sm text-text-sub leading-relaxed">
            CLAUDE.md는 70% 권고, hook은 100% 강제. 반드시 일어나야 하는 검증과 커밋은 hook으로 자동화한다.
          </p>
        </div>

        <div className="bg-bg-soft border border-divider rounded-xl p-6">
          <h3 className="text-lg font-bold text-text mb-3">정규식 주의</h3>
          <p className="text-sm text-text-sub leading-relaxed">
            matcher 정규식에 공백을 넣으면 매칭이 실패한다. Edit와 Write 사이에 공백을 넣지 말 것.
          </p>
        </div>
      </div>
    </>
  );
}

// Source: S6 lecture.md T3.9 Tips 4 내용
// Type: concept (KeyMessage)
// Profile: hierarchical / comparison / medium-high / balanced
// Emphasis: key-message

export default function S6ActivityTips4Content() {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          Tips 4 · 핵심
        </span>
      </div>

      <div className="max-w-4xl">
        <h2 className="text-5xl font-bold tracking-tight text-text leading-tight mb-4">
          sub-agent 보고도
        </h2>
        <h2 className="text-5xl font-bold tracking-tight text-text leading-tight mb-4">
          <span className="text-accent">AI 산출물</span>
        </h2>
        <p className="text-2xl font-semibold text-text leading-snug mb-6">
          본인이 직접 확인하자
        </p>
        <p className="text-base font-medium text-text-sub leading-relaxed">
          PRD와 일치라고 적힌 항목도 본인이 PRD를 직접 본다. 자동 커밋된 메시지도 git log에서 확인한다. 자동화는 도구일 뿐, 책임은 여전히 사용자에게 있다.
        </p>
      </div>
    </>
  );
}

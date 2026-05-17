// Source: S6 lecture.md T3.9 Tips 5 내용 (sprint outro)
// Type: concept (KeyMessage)
// Profile: hierarchical / comparison / medium-high / balanced
// Emphasis: key-message (sprint outro)

export default function S6ActivityTips5Content() {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          Tips 5 · 마무리
        </span>
      </div>

      <div className="max-w-4xl">
        <h2 className="text-5xl font-bold tracking-tight text-text leading-tight mb-4">
          시간 절반 = 자동화 작동
        </h2>
        <p className="text-2xl font-semibold text-text leading-snug mb-6">
          화면 2가 화면 1의 <span className="text-accent">절반 이하</span>면 성공
        </p>
        <p className="text-base font-medium text-text-sub leading-relaxed">
          빌드 명령 메모 90% 재사용 + hook 자동 처리. 두 번째 화면이 첫 번째 화면 시간의 절반 이하면 자동화가 제대로 작동하는 것이다.
        </p>
      </div>
    </>
  );
}

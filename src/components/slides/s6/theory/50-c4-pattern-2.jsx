// Source: lectures/S6/lecture.md lines 526-532
// Type: concept / definition
// Pattern: Stop → git-committer automation (Pattern 2 intro)
// Interactive: notes step-reveal (definition + aside)

export default function S6TheoryC4Pattern2() {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          핵심 패턴 2 도입
        </span>
      </div>

      <h2 className="text-5xl font-bold tracking-tight text-text leading-tight mb-8 max-w-4xl">
        Stop <span className="text-accent">→</span> git-committer
      </h2>

      <div className="max-w-4xl mb-8">
        <p className="text-3xl font-bold text-text leading-snug">
          응답 종료 시 <span className="highlight-mark">변경 파일 자동 커밋</span>
        </p>
      </div>

      <div className="max-w-4xl border-l-4 border-accent bg-bg-soft rounded-r-md px-6 py-5">
        <p className="text-sm font-semibold text-accent tracking-wider uppercase mb-2">진행 단계</p>
        <p className="text-base text-text leading-relaxed">
          자료 4: 작업자가 "커밋해줘" 자연어로 입력 → 자료 5: PR 생성 명령 → <span className="font-bold text-accent">자료 6: 그것도 자동화 대상</span>
        </p>
      </div>
    </>
  );
}

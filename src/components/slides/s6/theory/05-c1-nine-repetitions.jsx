// Source: lectures/S6/lecture.md lines 43-54 (#### 9번 반복의 부담)
// Type: concept / default
// Profile: hierarchical / diagram / medium / balanced

export default function S6TheoryC1NineRepetitions() {
  const steps = [
    '빌드 명령 입력',
    '코드 작성',
    'PRD 일치 확인',
    '커밋 메시지 작성',
    'PR 생성',
    '본인 리뷰',
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          9번 반복의 부담
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        한 Task당 같은 흐름
      </h2>

      <p className="text-base text-text-sub mb-8 max-w-3xl">
        아홉 번 반복하면 아홉 번의 같은 흐름. 작업자가 같은 명령을 매번 입력하는 상태.
      </p>

      <div className="max-w-4xl">
        <div className="flex items-center gap-3 mb-6">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center flex-1">
              <div className="flex-1 text-center">
                <div className="text-sm font-medium text-text-sub mb-2">{step}</div>
                <div className="w-8 h-8 rounded-full bg-accent mx-auto flex items-center justify-center text-white text-xs font-bold">
                  {i + 1}
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="flex-1 h-[2px] bg-divider mx-2" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 rounded border border-accent bg-accent/5">
          <div className="text-sm uppercase tracking-wider text-accent font-semibold mb-2">
            문제
          </div>
          <p className="text-base text-text leading-relaxed">
            매 Task 9개마다 이 6단계 모두를 사람이 직접 진행. 손 반복이 많고 실수 가능성 높음.
          </p>
        </div>
      </div>
    </>
  );
}

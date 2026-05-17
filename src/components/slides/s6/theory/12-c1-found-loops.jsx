// Source: lectures/S6/lecture.md lines 102-115 (#### 자료 5에서 발견된 반복)
// Type: concept / default
// Profile: hierarchical / comparison / medium-high / balanced

export default function S6TheoryC1FoundLoops() {
  const items = [
    {
      label: '작업 1',
      description: '코드 작성 후 PRD에 맞나 손으로 묻기',
      status: '자동화 대상',
    },
    {
      label: '작업 2',
      description: '커밋 메시지 작성',
      status: '자동화 대상',
    },
    {
      label: '작업 3',
      description: '새 화면 만들 때 기존 패턴 설명',
      status: '자동화 대상',
    },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          자동화 가능성 실제 사례
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        자료 5에서 발견된 반복
      </h2>

      <p className="text-base text-text-sub mb-8 max-w-3xl">
        세 작업 모두 3조건 통과.
      </p>

      <div className="flex flex-col gap-4 max-w-3xl">
        {items.map((item, i) => (
          <div key={i} className="border border-line rounded p-5 flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="text-xs uppercase tracking-wider text-accent font-semibold mb-2">
                {item.label}
              </div>
              <div className="text-base font-medium text-text">
                {item.description}
              </div>
            </div>
            <div className="flex-shrink-0 flex items-center">
              <span className="px-3 py-1.5 rounded-full text-xs font-semibold text-success bg-success-soft whitespace-nowrap">
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm text-text-sub italic mt-8 pt-6 border-t border-line">
        이 세 작업을 sub-agent와 hook이 처리한다.
      </p>
    </>
  );
}

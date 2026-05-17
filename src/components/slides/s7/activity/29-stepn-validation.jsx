// Source: lectures/S7/lecture.md L868-873 (Step N 검증 기준)
// Type: activity (inline JSX — 4-check)

export default function S7Activity_N_Validation() {
  const checkItems = [
    {
      label: '산출물 5개가 모두 손에 있는가',
    },
    {
      label: (
        <>
          <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">
            /cost
          </code>
          {' '}비교를 메모했는가
        </>
      ),
    },
    {
      label: '회고 3개 질문에 모두 답했는가',
    },
    {
      label: '다음 단계(배포) 진입 준비가 됐는가',
    },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 N-검증 · Step N 통과 기준
        </span>
      </div>

      <h2 className="text-3xl font-bold text-text mb-2">
        Step N 검증 기준
      </h2>

      <p className="text-text-sub text-base mb-4">
        4개 항목 모두 통과 시 본 sprint 완료
      </p>

      <div className="flex flex-col gap-3 max-w-4xl">
        {checkItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3 p-4 border border-divider bg-bg-soft rounded-xl"
          >
            <div className="w-5 h-5 mt-1 border-2 border-divider rounded-xl shrink-0" />
            <p className="text-base text-text leading-relaxed">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

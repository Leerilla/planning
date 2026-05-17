// Source: lectures/S6/lecture.md lines 453-464
// Type: comparison, 2-row timeout 설정
// Profile: hierarchical logic / comparison visual / balanced tone

export default function S6TheoryC3Timeout() {
  const timeoutData = [
    {
      label: 'prd-reviewer',
      timeout: '60-90초',
      note: 'PRD 검토 작업 시간',
      color: 'bg-state-success-soft',
      borderColor: 'border-state-success',
      textColor: 'text-state-success',
    },
    {
      label: 'git-committer',
      timeout: '60초',
      note: '커밋 작성 작업 시간',
      color: 'bg-state-info-soft',
      borderColor: 'border-state-info',
      textColor: 'text-state-info',
    },
  ];

  return (
    <div className="flex flex-col gap-8 h-full">
      <h2 className="text-4xl font-bold tracking-tight text-text">
        timeout 설정
      </h2>

      <p className="text-text-sub leading-relaxed">
        sub-agent 호출 시 작업 시간 제한. 너무 짧으면 sub-agent가 중간에 끊김.
      </p>

      <div className="grid grid-cols-2 gap-6 flex-1">
        {timeoutData.map((item, idx) => (
          <div
            key={idx}
            className={`${item.color} ${item.borderColor} border-l-4 rounded-md p-6 flex flex-col gap-4`}
          >
            <div className={`${item.textColor} text-sm font-semibold tracking-wider uppercase`}>
              {item.label}
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-text tracking-tight">
                {item.timeout}
              </span>
            </div>

            <p className="text-sm text-text-sub leading-relaxed">
              {item.note}
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-start gap-3 rounded-md bg-highlight-soft p-4">
        <span className="inline-block w-1 h-5 bg-accent mt-1 rounded-full" />
        <p className="text-sm text-text-sub leading-relaxed">
          권장 timeout을 초과하면 작업 실패 또는 부분 결과.
          메인 agent와 협의 후 조정.
        </p>
      </div>
    </div>
  );
}

// Source: lectures/S2/lecture.md L367-375
// Type: example (활동 3-4 응답 대기 시간 데이터 누적 운영 가이드)

export default function S2Activity_3_4_DataAccumulation() {
  const parallel = [
    {
      num: '1',
      title: '수동 스크래핑 확장',
      desc: '다른 페르소나 채널이 있다면 추가 커뮤니티 1-2곳으로 확장',
    },
    {
      num: '2',
      title: '응답 즉시 답 X — 메모',
      desc: '누가 / 어떤 답 / 어떤 후속 질문이 필요한가를 기록',
    },
    {
      num: '3',
      title: '24시간 안 짧은 답',
      desc: '신뢰 유지 + 후속 인터뷰 일정을 함께 잡기',
    },
  ];

  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 3-4 · 산출물: 응답 대기 시간 동안 누적 운영
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        발송했다고 끝난 게 아니다
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        응답 대기 시간 동안 <span className="highlight-mark">세 작업을 병행</span>한다. 이 운영이 다음 단계 페인포인트 분석의 풍부한 입력이 된다.
      </p>

      {/* 3 병행 작업 */}
      <ul className="flex flex-col gap-3 max-w-5xl mb-5">
        {parallel.map((p) => (
          <li
            key={p.num}
            className="grid grid-cols-[48px_1fr] gap-4 items-center p-4 rounded-2xl border-l-4 border-accent bg-bg-soft hover:bg-success-soft hover:border-success transition-colors group"
          >
            <span className="text-accent text-2xl font-bold tabular-nums tracking-wider group-hover:text-success transition-colors">
              {p.num}
            </span>
            <div>
              <div className="text-lg font-bold text-text tracking-tight leading-snug">
                {p.title}
              </div>
              <div className="text-sm text-text-sub leading-relaxed tracking-tight mt-1">
                {p.desc}
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* 목표 상태 */}
      <div className="rounded-2xl border-l-4 border-success bg-success-soft p-4 max-w-5xl">
        <div className="text-success text-xs font-semibold tracking-wider uppercase mb-2">
          다음 단계 진입 목표 상태
        </div>
        <p className="text-base font-bold text-text leading-relaxed">
          <span className="highlight-mark">능동 답변자 1-3명의 깊은 답 + 수동 데이터 100-200건의 패턴</span>이 합쳐진 상태
        </p>
      </div>
    </>
  );
}

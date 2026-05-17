// Source: lectures/S2/lecture.md lines 171-176
// Type: terms (4행 용어 — 이론 마무리)

export default function S2TheoryC3Terms() {
  const terms = [
    { term: '메타 프롬프팅 (Meta Prompting)', definition: 'AI에게 직접 답을 시키지 않고, AI가 좋은 프롬프트를 만들게 하는 기법' },
    { term: '콜드 메일 (Cold Email)', definition: '일면식 없는 사람에게 보내는 검증 또는 세일즈 메일' },
    { term: '응답 대기 시간', definition: '메일 발송 후 답이 도착하기까지의 기간. 24-96시간이 일반적' },
    { term: '두 축 안전망', definition: '능동 응답 0건이어도 수동 데이터로 다음 단계 진입 가능한 구조' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          챕터 용어 해설 — 메타 프롬프팅과 응답률의 현실
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        핵심 용어 정리
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-6">
        이론을 실전에 옮기기 위해 다음 활동으로 이어진다.
      </p>

      <div className="grid grid-cols-2 gap-x-6 gap-y-3 max-w-5xl">
        {terms.map((t, i) => (
          <div
            key={i}
            className="border-l-2 border-accent pl-4 py-2"
          >
            <div className="text-base font-bold text-text tracking-tight leading-snug">
              {t.term}
            </div>
            <div className="text-sm text-text-sub tracking-tight leading-relaxed mt-1">
              {t.definition}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

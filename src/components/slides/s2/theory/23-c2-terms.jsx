// Source: lectures/S2/lecture.md lines 102-107
// Type: terms (4행 용어 표)

export default function S2TheoryC2Terms() {
  const terms = [
    { term: '능동 검증 (Active Validation)', definition: '직접 사람에게 묻기. 메일, DM, 인터뷰, 설문' },
    { term: '수동 검증 (Passive Validation)', definition: '이미 남긴 데이터에서 듣기. 커뮤니티 글, 리뷰, 검색량' },
    { term: '응답률 (Response Rate)', definition: '보낸 인원 대비 답한 인원의 비율. 콜드 메일은 5-15%' },
    { term: '페인포인트 신호 (Pain Signal)', definition: '사용자 글이나 리뷰에 드러난 불편의 흔적' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          챕터 용어 해설 — 검증의 두 축
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        핵심 용어 정리
      </h2>

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

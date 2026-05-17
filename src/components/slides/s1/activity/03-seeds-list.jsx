// Source: lectures/S1/lecture.md lines 493-505
// Type: terms (6행 시드 목록 표)
// D-035: emoji "⭐" 제거 → "본 실습 사용" 텍스트 라벨
// D-040: 표 형식 → inline grid table

export default function S1ActivitySeedsList() {
  const seeds = [
    { num: '1', name: '회의록 액션아이템 추출기', persona: '5-30인 스타트업 PM', value: '회의 후 30분을 5분으로', focused: false },
    { num: '2', name: '학원·스터디 출결 알림봇', persona: '학원 원장, 스터디 운영자', value: '출결 체크와 결석 알림 자동화', focused: false },
    { num: '3', name: '이력서 → 직무 적합도 진단기', persona: '신입~3년차 직장인', value: '이력서를 채용공고에 맞게 수정', focused: false },
    { num: '4', name: '식단 사진 → 영양 분석기', persona: '다이어트 중인 20-40대', value: '사진 한 장으로 칼로리 추정', focused: false },
    { num: '5', name: '소모임 정기일정 알림 자동화', persona: '동호회 총무, 소모임 리더', value: '반복 공지 카피 자동 생성', focused: false },
    { num: '6', name: '1인 셀러 상세페이지 카피 생성', persona: '1인 스마트스토어 셀러', value: '상품 사진과 키워드로 카피 작성', focused: true },
  ];

  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          시드 목록
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        6개 시드 — 1개를 선택한다
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-5">
        본 실습은 <span className="font-bold text-accent">시드 6번</span>을 일관된 예시로 사용한다.
      </p>

      {/* Header row */}
      <div className="grid grid-cols-[48px_1.8fr_1.4fr_1.6fr] gap-3 px-3 py-2 border-b border-divider max-w-5xl">
        <div className="text-text-muted text-xs font-semibold tracking-wider uppercase">#</div>
        <div className="text-text-muted text-xs font-semibold tracking-wider uppercase">시드 이름</div>
        <div className="text-text-muted text-xs font-semibold tracking-wider uppercase">페르소나</div>
        <div className="text-text-muted text-xs font-semibold tracking-wider uppercase">핵심 가치</div>
      </div>

      {/* Rows */}
      <div className="flex flex-col gap-1.5 mt-2 max-w-5xl">
        {seeds.map((s) => (
          <div
            key={s.num}
            className={`grid grid-cols-[48px_1.8fr_1.4fr_1.6fr] gap-3 items-center px-3 py-2.5 rounded-xl border transition-colors ${
              s.focused
                ? 'border-accent bg-success-soft'
                : 'border-divider bg-bg-soft hover:border-accent'
            }`}
          >
            <div className={`text-lg font-bold tabular-nums tracking-wider ${s.focused ? 'text-accent' : 'text-text-muted'}`}>
              {s.num}
            </div>
            <div className={`text-sm tracking-tight leading-snug ${s.focused ? 'font-bold text-text' : 'font-medium text-text'}`}>
              {s.name}
              {s.focused ? (
                <span className="ml-2 inline-block text-[10px] font-bold text-accent uppercase tracking-wider align-middle">
                  본 실습 사용
                </span>
              ) : null}
            </div>
            <div className={`text-sm tracking-tight leading-snug ${s.focused ? 'font-semibold text-text' : 'text-text-sub'}`}>
              {s.persona}
            </div>
            <div className={`text-sm tracking-tight leading-snug ${s.focused ? 'font-semibold text-text' : 'text-text-sub'}`}>
              {s.value}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

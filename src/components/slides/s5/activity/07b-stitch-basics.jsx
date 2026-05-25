// Source: 강사 요청 — Stitch 기본 조작 5단계 흐름 (2026-05-23 추가)
// Type: activity (process — 5 step 순차 가이드 + 좌측 메타 박스)

export default function S5ActivityStitchBasics() {
  const steps = [
    {
      n: '01',
      title: '접속 + 모드 선택',
      body: 'stitch.withgoogle.com 접속 (Google 계정).\n플랫폼: Mobile / Web 선택.\n모드: Standard (350회/월) / Experimental (50회/월).',
    },
    {
      n: '02',
      title: '필요한 UI 요소 파악',
      body: '화면에 들어갈 요소를 먼저 머릿속에 정리.\n네비게이션 / 카드 / 버튼 / 차트 / 입력 폼 등.\n빠뜨리면 placeholder로 렌더링됨.',
    },
    {
      n: '03',
      title: '상세하고 구조화된 프롬프트 작성',
      body: '한 줄짜리 "좋은 UI 만들어줘" 금지.\n목적·요소·레이아웃·스타일·데이터 5축으로 작성.\n(다음 슬라이드의 5팁 참조)',
    },
    {
      n: '04',
      title: '생성된 디자인 검토',
      body: '구성요소 누락 / 스타일 부합 / 정렬 3가지 체크.\n예상과 다르면 다음 단계로.',
    },
    {
      n: '05',
      title: '프롬프트 수정 → 반복 개선',
      body: '전면 재생성보다 부분 수정 권장.\n검토에서 발견한 갭만 프롬프트에 반영해 재요청.\n3~5회 반복으로 합격선 도달.',
    },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          0.5-2 · Stitch 기본 조작 5단계 흐름
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        접속부터 반복 개선까지 — <span className="highlight-mark">5단계</span>
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        Step 3에서 실제 시안 생성 시 이 5단계를 그대로 적용. 사전에 도구 친숙도 확보가 목적.
      </p>

      <div className="grid grid-cols-5 gap-3 max-w-6xl">
        {steps.map((s) => (
          <div key={s.n} className="border border-divider rounded p-4 bg-bg-soft">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-accent text-base font-bold tabular-nums tracking-wider">
                {s.n}
              </span>
              <span className="text-sm font-semibold text-text leading-snug">
                {s.title}
              </span>
            </div>
            <p className="text-xs text-text-sub leading-relaxed whitespace-pre-line">
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

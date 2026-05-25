// Source: 강사 요청 — Stitch 좋은 프롬프트 작성 5팁 (2026-05-23 추가)
// Type: activity (5-card grid + 우측 예시 pre 블록)

export default function S5ActivityStitchPromptTips() {
  const tips = [
    {
      n: '1',
      title: '목적 정의',
      meaning: '화면 유형 명시',
      example: '"대시보드" / "로그인" / "결제 화면"',
    },
    {
      n: '2',
      title: '핵심 UI 요소 나열',
      meaning: '버튼·카드·차트·아이콘 구체적으로',
      example: '"상단 검색 바 + 4개 카드 + 하단 차트"',
    },
    {
      n: '3',
      title: '레이아웃 구조 제시',
      meaning: '배치 용어로 명시',
      example: '"2열 그리드" / "수평 스크롤" / "수직 스택"',
    },
    {
      n: '4',
      title: '스타일과 테마',
      meaning: '시각 요소 명시',
      example: '"다크테마 + 둥근 모서리 + 모던 산세리프"',
    },
    {
      n: '5',
      title: '동적 콘텐츠 포함',
      meaning: '데이터 구체화',
      example: '"코인 이름·가격·24h 변화율(녹·적색)"',
    },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          0.5-3 · 좋은 프롬프트 작성 5축
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        프롬프트는 <span className="highlight-mark">5축</span>으로 구조화
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        모호한 한 줄은 결과도 모호. 5축을 모두 명시하면 1회 생성으로 합격선 가까운 시안 확보.
      </p>

      <div className="grid grid-cols-5 gap-3 max-w-6xl">
        {tips.map((t) => (
          <div key={t.n} className="border border-divider rounded p-4">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-xl border-2 border-accent text-accent text-sm font-bold tabular-nums">
                {t.n}
              </span>
              <span className="text-sm font-bold text-text leading-snug">
                {t.title}
              </span>
            </div>
            <p className="text-xs text-text-sub leading-relaxed mb-3">
              {t.meaning}
            </p>
            <pre className="text-xs text-text bg-bg-soft rounded px-2 py-2 leading-relaxed whitespace-pre-wrap border border-divider">{t.example}</pre>
          </div>
        ))}
      </div>
    </>
  );
}

// Source: lectures/S3/lecture.md lines 807-835 (1-3 페인포인트 추출 메뉴 + 시드 6 결과 통합)
// Type: activity (inline 2-area — 좌 메뉴 4 STEP + 프롬프트 / 우 시드 6 추출 결과 5개)
// D-044 §3.2: 추출 결과는 painpoints.md로 정리 (Step 4-2 연결)

export default function S3Activity_1_3_Painpoints() {
  const menu = [
    '중앙 하단 채팅 입력창 클릭',
    '프롬프트 입력 (아래)',
    'Enter 또는 보내기 아이콘 클릭',
    '답변에 페인포인트 5개와 [1] [2] 인용 표시 확인',
  ];

  const seedResults = [
    { n: '1', text: '카피 차별화 부족 → 검색 노출 순위 하락', cite: '[3], [7]', strong: true },
    { n: '2', text: '카피 작성 시간 상품당 1-2시간', cite: '[2], [9], [12]', strong: false },
    { n: '3', text: '외주 비용 부담 (크몽 건당 3-10만원)', cite: '[5], [14]', strong: false },
    { n: '4', text: '광고비 의존도 → 광고 멈추면 노출 끊김', cite: '[4], [11]', strong: false },
    { n: '5', text: '경쟁사 카피 모방 시 차별화 실패', cite: '[8], [13]', strong: false },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 1-3 · 산출물: 페인포인트 5개 + 출처
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        페인포인트 추출 — 메뉴 + 시드 6 결과
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-4 max-w-4xl">
        다음 단계 <span className="highlight-mark">painpoints.md</span>로 정리한다 (Step 4-2 연결).
      </p>

      <div className="grid grid-cols-2 gap-8 max-w-6xl">
        <div>
          <div className="text-base font-semibold text-text-sub mb-3">
            메뉴 조작
          </div>
          <ol className="space-y-3 mb-4">
            {menu.map((m, i) => (
              <li key={i} className="flex gap-3 text-base">
                <span className="font-bold text-accent w-6 shrink-0">{i + 1}</span>
                <span className="text-text leading-relaxed">{m}</span>
              </li>
            ))}
          </ol>
          <div className="rounded border-l-2 border-accent bg-bg-soft p-4">
            <div className="text-sm font-semibold text-text-sub mb-2">
              프롬프트
            </div>
            <p className="text-sm text-text leading-relaxed">
              "이 자료에서 가장 자주 등장하는 불만은? 출처 인용과 함께 답해줘"
            </p>
          </div>
        </div>

        <div>
          <div className="text-base font-semibold text-text-sub mb-3">
            시드 6번 추출 결과
          </div>
          <div className="space-y-2">
            {seedResults.map((r, i) => (
              <div
                key={i}
                className={`flex items-baseline gap-3 px-3 py-2.5 rounded border ${r.strong ? 'border-accent bg-bg-soft' : 'border-divider'}`}
              >
                <span className={`font-bold text-base w-5 shrink-0 ${r.strong ? 'text-accent' : 'text-text-sub'}`}>{r.n}</span>
                <span className="text-sm text-text leading-relaxed flex-1">{r.text}</span>
                <span
                  className={`text-xs shrink-0 ${r.strong ? 'text-accent font-bold bg-success-soft border border-accent rounded px-2 py-0.5' : 'text-text-sub'}`}
                >
                  {r.cite}
                </span>
              </div>
            ))}
            <p className="text-sm text-text mt-3 font-medium border-l-2 border-accent pl-3">
              가장 강한 신호: <span className="text-accent font-bold">1번</span> — 인용 2건이 다른 항목보다 많아 빈도 신호가 가장 명확
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

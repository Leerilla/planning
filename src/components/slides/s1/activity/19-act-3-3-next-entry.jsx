// Source: lectures/S1/lecture.md lines 925-946
// Type: example (활동 3-3 — 다음 단계 진입 점검)
// D-035: emoji ✅ → 텍스트 (체크박스 dot)

export default function S1Activity_3_3_NextEntry() {
  const assets = [
    {
      title: '완성된 1차 가설 워크시트',
      detail: '문제 정의 5줄 + 가설 페르소나 6줄 + 핵심 가설 3개',
    },
    {
      title: '검증 가능 채널 1-3개',
      detail: '네이버 카페, 셀러 커뮤니티, 본인 주변 페르소나 등',
    },
    {
      title: '1차 리서치 정리',
      detail: '검증된 페인포인트 1-3개 (출처 URL 포함)',
    },
  ];

  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 3-3 · 5분 · 산출물: 진입 자산 점검
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        다음 단계 진입 자산 3개
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        세 자산 중 하나라도 비어 있으면 <span className="highlight-mark">과제에서 그것부터 채운다.</span>
      </p>

      {/* 3 자산 카드 */}
      <ul className="flex flex-col gap-3 max-w-5xl">
        {assets.map((a, i) => (
          <li
            key={i}
            className="grid grid-cols-[40px_32px_1fr] gap-3 items-start p-4 rounded-2xl border-l-4 border-success bg-success-soft hover:bg-bg-soft transition-colors group"
          >
            <span className="text-success text-xl font-bold tabular-nums tracking-wider mt-0.5">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="flex items-center justify-center w-7 h-7 rounded-xl border-2 border-success bg-bg-soft mt-0.5">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-success" />
            </span>
            <div>
              <div className="text-base font-bold text-text leading-snug">
                {a.title}
              </div>
              <div className="text-sm text-text-sub leading-relaxed mt-1">
                {a.detail}
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* 결론 */}
      <div className="border-l-4 border-warning pl-5 mt-5 max-w-5xl">
        <p className="text-sm font-bold text-text leading-relaxed">
          다음 단계 첫 활동 = 메일 카피 작성. <span className="highlight-mark">카피의 후크(첫 줄)에 1차 가설이 한 줄로 들어간다.</span> 한 줄로 압축할 수 없는 가설은 1단계로 돌아가야 한다.
        </p>
      </div>
    </>
  );
}

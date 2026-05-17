// Source: lectures/S3/lecture.md lines 993-1020 (2-5 핵심 기능 좁히기 + 시드 6 3개 기능)
// Type: activity (inline 2-area — 좌 메뉴 4 STEP / 우 시드 6 3개 기능 표)

export default function S3Activity_2_5_Narrow() {
  const features = [
    { n: '1', feat: '상품 사진 + 키워드 입력', map: '입력' },
    { n: '2', feat: '카테고리별 차별화 카피 3개 생성', map: '차별화 (가장 강함)' },
    { n: '3', feat: '스마트스토어 형식 텍스트 출력', map: '출력' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 2-5 · 산출물: 핵심 기능 3개 + 제약사항
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        핵심 기능 좁히기 — 메뉴 + 시드 6 3개 기능
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-4 max-w-4xl">
        나머지 기능은 <span className="highlight-mark">"제약사항: 본 MVP에서 제외"</span>로 이동.
      </p>

      <div className="grid grid-cols-2 gap-8 max-w-6xl">
        <div>
          <div className="text-base font-semibold text-text-sub mb-3">
            메뉴 조작 — 4 STEP
          </div>
          <ol className="space-y-3">
            <li className="flex gap-3 text-base">
              <span className="font-bold text-accent w-6 shrink-0">1</span>
              <span className="text-text leading-relaxed">"핵심 기능" 섹션 클릭</span>
            </li>
            <li className="flex gap-3 text-base">
              <span className="font-bold text-accent w-6 shrink-0">2</span>
              <span className="text-text leading-relaxed">자동 생성 5-7개 기능 확인</span>
            </li>
            <li className="flex gap-3 text-base">
              <span className="font-bold text-accent w-6 shrink-0">3</span>
              <span className="text-text leading-relaxed">3개 이하로 좁힘 (입력 1 + 처리 1 + 출력 1)</span>
            </li>
            <li className="flex gap-3 text-base">
              <span className="font-bold text-accent w-6 shrink-0">4</span>
              <span className="text-text leading-relaxed">나머지를 "제약사항"으로 이동</span>
            </li>
          </ol>
        </div>

        <div>
          <div className="text-base font-semibold text-text-sub mb-3">
            시드 6번 3개 기능
          </div>
          <div className="rounded border border-line overflow-hidden">
            {features.map((f, i) => (
              <div
                key={i}
                className={`grid grid-cols-[50px_2fr_1.4fr] ${i < features.length - 1 ? 'border-b border-line' : ''}`}
              >
                <div className="px-3 py-3 text-xl font-bold text-accent text-center">{f.n}</div>
                <div className="px-4 py-3 text-base text-text font-medium border-l border-line">{f.feat}</div>
                <div className="px-4 py-3 text-sm text-text-sub border-l border-line">{f.map}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// Source: lectures/S3/lecture.md lines 637-643 (시드 6번 3개 구성)
// Type: example (3-row 표 — 시드 6 실제 적용 예시)

export default function S3TheoryC5SeedThree() {
  const rows = [
    { n: '1', feat: '상품 사진 + 키워드 입력', map: '입력 단계' },
    { n: '2', feat: '카테고리별 차별화 카피 3개 생성', map: '차별화 (가장 강한 페인포인트)' },
    { n: '3', feat: '스마트스토어 형식 텍스트 출력', map: '출력 단계' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          시드 6번 3개 구성
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        1인 스마트스토어 셀러 카피 도구의 핵심 3
      </h2>

      <p className="text-base text-text-sub mb-6 max-w-3xl">
        시드 6번을 표준 3개 구성에 적용한 결과.
      </p>

      <div className="rounded border border-line overflow-hidden max-w-5xl">
        <div className="grid grid-cols-[60px_2fr_1.4fr] bg-bg-soft border-b border-line">
          <div className="px-5 py-3 text-sm uppercase tracking-wider text-text-sub text-center">#</div>
          <div className="px-5 py-3 text-sm uppercase tracking-wider text-text-sub border-l border-line">기능</div>
          <div className="px-5 py-3 text-sm uppercase tracking-wider text-text-sub border-l border-line">페인포인트 매핑</div>
        </div>
        {rows.map((r, i) => (
          <div
            key={i}
            className={`grid grid-cols-[60px_2fr_1.4fr] ${i < rows.length - 1 ? 'border-b border-line' : ''}`}
          >
            <div className="px-5 py-4 text-2xl font-bold text-accent text-center">{r.n}</div>
            <div className="px-5 py-4 text-base text-text font-medium border-l border-line">{r.feat}</div>
            <div className="px-5 py-4 text-base text-text-sub border-l border-line">{r.map}</div>
          </div>
        ))}
      </div>
    </>
  );
}

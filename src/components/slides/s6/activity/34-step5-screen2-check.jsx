// Source: lectures/S6/lecture.md lines 1122-1128 (#### 5-4. 화면 2 동작 3요소 점검)
// Type: comparison (3-row table with status markers)
// Profile: hierarchical / comparison / medium-high / balanced
// D-011: ✓ → "완료" 텍스트 변환 / → → "에서 ~로" 자연어 변환

export default function S6ActivityStep5Screen2Check() {
  const rows = [
    {
      element: '1. 페이지 뜸',
      status: '결과 화면 표시',
      marker: '완료',
    },
    {
      element: '2. 인터랙션',
      status: '화면 1에서 화면 2로 라우팅',
      marker: '완료',
    },
    {
      element: '3. 반응',
      status: '카피 3개 표시, 복사 버튼 작동',
      marker: '완료',
    },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 5-4 · 점검
        </span>
      </div>

      <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-1">
        5-4. 화면 2 동작 3요소 점검
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-8 max-w-4xl">
        화면 2의 수직 슬라이스 완성
      </p>

      <div className="max-w-4xl">
        {rows.map((row, idx) => (
          <div
            key={idx}
            className={`grid grid-cols-[200px_1fr_120px] gap-6 px-7 py-6 items-center ${
              idx < rows.length - 1 ? 'border-b border-divider' : ''
            }`}
          >
            <div className="text-sm font-semibold text-text">
              {row.element}
            </div>
            <div className="text-base font-medium text-text-sub">
              {row.status}
            </div>
            <div className="text-sm font-bold text-status-success text-center">
              {row.marker}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 max-w-4xl border-l-4 border-accent bg-bg-soft px-7 py-5 rounded-r-md">
        <p className="text-sm font-medium text-text mb-2">
          각 단계 완료 확인이 화면 2 동작 보증.
        </p>
        <p className="text-xs font-medium text-text-sub leading-relaxed">
          Issue #5-#10 모두 통과 시 화면 2 정상 동작이 보장된다.
        </p>
      </div>
    </>
  );
}

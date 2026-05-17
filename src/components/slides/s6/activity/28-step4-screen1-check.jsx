// Source: lectures/S6/lecture.md lines 1057-1065 (#### 4-5. 화면 1 동작 3요소 점검)
// Type: comparison (3-row table with status markers)
// Profile: hierarchical / comparison / medium-high / balanced
// Emphasis: key-message (수직 슬라이스 완성)
// D-011: ✓ → "완료" 텍스트 변환

export default function S6ActivityStep4Screen1Check() {
  const rows = [
    {
      element: '1. 페이지 뜸',
      status: '입력 폼 표시',
      marker: '완료',
    },
    {
      element: '2. 인터랙션',
      status: '사진 업로드 + 키워드 입력',
      marker: '완료',
    },
    {
      element: '3. 반응',
      status: '생성 버튼 누름 시 콘솔 출력',
      marker: '완료',
    },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 4-5 · 점검
        </span>
      </div>

      <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-1">
        4-5. 화면 1 동작 3요소 점검
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-8 max-w-4xl">
        화면 1의 수직 슬라이스 완성
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
          각 단계 완료 확인이 화면 1 동작 보증.
        </p>
        <p className="text-xs font-medium text-text-sub leading-relaxed">
          Issue #2, #3, #4 모두 통과 시 화면 1 정상 동작이 보장된다.
        </p>
      </div>
    </>
  );
}

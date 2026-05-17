// Source: lectures/S4/lecture.md lines 644-662 (1-3 작업자 수정 원칙 + 시드 6 수정 후)
// Type: activity (inline 2-area — 원칙 표 + 시드 6 1영역)

export default function S4Activity_1_3_Revise() {
  const principles = [
    { p: '수용', m: 'AI가 PRD 기반 정확히 짚은 부분' },
    { p: '거부', m: '작업자가 의도적으로 뺀 내용' },
    { p: '수정', m: 'AI 제안을 일부만 적용' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 1-3 · 산출물: 작업자 수정 후 CLAUDE.md
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        작업자 수정 원칙 + 시드 6 1영역 정제
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-4 max-w-4xl">
        AI 제안을 그대로 받지 않는다. <span className="highlight-mark">3 원칙</span>으로 선택적 적용.
      </p>

      <div className="grid grid-cols-2 gap-5 max-w-6xl">
        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2">
            수정 3 원칙
          </div>
          <div className="rounded border border-line overflow-hidden">
            {principles.map((r, i) => (
              <div
                key={i}
                className={`grid grid-cols-[80px_1fr] ${i < principles.length - 1 ? 'border-b border-line' : ''}`}
              >
                <div className="px-3 py-3 text-base text-text font-bold">{r.p}</div>
                <div className="px-3 py-3 text-sm text-text-sub border-l border-line">{r.m}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2">
            시드 6번 1영역 정제 결과
          </div>
          <pre className="text-sm text-text bg-bg-soft rounded p-3 leading-relaxed whitespace-pre-wrap border border-line">{`월 매출 100-500만원 규모의
1인 스마트스토어 셀러를 위한
차별화 카피 자동 생성 도구.
상품 사진과 키워드 5개를 입력하면
카테고리별 차별화 카피 3개 후보를
5초 이내에 생성.
성공 지표: 카피 작성 시간 1-2시간 → 5분 이내,
         카피 후보 사용률 70% 이상.`}</pre>
        </div>
      </div>
    </>
  );
}

// Source: lectures/S5/lecture.md lines 904-912 (5-1 셀프 리뷰 5개 점검)
// Type: activity (5-card check)

export default function S5Activity_5_1_SelfReview() {
  const items = [
    { n: '1', title: '페르소나 일치', signal: '1인 셀러' },
    { n: '2', title: '코딩 가이드 준수', signal: 'camelCase 등' },
    { n: '3', title: '제약사항 위반 없음', signal: '모바일 코드 X' },
    { n: '4', title: '폴더 구조 원칙', signal: 'rules/architecture.md 준수' },
    { n: '5', title: '다음 Task 로직 미리 작성 안 함', signal: '카피 생성 코드 없음' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 5-1 · 산출물: 5개 항목 직접 점검
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        셀프 리뷰 5개 점검
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        AI가 만들었다고 그냥 통과 X — <span className="highlight-mark">PRD와 CLAUDE.md를 직접 대조</span>.
      </p>

      <div className="space-y-2 max-w-5xl">
        {items.map((i, idx) => (
          <div
            key={idx}
            className="grid grid-cols-[40px_1fr_180px] gap-3 items-center p-3 border border-line rounded"
          >
            <span className="text-accent text-base font-bold tabular-nums">
              {String(idx + 1).padStart(2, '0')}
            </span>
            <span className="text-base text-text leading-snug font-semibold">{i.title}</span>
            <span className="text-sm text-text-sub border-l-2 border-accent pl-3">
              {i.signal}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

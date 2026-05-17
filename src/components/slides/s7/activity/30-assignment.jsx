// Source: lectures/S7/lecture.md L874-886 (과제)
// Type: activity (inline JSX 3-row table + aside)
// Profile: S7 실습 과제 제시 슬라이드

export default function S7Activity_Assignment() {
  const assignmentRows = [
    {
      label: '목표',
      content: '검증된 MVP 상태로 배포 단계 진입',
    },
    {
      label: '산출물',
      content: (
        <>
          통과되는 E2E 테스트, <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">scenario-verifier</code>, 자율 디버깅 경험, 시나리오 통과 보고서
        </>
      ),
    },
    {
      label: '마감',
      content: '다음 학습 단계 시작 전',
    },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 · 검증된 MVP 배포 진입
        </span>
      </div>

      <h2 className="text-4xl font-bold text-text mb-3">
        과제
      </h2>

      <p className="text-base text-text-sub mb-6">
        본 자료의 과제는 <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">assignment.md</code> 파일에 정리되어 있다.
      </p>

      <div className="max-w-5xl overflow-hidden rounded-xl border border-divider mb-6">
        <div className="grid grid-cols-[1fr_3fr] bg-bg-soft px-5 py-3 border-b border-divider">
          <div className="text-xs font-bold text-text-muted uppercase tracking-wide">항목</div>
          <div className="text-xs font-bold text-text-muted uppercase tracking-wide">내용</div>
        </div>
        {assignmentRows.map((row, idx) => (
          <div
            key={idx}
            className={`grid grid-cols-[1fr_3fr] px-5 py-3 ${
              idx < assignmentRows.length - 1 ? 'border-b border-divider' : ''
            }`}
          >
            <div className="font-bold text-text text-sm">
              {row.label}
            </div>
            <div className="text-sm text-text">
              {row.content}
            </div>
          </div>
        ))}
      </div>

      <aside className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-6 py-4 max-w-5xl">
        <p className="text-base text-text leading-relaxed">
          E2E 통과 + <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">scenario-verifier</code> 통과 두 증거가 손에 있어야 배포 단계 진입 가능.
        </p>
      </aside>
    </>
  );
}

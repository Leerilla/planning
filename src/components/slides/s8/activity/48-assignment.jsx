// Source: lectures/S8/captures/lecture.md L1615-1627 (## 과제)
// Type: activity (3-row 표 + aside)
// D-050: 표 데이터 원문 보존 / D-054: assignment.md inline code accent

export default function S8ActivityAssignment() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          과제 · 분석 인프라 + 카피 준비
        </span>
      </div>

      <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-3">
        과제
      </h2>

      <p className="text-base text-text-sub mb-6 max-w-4xl">
        본 자료의 과제는{' '}
        <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">
          assignment.md
        </code>{' '}
        파일에 정리되어 있다.
      </p>

      <div className="max-w-5xl overflow-hidden rounded-xl border border-divider mb-6">
        <div className="grid grid-cols-[160px_1fr] bg-bg-soft px-5 py-3 border-b-2 border-divider">
          <div className="text-sm font-bold text-text-muted uppercase tracking-wide">항목</div>
          <div className="text-sm font-bold text-text-muted uppercase tracking-wide">내용</div>
        </div>
        <div className="grid grid-cols-[160px_1fr] px-5 py-4 border-b border-divider">
          <div className="font-bold text-text text-sm">목표</div>
          <div className="text-text text-sm">분석 인프라 + 카피 준비, 배포 URL 안정화</div>
        </div>
        <div className="grid grid-cols-[160px_1fr] px-5 py-4 border-b border-divider">
          <div className="font-bold text-text text-sm">산출물</div>
          <div className="text-text text-sm">
            <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">Clarity</code>{' '}
            세션 1+,{' '}
            <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">Sentry</code>{' '}
            연결, 이벤트 3개, 재피드백 메일 카피
          </div>
        </div>
        <div className="grid grid-cols-[160px_1fr] px-5 py-4">
          <div className="font-bold text-text text-sm">마감</div>
          <div className="text-text text-sm">다음 학습 단계 시작 전</div>
        </div>
      </div>

      <aside className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-6 py-4 max-w-5xl">
        <p className="text-base text-text leading-relaxed">
          공개 URL과 분석 인프라가 갖춰진 상태가 다음 단계(노출) 출발선.
        </p>
      </aside>
    </>
  );
}

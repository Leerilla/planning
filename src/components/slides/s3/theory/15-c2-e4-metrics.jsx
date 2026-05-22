// Source: lectures/S3/lecture.md lines 212-244 (요소 4 정의·양식·예시 통합)
// Type: concept (inline 2-area)

export default function S3TheoryC2E4Metrics() {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          5요소 · 4 — 성공 지표
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        성공 지표 — 측정 가능한 기준
      </h2>

      <div className="grid grid-cols-2 gap-6 max-w-6xl">
        <div className="border border-divider rounded p-6 bg-bg-soft">
          <div className="text-xs font-semibold tracking-wider uppercase text-accent mb-3">
            정의와 목적
          </div>
          <p className="text-lg text-text font-semibold mb-5 leading-relaxed border-l-2 border-accent pl-4">
            측정 불가능하면 지표가 아니다.
            <br />
            Before / After / 측정 방법 세 축으로 정의한다.
          </p>
          <ul className="space-y-2 text-base text-text-sub leading-relaxed">
            <li>· 빌드 후 검증 단계의 측정 기준</li>
            <li>· 다음 사이클 우선순위 결정</li>
            <li>· 이해관계자 간 성공 합의 기준</li>
          </ul>
        </div>

        <div className="border border-divider rounded p-6">
          <div className="text-xs font-semibold tracking-wider uppercase text-text-sub mb-3">
            양식 + 시드 6 예시 (지표 1)
          </div>
          <pre className="text-sm text-text-sub bg-bg-soft rounded p-3 mb-3 leading-relaxed whitespace-pre-wrap">{`[Before] {현재 상태의 수치}
[After] {기대하는 수치}
[측정 방법] {어떻게 측정할 것인가}`}</pre>
          <pre className="text-sm text-text bg-bg-soft border-l-2 border-accent rounded p-3 leading-relaxed whitespace-pre-wrap">{`지표 1: 카피 작성 시간
[Before] 상품당 평균 1-2시간 (수동 작성)
[After] 상품당 5분 이내 (도구 사용 후)
[측정 방법] 사용자 10명 인터뷰로 평균 측정`}</pre>
        </div>
      </div>
    </>
  );
}

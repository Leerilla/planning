// Source: lectures/S9/lecture.md L270-290 (#### 시드 6번 3단계 예시, example 3-card)
// Type: ExampleSlide

export default function S9TheoryC3Seed6Example() {
  return (
    <>
      <div className="flex flex-col h-full">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            이론 3 · 시드 6번 3단계 예시
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          시드 6번 페르소나 3단계 진화
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-6 max-w-4xl">
          가설 → 검증 → 살아있는 — 본인 시드의 진화 모범
        </p>

        {/* 3-card horizontal grid */}
        <div className="grid grid-cols-3 gap-3 max-w-6xl">
          {/* Card 1: 가설 페르소나 */}
          <div className="border border-divider bg-bg-soft rounded-xl p-4 flex flex-col">
            <div className="text-text-sub font-bold text-xs uppercase tracking-widest mb-3">
              가설 페르소나 — 자료 1
            </div>
            <div className="text-sm leading-relaxed text-text mb-3 flex-grow">
              월 매출 100-500만원<br />
              1인 스마트스토어 셀러
            </div>
            <div className="text-xs italic text-text-muted">
              → 직군과 환경 가설. 페인포인트 검증 전.
            </div>
          </div>

          {/* Card 2: 검증된 페르소나 */}
          <div className="border border-divider bg-bg-soft rounded-xl p-4 flex flex-col">
            <div className="text-text-sub font-bold text-xs uppercase tracking-widest mb-3">
              검증된 페르소나 — 자료 2-3
            </div>
            <div className="text-sm leading-relaxed text-text mb-3 flex-grow">
              월 매출 100-500만원 1인 셀러 중<br />
              <span className="font-semibold">카피 작성에 1-2시간 쓰는 사람</span>
            </div>
            <div className="text-xs italic text-text-muted">
              → 페인포인트 실재 확인. MVP 사용은 아직 모름.
            </div>
          </div>

          {/* Card 3: 살아있는 페르소나 (highlighted) */}
          <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl p-4 flex flex-col">
            <div className="text-accent font-bold text-xs uppercase tracking-widest mb-3">
              살아있는 페르소나 — 본 단계
            </div>
            <div className="text-sm leading-relaxed text-text mb-3 flex-grow">
              월 매출 100-500만원 1인 셀러 중<br />
              카피 작성에 1-2시간 쓰고,<br />
              <span className="font-semibold text-accent">
                키워드 5개 입력에서 평균 3개만 입력하는 사람.
              </span><br />
              AI 자동 생성보다 키워드 제안 + 본인 작성 선호.
            </div>
            <div className="text-xs italic text-text-muted">
              → 본인의 가설에서 일부 추가, 일부 제거.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

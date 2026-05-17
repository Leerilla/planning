// Source: lectures/S8/captures/lecture.md line 625-648
// Type: concept / default
// Phase 6 (2026-05-17): request.md #48 — 헤더 좌측 정렬 + 검증/안티 가로 배치

export default function S8TheoryC4ValidationAnti() {
  return (
    <>
      {/* Header (좌측 정렬) */}
      <div className="flex items-center gap-3 mb-3">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          이론 4 · 검증 + 기획적 운영
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        검증 체크리스트 + 기획적 운영
      </h2>
      <p className="text-sm text-text-sub mb-4 max-w-5xl">
        체크리스트 4개 + 안티 vs 기획 비교
      </p>

      {/* 가로 배치: 좌 체크리스트 + 우 안티/기획 */}
      <div className="grid grid-cols-2 gap-4 max-w-6xl">
        {/* 좌: 검증 체크리스트 */}
        <div>
          <h3 className="text-sm font-semibold text-text-sub mb-2">
            CORS 설정의 검증 체크리스트
          </h3>
          <div className="overflow-hidden rounded-xl border border-divider">
            <div className="grid grid-cols-[1fr_70px] bg-bg-soft px-4 py-2 border-b-2 border-divider">
              <div className="text-xs font-bold text-text-muted uppercase tracking-wide">항목</div>
              <div className="text-xs font-bold text-text-muted uppercase tracking-wide text-center">확인</div>
            </div>
            {[
              '본인 FE 도메인 허용',
              '로컬 개발용 허용',
              '와일드카드(*) 사용 안 함',
              '알 수 없는 도메인 차단',
            ].map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-[1fr_70px] px-4 py-2 border-b border-divider last:border-b-0 items-center"
              >
                <div className="text-sm text-text">{item}</div>
                <div className="text-accent font-bold text-center text-xs">필수</div>
              </div>
            ))}
          </div>
        </div>

        {/* 우: 안티 vs 기획 */}
        <div>
          <h3 className="text-sm font-semibold text-text-sub mb-2">
            안티패턴 vs 기획적 운영
          </h3>
          <div className="flex flex-col gap-2">
            {/* Anti-pattern */}
            <div className="border-l-4 border-warning bg-warning-soft rounded-r-xl px-4 py-2">
              <div className="text-warning font-bold text-xs uppercase tracking-widest mb-1">
                안티패턴
              </div>
              <p className="text-xs text-text leading-relaxed">
                <code className="text-warning font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-xs">
                  Access-Control-Allow-Origin: *
                </code>{' '}
                설정 → 모든 도메인 허용 → BE 무단 사용 가능
              </p>
            </div>

            {/* Best Practice */}
            <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-4 py-2">
              <div className="text-accent font-bold text-xs uppercase tracking-widest mb-1">
                기획적 운영
              </div>
              <p className="text-xs text-text leading-relaxed">
                화이트리스트로 본인 FE만 허용. 신규 도메인 추가 시 명시적으로 설정.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

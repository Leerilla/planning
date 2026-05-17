// Source: lectures/S8/captures/lecture.md line 650-657
// Type: terms
// Phase 6 (2026-05-17): request.md #49 — 좌측 정렬 통일

export default function S8TheoryC4Terms() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          이론 4 · 용어 해설
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
        4️⃣ 챕터 용어 해설
      </h2>
      <p className="text-base text-text-sub mb-6 max-w-4xl">4개 어휘 — 본 챕터의 핵심</p>

      <div className="w-full max-w-5xl overflow-hidden rounded-xl border border-divider">
        <div className="grid grid-cols-[200px_1fr] bg-bg-soft px-5 py-3 border-b-2 border-divider">
          <div className="text-sm font-bold text-text-muted uppercase tracking-wide">용어</div>
          <div className="text-sm font-bold text-text-muted uppercase tracking-wide">정의</div>
        </div>
        {[
          { term: 'CORS', definition: '다른 도메인 간 통신을 제한하는 브라우저 정책' },
          { term: '화이트리스트', definition: '허용할 도메인 명시. 그 외 차단' },
          { term: 'Cross-Origin', definition: '서로 다른 도메인. 기본 차단 대상' },
          { term: '통과 의례', definition: '첫 배포 후 누구나 만나는 CORS 에러' },
        ].map((item, idx) => (
          <div
            key={idx}
            className="grid grid-cols-[200px_1fr] px-5 py-4 border-b border-divider last:border-b-0 items-center"
          >
            <div className="font-bold text-accent text-sm">{item.term}</div>
            <div className="text-text text-sm">{item.definition}</div>
          </div>
        ))}
      </div>
    </>
  );
}

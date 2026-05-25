// Source: lectures/S8/captures/lecture.md L488-496 (#### 3 챕터 용어 해설)
// Type: terms
// D-050: 원문 보존 / D-054: Vercel, Railway, NEXT_PUBLIC_, .gitignore inline code accent
// S8 T19b (2026-05-25): 강사 요구 — 높이 축소 / 밀집도 강화 + D-035 emoji 제거 (3️⃣ → 3)

export default function S8TheoryC3Terms() {
  const rows = [
    { term: 'Vercel', def: 'FE 배포 플랫폼. Next.js와 통합 우수', code: false, bold: true },
    { term: 'Railway', def: '풀스택 배포 플랫폼. BE·DB·워커', code: false, bold: true },
    { term: 'NEXT_PUBLIC_', def: 'Next.js에서 브라우저 노출 접두사', code: true, bold: false },
    { term: '.gitignore', def: 'Git이 추적하지 않을 파일 목록', code: true, bold: false },
    { term: '자동 재배포', def: '환경 변수 변경 시 자동 트리거', code: false, bold: true },
  ];

  return (
    <div className="flex flex-col gap-3 justify-center h-full max-w-5xl">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
          <span className="text-white font-bold text-base">3</span>
        </div>
        <span className="text-text-sub font-semibold text-xs uppercase tracking-wider">
          이론 3 · 용어 해설
        </span>
      </div>

      <h2 className="text-2xl font-bold text-text leading-snug">
        챕터 용어 해설
      </h2>

      <p className="text-sm text-text-sub leading-snug">
        5개 어휘 — 본 챕터의 핵심
      </p>

      <div className="max-w-5xl overflow-hidden rounded-xl border border-divider">
        <div className="grid grid-cols-[200px_1fr] bg-bg-soft px-4 py-2 border-b-2 border-divider">
          <div className="text-xs font-bold text-text-muted uppercase tracking-wide">용어</div>
          <div className="text-xs font-bold text-text-muted uppercase tracking-wide">정의</div>
        </div>

        {rows.map((row, idx) => (
          <div
            key={idx}
            className={`grid grid-cols-[200px_1fr] px-4 py-2 ${idx < rows.length - 1 ? 'border-b border-divider' : ''}`}
          >
            <div className="text-xs text-text">
              {row.code ? (
                <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded">
                  {row.term}
                </code>
              ) : (
                <span className={row.bold ? 'font-bold text-text' : ''}>{row.term}</span>
              )}
            </div>
            <div className="text-xs text-text leading-snug">{row.def}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

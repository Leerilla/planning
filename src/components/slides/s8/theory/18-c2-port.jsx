// Source: lectures/S8/captures/lecture.md line 202-224
// Type: concept, emphasis: default
// Profile: hierarchical / comparison / balanced
// S8 T18b (2026-05-25): 강사 요구 — 화면 겹침 해소 (gap/padding/font 컴팩트화)

export default function S8T2Port({ deckMeta }) {
  return (
    <div className="flex flex-col gap-3 justify-center h-full max-w-5xl">
      {/* Header marker */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
          <span className="text-white font-bold text-base">2</span>
        </div>
        <span className="text-text-sub font-semibold text-xs uppercase tracking-wider">
          이론 2 · 3. 포트
        </span>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-text leading-snug">
        3. 포트 (Port)
      </h2>

      {/* Subtitle */}
      <p className="text-sm text-text-sub max-w-4xl leading-snug">
        서버 내부의 통신 문. 한 서버에 여러 서비스 동시 운영 가능
      </p>

      {/* Code block — local development */}
      <pre className="bg-bg-soft border border-divider rounded-xl px-4 py-3 text-xs leading-snug whitespace-pre-line max-w-4xl text-text">
        {`로컬 개발 환경:
- FE: http://localhost:3000  (3000번 문)
- BE: http://localhost:8000  (8000번 문)
       ↑
   localhost는 같은데 포트가 다름`}
      </pre>

      {/* Explanation heading */}
      <p className="text-sm font-semibold text-text-sub">
        배포 환경에서는 플랫폼이 포트 자동 관리. 본 학습에서 알아야 할 것:
      </p>

      {/* Table — 3 row × 2 col */}
      <div className="max-w-3xl overflow-hidden rounded-xl border border-divider">
        {/* Header */}
        <div className="grid grid-cols-[140px_1fr] bg-bg-soft px-4 py-2 border-b-2 border-divider">
          <div className="text-xs font-bold text-text-muted uppercase tracking-wide">
            환경
          </div>
          <div className="text-xs font-bold text-text-muted uppercase tracking-wide">
            포트 처리
          </div>
        </div>

        {/* Row 1 — Local */}
        <div className="grid grid-cols-[140px_1fr] px-4 py-2 border-b border-divider">
          <div className="text-xs font-bold text-text">
            로컬
          </div>
          <div className="text-xs text-text-sub">
            직접 명시 (3000, 8000 등)
          </div>
        </div>

        {/* Row 2 — Railway */}
        <div className="grid grid-cols-[140px_1fr] px-4 py-2 border-b border-divider">
          <div className="text-xs font-bold text-accent">
            Railway
          </div>
          <div className="text-xs text-text-sub">
            <code className="text-accent font-semibold bg-bg px-1.5 py-0.5 rounded">
              PORT
            </code>
            {' '}환경 변수 자동 주입
          </div>
        </div>

        {/* Row 3 — Vercel */}
        <div className="grid grid-cols-[140px_1fr] px-4 py-2">
          <div className="text-xs font-bold text-text">
            Vercel
          </div>
          <div className="text-xs text-text-sub">
            자동 (신경 안 써도 됨)
          </div>
        </div>
      </div>

      {/* Aside */}
      <aside className="border-l-4 border-warning bg-warning-soft rounded-r-xl px-4 py-2.5 max-w-4xl">
        <p className="text-xs text-text leading-snug">
          Railway 빌드 실패의 흔한 원인: BE 코드가 고정 포트(예: 8000)를 쓰면 Railway가 못 알아봄.
          {' '}
          <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded">
            process.env.PORT
          </code>
          로 받아야 함.
        </p>
      </aside>
    </div>
  );
}

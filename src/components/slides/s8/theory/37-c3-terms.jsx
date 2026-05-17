// Source: lectures/S8/captures/lecture.md L488-496 (#### 3️⃣ 챕터 용어 해설)
// Type: terms
// D-050: 원문 보존 / D-054: Vercel, Railway, NEXT_PUBLIC_, .gitignore inline code accent

export default function S8TheoryC3Terms() {
  return (
    <div className="flex flex-col gap-6 justify-center h-full max-w-5xl">
      {/* Header marker + label */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
          <span className="text-white font-bold text-lg">3</span>
        </div>
        <span className="text-text-sub font-semibold text-xs uppercase tracking-wider">
          이론 3 · 용어 해설
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-text mb-2">
        3️⃣ 챕터 용어 해설
      </h2>

      {/* Subtitle */}
      <p className="text-base text-text-sub mb-6 leading-relaxed">
        5개 어휘 — 본 챕터의 핵심
      </p>

      {/* 5-row terms table */}
      <div className="max-w-5xl overflow-hidden rounded-xl border border-divider">
        {/* Header row */}
        <div className="grid grid-cols-[200px_1fr] bg-bg-soft px-5 py-3 border-b-2 border-divider">
          <div className="text-sm font-bold text-text-muted uppercase tracking-wide">
            용어
          </div>
          <div className="text-sm font-bold text-text-muted uppercase tracking-wide">
            정의
          </div>
        </div>

        {/* Row 1: Vercel */}
        <div className="grid grid-cols-[200px_1fr] px-5 py-4 border-b border-divider">
          <div className="font-bold text-text">Vercel</div>
          <div className="text-text">
            FE 배포 플랫폼. Next.js와 통합 우수
          </div>
        </div>

        {/* Row 2: Railway */}
        <div className="grid grid-cols-[200px_1fr] px-5 py-4 border-b border-divider">
          <div className="font-bold text-text">Railway</div>
          <div className="text-text">
            풀스택 배포 플랫폼. BE·DB·워커
          </div>
        </div>

        {/* Row 3: NEXT_PUBLIC_ */}
        <div className="grid grid-cols-[200px_1fr] px-5 py-4 border-b border-divider">
          <div className="text-text">
            <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">
              NEXT_PUBLIC_
            </code>
          </div>
          <div className="text-text">
            Next.js에서 브라우저 노출 접두사
          </div>
        </div>

        {/* Row 4: .gitignore */}
        <div className="grid grid-cols-[200px_1fr] px-5 py-4 border-b border-divider">
          <div className="text-text">
            <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">
              .gitignore
            </code>
          </div>
          <div className="text-text">
            Git이 추적하지 않을 파일 목록
          </div>
        </div>

        {/* Row 5: 자동 재배포 */}
        <div className="grid grid-cols-[200px_1fr] px-5 py-4">
          <div className="font-bold text-text">자동 재배포</div>
          <div className="text-text">
            환경 변수 변경 시 자동 트리거
          </div>
        </div>
      </div>
    </div>
  );
}

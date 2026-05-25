// Source: lectures/S8/captures/lecture.md line 226-247
// Type: concept, emphasis: default
// Profile: hierarchical / comparison / balanced
// S8 T18b (2026-05-25): 강사 요구 — 화면 겹침 해소 (gap/padding/font 컴팩트화)

export default function S8T2EnvVars({ deckMeta }) {
  return (
    <div className="flex flex-col gap-3 justify-center h-full max-w-5xl">
      {/* Header marker */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
          <span className="text-white font-bold text-base">2</span>
        </div>
        <span className="text-text-sub font-semibold text-xs uppercase tracking-wider">
          이론 2 · 4. 환경 변수
        </span>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-text leading-snug">
        4. 환경 변수
      </h2>

      {/* Subtitle */}
      <p className="text-sm text-text-sub max-w-4xl leading-snug">
        코드 밖에서 주입되는 값. 코드에 직접 적지 않고 외부에서 받음
      </p>

      {/* Code comparison sections */}
      <div className="flex flex-col gap-2 max-w-4xl">
        {/* Danger: Direct code */}
        <div className="border-l-4 border-warning bg-warning-soft rounded-r-xl px-4 py-2.5">
          <label className="text-warning font-bold text-xs uppercase tracking-widest mb-1 block">
            코드 안에 직접 — 위험
          </label>
          <pre className="bg-bg border border-divider rounded px-3 py-2 text-xs leading-snug whitespace-pre-line text-text">
            const apiKey = "sk-abc123def456..."
          </pre>
        </div>

        {/* Safe: Environment variable */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-4 py-2.5">
          <label className="text-accent font-bold text-xs uppercase tracking-widest mb-1 block">
            환경 변수 — 안전
          </label>
          <pre className="bg-bg border border-divider rounded px-3 py-2 text-xs leading-snug whitespace-pre-line text-text">
            const apiKey = process.env.OPENAI_API_KEY
          </pre>
        </div>
      </div>

      {/* Flow diagram */}
      <pre className="bg-bg-soft border border-divider rounded-xl px-4 py-3 text-xs leading-snug whitespace-pre-line max-w-4xl text-text">
        {`[Railway 대시보드 → Variables]
OPENAI_API_KEY = sk-abc123def456...
       ↓ (서버 시작 시 자동 주입)
[BE 코드] process.env.OPENAI_API_KEY로 읽음`}
      </pre>

      {/* Aside */}
      <aside className="border-l-4 border-divider bg-bg-soft rounded-r-xl px-4 py-2.5 max-w-4xl">
        <p className="text-xs text-text leading-snug">
          환경 변수의 핵심: 코드는 GitHub에 공개해도 값은 비공개. 코드에 키를 직접 쓰면 GitHub에 키가 노출된다.
        </p>
      </aside>
    </div>
  );
}

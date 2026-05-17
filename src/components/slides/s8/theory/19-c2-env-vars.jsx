// Source: lectures/S8/captures/lecture.md line 226-247
// Type: concept, emphasis: default
// Profile: hierarchical / comparison / balanced

export default function S8T2EnvVars({ deckMeta }) {
  return (
    <div className="flex flex-col gap-6 justify-center h-full max-w-5xl">
      {/* Header marker */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
          <span className="text-white font-bold text-lg">2</span>
        </div>
        <span className="text-text-sub font-semibold text-xs uppercase tracking-wider">
          이론 2 · 4. 환경 변수
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-text mb-2">
        4. 환경 변수
      </h2>

      {/* Subtitle */}
      <p className="text-base text-text-sub mb-6 max-w-4xl">
        코드 밖에서 주입되는 값. 코드에 직접 적지 않고 외부에서 받음
      </p>

      {/* Code comparison sections */}
      <div className="flex flex-col gap-3 max-w-4xl">
        {/* Danger: Direct code */}
        <div className="border-l-4 border-warning bg-warning-soft rounded-r-xl px-5 py-4">
          <label className="text-warning font-bold text-sm uppercase tracking-widest mb-2 block">
            코드 안에 직접 — 위험
          </label>
          <pre className="bg-bg border border-divider rounded-xl p-3 text-sm whitespace-pre-line text-text">
            const apiKey = "sk-abc123def456..."
          </pre>
        </div>

        {/* Safe: Environment variable */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
          <label className="text-accent font-bold text-sm uppercase tracking-widest mb-2 block">
            환경 변수 — 안전
          </label>
          <pre className="bg-bg border border-divider rounded-xl p-3 text-sm whitespace-pre-line text-text">
            const apiKey = process.env.OPENAI_API_KEY
          </pre>
        </div>
      </div>

      {/* Flow diagram */}
      <pre className="mt-4 bg-bg-soft border border-divider rounded-xl p-4 text-sm whitespace-pre-line max-w-4xl text-text">
        {`[Railway 대시보드 → Variables]
OPENAI_API_KEY = sk-abc123def456...
       ↓ (서버 시작 시 자동 주입)
[BE 코드] process.env.OPENAI_API_KEY로 읽음`}
      </pre>

      {/* Aside */}
      <aside className="mt-4 border-l-4 border-divider bg-bg-soft rounded-r-xl px-6 py-3 max-w-4xl">
        <p className="text-sm text-text leading-relaxed">
          환경 변수의 핵심: 코드는 GitHub에 공개해도 값은 비공개. 코드에 키를 직접 쓰면 GitHub에 키가 노출된다.
        </p>
      </aside>
    </div>
  );
}

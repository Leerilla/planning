// Source: lectures/S8/captures/lecture.md line 186-200
// Type: concept, emphasis: default
// Profile: hierarchical / comparison / balanced

export default function S8T2Domain({ deckMeta }) {
  return (
    <div className="flex flex-col gap-6 justify-center h-full max-w-5xl">
      {/* Header marker */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
          <span className="text-white font-bold text-lg">2</span>
        </div>
        <span className="text-text-sub font-semibold text-xs uppercase tracking-wider">
          이론 2 · 2. 도메인
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-text mb-2">
        2. 도메인 (Domain)
      </h2>

      {/* Subtitle */}
      <p className="text-base text-text-sub mb-6 max-w-4xl">
        서비스의 주소. 사람이 읽을 수 있는 형태
      </p>

      {/* Content sections */}
      <div className="flex flex-col gap-3 max-w-4xl">
        {/* FE Domain */}
        <div className="border-l-4 border-divider bg-bg-soft rounded-r-xl px-5 py-4">
          <label className="text-text-sub font-bold text-xs uppercase tracking-widest mb-2 block">
            FE 위치
          </label>
          <pre className="bg-bg border border-divider rounded-xl p-3 text-sm whitespace-pre-line text-text">
            https://myapp.vercel.app
          </pre>
          <p className="mt-2 text-xs text-text-muted">
            도메인 (FE 위치)
          </p>
        </div>

        {/* BE Domain */}
        <div className="border-l-4 border-divider bg-bg-soft rounded-r-xl px-5 py-4">
          <label className="text-text-sub font-bold text-xs uppercase tracking-widest mb-2 block">
            BE 위치
          </label>
          <pre className="bg-bg border border-divider rounded-xl p-3 text-sm whitespace-pre-line text-text">
            https://myapp-production.up.railway.app
          </pre>
          <p className="mt-2 text-xs text-text-muted">
            도메인 (BE 위치)
          </p>
        </div>
      </div>

      {/* Aside */}
      <aside className="mt-4 border-l-4 border-warning bg-warning-soft rounded-r-xl px-6 py-3 max-w-4xl">
        <p className="text-sm text-text leading-relaxed">
          도메인이 다르면 서로 다른 서비스. 본 학습은 FE와 BE의 도메인이 다르게 발급됨 → 이것이 CORS 문제의 출발점.
        </p>
      </aside>
    </div>
  );
}

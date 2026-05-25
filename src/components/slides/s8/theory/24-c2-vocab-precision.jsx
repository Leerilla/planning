// Source: lectures/S8/captures/lecture.md line 320-347
// Type: comparison, emphasis: default
// Profile: hierarchical / comparison / balanced
// S8 T19a (2026-05-25): 강사 요구 — 높이 축소 / 밀집도 강화

export default function S8T2VocabPrecision({ deckMeta }) {
  return (
    <div className="flex flex-col gap-3 justify-center h-full max-w-5xl">
      {/* Header marker */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
          <span className="text-white font-bold text-base">2</span>
        </div>
        <span className="text-text-sub font-semibold text-xs uppercase tracking-wider">
          이론 2 · 어휘의 가치
        </span>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-text leading-snug">
        어휘를 알면 명령이 정확해진다
      </h2>

      {/* Vocabulary comparison table */}
      <div className="overflow-hidden rounded-xl border border-divider max-w-5xl">
        <table className="w-full">
          <thead>
            <tr className="bg-bg-soft border-b-2 border-divider">
              <th className="px-4 py-2 text-left text-xs font-bold text-text-muted uppercase tracking-wide">어휘 없음 (모호)</th>
              <th className="px-4 py-2 text-left text-xs font-bold text-text-muted uppercase tracking-wide">어휘 있음 (정확)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-divider">
              <td className="px-4 py-2 text-xs text-warning font-semibold">"안 돼요"</td>
              <td className="px-4 py-2 text-xs text-accent font-semibold bg-accent-soft">"HTTP 요청이 CORS 에러로 차단됨"</td>
            </tr>
            <tr className="border-b border-divider">
              <td className="px-4 py-2 text-xs text-warning font-semibold">"환경 설정 어떻게 해요"</td>
              <td className="px-4 py-2 text-xs text-accent font-semibold bg-accent-soft">"Railway Variables에 OPENAI_API_KEY 추가"</td>
            </tr>
            <tr className="border-b border-divider">
              <td className="px-4 py-2 text-xs text-warning font-semibold">"빌드 안 됨"</td>
              <td className="px-4 py-2 text-xs text-accent font-semibold bg-accent-soft">"Railway 빌드 로그에 PORT 관련 에러"</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-xs text-warning font-semibold">"도메인 이상해요"</td>
              <td className="px-4 py-2 text-xs text-accent font-semibold bg-accent-soft">"FE는 vercel.app, BE는 railway.app — Cross-Origin"</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Two-block comparison */}
      <div className="flex flex-col gap-2 max-w-5xl">
        {/* Anti-pattern block */}
        <div className="border-l-4 border-warning bg-warning-soft rounded-r-xl px-4 py-2.5">
          <label className="text-warning font-bold text-xs uppercase tracking-widest mb-1 block">
            안티패턴
          </label>
          <pre className="bg-bg border border-divider rounded px-3 py-2 text-xs leading-snug whitespace-pre-line text-text">
            {`"배포가 안 돼요. 무엇이 문제일까요?"
→ AI가 추측 (10개 가능성 나열)`}
          </pre>
        </div>

        {/* Vocabulary-based operation block */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-4 py-2.5">
          <label className="text-accent font-bold text-xs uppercase tracking-widest mb-1 block">
            어휘 기반 운영
          </label>
          <pre className="bg-bg border border-divider rounded px-3 py-2 text-xs leading-snug whitespace-pre-line text-text">
            {`"Railway 빌드 단계에서 'Cannot find module' 에러.
 BE 코드의 src/lib/openai-client.js에서 발생.
 빌드 로그 풀 메시지 첨부."
→ AI가 1회 해결`}
          </pre>
        </div>
      </div>
    </div>
  );
}

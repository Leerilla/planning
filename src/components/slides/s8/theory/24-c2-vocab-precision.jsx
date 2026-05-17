// Source: lectures/S8/captures/lecture.md line 320-347
// Type: comparison, emphasis: default
// Profile: hierarchical / comparison / balanced

export default function S8T2VocabPrecision({ deckMeta }) {
  return (
    <div className="flex flex-col gap-6 justify-center h-full max-w-5xl">
      {/* Header marker */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
          <span className="text-white font-bold text-lg">2</span>
        </div>
        <span className="text-text-sub font-semibold text-xs uppercase tracking-wider">
          이론 2 · 어휘의 가치
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-text mb-2">
        어휘를 알면 명령이 정확해진다
      </h2>

      {/* Vocabulary comparison table */}
      <div className="overflow-hidden rounded-xl border border-divider mb-5 max-w-5xl">
        <table className="w-full">
          <thead>
            <tr className="bg-bg-soft border-b-2 border-divider">
              <th className="px-5 py-3 text-left text-sm font-bold text-text-muted uppercase tracking-wide">어휘 없음 (모호)</th>
              <th className="px-5 py-3 text-left text-sm font-bold text-text-muted uppercase tracking-wide">어휘 있음 (정확)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-divider">
              <td className="px-5 py-4 text-sm text-warning font-semibold">"안 돼요"</td>
              <td className="px-5 py-4 text-sm text-accent font-semibold bg-accent-soft">"HTTP 요청이 CORS 에러로 차단됨"</td>
            </tr>
            <tr className="border-b border-divider">
              <td className="px-5 py-4 text-sm text-warning font-semibold">"환경 설정 어떻게 해요"</td>
              <td className="px-5 py-4 text-sm text-accent font-semibold bg-accent-soft">"Railway Variables에 OPENAI_API_KEY 추가"</td>
            </tr>
            <tr className="border-b border-divider">
              <td className="px-5 py-4 text-sm text-warning font-semibold">"빌드 안 됨"</td>
              <td className="px-5 py-4 text-sm text-accent font-semibold bg-accent-soft">"Railway 빌드 로그에 PORT 관련 에러"</td>
            </tr>
            <tr>
              <td className="px-5 py-4 text-sm text-warning font-semibold">"도메인 이상해요"</td>
              <td className="px-5 py-4 text-sm text-accent font-semibold bg-accent-soft">"FE는 vercel.app, BE는 railway.app — Cross-Origin"</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Two-block comparison */}
      <div className="flex flex-col gap-3 max-w-5xl">
        {/* Anti-pattern block */}
        <div className="border-l-4 border-warning bg-warning-soft rounded-r-xl px-5 py-4">
          <label className="text-warning font-bold text-sm uppercase tracking-widest mb-2 block">
            안티패턴
          </label>
          <pre className="bg-bg border border-divider rounded-xl p-3 text-sm whitespace-pre-line text-text">
            {`"배포가 안 돼요. 무엇이 문제일까요?"
→ AI가 추측 (10개 가능성 나열)`}
          </pre>
        </div>

        {/* Vocabulary-based operation block */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
          <label className="text-accent font-bold text-sm uppercase tracking-widest mb-2 block">
            어휘 기반 운영
          </label>
          <pre className="bg-bg border border-divider rounded-xl p-3 text-sm whitespace-pre-line text-text">
            {`"Railway 빌드 단계에서 'Cannot find module' 에러.
 BE 코드의 src/lib/openai-client.ts에서 발생.
 빌드 로그 풀 메시지 첨부."
→ AI가 1회 해결`}
          </pre>
        </div>
      </div>
    </div>
  );
}

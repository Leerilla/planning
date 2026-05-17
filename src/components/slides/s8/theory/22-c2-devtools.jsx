// Source: lectures/S8/captures/lecture.md line 302-314
// Type: concept, emphasis: definition
// Profile: hierarchical / comparison / balanced

export default function S8T2Devtools({ deckMeta }) {
  return (
    <div className="flex flex-col gap-6 justify-center h-full max-w-5xl">
      {/* Header marker */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
          <span className="text-white font-bold text-lg">2</span>
        </div>
        <span className="text-text-sub font-semibold text-xs uppercase tracking-wider">
          이론 2 · 보너스 · F12
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-text mb-2">
        보너스: 브라우저 개발자 도구 (F12)
      </h2>

      {/* Subtitle */}
      <p className="text-base text-text-sub mb-6 max-w-4xl">
        브라우저에서 내부에서 일어나는 일을 보는 도구
      </p>

      {/* Tools table */}
      <div className="overflow-hidden rounded-2xl border border-divider mb-4 max-w-4xl">
        <table className="w-full">
          <thead>
            <tr className="bg-bg-soft border-b-2 border-divider">
              <th className="px-5 py-3 text-left text-sm font-bold text-text-muted uppercase tracking-wide">탭</th>
              <th className="px-5 py-3 text-left text-sm font-bold text-text-muted uppercase tracking-wide">용도</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-divider">
              <td className="px-5 py-4 text-sm font-bold text-accent">Console</td>
              <td className="px-5 py-4 text-sm text-text">에러 메시지 확인 (CORS 에러도 여기)</td>
            </tr>
            <tr className="border-b border-divider">
              <td className="px-5 py-4 text-sm font-bold text-text">Network</td>
              <td className="px-5 py-4 text-sm text-text">HTTP 요청·응답 추적</td>
            </tr>
            <tr>
              <td className="px-5 py-4 text-sm font-bold text-text">Application</td>
              <td className="px-5 py-4 text-sm text-text">환경 변수 노출 여부 확인</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Aside */}
      <aside className="border-l-4 border-divider bg-bg-soft rounded-r-xl px-6 py-3 max-w-4xl">
        <p className="text-sm text-text leading-relaxed">
          실습 Step 3에서 CORS 에러를 <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">Console</code> 탭에서 복사. F12 누르고 Console 클릭하는 동작이 표준.
        </p>
      </aside>
    </div>
  );
}

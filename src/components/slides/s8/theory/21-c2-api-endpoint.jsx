// Source: lectures/S8/captures/lecture.md line 279-300
// Type: concept, emphasis: definition
// Profile: hierarchical / comparison / balanced

export default function S8T2ApiEndpoint({ deckMeta }) {
  return (
    <div className="flex flex-col gap-6 justify-center h-full max-w-5xl">
      {/* Header marker */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
          <span className="text-white font-bold text-lg">2</span>
        </div>
        <span className="text-text-sub font-semibold text-xs uppercase tracking-wider">
          이론 2 · §2.6 API 엔드포인트
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-text mb-2">
        6. API 엔드포인트
      </h2>

      {/* Subtitle */}
      <p className="text-base text-text-sub mb-6 max-w-4xl">
        BE가 외부 요청을 받는 주소
      </p>

      {/* Domain vs endpoint diagram */}
      <pre className="bg-bg-soft border border-divider rounded-2xl p-4 text-sm whitespace-pre-line max-w-3xl text-text mb-4">
        {`https://my-be.up.railway.app/api/generate
       ↑                    ↑
     도메인              엔드포인트`}
      </pre>

      {/* Sub-text */}
      <p className="text-base text-text mb-3 max-w-4xl">
        엔드포인트별로 다른 일을 함:
      </p>

      {/* Endpoint list */}
      <pre className="bg-bg-soft border border-divider rounded-2xl p-4 text-sm whitespace-pre-line max-w-3xl text-text mb-4">
        {`POST /api/generate   → 카피 생성
GET  /api/history    → 이전 카피 조회
POST /api/feedback   → 피드백 받기
GET  /health         → 서버 살아있는지 확인 (헬스체크)`}
      </pre>

      {/* Aside */}
      <aside className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-6 py-3 max-w-4xl">
        <p className="text-sm text-text leading-relaxed">
          헬스체크(<code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">/health</code>) 엔드포인트: 배포 직후 BE가 살아있는지 확인하는 표준 패턴. 실습 Step 1에서 확인한다.
        </p>
      </aside>
    </div>
  );
}

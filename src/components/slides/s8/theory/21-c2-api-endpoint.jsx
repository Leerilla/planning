// Source: lectures/S8/captures/lecture.md line 279-300
// Type: concept, emphasis: definition
// Profile: hierarchical / comparison / balanced
// S8 T18c (2026-05-25): 강사 요구 — 화살표+라벨 → 표 1x2 형식
//                       헤더(도메인/엔드포인트 라벨) 배경 #3b82f680, 본문(URL) 현재 bg-bg-soft
// S8 T19a (2026-05-25): 강사 요구 — 높이 축소 / 밀집도 강화

export default function S8T2ApiEndpoint({ deckMeta }) {
  return (
    <div className="flex flex-col gap-3 justify-center h-full max-w-5xl">
      {/* Header marker */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
          <span className="text-white font-bold text-base">2</span>
        </div>
        <span className="text-text-sub font-semibold text-xs uppercase tracking-wider">
          이론 2 · API 엔드포인트
        </span>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-text leading-snug">
        6. API 엔드포인트
      </h2>

      {/* Subtitle */}
      <p className="text-sm text-text-sub max-w-4xl leading-snug">
        BE가 외부 요청을 받는 주소
      </p>

      {/* Domain vs endpoint — 표 형식 (상단 라벨 / 하단 URL) */}
      <div className="max-w-3xl overflow-hidden rounded-xl border border-divider">
        <div
          className="grid grid-cols-[1fr_1fr] border-b border-divider"
          style={{ backgroundColor: '#3b82f680' }}
        >
          <div className="px-3 py-1.5 text-xs font-bold text-text uppercase tracking-wide text-center border-r border-divider">
            도메인
          </div>
          <div className="px-3 py-1.5 text-xs font-bold text-text uppercase tracking-wide text-center">
            엔드포인트
          </div>
        </div>
        <div className="grid grid-cols-[1fr_1fr] bg-bg-soft">
          <div className="px-3 py-2 text-xs text-text font-semibold text-center border-r border-divider">
            https://my-be.up.railway.app
          </div>
          <div className="px-3 py-2 text-xs text-accent font-semibold text-center">
            /api/generate
          </div>
        </div>
      </div>

      {/* Sub-text */}
      <p className="text-sm text-text max-w-4xl">
        엔드포인트별로 다른 일을 함:
      </p>

      {/* Endpoint list */}
      <pre className="bg-bg-soft border border-divider rounded-xl px-4 py-3 text-xs leading-snug whitespace-pre-line max-w-3xl text-text">
        {`POST /api/generate   → 카피 생성
GET  /api/history    → 이전 카피 조회
POST /api/feedback   → 피드백 받기
GET  /health         → 서버 살아있는지 확인 (헬스체크)`}
      </pre>

      {/* Aside */}
      <aside className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-4 py-2.5 max-w-3xl">
        <p className="text-xs text-text leading-snug">
          헬스체크(<code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded">/health</code>) 엔드포인트: 배포 직후 BE가 살아있는지 확인하는 표준 패턴. 실습 Step 1에서 확인한다.
        </p>
      </aside>
    </div>
  );
}

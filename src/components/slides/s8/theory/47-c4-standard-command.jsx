// Source: lectures/S8/captures/lecture.md line 610-623 (#### CORS 해결 표준 명령)
// Type: example
// Phase 6 (2026-05-17): request.md #47 — 좌측 정렬 통일

export default function S8TheoryC4StandardCommand() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          이론 4 · 표준 명령
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
        CORS 해결 표준 명령
      </h2>
      <p className="text-base text-text-sub mb-6 max-w-4xl">
        BE 코드에 CORS 화이트리스트 추가 + 다른 도메인 차단 검증
      </p>

      <pre className="bg-bg-soft border border-divider rounded-xl p-5 text-sm whitespace-pre-line max-w-4xl text-text leading-relaxed">
{`이 BE 코드에 CORS 설정을 추가해줘.
허용할 FE 도메인은 https://{Vercel URL}.
로컬 개발용 http://localhost:3000도 허용해줘.

설정 후 다른 도메인에서 호출 시 차단되는지도
함께 점검해줘.`}
      </pre>

      <aside className="mt-4 border-l-4 border-accent bg-accent-soft rounded-r-xl px-6 py-3 max-w-4xl">
        <p className="text-sm text-text leading-relaxed">
          "다른 도메인 차단 확인"이 핵심. 화이트리스트가 <em>제대로 좁게 설정됐는지</em> 검증.
        </p>
      </aside>
    </>
  );
}

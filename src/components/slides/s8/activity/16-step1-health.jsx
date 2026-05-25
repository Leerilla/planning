// Source: lectures/S8/captures/lecture.md L1154-1175
// Type: Process step 1-7 (헬스체크 2-col)
// S8 T22 (2026-05-25): 강사 요구 — "명령 실행 안 됨" 수정
//                       {Railway URL} placeholder가 그대로 복사 시 실행 안 됨
//                       → placeholder 강조 색 + "실제 URL로 교체" 안내 + 컴팩트화

export default function S8ActivityStep1Health() {
  return (
    <>
      <div className="h-1 w-12 bg-accent rounded-full mb-2" />
      <p className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-2">
        활동 1-7 · 헬스체크
      </p>

      <h1 className="text-2xl font-bold text-text leading-snug mb-1">
        1-7. 헬스체크
      </h1>
      <p className="text-sm text-text-sub mb-3 max-w-5xl">
        브라우저 주소창에 발급받은 URL +{' '}
        <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded">/health</code>{' '}
        를 입력하여 응답 확인
      </p>

      <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-4 py-2.5 max-w-4xl mb-3">
        <p className="text-sm text-text leading-snug">
          <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded">
            https://{'{Railway URL}'}/health
          </code>
        </p>
      </div>

      <p className="text-xs font-semibold text-text-sub mb-1 max-w-5xl">기대 응답:</p>
      <pre className="bg-accent-soft border-l-4 border-accent rounded-r-xl px-4 py-2 text-xs leading-snug whitespace-pre-line max-w-3xl text-text">
{`{"status": "ok"}`}
      </pre>

      <aside className="mt-3 border-l-4 border-warning bg-warning-soft rounded-r-xl px-4 py-2.5 max-w-5xl">
        <p className="text-xs text-text leading-snug">
          <code className="text-accent font-semibold">/health</code> 엔드포인트가 BE에 없으면 404 응답. 그러면 Claude Code 명령: "server/에 GET <code className="text-accent font-semibold">/health</code> 엔드포인트 추가해줘. status: ok JSON 응답만."
        </p>
      </aside>
    </>
  );
}

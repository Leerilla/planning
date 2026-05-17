// Source: lectures/S8/captures/lecture.md L1354-1367
// Type: Example (3-2: 자율 디버깅 3원칙 명령)
// D-054: server/ inline code + accent

export default function S8ActivityStep3DebugCommand() {
  return (
    <>
      {/* Header marker */}
        <div className="h-1 w-12 bg-accent rounded-full mb-3" />
        <p className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-6">
          활동 3-2 · 자율 디버깅 명령
        </p>

        {/* Title and subtitle */}
        <h1 className="text-3xl font-bold text-text mb-2">
          3-2. 자율 디버깅 3원칙 명령
        </h1>
        <p className="text-base text-text-sub mb-4 max-w-4xl">
          Claude Code에 전달 — 에러 그대로 + 분석 먼저 + 결과 검증
        </p>

        {/* Pre block with command prompt */}
        <pre className="bg-bg-soft border border-divider rounded-xl p-5 text-sm whitespace-pre-line max-w-4xl text-text leading-relaxed font-inherit">
{`다음 CORS 에러를 분석해주세요:

[에러 풀 메시지 그대로 붙여넣기]

이 BE 코드(server/)에 CORS 설정을 추가해줘.
허용할 FE 도메인은 https://{Vercel URL}.
로컬 개발용 http://localhost:3000도 허용해줘.

설정 후 다른 도메인에서 호출 시 차단되는지도
함께 점검해줘. 수정 후 동작 확인까지 진행해줘.`}
        </pre>

        {/* Note: D-054 server/ is in code context above */}
    </>
  );
}

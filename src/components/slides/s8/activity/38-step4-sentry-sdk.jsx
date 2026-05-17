// Source: lectures/S8/activity lecture.md Step 4-2 (Sentry SDK)
// Type: Example (4-2: Sentry SDK 설치 명령)
// D-054: Sentry DSN inline code + accent

export default function S8ActivityStep4SentrySdk() {
  return (
    <>
      {/* Header marker */}
        <div className="h-1 w-12 bg-accent rounded-full mb-3" />
        <p className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-6">
          활동 4-2 · Sentry SDK 설치
        </p>

        {/* Title and subtitle */}
        <h1 className="text-3xl font-bold text-text mb-2">
          4-2. Sentry SDK 설치 명령
        </h1>
        <p className="text-base text-text-sub mb-4 max-w-4xl">
          Claude Code에 전달 — FE/BE 양쪽 초기화
        </p>

        {/* Pre block with Claude Code prompt */}
        <pre className="bg-bg-soft border border-divider rounded-xl p-5 text-sm whitespace-pre-line max-w-4xl text-text leading-relaxed font-inherit">
{`프로젝트 FE와 BE에 Sentry SDK를 설치하고 초기화해줘.

Sentry DSN:
- FE: [FE DSN 그대로 붙여넣기]
- BE: [BE DSN 그대로 붙여넣기]

에러 발생 시 다음 컨텍스트도 전송하도록 설정:
- 사용자가 있던 페이지 URL
- 클릭한 버튼이나 입력값 (개인정보 제외)
- BE의 경우 어느 API 엔드포인트인지

테스트 에러를 한 번 발생시켜 Sentry 대시보드에
도착하는지도 확인해줘.`}
        </pre>
    </>
  );
}

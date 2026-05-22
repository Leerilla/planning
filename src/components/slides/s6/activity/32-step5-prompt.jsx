// Source: lectures/S6/lecture.md lines 1085-1104 (#### 5-2. Issue #5 빌드 명령)
// Type: example (code scenario, markdown prompt)
// Pattern: a24 reuse (자료 6 확장 메타 메시지)
// Profile: hierarchical / comparison / medium-high / balanced
// Emphasis: key-message (패턴 복사 메타 메시지)

export default function S6ActivityStep5Prompt() {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 5-2 · 패턴 복사
        </span>
      </div>

      <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-1">
        5-2. Issue #5 빌드 명령 (패턴 복사)
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-6 max-w-4xl">
        화면 1 명령 양식 그대로. 화면 목적과 파일명만 변경.
      </p>

      <div className="max-w-4xl">
        <pre className="bg-bg-soft px-6 py-5 rounded-xl border border-divider text-xs font-medium leading-6 text-text overflow-x-auto whitespace-pre-wrap">
          <code>{`"Issue #5를 진행해줘.
 CLAUDE.md와 rules/architecture.md를 참조해.

 PRD의 카피 생성 기능을 위한
 OpenAI API 클라이언트를 만들어줘.

 기능은 다음 두 가지:
 1. GPT-4o 모델 호출을 위한 클라이언트 초기화
 2. 환경 변수로 API 키를 읽어 클라이언트 인스턴스 export

 이 PR은 src/lib/openai-client.ts 한 파일만 수정해."`}</code>
        </pre>
      </div>

      <div className="mt-6 max-w-4xl border-l-4 border-accent bg-bg-soft px-7 py-5 rounded-r-md">
        <p className="text-xs font-medium text-text-sub leading-relaxed">
          <span className="font-semibold text-text">패턴:</span> &quot;PRD의 [화면명]을 만들어줘 / 기능은 두 가지 / 이 PR은 N파일만&quot; 양식 재사용. 작업자는 화면 목적과 파일명만 변경.
        </p>
      </div>
    </>
  );
}

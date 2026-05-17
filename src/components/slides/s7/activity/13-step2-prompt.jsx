// Source: lectures/S7/lecture.md L637-656 (2-1. 자율 디버깅 명령)
// Type: example (3원칙 명령 + aside)

export default function S7Activity_2_1_Prompt() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 2-1 · 자율 디버깅 명령
        </span>
      </div>

      <h2 className="text-3xl font-bold text-text mb-2">
        2-1. 자율 디버깅 명령 (3원칙 적용)
      </h2>
      <p className="text-base text-text-sub mb-4">
        테스트 실패 시 Claude Code 세션 명령
      </p>

      <pre className="bg-bg border border-divider rounded-xl p-4 text-sm whitespace-pre-line max-w-4xl text-text leading-relaxed mb-4">
{`다음 E2E 테스트 실패 메시지를 분석해주세요:

[에러 전체 메시지를 그대로 붙여넣기]

실패 원인을 코드의 어느 부분에서 찾을 수 있는지
분석한 뒤, 수정 방안을 제시하고 적용해주세요.
수정 후 테스트를 재실행해 통과 여부를 확인해주세요.`}
      </pre>

      <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-6 py-3 max-w-4xl">
        <p className="text-sm text-text leading-relaxed">
          3원칙: 1) 에러 그대로 / 2) 분석 먼저 / 3) 결과 검증
        </p>
      </div>
    </>
  );
}

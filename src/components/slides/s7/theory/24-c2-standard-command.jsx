// Source: lectures/S7/lecture.md lines 243-253
// Type: example
// Pattern: code block with instruction text

export default function S7TheoryC2StandardCommand() {
  return (
    <div className="flex h-full flex-col gap-8 bg-bg p-12">
      {/* Header marker */}
      <div className="flex items-center gap-4">
        <div className="h-[3px] w-10 rounded-full bg-accent" />
        <span className="text-sm font-semibold uppercase tracking-wider text-accent">
          표준 명령
        </span>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-text">
        3원칙이 적용된 표준 명령
      </h1>

      {/* Code block */}
      <div className="max-w-4xl flex-1 overflow-auto rounded-xl border border-divider bg-bg-soft px-5 py-4">
        <pre className="whitespace-pre-wrap text-sm leading-relaxed text-text">
{`다음 E2E 테스트 실패 메시지를 분석해주세요:

[에러 전체 메시지를 그대로 붙여넣기]

실패 원인을 코드의 어느 부분에서 찾을 수 있는지
분석한 뒤, 수정 방안을 제시하고 적용해주세요.
수정 후 테스트를 재실행해 통과 여부를 확인해주세요.`}
        </pre>
      </div>
    </div>
  );
}

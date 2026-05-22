// Source: lectures/S5/lecture.md lines 163-174 (#### 위임 3원칙 표준 양식)
// Type: example (code block - prompt template)

export default function S5TheoryC2StandardForm() {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          위임 3원칙 표준 양식
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        3원칙을 한 명령에 담는 템플릿
      </h2>

      <p className="text-base text-text-sub mb-6 max-w-3xl">
        본 학습 모든 빌드 명령에 이 양식을 적용한다.
      </p>

      <pre className="bg-bg-soft border border-divider rounded p-5 text-sm text-text leading-relaxed max-w-4xl whitespace-pre-wrap">
{`PRD의 [화면명]을 [기술 스택]으로 만들어줘.
첨부한 시안을 참조해.

기능은 다음 두 가지:
1. [입력 요소]에 입력
2. [버튼] 클릭 시 입력값을 콘솔에 출력

실제 [핵심 로직]은 다음 단계에서 추가할 거야.`}
      </pre>

      <div className="mt-5 flex items-center gap-4 max-w-4xl text-sm text-text-sub">
        <span className="border-l-2 border-accent pl-3">범위 = 한 화면</span>
        <span className="border-l-2 border-accent pl-3">결과물 = 콘솔 출력</span>
        <span className="border-l-2 border-accent pl-3">검증 = 다음 단계 분리</span>
      </div>
    </>
  );
}

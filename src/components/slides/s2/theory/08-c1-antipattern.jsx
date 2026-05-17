// Source: lectures/S2/lecture.md lines 35-36
// Type: example (Warning bad/good — 친구 vs 페르소나 부합)
// D-035: emoji 👉 제거 → text label
// D-037: Warning level + tone + title + description + reason + avoidance 활용

import Warning from '@/components/slides/patterns/Warning';

export default function S2TheoryC1Antipattern() {
  return (
    <div className="grid grid-cols-2 gap-8 h-full items-stretch">
      {/* 안티패턴 — 왼쪽 */}
      <Warning
        level="안티패턴"
        title={`"친구한테 '쓸 것 같아?'라고 물어봤더니 다 좋다고 했어요"`}
        description="이것은 검증이 아니라 의견 수집이다."
        reason="친구는 관계 의식 + 가설 호의 답변, 측정 가능 데이터 X"
        avoidance={[
          "답변자가 페르소나 부합 X",
          '"쓸 것 같아?"는 측정 불가능 질문',
          "결과: 가설은 그대로 남는다",
        ]}
      />

      {/* 올바른 검증 — 오른쪽 */}
      <Warning
        level="올바른 검증"
        tone="good"
        title={`"페르소나에 부합하는 모르는 사람에게 '현재 X 문제를 어떻게 해결하고 있는가'를 묻고 답을 데이터로 기록한다"`}
        description="이것이 검증이다."
        reason="페르소나 부합 + 측정 가능 답 → 가설 진위 확정"
        avoidance="페르소나·질문·기록 셋이 모두 갖춰져야 한다"
      />
    </div>
  );
}

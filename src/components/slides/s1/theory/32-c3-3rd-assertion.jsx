// Source: lectures/S1/lecture.md lines 399-404
// Type: quote (KeyMessage — 세 번째 단정)
// D-037: highlight + examples 활용

import KeyMessage from '@/components/slides/patterns/KeyMessage';

export default function S1TheoryC3ThirdAssertion() {
  return (
    <KeyMessage
      eyebrow="세 번째 단정"
      message={[
        "AI가 만든 답은",
        "출처를 검증하지 않으면",
        "사용 불가하다",
      ]}
      highlight="출처를 검증하지 않으면"
      examples={[
        {
          label: "현실",
          tone: "bad",
          text: "AI 답변 5개 중 1-2개에 거짓이 섞여 있는 게 평균이다",
        },
        {
          label: "신호",
          text: "발견되지 않았다면 다행, 발견됐다면 검증 능력을 키웠다는 신호이다",
        },
      ]}
    />
  );
}

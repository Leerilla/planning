// Source: lectures/S2/lecture.md line 127
// Type: quote (KeyMessage 세 번째 단정)

import KeyMessage from '@/components/slides/patterns/KeyMessage';

export default function S2TheoryC3ThirdAssertion() {
  return (
    <KeyMessage
      eyebrow="세 번째 단정"
      message={[
        "AI에게 답을 시키지 말고,",
        "AI가 좋은 프롬프트를",
        "만들게 한다",
      ]}
      highlight="좋은 프롬프트를"
      examples={[
        {
          label: "효과",
          tone: "good",
          text: "응답률 5%대 → 10-15%대로 한 단계 상승",
        },
        {
          label: "확장",
          text: "본 학습 전체 — 카피, PRD 정제, 코드 명령 작성에 반복 적용",
        },
      ]}
    />
  );
}

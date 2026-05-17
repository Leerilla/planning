// Source: lectures/S1/lecture.md lines 279-288
// Type: quote (KeyMessage 단정)
// D-040: ### 섹션 헤더가 KeyMessage 콘텐츠 자체 → KeyMessage 패턴
// D-037: highlight + examples 활용

import KeyMessage from '@/components/slides/patterns/KeyMessage';

export default function S1TheoryC2SecondAssertion() {
  return (
    <KeyMessage
      eyebrow="두 번째 단정"
      message={[
        "AI는 기획을 대신하지 않는다",
        "기획의 속도만 바꾼다",
      ]}
      highlight="속도만 바꾼다"
      examples={[
        {
          label: "BAD",
          tone: "bad",
          text: "잘못된 가설을 빨리 검증하면 빨리 실패할 뿐이다"
        },
        {
          label: "근거",
          text: "AI가 빠르게 만드는 것과 정확하게 만드는 것은 다르다"
        },
        {
          label: "근거",
          text: "가속은 사이클의 회전 속도를 바꾸지 가설의 품질을 바꾸지 않는다"
        },
      ]}
    />
  );
}

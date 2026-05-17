// Source: lectures/S1/lecture.md lines 141-149
// Type: quote (KeyMessage 강조)
// D-037: highlight + examples 모두 활용

import KeyMessage from '@/components/slides/patterns/KeyMessage';

export default function S1TheoryC2bHypothesisKeyMessage() {
  return (
    <KeyMessage
      eyebrow="1차 가설"
      message={[
        "1차 가설은 검증 대상이지",
        "정답이 아니다",
      ]}
      highlight="검증 대상"
      examples={[
        {
          label: "BAD",
          tone: "bad",
          text: "확실한 것만 적자 — 가설 작성을 가장 많이 막는 함정"
        },
        {
          label: "GOOD",
          tone: "good",
          text: "30%만 맞아도 충분 — 1차 가설의 올바른 자세"
        },
        {
          label: "근거",
          text: (
            <>
              첫 가설이 그대로 살아남는 비율은 평균 30% 미만.
              <br />
              검증 결과 가설이 틀렸다면 그것은 실패가 아니라 학습이다.
            </>
          ),
        },
      ]}
    />
  );
}

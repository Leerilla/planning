// Source: lectures/S9/lecture.md L35-40 (자동 매핑, quote → KeyMessage)
// Type: KeyMessage (pattern: key-message)

import KeyMessage from '@/components/slides/patterns/KeyMessage';

export default function S9TheoryC1FirstAssertion() {
  return (
    <KeyMessage
      eyebrow="단정 1"
      size="sm"
      message={[
        "검증된 MVP는",
        "시장이 원하는 것과 다르다.",
      ]}
      highlight="시장이 원하는 것과 다르다"
      examples={[
        {
          label: "근거",
          text: "자료 1의 '첫 가설이 그대로 살아남는 비율은 평균 30% 미만' 통계와 직접 연결.",
        },
        {
          label: "귀결",
          text: "본 단계의 데이터가 그 차이를 처음으로 가시화한다.",
        },
      ]}
    />
  );
}

// Source: lectures/S8/captures/lecture.md (#### 5️⃣ 분석 도구)
// Type: Cover (자동 D-033 섹션 표지)

import Cover from '@/components/slides/patterns/Cover';

export default function S8TheoryC5Cover() {
  return (
    <Cover
      eyebrow="이론 5"
      title={<>분석 도구 3종<br />세 가지 다른 질문에 답하기</>}
      subtitle="Clarity / Sentry / 이벤트 추적 — 세 도구가 함께 만드는 의사결정 흐름"
      objectives={[
        '각 도구가 답하는 다른 질문 구분',
        '사용자 들어오기 전 셋업의 시점성',
        '세 도구가 왜 한 도구로 안 되는지',
        '세 도구가 함께 만드는 의사결정 흐름',
      ]}
    />
  );
}

// Source: lectures/S7/lecture.md line 18 (### 1️⃣ 통합 테스트와 E2E)
// Type: title (챕터 표지, D-033)
// D-035: "1️⃣" → "Section 1"

import Cover from '@/components/slides/patterns/Cover';

export default function S7TheoryC1Cover() {
  return (
    <Cover
      eyebrow="Section 1"
      title="통합 테스트와 E2E"
      objectives={[
        '3가지 테스트 단계를 구분한다',
        '시나리오 통과가 동작의 정의임을 인식한다',
        '화면별 동작과 시나리오 통과의 차이를 설명한다',
      ]}
    />
  );
}

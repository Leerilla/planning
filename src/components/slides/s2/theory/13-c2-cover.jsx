// Source: lectures/S2/lecture.md lines 62-64 (## 2️⃣ 챕터 표지)
// Type: title (자동 생성 D-032 S2 deviation)
// D-035: emoji "2️⃣" 제거 → "Section 2" 텍스트

import Cover from '@/components/slides/patterns/Cover';

export default function S2TheoryC2Cover() {
  return (
    <Cover
      eyebrow="Section 2"
      title="검증의 두 축: 능동과 수동"
      objectives={[
        '능동 검증과 수동 검증의 역할을 명확히 분리한다',
        '두 축이 함께 작동해야 하는 이유를 안다',
        '한 축에만 의존하는 안티패턴을 회피한다',
      ]}
    />
  );
}

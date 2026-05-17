// Source: lectures/S2/lecture.md lines 21-21 (## 1️⃣ 챕터 표지)
// Type: title (## 챕터 표지, D-032 자동 생성 S2 deviation)
// D-035: emoji "1️⃣" 제거 → "Section 1" 텍스트

import Cover from '@/components/slides/patterns/Cover';

export default function S2TheoryC1Cover() {
  return (
    <Cover
      eyebrow="Section 1"
      title="고객 검증이란 무엇인가"
      objectives={[
        '검증과 의견 수집을 한 문장으로 구분한다',
        '검증 가능한 가설 형식을 식별한다',
        '안티패턴(친구에게 묻기)을 회피한다',
      ]}
    />
  );
}

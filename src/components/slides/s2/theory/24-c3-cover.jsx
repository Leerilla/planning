// Source: lectures/S2/lecture.md line 117 (## 3️⃣ 챕터 표지)
// Type: title (자동 생성 D-032 S2 deviation)
// D-035: emoji "3️⃣" 제거 → "Section 3" 텍스트

import Cover from '@/components/slides/patterns/Cover';

export default function S2TheoryC3Cover() {
  return (
    <Cover
      eyebrow="Section 3"
      title="메타 프롬프팅과 응답률의 현실"
      objectives={[
        '메타 프롬프팅으로 카피 후보 응답률을 5%대 → 10-15%대로 끌어올린다',
        '응답률 5-15% 현실 위에서 검증을 운영한다',
        '응답률 3 요인(시간대·신뢰 표시·부담 없는 옵션)을 카피에 적용한다',
      ]}
    />
  );
}

// Source: lectures/S5/lecture.md lines 17-22 (### 1️⃣ 수직 슬라이스란 무엇인가)
// Type: title (챕터 표지, D-033)
// D-035: "1️⃣" → "Section 1"

import Cover from '@/components/slides/patterns/Cover';

export default function S5TheoryC1Cover() {
  return (
    <Cover
      eyebrow="Section 1"
      title="수직 슬라이스란 무엇인가"
      objectives={[
        '수직 슬라이스의 정의를 설명한다',
        '수평 슬라이스와의 차이를 인식한다',
        '수직 슬라이스의 4가지 이점을 이해한다',
      ]}
    />
  );
}

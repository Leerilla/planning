// Source: lectures/S5/lecture.md ## 이론 챕터 구조 (1️⃣ ~ 3️⃣)
// Type: toc (목차, D-032 자동 생성)
// D-035: emoji 1️⃣~3️⃣ 제거 → 번호 텍스트

import Objectives from '@/components/slides/patterns/Objectives';

export default function S5TheoryToc() {
  return (
    <Objectives
      eyebrow="본 자료의 구성"
      items={[
        '수직 슬라이스란 무엇인가',
        '위임 3원칙',
        'Stitch와 동작의 정의',
      ]}
    />
  );
}

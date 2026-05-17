// Source: lectures/S2/lecture.md ## 이론 챕터 구조 (1️⃣ / 2️⃣ / 3️⃣)
// Type: toc (목차, D-032 자동 생성)
// D-035: emoji 1️⃣/2️⃣/3️⃣ 제거 → 번호 텍스트 (Objectives 패턴 자동)
// Curator: Objectives 재사용 (S1과 동일)

import Objectives from '@/components/slides/patterns/Objectives';

export default function S2TheoryToc() {
  return (
    <Objectives
      eyebrow="본 자료의 구성"
      items={[
        '고객 검증이란 무엇인가',
        '검증의 두 축: 능동과 수동',
        '메타 프롬프팅과 응답률의 현실',
      ]}
    />
  );
}

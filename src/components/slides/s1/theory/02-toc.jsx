// Source: lectures/S1/lecture.md ## 이론 챕터 구조 (### 1️⃣ / 2️⃣ / 3️⃣)
// Type: toc (목차)
// Curator decision: Objectives 패턴 재사용 (번호 list — 본 자료의 구성)

import Objectives from '@/components/slides/patterns/Objectives';

export default function S1TheoryToc() {
  return (
    <Objectives
      eyebrow="본 자료의 구성"
      items={[
        '기획이란 무엇인가',
        'AI 시대 기획의 변화',
        '출처 검증의 실전',
      ]}
    />
  );
}

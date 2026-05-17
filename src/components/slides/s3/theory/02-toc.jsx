// Source: lectures/S3/lecture.md ## 이론 챕터 구조 (1️⃣ ~ 5️⃣)
// Type: toc (목차, D-032 자동 생성)
// D-035: emoji 1️⃣~5️⃣ 제거 → 번호 텍스트 (Objectives 패턴)

import Objectives from '@/components/slides/patterns/Objectives';

export default function S3TheoryToc() {
  return (
    <Objectives
      eyebrow="본 자료의 구성"
      items={[
        'PRD란 무엇인가',
        '좋은 PRD의 5요소',
        'PRD는 어떻게 만들어져 왔는가',
        'NotebookLM과 Manyfast 활용',
        'PRD 정제의 실전',
      ]}
    />
  );
}

// Source: lectures/S4/lecture.md ## 이론 챕터 구조 (1️⃣ ~ 3️⃣)
// Type: toc (목차, D-032 자동 생성)
// D-035: emoji 1️⃣~3️⃣ 제거 → 번호 텍스트

import Objectives from '@/components/slides/patterns/Objectives';

export default function S4TheoryToc() {
  return (
    <Objectives
      eyebrow="본 자료의 구성"
      items={[
        'AI 에이전트와 대화하는 법',
        'CLAUDE.md 4영역',
        'OODA 루프와 Permissions',
      ]}
    />
  );
}

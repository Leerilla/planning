// Source: lectures/S6/lecture.md L16 (자동 D-032, ## 이론 목차)
// Type: objectives (이론 4 챕터 자동 생성)
// D-035: 이론 목차 — 번호 자동 할당 (Objectives 패턴)

import Objectives from '@/components/slides/patterns/Objectives';

export default function S6TheoryToc() {
  return (
    <Objectives
      eyebrow="본 자료의 구성"
      items={[
        '확장과 자동화의 본질',
        'Agent 설계 6원칙',
        'hooks와 5개 lifecycle 이벤트',
        '자동 검증과 자동 커밋의 핵심 패턴',
      ]}
    />
  );
}

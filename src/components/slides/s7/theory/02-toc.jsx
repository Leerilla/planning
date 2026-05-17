// Source: lectures/S7/lecture.md L15 (자동 D-032, ## 이론 목차)
// Type: objectives (이론 3 챕터 자동 생성)

import Objectives from '@/components/slides/patterns/Objectives';

export default function S7TheoryToc() {
  return (
    <Objectives
      eyebrow="본 자료의 구성"
      items={[
        '통합 테스트와 E2E',
        'Playwright MCP와 자율 디버깅 3원칙',
        'docs/prd.md 기반 시나리오 검증 루프',
      ]}
    />
  );
}

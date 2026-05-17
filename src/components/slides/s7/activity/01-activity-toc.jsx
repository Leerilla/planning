// Source: lectures/S7/lecture.md L496 (자동 D-032, ## 실습 목차)
// Type: toc (실습 목차)

import Objectives from '@/components/slides/patterns/Objectives';

export default function S7ActivityToc() {
  return (
    <Objectives
      eyebrow="실습 구성"
      items={[
        'Step 0: 환경 진단',
        'Step 1: 핵심 시나리오 + E2E 테스트 작성',
        'Step 2: 자율 디버깅 루프',
        'Step 3: scenario-verifier + 검증 루프',
        'Step N: 정리와 비용 비교',
        '과제 + Tips',
      ]}
    />
  );
}

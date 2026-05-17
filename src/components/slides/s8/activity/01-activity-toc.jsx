// Source: lectures/S8/captures/lecture.md L902-920 (자동 D-032, ## 실습 목차)
// Type: Objectives

import Objectives from '@/components/slides/patterns/Objectives';

export default function S8ActivityToc() {
  return (
    <Objectives
      eyebrow="실습 구성"
      items={[
        'Step 0: 환경 진단 + 리포 구조 결정',
        'Step 1: BE 배포 (Railway) — 8단계',
        'Step 2: FE 배포 (Vercel) — 5단계',
        'Step 3: CORS 해결 (자율 디버깅)',
        'Step 4: 분석 도구 3종 셋업',
        'Step N: 정리와 비용 비교',
      ]}
    />
  );
}

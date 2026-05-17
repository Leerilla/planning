// Source: lectures/S4/lecture.md lines 445-461 (## 실습)
// Type: toc (실습 목차, D-032 자동 생성)

import Objectives from '@/components/slides/patterns/Objectives';

export default function S4ActivityToc() {
  return (
    <Objectives
      eyebrow="실습의 흐름"
      items={[
        'Step 0 — 환경 진단 (git/gh 추가)',
        'Step 1 — CLAUDE.md 협업 작성 + AI 검증 루프',
        'Step 2 — PRD 참조 + docs·rules 환경 구축',
        'Step 3 — settings.json + Permissions',
        'Step 4 — GitHub 저장소 셋업 + 초기 커밋',
        'Step N — 정리와 비용 비교',
        '과제 + Tips 6',
      ]}
    />
  );
}

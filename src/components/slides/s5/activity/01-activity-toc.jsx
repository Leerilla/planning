// Source: lectures/S5/lecture.md lines 397-417 (## 실습)
// Type: toc (실습 목차, D-032 자동 생성)

import Objectives from '@/components/slides/patterns/Objectives';

export default function S5ActivityToc() {
  return (
    <Objectives
      eyebrow="실습의 흐름"
      items={[
        'Step 0 — 환경 진단 + Stitch 점검',
        'Step 1 — 화면 분석과 Task 매칭',
        'Step 2 — GitHub Issue 등록 (화면 라벨)',
        'Step 3 — Stitch로 첫 화면 시안',
        'Step 4 — 첫 Task 빌드와 PR 워크플로',
        'Step 5 — 셀프 코드 리뷰',
        'Step N — 정리와 비용 비교',
        '과제 + Tips 5',
      ]}
    />
  );
}

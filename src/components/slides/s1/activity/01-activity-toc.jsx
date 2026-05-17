// Source: lectures/S1/lecture.md ## 실습 챕터 구조 (### 시드 + ### 활동 묶음 1-3 + ### 과제 + ### Tips)
// Type: toc (실습 목차, D-032 자동 생성)
// D-035: emoji "🌱" "⭐" 제거 → 텍스트
// Curator decision: Objectives 패턴 재사용 (theory/02-toc와 동일)

import Objectives from '@/components/slides/patterns/Objectives';

export default function S1ActivityToc() {
  return (
    <Objectives
      eyebrow="실습의 흐름"
      items={[
        '시드 아이디어 6개',
        '활동 묶음 1 — 아이디어 선택과 1차 리서치',
        '활동 묶음 2 — 워크시트 채우기',
        '활동 묶음 3 — 자기 선언과 회고',
        '과제 안내',
        'Tips — 함정과 처방',
      ]}
    />
  );
}

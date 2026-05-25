// Source: lectures/S5/lecture.md lines 484-490 (### Step 1 + 재기획)
// Type: title (섹션 표지)
// T16b (2026-05-24): "화면 분석과 Task 매칭" → "화면 설계 완료" 재기획
// T17a (2026-05-24): #12 강사 지적(텍스트 큼/디자인 안 맞음) — title·subtitle·objectives 압축
//                    + #21 a27 제거 반영해 1-9/1-10 재매핑 (a27a=1-9 docs, a27b=1-10 claude.md)

import Cover from '@/components/slides/patterns/Cover';

export default function S5ActivityStep1Cover() {
  return (
    <Cover
      eyebrow="Step 1"
      title="화면 설계 완료"
      subtitle="PRD 기능에서 화면 도출 → Stitch 시안 → docs 배치까지 한 번에"
      objectives={[
        '1-1. 화면 분석이 필요한 이유',
        '1-2 ~ 1-4. 핵심 기능 → 화면 도출 → 첫 화면 결정',
        '1-5. 화면별 prompt.md 작성',
        '1-6 ~ 1-8. Stitch 시안 생성·검토·Export',
        '1-9. 산출물 docs 배치',
        '1-10. claude.md 지침 강화',
      ]}
    />
  );
}

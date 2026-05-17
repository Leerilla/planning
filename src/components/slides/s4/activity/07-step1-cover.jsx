// Source: lectures/S4/lecture.md lines 530-536 (### Step 1)
// Type: title (섹션 표지)

import Cover from '@/components/slides/patterns/Cover';

export default function S4ActivityStep1Cover() {
  return (
    <Cover
      eyebrow="Step 1"
      title="CLAUDE.md 협업 작성과 AI 검증 루프"
      subtitle="작업자 1차 초안 + AI 개선 + 검증 통과"
      objectives={[
        '1-1. 빈 CLAUDE.md 생성 → 1차 초안 (작업자 손)',
        '1-2. AI 개선 요청 (CLAUDE.md + PRD 참조)',
        '1-3. 작업자 수정 (수용 / 거부 / 부분 적용)',
        '1-4. AI 검증 루프 (의도 일치까지 반복)',
        '1-5. 분량 점검 (200줄 미만)',
      ]}
    />
  );
}

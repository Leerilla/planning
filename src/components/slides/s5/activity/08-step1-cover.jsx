// Source: lectures/S5/lecture.md lines 484-490 (### Step 1: 화면 분석과 Task 매칭)
// Type: title (섹션 표지)

import Cover from '@/components/slides/patterns/Cover';

export default function S5ActivityStep1Cover() {
  return (
    <Cover
      eyebrow="Step 1"
      title="화면 분석과 Task 매칭"
      subtitle="PRD 핵심 기능 3개에서 화면을 도출 → 화면 단위 docs/tasks.md 재작성"
      objectives={[
        '1-1. 화면 분석이 필요한 이유',
        '1-2. PRD 핵심 기능 재확인',
        '1-3. 화면 도출 명령',
        '1-4. 첫 화면 결정 기준',
        '1-5. Task 화면 단위 재구성',
        '1-6. 화면-Task 매핑 검토',
      ]}
    />
  );
}

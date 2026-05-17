// Source: lectures/S5/lecture.md lines 779-781 (### Step 4: 첫 Task 빌드와 PR 워크플로)
// Type: title (섹션 표지)

import Cover from '@/components/slides/patterns/Cover';

export default function S5ActivityStep4Cover() {
  return (
    <Cover
      eyebrow="Step 4"
      title="첫 Task 빌드와 PR 워크플로"
      subtitle="Issue #1 → 위임 3원칙 → PR 생성 → 본인 리뷰 → 병합"
      objectives={[
        '4-1. 첫 Task 브랜치 생성',
        '4-2. 위임 3원칙 빌드 명령',
        '4-3. 결과 확인',
        '4-4. 동작 3요소 부분 점검',
        '4-5. PR 생성 명령',
        '4-6. 본인 리뷰와 병합',
      ]}
    />
  );
}

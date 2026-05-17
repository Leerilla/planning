// Source: lectures/S6/lecture.md lines 1074-1076 (### Step 5)
// Type: title (섹션 표지)
// Profile: hierarchical / comparison / medium-high / balanced

import Cover from '@/components/slides/patterns/Cover';

export default function S6ActivityStep5Cover() {
  return (
    <Cover
      eyebrow="Step 5"
      title="화면 2 빌드 (패턴 복사)"
      subtitle="Issue #5-#10을 패턴 복사로 빌드해 화면 2 완성 — 자료 6의 확장에 해당"
      objectives={[
        'Issue #5 브랜치 생성',
        'Issue #5 빌드 명령 (패턴 복사)',
        'Issue #6-#10 동일 흐름',
        '각 Task 자동화 (PostToolUse + Stop)',
        '화면 2 완성 여부 점검',
      ]}
    />
  );
}

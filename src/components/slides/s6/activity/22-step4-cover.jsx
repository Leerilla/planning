// Source: lectures/S6/lecture.md lines 991-993 (### Step 4)
// Type: title (섹션 표지)
// Profile: hierarchical / comparison / medium-high / balanced

import Cover from '@/components/slides/patterns/Cover';

export default function S6ActivityStep4Cover() {
  return (
    <Cover
      eyebrow="Step 4"
      title="화면 1 나머지 Task 빌드"
      subtitle="Issue #2, #3, #4를 자동화 흐름으로 빌드해 화면 1 동작 3요소 완성"
      objectives={[
        'Issue #2 브랜치 생성 (git flow 복습)',
        'Issue #2 빌드 명령 (프롬프트 패턴)',
        '자동화 흐름 이해 (PostToolUse + Stop 결합)',
        'Issue #2 실행 및 검증',
        '화면 1 완성 여부 점검',
      ]}
    />
  );
}

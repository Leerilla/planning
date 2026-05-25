// Source: lectures/S6/lecture.md lines 1074-1076 (### Step 5)
// Type: title (섹션 표지)
// Profile: hierarchical / comparison / medium-high / balanced
// S6 T12 (2026-05-24): 강사 요구 — "확장 / 패턴 복사" 의미 모호
//                      "자료 6의 확장" 메타 표기(A5) 제거 + 학생 친화적 설명으로 교체

import Cover from '@/components/slides/patterns/Cover';

export default function S6ActivityStep5Cover() {
  return (
    <Cover
      eyebrow="Step 5"
      title="화면 2 빌드 (패턴 복사)"
      subtitle="Step 4에서 작성한 빌드 명령 양식을 그대로 재사용 — Issue 번호와 Task 설명만 교체해 화면 2 완성"
      objectives={[
        'Issue #5 브랜치 생성',
        'Issue #5 빌드 명령 (Step 4 양식 90% 복사)',
        'Issue #6-#10 동일 흐름 반복',
        '각 Task 자동화 (PostToolUse + Stop hook)',
        '화면 2 완성 여부 점검',
      ]}
    />
  );
}

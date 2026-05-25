// Source: lectures/S5/lecture.md lines 568-586 (1-5 Task) + 재기획
// Type: title (섹션 표지)
// T16c (2026-05-24): "GitHub Issue 등록" → "Task 설계"로 재기획
//                    GitHub 부분은 Step 3로 분리. Step 2는 화면 단위 Task 그룹화에 집중

import Cover from '@/components/slides/patterns/Cover';

export default function S5ActivityStep2Cover() {
  return (
    <Cover
      eyebrow="Step 2"
      title="Task 설계 — 화면 단위 Task 그룹화"
      subtitle="Step 1에서 완성한 화면 설계를 근거로 docs/tasks.md를 화면 단위로 재구성한다"
      objectives={[
        '2-1. Task 화면 단위 재구성 명령',
        '2-2. 화면-Task 매핑 검토',
      ]}
    />
  );
}

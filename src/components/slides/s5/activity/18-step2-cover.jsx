// Source: lectures/S5/lecture.md lines 668-674 (### Step 2: GitHub Issue 등록)
// Type: title (섹션 표지)

import Cover from '@/components/slides/patterns/Cover';

export default function S5ActivityStep2Cover() {
  return (
    <Cover
      eyebrow="Step 2"
      title="GitHub Issue 등록"
      subtitle="docs/tasks.md → GitHub Issue + 화면 라벨링"
      objectives={[
        '2-1. Issue 등록 명령',
        '2-2. 라벨 확인',
      ]}
    />
  );
}

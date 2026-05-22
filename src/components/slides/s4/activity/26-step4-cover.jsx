// Source: lectures/S4/lecture.md lines 863-869 (### Step 4)
// Type: title (섹션 표지)

import Cover from '@/components/slides/patterns/Cover';

export default function S4ActivityStep4Cover() {
  return (
    <Cover
      eyebrow="Step 3"
      title="GitHub 저장소 셋업과 초기 커밋"
      subtitle="planning_project repo + 초기 셋업 첫 커밋"
      objectives={[
        '3-1. GitHub 저장소 생성 (planning_project)',
        '3-2. .gitignore 생성 (Next.js 기준, .claude/ 포함)',
        '3-3. github mcp 등록·로그인 (4 Step)',
        '3-3b. 초기 셋업 커밋 (자연어 요청)',
        '3-4. 커밋 확인 점검',
      ]}
    />
  );
}

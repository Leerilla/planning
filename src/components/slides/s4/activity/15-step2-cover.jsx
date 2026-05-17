// Source: lectures/S4/lecture.md lines 713-719 (### Step 2)
// Type: title (섹션 표지)

import Cover from '@/components/slides/patterns/Cover';

export default function S4ActivityStep2Cover() {
  return (
    <Cover
      eyebrow="Step 2"
      title="PRD 참조 지침과 초기 환경 구축"
      subtitle="docs/와 rules/ 폴더 구축 + CLAUDE.md 참조 지침"
      objectives={[
        '2-1. docs/ 폴더 (prd / persona / painpoints)',
        '2-2. rules/ 폴더 (coding-style / commit / architecture)',
        '2-3. rules/ AI에 채우게 하기',
        '2-4. CLAUDE.md 마지막에 시스템 설계 참조 지침 추가',
      ]}
    />
  );
}

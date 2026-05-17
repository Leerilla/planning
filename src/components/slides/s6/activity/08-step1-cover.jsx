// Source: lectures/S6/lecture.md line 733 (자동 D-033, ### Step 1: prd-reviewer sub-agent 작성)
// Type: title (섹션 표지)

import Cover from '@/components/slides/patterns/Cover';

export default function S6ActivityStep1Cover() {
  return (
    <Cover
      eyebrow="Step 1"
      title="prd-reviewer sub-agent 작성"
      subtitle="본 단계 목표는 6원칙을 따른 prd-reviewer 작성과 호출 테스트"
      objectives={[
        '1-1. .claude/agents 디렉토리 생성',
        '1-2. prd-reviewer.md 작성 (frontmatter 4필드 + 역할 정의)',
        '1-3. 호출 테스트 및 보고서 생성 (3카테고리 형식)',
      ]}
    />
  );
}

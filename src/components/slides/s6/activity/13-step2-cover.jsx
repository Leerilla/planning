// Source: lectures/S6/lecture.md line 818 (자동 D-033, ### Step 2: git-committer sub-agent 작성)
// Type: title (섹션 표지)

import Cover from '@/components/slides/patterns/Cover';

export default function S6ActivityStep2Cover() {
  return (
    <Cover
      eyebrow="Step 2"
      title="git-committer sub-agent 작성"
      subtitle="본 단계 목표는 자동 커밋 sub-agent 작성과 호출 테스트"
      objectives={[
        '2-1. git-committer.md 작성 (frontmatter 4필드 + 역할 정의)',
        '2-2. 호출 테스트 명령과 보고서 예시 (3단 구조)',
        '2-3. Step 2 검증 기준 (5개 항목)',
      ]}
    />
  );
}

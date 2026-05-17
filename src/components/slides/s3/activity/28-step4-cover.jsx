// Source: lectures/S3/lecture.md lines 1101-1107 (### Step 4: 빌드 프로젝트 환경 구축)
// Type: title (섹션 표지)
// D-043 + D-044: 본 Step 4가 학생 프로젝트 구조 SSOT 핵심 (planning_project/)

import Cover from '@/components/slides/patterns/Cover';

export default function S3ActivityStep4Cover() {
  return (
    <Cover
      eyebrow="Step 4"
      title="빌드 프로젝트 환경 구축"
      subtitle="prd.md를 기준으로 다음 단계 빌드 환경을 준비한다"
      objectives={[
        '4-1. 표준 폴더 구조 생성 (planning_project/)',
        '4-2. 페르소나·페인포인트를 docs/에 정리',
        '4-3. README.md 작성 (프로젝트 개요)',
        '4-4. .claude/CLAUDE.md (Claude Code 컨텍스트)',
        '4-5. 폴더 구조 최종 점검',
      ]}
    />
  );
}

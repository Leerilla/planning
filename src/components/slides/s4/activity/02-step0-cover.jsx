// Source: lectures/S4/lecture.md lines 463-465 (### Step 0: 환경 진단)
// Type: title (섹션 표지)

import Cover from '@/components/slides/patterns/Cover';

export default function S4ActivityStep0Cover() {
  return (
    <Cover
      eyebrow="Step 0"
      title="환경 진단"
      subtitle="환경 확인과 토큰 베이스라인 측정 + git/gh 추가"
      objectives={[
        '0-1. 환경 확인 명령 (node·claude·git·gh)',
        '0-2. 작업 폴더 + git 초기화 (planning_project)',
        '0-3. 토큰 베이스라인 + PRD 복사 (S3 docs/prd.md)',
      ]}
    />
  );
}

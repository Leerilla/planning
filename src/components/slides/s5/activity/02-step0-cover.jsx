// Source: lectures/S5/lecture.md lines 419-421 (### Step 0: 환경 진단)
// Type: title (섹션 표지)

import Cover from '@/components/slides/patterns/Cover';

export default function S5ActivityStep0Cover() {
  return (
    <Cover
      eyebrow="Step 0"
      title="환경 진단"
      subtitle="자료 4 환경 점검 + 토큰 베이스라인 + Stitch 점검"
      objectives={[
        '0-1. 환경 확인 명령 (node·claude·git·gh)',
        '0-2. planning_project 폴더 진입 (D-043)',
        '0-3. 자료 4 산출물 5개 점검',
        '0-4. 베이스라인과 Stitch 점검',
      ]}
    />
  );
}

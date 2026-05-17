// Source: lectures/S6/lecture.md L675 (자동 D-033, ### Step 0: 환경 진단)
// Type: title (섹션 표지)

import Cover from '@/components/slides/patterns/Cover';

export default function S6ActivityStep0Cover() {
  return (
    <Cover
      eyebrow="Step 0"
      title="환경 진단"
      subtitle="자료 5 산출물 점검 + 토큰 베이스라인"
      objectives={[
        '0-1. 환경 확인 명령 (node·claude·git·gh + planning_project)',
        '0-2. 자료 5 산출물 5개 점검',
        '0-3. 점검 명령 (docs/tasks.md, gh issue, ls)',
        '0-4. 토큰 베이스라인 (/cost 메모)',
      ]}
    />
  );
}

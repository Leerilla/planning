// Source: lectures/S3/lecture.md lines 689-691 (### Step 0: 환경 진단)
// Type: title (섹션 표지)

import Cover from '@/components/slides/patterns/Cover';

export default function S3ActivityStep0Cover() {
  return (
    <Cover
      eyebrow="Step 0"
      title="환경 진단"
      subtitle="NotebookLM·Manyfast 접속 확인과 토큰 베이스라인 측정"
      objectives={[
        '0-1. 환경 확인 명령 (node·claude)',
        '0-2. 작업 폴더 생성 (planning_project)',
        '0-3. 토큰 베이스라인 측정 (/cost)',
        '0-4. NotebookLM·Manyfast 도구 계정 점검',
      ]}
    />
  );
}

// Source: lectures/S3/lecture.md lines 886-888 (### Step 2: Manyfast PRD 초안 생성)
// Type: title (섹션 표지)
// HIGH-1 폐기: 2-1~2-5 5단계 확정 (2-6/2-7 미추가)

import Cover from '@/components/slides/patterns/Cover';

export default function S3ActivityStep2Cover() {
  return (
    <Cover
      eyebrow="Step 2"
      title="Manyfast PRD 초안 생성"
      subtitle="5요소를 갖춘 PRD를 만들고 직접 수정한다"
      objectives={[
        '2-1. 프로젝트 생성',
        '2-2. PRD 자동 생성 (NotebookLM 요약 + 페르소나 입력)',
        '2-3. 5요소 확인',
        '2-4. 모호한 표현 수정',
        '2-5. 핵심 기능 3개 이하로 좁히기',
      ]}
    />
  );
}

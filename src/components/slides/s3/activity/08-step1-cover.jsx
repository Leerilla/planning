// Source: lectures/S3/lecture.md lines 751-753 (### Step 1: NotebookLM 페인포인트 추출)
// Type: title (섹션 표지)

import Cover from '@/components/slides/patterns/Cover';

export default function S3ActivityStep1Cover() {
  return (
    <Cover
      eyebrow="Step 1"
      title="NotebookLM 페인포인트 추출"
      subtitle="시드 6번 데이터로 페인포인트 5개와 출처를 추출한다"
      objectives={[
        '1-1. 노트북 생성',
        '1-2. 데이터 업로드 (CSV + 인터뷰 + 페르소나)',
        '1-3. 페인포인트 추출 (출처 인용 포함)',
        '1-4. 인용 검증 (거짓 인용 점검)',
        '1-5. 현재 대안 파악',
      ]}
    />
  );
}

// Source: lectures/S3/lecture.md lines 1030-1032 (### Step 3: prd.md Export)
// Type: title (섹션 표지)

import Cover from '@/components/slides/patterns/Cover';

export default function S3ActivityStep3Cover() {
  return (
    <Cover
      eyebrow="Step 3"
      title="prd.md Export"
      subtitle="PRD를 마크다운으로 내보내 작업 폴더에 저장"
      objectives={[
        '3-1. Export 메뉴 조작 (Markdown 선택)',
        '3-2. 다운로드 파일을 planning_project로 이동',
        '3-3. 파일 내용 확인 (cat / Get-Content)',
        '3-4. PRD 검토 5개 점검 (export 직전)',
      ]}
    />
  );
}

// Source: lectures/S5/lecture.md lines 738-740 (### Step 3: Stitch로 첫 화면 시안)
// Type: title (섹션 표지)

import Cover from '@/components/slides/patterns/Cover';

export default function S5ActivityStep3Cover() {
  return (
    <Cover
      eyebrow="Step 3"
      title="Stitch로 첫 화면 시안"
      subtitle="화면 1의 UI 시안 생성 + export"
      objectives={[
        '3-1. Stitch 자연어 프롬프트',
        '3-2. 시안 검토와 1회 수정',
        '3-3. 시안 export',
      ]}
    />
  );
}

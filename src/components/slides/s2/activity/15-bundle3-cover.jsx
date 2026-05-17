// Source: lectures/S2/lecture.md L335
// Type: title (### 활동 묶음 3 섹션 표지)

import Cover from '@/components/slides/patterns/Cover';

export default function S2ActivityBundle3Cover() {
  return (
    <Cover
      eyebrow="활동 묶음 3"
      title="발송 채널 결정과 회고"
      subtitle="발송 직전 상태까지 준비하고, 메타 효과·스크래핑 패턴·다음 단계 자산을 점검한다."
      objectives={[
        '3-1. 발송 채널 결정 + 발송 직전 점검',
        '3-2. 회고 3 질문 — 메타·스크래핑·데이터 양',
        '3-3. 다음 단계 진입 자산 3개 점검',
        '3-4. 응답 대기 시간 동안 데이터 누적 운영',
      ]}
    />
  );
}

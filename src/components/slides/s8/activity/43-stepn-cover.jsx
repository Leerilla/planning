// Source: lectures/S8/captures/lecture.md Step N — 정리와 비용 비교 (N-1,N-2,N-3)
// Type: Title (Cover)
// Pattern: Cover direct import

import Cover from '@/components/slides/patterns/Cover';

export default function S8ActivityStepNCover() {
  return (
    <Cover
      eyebrow="Step N"
      title="정리와 비용 비교"
      subtitle="산출물 6개 확인 + /cost 비교 + 회고"
      objectives={[
        '산출물 6개 정리 (FE+BE URL + CORS + Clarity + Sentry + 이벤트)',
        '토큰 비용 비교 (/cost)',
        '회고 3 질문 (좋은 답 vs 나쁜 답)',
        '다음 단계(노출) 진입 준비 확인',
      ]}
    />
  );
}

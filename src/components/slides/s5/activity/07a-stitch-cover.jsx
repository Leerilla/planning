// Source: 강사 요청 — Step 1 진입 전 Stitch 사전 학습 신규 영역 (2026-05-23 추가)
// Type: title (섹션 표지)

import Cover from '@/components/slides/patterns/Cover';

export default function S5ActivityStitchCover() {
  return (
    <Cover
      eyebrow="Step 0.5 · 사전 학습"
      title="구글 Stitch 디자인 가이드"
      subtitle="Step 3 시안 생성을 위한 도구 친숙도 확보"
      objectives={[
        '0.5-1. Stitch란 무엇인가 (Google Labs AI UI 도구)',
        '0.5-2. 기본 조작 5단계 흐름 익히기',
        '0.5-3. 좋은 프롬프트 작성 5축',
        '0.5-4. Export 3방법 + 초보 흔한 실수',
      ]}
    />
  );
}

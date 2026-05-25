// Source: lectures/S8/captures/lecture.md L131-137 (자동 D-033, ### 2️⃣ 섹션 표지)
// Type: Cover
// D-035: emoji 제거 (텍스트로 변환)
// S8 T18a (2026-05-25): 강사 요구 — 폰트 크기 조금 낮춤 → size="sm" 적용

import Cover from '@/components/slides/patterns/Cover';

export default function S8TheoryC2Cover() {
  return (
    <Cover
      eyebrow="이론 2"
      title="이번 단위 최소 개발 지식"
      subtitle="기획자가 알아야 할 최소 개발 어휘 — 코딩이 아닌 어휘"
      objectives={[
        '본 자료의 실습이 어떤 개발 개념 위에서 흐르는지 인식',
        'HTTP·도메인·포트·환경 변수·빌드/배포·API 최소 개념',
        '막혔을 때 어디를 점검할지 추측 가능',
      ]}
      size="sm"
    />
  );
}

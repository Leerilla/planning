// Source: lectures/S9/lecture.md L369-375 (자동 D-033, ### 4️⃣ 챕터 표지)
// Type: Cover
// Pattern: Cover (섹션 표지, 자동 생성)
// Profile: hierarchical + comparison visual + balanced tone

import Cover from '@/components/slides/patterns/Cover';

export default function S9TheoryC4Cover() {
  return (
    <Cover
      eyebrow="이론 4"
      title="다음 사이클 결정과 학습 종합"
      subtitle="학습 종료 = 결정 1개 손에 쥐기 — Pivot · Persevere · Kill"
      objectives={[
        "학습 종료와 빌드 종료의 차이 인식",
        "3 갈래 결정(Pivot · Persevere · Kill)을 데이터 신호로 적용",
        "5단계 사슬의 약한 고리를 본인 데이터로 인식",
      ]}
    />
  );
}

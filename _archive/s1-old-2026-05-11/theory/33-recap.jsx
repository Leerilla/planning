// Source: lectures/S1/curation-spec.md § 1.1.1 (Slide 33 - Recap)
// Curator decision: Outro 패턴 활용 — 3가지 단정 정리
// Phase K: 이론 요약

import Outro from '@/components/slides/patterns/Outro';

export default function S1Theory33Recap() {
  return (
    <Outro
      message="이론 정리: 3가지 단정"
      summary={[
        '기능은 답, 사람과 문제는 질문 — 질문부터 시작한다',
        'AI는 기획을 대신하지 않는다 — 속도만 바꾼다',
        'AI가 만든 답은 출처를 검증하지 않으면 사용 불가'
      ]}
    />
  );
}

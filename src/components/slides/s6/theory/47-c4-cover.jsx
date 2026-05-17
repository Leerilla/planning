// Source: lectures/S6/lecture.md line 491 (### 4️⃣ 자동 검증과 자동 커밋의 핵심 패턴)
// Type: title (챕터 표지, D-033)
// D-035: "4️⃣" → "Section 4"
// Profile: hierarchical logic / comparison visual / balanced tone

import Cover from '@/components/slides/patterns/Cover';

export default function S6TheoryC4Cover() {
  return (
    <Cover
      eyebrow="Section 4"
      title="자동 검증과 자동 커밋의 핵심 패턴"
      objectives={[
        '두 핵심 패턴의 흐름을 외울 수 있다',
        '두 패턴이 결합된 한 Task 사이클을 설명한다',
        '자동화 보고에도 검증 우선주의를 적용한다',
      ]}
    />
  );
}
